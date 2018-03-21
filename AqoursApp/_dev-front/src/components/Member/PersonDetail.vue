<!-- Template -->
<template>
	<div>
		<div class="overlay" @click="hiddenDetail()"></div>
		<div class="person-detail">
			<div class="person-img">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
			<p>詳細</p>
			<button @click="showEdit()">編集</button>
			<button @click="hiddenDetail()">閉じる</button>
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
		z-index: 1;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .7);
	}
	.person-detail {
		position: fixed;
		display: inline-block;
		top: 50%;
		left: 50%;
		z-index: 2;
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