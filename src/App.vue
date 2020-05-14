<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disabled</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="$store.state.isLoggedIn"
              to="/Favorite"
            >
              <i class="fa fa-star"></i>Favorite Page
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="$store.state.isLoggedIn"
              to="/Login"
              v-on:click.native="logout()"
              replace
              >Logout</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              v-if="!$store.state.isLoggedIn"
              to="/Login"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view
      class="min-vh-100 my-5 pt-3"
      @authenticated="setAuthenticated"
    />

    <footer class="page-footer font-small bg-white pt-4 mb-0 mt-auto">
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">
            <!-- Content -->
            <h5 class="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none pb-3" />

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2020 Copyright</div>
      <!-- Copyright -->
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: 'admin',
        password: 'admin'
      }
    };
  },
  mounted() {
    if (localStorage.getItem('isLoggedIn')) {
      this.$store.state.isLoggedIn = JSON.parse(
        localStorage.getItem('isLoggedIn')
      );
    }
    if (localStorage.getItem('account')) {
      this.mockAccount = JSON.parse(localStorage.getItem('account'));
    }
  },
  methods: {
    setAuthenticated(status) {
      this.$store.commit('setLogin', status);
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(this.$store.state.isLoggedIn)
      );
    },
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.$store.commit('revokeLogin');
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
