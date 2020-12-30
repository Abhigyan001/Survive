import axios from 'axios';

const sendScore = async (name, score) => {
  const result = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/njRFjf7c2U2mKScaLf24/scores/', { user: name, score })
    .then(res => res.data)
    .catch(err => err.response.data);
  return result;
};

export default sendScore;