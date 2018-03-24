<!-- Template -->
<template>
	<menu>
		<ul>
			<li><router-link to="/">マイページ</router-link></li>
			<li><router-link to="/Schedule">スケジュール</router-link></li>
			<li><router-link to="/Member">社員一覧</router-link></li>
			<li><router-link to="/Apply">各種申請</router-link></li>
			<li><router-link to="/Board">掲示板</router-link></li>
			<li><router-link to="/File">ファイル</router-link></li>
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
	background-color: #212121;
	border-right: 1px solid #009688;
	li {
		width: 100%;
		text-align: center;
		display: inline-block;
		list-style: none;
		cursor: pointer;
		&:hover {
			background-color: #292929;
			border-bottom: 2px solid #009688;
		}
	}
	a {
		text-decoration: none;
		color: white;
		display: block;
		padding: 1.5rem 1rem;
	}
}
</style>