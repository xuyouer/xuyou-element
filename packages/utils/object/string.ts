export class StringUtils {
  static lineNumbers = (string: string): number[] => {
    return string.split('\n').map((_, i) => i + 1)
  }
}

export const {
  lineNumbers
} = StringUtils