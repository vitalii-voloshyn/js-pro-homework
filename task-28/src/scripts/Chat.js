'use strict';

export default class Chat {
  constructor(config) {
    this.websocket = new WebSocket('ws://fep-app.herokuapp.com');
    this.onMymsg = config.onMessage;
    this.onMessage();
    this.onOpen();
  }


  message(name, message) {
    this.send(name, 'message', message);
  }

  send(name, type, message) {
    this.websocket.send(JSON.stringify({
      name,
      type,
      message
    }))
  }

  onOpen(name) {
    this.websocket.onopen = () => {
      this.send(name, 'connected', 'connected')
    }
  }

  onMessage() {
    let data;
    this.websocket.onmessage = e => {
      data = JSON.parse(e.data);
      this.onMymsg(data)
    }
  }

}