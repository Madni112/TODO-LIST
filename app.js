// const btn = document.getElementById("btn")
// btn.addEventListener('click', () =>{
//     btn.textContent = "New Click"
// })

// function onClickBtn(ele){
//     ele.style.border = "none"
//     ele.style.backgroundColor = "Red"
//     ele.textContent = "Text Changed" // used "this" key in button onclick function name(this)
// }
const todoList=document.getElementById("todoList")
const Inputvalue=document.getElementById("todoInput")
Inputvalue.focus()
function addTodo(ele){
    let cleanInput=Inputvalue.value
    if(Inputvalue.value == ""){
        alert("Please Enter Value")
        return
    }
    const li = document.createElement("li")
    const delbtn = document.createElement("button")
    const hr = document.createElement("hr")
    const liSpan = document.createElement("Span")
    todoList.append(li)
    li.append(liSpan)
    todoList.append(hr)
    liSpan.innerText = Inputvalue.value
    Inputvalue.value= ""
    Inputvalue.focus()
    const updatebtn = document.createElement("button")
    updatebtn.textContent = "Update"
    li.append(updatebtn)
    liSpan.addEventListener("click", ()=>{
        Inputvalue.value=cleanInput
        Inputvalue.focus()
        ele.textContent="Update"
        ele.addEventListener("click", ()=>{
            li.remove()
            hr.remove()
            li.textContent=Inputvalue.value
            ele.textContent="ADD +"
            Inputvalue.focus()
        })
    })
    updatebtn.addEventListener("click", ()=>{
        
        Inputvalue.value=cleanInput
        Inputvalue.focus()
        ele.textContent="Update"
        ele.addEventListener("click", ()=>{
            li.remove()
            hr.remove()
            li.textContent=Inputvalue.value
            ele.textContent="ADD +"
            Inputvalue.focus()
        })
    })
    
    delbtn.textContent = "✕"
    delbtn.addEventListener("click", ()=>{
        li.remove()
        hr.remove()
        Inputvalue.focus()
    })
    li.append(delbtn)
}

