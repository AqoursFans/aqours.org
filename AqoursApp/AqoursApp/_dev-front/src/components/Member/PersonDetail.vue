<!-- Template -->
<template>
	<div>
		<div class="overlay" @click="hiddenDetail()"></div>
		<div class="person-detail">
			<v-icon>account_circle</v-icon>
			<p>詳細</p>
			<v-btn @click="showEdit()">編集</v-btn>
			<v-btn @click="hiddenDetail()">閉じる</v-btn>
		</div>
	</div>
</template>
<!-- Script -->
<script>
  export default {
    name: 'PersonDetail',
    methods: {
      hiddenDetail () {
        this.$store.dispatch('toggleDetail', false)
      },
      showEdit () {
        this.$store.dispatch('toggleDetail', false)
        this.$store.dispatch('toggleEdit', true)
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
.person-detail {
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