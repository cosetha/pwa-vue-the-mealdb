<template>
  <div class="container">
    <div class="row">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="row justify-content-center mt-2">
      <search v-model="name" label="Search" placeholder="Cari disini" :required="true" id="name" />
    </div>
    <div class="row">
      <Category />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Category from "@/components/Category.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  data() {
    return { search: "", name: "" };
  },
  methods: {
    searchMethods() {
      if (this.search) {
        this.$router.push({
          name: "Cari",
          params: { text: this.search }
        });
      }
    }
  },
  components: {
    HelloWorld,
    Category,
    Search
  }
};
</script>
