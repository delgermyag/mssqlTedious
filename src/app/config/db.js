module.exports = {
    HOST: '192.168.244.6',
    PORT: "1433",
    USER: 'sa',
    PASSWORD: 'Dalai123',
    DB: 'Cola',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};