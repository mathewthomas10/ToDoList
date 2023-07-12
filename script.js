let myForm = document.getElementById("myForm")  //getElementById("myForm") - "myForm" is same as the id name in the html
let myInput = document.getElementById("myInput")
let myList = document.getElementById("myList")

myForm.addEventListener("click", () => console.log("Welcome"))
myForm.addEventListener("submit",   //.addEventListener("what Event", "What is going to happen")
    (data) => {
        data.preventDefault()  //to prevent in-built changes
        createItem(myInput.value)  //myInput.value means it stores the data of myInput
    })

createItem = (d) => {
    let myTemplate = `<li>${d}<button onclick="deleteItem(this)">Delete</button></li>`
    myList.insertAdjacentHTML("beforeend", myTemplate)
    myInput.value = ""
    myInput.focus()
}

function deleteItem(x){
    x.parentElement.remove()
}
