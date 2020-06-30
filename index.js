var customer = require("./Customer");
require("dotenv").config();

const creds = { email: process.env.email, password: process.env.password };
console.log(creds);
// customer.LoginSOAP(creds);

customer.LoginREST(creds);
