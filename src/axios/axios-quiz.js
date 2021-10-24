import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-51e37-default-rtdb.firebaseio.com/'
})