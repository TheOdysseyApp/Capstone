/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestionnaire = /* GraphQL */ `
  subscription OnCreateQuestionnaire(
    $filter: ModelSubscriptionQuestionnaireFilterInput
  ) {
    onCreateQuestionnaire(filter: $filter) {
      id
      whereFrom
      destination
      planningOptions
      duration
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateQuestionnaire = /* GraphQL */ `
  subscription OnUpdateQuestionnaire(
    $filter: ModelSubscriptionQuestionnaireFilterInput
  ) {
    onUpdateQuestionnaire(filter: $filter) {
      id
      whereFrom
      destination
      planningOptions
      duration
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteQuestionnaire = /* GraphQL */ `
  subscription OnDeleteQuestionnaire(
    $filter: ModelSubscriptionQuestionnaireFilterInput
  ) {
    onDeleteQuestionnaire(filter: $filter) {
      id
      whereFrom
      destination
      planningOptions
      duration
      startDate
      endDate
      activities
      isBudgetPerDay
      minBudget
      maxBudget
      interests
      tripReason
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      authID
      fullName
      username
      description
      FilledOut {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      authID
      fullName
      username
      description
      FilledOut {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      authID
      fullName
      username
      description
      FilledOut {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
