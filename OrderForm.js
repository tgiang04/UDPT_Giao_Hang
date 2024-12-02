import React, { useState } from 'react';  
import axios from 'axios';  

function OrderForm() {  
  const [order, setOrder] = useState({ productName: '', address: '' });  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('/api/orders', order);  
      alert('Đặt hàng thành công! Mã đơn hàng: ' + response.data._id);  
    } catch (error) {  
      console.error('Lỗi đặt hàng:', error);  
    }  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" placeholder="Tên sản phẩm" onChange={(e) => setOrder({ ...order, productName: e.target.value })} />  
      <input type="text" placeholder="Địa chỉ" onChange={(e) => setOrder({ ...order, address: e.target.value })} />  
      <button type="submit">Đặt hàng</button>  
    </form>  
  );  
}  

export default OrderForm;  
