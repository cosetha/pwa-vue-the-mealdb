<template>
  <div class="Favorite">
    <div class="container my-5" v-if="listFavorite">
      <div class="row mt-4" v-for="(data, index) in favoriteRow" :key="index">
        <div class="col-md-3" v-for="(datas, index) in data" :key="index">
          <router-link :to="{ name: 'Detail', params: { id: datas.idMeal } }">
            <img :src="datas.strMealThumb" class="img-thumbnail" />
            <hr />
            <p>{{ datas.strMeal }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var chunk = require("chunk");
export default {
  name: "FavoriteItem",
  data() {
    return {
      listFavorite: [],
      rowFavorite: []
    };
  },
  methods: {},
  computed: {
    favoriteRow() {
      return chunk(this.listFavorite, 4);
    }
  },
  mounted() {
    if (localStorage.getItem("favoriteItem")) {
      this.listFavorite = JSON.parse(localStorage.getItem("favoriteItem"));
    }
  }
};
</script>

<style></style>
