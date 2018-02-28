<!-- Template -->
<template>
	<div class="member-list">
		<person v-for="person in member" :info="person" />
	</div>
</template>
<!-- Script -->
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
menu {
	li:nth-child(3) {
		background-color: #292929;
		border-bottom: 2px solid #009688;
	}
}
</style>
