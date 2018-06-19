import { Connection } from 'mongoose';
import { PostSchema } from './posts.schema';

export const PostProviders = [
  {
    provide: 'PostModelToken',
    useFactory: (connection: Connection) => connection.model('notes', PostSchema),
    inject: ['DbConnectionToken'],
  },
];