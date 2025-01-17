import { defineStore } from "pinia";
import { store } from "@/store";
import type { deviceInfoType } from "../types";

export const deviceBaseInfo = defineStore({
  id: "vnet-devInfo",
  state: (): deviceInfoType => ({
    // 此处用到bigint，打包出错
    // Big integer literals are not available in the configured target environment ("es2015" + 2 overrides)
    baseTime: 0n
  }),
  actions: {
    SAVE_BASE_TIME(time: bigint) {
      this.baseTime = time;
    },
    GET_BASE_TIME(): bigint {
      return this.baseTime;
    }
  }
});

export function useDeviceInfoStoreHook() {
  return deviceBaseInfo(store);
}
