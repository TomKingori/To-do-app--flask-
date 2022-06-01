// const task_input_el = document.getElementById('task-input')
// const task_edit_el = document.getElementById('task-edit');

// task_edit_el.addEventListener('click', () => {
//     if (task_edit_el.innerText.toLowerCase() == "edit") {
//             task_input_el.removeAttribute("readonly");
//             task_input_el.focus();
//             task_edit_el.innerText = "Save";
//     }
//     else {
//         task_input_el.setAttribute("readonly", "readonly");
//         task_edit_el.innerText = "Edit";
//     }
// });

function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({noteId: noteId})
    }).then((_res) => {
        window.location.href = "/";
    });
}