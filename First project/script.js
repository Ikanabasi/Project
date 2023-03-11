const arrows = [
    {
        photoUrl: "https://themewagon.github.io/finanza/img/carousel-1.jpg",
        Texts: "Your Financial Status <br> Is Our Goal" ,
    },
    {
        photourl: "https://themewagon.github.io/finanza/img/carousel-2.jpg",
        Texts: "True Financial <br> Support For You",
    },
]

// const img = document.querySelector(".image")
// const text = document.querySelector(".status")

// let idx = 0

// UpdateImg()

// function UpdateImg(){
//     const {photoUrl, Texts} = arrows[idx];
//     img.src = photoUrl;
//     text.innerHTML = Texts;
//     idx ++;
//     if (idx === arrows.lenght) {
//         idx = 0;
//     }
//     setTimeout(() => {
//         UpdateImg()
//     }, 10000);
// }

const tabSection = document.querySelector(".tab-section")
const btns = document.querySelectorAll(".button")
const tabContent = document.querySelector(".tab-content")
const contents = document.querySelectorAll(".content")


tabSection.addEventListener("click", (event)=>{
    const id = event.target.dataset.id


    if (id) {
       btns.forEach((btn)=>{
        btn.classList.remove("live")
       }) 
        event.target.classList.add("live")

        contents.forEach((content)=>{
            content.classList.remove("live")
        })
        const element = document.getElementById(id)
        element.classList.add("live")
    }
})
