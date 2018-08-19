<!-- Template -->
<template>
  <div>
    <v-navigation-drawer
    clipped
    fixed
    v-model="drawer"
    app
    :width="200"
    >
    <v-list dense>
      <v-list-tile>
        <router-link to="/" exact>マイページ</router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link to="/Schedule" exact>スケジュール</router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link to="/Member" exact>社員一覧</router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link to="/Apply" exact>各種申請</router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link to="/Board" exact>掲示板</router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link to="/File" exact>ファイル</router-link>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left class="header">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Aqours</v-toolbar-title>
    <v-spacer />
    <v-tooltip bottom>
      <v-btn icon slot="activator">
        <i class="fa fa-wrench" aria-hidden="true"></i>
      </v-btn>
      <span>設定</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon slot="activator">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </v-btn>
      <span>ログアウト</span>
    </v-tooltip>
  </v-toolbar>
</div>
</template>
<!-- Script -->
<script>
  export default {
    name: 'Header',
    data: () => ({
      drawer: false
    }),
  }
</script>
<!-- Style -->
<style lang="scss">
@charset 'utf-8';
@import '../style/_variables';

.v-toolbar {
	background: linear-gradient(to bottom, #00BCD4, $_color-teal)!important;
  .v-toolbar__side-icon {
    margin-top: 0.5rem;
  }
  .v-toolbar__title {
    font-size: 2rem;
    margin: 0;
    vertical-align: middle;
  }
  .fa {
    font-size: 1.25rem!important;
  }
}
.v-list {
  padding-top: 0;
  .v-list__tile {
    padding: 0;
    height: 4rem!important;
    a {
      text-decoration: none;
      color: white;
      width: 100%;
      height: 100%;
      line-height: 4rem;
      font-size:1rem;
      &:hover {
        background-color: #303030;
      }
    }
    .router-link-active {
      background-color: #303030;
      border-bottom: 1px solid #00BCD4;
    }
  }
}
}
</style>