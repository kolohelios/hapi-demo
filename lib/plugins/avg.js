'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/avg/{stringOfNums}',
    config: {
      description: 'adds two numbers',
      handler: function(request, reply){
        var arrayOfNums = request.params.stringOfNums.split(',');
        arrayOfNums = arrayOfNums.map(function(num){
          return parseFloat(num);
        });
        var sumOfNums = arrayOfNums.reduce(function(prev, curr){
          return prev + curr;
        });
        var avg = sumOfNums / arrayOfNums.length;
        console.log(avg);
        return reply({avg: avg});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'avg'
};
