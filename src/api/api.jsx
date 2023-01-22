const axios = require("axios");
const APIKEY = "GwWPrm4fdIwHjeghonki+Q==Nx6g1uPzf6AdtWbS";

export default {
  getData: () =>
    axios({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja",
      headers: { "X-Api-Key": "GwWPrm4fdIwHjeghonki+Q==Nx6g1uPzf6AdtWbS" },
      contentType: "application/json",
      success: function (result) {
        console.log(result);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    }),
};
