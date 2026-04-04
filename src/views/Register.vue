<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card p-4 shadow" style="width: 400px">
      <h3 class="text-center mb-3">Đăng ký</h3>

      <form @submit.prevent="handleRegister">
        <!-- Username -->
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Nhập username"
          />
        </div>

        <!-- Password -->
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Nhập password"
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-3">
          <label class="form-label">Nhập lại Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Nhập lại password"
          />
        </div>

        <!-- Button -->
        <button class="btn btn-success w-100">Đăng ký</button>
      </form>

      <!-- Link login -->
      <div class="text-center mt-3">
        <router-link to="/login"> Đã có tài khoản? Đăng nhập </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (!this.username || !this.password || !this.confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
      }

      // 📌 Lấy danh sách user (array)
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // 📌 Kiểm tra ID (username) đã tồn tại chưa
      const isExist = users.some((user) => user.username === this.username);

      if (isExist) {
        alert("Username đã tồn tại!");
        return;
      }

      // 📌 Tạo user mới
      const newUser = {
        username: this.username,
        password: this.password,
      };

      // 📌 Thêm vào danh sách
      users.push(newUser);

      // 📌 Lưu lại
      localStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công!");

      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
