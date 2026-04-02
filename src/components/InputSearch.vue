<script>
export default {
  props: { modelValue: String },
  emits: ["update:modelValue", "submit"],
};
</script>

<template>
  <div class="input-group">
    <input
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button class="btn btn-outline-secondary" @click="$emit('submit')">
      Tìm
    </button>
  </div>
</template>