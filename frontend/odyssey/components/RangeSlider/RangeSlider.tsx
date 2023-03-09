import React, { useCallback, useState } from "react";
import RangeSliderRN from "rn-range-slider";
import { View, Text, TextInput } from "react-native";

// import Label from "./Label";
// import Notch from "./Notch";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Thumb from "./Thumb";

const RangeSlider = ({ from, to, onChangeRange, onChangeLow, onChangeHigh }) => {
  // const RangeSlider = () => {
  const [low, setLow] = useState(from);
  const [high, setHigh] = useState(to);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  // const renderLabel = useCallback((value) => <Label text={value} />, []);
  // const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback(
    (newLow, newHigh) => {
      setLow(newLow);
      setHigh(newHigh);
      onChangeRange(newLow, newHigh)
    },
    [setLow, setHigh]
  
  );
  const textValueChangeMin = useCallback(
    (newLow) => {
      setLow(newLow);
      onChangeLow(newLow)
    },
    [setLow]
  
  );
  const textValueChangeMax = useCallback(
    (newHigh) => {
        setHigh(newHigh);
        onChangeHigh(newHigh)
    },
    [setHigh]
  
  );
  // const [numberMax, onChangeMax] = React.useState('');
  // const [numberMin, onChangeMin] = React.useState('');


  
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
          marginHorizontal: 10
        }}
      >
        <View>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#000000", marginLeft:'13%'}]}
          >
           $ {low}
          </Text>
        </View>
        <View>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#000000", marginRight:'5%' }]}
          >
            $ {high}
          </Text>
        </View>
      </View>
      <RangeSliderRN
        style={{
          marginHorizontal:'5%'
        }}
        min={from}
        max={to}
        step={1}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        onValueChanged={handleValueChange}
      />
      <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center', marginBottom:'-40%'}}>
        <TextInput
            style={{
              height: '60%',
              width: '25%',
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 10,
            }}
            // onChangeText={numberMin =>textValueChangeMin(numberMin)}
            value={low}
            onChangeText={numberMin =>textValueChangeMin(numberMin)}
            placeholder="Min"
            keyboardType="numeric"
            textAlign='center'
        />
        <Text> — </Text>
        <TextInput
            style={{
              height: '60%',
              width: '25%',
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 10,
              
            }}
            // onChange={numberMax =>textValueChangeMax(numberMax)}
            value={high}
            onChangeText= {numberMax =>textValueChangeMax(numberMax)}
            placeholder="Max"
            keyboardType="numeric"
            textAlign='center'
        />
      </View>
    </>
  );
};

export default RangeSlider