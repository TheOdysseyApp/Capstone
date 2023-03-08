import {useMemo} from 'react'
import {types} from 'mobx-state-tree'
import { QuestionnaireStoreModel } from '../questionnaire-store/questionnaire.store';
import { UserStoreModel } from '../user-store/user-store';

export const RootStore = types
    .model("RootStore")
    .props({
        questionnaireStore: types.optional(
            types.late(() => QuestionnaireStoreModel),
            {}
        ),
        userStore: types.optional(
            types.late(() => UserStoreModel), 
            {}
        )
    })
    .actions((self) => ({
        resetData() {
            self.questionnaireStore.resetStore();
        }
    }))

let _store;

export const useStores = () => {
    const store = useMemo(() => {
        if(!_store) {
            _store = RootStore.create()
        }
        return _store
    }, [])
    return store;
}