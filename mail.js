const mailTooltip = document.querySelector(".mail-tooltip")

mail.addEventListener("click", () => {
    navigator.clipboard.writeText("mikic.saska@gmail.com")
    mailTooltip.style.opacity = 1
    
    setTimeout(() => {
        mailTooltip.style.opacity = 0
    }, 3000)
})

