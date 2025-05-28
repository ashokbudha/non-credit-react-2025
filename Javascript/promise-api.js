// Promise Api --> promise.all(), promise.allSettled(), promise.race(), promise.anu()

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise-1 resolved after 4 sec.");
        // reject("Promise-1 rejected.")
    }, 4000);
} )
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("Promise-2 resolved after 2 sec.");
        reject("Promise 2 rejected.");
    }, 2000);
} )
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise-3 resolved after 6 sec.");
        // reject("Promise-3 rejected.")
    }, 6000);
} )


// Promise.all([p1,p2,p3]).then((res)=> console.log(res))
// .catch((err)=> console.log(err));


// Promise.allSettled([p1,p2,p3]).then((res)=> console.log(res))
// .catch((err)=> console.log(err));

// Promise.race([p1,p2,p3]).then((res)=> console.log(res))
// .catch((err)=> console.log(err));

Promise.any([p1,p2,p3]).then((res)=> console.log(res))
.catch((err)=> console.log(err));
