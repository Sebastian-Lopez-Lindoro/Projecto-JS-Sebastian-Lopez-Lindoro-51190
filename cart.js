document.addEventListener("DOMContentLoaded", () => {
   const cartItems = {
     manga: {
       cart: JSON.parse(localStorage.getItem("mangaStorage")) || [],
       prefix: "manga"
     },
     anime: {
       cart: JSON.parse(localStorage.getItem("animeStorage")) || [],
       prefix: "anime"
     },
     ovaMovie: {
       cart: JSON.parse(localStorage.getItem("ovaMovieStorage")) || [],
       prefix: "ovamovie"
     },
     complete: {
       cart: JSON.parse(localStorage.getItem("completeStorage")) || [],
       prefix: "complete"
     }
   }
 
   const totalValueElement = document.getElementById("total_value")
   const cartCards = document.getElementById("cart_cards")
 
   Object.keys(cartItems).forEach(type => {
     const { cart, prefix } = cartItems[type]
     cart.forEach(item => {
       const itemId = `${prefix}_${item.id}`
       const itemElement = createCartItemElement(type, item, itemId)
       cartCards.append(itemElement)
     })
   })
 
   function createCartItemElement(type, item, itemId) {
     const itemElement = document.createElement("div")
     itemElement.id = itemId;
     itemElement.className = "itemStyle"
     itemElement.innerHTML = `
       <img class="cart_img" src="img/${type.toLowerCase()} pack.jpg" alt="">
       <p class="cart_p">${type} Pack</p>
       <p class="cart_p2">$ ${item.price}</p>
       <button id="${itemId}_delete" class="delete_button">REMOVE</button>
     `
 
     const deleteButton = itemElement.querySelector(`#${itemId}_delete`)
     deleteButton.addEventListener("click", () => {
       itemElement.remove()
       const { cart } = cartItems[type]
       const itemIndex = cart.findIndex(item => `${type}_${item.id}` === itemId)
       cart.splice(itemIndex, 1);
       localStorage.setItem(`${type}Storage`, JSON.stringify(cart))
       Toastify({
         className: "info",
         text: "Product removed from cart!",
         duration: 2000
       }).showToast()
       updateTotalValue()
     });
 
     return itemElement
   }
 
   function updateTotalValue() {
     let totalValue = 0
     Object.keys(cartItems).forEach(type => {
       const { cart } = cartItems[type]
       totalValue += cart.reduce((total, item) => total + item.price, 0)
     });
     totalValueElement.textContent = `$ ${totalValue.toFixed(2)}`
   }
 
   updateTotalValue()
 
   window.addEventListener("load", updateTotalValue)
 })
 
 document.addEventListener("DOMContentLoaded", () => {
   const emptyCart = document.getElementById("cart_emp");
   const totalValueElement = document.getElementById("total_value")
 
   emptyCart.addEventListener("click", () => {
     const cartCards = document.getElementById("cart_cards")
     cartCards.innerHTML = ""
 
     Object.keys(cartItems).forEach(type => {
       localStorage.removeItem(`${type}Storage`)
     })
 
     updateTotalValue()
 
     Toastify({
       className: "info",
       text: "Cart is now empty!",
       duration: 2000
     }).showToast()
   })
 
   function updateTotalValue() {
     totalValueElement.textContent = "$ 0"
     let totalValue = 0
     Object.keys(cartItems).forEach(type => {
       const { cart } = cartItems[type]
       totalValue += cart.reduce((total, item) => total + item.price, 0)
     });
     totalValueElement.textContent = `$ ${totalValue.toFixed(2)}`
   }
 
   updateTotalValue()
 })


 document.addEventListener("DOMContentLoaded", () => {
   const emptyCart = document.getElementById("cart_pur")
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
       text: "Thank you for your purchase",
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
 })


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
 })