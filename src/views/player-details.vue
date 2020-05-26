<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Dodaj zawodnika:</h1>
    <div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Imię:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" placeholder="Jan" v-model="player.firstName" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Nazwisko:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" placeholder="Kowalski" v-model="player.lastName"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Miejsce urodzenia:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" placeholder="Warszawa, Polska" v-model="player.birthPlace"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Data urodzin:</label>
        <div class="col-sm-4">
          <vc-date-picker v-model="player.birthDate" color="green" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Wzrost:</label>
        <div class="col-sm-4">
          <number-input v-model="player.height" :min="150" :max="250" inline controls></number-input>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Waga:</label>
        <div class="col-sm-4">
            <number-input v-model="player.weight" :min="50" :max="300" inline controls></number-input>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pozycja:</label>
        <div class="col-sm-4">
          <select id="inputState" class="form-control" v-model="player.position">
            <option selected>Bramkarz</option>
            <option>Obrońca</option>
            <option>Pomocnik</option>
            <option>Napastnik</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Numer:</label>
        <div class="col-sm-4">
          <number-input v-model="player.number" :min="0" :max="99" inline controls></number-input>
        </div>
      </div>
    </div>
            <button
          class="btn btn-success m-2"
          @click="savePlayer()"
        >
          <span>Zapisz</span>
          <i class="fas fa-save ml-2" />
        </button>
    <button class="btn btn-info m-2" @click="cancel()">
      <span>Powrót</span>
      <i class="fas fa-undo ml-2" />
    </button>
    
  </div>
</template>

<script>
import { data } from '../shared';

export default {
  name: "PlayerDetails",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    squadId: {
      type: Number,
      default: 0,
    },
    playerId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      player: {},
      loading: true,
    };
  },
    async created() {
    if (this.isAddMode) {
      this.player = {
        id: undefined,
        firstName:'',
        lastName: '',
        birthDate: new Date(),
        birthPlace:'',
        height:175,
        weight:70,
        position:undefined,
        number:5,
      };
      this.loading = false;
    } else {
    this.player = await data.getPlayer(this.id, this.squadId, this.playerId);
    this.player.birthDate = new Date(this.player.birthDate);

    }
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    async savePlayer() {
      if(this.isAddMode){
        await data.createPlayer(this.id, this.squadId, this.player);
        this.cancel();
      }
      else{
      await data.updatePlayer(this.id, this.squadId, this.playerId, this.player);
      this.cancel();
      }
    },
  },
    computed: {
    isAddMode() {
      return !this.playerId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
