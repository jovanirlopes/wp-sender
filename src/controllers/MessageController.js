class MessageController {
  constructor(whatsAppService) {
    this.whatsAppService = whatsAppService;
  }

  isValidPhoneNumber(number) {
    // Verifica se o número consiste apenas de dígitos
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(number);
  }

  async sendMessage(req, res) {
    const { number, message } = req.body;

    if (!number || !message) {
      return res.status(400).send({ error: "Number and message are required" });
    }

    if (!this.isValidPhoneNumber(number)) {
      return res
        .status(400)
        .send({ error: "Invalid phone number. Only digits are allowed." });
    }

    try {
      await this.whatsAppService.sendMessage(number, message);
      return res.status(200).send({ success: " Message sent" });
    } catch (error) {
      return res.status(500).send({ error: "Failed to send message" });
    }
  }
}

export default MessageController;
