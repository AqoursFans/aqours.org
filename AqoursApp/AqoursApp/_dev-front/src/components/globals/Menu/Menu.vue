<!-- Template -->
<template>
	<menu>
		<ul>
			<li><router-link to="/" exact>マイページ</router-link></li>
			<li><router-link to="/Schedule" exact>スケジュール</router-link></li>
			<li><router-link to="/Member" exact>社員一覧</router-link></li>
			<li><router-link to="/Apply" exact>各種申請</router-link></li>
			<li><router-link to="/Board" exact>掲示板</router-link></li>
			<li><router-link to="/File" exact>ファイル</router-link></li>
		</ul>
	</menu>
</template>
<!-- Script -->
<script>
export default {
  name: 'Menu'
}
</script>
<!-- Style -->
<style lang="scss">
menu {
	width: 10rem;
	height: 100%;
	position: fixed;
	padding-top: 2rem;
	left: 0;
	top: 5rem;
	background-color: #000;
	li {
		width: 100%;
		text-align: center;
		display: inline-block;
		list-style: none;
		cursor: pointer;
		a {
			text-decoration: none;
			color: white;
			display: block;
			padding: 1.5rem 1rem;
			&:hover {
				background-color: #2f2f2f;
				border-bottom: 1px solid #00BCD4;
			}
		}
	}
	.router-link-active {
		background-color: #2f2f2f;
		border-bottom: 1px solid #00BCD4;
	}
}
</style>