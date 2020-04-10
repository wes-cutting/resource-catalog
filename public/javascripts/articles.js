const button = document.getElementById('button');
const title = document.getElementById('title');
const link = document.getElementById('link');
const author = document.getElementById('author');
const topics = document.getElementById('topics');
const desc = document.getElementById('desc');
const message = document.getElementById('msg');
const deleteButtons = document.getElementsByClassName('delete');
const updateButtons = document.getElementsByClassName('edit');
const deleteModal = document.getElementById("deleteModal");
const updateModal = document.getElementById("updateModal");
const closeDelete = document.getElementsByClassName("close")[0];
const closeUpdate = document.getElementsByClassName("close")[1];
const deleteBtn = document.getElementById('delete');

const formHandler = (event) => {
    message.innerHTML = "";
    if (!title.value.trim()) {
        message.innerHTML = 'Must have a Title';
    } else if (!link.value.trim()) {
        message.innerHTML = 'Must have a Link!';
    } else {
        console.log('Click Switch');
        switch (event.target.value) {
            case 'Add':
                addArticle();
                break;
            case 'Update':
                updateArticle();
                break;
            case 'Cancel':
                clearForm();
                update = false;
                break;
        }
    }
}
let deleteID;
const openDeleteModal = (event) => {
    deleteID = event.target.id;
    deleteModal.style.display = "block";
}

let updateData;
const openUpdateModal = (event) => {
    updateData = event.target.value;
    console.log(updateData);
    updateModal.style.display = "block";
}

const addArticle = () => {
    console.log('Add Article')
    const newArticles = [
        {
            title: title.value,
            link: link.value,
            author: author.value,
            topics: topics.value.split(',').map(topic => topic.trim()),
            desc: desc.value
        }
    ]
    console.log('New Article', newArticles[0]);
    fetch('/api/articles', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticles)
    }).then(response => response.json())
        .then(msg => {
            if (msg.error) {
                message.innerHTML = msg.error;
                if(msg.data){
                    console.log("Data from error:", msg.data);
                }
            } else {
                window.location.replace('/articles');
            }
        })
        .catch(console.log);
        // .catch(error => console.log(error));
}
const updateArticle = () => {
    
}

const deleteArticle = () => {
    fetch(`/api/articles/${deleteID}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/articles'));
}

button.addEventListener('click', formHandler);
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', openDeleteModal);
}
for (let i = 0; i < updateButtons.length; i++) {
    updateButtons[i].addEventListener('click', openUpdateModal);
}
deleteBtn.addEventListener('click', deleteArticle);
closeDelete.onclick = function () {
    deleteId = null;
    deleteModal.style.display = "none";
}
closeUpdate.onclick = function () {
    updateModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == deleteModal) {
        deleteId = null;
        deleteModal.style.display = "none";
    } else if (event.target == updateModal) {
        updateModal.style.display = "none";
    }
}