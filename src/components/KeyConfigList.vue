<script setup lang="ts">
import type { Ref } from "vue";
import { ref, watch } from "vue";
import { Key } from "@/key";
import { Command } from "@/command";

const props = defineProps<{
  file: File | null;
}>();

const HEADER = "AviUtl KeyConfigFile version 0.3   \0";

interface KeyConfig {
  command: Command;
  key: Key;
}
const keyConfigs: Ref<KeyConfig[]> = ref([]);

function compare(a: KeyConfig, b: KeyConfig) {
  const keyA = [a.command.priority, a.command.id];
  const keyB = [b.command.priority, b.command.id];
  return keyA > keyB ? 1 : keyA < keyB ? -1 : 0;
}

watch(
  () => props.file,
  async (file) => {
    keyConfigs.value.splice(0);
    if (!file) return;

    let data = await file.arrayBuffer();
    const decoder = new TextDecoder("sjis");
    const header = decoder.decode(data.slice(0, HEADER.length));
    if (header !== HEADER) {
      return;
    }
    data = data.slice(HEADER.length);
    while (data.byteLength > 0) {
      const [flag, keycode] = new Uint8Array(data.slice(0, 2));
      const key = new Key(flag, keycode);
      const [id] = new Uint16Array(data.slice(2, 4));
      data = data.slice(4);
      let name = "";
      if ((flag & 0x80) != 0) {
        const idx = new Int8Array(data).indexOf(0);
        name = decoder.decode(data.slice(0, idx));
        data = data.slice(idx + 1);
      }
      const command = new Command(id, name);
      keyConfigs.value.push({ command: command, key: key });
    }
    keyConfigs.value.sort(compare);
  }
);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>コマンド</th>
        <th>キー</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in keyConfigs" :key="item.command.id">
        <td>{{ item.command.fullName }}</td>
        <td>
          <template v-if="item.key.shift"> <kbd>Shift</kbd> + </template>
          <template v-if="item.key.ctrl"> <kbd>Ctrl</kbd> + </template>
          <template v-if="item.key.alt"> <kbd>Alt</kbd> + </template>
          <kbd>{{ item.key.name }}</kbd>
        </td>
      </tr>
    </tbody>
  </table>
</template>
