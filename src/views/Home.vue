<template>
  <div class="container">
    <div class="row">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="row justify-content-center mt-2">
<<<<<<< HEAD
      <search
        v-model="name"
        label="Search"
        placeholder="Cari disini"
        :required="true"
        id="name"
      />
=======
      <search v-model="name" label="Search" placeholder="Cari disini" :required="true" id="name" />
>>>>>>> test-unit
    </div>
    <div class="row">
      <Category />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld.vue';
import Category from '@/components/Category.vue';
import Search from '@/components/Search.vue';
export default {
  name: 'Home',
  data() {
    return { search: '', name: '' };
=======
import HelloWorld from "@/components/HelloWorld.vue";
import Category from "@/components/Category.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  data() {
    return { search: "", name: "" };
>>>>>>> test-unit
  },
  methods: {
    searchMethods() {
      if (this.search) {
        this.$router.push({
<<<<<<< HEAD
          name: 'Cari',
=======
          name: "Cari",
>>>>>>> test-unit
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
