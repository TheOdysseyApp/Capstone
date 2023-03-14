import {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Checkbox} from 'react-native-paper';

const CheckBoxComponent = ({label, initialState, onChange}) => {
   const [checked, setChecked] = useState<boolean>(false)

   useEffect(() => {
      setChecked(initialState)
   }, [])

   return (
            <Checkbox.Item
               status={checked ? 'checked' : 'unchecked'}
               onPress={() => {
                  setChecked(!checked)
                  onChange(!checked)
               }}
               position='leading'
               color='#194260'
               label={label}
               mode="android"
               labelStyle={{
                  textAlign:'left',
                  fontSize: 13
               }}
         />
   );
};
export default CheckBoxComponent;