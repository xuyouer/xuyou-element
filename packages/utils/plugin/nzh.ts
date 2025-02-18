import nzhcn from "nzh/cn";

export class NzhPlugin {
  static nzhChinese(numeral: string | number | undefined): string | null {
    try {
      return numeral ? nzhcn.encodeB(numeral) : null
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

export const {
  nzhChinese,
} = NzhPlugin