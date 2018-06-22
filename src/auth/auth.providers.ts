import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';

export const AuthProviders = [
  {
    provide: 'UserModelToken',
    useFactory: ( connection: Connection ) => connection.model( 'noters', UserSchema ),
    inject: ['DbConnectionToken'],
  },
];