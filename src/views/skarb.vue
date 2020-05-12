<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Skarb Kibica:</h1>
<div class="column is-8" v-if="teams">
  <ul class="list-group">
      <div v-for="team in teams" :key="team.id" class="list-group-item">
        <div class="card">
          <div class="card-body">
            <h5 :key="team.name" class="card-title">{{ team.name }}</h5>
            <router-link :to="{name: 'klub-details', params:{id: team.id}}"
              tag="button" 
              class="btn btn-primary" 
              >
              <span>Szczególy</span> <i class="fas fa-check"></i>
            </router-link>
          </div>
        </div>
      </div>
  </ul>
</div>
</div>
</template>

<script>
import { data } from '../shared';

export default {
  name: "Teams",
  data() {
    return {
      teams: [],
    };
  },
  async created(){
    await this.loadTeams();
  },
  methods:{
    async loadTeams(){
      this.teams = [],
      this.teams = await data.getTeams();
    },
    cancelTeam(){
      this.selectedTeam = undefined;
    },
    saveTeam(team) {
      const index = this.teams.findIndex(t => t.id === team.id);
      this.teams.splice(index, 1, team);
      this.teams = [...this.teams];
      this.selectedTeam = undefined;
    },
  },
};
</script>