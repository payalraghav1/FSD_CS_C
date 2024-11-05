async function fetchdata(){
    try{
        let response =await fetch("https://api.github.com/users?per_page=10");
        let data=await response.json();
    }
    catch(error){
        console.log(error);
    }
    }
    fetchdata();
}