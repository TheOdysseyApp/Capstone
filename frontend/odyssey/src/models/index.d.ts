import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerQuestionnaire = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questionnaire, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly whereFrom: string;
  readonly destination?: string | null;
  readonly planningOptions?: (string | null)[] | null;
  readonly duration?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly activities?: string[] | null;
  readonly isBudgetPerDay: boolean;
  readonly minBudget: number;
  readonly maxBudget: number;
  readonly interests?: (string | null)[] | null;
  readonly tripReason?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionnaire = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questionnaire, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly whereFrom: string;
  readonly destination?: string | null;
  readonly planningOptions?: (string | null)[] | null;
  readonly duration?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly activities?: string[] | null;
  readonly isBudgetPerDay: boolean;
  readonly minBudget: number;
  readonly maxBudget: number;
  readonly interests?: (string | null)[] | null;
  readonly tripReason?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questionnaire = LazyLoading extends LazyLoadingDisabled ? EagerQuestionnaire : LazyQuestionnaire

export declare const Questionnaire: (new (init: ModelInit<Questionnaire>) => Questionnaire) & {
  copyOf(source: Questionnaire, mutator: (draft: MutableModel<Questionnaire>) => MutableModel<Questionnaire> | void): Questionnaire;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly authID: string;
  readonly fullName: string;
  readonly username: string;
  readonly description?: string | null;
  readonly FilledOut?: (Questionnaire | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly authID: string;
  readonly fullName: string;
  readonly username: string;
  readonly description?: string | null;
  readonly FilledOut: AsyncCollection<Questionnaire>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}