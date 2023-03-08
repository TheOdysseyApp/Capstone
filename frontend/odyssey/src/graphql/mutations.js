/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
      id
      whereFrom
      destination
      planningOptions
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionnaire(
    $input: UpdateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    updateQuestionnaire(input: $input, condition: $condition) {
      id
      whereFrom
      destination
      planningOptions
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
      id
      whereFrom
      destination
      planningOptions
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      authID
      firstName
      email
      description
      FilledOut {
        nextToken
        startedAt
      }
      lastName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      authID
      firstName
      email
      description
      FilledOut {
        nextToken
        startedAt
      }
      lastName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      authID
      firstName
      email
      description
      FilledOut {
        nextToken
        startedAt
      }
      lastName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
