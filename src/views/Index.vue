<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="text-left">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            Stress Monitoring
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list
        class="text-left"
        dense
        nav
      >
        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group
          :value="true"
          prepend-icon="mdi-file-document-multiple-outline"
        >
          <template v-slot:activator>
            <v-list-item-title>Administrations</v-list-item-title>
          </template>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>

            </v-list-item-icon>

            <v-list-item-content class="ml-n2">
              <v-list-item-title>
                <v-icon class="pr-2" size="12">{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'mdi-circle-outline',
        title: 'User Management',
        to: '/administrations/user',
      },
      {
        icon: 'mdi-circle-outline',
        title: 'Role Management',
        to: '/administrations/role',
      },
      {
        icon: 'mdi-circle-outline',
        title: 'Menu Management',
        to: '/administrations/menu',
      },
      {
        icon: 'mdi-circle-outline',
        title: 'Session Management',
        to: '/administrations/session',
      },
      {
        icon: 'mdi-circle-outline',
        title: 'Variable Parameters',
        to: '/administrations/variable',
      },
      {
        icon: 'mdi-circle-outline',
        title: 'Log Activity',
        to: '/administrations/activity',
      },
    ]
  }),
};
</script>