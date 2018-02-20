// SERVICES
weatherApp.service('cityService', function() {

    this.city = "London,uk";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=f337ba2dddcb7f6e0894cb3a11654fac", { callback: "JSON_CALLBACK" },  { get: { method: "JSONP" }});
;

return weatherAPI.get({ q: city, cnt: days});
    }

}])
