<template>
  <div id="clients">
    <layout :title="title" v-if="showToolbar" />
    <vs-table :data="clients">
      <template slot="header" no-data-text="Nenhum cliente encontrado">
        <vs-row vs-justify="center">
          <h3>
            Clients
          </h3>
        </vs-row>
      </template>
      <template slot="thead">
        <vs-th>
          Nome
        </vs-th>
        <vs-th>
          Nascimento
        </vs-th>
        <vs-th>
          CPF
        </vs-th>
        <vs-th>
          RG
        </vs-th>
        <vs-th>
          Telefone
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].name">
            {{data[indextr].name}}
          </vs-td>

          <vs-td :data="data[indextr].birthday">
            {{data[indextr].birthday}}
          </vs-td>

          <vs-td :data="data[indextr].cpf">
            {{data[indextr].cpf}}
          </vs-td>

          <vs-td :data="data[indextr].rg">
            {{data[indextr].rg}}
          </vs-td>

          <vs-td :data="data[indextr].tel">
            {{data[indextr].tel}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    showToolbar: {
      type: Boolean,
      default: true,
    },
  },
  components: { Layout },
  data: () => ({
    clients: [],
  }),
};
</script>
