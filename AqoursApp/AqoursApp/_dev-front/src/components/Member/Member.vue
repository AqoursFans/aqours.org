<!-- Template -->
<template>
	<v-layout row wrap>
    	<person v-for="person in member" :info="person" />
      <person-detail v-show="showDetail" />
      <person-edit v-show="showEdit" />
  </v-layout>
</template>
<!-- Script -->
<script>
  import { mapGetters } from 'vuex'
  import Person from './Person'
  import PersonDetail from './PersonDetail'
  import PersonEdit from './PersonEdit'
  export default {
    name: 'Member',
    components: {
      'person': Person,
      'person-detail': PersonDetail,
      'person-edit': PersonEdit
    },
    computed: {
      ...mapGetters({
        member: 'allMember',
        showDetail: 'isDetail',
        showEdit: 'isEdit'
      })
    },
    created () {
      this.$store.dispatch('getAllMember')
    }
  }
</script>
<!-- Style -->
<style lang="scss">
</style>
