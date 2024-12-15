import { Text, TextInput, View } from "react-native"

function Nominal (text){
    return(
        <View>
            <Text style={Styles.container}>{text}</Text>
            <TextInput style={Styles.input} />
        </View>
    )
}

export default Nominal;
