<script setup lang="ts">
import FilePicker from "./components/FilePicker.vue";
import KeyConfigList from "./components/KeyConfigList.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const file: Ref<File | null> = ref(null);
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">AviUtl Key Config Viewer</a>
      </div>
    </nav>
  </header>
  <main class="container">
    <FilePicker class="mt-3" v-model="file" />
    <KeyConfigList class="mt-3" :file="file" />
  </main>
</template>
