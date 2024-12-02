import React, { useEffect } from 'react';  

function OrderTracker() {  
  useEffect(() => {  
    const ws = new WebSocket('ws://localhost:8080');  

    ws.onmessage = (event) => {  
      console.log('Cập nhật:', event.data);  
    };  

    return () => ws.close();  
  }, []);  

  return <div>Theo dõi đơn hàng</div>;  
}  

export default OrderTracker;  
