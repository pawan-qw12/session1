var util =  require('util');
var stringDemo = 'user id is %d , name is %s';
var output = util.format(stringDemo , 11,'edu');
console.log(output);
