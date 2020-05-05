<template>
  <div id="login">
    <vs-row vs-justify="center">
      <vs-alert title="Danger" active="true" color="danger" v-if="error">
        {{ error }}
      </vs-alert>
      <vs-col type="flex" vs-justify="center" vs-align="flex-end" vs-xs="12" vs-lg="4">
        <vs-card>
          <div slot="header">
            <h3>
              Login
            </h3>
          </div>
          <div>
            <vs-row vs-justify="center">
              <vs-input
                label="E-mail"
                placeholder="E-mail"
                v-model="payload.email"/>
              <vs-input
                label="Senha"
                placeholder="Senha"
                type="password"
                v-model="payload.password"/>
            </vs-row>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button
                type="gradient"
                color="primary"
                @click="login()">Entrar</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import AuthService from '@/service/AuthService';

export default {
  data: () => ({
    AuthService,
    payload: {
      email: '',
      password: '',
    },
    error: '',
  }),
  methods: {
    login() {
      this.error = '';
      const payload = Buffer.from(`${this.payload.email}:${this.payload.password}`).toString('base64');
      AuthService.login(payload).then(({ data }) => {
        localStorage.setItem('token', data.token);
        this.$router.push({ name: 'clients' });
      }).catch(() => {
        this.error = 'E-mail ou Senha inválidos!';
      });
    },
  },
};
</script>

<style lang="sass">
#login
  margin-top: 35vh;
</style>
