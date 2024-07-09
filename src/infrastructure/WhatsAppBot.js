import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import qrcode from "qrcode-terminal";

class WhatsAppBot {
  constructor(clientId) {
    this.clientId = clientId;
    this.client = new Client({
      authStrategy: new LocalAuth({
        puppeteer: { headless: false },
        clientId: this.clientId,
      }),
    });
    this.initialize();
  }

  initialize() {
    this.client.on("qr", () => this.handleQRCodeGeneration(qr));
    this.client.on("ready", () => this.onReady());
    this.client.initialize();
  }

  handleQRCodeGeneration(qr) {
    qrcode.generate(qr, { small: true });
  }

  onReady() {
    console.log("WhatsAppBot is ready");
  }

  async sendMessage(number, message) {
    try {
      await this.client.sendMessage(number, message);
    } catch (error) {
      throw new Error("Failed to send message");
    }
  }
}

export default WhatsAppBot;
