<script>
import ContactService from "../services/contact.service";
import InputSearch from "../components/InputSearch.vue";
import ContactList from "../components/ContactList.vue";
import ContactCard from "../components/ContactCard.vue";

export default {
  components: { InputSearch, ContactList, ContactCard },

  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
    };
  },

  computed: {
    filteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((c) =>
        (c.name + c.email + c.phone).includes(this.searchText),
      );
    },

    activeContact() {
      return this.filteredContacts[this.activeIndex];
    },
  },

  methods: {
    async loadContacts() {
      this.contacts = await ContactService.getAll();
    },
  },

  mounted() {
    this.loadContacts();
  },
};
</script>

<template>
  <div class="page row">
    <div class="col-12">
      <InputSearch v-model="searchText" />
    </div>

    <div class="col-md-6 mt-3">
      <ContactList
        :contacts="filteredContacts"
        v-model:activeIndex="activeIndex"
      />
    </div>

    <div class="col-md-6 mt-3">
      <ContactCard v-if="activeContact" :contact="activeContact" />

      <router-link
        v-if="activeContact"
        :to="{
          name: 'contact.edit',
          params: { id: activeContact._id },
        }"
      >
        <span class="mt-2 badge badge-warning">
          <i class="fas fa-edit"></i> Hiệu chỉnh
        </span>
      </router-link>
    </div>
  </div>
</template>
