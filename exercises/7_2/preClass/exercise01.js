const costumers = {}

function addCostumer(costumers,costumerId,key,value) {
  if (!(costumers[costumerId])) {
    costumers[costumerId] = {}
  }
  costumers[costumerId][key] = value
}

addCostumer(costumers,1,'fullName','John Doe');
addCostumer(costumers,1,'age',03);
addCostumer(costumers,1,'eyes','brown');
addCostumer(costumers,2,'fullName','Mary Doe');


console.log(costumers);
