<template>
  <div class="Category">
    <div class="container my-2 mt-5" v-if="result">
      <div class="row mt-4" v-for="(data, index) in resultRow" :key="index">
        <div class="col-md-3" v-for="(datas, index) in data" :key="index">
          <router-link :to="{ name: 'Detail', params: { id: datas.idMeal } }">
            <img :src="datas.strMealThumb" class="img-thumbnail" />
            <hr />
            <p>{{ datas.strMeal }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <b-alert show variant="warning">
        <h4 class="alert-heading">Well done!</h4>
        <p>Oh no, Search returning no result</p>
        <hr />
        <p class="mb-0">be sure type name of meal correctly</p>
      </b-alert>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script>
var chunk = require("chunk");
import axios from "axios";
export default {
  name: "Result",
  data() {
    return { result: [], error: null, loading: [] };
  },
  created() {
    if (this.$route.params.text) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php", {
          params: {
            s: this.$route.params.text
          }
        })
        .then(response => {
          this.result = response.data.meals;
        })
        .catch(error => {
          console.log(error);
          this.error = error.toString();
        })
        .finally(() => (this.loading = false));
    }
  },
  computed: {
    resultRow() {
      return chunk(this.result, 4);
    }
  }
};
</script>

<style>
</style>