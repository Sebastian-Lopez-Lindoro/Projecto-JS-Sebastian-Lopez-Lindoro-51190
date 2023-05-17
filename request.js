const comboRequest = []

const sentForm = document.getElementById("form")
let submissionId = 0

sentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const info = e.target.children;
        const file = {
                id: submissionId,
                name: info["name"].value,
                email: info["email"].value,
                message: info["message"].value
  }
        comboRequest.push(file)
        submissionId++
        sentForm.reset()

        localStorage.setItem("comboStorage", JSON.stringify(comboRequest))

        Toastify({
        className: "info",
        text: "Your message was sent!",
        duration: 2000
        }).showToast()
})