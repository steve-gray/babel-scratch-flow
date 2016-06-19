// @flow
import connect from 'connect';
import http from 'http';

const middleware = (req, res : any) => {
  res.end('String goes here');
};

const app = connect();
app.use('test');

http.createServer(app)
  .listen(3000);
