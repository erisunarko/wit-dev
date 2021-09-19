<template>
  <div class="px-sm-8 py-sm-8">
    <v-row>
      <v-col>
        Variable Parameters
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
              Add Parameter
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.actions>
        <v-icon class="pointer px-1" color="blue">mdi-pencil-box-outline</v-icon>
        <v-icon class="pointer px-1" color="red">mdi-trash-can-outline</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'VariableParameters',

    components: {},

    data: () => ({
      search: '',
      fields: [
        {
          value: 'no',
          text: 'NO',
        },
        {
          value: 'parameter_id',
          text: 'PARAMETER ID',
        },
        {
          value: 'description',
          text: 'DESCRIPTION',
        },
        {
          value: 'tabs',
          text: 'TABS',
        },
        {
          value: 'parameters',
          text: 'PARAMETERS',
        },
        {
          value: 'actions',
          text: 'ACTIONS',
        },
      ],
      items: [
        {
          no: 1,
          parameter_id: '334232',
          description: 'Params Eko',
          tabs: 'kentang',
          parameters: 'bakwan',
          actions: '',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
