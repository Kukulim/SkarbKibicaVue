<template>
  <div class="container">
    <h1 class="mt-5 mb-3">
      witaj ze składów !
    </h1>
            <div
            v-for="player in players"
            :key="player.id"
            >
            {{player.firstName}}
            
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
      console.log("trest")
    }
  },
};
</script>

<style lang="scss" scoped></style>
