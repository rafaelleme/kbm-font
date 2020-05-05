<template>
  <vs-navbar collapse v-model="activeItem" class="nabarx">
    <div slot="title">
      <vs-navbar-title>
        Application
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
      <a href="/clients">Clients</a>
    </vs-navbar-item>
    <vs-navbar-item index="0">
      <a href="#" @click="logout()">Sair</a>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
import AuthService from '@/service/AuthService';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    AuthService,
    activeItem: 0,
  }),
  methods: {
    logout() {
      AuthService.logout(this.$router);
    },
  },
};
</script>
