<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Dodaj zawodnika:</h1>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Imię:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" value="imię..." />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Nazwisko:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" value="imię..." />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Miejsce urodzenia:</label>
        <div class="col-sm-4">
          <input type="text" class="input form-control" value="imię..." />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Data urodzin:</label>
        <div class="col-sm-4">
          <vc-date-picker v-model="date" color="green" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Wzrost:</label>
        <div class="col-sm-4">
          <number-input :value="175" :min="150" :max="250" inline controls></number-input>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Waga:</label>
        <div class="col-sm-4">
            <number-input :value="75" :min="50" :max="300" inline controls></number-input>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pozycja:</label>
        <div class="col-sm-4">
          <select id="inputState" class="form-control">
            <option selected>Wybierz pozycję gracza</option>
            <option>Bramkarz</option>
            <option>Obrońca</option>
            <option>Pomocnik</option>
            <option>Napastnik</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Numer:</label>
        <div class="col-sm-4">
          <number-input :value="5" :min="0" :max="99" inline controls></number-input>
        </div>
      </div>
    </form>
    <button class="btn btn-info m-2" @click="cancel()">
      <span>Powrót</span>
      <i class="fas fa-undo ml-2" />
    </button>
  </div>
</template>

<script>
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
      date: new Date(),
    };
  },
  methods: {
    cancel() {
      this.$router.back();
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
