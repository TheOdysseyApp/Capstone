import {Instance, types, SnapshotOut} from 'mobx-state-tree'

export const UserStoreModel = types
    .model("UserStore")
    .props({
        uid: types.maybe(types.string),
        firstName: types.maybe(types.string),
        lastName: types.maybe(types.string),
        email: types.maybe(types.string),
    })
    .actions((self) => ({
        setUid(uid: string) {
            self.uid = uid
        },
        setEmail(email: string) {
            self.email = email
        },
        setFirstName(firstName: string) {
            self.firstName = firstName
        },
        setLastName(lastName: string) {
            self.lastName = lastName
        },
        resetUserData() {
            self.uid = undefined
            self.firstName = undefined
            self.lastName = undefined
            self.email = undefined
        }
    }))
    .actions((self) => ({
        resetStore() {
            self.resetUserData();
            console.log("User Data reset.")
        }
    }))
type UserStoreType = Instance<typeof UserStoreModel>
export type UserStore = UserStoreType
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export type UserStoreSnapshot = UserStoreSnapshotType

