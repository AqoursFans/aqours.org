<template src="./member.html"></template>
<script>
import { mapGetters } from 'vuex'
import Person from './Person'
export default {
  name: 'Member',
  components: {
    Person
  },
  computed: mapGetters({
    member: 'allMember'
  }),
  created () {
    this.$store.dispatch('getAllMember')
  }
}
</script>
<style lang="scss" src="./member.scss"></style>
