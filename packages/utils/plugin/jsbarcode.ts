import JsBarcode from "jsbarcode";

export class JsBarcodePlugin {
  /**
   * 生成条码并渲染到 Canvas 元素
   * @param element Canvas 元素
   * @param data 条码数据
   * @param options 条码选项
   */
  static barcodeToCanvas(element: HTMLCanvasElement, data: string, options?: JsBarcode.Options): void {
    JsBarcode(element, data, options)
  }

  /**
   * 生成条码并渲染到 SVG 元素
   * @param element SVG 元素
   * @param options 条码选项
   */
  static barcodeToSVG(element: SVGSVGElement, options?: JsBarcode.Options): void {
    JsBarcode(element).options({...(options ?? {})}).init()
  }

  /**
   * 生成条码并返回 Canvas 元素的 Data URL
   * @param data 条码数据
   * @param options 条码选项
   * @returns Canvas 的 Data URL
   */
  static barcodeCanvasDataURL(data: string, options?: JsBarcode.Options): string {
    const canvas = document.createElement("canvas")
    this.barcodeToCanvas(canvas, data, options)
    return canvas.toDataURL()
  }

  /**
   * 生成条码并返回 SVG 元素的字符串
   * @param options 条码选项
   * @returns SVG 字符串
   */
  static barcodeSVGString(options?: JsBarcode.Options): string {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    this.barcodeToSVG(svg, options)
    return new XMLSerializer().serializeToString(svg)
  }

  /**
   * 生成附加条码
   * @param element 元素
   * @param data 条码数据
   * @param addonData 附加码数据
   * @param blank 条码与附加码之间的空白间距
   * @param options 所有条码选项
   * @param eanOptions 主码选项
   * @param addonOptions 附加码选项
   */
  static barcodeAddon(element: any, data: string, addonData: string, blank: number, options?: JsBarcode.Options, eanOptions?: JsBarcode.Options, addonOptions?: JsBarcode.Options): void {
    JsBarcode(element).options({...(options ?? {})}).EAN13(data, {...(eanOptions ?? {})}).blank(blank).EAN5(addonData, {...(addonOptions ?? {})}).render()
  }
}

export const {
  barcodeToCanvas,
  barcodeToSVG,
  barcodeCanvasDataURL,
  barcodeSVGString,
  barcodeAddon,
} = JsBarcodePlugin