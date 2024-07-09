class WhatsAppService {
  constructor(bot) {
    this.bot = bot;
  }

  formatPhoneNumber(number) {
    // Remove o nono dígito se presente
    if (number.length === 13 && number.startsWith("55") && number[4] === "9") {
      number = number.slice(0, 4) + number.slice(5);
    }
    return `${number}@c.us`;
  }

  async sendMessage(number, message) {
    const formattedNumber = this.formatPhoneNumber(number);

    try {
      await this.bot.sendMessage(formattedNumber, message);
      return { success: true, message: "Message sent successfully" };
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to send message");
    }
  }
}

export default WhatsAppService;
