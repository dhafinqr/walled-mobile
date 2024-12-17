import { View, StyleSheet, Text } from "react-native";
import Input from "../../component/Input";
import Amount from "../../component/Amount";

import Button2 from "../../component/Button2";

function Transfer() {
    return (
        <View style={styles.container}>
            <Text style={styles.transfer}>To: 12389012983012</Text>
            <Amount text="Amount" />
            <Input text="Notes" />
            <View style={styles.button}>
            <Button2 text="Transfer"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    transfer: {
        backgroundColor: "#19918F",
        color: "#FFFFFF",
        fontSize: 16,
        padding: 16,
    },
    button:{
        alignItems: "center" ,
        marginTop: 280
    }
});

export default Transfer;