import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckBoxComponent = ({label}) => {
   
   const [checked, setChecked] = React.useState(false);
   return (
      <SafeAreaView style={styles.container}>
         <Checkbox.Item
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
            position='leading'
            label={label}
            mode="android"
            labelStyle={{
                textAlign:'left',
                fontSize: 13
            }}
        />
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