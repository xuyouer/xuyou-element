export class ElementUtils {
  /**
   * 获取元素的矩形信息
   * @param element 目标元素
   * @returns 元素的矩形信息
   */
  static getElementRect<T extends HTMLElement>(element: T): DOMRect {
    return element?.getBoundingClientRect()
  }

  /**
   * 获取元素的真实宽度(包括 padding 和 border)
   * @param element 目标元素
   * @returns 元素的真实宽度
   */
  static getElementRealWidth<T extends HTMLElement>(element: T): number {
    const rect = getElementRect(element)
    return rect?.width
  }

  /**
   * 获取元素的真实高度(包括 padding 和 border)
   * @param element 目标元素
   * @returns 元素的真实高度
   */
  static getElementRealHeight<T extends HTMLElement>(element: T): number {
    const rect = getElementRect(element)
    return rect?.height
  }


  /**
   * 获取元素的内部宽度(包括 padding, 但不包括 border)
   * @param element 目标元素
   * @returns 元素的内部宽度
   */
  static getElementClientWidth<T extends HTMLElement>(element: T): number {
    return element?.clientWidth
  }

  /**
   * 获取元素的内部高度(包括 padding, 但不包括 border)
   * @param element 目标元素
   * @returns 元素的内部高度
   */
  static getElementClientHeight<T extends HTMLElement>(element: T): number {
    return element?.clientHeight
  }

  /**
   * 获取元素的偏移宽度(包括 padding、border 和滚动条)
   * @param element 目标元素
   * @returns 元素的偏移宽度
   */
  static getElementOffsetWidth<T extends HTMLElement>(element: T): number {
    return element?.offsetWidth
  }

  /**
   * 获取元素的偏移高度(包括 padding、border 和滚动条)
   * @param element 目标元素
   * @returns 元素的偏移高度
   */
  static getElementOffsetHeight<T extends HTMLElement>(element: T): number {
    return element?.offsetHeight
  }

  /**
   * 获取元素的滚动宽度(包括隐藏部分)
   * @param element 目标元素
   * @returns 元素的滚动宽度
   */
  static getElementScrollWidth<T extends HTMLElement>(element: T): number {
    return element?.scrollWidth
  }

  /**
   * 获取元素的滚动高度(包括隐藏部分)
   * @param element 目标元素
   * @returns 元素的滚动高度
   */
  static getElementScrollHeight<T extends HTMLElement>(element: T): number {
    return element?.scrollHeight
  }

  /**
   * 获取元素相对于父元素的横向偏移量
   * @param element 目标元素
   * @returns 横向偏移量
   */
  static getElementOffsetX<T extends HTMLElement>(element: T): number {
    const rect = getElementRect(element)
    const parentRect = getElementRect(<HTMLElement>element?.offsetParent) || {left: 0}
    return rect?.left - parentRect?.left
  }

  /**
   * 获取元素相对于父元素的纵向偏移量
   * @param element 目标元素
   * @returns 纵向偏移量
   */
  static getElementOffsetY<T extends HTMLElement>(element: T): number {
    const rect = getElementRect(element)
    const parentRect = getElementRect(<HTMLElement>element?.offsetParent) || {top: 0}
    return rect?.top - parentRect?.top
  }

  /**
   * 获取元素的中心点坐标
   * @param element 目标元素
   * @returns 包含 x 和 y 坐标的对象
   */
  static getElementCenterPoint<T extends HTMLElement>(element: T): { x: number; y: number } {
    const width = getElementRealWidth(element)
    const height = getElementRealHeight(element)
    const offsetX = getElementOffsetX(element)
    const offsetY = getElementOffsetY(element)
    const centerX = offsetX + width / 2
    const centerY = offsetY + height / 2
    return {x: centerX, y: centerY}
  }

  /**
   * 判断元素是否在可视区域内
   * @param element 目标元素
   * @returns 如果元素在可视区域内, 则返回 true, 反之 false
   */
  static isElementInViewport<T extends HTMLElement>(element: T): boolean {
    const rect = getElementRect(element)
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    return (
      rect?.top <= viewportHeight &&
      rect?.bottom >= 0 &&
      rect?.left <= viewportWidth &&
      rect?.right >= 0
    )
  }

  /**
   * 获取元素在页面中的绝对位置
   * @param element 目标元素
   * @returns 包含 x 和 y 坐标的对象
   */
  static getElementPagePosition<T extends HTMLElement>(element: T): { x: number; y: number } {
    let top = 0
    let left = 0
    let currentElement: HTMLElement | null = element
    while (currentElement) {
      top += currentElement?.offsetTop
      left += currentElement?.offsetLeft
      currentElement = currentElement?.offsetParent as HTMLElement | null
    }
    return {x: left, y: top}
  }

  /**
   * 获取元素的滚动位置
   * @param element 目标元素
   * @returns 包含 scrollTop 和 scrollLeft 属性的对象
   */
  static getElementScrollPosition<T extends HTMLElement>(element: T): { scrollTop: number; scrollLeft: number } {
    return {
      scrollTop: element?.scrollTop,
      scrollLeft: element?.scrollLeft,
    }
  }

  /**
   * 设置元素的样式
   * @param element 目标元素
   * @param styles 样式对象
   */
  static setElementStyles<T extends HTMLElement>(element: T, styles: Partial<CSSStyleDeclaration>): void {
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        element.style[key as any] = styles[key as any] || ''
      }
    }
  }

  /**
   * 判断元素是否包含某个子元素
   * @param parent 父元素
   * @param child 子元素
   * @returns 如果父元素包含子元素, 则返回 true, 反之 false
   */
  static containsElement<T extends HTMLElement>(parent: T, child: T): boolean {
    return parent?.contains(child)
  }

  /**
   * 判断元素是否包含某个类名
   * @param element 目标元素
   * @param className 类名
   * @returns 如果元素包含该类名, 则返回 true, 反之 false
   */
  static hasElementClass<T extends HTMLElement>(element: T, className: string): boolean {
    return element?.classList.contains(className)
  }

  /**
   * 为元素添加类名
   * @param element 目标元素
   * @param className 类名
   */
  static addElementClass<T extends HTMLElement>(element: T, className: string): void {
    element?.classList.add(className)
  }

  /**
   * 移除元素的类名
   * @param element 目标元素
   * @param className 类名
   */
  static removeElementClass<T extends HTMLElement>(element: T, className: string): void {
    element?.classList.remove(className)
  }

  /**
   * 切换元素的类名
   * @param element 目标元素
   * @param className 类名
   */
  static toggleElementClass<T extends HTMLElement>(element: T, className: string): void {
    element?.classList.toggle(className)
  }

  /**
   * 添加事件监听器
   * @param element 目标元素
   * @param eventType 事件类型
   * @param listener 事件监听函数
   * @param options 事件监听选项
   */
  static addEventListener<T extends HTMLElement>(element: T, eventType: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
    element?.addEventListener(eventType, listener, options)
  }

  /**
   * 移除事件监听器
   * @param element 目标元素
   * @param eventType 事件类型
   * @param listener 事件监听函数
   * @param options 事件监听选项
   */
  static removeEventListener<T extends HTMLElement>(element: T, eventType: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
    element?.removeEventListener(eventType, listener, options)
  }

  /**
   * 获取 SVG 元素的内部宽度 (不包括边框)
   * @param element 目标 SVG 元素
   * @returns SVG 元素的内部宽度
   */
  static getSvgClientWidth<T extends SVGElement>(element: T): number {
    return element?.clientWidth || 0
  }

  /**
   * 获取 SVG 元素的内部高度 (不包括边框)
   * @param element 目标 SVG 元素
   * @returns SVG 元素的内部高度
   */
  static getSvgClientHeight<T extends SVGElement>(element: T): number {
    return element?.clientHeight || 0
  }

  /**
   * 获取 SVG 元素的宽度或高度, 包括 viewBox 缩放
   * @param element 目标 SVG 元素
   * @returns SVG 元素的宽度高度
   */
  static getSVGBBoxDimension<T extends SVGGraphicsElement>(element: T): SVGRect {
    return element?.getBBox()
  }

  /**
   * 获取 SVG 元素的宽度, 包括 viewBox 缩放
   * @param element 目标 SVG 元素
   * @returns SVG 元素的宽度
   */
  static getSVGBoundingBoxWidth<T extends SVGGraphicsElement>(element: T): number {
    const bbox = getSVGBBoxDimension(element)
    return bbox.width
  }

  /**
   * 获取 SVG 元素的高度, 包括 viewBox 缩放
   * @param element 目标 SVG 元素
   * @returns SVG 元素的高度
   */
  static getSVGBoundingBoxHeight<T extends SVGGraphicsElement>(element: T): number {
    const bbox = getSVGBBoxDimension(element)
    return bbox.height
  }
}

export const {
  getElementRect,
  getElementRealWidth,
  getElementRealHeight,
  getElementClientWidth,
  getElementClientHeight,
  getElementOffsetWidth,
  getElementOffsetHeight,
  getElementScrollWidth,
  getElementScrollHeight,
  getElementOffsetX,
  getElementOffsetY,
  getElementCenterPoint,
  isElementInViewport,
  getElementPagePosition,
  getElementScrollPosition,
  setElementStyles,
  containsElement,
  hasElementClass,
  addElementClass,
  removeElementClass,
  toggleElementClass,
  addEventListener,
  removeEventListener,
  getSvgClientWidth,
  getSvgClientHeight,
  getSVGBBoxDimension,
  getSVGBoundingBoxWidth,
  getSVGBoundingBoxHeight,
} = ElementUtils