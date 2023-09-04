<template>
  <div>
    <div class="container mt-5">
      <h2>Login</h2>
      <form @submit.prevent="login" class="mt-4">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="login.username"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="login.password"
            class="form-control"
            required
          />
        </div>
        <button @click="handleLogin" type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        you can create account <router-link to="/signup">SignUp</router-link>
      </p>
      <p v-if="errorMessage" class="mt-3 text-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
        errorMessage: "",
      },
    };
  },
  methods: {
    handleLogin() {},
  },
};
</script>
