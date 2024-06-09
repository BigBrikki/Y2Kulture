import { blogPostsArr } from '/blogposts.js'
const recentPosts = document.getElementById('recent-posts')

function getPosts(blogPostsArr){
    const recentPostHtml = blogPostsArr.slice(0, 3).map( (post, index) => {
        return(
            `<div class='recent-post-item'>
                <a href=''><img src=${post.img}>
                <p>${post.date}</p>
                <h2>${post.title}</h2></a>
                <p>${post.description}<p></a>
             </div>`)
    }).join('')
    return recentPostHtml
}

function renderPosts(posts){
    recentPosts.innerHTML = getPosts(posts)
}

renderPosts(blogPostsArr)
