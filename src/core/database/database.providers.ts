import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const config: SequelizeOptions = {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
            }

            console.log('config', config)

            const sequelize = new Sequelize(config);
            sequelize.addModels([
                User
            ]);

            await sequelize.sync({ alter: { drop: false } });
            
            return sequelize;
        },
    },
];