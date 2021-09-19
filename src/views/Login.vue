<template>
  <v-app>
    <div class="d-flex justify-center align-center" style="height: 100%">
      <v-card class="px-6 py-6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <div>
            <label for="username"> Username </label>
            <v-text-field
              v-model="username"
              id="username"
              color="primary"
              autocomplete="off"
              :rules="usernameRules"
              outlined
              required
              dense
            />
          </div>
          <div>
            <label for="password"> Password </label>
            <v-text-field
              v-model="password"
              id="password"
              type="password"
              color="primary"
              autocomplete="off"
              :rules="passwordRules"
              outlined
              required
              dense
            />
          </div>
          <div>
            <v-checkbox v-model="rememberMe" label="Remember Me" />
          </div>
          <div>
            <v-btn
              class="text-capitalize"
              color="primary"
              block
              @click="submit"
            >
              Log In
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Login',

  components: {
  },

  data: () => ({
    valid: false,
    username: '',
    password: '',
    rememberMe: false,
    usernameRules: [v => !!v || 'Username is required'],
    passwordRules: [v => !!v || 'Password is required'],
  }),

  methods: {
    submit () {
      if (this.validate()) {
        if (this.username === this.password) this.$router.push({ name: 'Index' })
      }
    },
    validate () {
      return this.$refs.form.validate()
    }
  }
}
</script>
