const data = {
    "forecast": {
      "forecastday": [
        {
          "date": "2024-08-02",
          "date_epoch": 1722556800,
          "day": {
            "maxtemp_c": 30.0,
            "mintemp_c": 20.0,
            "avgtemp_c": 25.0,
            "maxwind_kph": 15.0,
            "totalprecip_mm": 2.0,
            "totalsunhour": 7.0,
            "condition": {
              "text": "Partly cloudy",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
              "code": 116
            }
          },
          "astro": {
            "sunrise": "05:49 AM",
            "sunset": "05:37 PM",
            "moonrise": "03:53 AM",
            "moonset": "03:47 PM",
            "moon_phase": "Waning Crescent",
            "moon_illumination": 6,
            "is_moon_up": 1,
            "is_sun_up": 1
          },
          "hour": [
            {
              "time": "00:00",
              "temp_c": 22.0,
              "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png"
              }
            },
            {
              "time": "01:00",
              "temp_c": 21.5,
              "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png"
              }
            }
            // Tambahkan data jam lainnya sesuai kebutuhan
          ]
        }
      ]
    }
  };  

console.log(data?.forecast?.forecastday?.[0]?.astro.sunrise)