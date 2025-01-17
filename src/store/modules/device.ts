import { defineStore } from "pinia";
import { store } from "@/store";
import type { deviceInfoType } from "../types";

export const deviceBaseInfo = defineStore({
  id: "vnet-devInfo",
  state: (): deviceInfoType => ({
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
