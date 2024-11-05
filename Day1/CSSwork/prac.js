function aa(){
    console.log("first");
};
aa();


(function(){
    console.log("second");
})();


() =>{
    console.log("third"); //this os a function expression
}

let a=new Function(console.log("dcdsdc"));

// console.log("iyewufohe");
function rollnumber(num){
    console.log("roll.no",num);
    };

    setTimeout(rollnumber,3000,286544)
    console.log("kjhug")