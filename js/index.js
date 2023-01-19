import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html") 
router.add("/explorer", "pages/explorer.html")
router.add(404, "/pages/error404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


function exchangeClasse(go) {
    let body = document.querySelector('body')
   
    body.classList.remove('home')
    body.classList.remove('explorer')
    body.classList.remove('universe')
    body.classList.add(go);

    
}


let universe = document.querySelector('.universePage')
let explorer = document.querySelector('.explorerPage')
let home = document.querySelector('.homePage')

universe.addEventListener('click', () => {

    exchangeClasse('universe')

})


explorer.addEventListener('click', () => {

    exchangeClasse('exploration')

})

home.addEventListener('click', () => {
    exchangeClasse('home')

})






   



