import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, deteleTask }) {
 
    return (
        <TouchableOpacity onPress={() => {
            deteleTask(item.key);
        }}>
            <View style={styles.item}>
                <MaterialIcons name='delete' style={styles.styleIcon}/>
                <Text style={styles.styleText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
  
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    styleIcon: {
        marginRight: 10,
        fontSize: 15,
        color: 'coral'
    }
});