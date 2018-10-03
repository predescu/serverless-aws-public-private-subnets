const https = require('https');

module.exports.handler = (event, context, callback) => {
  https.get('https://google.com/', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(null, { success: true });
    });

  }).on("error", (err) => {
    callback(err);
  });
};