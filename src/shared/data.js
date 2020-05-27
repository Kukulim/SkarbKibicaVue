import * as axios from 'axios';

const getTeams = async function(){
    try {
      const response = await axios.get('https://localhost:5001/api/teams');
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
    const response = await axios.get(`https://localhost:5001/api/teams/${id}`);
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
    await axios.put(`https://localhost:5001/api/teams/${team.id}`, team, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const createTeam = async function(team){
  try{
    await axios.post(`https://localhost:5001/api/teams/`, team, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const deleteTeam = async function(team){
  try{
    await axios.delete(`https://localhost:5001/api/teams/${team.id}`);
    return team.id;
  } catch (error) {
    console.error(error);
    return null;
}};

const getPlayers = async function(teamId, teamSquadId){
  try {
    const response = await axios.get(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}/players`);
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
    const response = await axios.get(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${playerId}`);
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
    await axios.post(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}/players/`, player, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const updatePlayer = async function(teamId, teamSquadId,playerId, player){
  try{
    await axios.put(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${playerId}`, player, {headers: {"Content-Type": "application/json"}});
  } catch (error) {
    console.error(error);
    return null;
}};

const deletePlayer = async function(teamId, teamSquadId, id){
  try{
    await axios.delete(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}/players/${id}`);
  } catch (error) {
    console.error(error);
    return null;
}};

const addTeam = async function(teamId, teamSquad){
  try {
    await axios.post(`https://localhost:5001/api/teams/${teamId}/TeamSquads/`, teamSquad, {headers: {"Content-Type": "application/json"}});
  }
  catch (error) {
  console.error(error);
  return [];
}
};

const getTeamSquad = async function(teamId, teamSquadId){
  try {
    const response = await axios.get(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}`);
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
    await axios.delete(`https://localhost:5001/api/teams/${teamId}/TeamSquads/${teamSquadId}`);
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
    addTeam,
    createTeam,
    deleteTeam,
    getPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer,
    getTeamSquad,
    deleteTeamSquad
}