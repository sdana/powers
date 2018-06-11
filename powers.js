/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
const classesToggle = (selector, classToToggle) => {
    document.querySelector(selector).classList.toggle(classToToggle)
}

document.querySelector("#activate-flight").addEventListener("click", () =>{
    classesToggle("#flight", "enabled")
    classesToggle("#flight", "disabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", ()=>{
    classesToggle("#mindreading", "enabled")
    classesToggle("#mindreading", "disabled")
})

const sectionArr = document.querySelectorAll("section")

document.querySelector("#activate-all").addEventListener("click", ()=>{
    for (let i=0; i<sectionArr.length; i++){
        sectionArr[i].classList.toggle("enabled")
        sectionArr[i].classList.toggle("disabled")

    }
})
document.querySelector("#deactivate-all").addEventListener("click", ()=>{
    for (let i=0; i<sectionArr.length; i++){
        sectionArr[i].classList.toggle("enabled")
        sectionArr[i].classList.toggle("disabled")

    }
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/