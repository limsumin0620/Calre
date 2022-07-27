const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '192.168.1.180',
    database: 'postgres',
    password: 'gangseo_mng',
    port: '4326'
});

function GetUserList() {
    client.connect();
    client.query('SELECT count(*) FROM public.cmm_sys_menu', (err, res) => {
        console.log(res);
        client.end();
    });
};

module.exports = {
    getUserList: GetUserList
}