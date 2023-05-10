document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("mangaStorage"));
    console.log(carrito);
  
    carrito.forEach((mangaPack, index) => {
      const manga = document.createElement("div");
      const mangaId = `manga_${index}`; // Generar un ID único para cada elemento manga
      manga.id = mangaId;
      manga.className = "itemStyle";
      manga.innerHTML = `
        <img class="cart_img" src="img/manga pack.jpg" alt="">
        <p class="cart_p">Manga Pack</p>
        <p class="cart_p2">$ ${mangaPack.price}</p>
        <button id="manga_delete_${index}" class="delete_button">REMOVE</button>
      `;
      cart_cards.append(manga);
      console.log(mangaPack);
  
      deleteManga(mangaId, index);
    });
  
    function deleteManga(mangaId, index) {
      const mangaDelete = document.getElementById(`manga_delete_${index}`);
      mangaDelete.addEventListener("click", () => {
        document.getElementById(mangaId).remove();
        localStorage.removeItem("mangaStorage");
      });
    }
  });