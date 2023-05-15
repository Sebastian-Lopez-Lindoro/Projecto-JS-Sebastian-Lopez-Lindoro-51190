// MANGA code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("mangaStorage"))
  const totalValueElement = document.getElementById("total_value")

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
    `;
    cart_cards.append(manga)

    deleteManga(mangaId, index)
  })

  updateTotalValue()

  function deleteManga(mangaId, index) {
    const mangaDelete = document.getElementById(`manga_delete_${index}`)
    mangaDelete.addEventListener("click", () => {
      document.getElementById(mangaId).remove()
      cart.splice(index, 1)
      localStorage.setItem("mangaStorage", JSON.stringify(cart))

      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
      }).showToast()

      updateTotalValue()
    })
  }

  function updateTotalValue() {
    const totalValue = cart.reduce((total, mangaPack) => total + mangaPack.price, 0)
    totalValueElement.textContent = `$ ${totalValue}`
  }
})


// ANIME code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("animeStorage"))
  const totalValueElement = document.getElementById("total_value")

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

    deleteAnime(animeId, index)
  })

  updateTotalValue()

  function deleteAnime(animeId, index) {
    const animeDelete = document.getElementById(`anime_delete_${index}`)
    animeDelete.addEventListener("click", () => {
      document.getElementById(animeId).remove()
      cart.splice(index, 1)
      localStorage.setItem("animeStorage", JSON.stringify(cart))
      
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
        }).showToast()

        updateTotalValue()
    })
  }
  function updateTotalValue() {
    const totalValue = cart.reduce((total, animePack) => total + animePack.price, 0)
    totalValueElement.textContent = `$ ${totalValue}`
  }
})


// OVA & MOVIE code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("ovaMovieStorage"))
  const totalValueElement = document.getElementById("total_value")

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

  updateTotalValue()

  function deleteManga(ovaMovieId, index) {
    const ovaMovieDelete = document.getElementById(`ovamovie_delete_${index}`)
    ovaMovieDelete.addEventListener("click", () => {
      document.getElementById(ovaMovieId).remove()
      cart.splice(index, 1)
      localStorage.setItem("ovaMovieStorage", JSON.stringify(cart))
      
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
      }).showToast()

      updateTotalValue()
    })
  }

  function updateTotalValue() {
    const totalValue = cart.reduce((total, ovaMoviePack) => total + ovaMoviePack.price, 0)
    totalValueElement.textContent = `$ ${totalValue}`
  }
    
})

// COMPLETE code

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("completeStorage"))
  const totalValueElement = document.getElementById("total_value")

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

  updateTotalValue()

  function deleteManga(completeId, index) {
    const completeDelete = document.getElementById(`complete_delete_${index}`)
    completeDelete.addEventListener("click", () => {
      document.getElementById(completeId).remove()
      cart.splice(index, 1)
      localStorage.setItem("completeStorage", JSON.stringify(cart))
      
      
      Toastify({
        className: "info",
        text: "Product removed from cart!",
        duration: 2000
      }).showToast()

      updateTotalValue()
    })
  }

  function updateTotalValue() {
    const totalValue = cart.reduce((total, completePack) => total + completePack.price, 0)
    totalValueElement.textContent = `$ ${totalValue}`
  }
})

//EMPTY CART

document.addEventListener("DOMContentLoaded", () => {
  const emptyCart = document.getElementById("cart_emp")
  const totalValueElement = document.getElementById("total_value")

  emptyCart.addEventListener("click", () => {
    document.getElementById("cart_cards").remove()
    localStorage.removeItem("mangaStorage")
    localStorage.removeItem("animeStorage")
    localStorage.removeItem("ovaMovieStorage")
    localStorage.removeItem("completeStorage")

    updateTotalValue()

    Toastify({
      className: "info",
      text: "Cart is now empty!",
      duration: 2000
    }).showToast()
  })

  function updateTotalValue() {
    totalValueElement.textContent = "$ 0"
    
    const cart = JSON.parse(localStorage.getItem("mangaStorage")) || []
    const totalValue = cart.reduce((total, mangaPack) => total + mangaPack.price, 0)
    
    totalValueElement.textContent = `$ ${totalValue}`
  }

  updateTotalValue()
});



//PURCHASE SIMULATION

document.addEventListener("DOMContentLoaded", () => {
  const emptyCart = document.getElementById("cart_pur")
  const totalValueElement = document.getElementById("total_value")

  emptyCart.addEventListener("click", () => {
    document.getElementById("cart_cards").remove()
    localStorage.removeItem("mangaStorage")
    localStorage.removeItem("animeStorage")
    localStorage.removeItem("ovaMovieStorage")
    localStorage.removeItem("completeStorage")

    updateTotalValue(); // Update the total value

    Toastify({
      className: "info",
      text: "Thank you for your purchase",
      duration: 2000
    }).showToast();
  });

  function updateTotalValue() {
    totalValueElement.textContent = "$ 0"
    
    const cart = JSON.parse(localStorage.getItem("mangaStorage")) || []
    const totalValue = cart.reduce((total, mangaPack) => total + mangaPack.price, 0)
    
    totalValueElement.textContent = `$ ${totalValue}`
  }

  updateTotalValue()
})


/////////////////


const totalValue = document.getElementById("total_value")
let totalPrice = 0;

const mangaStorage = JSON.parse(localStorage.getItem("mangaStorage"))
if (mangaStorage) {
  mangaStorage.forEach(item => totalPrice += item.price)
}

const animeStorage = JSON.parse(localStorage.getItem("animeStorage"))
if (animeStorage) {
  animeStorage.forEach(item => totalPrice += item.price)
}

const ovaMovieStorage = JSON.parse(localStorage.getItem("ovaMovieStorage"))
if (ovaMovieStorage) {
  ovaMovieStorage.forEach(item => totalPrice += item.price)
}

const completeStorage = JSON.parse(localStorage.getItem("completeStorage"))
if (completeStorage) {
  completeStorage.forEach(item => totalPrice += item.price)
}

document.addEventListener("DOMContentLoaded", () => {
  const totalValueElement = document.getElementById("total_value")

  updateTotalValue()

  function updateTotalValue() {
    let totalValue = 0;

    const mangaStorage = JSON.parse(localStorage.getItem("mangaStorage"))
    if (mangaStorage) {
      mangaStorage.forEach(item => {
        totalValue += item.price
      })
    }

    const animeStorage = JSON.parse(localStorage.getItem("animeStorage"))
    if (animeStorage) {
      animeStorage.forEach(item => {
        totalValue += item.price
      })
    }

    const ovaMovieStorage = JSON.parse(localStorage.getItem("ovaMovieStorage"))
    if (ovaMovieStorage) {
      ovaMovieStorage.forEach(item => {
        totalValue += item.price
      })
    }

    const completeStorage = JSON.parse(localStorage.getItem("completeStorage"))
    if (completeStorage) {
      completeStorage.forEach(item => {
        totalValue += item.price
      })
    }

    totalValueElement.textContent = `$ ${totalValue.toFixed(2)}`
  }
})

function updateTotalValueEverySecond() {
  const totalValueElement = document.getElementById("total_value")

  setInterval(() => {
    const mangaStorage = JSON.parse(localStorage.getItem("mangaStorage")) || []
    const animeStorage = JSON.parse(localStorage.getItem("animeStorage")) || []
    const ovaMovieStorage = JSON.parse(localStorage.getItem("ovaMovieStorage")) || []
    const completeStorage = JSON.parse(localStorage.getItem("completeStorage")) || []

    const totalValue = mangaStorage.reduce((total, mangaPack) => total + mangaPack.price, 0) +
      animeStorage.reduce((total, animePack) => total + animePack.price, 0) +
      ovaMovieStorage.reduce((total, ovaMoviePack) => total + ovaMoviePack.price, 0) +
      completeStorage.reduce((total, completePack) => total + completePack.price, 0);

    totalValueElement.textContent = `$ ${totalValue.toFixed(2)}`
  }, 0000)
}

updateTotalValueEverySecond()


