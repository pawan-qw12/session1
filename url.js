var url = require('url');

var url_address = 'http://localhost:8080/user?year=2022';

var parsed_addr = url.parse(url_address,true);

console.log(parsed_addr.host);
console.log(parsed_addr.pathname);
console.log(parsed_addr.search);