const sequelize = require('../config/db_config').sequelize;
const { DataTypes } = require('sequelize');
// Define your models
const Utilisateur = sequelize.define('Utilisateur', {
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING
  });
  
  const Vols = sequelize.define('Vols', {
    vol_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    ville_depart: DataTypes.STRING,
    ville_arrivee: DataTypes.STRING,
    heure_depart: DataTypes.TIME,
    heure_arrivee: DataTypes.TIME,
    date_depart: DataTypes.DATE,
    date_arrivee: DataTypes.DATE,
    capacite_max: DataTypes.INTEGER,
    prix: DataTypes.FLOAT
  },
{
    timestamps: false
});
  
  const Reservation = sequelize.define('Reservation', {
    reservation_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    date_reservation: DataTypes.DATE,
    nombre_places: DataTypes.INTEGER,
    statut: DataTypes.STRING
  });
  
  const Paiement = sequelize.define('Paiement', {
    paiement_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    montant: DataTypes.FLOAT,
    date_paiement: DataTypes.DATE,
    statut_paiement: DataTypes.STRING
  });
  
  const Extras = sequelize.define('Extras', {
    extra_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nom_extra: DataTypes.STRING,
    prix_extra: DataTypes.FLOAT
  },
{
    timestamps: false
}
);
  
  // Define associations between tables
  Vols.hasMany(Reservation, { foreignKey: 'vol_id' });
  Reservation.belongsTo(Vols, { foreignKey: 'vol_id' });
  
  Utilisateur.hasMany(Reservation, { foreignKey: 'user_id' });
  Reservation.belongsTo(Utilisateur, { foreignKey: 'user_id' });
  
  Reservation.hasMany(Paiement, { foreignKey: 'reservation_id' });
  Paiement.belongsTo(Reservation, { foreignKey: 'reservation_id' });
  
  Reservation.hasMany(Extras, { foreignKey: 'reservation_id' });
  Extras.belongsTo(Reservation, { foreignKey: 'reservation_id' });
  
  // Synchronize the models with the database
  sequelize.sync();
  
  // Export your models
  module.exports = {
    Utilisateur,
    Vols,
    Reservation,
    Paiement,
    Extras
  };