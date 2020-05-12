import * as axios from 'axios';

const getTeams = async function(){
    try {
    const response = await axios.get('./api/teams.json');
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
    const response = await axios.get('../api/teams.json');
    const teams = response.data;
    const team = teams.find(t=>t.id === id);
    if (!team) return console.log("zlo");
    return team;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const data = {
    getTeams,
    getTeam,
}