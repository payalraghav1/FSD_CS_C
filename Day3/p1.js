async function orderfood(name, time){
    return new Promise((resolve,reject) => {
     setTimeou(()=> {
        resolve("Order for"+name+"has been prepared");
     },time);
    });
}
async function restaurant (){
console.log("Order food");
let pizza=await orderfood("Pizza",2000);
console.log(pizza);
let burger= await orderfood("Burger",3000);
console.log(burger);
let noodels= await orderfood("Noodles",3000);
console.log(noodels);
console.log("All food prepared");
}
restaurant();