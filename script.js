/*var arr = [1,2,3,-10,20,-5] ;
var max = Math.max(...arr) ;
console.log(max) ; 

var obj1 = {name : "irshad" , age : 23} ;
var obj2 = obj1 ; 
console.log(obj1 === obj2) ;*/

function maximum () {
    var arr = [1,2,3,-10,20,-5]
    var max = arr[0];
    for(let i = 0 ; i<=arr.length-1;i++){
       if(arr[i] > max){
          max = arr[i];
       }
    }
    return max;
}

var res = maximum ();
console.log(res) ;

const obj1 = {
    name : "Irshad" ,
    age : 23
}
const obj2 = {
    name : "Irshad" ,
    age : 23
}

function result(obj1, obj2) {
    let finalRes;
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      finalRes = "true";
    } else {
      finalRes = "false";
    }
    return finalRes;
  };
  let ans =  result(obj1, obj2) ;
  console.log(ans) ;