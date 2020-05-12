import * as axios from 'axios';

const getTeams = async function(){
    try {
    const response = await axios.get('api/teams.json');
    const teams = response.data;
    if (!response.data) return [];
    return teams;
    }
    catch (error) {
    console.error(error);
    return [];
  }
};

const getTeam = async function(){

};

export const data = {
    getTeams,
    getTeam,
}