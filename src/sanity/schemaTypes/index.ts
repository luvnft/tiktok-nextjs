import { type SchemaTypeDefinition } from 'sanity'
import post from "./post";
import comment from "./comment";
import user from './user';
import postedBy from './postedBy';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    comment,
    user,
    postedBy
  ],
}
