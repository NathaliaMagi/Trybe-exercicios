const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// EXERCÍCIO 1 --------------------------------------------------------------------
const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}
Entrega para: ${order.name}
Telefone: ${order.phoneNumber}
Endereço: ${order.address.street}
N°. ${order.address.number}
AP: ${order.address.apartment}\n\n`);
}

customerInfo(order);

// EXERCÍCIO 2 ------------------------------------------------------------------------
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luíz Silva';
  order.payment = 50;

  console.log(`Olá ${order.name}
Pedido: marguerita, peperoni, Coca-Cola Zero 
Total: R$ ${order.payment},00`);
}
orderModifier(order);