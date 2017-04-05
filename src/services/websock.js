export class ChatWebsock {
  constructor(url, onOpen, onMessage, onClose) {
    this.websock = new WebSocket("ws://" + url);
    this.websock.onopen = onOpen;
    this.websock.onmessage = onMessage;
    this.websock.onclose = onClose;
  }

  send(msg) {
    this.websock.send(msg);
  }

  isConnected() {
    return this.websock !== null && this.websock !== undefined;
  }
}

