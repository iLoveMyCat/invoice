const config = require("./Config");
var customer = require("./Customer");

// customer.LoginSOAP(config.Credentials);
customer.LoginREST(config.Credentials);
