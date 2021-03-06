"use strict";

module.exports = function(sequelize, DataTypes) {
    const Articulo = sequelize.define("Articulo", {
        articulo_id : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        titulo: DataTypes.TEXT,
        abstract: DataTypes.TEXT,
        fecha_publicacion: DataTypes.DATE,
        url: DataTypes.TEXT,
        revista: DataTypes.TEXT,
        campo_id: DataTypes.INTEGER
    });

    Articulo.associate = function(models) {
        Articulo.belongsToMany(models.Persona, {
            foreignKey: 'articulo_id',
            through: models.PersonaEnArticulo
        });
        Articulo.belongsTo(models.Campo, {
            foreignKey: 'campo_id'
        });
    };

    return Articulo;
};
