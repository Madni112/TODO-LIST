// const btn = document.getElementById("btn")
// btn.addEventListener('click', () =>{
//     btn.textContent = "New Click"
// })

// function onClickBtn(ele){
//     ele.style.border = "none"
//     ele.style.backgroundColor = "Red"
//     ele.textContent = "Text Changed" // used "this" key in button onclick function name(this)
// }
const todoList = document.getElementById("todoList")
const Inputvalue = document.getElementById("todoInput")
const todoBtn = document.getElementById("todobtn")
let editLi = null;
todoList.style.opacity="0"
Inputvalue.focus()
function addTodo() {
    if (Inputvalue.value == "") {
        alert("Please Enter Value")
        return
    }
     if (editLi !== null) {
        editLi.querySelector("span").innerText = Inputvalue.value;
        editLi = null;
        todoBtn.innerHTML = "+ &nbsp; ADD";
        Inputvalue.value = "";
        Inputvalue.focus();
        return;
    }
    const li = document.createElement("li")
    const delbtn = document.createElement("div")
    const hr = document.createElement("hr")
    const liSpan = document.createElement("Span")
    todoList.append(li)
    todoList.append(hr)
    liSpan.innerText = Inputvalue.value
    Inputvalue.value = ""
    Inputvalue.focus()
    const updatebtn = document.createElement("i")
    updatebtn.className = "fa fa-pencil"
    updatebtn.addEventListener("click", () => {

        Inputvalue.value = liSpan.innerText
        Inputvalue.focus()
        editLi = li
        todoBtn.innerText = "Update"
    })
    delbtn.className="trash-button"
    delbtn.innerHTML = " <div class='trash-lid'></div> <div class='trash-bin'></div>"
    delbtn.addEventListener("click", () => {
        li.remove()
        hr.remove()
        Inputvalue.focus()
        if (todoList.querySelectorAll("li").length === 0) {
        todoList.style.opacity = "0";
    }
    })
    li.append(liSpan, updatebtn, delbtn)
    todoList.style.opacity="1"
    if(liSpan.innerText == liSpan.innerText){
        alert("Item Already Exist")
    }
}

