<!-- Template -->
<template>
	<div class="member-list">
		<person v-for="person in member" :info="person" />
		<person-detail v-show="showDetail" />
		<person-edit v-show="showEdit" />
	</div>
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
.member-list {
	padding: 3rem 0;
	text-align: left;
	&::after {
		content: '';
		display: block;
		clear: both;
	}
}
</style>
