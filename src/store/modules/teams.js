import { data } from '@/shared';

export default {
    namespaced: true,
  state: {
    teams: [],
  },

  mutations: {
    addTeam(state, team) {
      state.teams.push(team);
    },
    updateTeam(state, team) {
      const index = state.teams.findIndex((h) => h.id === team.id);
      state.teams.splice(index, 1, team);
      state.teams = [...state.teams];
    },
    getTeams(state, teams) {
      state.teams = teams;
    },
    deleteTeam(state, teamId) {
      state.teams = [...state.teams.filter((t) => t.id !== teamId)];
    },
  },

  actions: {
    async addTeamAction({ commit }, team) {
      const addedTeam = await data.createTeam(team);
      commit("addTeam", addedTeam);
    },
    async deleteTeamAction({ commit }, team) {
      const deletedTeamId = await data.deleteTeam(team);
      commit("deleteTeam", deletedTeamId);
    },
    async getTeamsAction({ commit }) {
      const teams = await data.getTeams();
      commit("getTeams", teams);
    },
    async updateHeroAction({ commit }, team) {
      const updatedteam = await data.updateTeam(team);
      commit("updateTeam", updatedteam);
    },
  },

  getters: {
    getTeamById: (state) => (id) => state.teams.find((t) => t.id === id),
  },
};
