import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { Colors } from "react-native/Libraries/NewAppScreen";
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

const SelectCalendar = () => { 
  const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  return (
    <SafeAreaView>
      <PaperProvider theme={theme}>
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={[styles.button]} onPress={() => setOpen(true)}>
              <Text style={[styles.text]}>Choose Exact Dates</Text>
          </TouchableOpacity>
          <DatePickerModal
            
            locale="en"
            mode="range"
            visible={open}
            onDismiss={onDismiss}
            startDate={range.startDate}
            endDate={range.endDate}
            onConfirm={onConfirm}
            
          />
        </View>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        padding: 7,
        color: '#194260',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // borderWidth: 0,
        fontSize: 11,
        borderRadius: 10,
        width: '50%',
        height: '100%',

    },
    text: {
        fontSize: 12,
        fontWeight:  '400',
        textAlign: "center",
        marginTop: "1%",
        color: '#00000',
        
    }
})

export default SelectCalendar;