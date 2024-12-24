const blogsObject = [{
    "title": "Lab Test for Section 1",
    "content": "This test carries 10% of the overall marks for INFO 2302"
}];

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#add-blog-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = form.querySelector('#title').value;
        const content = form.querySelector('#content').value;
        const blog = {
            "title": title,
            "content": content
        };
        blogsObject.push(blog);
        generateBlogPost(blogsObject);
        form.querySelector('#title').value = '';
        form.querySelector('#content').value = '';
    }, true);
    generateBlogPost(blogsObject);
});

function generateBlogPost(posts) {
    const blogDiv = document.querySelector('.blogs');
    blogDiv.innerHTML = "";
    posts.forEach(post => {
        const titleElement = document.createElement("h3");
        titleElement.textContent = post.title;
        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.appendChild(titleElement);
        cardElement.appendChild(contentElement);
        blogDiv.appendChild(cardElement);
    });
}