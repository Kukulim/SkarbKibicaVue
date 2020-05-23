<template>
  <div class="container">
    <h1 class="mt-5 mb-3">
      witaj ze składów !
    </h1>
    <div v-for="player in players" :key="player.id">
      {{ player.firstName }}
    </div>
    <button
      class="btn btn-warning m-2 float-right"
      v-confirm="{
        ok: this.deleteTeamSquad,
        message: 'Czy napewno chcesz usunąć drużynę?',
        okText: 'Usuń',
        cancelText: 'Anuluj',
      }"
    >
      <span>Usuń całą drużynę</span>
      <i class="fas fa-trash ml-2"></i>
    </button>
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
    squadId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      players: [],
    };
  },
  async created() {
    {
      this.players = await data.getPlayers(this.id, this.squadId);
      console.log("trest");
    }
  },
  methods: {
    cancel() {
      this.$router.back()
    },
    async deleteTeamSquad() {
      await data.deleteTeamSquad(this.id, this.squadId);
      this.cancel();
    },
  },
};
</script>

<style lang="scss" scoped></style>
