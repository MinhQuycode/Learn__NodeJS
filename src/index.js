import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import route from "./routes/index.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Midalware
// Form default
app.use(express.urlencoded({ extended: true }));
//httpRequest, fetch , axios
app.use(express.json());

//Route folder img : static là phương thức kiểm tra file tĩnh.
app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
app.use(morgan("combined"));

//Teamplate Engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
