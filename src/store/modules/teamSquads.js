import { data } from '@/shared';

export default {
    namespaced: true,
  state: {
    teamSquads: [],
  },

  mutations: {
    addTeamSquad(state, squad) {
      state.teamSquads.push(squad);
    },
    getTeamSquads(state, teamSquads) {
      state.teamSquads = teamSquads;
    },
    deleteTeamSquad(state, squadId) {
      state.teamSquads = [...state.teamSquads.filter((t) => t.id !== squadId)];
    },
  },

  actions: {
    async addTeamSquadAction({ commit }, teamId, teamSquad) {
      const addedTeamSquad = await data.addTeamSquad(teamId, teamSquad);
      commit("addTeamSquad", addedTeamSquad);
    },
    async deleteTeamSquadAction({ commit }, teamId, teamSquad) {
      const deletedTeamSquadId = await data.deleteTeam(teamId, teamSquad);
      commit("deleteTeamSquad", deletedTeamSquadId);
    },
    async getTeamsSquadAction({ commit }, teamId) {
      const teamSquads = await data.getTeamSquads(teamId);
      commit("getTeamSquads", teamSquads);
    },
  },

  getters: {
    getTeamSquadById: (state) => (id) => state.teamSquads.find((t) => t.id === id),
  },
};