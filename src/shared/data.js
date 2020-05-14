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


export const data = {
    getTeams,
    getTeam,
}