<script setup lang="ts">
import { useDeviceInfoStoreHook } from "@/store/modules/device";
import { useWelcomeHooks } from "./utils/hooks";

defineOptions({
  name: "Welcome"
});

function filterNumber(val: string) {
  return val.replace(/[^0-9]/g, "");
}

const { inputData, handleSetData, handleGetData } = useWelcomeHooks();
</script>

<template>
  <div>
    <el-input
      v-model="inputData"
      class="!w-[250px]"
      clearable
      :maxlength="12"
      @input="
        val => {
          inputData = filterNumber(val);
        }
      "
    />
    <el-button @click="handleGetData">Get</el-button>
    <el-button @click="handleSetData">Set</el-button>
    <div class="mt-2">
      <span>Data: </span>
      {{ useDeviceInfoStoreHook().baseTime }}
    </div>
    <div class="mt-2">
      <span>Type: </span>
      {{ typeof useDeviceInfoStoreHook().baseTime }}
    </div>
  </div>
</template>
