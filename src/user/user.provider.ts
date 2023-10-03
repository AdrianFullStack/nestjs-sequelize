import { User } from "./entities/user.entity";


export const userProviders = [
    {
        provide: 'USER_ENTITY',
        useValue: User,
    },
];