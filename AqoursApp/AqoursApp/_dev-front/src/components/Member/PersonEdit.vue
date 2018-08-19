<!-- Template -->
<template>
	<div>
		<div class="overlay" @click="hiddenEdit()"></div>
		<div class="person-edit">
      <v-icon>account_circle</v-icon>
			<p>編集</p>
      <v-btn @click="showDetail()">戻る</v-btn>
		</div>
	</div>
</template>
<!-- Script -->
<script>
export default {
  name: 'PersonEdit',
  methods: {
    hiddenEdit () {
      this.$store.dispatch('toggleEdit', false)
    },
    showDetail () {
      this.$store.dispatch('toggleDetail', true)
      this.$store.dispatch('toggleEdit', false)
    }
  }
}
</script>
<!-- Style -->
<style lang="scss">
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .7);
	}
	.person-edit {
		position: fixed;
		display: inline-block;
		top: 50%;
		left: 50%;
		z-index: 11;
		height: 45rem;
		width: 40rem;
		background-color: #292929;
		transform: translate(-20rem, -20rem);
    .v-icon {
      color: #009688;
      font-size: 8rem;
    }
	}
</style>