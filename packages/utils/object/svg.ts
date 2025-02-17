export interface SVGOptions {
  [key: string]: string;
}

export interface SVGWithStr {
  svgElement: SVGSVGElement;
  svgString: string;
}

export class SVGConverterUtils {
  /**
   * 将字符串转换为 SVG 元素
   * @param text 要转换为 SVG 的字符串
   * @param options 可选参数, 用于配置 SVG 元素的样式和属性
   * @returns 包含文本的 SVG 元素
   */
  static textToSVG(text: string, options?: SVGOptions): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textElement.textContent = text
    textElement.setAttribute('x', '50%')
    textElement.setAttribute('y', '50%')
    textElement.setAttribute('text-anchor', 'middle')
    textElement.setAttribute('dominant-baseline', 'central')
    textElement.setAttribute('alignment-baseline', 'central')
    if (options) {
      for (const key in options) {
        textElement.setAttribute(key, options[key])
      }
    }
    svg.appendChild(textElement)
    return svg
  }

  /**
   * 将字符串转换为 SVG 元素和 SVG 字符串
   * @param text 要转换为 SVG 的字符串
   * @param options 可选参数, 用于配置 SVG 元素的样式和属性
   * @returns 包含 SVG 元素和 SVG 字符串的对象
   */
  static textToSVGWithStr(text: string, options?: SVGOptions): SVGWithStr {
    const svgElement = SVGConverterUtils.textToSVG(text, options)
    const svgString = new XMLSerializer().serializeToString(svgElement)
    return {svgElement, svgString}
  }
}

export const {
  textToSVG,
  textToSVGWithStr
} = SVGConverterUtils