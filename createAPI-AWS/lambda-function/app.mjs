/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler = async (event, context) => {
  const employee = JSON.parse(event.body);
  //const name = event.queryStringParameters?.name;
  //event.pathParameters = event.pathParameters || {};
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello User , the name u passed in is: ' ,
        employee: employee
      })
    };

    return response;
  };


