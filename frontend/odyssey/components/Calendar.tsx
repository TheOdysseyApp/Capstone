import * as React from 'react';
import { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal, Pressable} from 'react-native';

const Calendar = () => {
    let weekdays : string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
                        <View>
                          <View>
                            <Text>{months[state.currentDay.getMonth()]} {state.currentDay.getFullYear()}
                            </Text>
                          </View>
                          <View>
                            <View style={{flexDirection: "row"}}>
                              {
                                weekdays.map((weekday) => {
                                  return (<View ><Text>{weekday}     </Text></View>);
                                })
                              }
                            </View>
                            <View>
                            </View>
                          </View>
                        </View>
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
    });





export default Calendar;