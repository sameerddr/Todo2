let input = document.querySelector("#input");
let todo = document.querySelector(".todo");
let todoIn = document.querySelector(".todo-in");
let btn = document.querySelector("#button");
let comp = document.querySelector(".comp");

// function

btn.addEventListener("click", function() {
    setTimeout(function() {
        input.value = "";
    }, 0);
    if (input.value.length > 0) {
        let todoMainDiv = document.createElement("div");
        let check = document.createElement("input");
        check.type = "checkbox";
        let todoDiv = document.createElement("input");
        let button1 = document.createElement("button");
        button1.innerText = "Edit";
        let button2 = document.createElement("button");
        button2.innerText = "Delete";

        todoMainDiv.append(check, todoDiv, button1, button2);
        todoIn.append(todoMainDiv);

        // todo

        todoDiv.value = input.value;
        todoDiv.setAttribute("readonly", "readonly");

        button1.addEventListener("click", function() {
            if (button1.innerText === "Edit") {
                button1.innerText = "Save";
                todoDiv.removeAttribute("readonly");
            } else {
                button1.innerText = "Edit";
                todoDiv.setAttribute("readonly", "readonly");
            }
        });
        button2.addEventListener("click", function() {
            this.parentElement.remove();
        });

        // Completed

        let compDiv = document.createElement("div");
        comp.append(compDiv);

        check.addEventListener("click", function() {
            this.parentElement.remove();
            compDiv.append(todoMainDiv);
            button1.remove();
            todoDiv.style.border = "none";
            todoDiv.style.textDecoration = "line-through";
        });
    }
});