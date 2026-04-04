<template>
  <div class="page">
    <h3>❤️ Danh sách yêu thích</h3>

    <div v-if="favoriteContacts.length > 0">
      <div
        v-for="(contact, index) in favoriteContacts"
        :key="contact._id"
        class="card mt-3 p-3"
      >
        <h5>{{ contact.name }}</h5>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phone }}</p>

        <router-link
          :to="{ name: 'contact.edit', params: { id: contact._id } }"
          class="btn btn-warning btn-sm"
        >
          Sửa
        </router-link>
      </div>
    </div>

    <p v-else>Không có liên hệ yêu thích nào.</p>
  </div>
</template>

<script>
import ContactService from "../services/contact.service";

export default {
  data() {
    return {
      contacts: [],
    };
  },

  computed: {
    favoriteContacts() {
      return this.contacts.filter((c) => c.favorite === true);
    },
  },

  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.retrieveContacts();
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: auto;
}
</style>
