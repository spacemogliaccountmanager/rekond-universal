import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import contactRouter from "./routes/contact.js";

async function start() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(cors());
  app.use(express.json());

  // API routes
  app.use("/api/contact", contactRouter);

  // In dev, use Vite's middleware for HMR and serving the SPA
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();
