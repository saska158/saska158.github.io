const mailTooltip = document.querySelector(".mail-tooltip")

mail.addEventListener("click", () => {
    navigator.clipboard.writeText("saska@justsittingdoingnothing.com")
    mailTooltip.style.opacity = 1
   // mailTooltip.style.visibility = 'visible'
    
    setTimeout(() => {
        mailTooltip.style.opacity = 0
      //  mailTooltip.style.visibility = 'hidden'
    }, 3000)
})

