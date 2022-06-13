async function newFormHandler(event) {
    event.preventDefault();

    const comment_body = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString()[window.location.toString().length];

    if (comment_body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', newFormHandler);