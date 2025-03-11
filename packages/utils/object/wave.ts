export class WaveUtils {
  private ctx: CanvasRenderingContext2D;
  private readonly size: number;
  private readonly waveColor: string | CanvasGradient;
  private readonly bgColor: string;
  private progress: number;
  private offset: number = 0;
  private animationFrameId: number | null = null;
  private readonly waveHeight: number;
  private readonly waveLength: number;

  /**
   * 构造函数
   * @param ctx Canvas 2D 上下文
   * @param size 画布大小(宽度和高度)
   * @param waveColor 水波颜色, 可以是字符串或 CanvasGradient 对象
   * @param bgColor 背景颜色
   * @param progress 初始进度(0 ~ 100)
   * @param waveHeight 水波高度, 默认值为 2
   * @param waveLength 水波长度, 默认值为 200
   */
  constructor(
    ctx: CanvasRenderingContext2D,
    size: number,
    waveColor: string | CanvasGradient,
    bgColor: string,
    progress: number,
    waveHeight: number = 2,
    waveLength: number = 200
  ) {
    this.ctx = ctx
    this.size = size
    this.waveColor = waveColor
    this.bgColor = bgColor
    this.progress = progress
    this.waveHeight = waveHeight
    this.waveLength = waveLength
  }

  /**
   * 获取 waveColor
   * @param ctx Canvas 2D 上下文
   * @param strokeColor 颜色配置
   * @param status 状态
   * @param size 画布大小
   * @returns 颜色值或渐变对象
   */
  static getWaveColor(
    ctx: CanvasRenderingContext2D,
    strokeColor: string | { stops: [string, string] } | undefined,
    status: string,
    size: number
  ): string | CanvasGradient {
    if (typeof strokeColor === 'string') {
      return strokeColor
    }
    // 如果是渐变色对象
    if (strokeColor && typeof strokeColor === 'object' && 'stops' in strokeColor) {
      const gradient = ctx.createLinearGradient(0, 0, 0, size)  // 垂直渐变
      strokeColor.stops.forEach((stop, index) => {
        gradient.addColorStop(index, stop)
      })
      return gradient
    }
    // 默认使用 CSS 变量或回退颜色
    return getComputedStyle(document.documentElement).getPropertyValue(`--xy-${status}-color`) || '#6c757d'
  }

  /**
   * 绘制背景圆
   */
  private drawBackground() {
    const radius = this.size / 2
    this.ctx.beginPath()
    this.ctx.arc(radius, radius, radius, 0, Math.PI * 2)
    this.ctx.fillStyle = this.bgColor
    this.ctx.fill()
  }

  /**
   * 绘制水波
   */
  private drawWave() {
    const radius = this.size / 2
    const progressHeight = (this.size * this.progress) / 100

    // 清空画布
    this.ctx.clearRect(0, 0, this.size, this.size)

    // 绘制背景圆
    this.drawBackground()

    // 裁剪圆形区域
    this.ctx.beginPath()
    this.ctx.arc(radius, radius, radius, 0, Math.PI * 2)
    this.ctx.clip()

    // 绘制水波
    this.ctx.beginPath()
    for (let x = 0; x < this.size; x++) {
      const y = this.waveHeight * Math.sin((x + this.offset) * ((Math.PI * 2) / this.waveLength)) + (this.size - progressHeight)
      this.ctx.lineTo(x, y)
    }
    this.ctx.lineTo(this.size, this.size)
    this.ctx.lineTo(0, this.size)
    this.ctx.closePath()
    this.ctx.fillStyle = this.waveColor
    this.ctx.fill()
  }

  /**
   * 更新进度
   * @param progress 新的进度值(0 ~ 100)
   */
  public updateProgress(progress: number) {
    this.progress = progress
  }

  /**
   * 开始动画
   */
  public startAnimation() {
    const render = () => {
      this.drawWave()
      this.offset -= 1 // 控制水波移动速度
      this.animationFrameId = requestAnimationFrame(render)
    }
    render()
  }

  /**
   * 停止动画
   */
  public stopAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
  }
}

export const {
  getWaveColor,
} = WaveUtils