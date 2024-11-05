const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        let data = [
            { id: 1, name: "Rahul", age: 22 },
            { id: 2, name: "Janvi", age: 21 },
            { id: 3, name: "Mohini", age: 23 },
            { id: 4, name: "Anshika", age: 22 },
            { id: 5, name: "Payal", age: 20 },
            { id: 6, name: "Yashika", age: 24 }
        ];

        setTimeout(() => {
            if (id <= data.length) {
                resolve(data[id - 1]);
            } else {
                reject(`Student with ID ${id} not found`);
            }
        }, 1000);
    });
};


const studentPromises = [1, 2, 3, 4, 5].map(id => fetchData(id));

Promise.all(studentPromises)
    .then((results) => {
        console.log("Students fetched:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });