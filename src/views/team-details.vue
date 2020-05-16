<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Szczególy klubu:</h1>
  <div v-if="!loading">
    <div class="form-group">
      <label for="id">Id:</label>
      <label class="input form-control" id="id">{{ team.id }}</label>
    </div>

    <div class="form-group">
      <label for="name">Nazwa klubu:</label>
      <input class="input form-control" id="name" v-model="team.name" />
    </div>

    <div class="form-group">
      <label for="created">Rok załorzenia:</label>
      <input class="input form-control" id="created" v-model="team.created" />
    </div>

    <div class="form-group">
      <label for="clubColors">Barwy klubowe:</label>
      <input class="input form-control" id="clubColors" v-model="team.clubColors" />
    </div>

    <div class="form-group">
      <label for="stadium.name">Stadion:</label>
      <input class="input form-control" id="stadium.name" v-model="team.stadium.name" />
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="showMore" v-model="showMore" />
      <label for="showMore" class="form-check-label">Szczególy</label>
    </div>

    <div class="form-group" v-show="showMore">
      <label for="adress">Adress:</label>
      <input class="input form-control" id="adress" v-model="team.stadium.adress" />
    </div>

    <div class="form-group" v-show="showMore">
      <label for="seats">Ilość miejsc:</label>
      <input class="input form-control" id="seats" v-model="team.stadium.seats" />
    </div>
    <div class="mt-5">
      <button class="btn btn-success m-2" @click="saveTeam()">
        <span>Zapisz</span>
        <i class="fas fa-save"></i>
      </button>
      <button class="btn btn-warning" @click="cancelTeam()">
        <span>Anuluj</span>
        <i class="fas fa-undo"></i>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
import { data } from '../shared';

export default {
  name: "Team-Details",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showMore: false,
      loading: true,
      team:{},
    };
  },
  async mounted() {
    this.team = await data.getTeam(this.id);
    this.loading = false;
  },
  methods: {
    cancelTeam() {
      this.$router.push({ name: 'skarb' });
    },
    async saveTeam() {
      await data.updateTeam(this.team);
      this.cancelTeam();
    },
    
  }
};
</script>

