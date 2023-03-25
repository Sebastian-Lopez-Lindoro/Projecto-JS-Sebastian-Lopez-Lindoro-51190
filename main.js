alert("Welcome to Ranma 1/2 website")
alert("please insert your age")

let age
do{
    age = prompt("remember that you must be 18+ to use this website \nif not you must leave immediately")
}while(age <=17){
//aca voy a usar un input para que solo pueda ser un valor numerico, pero por ahora como dijo el profesor asumo que el usuario solo puede poner numeros     
}

const nombre = prompt("Please insert your name")
alert("Welcome user " + nombre + "! enjoy your stay \nPlease choose a category to browse")
let decision

function askingClient(){  
    decision = prompt ("Manga, " + " Anime, " + " OVA, " + " Movie, " + " Exit").toLowerCase()
    switch (decision){
        case "manga": 
           let volume = prompt("insert Manga volume you want \nvalue must be 1 to 36")
           if(volume <= 0 || volume >=37){
               alert("sorry, value range must be 1 to 36")
           }else if (volume >= 1 || volume <=36){
               alert("thank you! Manga issue of choice was added to your cart")
           }break
        case "anime":
           let boxset = prompt("insert Anime boxset you want \nvalue must be 1 to 7")
           if(boxset <= 0 || boxset >=8){
               alert("sorry, value range must be 1 to 7")
           }else if (boxset >= 1 || boxset <=7){
               alert("thank you! Anime boxset of choice was added to your cart")
           }break
        case "ova":
           let chapter = prompt("insert OVA chapter you want \nvalue must be 1 to 13")
           if(chapter <= 0 || chapter >=14){
               alert("sorry, value range must be 1 to 13")
           }else if (chapter >= 1 || chapter >=13){
               alert("thank you! OVA chapter of choice was added to your cart")
           }break
        case "movie":
           let movie = prompt("insert Movie you want \nvalue must be 1 to 2")
           if(movie <= 0 || movie >=3 ){
               alert("sorry, value range must be 1 to 2")               
           }else if(movie <= 1 || movie >=2){
               alert("thank you! Movie of choice was added to your cart")
           }break
        case "exit":
            let exit = prompt("please enter exit again to leave shop")
            if(exit == "exit"){
                alert("you will exit the shop! come again soon! bye bye!")
            }else if(exit != "exit")
                alert("please refresh the website and try again")
            break
        default: alert("sorry, value must be Manga or Anime or OVA or Movie or Exit")
   }
}

while(decision != "exit"){
    askingClient()
}


