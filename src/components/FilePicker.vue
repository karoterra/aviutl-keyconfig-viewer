<script setup lang="ts">
defineProps<{
  modelValue: File | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", file: File | null): void;
}>();

function onChange(e: Event) {
  const input = e.target as HTMLInputElement;
  let file: File | null;
  if (input.files && input.files.length) {
    file = input.files[0];
  } else {
    file = null;
  }
  emit("update:modelValue", file);
}
</script>

<template>
  <div>
    <label class="form-label">
      AviUtl のキーコンフィグファイル (aviutl.key) を指定してください。
    </label>
    <input class="form-control" type="file" accept=".key" @change="onChange" />
  </div>
</template>
