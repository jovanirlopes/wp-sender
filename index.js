import { clientId, port } from "./src/config/index.js";
import WhatsAppBot from "./src/infrastructure/WhatsAppBot.js";
import WhatsAppService from "./src/services/WhatsAppService.js";
import MessageController from "./src/controllers/MessageController.js";
import express from "express";
console.log(clientId);
const bot = new WhatsAppBot(clientId);

const service = new WhatsAppService(bot);

const app = express();

const messageController = new MessageController(service);

app.use(express.json());
app.post("/send-message", (req, res) =>
  messageController.sendMessage(req, res)
);

app.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
});
