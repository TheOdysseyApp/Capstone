// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Questionnaire, User } = initSchema(schema);

export {
  Questionnaire,
  User
};