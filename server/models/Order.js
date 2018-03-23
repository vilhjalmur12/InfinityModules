
function Order(body) {
    let telephone = body.customer.phone;
    let customer = body.customer;
    let order = body.order;
    let total = body.total;
    console.log('Customer', customer);
    console.log('Order', order);
    console.log('Total', total);
};

module.exports = Order;
