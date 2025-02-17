import * as DateFns from 'date-fns';
import {zhCN} from 'date-fns/locale';
import {TZDate, tz} from "@date-fns/tz";
import type {TimeProps} from "@xuyou-element/components";

export class DateUtils {
  static getTimeZoneSupported = <T extends string>(): T[] => Intl.supportedValuesOf("timeZone") as T[]
  static getTimeZone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone

  private static getTimeValue(t: number | Date | undefined): number {
    if (t === undefined) return Date.now()
    // return t instanceof Date ? t.getTime() : t
    return t instanceof Date ? t.getTime() : typeof t === "number" ? t : new Date(t).getTime()
  }

  static timeFormat = (props: TimeProps): string | number => {
    const {time, to, format, timeZone, type, unix} = {
      time: Date.now(),
      to: Date.now(),
      format: "yyyy-MM-dd hh:mm:ss",
      timeZone: "Asia/Shanghai",
      type: "datetime",
      unix: false,
      ...props,
    }
    try {
      const formatTime = (): string | number => {
        const timeValue = DateUtils.getTimeValue(time)
        const toValue = DateUtils.getTimeValue(to)
        const currentTimeZone = timeZone ?? DateUtils.getTimeZone()
        if (type === "relative" && toValue) {
          const zonedTimeValue = new TZDate(timeValue, currentTimeZone)
          const zonedToValue = new TZDate(toValue, currentTimeZone)
          return unix ? toValue : DateFns.formatDistanceStrict(zonedTimeValue, zonedToValue, {
            locale: zhCN,
            addSuffix: true,
            in: tz(currentTimeZone),
          })
        }
        const zonedDate = new TZDate(timeValue, currentTimeZone)
        return unix
          ? timeValue
          : format
            ? DateFns.format(zonedDate, format, {locale: zhCN, in: tz(currentTimeZone)})
            : zonedDate.toLocaleString()
      }
      return formatTime()
    } catch (e) {
      console.error("Error formatting date. Ensure date-fns is installed.", e)
      return "Invalid Date"
    }
  }
}

export const {
  getTimeZoneSupported,
  getTimeZone,
  timeFormat,
} = DateUtils