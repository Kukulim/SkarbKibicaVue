<template>
  <div class="container">
    <h1 class="mt-5 mb-3">
      Skład drużyny z roku:
    </h1>
    <h3>Bramkarze:</h3>
    <div v-for="player in getPlayersByPosition('goalkeeper')" :key="player.id">
      {{ player.firstName }}
    </div>

    <h3>Obrońcy:</h3>
    <div v-for="player in getPlayersByPosition('defender')" :key="player.id">
      {{ player.firstName }}
    </div>

    <h3>Pomocnicy:</h3>
    <div v-for="player in getPlayersByPosition('midfielder')" :key="player.id">
      {{ player.firstName }}
    </div>

    <h3>Napastnicy:</h3>
    <div v-for="player in getPlayersByPosition('forward')" :key="player.id">
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
    getPlayersByPosition(value){
      return this.players.filter( p => {
      return p.position === value
    });
    },
  },
};
</script>

<style lang="scss" scoped></style>
