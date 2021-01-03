//joke api
//https://icanhazdadjoke.com/

//movie api
//https://api.themoviedb.org/3/movie/550?api_key=7d8b86bf9e496aa5d5eee87e209d9e11

const ul = document.querySelector("#jokes");
const button = document.querySelector("button");


const getRequest = async () => {
    const jokes = await getRandomJokes();
    const li = document.createElement("li");
    li.append(jokes);
    ul.append(li);
}

const getRandomJokes = async () => {
   try{
      const endpoints = {headers : {Accept : "application/json"}}
      const request = await axios.get("https://icanhazdadjoke.com/", endpoints);
      return request.data.joke; 
   }
   catch(err){
       return "No jokes available"
   } 
}

button.addEventListener("click", getRequest);