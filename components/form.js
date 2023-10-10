import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ addToList }) {

    const [name, setName] = useState ('');
    
    const changeHandler = (value) => {
        setName(value);
    }
    
    const submitHandler = () => {
        addToList(name);
        setName('');
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