<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        Log Activity
      </v-col>
    </v-row>
    <v-data-table
      :headers="fields"
      :items="items"
      class="elevation-1"
      :search="search"
      mobile-breakpoint="100"
    >
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'LogActivity',

    components: {},

    data: () => ({
      search: '',
      fields: [
        {
          value: 'no',
          text: 'NO',
        },
        {
          value: 'action_date',
          text: 'ACTION DATE',
        },
        {
          value: 'username',
          text: 'USERNAME',
        },
        {
          value: 'ip_address',
          text: 'IP ADDRESS',
        },
        {
          value: 'actions',
          text: 'ACTIONS',
        },
        {
          value: 'notes',
          text: 'notes',
        },
      ],
      items: [
        {
          no: 1,
          action_date: '19-09-2021',
          username: 'jarwokwat',
          ip_address: '10.110.23.88',
          actions: '',
          notes: 'Jarwoo kamu siapa',
        },
      ],
    }),
  }
</script>
