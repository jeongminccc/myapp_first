import React from "react";
import {View,Text,StyleSheet} from "react-native"

const SubTitle = ({title}) => (
    <View>
        <Text style={styles.subTitleText}>{title}</Text>
    </View>
);

styles = StyleSheet.create({
    subTitleText: {
        fontSize: 18,
        fontWeight: "600",
        color:'white'
    }
})

export default SubTitle;