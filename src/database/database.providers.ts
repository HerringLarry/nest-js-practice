import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
       mongoose.connect('mongodb://localhost:27017/parley', {db: {autoReconnect: true, bufferMaxEntries:	0} }, (error) => {
         process.stdout.write('Connection Error!!!!!!!!!!!! \n');
       }),
  },
];