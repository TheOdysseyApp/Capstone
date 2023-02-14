import * as React from 'react';
import { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal, Pressable} from 'react-native';
import { DataTable } from 'react-native-paper';

// note: This Calendar component was created using this tutorial for React.js: https://derrickotte.medium.com/how-to-create-a-calendar-from-scratch-in-react-1f2db197454d

const Calendar = () => {
    let weekdays : string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let months : string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let state = { currentDay : new Date() };

    const [calendarVisible, setCalendarVisible] = useState(false);
    return(
        <SafeAreaView style={styles.centeredView}> 
            <Modal 
                animationType = "slide"
                transparent = {true}
                visible = {calendarVisible}
                onRequestClose = {() => {setCalendarVisible(!calendarVisible);}}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{months[state.currentDay.getMonth()]} {state.currentDay.getFullYear()}</Text>
                        <DataTable style={{padding: 0, alignContent:'center', borderRadius:0}}>
                          <DataTable.Header style={{padding: 0, alignContent:'center', borderRadius:0}}>
                            {
                              weekdays.map((weekday) => {
                                return (<DataTable.Title style={{padding: 0, alignContent:'center', borderRadius:0}}><Text style={styles.innerText}>{weekday}</Text></DataTable.Title>);
                              })
                            }
                          </DataTable.Header>
                        <CalendarDays day={state.currentDay}></CalendarDays>
                        </DataTable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setCalendarVisible(!calendarVisible)}>
                        <Text style={styles.textStyle}>Set Dates</Text>
                    </Pressable>
                  </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setCalendarVisible(true)}>
                <Text style={styles.textStyle}>Show Calendar</Text>
            </Pressable>
        </SafeAreaView>

    );
}



const CalendarDays = (props:{day: Date}) =>{
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      let calendarDay = {
        currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
        date: (new Date(firstDayOfMonth)),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
        year: firstDayOfMonth.getFullYear(),
        weekday: firstDayOfMonth.getDay(),
      }

      currentDays.push(calendarDay);
    }

    let weeksOfMonth = [];
    let i = 0;
    for( let f = 0; f < 6; f++){
      let weekItem = [];
      let k = 0;
      while (k < 7){
        weekItem.push(currentDays[i]);
        k++;
        i++;
      }
      weeksOfMonth.push(weekItem);
    }
    // for (let i = 0; i < 42; i++){
    //   let weekItem = [];
    //   console.log("Week "+i+": ");
    //   for(let j = 0; j < 7; j++){
    //     weekItem.push(currentDays[i]);
    //     console.log(currentDays[i].date);
    //   }
    //   weeksOfMonth.push(weekItem);
    // }

    return(
      <View>
        {
          weeksOfMonth.map((week) => {
            return(
              <DataTable.Row>{
                week.map((day) =>{
                  return (
                    <DataTable.Cell>
                      {day.number}
                    </DataTable.Cell>
                  );
                })}
              </DataTable.Row>
            );
          })
        }
      </View>
    );
      

    // let body = []
    // for(let i = 0; i < 5; i++){
    //   let week = <DataTable.Row>
    //     {
    //       currentDays.map((day) => {
    //         if(day.date.getDay() < 7){
    //           return (
    //             <DataTable.Cell>
    //               {day.number}
    //             </DataTable.Cell>
    //           )
    //         }
    //       })
    //     }
    //   </DataTable.Row>
    // body.push(week);
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        height: '50%',
        width: '90%',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 24,
      },
      innerText:{
        alignSelf: 'center',
        fontSize: 14,
        color: "black",
      }
    });





export default Calendar;