const { Client } = require('pg');


async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'gibran',
        password: 'gibran',
        database: 'gibran_page'
    });
    await client.connect();
    return client;
}

module.export = getConnection;

