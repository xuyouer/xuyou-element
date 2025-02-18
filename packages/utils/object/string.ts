export class StringUtils {
  static lineNumbers = (string: string): number[] => {
    return string.split('\n').map((_, i) => i + 1)
  }

  static stringToNumber(str: string | number): number | null {
    return Number(str) || str === "" ? null : Number(str)
  }
}

export const {
  lineNumbers,
  stringToNumber,
} = StringUtils