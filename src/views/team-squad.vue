<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Skład drużyny z roku {{ this.teamSquad.season }}:</h1>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr class="text-center">
          <th scope="col" class="text-left">Imię i Nazwisko</th>
          <th scope="col">Data urodzenia</th>
          <th scope="col">Wzrost / Waga</th>
          <th scope="col">Edytuj</th>
          <th scope="col">Usuń</th>
        </tr>
      </thead>
      <tbody>
        <h5 class="m-2">Bramkarze:</h5>
        <tr
          v-for="player in getPlayersByPosition('goalkeeper')"
          :key="player.id"
          class="text-center"
        >
          <th scope="row" class="text-left">
            {{ player.firstName + " " + player.lastName }}
          </th>
          <td>{{ player.birthDate }}</td>
          <td>{{ player.height + "/" + player.weight }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="cancel()">
              <i class="fas fa-edit" />
            </button>
          </td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="deletePlayer(player.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>

        <h5 class="m-2">Obrońcy:</h5>
        <tr
          v-for="player in getPlayersByPosition('defender')"
          :key="player.id"
          class="text-center"
        >
          <th scope="row" class="text-left">
            {{ player.firstName + " " + player.lastName }}
          </th>
          <td>{{ player.birthDate }}</td>
          <td>{{ player.height + "/" + player.weight }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="cancel()">
              <i class="fas fa-edit" />
            </button>
          </td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="deletePlayer(player.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>

        <h5 class="m-2">Pomocnicy:</h5>
        <tr
          v-for="player in getPlayersByPosition('midfielder')"
          :key="player.id"
          class="text-center"
        >
          <th scope="row" class="text-left">
            {{ player.firstName + " " + player.lastName }}
          </th>
          <td>{{ player.birthDate }}</td>
          <td>{{ player.height + "/" + player.weight }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="cancel()">
              <i class="fas fa-edit" />
            </button>
          </td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="deletePlayer(player.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>

        <h5 class="m-2">Napastnicy:</h5>
        <tr
          v-for="player in getPlayersByPosition('forward')"
          :key="player.id"
          class="text-center"
        >
          <th scope="row" class="text-left">
            {{ player.firstName + " " + player.lastName }}
          </th>
          <td class="text-center">{{ player.birthDate }}</td>
          <td class="text-center">{{ player.height + "/" + player.weight }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="cancel()">
              <i class="fas fa-edit" />
            </button>
          </td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="deletePlayer(player.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

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

    <router-link
      :to="{ name: 'player-details', params: {playerId:0} }"
      tag="button"
      class="btn btn-secondary add-button"
    >
      <span>Dodaj zawodnika</span>
      <i class="fa fa-plus ml-3" aria-hidden="true" />
    </router-link>
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
      teamSquad: {},
    };
  },
  async created() {
    {
      this.players = await data.getPlayers(this.id, this.squadId);
      this.teamSquad = await data.getTeamSquad(this.id, this.squadId);
    }
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    async deleteTeamSquad() {
      await data.deleteTeamSquad(this.id, this.squadId);
      this.cancel();
    },
    async deletePlayer(playerid) {
      await data.deletePlayer(this.id, this.squadId, playerid);
      this.players = await data.getPlayers(this.id, this.squadId);
    },
    getPlayersByPosition(value) {
      return this.players.filter((p) => {
        return p.position === value;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
