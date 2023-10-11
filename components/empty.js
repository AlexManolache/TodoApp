import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EmptyList() {

    return (
       <View style={styles.container}>
            <Text style={styles.textsTyle}>
                No more todos!
            </Text>
       </View>
    );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5
    },

    textsTyle: {
        color: 'coral',
        fontSize: 18,
        fontWeight: 'bold'
    }
});