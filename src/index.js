import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Motor plantilla 
app.set("view engine", "ejs")
app.set("views", "src/views")

//middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


//Routes
app.get("/", (req, res) => {
    res.render("index")
})


//empezando servidor
const PORT = 8080;
try {
    app.listen(PORT, () => {
        console.log(`servidor escuchando en el puerto ${PORT}`)
    })
} catch (error) {
    console.log(`error en el puerto ${PORT}`);
}