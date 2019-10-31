import React from "react"
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import {AntDesign} from "@expo/vector-icons"

const {width,height} = Dimensions.get('window');

const TodoItem= ({text,isComplete,changeComplete,deleteItem}) => (
    <View style={styles.todoContainer}>
        <View>
            <View style={styles.objContainer}>
                <View style={styles.textContainer}>
                    <TouchableOpacity  
                        onPress={changeComplete}>  
                        <AntDesign name={isComplete?"checksquare":"checksquareo"} size={30} style={styles.check}/>
                    </TouchableOpacity>
                    <Text style={styles.todos}>{text}</Text>
                </View>
                <TouchableOpacity  
                    onPress={deleteItem}>  
                    <AntDesign name="close" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        color:'white',
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1,
        width: width-40
    },
    todos: {
        color:'white',
        fontSize: 20
    },
    objContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textContainer: {
        flexDirection:'row',
        alignItems:'center'
    },
    check: {
        marginRight: 10,
    }
})

export default TodoItem;