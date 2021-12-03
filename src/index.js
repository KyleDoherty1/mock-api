const serverlessExpress = require('@vendia/serverless-express');

const app = require('./app');
exports.handler = serverlessExpress({ app });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });
