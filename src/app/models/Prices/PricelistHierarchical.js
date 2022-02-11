module.exports = (sequelize, Sequelize) => {
    const PricelistHierarchical = sequelize.define('PricelistHierarchical', {
        PricelistTypeID :{
            type: Sequelize.INTEGER,
            references: {
                model: 'PricelistTypes',
                key: 'PricelistTypeID'
            }
        },
        Percent: {
            type: Sequelize.INTEGER
        },
        Treshhold: {
            type: Sequelize.STRING
        },
        StartDate: {
            type: Sequelize.DATE
        },
        EndDate: {
            type: Sequelize.DATE
        }
    });

    return PricelistHierarchical;
};