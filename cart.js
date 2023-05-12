// MANGA code

document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("mangaStorage"))

    cart.forEach((mangaPack, index) => {
      const manga = document.createElement("div")
      const mangaId = `manga_${index}`
      manga.id = mangaId;
      manga.className = "itemStyle"
      manga.innerHTML = `
        <img class="cart_img" src="img/manga pack.jpg" alt="">
        <p class="cart_p">Manga Pack</p>
        <p class="cart_p2">$ ${mangaPack.price}</p>
        <button id="manga_delete_${index}" class="delete_button">REMOVE</button>
      `
      cart_cards.append(manga)
  
      deleteManga(mangaId, index)
    })
  
    function deleteManga(mangaId, index) {
      const mangaDelete = document.getElementById(`manga_delete_${index}`)
      mangaDelete.addEventListener("click", () => {
        document.getElementById(mangaId).remove()
        localStorage.removeItem("mangaStorage")
        Toastify({
          className: "info",
          text: "Product removed from cart!",
          duration: 2000
        }).showToast()
      })
    }
  })

// ANIME code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("animeStorage"))

  cart.forEach((animePack, index) => {
    const anime = document.createElement("div")
    const animeId = `anime_${index}`
    anime.id = animeId;
    anime.className = "itemStyle"
    anime.innerHTML = `
      <img class="cart_img" src="img/anime pack.jpg" alt="">
      <p class="cart_p">Anime Pack</p>
      <p class="cart_p2">$ ${animePack.price}</p>
      <button id="anime_delete_${index}" class="delete_button">REMOVE</button>
    `
    cart_cards.append(anime)

    deleteManga(animeId, index)
  })

  function deleteManga(animeId, index) {
    const animeDelete = document.getElementById(`anime_delete_${index}`)
    animeDelete.addEventListener("click", () => {
      document.getElementById(animeId).remove()
      localStorage.removeItem("animeStorage")
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
        }).showToast()
    })
  }
})


// OVA & MOVIE code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("ovaMovieStorage"))

  cart.forEach((ovaMoviePack, index) => {
    const ovaMovie = document.createElement("div")
    const ovaMovieId = `ovaMovie_${index}`
    ovaMovie.id = ovaMovieId;
    ovaMovie.className = "itemStyle"
    ovaMovie.innerHTML = `
      <img class="cart_img" src="img/ovamovie pack.jpg" alt="">
      <p class="cart_p">OVA & Movie Pack</p>
      <p class="cart_p2">$ ${ovaMoviePack.price}</p>
      <button id="ovamovie_delete_${index}" class="delete_button">REMOVE</button>
    `
    cart_cards.append(ovaMovie)

    deleteManga(ovaMovieId, index)
  })

  function deleteManga(ovaMovieId, index) {
    const ovaMovieDelete = document.getElementById(`ovamovie_delete_${index}`)
    ovaMovieDelete.addEventListener("click", () => {
      document.getElementById(ovaMovieId).remove()
      localStorage.removeItem("ovaMovieStorage")
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
      }).showToast()
    })
  }
})

// COMPLETE code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("completeStorage"))

  cart.forEach((completePack, index) => {
    const complete = document.createElement("div")
    const completeId = `complete_${index}`
    complete.id = completeId;
    complete.className = "itemStyle"
    complete.innerHTML = `
      <img class="cart_img" src="img/complete Pack.jpg" alt="">
      <p class="cart_p">Complete Pack</p>
      <p class="cart_p2">$ ${completePack.price}</p>
      <button id="complete_delete_${index}" class="delete_button">REMOVE</button>
    `
    cart_cards.append(complete)

    deleteManga(completeId, index)
  })

  function deleteManga(completeId, index) {
    const completeDelete = document.getElementById(`complete_delete_${index}`)
    completeDelete.addEventListener("click", () => {
      document.getElementById(completeId).remove()
      localStorage.removeItem("completeStorage")
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
      }).showToast()
    })
  }
})

//EMPTY CART

document.addEventListener("DOMContentLoaded", () => {
  const emptyCart = document.getElementById("cart_emp")
  emptyCart.addEventListener("click", () => {
    document.getElementById("cart_cards").remove()
    localStorage.removeItem("mangaStorage")
    localStorage.removeItem("animeStorage")
    localStorage.removeItem("ovaMovieStorage")
    localStorage.removeItem("completeStorage")
    Toastify({
      className: "info",
      text: "Cart is now empty!",
      duration: 2000
    }).showToast()
  })
})


//PURCHASE SIMULATION

document.addEventListener("DOMContentLoaded", () => {
  const emptyCart = document.getElementById("cart_pur")
  emptyCart.addEventListener("click", () => {
    document.getElementById("cart_cards").remove()
    localStorage.removeItem("mangaStorage")
    localStorage.removeItem("animeStorage")
    localStorage.removeItem("ovaMovieStorage")
    localStorage.removeItem("completeStorage")
    Toastify({
      className: "info",
      text: "Thank for your purchase!",
      duration: 2000
    }).showToast()
  })
})

/////////////////


const totalValue = document.getElementById("total_value")
let totalPrice = 0;

// Retrieve mangaStorage data from local storage and update the totalPrice
const mangaStorage = JSON.parse(localStorage.getItem("mangaStorage"))
if (mangaStorage) {
  mangaStorage.forEach(item => totalPrice += item.price)
}

// Retrieve animeStorage data from local storage and update the totalPrice
const animeStorage = JSON.parse(localStorage.getItem("animeStorage"))
if (animeStorage) {
  animeStorage.forEach(item => totalPrice += item.price)
}

// Retrieve ovaMovieStorage data from local storage and update the totalPrice
const ovaMovieStorage = JSON.parse(localStorage.getItem("ovaMovieStorage"))
if (ovaMovieStorage) {
  ovaMovieStorage.forEach(item => totalPrice += item.price)
}

// Retrieve completeStorage data from local storage and update the totalPrice
const completeStorage = JSON.parse(localStorage.getItem("completeStorage"))
if (completeStorage) {
  completeStorage.forEach(item => totalPrice += item.price)
}

totalValue.innerHTML = `Total: $${totalPrice.toFixed(2)}`

/////////

