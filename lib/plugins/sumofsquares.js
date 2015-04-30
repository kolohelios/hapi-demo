'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/sumofsquares/{stringOfNums}',
    config: {
      description: 'sum of squares',
      handler: function(request, reply){
        var arrayOfNums = request.params.stringOfNums.split(',');
        arrayOfNums = arrayOfNums.map(function(num){
          return Math.pow(parseFloat(num), 2);
        });
        var sumOfNums = arrayOfNums.reduce(function(prev, curr){
          return prev + curr;
        });
        return reply({sumofsquares: sumOfNums});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'sumofsquares'
};
