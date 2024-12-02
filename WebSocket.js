const WebSocket = require('ws');  
const wss = new WebSocket.Server({ port: 8080 });  

wss.on('connection', (ws) => {  
  console.log('Kết nối WebSocket mới');  

  ws.on('message', (message) => {  
    console.log('Nhận tin nhắn:', message);  
    ws.send('Đã nhận: ' + message);  
  });  
});  
