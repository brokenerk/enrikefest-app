import axios from 'axios';

export default axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '940aab6727msh5af01a2f69bdc9fp1e1b0cjsn44717d457b21',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})