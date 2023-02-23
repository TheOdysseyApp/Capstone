import React, { useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SelectDropdown from "react-native-select-dropdown"

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const Dropdown = () => {
  <View>
    <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        return item
      }}
    />
  </View>
}


export default Dropdown