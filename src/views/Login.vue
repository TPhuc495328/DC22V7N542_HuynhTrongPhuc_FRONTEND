<template>
  <div class="container mt-5">
    <h3>Đăng nhập</h3>

    <form @submit.prevent="handleRegister">
      <input
        v-model="username"
        class="form-control mb-2"
        placeholder="Username"
      />
      <input
        v-model="password"
        type="password"
        class="form-control mb-2"
        placeholder="Password"
      />

      <button class="btn btn-success">Đăng nhập</button>
    </form>

    <router-link to="/register">Chưa có tài khoản ? Đăng ký</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleRegister() {
      if (!this.username || !this.password) {
        alert("Nhập đầy đủ!");
        return;
      }

      const user = {
        username: this.username,
        password: this.password,
      };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Đăng ký thành công!");
      this.$router.push("/login");
    },
  },
};
</script>
