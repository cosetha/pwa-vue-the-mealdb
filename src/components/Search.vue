<template>
  <div class="form-group m-0 py-2">
    <div class="form-inline">
      <label id="label" class="mx-3">{{ label }}</label>
      <input
        class="form-control"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        v-on:input="updateValue($event.target.value)"
      />
<<<<<<< HEAD
      <button
        class="btn btn-outline-success"
        @click="searchMethods"
        ref="searchButton"
      >
=======
      <button class="btn btn-outline-success" @click="searchMethods" ref="searchButton">
>>>>>>> test-unit
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateValue: function(value) {
<<<<<<< HEAD
      this.$emit('input', value);
=======
      this.$emit("input", value);
>>>>>>> test-unit
    },
    searchMethods() {
      if (this.value) {
        this.$router.push({
<<<<<<< HEAD
          name: 'Cari',
=======
          name: "Cari",
>>>>>>> test-unit
          params: { text: this.value }
        });
      }
    }
  }
};
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> test-unit
