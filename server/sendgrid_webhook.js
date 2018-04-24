var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'astudentofcssubdomain' }, function(
  err,
  tunnel
) {
  console.log('LocalTunnel is running!!!');
});
