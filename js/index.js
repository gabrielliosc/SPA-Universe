import { Router } from "./router.js"

const router = new Router()

router.add("/SPA-Universe/", "/pages/home.html")
router.add("/SPA-Universe/universo/", "/pages/universo.html")
router.add("/SPA-Universe/exploracao/", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


