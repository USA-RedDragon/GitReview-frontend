<template>
  <div class="home">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-card>
          <v-card-title class="title">Commit Details</v-card-title>
          <v-card-text>
              <span class="font-weight-bold">Review:</span>
              {{change.review}}
              <br />
              <span class="font-weight-bold">Verified:</span>
                <v-icon v-if="change.verified">check_circle</v-icon>
                <v-icon v-if="!change.verified">error</v-icon>
              <br />
              <span class="font-weight-bold">Updated:</span>
              {{change.updated}}
              <br />
              <span class="font-weight-bold">Author:</span>
              {{change.author}}
              <br />
              <span class="font-weight-bold">Owner:</span>
              <br />
              <v-chip>
                  <v-avatar>
                    <img :src="change.owner.avatarUrl" alt="avatar">
                  </v-avatar>
                  {{change.owner.name}}
              </v-chip>
              <br />
              <span class="font-weight-bold">Assignee:</span>
              <br />
              <v-chip>
                  <v-avatar>
                    <img :src="change.assignee.avatarUrl" alt="avatar">
                  </v-avatar>
                  {{change.assignee.name}}
              </v-chip>
              <br />
              <span class="font-weight-bold">Reviewers:</span>
              <br />
              <span v-for="(reviewer, i) in change.reviewers" :key="i">
                <v-chip>
                  <v-avatar>
                    <img :src="reviewer.avatarUrl" alt="avatar">
                  </v-avatar>
                  {{reviewer.name}}
                  <v-icon right>{{reviewIcon(reviewer.vote)}}</v-icon>
                </v-chip>
                <br />
              </span>
              <span class="font-weight-bold">Project:</span>
              {{change.project}}
              <br />
              <span class="font-weight-bold">Branch:</span>
              {{change.branch}}
              <br />
              <span class="font-weight-bold">Topic:</span>
              {{change.topic}}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title class="title">Commit Message</v-card-title>
          <v-card-text>
              <pre class="message">{{change.message}}</pre>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card>
          <v-card-title class="title">Related Changes</v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "ChangeDetails",
  data: () => ({
    change: {
      id: 1,
      subject: "Add toggle for face auto unlock (2/2)",
      message: "Add toggle for face auto unlock (2/2)\n\n" +
               "Details about the above commit\n\n" +
               "Signed-off-by: jhenrique09 <jhenrique09.mcz@hotmail.com>\n" +
               "Signed-off-by: Ashwin R C <ashwin2001achu@gmail.com>\n\n" +
               "Change-Id: I0cdd47255291fb3f560770cfaeda304eb49f5a14",
      status: "",
      owner: {
        name: "Dillon Brosche",
        avatarUrl: "https://avatars0.githubusercontent.com/u/1463336?v=4"
      },
      author: "Dillon Brosche",
      project: "packages_apps_Settings",
      assignee: {
        name: "Jacob McSwain",
        avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4"
      },
      reviewers: [
        {
          name: "Jacob McSwain",
          avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4",
          vote: "+1",
        },
        {
          name: "Robert'); DROP TABLE Students; --",
          avatarUrl:
            "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg",
          vote: "+2",
        },
        {
          name: "Test 2",
          avatarUrl:
            "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg",
          vote: "-1",
        }
      ],
      branch: "inv-9.0",
      topic: "test",
      updated: "Feb 24, 2019",
      size: "",
      review: "+2",
      verified: true
    }
  }),
  methods: {
    reviewIcon: function(vote) {
      if(vote === '+1') {
        return 'exposure_plus_1';
      } else if(vote === '+2') {
        return 'exposure_plus_2';
      } else if(vote === '-1') {
        return 'exposure_minus_1';
      } else if(vote === '-2') {
        return 'exposure_minus_2';
      } else {
        return vote;
      }
    }
  }
};
</script>

<style scoped>
.message {
  white-space: pre-wrap;
}
</style>
