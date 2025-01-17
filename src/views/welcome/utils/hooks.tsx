import { ref } from "vue";
import { useDeviceInfoStoreHook } from "@/store/modules/device";

export function useWelcomeHooks() {
  const inputData = ref();
  function handleSetData() {
    useDeviceInfoStoreHook().SAVE_BASE_TIME(BigInt(inputData.value));
  }
  function handleGetData() {
    inputData.value = `${useDeviceInfoStoreHook().GET_BASE_TIME()}`;
  }
  return { inputData, handleGetData, handleSetData };
}
