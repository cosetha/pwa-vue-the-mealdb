<template>
  <div class="container">
    <div v-for="(header, index) in headers" :key="index" class="jumbotron">
      <h1 class="display-4">
        {{ header.strMeal }}
        <span class="badge badge-success">{{ header.strArea }}</span>
      </h1>
      <hr class="my-4" />
      <div class="row">
        <div class="col-md-4 align-self-center">
          <img :src="header.strMealThumb" class="img-thumbnail" alt srcset height="200px" />
        </div>
        <div class="col-md-8">
          <p class="text-left">{{ header.strInstructions.substring(0, 1000) }}</p>
          <br class="my-4" />
          <p class="lead">
            <router-link class="btn btn-success" to="/about">Learn More</router-link>
          </p>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-auto" v-for="(n, index) in 20" :key="index">
          <div v-if="header['strIngredient' + n] != ''">
            <p>
              {{ header['strIngredient' + n] }}
              <span class="badge badge-primary">
                {{
                header['strMeasure' + n]
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">{{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      posts: null,
      errors: [],
      headers: null
    };
  },
  created() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(response => {
        this.posts = response.data.meals;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => {
        this.headers = response.data.meals;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
