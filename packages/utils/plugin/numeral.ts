import numeral from "numeral";

export class NumeralPlugin {
  static numeralFormat(value: string | number | undefined, format: string): string | null {
    try {
      return numeral(value).format(format)
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

export const {
  numeralFormat,
} = NumeralPlugin