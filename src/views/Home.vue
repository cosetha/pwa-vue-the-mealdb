<template>
  <div class="container">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Category from '@/components/Category.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Category
  }
};
</script>
