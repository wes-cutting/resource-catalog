const button = document.getElementById('button');
const title = document.getElementById('title');
const link = document.getElementById('link');
const author = document.getElementById('author');
const topics = document.getElementById('topics');
const desc = document.getElementById('desc');
const message = document.getElementById('msg');

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
