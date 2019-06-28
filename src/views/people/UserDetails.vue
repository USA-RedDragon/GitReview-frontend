<template>
  <div class="home">
    <p class="display-1">User Details</p>
    <v-card>
        <v-card-title>
            <v-avatar size="32">
                <img :src="user.avatarUrl" alt="avatar">
            </v-avatar>
            <span class="headline">{{user.name}}</span>
        </v-card-title>
        <v-card-text>{{user.name}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserDetails",
  data: () => ({
    headers: [
      { text: "Name", value: "name", sortable: true },
      { text: "Username", value: "login", sortable: true },
      { text: "Admin", value: "admin", sortable: true }
    ],
    user: {}
  }),
  created() {
    axios.get(`/api/v1/users/${this.$route.params.id}`).then(res => {
      this.user = res.data;
    });
  }
};
</script>
