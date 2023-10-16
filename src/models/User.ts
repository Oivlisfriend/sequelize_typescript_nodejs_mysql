import { DataTypes, Model } from 'sequelize';
import connection from '../database/index';
import { underscoredIf } from 'sequelize/types/utils';
interface UserAttributes {
    id?: number;
    name?: string | null;

}
class User extends Model implements UserAttributes {
    public id?: number;
    public name?: string;

}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    idade: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}, {
    sequelize: connection,
    underscored: false
})

module.exports = User;