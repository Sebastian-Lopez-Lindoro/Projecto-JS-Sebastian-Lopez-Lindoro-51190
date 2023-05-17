const mainCarousel = async () => {
   try {
     const response = await fetch("./carousel.json")
     const items = await response.json()
     const carousel = document.getElementById("carousel")
 
     items.forEach((item) => {
       const carouselItem = document.createElement("div")
       carouselItem.className = "carousel-inner"
       carouselItem.innerHTML = `
         <div class="carousel-item ${item.class}">
            <img src="./img/${item.image}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
               <h5>${item.name}</h5>
            </div>
         </div>
       `
       carousel.append(carouselItem)
     })
 
   }catch (error) {
     console.log(error)
   }
}
 
mainCarousel()
 