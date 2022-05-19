
const next = require("next")

const dev = process.env.NODE_ENV !== "production"

const port = process.env.PORT || 3000

const app = next({ dev, port })

const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

const handle = app.getRequestHandler()

app.prepare().then(() => {

    server.use(middlewares)
    server.use("/api", router)
    server.use(handle)

    server.listen(port, () => {
        console.log("JSON Server is running")
    })

})