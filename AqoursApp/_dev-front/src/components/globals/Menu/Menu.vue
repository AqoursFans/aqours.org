<!-- Template -->
<template>
	<menu>
		<ul>
			<li><a href="/">マイページ</a></li>
			<li><a href="/Schedule">スケジュール</a></li>
			<li><a href="/Member">社員一覧</a></li>
			<li><a href="/Apply">各種申請</a></li>
			<li><a href="/Board">掲示板</a></li>
			<li><a href="/File">ファイル</a></li>
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