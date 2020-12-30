import axios from 'axios';
import sortAndSlice from './sort-and-slice';

const getScore = async () => {
  const request = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/njRFjf7c2U2mKScaLf24/scores/', {})
  .then(res => res.data.result)
  .then(res => sortAndSlice(res)).catch( (error) => {
    console.log(error.toJSON());
  });  
  return request;
}

export default getScore;