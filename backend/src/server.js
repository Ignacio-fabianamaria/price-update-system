const { app } = require('./app');
const connection = require('../src/db/dumps/connection.js');

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
  
    // O código abaixo é para testarmos a comunicação com o MySQL
    const [result] = await connection.execute('SELECT 1');
    if (result) {
      console.log('MySQL connection OK');
    }
  });