export const lineNumbers = (string: string): number[] => {
  return string.split('\n').map((_, i) => i + 1)
}