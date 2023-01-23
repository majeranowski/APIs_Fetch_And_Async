//creating async function
async function catApi() {
    //waiting for the response from the server to fetch the API and store it to the cat variable
    let cat = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
    //displaying URL of fetched cat gif
    console.log(cat.url)
};
//calling a function
catApi();