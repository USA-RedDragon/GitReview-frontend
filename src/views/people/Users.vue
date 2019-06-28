<template>
  <div class="home">
    <p class="display-1">Users</p>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:items="props">
        <td>
          <v-avatar size="32">
            <img :src="props.item.avatarUrl" alt="avatar">
          </v-avatar>
          <router-link
            :to="'/people/users/' + props.item.id"
            v-if="admin"><span> {{ props.item.name }}</span>
          </router-link>
          <span v-else> {{ props.item.name }}</span>
        </td>
        <td>{{ props.item.login }}</td>
        <td>
          <v-icon v-if="props.item.admin">check_circle</v-icon>
          <v-icon v-if="!props.item.admin">cancel</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Users",
  data: () => ({
    headers: [
      { text: "Name", value: "name", sortable: true },
      { text: "Username", value: "login", sortable: true },
      { text: "Admin", value: "admin", sortable: true }
    ],
    users: [],
    admin: false,
  }),
  mounted() {
    axios.get("/api/v1/users").then(res => {
      this.users = res.data;
    });
    axios.get("/api/v1/users/me").then(res => {
      this.admin = res.data.admin;
    });
  }
};
</script>
