import { View, StyleSheet, Text } from "react-native";
import Input from "../../component/Input";
import Amount from "../../component/Amount";
import Dropdown from "../../component/Dropdown";
import Button2 from "../../component/Button2";

function Topup() {
    return (
        <View style={styles.container}>
            <Amount text="Amount" />
            <Dropdown />
            <Input text="Notes" />
            <View style={styles.button}>
            <Button2 text="Topup"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20, 
    },
    button:{
        alignItems: "center"
    }
});

export default Topup;

