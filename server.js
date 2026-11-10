
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

// Membuat __dirname pada ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static public untuk index.html dan asset
app.use(express.static(path.join(__dirname, "public")));

// Menjalankan server
app.listen(PORT, HOST,  () => {
    console.log(`Server berjalan di http://${HOST}:${PORT}`);
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
