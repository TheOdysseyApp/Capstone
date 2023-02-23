import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { Colors } from "react-native/Libraries/NewAppScreen";

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
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={[styles.button]} onPress={() => setOpen(true)}>
            <Text style={[styles.text]}>Calendar</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        color: '#194260',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // borderWidth: 0,
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