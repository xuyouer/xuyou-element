import chroma from "chroma-js";

export class ColorUtils {
  static isValidColor = (color: string): boolean => {
    try {
      chroma(color);
      return true
    } catch (error) {
      return false
    }
  }

  static getContrastingColor = (color: string): string => {
    color = isValidColor(color) ? color : "#6c757d"
    return chroma(color).luminance() > 0.5 ? "#6c757d" : "#fff"
  }

  static lighten = (color: string, percent: number): string => {
    return chroma(color).brighten(percent).hex()
  }

  static darken = (color: string, percent: number): string => {
    return chroma(color).darken(percent).hex()
  }

  static isGradientColor = (color: string): boolean => {
    const gradientRegex = /^(linear-gradient|radial-gradient)\(.*\)$/i
    return gradientRegex.test(color)
  }
}

export const {
  isValidColor,
  getContrastingColor,
  lighten,
  darken,
  isGradientColor,
} = ColorUtils