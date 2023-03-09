/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionnaire = /* GraphQL */ `
  query GetQuestionnaire($id: ID!) {
    getQuestionnaire(id: $id) {
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
export const listQuestionnaires = /* GraphQL */ `
  query ListQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncQuestionnaires = /* GraphQL */ `
  query SyncQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const questionnairesByUserID = /* GraphQL */ `
  query QuestionnairesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionnairesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authID
        fullName
        username
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        authID
        fullName
        username
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
