import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { DatePickerModal } from 'react-native-paper-dates';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { useState, useEffect } from "react";

const theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#194260',
    primaryContainer: '#DBEBF3',
  },
}

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const SelectCalendar = ({startDate, endDate, onSubmit}) => { 
  // const [range, setRange] = React.useState<{
  //                             startDate: undefined
  //                             endDate: undefined
  //                           }>({ startDate: undefined, endDate: undefined })

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
    // ChangeText(range.startDate, range.endDate)
  }, [setOpen]);
  

  // const ChangeText = React.useCallback((startDate, endDate) => {
  //   DateText = startDate.toString().slice(0,15) + ' - ' + endDate.toString().slice(0,15)
  //   DateText = startDate + ' - ' + endDate
  // }, []);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      onSubmit({startDate, endDate})
      // setRange({ startDate, endDate });
      setShow(!show)
    },
    [setOpen, onSubmit]
  );
  
  const [show,setShow] = useState(false)
  // let DateText

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
            startDate={startDate}
            endDate={endDate}
            onConfirm={onConfirm}
          />
        </View>
        {/* <View>
          {show && <Text style={{alignSelf:"center", marginTop:'5%'}} > 
                {[
                  range.startDate ? dateFormatter.format(range.startDate) : '',
                  range.endDate ? dateFormatter.format(range.endDate) : '',
                ].join(' - ')}
          </Text>}
        </View> */}
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
        fontSize: 11,
        borderRadius: 10,
        width: '50%',
        height: '100%',

    },
    text: {
        fontSize: 12,
        fontWeight:  '300',
        textAlign: "center",
        marginTop: "1%",
        color: '#00000',
        
    }
})

export default SelectCalendar;