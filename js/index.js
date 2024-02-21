import { Router } from "./router.js"

const router = new Router()

router.add("/SPA-Universe/", "SPA-Universe/pages/home.html")
router.add("/SPA-Universe/universo/", "SPA-Universe/pages/universo.html")
router.add("/SPA-Universe/exploracao/", "SPA-Universe/pages/exploracao.html")
router.add(404, "SPA-Universe/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


