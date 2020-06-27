module.exports = {
  Login: function (credentials) {
    var soap = require("soap");
    /*Local Varible */
    var token = "";
    var soap = require("soap");
    var url =
      "https://apiqa.invoice4u.co.il/Services/ApiService.svc?singleWsdl";
    soap.createClient(url, function (err, client) {
      client.VerifyLogin(credentials, function (err, result) {
        if (err) {
          console.log("error: " + err);
        } else {
          console.log("result: " + result);
          if (result) {
            token = result;
          }
        }
      });
      return token;
    });
  },
};
