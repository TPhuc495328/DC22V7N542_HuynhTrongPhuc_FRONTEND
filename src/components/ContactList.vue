<script>
export default {
  props: ["contacts", "activeIndex"],
  emits: ["update:activeIndex"],
};
</script>

<template>
  <ul class="list-group">
    <li
      v-for="(c, i) in contacts"
      :key="c._id"
      class="list-group-item"
      :class="{ active: i === activeIndex }"
      @click="$emit('update:activeIndex', i)"
    >
      {{ c.name }}
    </li>
  </ul>
</template>