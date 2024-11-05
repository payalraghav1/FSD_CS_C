const fetchdata = new Promise((resolve, reject) => {
    let data = { id: 1, name: "Rahul", Age: 22 };
    setTimeout(() => {
        resolve(data);
    }, 3000);
});


fetchdata
    .then((result) => {
        console.log("Data fetched:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });