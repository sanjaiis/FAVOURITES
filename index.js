//selecting popup-box,popup-overlay and + button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopbutton=document.getElementById("add-popup-button")

addpopbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

//select container,add-button,input-title,input-video,description-input
var container=document.querySelector(".container")
var addbutton=document.getElementById("add-detail")
var inputtitle=document.getElementById("input-title")
var inputvideo=document.getElementById("input-video")
var description=document.getElementById("description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","fav-container")
    div.innerHTML=`<h2>${inputtitle.value}</h2>
    <h5>${inputvideo.value}</h5>
    <p>${description.value}</p>
    <button onclick=deleteitem(event)>Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deleteitem(event){
    event.target.parentElement.remove()
}