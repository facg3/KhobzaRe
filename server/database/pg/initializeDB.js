const knex = require('./knex');
const pg = require('./');

pg.start().then(()=>console.log('Database initialized successfully')).then(() => knex.destroy());
