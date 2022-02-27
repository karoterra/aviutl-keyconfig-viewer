<script setup lang="ts">
import FilePicker from "./components/FilePicker.vue";
import KeyConfigList from "./components/KeyConfigList.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const file: Ref<File | null> = ref(null);
</script>

<template>
  <main>
    <FilePicker v-model="file" />
    <KeyConfigList :file="file" />
  </main>
</template>
