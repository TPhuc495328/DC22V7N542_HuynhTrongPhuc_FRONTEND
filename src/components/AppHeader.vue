<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>

    <div class="mr-auto navbar-nav">
      <router-link :to="{ name: 'contactbook' }" class="nav-link">
        Danh bạ
      </router-link>
      <router-link to="/favorites" class="nav-link">
        Xem yêu thích
      </router-link>
    </div>

    <div class="navbar-nav ml-auto">
      <template v-if="!user">
        <router-link to="/login" class="nav-link">Login</router-link>
      </template>

      <template v-else>
        <span class="nav-link text-white">Hi, {{ user.username }}</span>
        <a @click="logout" class="nav-link" style="cursor: pointer">Logout</a>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  },
  methods: {
    logout() {
      localStorage.removeItem("currentUser");
      this.user = null;
      this.$router.push("/login");
    },
  },
};
</script>
