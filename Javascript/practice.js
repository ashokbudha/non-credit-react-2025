console.log("Git Practice");
console.log("Feature code");

const userData =[
    {
    name:"saroj",
    age:17,
    hadPassedOut:false,
    occupation:undefined,
},
    {
    name:"Gyanendra",
    age:20,
    hadPassedOut:false,
    occupation:"intern",
},
    {
    name:"lucky",
    age:25,
    hadPassedOut:false,
    occupation:"swe",
}
];

const apiResponse = {
    statusCode : 200,
    message:"user data fetched sucessfully",
    data:userData

};


const getUserName = () =>{
    if(apiResponse.statusCode === 200){
        const name = apiResponse.data.filter(res => res.occupation && res.age>20).map( user => user.occupation && user.name);
        console.log(name);
    }
}

getUserName();