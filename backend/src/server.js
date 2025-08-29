import http from "http";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const server = http.createServer(app);

  // Yoga attaches its websocket handlers automatically to the same server
  server.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
    console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`);
  });
};

start().catch((e) => {
  console.error(e);
  process.exit(1);
});
