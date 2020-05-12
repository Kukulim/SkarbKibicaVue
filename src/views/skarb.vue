<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Skarb Kibica:</h1>
<div class="column is-8" v-if="teams">
  <ul class="list-group" v-if="!selectedTeam">
      <div v-for="team in teams" :key="team.id" class="list-group-item">
        <div class="card">
          <div class="card-body">
            <h5 :key="team.name" class="card-title">{{ team.name }}</h5>
            <button class="btn btn-primary" @click="selectTeam(team)">Zaznacz <i class="fas fa-check"></i></button>
          </div>
        </div>
      </div>
  </ul>
</div>

  <TeamDetails :team="selectedTeam" v-if="selectedTeam" @save="saveTeam" @cancel="cancelTeam"/>

  </div>
</template>

<script>
import { data } from '../shared';
import TeamDetails from './klub-details';


export default {
  name: "Teams",
  data() {
    return {
      selectedTeam: undefined,
      showMore: false,
      teams: [],
    };
  },
  components: { TeamDetails },
  async created(){
    await this.loadTeams();
  },
  methods:{
    async loadTeams(){
      this.teams = [],
      this.teams = await data.getTeams();
    },
    selectTeam(team) {
      this.selectedTeam = team;
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