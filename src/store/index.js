import Vue from 'vue';
import Vuex from 'vuex';

import teamsModule from './modules/teams';
import teamSquadsModule from './modules/teamSquads'

Vue.use(Vuex);

export default new Vuex.Store ({
  modules: {
    teams: teamsModule,
    teamSquads: teamSquadsModule,
  }
});