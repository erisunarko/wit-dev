<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        Role Management
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
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn color="primary text-capitalize" small>
              Add Group
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.actions>
        <v-btn class="text-capitalize mx-2" color="primary" outlined>Edit</v-btn>
        <v-btn class="text-capitalize mx-2" color="primary" outlined>Access Settings</v-btn>
        <v-btn class="text-capitalize mx-2" color="red" outlined>Delete</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'RoleManagement',

    components: {},

    data: () => ({
      search: '',
      fields: [
        {
          value: 'no',
          text: 'NO',
        },
        {
          value: 'group_name',
          text: 'GROUP NAME',
        },
        {
          value: 'actions',
          text: 'ACTIONS',
        },
      ],
      items: [
        {
          no: 1,
          group_name: 'Admin',
          actions: '',
        },
        {
          no: 2,
          group_name: 'User',
          actions: '',
        },
        {
          no: 3,
          group_name: 'Operator',
          actions: '',
        },
      ],
    }),
  }
</script>
