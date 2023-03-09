import {Instance, types, SnapshotOut} from 'mobx-state-tree'

export const QuestionnaireStoreModel = types
    .model("QuestionnaireStore")
    .props({
        whereFrom: types.maybe(types.string),
        destination: types.maybe(types.string),
        planningOptions: types.maybe(types.frozen([])),
        startDate: types.maybe(types.Date),
        endDate: types.maybe(types.Date),
        activities: types.maybe(types.frozen([])),
        isBudgetPerDay: types.maybe(types.boolean),
        minBudget: types.maybe(types.number),
        maxBudget: types.maybe(types.number),
        interests: types.maybe(types.frozen([])),
        tripReasons: types.maybe(types.frozen([])),
        duration: types.maybe(types.string),
        month: types.maybe(types.string)
    })
    .actions((self) => ({
        setWhereFrom(whereFrom) {
            self.whereFrom = whereFrom
        },
        setDestination(destination) {
            self.destination = destination
        },
        setPlanningOptions(planningOptions) {
            try {
                self.planningOptions = planningOptions
            }
            catch(error) {
                console.log("Error setting planning options: " + error)
            }
        },
        setStartDate(startDate) {
            self.startDate = startDate
        },
        setEndDate(endDate) {
            self.endDate = endDate
        },
        setActivities(activities) {
            try {
                self.activities = activities
            }
            catch (error) {
                console.log("Error setting activities: " + error)
            }
        },
        setIsBudgetPerDay(isBudgetPerDay) {
            self.isBudgetPerDay = isBudgetPerDay
        },
        setMinBudget(minBudget) {
            self.minBudget = minBudget
        },
        setMaxBudget(maxBudget) {
            self.maxBudget = maxBudget;
        },
        setInterests(interests) {
            try {
                self.interests = interests
            }
            catch (error) {
                console.log("Error setting activities: " + error)
            }
        },
        setTripReasons(tripReasons) {
            try {
                self.tripReasons = tripReasons;
            }
            catch (error) {
                console.log("Error setting activities: " + error)
            }
        },
        setDuration(duration) {
            self.duration = duration;
        },
        setMonth(month) {
            self.month = month;
        },
        resetQuestionnaireData() {
            self.whereFrom = undefined
            self.destination = undefined
            self.planningOptions = undefined
            self.startDate = undefined
            self.endDate = undefined
            self.activities = undefined
            self.isBudgetPerDay = undefined
            self.minBudget = undefined
            self.maxBudget = undefined
            self.interests = undefined
            self.tripReasons = undefined
            self.duration = undefined
            self.month = undefined

        }
    }))
    .actions((self) => ({
        resetStore() {
            self.resetQuestionnaireData();
            console.log("QuestionnaireStore reset.")
        }
    }))
type QuestionnaireStoreType = Instance<typeof QuestionnaireStoreModel>
export type QuestionnaireStore = QuestionnaireStoreType
type QuestionnaireStoreSnapshotType = SnapshotOut<typeof QuestionnaireStoreModel>
export type QuestionnaireStoreSnapshot = QuestionnaireStoreSnapshotType

