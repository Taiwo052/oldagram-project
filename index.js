const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        // icons: ["images/like.svg", "images/comment.svg", "images/share.svg"]
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        // icons: ["images/like.svg", "images/comment.svg", "images/share.svg"]
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        // icons: ["images/like.svg", "images/comment.svg", "images/share.svg"]
    }
]

const mainEl = document.querySelector(".main-container")

function renderPost(){
    let container=""
    for( i = 0; i < posts.length; i++){
        
         mainEl.innerHTML+= `<section id="post">
                                <div class="post-info-container">
                                    <img src="${posts[i].avatar}" class="avatar">
                                    <div class="post-info">
                                        <h4>${posts[i].name}</h4>
                                        <p>${posts[i].location}</p>
                                    </div>
                                </div>
                                <div class="post-image">
                                    <img src="${posts[i].post}" class="post-img">
                                </div>
                                <div class="post-detail-container">
                                    <div class="post-icons">
                                        <img src="images/like.svg" class="icon-heart">
                                        <img src="images/comment.svg" id="icon-comment">
                                        <img src="images/share.svg" id="icon-share">
                                    </div>
                                    <div class="post-details">
                                        <h4><span id="count">${posts[i].likes}</span> likes</h4>
                                        <p id="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
                                    </div>
                                </div>
                            </section>`
                            
    }


}
renderPost()
