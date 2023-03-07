import {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Checkbox} from 'react-native-paper';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
   ...MD3LightTheme, // or MD3DarkTheme
   roundness: 2,
   colors: {
     ...MD3LightTheme.colors,
     primary: '#194260',
     primaryContainer: '#DBEBF3',
   },
 }

const CheckBoxComponent = ({label, initialState, onChange}) => {
   const [checked, setChecked] = useState<boolean>(false)

   useEffect(() => {
      setChecked(initialState)
   }, [])

   return (
      <SafeAreaView style={styles.container}>
         <PaperProvider theme={theme}>
            <Checkbox.Item
               status={checked ? 'checked' : 'unchecked'}
               onPress={() => {
                  setChecked(!checked)
                  onChange(!checked)
               }}
               position='leading'
               label={label}
               mode="android"
               labelStyle={{
                  textAlign:'left',
                  fontSize: 13
               }}
         />
        </PaperProvider>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '75%',
      
   },
});
export default CheckBoxComponent;