import * as axios from 'axios';

const getTeams = async function(){
    const response = await axios.get('api/teams.json');
    const teams = response.data;
    return teams;   
};

export const data = {
    getTeams,
}