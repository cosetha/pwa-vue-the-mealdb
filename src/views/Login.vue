<template>
  <div class="h-100 row align-items-center justify-content-center">
    <div class="col-md-4 text-center card">
      <h1 class="card-title">Login</h1>
      <form class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            name="username"
            v-model="input.username"
            placeholder="Username"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="input.password"
            placeholder="Password"
          />
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-primary" v-on:click="login()">Login</button>
          <button type="button" class="btn btn-warning mx-3" v-on:click="register">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Home" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    },
    register() {
      if (this.input.username != "" && this.input.password != "") {
        var account = {
          username: this.input.username,
          password: this.input.password
        };
        this.$store.commit("setAccount", account);
        localStorage.setItem(
          "account",
          JSON.stringify(this.$store.state.mockAccount)
        );
        this.$parent.mockAccount = JSON.parse(localStorage.getItem("account"));
        alert("Register Success");
      }
    }
  },
  created() {}
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>