!<template>
  <div class="Category">
    <div class="container my-2" v-if="listCategory">
      <div class="row mt-4" v-for="(data, index) in kategoriRow" :key="index">
        <div class="col-md-3" v-for="(datas, index) in data" :key="index">
          <router-link :to="{ name: 'Detail', params: { id: datas.idMeal } }">
            <img :src="datas.strMealThumb" class="img-thumbnail" />
            <hr />
            <p>{{ datas.strMeal }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
var chunk = require("chunk");
import axios from "axios";
export default {
  name: "IsiCategory",
  data() {
    return { listCategory: null, error: [], loading: [] };
  },
  created() {
    if (this.$route.params.id) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php", {
          params: {
            c: this.$route.params.id
          }
        })
        .then(response => {
          this.listCategory = response.data.meals;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  computed: {
    kategoriRow() {
      return chunk(this.listCategory, 4);
    }
  }
};
</script>

<style>
</style>