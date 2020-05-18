<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Skarb Kibica:</h1>
    <div class="column is-8" v-if="!loading">
      <ul class="list-group">
        <div v-for="team in teams" :key="team.id" class="list-group-item">
          <div class="card">
            <div class="card-body">
              <h5 :key="team.name" class="card-title">{{ team.name }}</h5>
              <router-link
                :to="{name: 'team-details', params:{id: team.id}}"
                tag="button"
                class="btn btn-primary"
              >
                <span>Szczególy</span>
                <i class="fas fa-check ml-3"></i>
              </router-link>
            </div>
          </div>
        </div>
      </ul>
    
      <router-link :to="{name: 'team-details', params:{id:0}}" tag="button" class="btn btn-primary m-5 add-button">
        <span>Dodaj drużynę</span>
        <i class="fa fa-plus ml-3" aria-hidden="true"></i>
      </router-link>
    </div>
    <div class="alert alert-warning" role="alert" v-show="message">{{ message }}</div>
  </div>
</template>

<script>
import { data } from "../shared";

export default {
  name: "Teams",
  data() {
    return {
      teams: [],
      loading: true,
      message: ""
    };
  },
  async created() {
    await this.loadTeams();
    this.loading = false;
  },
  methods: {
    async loadTeams() {
      this.teams = [];
      this.message = "Pobieranie danych z bazy, proszę czekać...";
      this.teams = await data.getTeams();
      this.message = "";
    }
  }
};
</script>