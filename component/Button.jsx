import { TouchableOpacity, Text, StyleSheet } from "react-native";

{/* TouchableOpacity biar bisa dipencet */}
{/* kalo mau sesuatu bisa dipencet bungkus dengan TouchableOpacity */}

function Button({ bgColor = "#19918F", text, handlePress = () => {} }) {
    return(
        <TouchableOpacity onPress={handlePress}
        style={{ ...styles.button, backgroundColor: bgColor }}>
                <Text style={styles.buttonText}>{text}</Text>
              </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;