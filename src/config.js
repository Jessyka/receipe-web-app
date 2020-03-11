const APP_ID = "13823779"
const APP_KEY = "5f10d3f8439c28de326a0de74774437b"
export const API_URL = (query = 'chicken') => `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
