<template>
  <div class="container">
    <h1 class="mt-5 mb-3">
      Szczególy klubu:
    </h1>
    <div v-if="!loading">

                    <div class="form-group">
        <label for="stadium.name">Nazwa klubu:</label>
        <input
          class="input form-control"

          v-model="team.name"
        >
      </div>

            <div class="form-group">
        <label for="stadium.name">Rok załorzenia:</label>
        <input
          class="input form-control"

          v-model="team.created"
        >
      </div>

            <div class="form-group">
        <label for="stadium.name">Barwy klubu:</label>
        <input
          class="input form-control"

          v-model="team.clubColors"
        >
      </div>

      <div class="form-group">
        <label for="stadium.name">Stadion:</label>
        <input
          class="input form-control"

          v-model="team.stadium.name"
        >
      </div>

      <div
        class="form-check"
        v-if="team.id"
      >
        <input
          type="checkbox"
          class="form-check-input"
          id="showMore"
          v-model="showMore"
        >
        <label
          for="showMore"
          class="form-check-label"
        >Szczególy</label>
      </div>

      <div
        class="form-group"
        v-show="showMore"
      >
        <label for="adress">Adress:</label>
        <input
          class="input form-control"
          id="adress"
          v-model="team.stadium.adress"
        >
      </div>

      <div
        class="form-group"
        v-show="showMore"
      >
        <label for="seats">Ilość miejsc:</label>
        <input
          class="input form-control"
          id="seats"
          v-model="team.stadium.seats"
        >
      </div>
      <div class="mt-5">
        <button
          class="btn btn-success m-2"
          @click="saveTeam()"
        >
          <span>Zapisz</span>
          <i class="fas fa-save ml-2" />
        </button>
        <button
          class="btn btn-info m-2"
          @click="cancelTeam()"
        >
          <span>Anuluj</span>
          <i class="fas fa-undo ml-2 " />
        </button>
        <button
          class="btn btn-warning m-2 float-right"
          v-confirm="{
            ok: this.deleteTeam, 
            message: 'Czy napewno chcesz usunąć drużynę?',
            okText: 'Usuń',
            cancelText: 'Anuluj',
          }" 
          v-if="team.id"
        >
          <span>Usuń</span>
          <i class="fas fa-trash ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import { data } from '../shared';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "TeamDetails",
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
    this.team = { ...this.getTeamById(this.id) };
    this.loading = false;
    }
  },
  methods: {
    ...mapActions('teams', ['updateTeamAction', 'addTeamAction', 'deleteTeamAction']),
    cancelTeam() {
      this.$router.push({ name: 'skarb' });
    },
    async saveTeam() {
      if(this.isAddMode){
        await this.addTeamAction(this.team);
        this.cancelTeam();
      }
      else{
      await this.updateTeamAction(this.team);
      this.cancelTeam();
      }
    },
    async deleteTeam(){
      await this.deleteTeamAction(this.team);
      this.cancelTeam();
    },
  },
  computed: {
    ...mapGetters('teams', ['getTeamById']),
    isAddMode() {
      return !this.id;
    },
  },
};
</script>

<style>
.dg-btn--ok {
border-color: rgb(216, 61, 61) !important;
background-color: rgb(216, 61, 61) !important;
color: white !important;
transition: 0.25s ease-in-out;
}
.dg-btn--ok:hover {
color: white !important;
border-color: rgb(224, 24, 24) !important;
background-color: rgb(224, 24, 24) !important;
}

.dg-btn--cancel {
border-color: #6CC3D5 !important;
background-color: #6CC3D5 !important;
color: white !important;
transition: 0.25s ease-in-out;
}
.dg-btn--cancel:hover {
color: white !important;
border-color: #17a2b8 !important;
background-color: #17a2b8 !important;
}
</style>