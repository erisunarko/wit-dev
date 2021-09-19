<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        Session Management
      </v-col>
    </v-row>
    <v-data-table
      :headers="fields"
      :items="items"
      class="elevation-1"
      :search="search"
      mobile-breakpoint="100"
    >
      <template v-slot:top>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            />
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.login="{item}">
        <v-switch v-model="item.login" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'SessionManagement',

    components: {},

    data: () => ({
      search: '',
      fields: [
        {
          value: 'no',
          text: 'NO',
        },
        {
          value: 'nik',
          text: 'NIK',
        },
        {
          value: 'name',
          text: 'NAME',
        },
        {
          value: 'username',
          text: 'USERNAME',
        },
        {
          value: 'login',
          text: 'LOGIN',
        },
      ],
      items: [
        {
          no: 1,
          nik: '88339990011223',
          name: 'Paijo Legend',
          username: 'plegend',
          login: true,
        },
      ],
    }),
  }
</script>
