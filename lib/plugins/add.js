'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/add/{x}/{y}',
    config: {
      description: 'adds two numbers',
      handler: function(request, reply){
        return reply({sum: parseInt(request.params.x) + parseInt(request.params.y)});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'add'
};
