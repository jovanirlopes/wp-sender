class Message {
  constructor(number, message) {
    this.number = number;
    this.message = message;
  }

  isValid() {
    return this.number && this.message;
  }
}

export default Message;
