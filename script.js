// localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.



// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
//     length – количество элементов в хранилище.

// установить значение для ключа
// localStorage.test = 2;

// получить значение по ключу
// alert( localStorage.test ); // 2

// удалить ключ
// delete localStorage.test;

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить значение по ключу key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
//     length – количество элементов в хранилище.
//     Используйте Object.keys для получения всех ключей.
//     Можно обращаться к ключам как к обычным свойствам объекта, в этом случае событиеstorage не срабатывает.











const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")


function view() {
    ul.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task")) || []
    task.map(el => {
        ul.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">
<span class="${el.isDone ? "line" : ""}">
<input type="checkbox" ${el.isDone ? "checked" : ""} class="check">
${el.title}
</span>
<button class="del-btn btn btn-danger">DELETE</button>
</li>`
    })
    delBtn()
    checkBox()
}

view()

btn.addEventListener("click", () => {
    if (input.value === ""){
        alert("ПУСТОЕ ПОЛЕ!!!")
    }else {
        const task = JSON.parse(localStorage.getItem("task")) || []
        const newTask = {
            id: task.length ? task[task.length - 1].id + 1 : 1,
            title: input.value,
            isDone: false
        }
        const result = [...task, newTask]
        localStorage.setItem("task", JSON.stringify(result))
        input.value = ""
        view()
    }}

)

function delBtn() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll(".del-btn")
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            task = task.filter((el, idx) => {
                return idx !== index
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })
    })
}

delBtn()

function checkBox() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const checkBoxes = document.querySelectorAll(".check")
    checkBoxes.forEach((check, index) => {
        check.addEventListener("click", () => {
            task = task.map((el, idx) => {
                if (idx === index) {
                    return {...el, isDone: !el.isDone}
                } else {
                    return el
                }
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })
    })
}





