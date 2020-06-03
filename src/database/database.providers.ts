
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { SEQUELIZE } from '../constants';
import { User } from '../manage-user/user.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async (config: ConfigService) => {
            const sequelize = new Sequelize({
                dialect: config.get('DB_TYPE'),
                host: config.get('DB_HOST'),
                port: config.get('DB_PORT'),
                username: config.get('DB_USER'),
                password: config.get('DB_PASSWORD'),
                database:config.get('DB_DATABASE'),
            });
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService],
    },
];