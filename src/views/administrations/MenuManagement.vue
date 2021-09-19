<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        Menu Management
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
              Add Menu
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.icon="{item}">
        <v-icon>{{ item.icon }}</v-icon>
      </template>
      <template v-slot:item.insert="{item}">
        <v-checkbox v-model="item.insert" />
      </template>
      <template v-slot:item.update="{item}">
        <v-checkbox v-model="item.update" />
      </template>
      <template v-slot:item.delete="{item}">
        <v-checkbox v-model="item.delete" />
      </template>
      <template v-slot:item.view="{item}">
        <v-checkbox v-model="item.view" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'MenuManagement',

    components: {},

    data: () => ({
      search: '',
      fields: [
        {
          value: 'no',
          text: 'NO',
        },
        {
          value: 'menu',
          text: 'MENU',
        },
        {
          value: 'folder',
          text: 'FOLDER',
        },
        {
          value: 'parent',
          text: 'PARENT',
        },
        {
          value: 'description',
          text: 'DESCRIPTION',
        },
        {
          value: 'status',
          text: 'STATUS',
        },
        {
          value: 'icon',
          text: 'ICON',
        },
        {
          value: 'config',
          text: 'CONFIG',
        },
        {
          value: 'insert',
          text: 'INSERT',
        },
        {
          value: 'update',
          text: 'UPDATE',
        },
        {
          value: 'delete',
          text: 'DELETE',
        },
        {
          value: 'view',
          text: 'VIEW',
        },
      ],
      items: [
        {
          no: 1,
          menu: 'Dashboard',
          folder: 'Home',
          parent: 'Room Tracking',
          description: 'Dashboard Name',
          status: 'ACTIVE',
          icon: 'mdi-home',
          config: 'Insert, Delete, View',
          insert: true,
          update: false,
          delete: true,
          view: true,
        },
      ],
    }),
  }
</script>
