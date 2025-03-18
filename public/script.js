console.log("running");
let planetName = "Mercury";
// let divs=document.querySelectorAll(".planets");


// let elements=document.querySelectorAll(".planets");
// elements.forEach(div=>{
//     div.addEventListener("click",async ()=>{

//     })
// })


async function planetDetails(div) {
    console.log(div);
    planetName = div.innerText;
    console.log(div.innerText);
    let planetDetail = await fetch("http://localhost:3501/planet?planetName=" + planetName)
    // let data = await planetDetail.json();
    // console.log(data);
    // if(!planetDetail.ok)
    // {
    //     console.error("An error occured");
    // }
    // console.log(planetDetail);
}

async function planetExtraDetails(type) {
    alert(type);
    // if (type.toLowerCase().includes("overview")) {
    //     type = "overview";
    // }
    // else if (type.toLowerCase().includes("structure")) {
    //     type = "structure";
    // }
    // else if (type.toLowerCase().includes("geology")) {
    //     type = "geology";
    // }
    let planetName=document.getElementById("whole3").textContent;
    console.log(planetName);
    let extraDetails = (await fetch("http://localhost:3501/extra?planetName=" + planetName + "&type=" + type));
    // if(!extraDetails.ok)
    // {
    //     console.error("something went wrong");
    // }
    console.log("fetch "+type);
    // console.log(extraDetails);
}

// let buttons=document.querySelectorAll(".buttons");
// buttons.forEach(button=>{
//     button.addEventListener("click",async ()=>{
//         let type=button.innerText;

//     })
// })


// document.getElementById("whole7").addEventListener("click", function () {
//     this.setAttribute("planetname", planetName);
//     if (this.textContent == "01  OVERVIEW") {
//         this.setAttribute("extra", "overview")
//     }
//     if (this.textContent == "02  INTERNAL STRUCTURE") {
//         window.location.href = "http://localhost:3501/extra?planetName=" + planetName + "&type=structure"
//         this.setAttribute("extra", "structure")
//     }
//     if (this.textContent == "03  SURFACE GEOLOGY") {
//         this.setAttribute("extra", "geology")
//     }
// })