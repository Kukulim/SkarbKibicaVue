import * as axios from 'axios';

const server = "http://skar.kibica.api.hostingasp.pl/";

const getTeams = async function(){
    try {
      const response = await axios.get(`${server}api/teams`);
      const teams = response.data;
      if (!response.data) return [];
      return teams;
    }
    catch (error) {
    console.error(error);
    return [];
  }
};

const getTeam = async function(id){
  try {
    const response = await axios.get(`${server}api/teams/${id}`);
    const team = response.data;
    if (!team) return console.log("bład pusta druzyna");
    return team;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateTeam = async function(team){
  try{
    await axios.put(`${server}api/teams/${team.id}`, team, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const createTeam = async function(team){
  try{
    await axios.post(`${server}api/teams/`, team, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const deleteTeam = async function(id){
  try{
    await axios.delete(`${server}api/teams/${id}`);
  } catch (error) {
    console.error(error);
    return null;
}};

const getPlayers = async function(teamId, teamSquadId){
  try {
    const response = await axios.get(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}/players`);
    const players = response.data;
    if (!response.data) return [];
    return players;
  }
  catch (error) {
  console.error(error);
  return [];
}
};

const getPlayer = async function(teamId, teamSquadId, playerId){
  try {
    const response = await axios.get(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${playerId}`);
    const player = response.data;
    if (!response.data) return {};
    return player;
  }
  catch (error) {
  console.error(error);
  return {};
}
};

const createPlayer = async function(teamId, teamSquadId, player){
  try{
    await axios.post(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}/players/`, player, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const updatePlayer = async function(teamId, teamSquadId,playerId, player){
  try{
    await axios.put(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${playerId}`, player, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const deletePlayer = async function(teamId, teamSquadId, id){
  try{
    await axios.delete(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${id}`);
  } catch (error) {
    console.error(error);
    return null;
}};

const addTeam = async function(teamId, teamSquad){
  try {
    await axios.post(`${server}api/teams/${teamId}/TeamSquads/`, teamSquad, {headers: {"Content-Type": "application/json"}});
  }
  catch (error) {
  console.error(error);
  return [];
}
};

const getTeamSquad = async function(teamId, teamSquadId){
  try {
    const response = await axios.get(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}`);
    const team = response.data;
    if (!team) return console.log("bład pusta druzyna");
    return team;
  }
  catch (error) {
  console.error(error);
  return [];
}
};

const deleteTeamSquad = async function(teamId, teamSquadId){
  try {
    await axios.delete(`${server}api/teams/${teamId}/TeamSquads/${teamSquadId}`);
  }
  catch (error) {
  console.error(error);
  return [];
}
};

export const data = {
    getTeams,
    getTeam,
    updateTeam,
    createTeam,
    deleteTeam,
    getPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer,
    addTeam,
    getTeamSquad,
    deleteTeamSquad
}