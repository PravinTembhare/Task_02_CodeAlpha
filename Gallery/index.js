let images = [
    {
        name: "Camara",
        img: ["images/Caramars/Muskhurahat.jpeg","images/Caramars/1st.webp","images/Caramars/2nd.webp","images/Caramars/3rd.webp","images/Caramars/4th.avif","images/Caramars/5th.avif","images/Caramars/6th.avif" ]
    },
    
    {
        name: "Whatsapp",
        img: ["images/whatsapp/1st.avif","images/whatsapp/2nd.avif","images/whatsapp/3rd.avif","images/whatsapp/4th.avif","images/whatsapp/5th.avif","images/whatsapp/6th.avif"]
    },
    
    {
        name: "Download",
        img: ["images/Download/1st.avif","images/Download/2nd.avif","images/Download/3rd.avif","images/Download/4th.avif","images/Download/5th.avif","images/Download/6th.avif" ]
    }
    
];



let Album = document.querySelector(".imgAlbum");
let id=0
let Images=document.querySelector(".Images")
let albumfun = function() {
    for (let i = 0; i < images.length; i++) {
     
        let img=document.createElement("img")
        let div=document.createElement('div')
        div.textContent=images[i].name
        img.setAttribute('id',id)
      img.src=images[i].img[0]
      img.classList.add("albumimg")
   
      div.classList.add("albumname")      
            Album.appendChild(img)
          Album.appendChild(div)
          id++
    }
};


albumfun();


let pravin=document.querySelectorAll(".albumimg")
let images2
let count=0
let ids
div1=document.createElement("div")
pravin.forEach(element => {
    element.addEventListener('click',function(e){
       if(count==0)[
        Images.innerHTML=""
       ]

        if(count>0){
            console.log(div1)
           div1.innerHTML=""
            Images.removeChild(div1)
            let pad=document.getElementById(`${ids}`)
            pad.classList.remove("pad")
        }
       element.classList.add("pad")
       ids=e.target.id
      console.log(ids)
      let length=images[ids].img.length
      let images1=images[ids].img
      console.log(length)
    for( i=0;i<=length-1;i++){
    images2=document.createElement('img')
    images2.classList.add('I')
    images2.src=images1[i]
    
    div1.appendChild(images2)
    }

    Images.appendChild(div1);  
    let everyimages=document.querySelectorAll('.I')
everyimages.forEach(ele =>{
    ele.addEventListener('click',function(e){
        let main = document.querySelector("#main2");
       let dis=e.target
       console.log(dis)
       main.style.display="block"
       main.style.width="100%"
       main.style.height="100%"
       main.style.position="absolute"
       main.style.backgroundColor="black"
       
       main.style.zIndex="0"
       dis.classList.remove("I")
       
       let node=main.childNodes[1].childNodes[1]
       
       node.src=e.target.src
       node.classList.add('img') 
      let button=main.childNodes[1].childNodes[3].childNodes[1]
     button.style.display="block"
button.addEventListener('click',function(){
    dis.classList.add("I")
main.style.display="none"
button.style.display="none"
})
          

        
    })
})

    count++
    console.log(count)
    })
});
 
