<template>
  <div class="container">
    <h1 class="mt-5 mb-3">
      Szczególy klubu:
    </h1>
    <div v-if="!loading" class="row">
      <div class="col">
        <div class="form-group">
          <label>Klub:</label>
          <label class="form-control"> {{ team.name }} </label>
        </div>

        <div class="form-group">
          <label>Barwy:</label>
          <label class="form-control"> {{ team.clubColors }} </label>
        </div>

        <div class="form-group">
          <label>Rok załorzenia:</label>
          <label class="form-control"> {{ team.created }} </label>
        </div>
      </div>

      <div class="col sezons">
        <h2 class="text-center">Sezony:</h2>
        <div v-for="teamsquads in team.teamSquads" :key="teamsquads.Id">
          <div class="text-center">
            <router-link
              :to="{
                name: 'team-squad',
                params: { id: team.id, squadId: teamsquads.id },
              }"
              tag="button"
              class="btn btn-primary mt-2 add-button btn-lg"
            >
              <span>{{ teamsquads.season }}</span>
            </router-link>
          </div>
        </div>

        <form v-on:submit.prevent="addNewTeamSquad"
        class="new-sezon-form text-center mt-3 mb-3 ml-auto mr-auto">
          <label class="col-sm-10 new-sezon-label">Dadaj nowy sezon</label>
          <div class="col-sm-10 text-center m-auto">
            <input
              class="form-control text-center new-sezon-input"
              placeholder="Podaj rok"
              v-model="newTeamSquad.season"
            />
            <button class="btn btn-info mt-2 mb-2 add-button">
              <span>Dodaj</span>
              <i class="fa fa-plus ml-3" aria-hidden="true" />
            </button>
          </div>
        </form>

      </div>
    </div>
    <button class="btn btn-info m-2" @click="cancel()">
      <span>Powrót</span>
      <i class="fas fa-undo ml-2" />
    </button>
  </div>
</template>

<script>
import { data } from "../shared";

export default {
  name: "TeamMain",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      loading: true,
      team: {},
      newTeamSquad: {
        season:undefined,
      },
    };
  },

  async created() {
    {
      this.team = await data.getTeam(this.id);
      this.loading = false;
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: "skarb" });
    },
    addNewTeamSquad: async function(){
      await data.addTeam(this.team.id, this.newTeamSquad);
      this.team = await data.getTeam(this.id);
  }
}
};
</script>

<style lang="scss" scoped>
.add-button {
  min-width: 300px;
}
</style>
