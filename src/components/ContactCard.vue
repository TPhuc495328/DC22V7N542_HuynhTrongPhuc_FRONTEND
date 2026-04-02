<script>
export default {
  props: ["contact"],
};
</script>

<template>
  <div>
    <p><b>Tên:</b> {{ contact.name }}</p>
    <p><b>Email:</b> {{ contact.email }}</p>
    <p><b>Địa chỉ:</b> {{ contact.address }}</p>
    <p><b>Phone:</b> {{ contact.phone }}</p>
  </div>
</template>