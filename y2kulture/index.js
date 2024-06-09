import { blogPostsArr } from '/blogposts.js'

const homeMain = document.getElementById('home-main')
const viewMoreBtn = document.getElementById('view-more')
const recentPosts = document.getElementById('recent-posts')
let numberOfPostsToRender = 6

document.addEventListener('click', (e)=>{
    if (e.target.id ==='view-more'){
        if (numberOfPostsToRender + 3 > blogPostsArr.length){
            numberOfPostsToRender = blogPostsArr.length
        }
        else{
            numberOfPostsToRender += 3
        }   
        renderPosts(blogPostsArr)
    }
})

function getPosts(blogPostsArr){
    const homeMainHtml = blogPostsArr.slice(0, numberOfPostsToRender).map( (post, index) => {
        return(
            `<div class='recent-post-item'><a href=#>
                <img src=${post.img}>
                <p>${post.date}</p>
                <h2>${post.title}</h2>
                <p>${post.description}<p></a>
             </div>`)
    }).join('')
    return homeMainHtml
}

function renderPosts(posts){
    homeMain.innerHTML = getPosts(posts)
}


renderPosts(blogPostsArr) 


