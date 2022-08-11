const axios = require('axios');

//use axios to make a get request to the server greeting endpoint and validate the response and is type of json
describe('GET Greeting Endpoint', () => {
    test('Getting Proper Greeting response', async () => {
        const response = await axios.get('http://localhost:3001/api/greeting');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ greeting: 'Hello World! from the server' });
      })
})

//use axios to make a get request to the server status endpoint and validate the response
describe('GET Status Endpoint', () => {
    test('server is running', async () => {
        const response = await axios.get('http://localhost:3001/api/status');
        expect(response.data).toEqual({ status: 'OK' });
      })
});