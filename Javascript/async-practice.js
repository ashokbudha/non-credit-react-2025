const pr1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise-1 Resolved.");
    }, 5000);
});

const pr2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise-2 Resolved.")
    },10000);
});

async function handlePromise(){
    console.log("First");
    const val1 = await pr1;
    console.log(val1);
    console.log("Second");
    
    const val2 = await pr2;
    console.log(val2);
    console.log("Third");
}

handlePromise();