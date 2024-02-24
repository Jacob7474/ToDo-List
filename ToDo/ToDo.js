const input = document.querySelector('#addToDo')
const submit = document.querySelector('#submitBtn')
const deleteBtn = document.querySelectorAll('.deleteBtn')
const checkmarkBtn = document.querySelectorAll('.checkmarkBtn')
const list = document.querySelector('#ToDoList')
let submited = false

function addElement(){
    function add(){
        var liElement = document.createElement("li");
        liElement.classList.add("ToDoElement");

    var checkmarkBtn = document.createElement("button");
    checkmarkBtn.classList.add("checkmarkBtn");
    checkmarkBtn.onclick = function(){
        if (checkmarkBtn.classList == "checkmarkBtn checked") {
            checkmarkBtn.classList.remove("checked")
            checkmarkBtn.style.backgroundColor ="#9B5DE5"
        } else {
        checkmarkBtn.style.backgroundColor ="#6f00ff"
        checkmarkBtn.classList.add("checked")
        }
    }
    var checkmarkIcon = document.createElement("i");
    checkmarkIcon.classList.add("fa-solid", "fa-check");
    checkmarkIcon.id = "checkmark";
    checkmarkBtn.appendChild(checkmarkIcon);

    var pElement = document.createElement("p");
    pElement.classList.add("ToDoText");
    pElement.textContent = input.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.onclick = function(){
        deleteBtn.parentElement.style.display ="none"
           }
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");
    deleteBtn.appendChild(deleteIcon);

    liElement.appendChild(checkmarkBtn);
    liElement.appendChild(pElement);
    liElement.appendChild(deleteBtn);

    list.appendChild(liElement)
    }
    if (input.value != "") {
        add();
        input.value = ""
    } else {
        console.log("not working")
    }
}
submit.addEventListener("click", function() {
    if (input.value.length <= 55 && submited == false  && window.matchMedia("(min-width: 1000px)").matches) {
        addElement();
    } else if (input.value.length <= 25 && submited == false) {
        addElement();
    } else {
        if (submited == false) {
            submited = true
            lastText = input.value
        input.value = "Text is too long"
        setTimeout(() => {
            input.value = lastText
            submited = false
        }, 1000);
        }  
    }
});


