const box=document.getElementById("box");

const promise1= new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve("Initializing Hack program....");
    },1000)
})

const promise2= new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve("Hacking Tushar's Username....");
    },3000)
})

const promise3= new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve("Username found Stranger007....");
    },5000)
})

const promise4= new Promise((resolve, reject) => {
    setInterval(()=>{
        resolve("Connecting to Instagram....");
    },7000)
})


const main1=async()=>{
    console.time("run")
    let p1= await promise1;
    box.innerHTML=box.innerHTML+`<p>${p1}</p>`;
    let p2= await promise2;
    box.innerHTML=box.innerHTML+`<p>${p2}</p>`;
    let p3= await promise3;
    box.innerHTML=box.innerHTML+`<p>${p3}</p>`;
    let p4= await promise4;
    box.innerHTML=box.innerHTML+`<p>${p4}</p>`;
    console.timeEnd("run");
}

main1();