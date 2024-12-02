const Order = require('../models/Order');  

exports.createOrder = async (req, res) => {  
  try {  
    const order = new Order(req.body);  
    await order.save();  
    res.status(201).json(order);  
  } catch (error) {  
    res.status(500).json({ message: 'Lỗi tạo đơn hàng', error });  
  }  
};  
