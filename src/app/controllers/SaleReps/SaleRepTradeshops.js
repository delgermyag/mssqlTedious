

exports.findBySaleRep = (req) => {
    
    const connection = new Connection(config);

    connection.connect((err) => {
        if(err) {
            console.log('Connection failed...');
            throw err;
        }
    });

    const request = new Request("exec COLA.dbo.SP_SALEREPS", (err) => {
        if(err) console.log(err);
    });

    request.addParameter('SaleRepID', TYPES.Int, req.params.SaleRepID);

    connection.execSql(request);
};