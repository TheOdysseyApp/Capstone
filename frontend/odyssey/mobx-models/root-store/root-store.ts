import {useMemo} from 'react'
import {types} from 'mobx-state-tree'

export const RootStore = types.model({

})

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