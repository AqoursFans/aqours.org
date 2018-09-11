<template>
  <v-date-picker
    v-model="picker"
    :landscape="true"
    :reactive="false"
    full-width="true" />
</template>
<script>
export default {
  data: () => ({ picker: null })
};
</script>
<style lang="scss">
.v-date-picker-header {
  .v-icon {
    font-size: 2rem !important;
    padding: 0 !important;
  }
}
</style>
