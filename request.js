const comboRequest = []

const sentForm = document.getElementById("form") 
        sentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const info = e.target.children
        const file = {
                name:info["name"].value,
                email:info["email"].value,
                message:info["message"].value
        }
        comboRequest.push(file)
        sentForm.reset()
           
        localStorage.setItem("comboStorage", JSON.stringify(comboRequest))
        
        Toastify({
                className: "info",
                text: "Product added to the cart!",
                duration: 2000
        }).showToast()
})


const comboStoratge = JSON.parse(localStorage.getItem("comboStorage"))
console.log(comboStoratge)


