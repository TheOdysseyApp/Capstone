import {Instance, types, SnapshotOut} from 'mobx-state-tree'

export const UserStoreModel = types
    .model("UserStore")
    .props({
        name: types.maybe(types.string),
        uid: types.maybe(types.string),
        email: types.maybe(types.string),
    })
    .actions((self) => ({
        setName(name) {
            self.name = name
        },
        setUid(uid) {
            self.uid = uid
        },
        setEmail(email) {
            self.email = email
        },
        resetUserData() {
            self.name = undefined
            self.uid = undefined
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

