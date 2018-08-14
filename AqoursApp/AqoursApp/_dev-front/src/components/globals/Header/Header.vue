<!-- Template -->
<template>
	<header class="header">
		<h1>Aqours</h1>
		<nav>
			<ul>
				<li><i class="fa fa-wrench" aria-hidden="true"></i></li>
				<li><i class="fa fa-sign-out" aria-hidden="true"></i></li>
			</ul> 
		</nav>
	</header>
</template>
<!-- Script -->
<script>
export default {
  name: 'Header'
}
</script>
<!-- Style -->
<style lang="scss">
@charset 'utf-8';
@import '../style/_variables';

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	background: linear-gradient(to bottom, $_color-teal, #00BCD4);
	z-index: 1;
	h1 {
		margin: 0;
		padding-top: 1rem;
		padding-left: 1rem;
		display: inline-block;
		float: left;
		font-size: 3rem;
	}
	nav {
		float: right;
		padding-top: 2rem;
		li {
			display: inline-block;
			list-style: none;
			font-size: 1rem;
			padding-top: 1rem;
			padding-right: 1rem;
			i {
				font-size: 1.5rem!important;				
				cursor: pointer;
				&:hover {
					color: $_color-dark;
				}
			}
		}
		a {
			text-decoration: none;
		}
	}
}
</style>