<!-- Template -->
<template>
	<div class="card-wrapper">
		<div class="card">
			<div class="person-img">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
			<p class="person-name">{{info.name}}</p>
			<div class="person-info">
				<p class="info-row">
					<span class="info-title">group</span>
					<span>{{info.group}}</span>
				</p>
				<p class="info-row">
					<span class="info-title">age</span>
					<span>{{info.age}}</span>
				</p>
				<p class="info-row">
					<span class="info-title">e-mail</span>
					<a v-bind:href="info.e_mail">{{info.e_mail}}</a>
				</p>
			</div>
		</div>
	</div>
</template>
<!-- Script -->
<script>
export default {
  name: 'Person',
  props: ['info']
}
</script>
<!-- Style -->
<style lang="scss" scoped>
.card-wrapper {
	display: inline-block;
	margin: 0 1rem 2rem;
	cursor: pointer;
	.card {
		height: 11rem;
		width: 14rem;
		display: inline-block;
		position: relative;
		margin-top: 2rem;
		padding: 1rem;
		background-color: #212121;
		border-radius: .25rem;
		box-shadow: .5rem .5rem 1rem rgba(0,0,0,.1);
		text-align: left;
		vertical-align: middle;
		.person-img {
			width: 4rem;
			height: 4rem;
			background-color: #009688;
			border-radius: 2rem;
			display: inline-block;
			position: absolute;
			left: 6rem;
			top: -2rem;
			i {
				display: block;
				font-size: 3rem;
				text-align: center;
				padding-top: .5rem;
			}
		}
		.person-name {
			width: 100%;
			font-size: 1.5rem;
			font-weight: bold;
			position: absolute;
			left: 0rem;
			top: 3rem;
			text-align: center;
		}
		.person-info {
			width: 100%;
			height: 10rem;
			margin-top: 5rem;
			display: inline-block;
			.info-row {
				margin-bottom: 1rem;
				.info-title {
					display: inline-block;
					width: 4rem;
				}
			}
		}
	}
}
</style>