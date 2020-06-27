module.exports = {
  Login: function () {
    var soap = require("soap");
    /*Local Varible */
    var token = "";
    var soap = require("soap");
    var url =
      "https://apiqa.invoice4u.co.il/Services/ApiService.svc?singleWsdl";
    var args = config;
    soap.createClient(url, function (err, client) {
      client.VerifyLogin(args, function (err, result) {
        console.log(result);
      });
    });
  },
};
