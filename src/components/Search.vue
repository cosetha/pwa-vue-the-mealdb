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
      <button
        class="btn btn-outline-success"
        @click="searchMethods"
        ref="searchButton"
      >
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
      this.$emit('input', value);
    },
    searchMethods() {
      if (this.value) {
        this.$router.push({
          name: 'Cari',
          params: { text: this.value }
        });
      }
    }
  }
};
</script>
