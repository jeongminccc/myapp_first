import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>무조건 해야될 일들</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop:70,
    marginBottom:40
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    color:'white'
  }
})

export default Header;