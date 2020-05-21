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

      <div class="col">
        <h2 class="text-center">Sezony:</h2>
            <div
            v-for="teamsquads in team.teamSquads"
            :key="teamsquads.Id"
            >

                <router-link
                :to="{name: 'team-squad', params:{id: team.id ,squadId: teamsquads.season}}"
                tag="button"
                class="btn btn-secondary"
              >
                <span>{{ teamsquads.season }}</span>
                
              </router-link>

            </div>
      </div>
    </div>
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
    };
  },

  async created() {
    {
      this.team = await data.getTeam(this.id);
      this.loading = false;
    }
  },
};
</script>
