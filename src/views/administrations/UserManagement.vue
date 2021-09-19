<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        User Management
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
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'UserManagement',

    components: {},

    data: () => ({
      search: '',
      fields: [

        {
          value: 'full_name',
          text: 'FULL NAME',
        },
        {
          value: 'username',
          text: 'USERNAME',
        },
        {
          value: 'email',
          text: 'EMAIL',
        },
        {
          value: 'phone',
          text: 'MOBILE NO.',
        },
        {
          value: 'date_created',
          text: 'DATE CREATED',
        },
        {
          value: 'created_by',
          text: 'CREATED BY',
        },
        {
          value: 'last_login',
          text: 'LAST LOGIN',
        },
        {
          value: 'last_active',
          text: 'LAST ACTIVE',
        },
        {
          value: 'status',
          text: 'STATUS',
        },
        {
          value: 'group',
          text: 'GROUP',
        },
        {
          value: '',
          text: 'ACTIONS',
        },
      ],
      items: [
        {
          full_name: 'Joko Susilo',
          username: 'jokosusilo',
          email: 'jokosusilo@gmail.com',
          phone: '087533233128',
          date_created: '18-09-2021',
          created_by: '18-09-2021',
          last_login: '18-09-2021',
          last_active: '18-09-2021',
          status: 'ONLINE',
          group: 'Joko Group',
        },
        {
          full_name: 'Sofian Eko',
          username: 'sofianeko',
          email: 'sofianeko@gmail.com',
          phone: '081567888009',
          date_created: '18-09-2021',
          created_by: '18-09-2021',
          last_login: '18-09-2021',
          last_active: '18-09-2021',
          status: 'ONLINE',
          group: 'Joko Group',
        },
        {
          full_name: 'Momo Carlie',
          username: 'momocarlie',
          email: 'momocarlie@gmail.com',
          phone: '081776233128',
          date_created: '18-09-2021',
          created_by: '18-09-2021',
          last_login: '18-09-2021',
          last_active: '18-09-2021',
          status: 'ONLINE',
          group: 'Joko Group',
        },
      ],
    }),
  }
</script>
