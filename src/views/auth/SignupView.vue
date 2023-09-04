<template>
  <div>
    <div class="container mt-5">
      <h2>Signup</h2>
      <form @submit.prevent="signup" class="mt-4">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
      you can login create <router-link to="/login">Login</router-link>
      <p v-if="errorMessage" class="mt-3 text-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    signup() {
      // Your signup logic here
      // For example, call an API to create a new user
      // Assume we have an API function called signupAPI(username, email, password)
      //   signupAPI(this.username, this.email, this.password)
      //     .then((response) => {
      // Handle success
      // For example, display a success message
      //   console.log("User registered successfully");
      // })
      // .catch((error) => {
      // Handle error
      // For example, display an error message
      //   this.errorMessage = "Oops! Something went wrong.";
      // });
    },
  },
};
</script>
