import { TouchableOpacity, Text, StyleSheet } from "react-native";

{/* TouchableOpacity biar bisa dipencet */}
{/* kalo mau sesuatu bisa dipencet bungkus dengan TouchableOpacity */}

function Button2({ bgColor = "#19918F", text }) {
    return(
        <TouchableOpacity style={{ ...styles.button, backgroundColor: bgColor }}>
                <Text style={styles.buttonText}>{text}</Text>
              </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 355,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button2;