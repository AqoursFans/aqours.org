<!-- Template -->
<template>
	<div>
		<div class="overlay" @click="hiddenEdit()"></div>
		<div class="person-edit">
			<div class="person-img">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
			<p>編集</p>
			<button @click="showDetail()">戻る</button>
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
		z-index: 1;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .7);
	}
	.person-edit {
		position: fixed;
		display: inline-block;
		top: 50%;
		left: 50%;
		z-index: 1;
		height: 45rem;
		width: 40rem;
		background-color: #292929;
		transform: translate(-20rem, -20rem);
		button {
			color: #000;
		}
		.person-img {
			width: 8rem;
			height: 8rem;
			background-color: #009688;
			border-radius: 4rem;
			display: inline-block;
			position: absolute;
			left: 15rem;
			top: 2rem;
			i {
				display: block;
				font-size: 6rem;
				text-align: center;
				padding-top: 1rem;
			}
		}
	}
</style>