## FreeCodeCamp- Microservices and APIs

# Timestamp Microservice

[![timestamp-microservice-screenshot](https://user-images.githubusercontent.com/57681651/99070872-fb8d3180-25a8-11eb-99ce-53bfe32a60d5.jpg)](https://timestamp-microservice-11.herokuapp.com/)

## User stories:

- The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
- A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
- If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
- If the date string is **valid** the api returns a JSON having the structure
   `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
   e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
- If the date string is **invalid** the api returns a JSON having the structure `{"error" : "Invalid Date" }`.

## Example usage:

- https://Timestamp-Microservice--freecodecamp.repl.co/api/timestamp/2015-12-25 \*https://Timestamp-Microservice--freecodecamp.repl.co/api/timestamp/1451001600000

## Example output:

- {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

## Packages

The API is written in _Node.js_ with the help of _express_ and _moment.js_.

[See the API!](https://timestamp-microservice-11.herokuapp.com/)
