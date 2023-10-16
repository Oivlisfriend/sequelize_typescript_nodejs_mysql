import { DataTypes, Model } from 'sequelize';
const User = require('../models/User')
import connection from '../database/index';
import { underscoredIf } from 'sequelize/types/utils';
interface UserAttributes {
  id?: number;
  rua?: string | null;
  casa?: string | null;

}

class Address extends Model implements UserAttributes {
  id?: number;
  rua?: string;
  casa?: string;

}
Address.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  rua: {
    allowNull: false,
    type: DataTypes.STRING
  },
  casa: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  sequelize: connection,
  underscored: false
})
Address.belongsTo(User, { foreignKey: 'id_user', as: 'user' })


module.exports = Address;