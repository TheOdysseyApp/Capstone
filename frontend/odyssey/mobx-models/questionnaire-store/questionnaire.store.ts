import {Instance, types, SnapshotOut} from 'mobx-state-tree'

export const QuestionnaireStoreModel = types.
    model("QuestionnaireStore")
    .props({
        whereFrom: types.maybe(types.string),
        destination: types.maybe(types.string),
        planningOptions: types.maybe(types.frozen([])),
        duration: types.maybe(types.string),
        startDate: types.maybe(types.Date),
        endDate: types.maybe(types.Date),
        activities: types.maybe(types.frozen([])),
        isBudgetPerDay: types.maybe(types.boolean),
        minBudget: types.maybe(types.number),
        maxBudget: types.maybe(types.number),
        interests: types.maybe(types.frozen([])),
        tripReason: types.maybe(types.frozen([]))
    })
.actions((self) => ({
    
}))
type QuestionnaireStoreType = Instance<typeof QuestionnaireStoreModel>
export type QuestionnaireStore = QuestionnaireStoreType
type QuestionnaireStoreSnapshotType = SnapshotOut<typeof QuestionnaireStoreModel>
export type QuestionnaireStoreSnapshot = QuestionnaireStoreSnapshotType

