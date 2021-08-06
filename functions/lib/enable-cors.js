const enableCORS = (endpoint) => (event, context, send) => {
    const modifyResponse = (request, response) => {
      request = request || {};
      request.headers = request.headers || {};
      const requestHeaders = request.headers['access-control-request-headers'];
      response = response || {};
      response.headers = response.headers || {};
      response.statusCode = response.statusCode || 200;
      response.headers['Access-Control-Allow-Origin'] = '*';
      response.headers['Access-Control-Allow-Headers'] = requestHeaders || '';
      response.headers['Access-Control-Allow-Methods'] = 'GET,POST';
      response.body = response.body || '';
      return response;
    };
  
    if (event.httpMethod === 'OPTIONS') {
      send(null, modifyResponse(event));
    }
    else
    {
      endpoint(event, context, (error, response) => {
        send(error, modifyResponse(event, response));
      });
    }
}
module.exports = enableCORS;