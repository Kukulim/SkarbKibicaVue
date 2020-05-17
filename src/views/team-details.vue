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

    <div class="form-check" v-if="team.id">
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
      <button class="btn btn-info m-2" @click="cancelTeam()">
        <span>Anuluj</span>
        <i class="fas fa-undo"></i>
      </button>
      <button class="btn btn-warning m-auto" @click="deleteTeam()" v-if="team.id">
        <span>Usuń</span>
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
  async created() {
    if (this.isAddMode) {
      this.team = {
        id: undefined,
        name:'',
        created: '',
        clubColors: '',
        stadium: {
          name: '',
          adress:'',
          seats:''
        },
      };
      this.loading = false;
      this.showMore = true;
    } else {
    this.team = await data.getTeam(this.id);
    this.loading = false;
    }
  },
  methods: {
    cancelTeam() {
      this.$router.push({ name: 'skarb' });
    },
    async saveTeam() {
      if(this.isAddMode){
        await data.createTeam(this.team);
        this.cancelTeam();
      }
      else{
      await data.updateTeam(this.team);
      this.cancelTeam();
      }
    },
    async deleteTeam(){
      await data.deleteTeam(this.team.id);
      this.cancelTeam();
    },
  },
  computed: {
    isAddMode() {
      return !this.id;
    },
  },
};
</script>

