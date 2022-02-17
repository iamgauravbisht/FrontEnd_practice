const panels =document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeallactiveclass()
        panel.classList.add('active')
    })
})
function removeallactiveclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')

    })
}