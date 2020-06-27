module.exports = {
  LoginREST: function (credentials) {
    const axios = require("axios");
    const url =
      "https://api.invoice4u.co.il/Services/ApiService.svc/VerifyLogin";
    var token = "";
    var config = {
      data: credentials,
      headers: {
        "X-Requested-With": "application/json",
      },
    };
    axios
      .post(
        "https://api.invoice4u.co.il/Services/ApiService.svc/VerifyLogin",
        config
      )
      .then(function (response) {
        console.log(response);
        var data = response.data;
        console.log("data:" + JSON.stringify(data));

        if (data.d) {
          token = data.d.token;
          console.log("token: " + token);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  LoginSOAP: function (credentials) {
    var soap = require("soap");
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
