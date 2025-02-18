export type HitokotoType =
  | "a"  // 动画
  | "b"  // 漫画
  | "c"  // 游戏
  | "d"  // 文学
  | "e"  // 原创
  | "f"  // 来自网络
  | "g"  // 其他
  | "h"  // 影视
  | "i"  // 诗词
  | "j"  // 网易云
  | "k"  // 哲学
  | "l"  // 抖机灵
  ;

export class HitokotoPlugin {
  static hitokotoFetch = async (type?: HitokotoType[] | HitokotoType): Promise<{ uuid: string, hitokoto: string }> => {
    const params = new URLSearchParams()
    if (type) {
      (Array.isArray(type) ? type : [type]).forEach(t => params.append('c', t))
    }
    const url = `https://v1.hitokoto.cn?${params}`
    const response = await fetch(url)
    const {uuid, hitokoto} = await response.json()
    return {uuid, hitokoto}
  }
  static hitokotoUUID = async (uuid: string): Promise<string> => {
    const response = await fetch(`https://hitokoto.cn/?uuid=${uuid}`)
    return response.url
  }
}

export const {
  hitokotoFetch,
  hitokotoUUID,
} = HitokotoPlugin