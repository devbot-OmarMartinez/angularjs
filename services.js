weatherApp.service('cityService', function ()
{

    this.city = "Monterrey,MX";

});

weatherApp.service('weatherService', function ($resource)
{
    this.GetWeather = function(city, count){
        const weatherApi= $resource(apiUrl, {
            callback: "JSON_CALLBACK"
        }, { get: { method: "JSONP" } });

        return weatherApi.get({ q: city, appid: apiKey, cnt: count, units: "metric" })
    }

});