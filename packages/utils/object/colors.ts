import chroma from "chroma-js";

export const isValidColor = (color: string): boolean => {
  try {
    chroma(color);
    return true
  } catch (error) {
    return false
  }
}

export const getContrastingColor = (color: string): string => {
  color = isValidColor(color) ? color : "#6c757d"
  return chroma(color).luminance() > 0.5 ? "#6c757d" : "#fff"
}

export const lighten = (color: string, percent: number): string => {
  return chroma(color).brighten(percent).hex()
}

export const darken = (color: string, percent: number): string => {
  return chroma(color).darken(percent).hex()
}

export const isGradientColor = (color: string): boolean => {
  const gradientRegex = /^(linear-gradient|radial-gradient)\(.*\)$/i
  return gradientRegex.test(color)
}