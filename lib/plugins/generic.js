'use strict';

var Package = require('../../package.json');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/generic/{name}',
    config: {
      description: 'Get the app version',
      handler: function(request, reply){
        return reply({version: Package[request.params.name]});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'generic'
};
