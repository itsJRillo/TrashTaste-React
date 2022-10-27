import axios from "axios"

const KEY = import.meta.env.VITE_API_KEY

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:30,
        key:KEY
    },
    headers:[]
})

