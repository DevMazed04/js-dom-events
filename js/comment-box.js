console.log('add comment box and show comment');


document.getElementById('submit-btn').addEventListener('click', function () {

    const commentBox = document.getElementById('text-area');
    const newComment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const pNew = document.createElement('p');
    pNew.innerText = newComment;
    commentContainer.appendChild(pNew);
    commentBox.value = null;
})



