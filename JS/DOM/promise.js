// 1. Open BMS - 2s 
// 2. Select the Movie - 3s
// 3. Select Seat - 5s
// 4. Book the tickets - 1s

const p = new Promise((resolve,reject)=>{
    let app = "BMS";
    if(app === "BMS"){
       resolve(); 
    }else{
        reject(new Error("BMS not found"));
    }
});
p.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Open BMS");
            resolve();
        },2000);
    });
})
p.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" Select the Movie - 3s");
            resolve();
        },3000);
    });
})
p.then(()=>{
   return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Select Seat - 5s");
            resolve();
        },5000);
    });
})
p.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Ticket Booked");
            resolve();
        },1000);
    });
})
.catch((e)=> {
    console.log("Error", e.message);
})

/*  Output:----
Ticket Booked
Open BMS
 Select the Movie - 3s
Select Seat - 5s  
*/
// ----------------------------------------------------------
// Async Await
async function BookTicket() {
await new Promise((resolve)=>setTimeout(resolve,2000));
console.log("Open BMS");
// 2. select the Movie- 3s
await new Promise((resolve)=>setTimeout(resolve,3000));
console.log("Select the Movie");
// Select Seat- 5s
await new Promise((resolve)=>setTimeout(resolve,5000));
console.log("Select seat");
// 4. Book the tickets- 1s
await new Promise((resolve)=>setTimeout(resolve,1000));
console.log("Ticket Booked");
}
BookTicket();

//---------------------------------------------------------------------------------

function wait(ms, shouldFail = false) { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      if (shouldFail) { 
        reject(new Error("errorMsg: BMS is not found")); 
      } else { 
        resolve(); 
      } 
    }, ms);
  });
} 
async function Bookticket(){
  try{
    await wait(2000, true);
    console.log("Open Book my show - 2 sec");

    await wait(4000);
    console.log("Serach for movie - 4 sec");

    await wait(3000);
    console.log("Teckect Booked - 3sec");
  }
  catch(er){
    console.log(er.message);
  }
  finally {
    console.log("Close phone");
  }
}

Bookticket();


