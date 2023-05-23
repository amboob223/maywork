const POOL = require("pg").Pool;
const pool = new POOL({
    user:"postgres",
    host:"localhost",
    port:5432,
    database:"jape",
    password:"8896"
});

module.exports = pool//this moudle.exports make it where we can export this page to anoth er page and it can be accessed by requiore