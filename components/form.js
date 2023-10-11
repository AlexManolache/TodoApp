import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

export default function AddTodo({ addToList }) {

    const [name, setName] = useState ('');
    
    const changeHandler = (value) => {
        setName(value);
    }
    
    const submitHandler = () => {
        if(name.trim().length > 0) {
            addToList(name);
            setName('');
        } else {
            Alert.alert('OOPS!', 'Cannot be added empty value', [
                {text: 'Understood'}, 
            ]);
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="ex. buy Mozzarella"
                onChangeText={changeHandler}
                value={name}
            />
            <Button title="Add Task" color='coral' onPress={submitHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
   
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }

});