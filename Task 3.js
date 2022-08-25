var arr=[1,2,3,4,5];


// for iteration
for (var i=0;i<=arr.length;i++){
    console.log(arr[i]);
}


// for in iteration
for(var key in arr){
    console.log(key,arr[key]);
}


// for of iteration
for(var value of arr){
    console.log(arr);
}


//  foreach iteration
arr.forEach(function(x,index){
    console.log("number",x);
    console.log("index",index);
});

// Own resume data

var resume ={
    Name: 'K HARI PRAKASH',
    DOB: '27/12/2001',
    Nationality: 'India',
    project:[{name:'Portfolio', language:'Html,CSS'}],
    College: SRMIST,
    Year: Third
}
console.log(Object.keys(resume));
console.log(Object.values(resume));




