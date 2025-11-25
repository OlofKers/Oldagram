const postFeed = document.getElementById("post-feed")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postFeedCode = ""

function renderPosts(){
    for (let i = 0; i < posts.length; i++){
        postFeedCode += 
        `<section class="post-creator">
            <img class="creator-img" src=${posts[i].avatar}>
            <p><span class="bold-text">${posts[i].name}</span><span class="location">${posts[i].location}</span></p>
        </section>
        <section class="post-content">
            <img class="post-img" src=${posts[i].post}>
        </section>
        <section class="post-bottom">
            <div class="post-controls">
                <figure>
                    <img class="like-btn" src="images/icon-heart.png">
                    <figcaption class="caption">${posts[i].likes}</figcaption>
                </figure>
                <figure>
                    <img class="comment-btn" src="images/icon-comment.png">
                    <figcaption class="caption">0</figcaption>
                </figure>
                <figure>
                    <img class="share-btn" src="images/icon-dm.png">
                    <figcaption class="caption">0</figcaption>
                </figure>
            </div>
            <p><span class="bold-text">${posts[i].username}</span>${posts[i].comment}</p>    
        </section>`
    }
    return postFeedCode
}


postFeed.innerHTML += renderPosts()


