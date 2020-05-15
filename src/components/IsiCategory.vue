<template>
  <div class="Category">
    <div class="container my-2" v-if="listCategory">
      <div class="row mt-4" v-for="(data, index) in kategoriRow" :key="index">
        <div class="col-md-3" v-for="(datas, index) in data" :key="index">
          <router-link :to="{ name: 'Detail', params: { id: datas.idMeal } }">
            <img :src="datas.strMealThumb" class="img-thumbnail" />
            <hr />
            <p>{{ datas.strMeal }}</p>
          </router-link>
          <Button
            class="btn btn-outline-secondary"
            :id="'button_'+datas.idMeal"
            @click="favorite($event)"
          >
            <i class="fa fa-star" style="color:orange;"></i>
            Favorite
          </Button>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
var chunk = require("chunk");
import axios from "axios";
export default {
  name: "IsiCategory",
  data() {
    return {
      listCategory: [],
      error: null,
      loading: null,
      listFavorite: [],
      fav: null
    };
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
          this.error = error.toString();
        })
        .finally(() => (this.loading = false));
    }
    if (localStorage.getItem("favoriteItem")) {
      this.listFavorite = JSON.parse(localStorage.getItem("favoriteItem"));
    }
  },
  computed: {
    kategoriRow() {
      return chunk(this.listCategory, 4);
    }
  },
  methods: {
    favorite(event) {
      var targetId = event.currentTarget.id;
      var rs = targetId.split("_");
      if (rs[1]) {
        axios
          .get("https://www.themealdb.com/api/json/v1/1/lookup.php", {
            params: {
              i: rs[1]
            }
          })
          .then(response => {
            this.fav = response.data.meals;
          })
          .catch(error => {
            this.error = error.toString();
          })
          .finally(() => {
            console.log(this.fav[0].idMeal);
            var api = this.methods(this.fav);
            console.log(api);
            if (api) {
              this.listFavorite.push(this.fav[0]);
              this.$store.commit("setFavorite", this.listFavorite);
              localStorage.setItem(
                "favoriteItem",
                JSON.stringify(this.$store.state.favoritePage)
              );
              console.log(JSON.parse(localStorage.getItem("favoriteItem")));
              alert("Added to Favorite");
            } else {
              alert("Already at Favorite");
            }
          });
      }
    },
    methods(params) {
      var result = this.listFavorite;
      var hasil = true;
      for (var a in result) {
        if (result[a].idMeal != params[0].idMeal) {
          hasil = true;
        } else {
          hasil = false;
        }
      }
      return hasil;
    }
  }
};
</script>

<style>
</style>