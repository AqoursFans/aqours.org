<!-- Template -->
<template>
  <v-flex xs12 sm3 @click="showDetail(true)">
    <v-card>
      <v-icon>account_circle</v-icon>
      <v-card-title>
        <div>
          <h3 class="headline mb-0">{{info.name}}</h3>
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
      </v-card-title>
    </v-card>
  </v-flex>
</template>
<!-- Script -->
<script>
  export default {
    name: 'Person',
    props: ['info'],
    methods: {
      showDetail (status) {
        this.$store.dispatch('toggleDetail', status)
      }
    }
  }
</script>
<!-- Style -->
<style lang="scss">
.v-card {
  margin: 1rem;
  cursor: pointer;
  .v-icon {
    color: #009688;
    padding-top: 1rem;
    font-size: 4rem;
  }
  .v-card__title {
    text-align: left;
  }
}
</style>