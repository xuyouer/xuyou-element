import * as ShiCi from "jinrishici";

export interface JinrishiciInfo {
  beijingTime?: string;
  ip?: string;
  region?: string;
  tags?: string[];
  token?: string;
  weatherData?: {
    humidity?: number;
    pm25?: number;
    rainfall?: number;
    temperature?: number;
    updateTime?: string;
    visibility?: string;
    weather?: string;
    windDirection?: string;
    windPower?: number;
  };
}

export interface JinrishiciSentence {
  id?: string;
  content?: string;
  "popularity": number;
  "origin": {
    "title": string;
    "dynasty": string;
    "author": string;
    "content": string[];
    "translate": string[];
  };
  "matchTags": string[];
  "recommendedReason": string;
  "cacheAt": string;
}

export class JinrishiciPlugin {
  private static readonly TOKEN_URL: string = "https://v2.jinrishici.com/token"
  private static readonly INFO_URL: string = "https://v2.jinrishici.com/info"
  private static readonly SENTENCE_URL: string = "https://v2.jinrishici.com/sentence"

  static shiciFetch = () => {
    return new Promise<string>((resolve) => {
      ShiCi.load((result: any) => resolve(result.data.content))
    })
  }
  static shiciToken = async (): Promise<string> => {
    const {data} = await (await fetch(JinrishiciPlugin.TOKEN_URL)).json()
    return data
  }
  static shiciInfo = async (): Promise<JinrishiciInfo> => {
    const {data} = await (await fetch(JinrishiciPlugin.INFO_URL)).json()
    return data
  }
  static shiciSentence = async (): Promise<JinrishiciSentence> => {
    const token = await shiciToken()
    const {data} = await (await fetch(JinrishiciPlugin.SENTENCE_URL, {
      headers: {
        "X-User-Token": token,
      },
    })).json()
    return data
  }
}

export const {
  shiciFetch,
  shiciToken,
  shiciInfo,
  shiciSentence,
} = JinrishiciPlugin