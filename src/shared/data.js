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

const deleteTeam = async function(id){
  try{
    await axios.delete(`https://localhost:5001/api/teams/${id}`);
  } catch (error) {
    console.error(error);
    return null;
}};

export const data = {
    getTeams,
    getTeam,
    updateTeam,
    createTeam,
    deleteTeam
}