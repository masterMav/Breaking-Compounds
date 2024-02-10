module.exports = (sequelize, DataTypes) => {
  const Compound = sequelize.define(
    "Compound",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      CompoundName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      CompoundDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      strImageSource: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      strImageAttribution: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      dateModified: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );

  return Compound;
};
