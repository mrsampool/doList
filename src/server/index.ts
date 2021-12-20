const App = require('./app');
const PORT = process.env.PORT || 3000;
App.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`)});