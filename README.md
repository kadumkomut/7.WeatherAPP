# Weather App Using React with Openweathermap.org api

## DEMO

![](screen-capture.gif)

## API USED

- openweathermap.org

## DETAILS

parameter   Description
-----------------------
dt  ->  Data receiving time

main|temp  ->   temperature   ->    units=metric(celsius), imperial(fahrenheit),  none(Kelvin)

humidity   ->   In Percentage(%)

Pressure   ->   Atmoshpheric pressure(On the sea level, if there is no sea level or ground level)   ->   hpa

wind|speed   ->   units=metric(m/s), imperial(miles/hour), none(m/s)

wind|deg   ->   wind direction   ->   degrees(metereological)

wind|gust   ->   Wind gust   -> units=metric(m/s), imperial(miles/hour), none(m/s)

clouds|all   ->   cloudiness   ->   %

## HOW TO RUN THE APP

- npm install
- Add your own api keys from openweatherapp.org to src/app.js const apiKey = "Your keys";

## MORE THINGS TO IMPROVE

- You can add a video in the background with sound's, so that you get the feel of it.
- add some animation in the weather icons.
- add a dynamic title in your app with the city name that's being shown.
- add a map below it to have more visual effect.
- Add a button for the user to know weather of his/her current location using javascript geolocation api.


# EXPLORE THE OPENWEATHERMAP , THERE ARE TON"S OF POTENTIAL THINGS YOU COULD DO.
# EXTREMELY USEFUL AND RESPONSIVE
