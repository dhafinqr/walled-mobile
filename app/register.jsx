import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import { StyleSheet, View, TextInput, Image, Text, Modal, Pressable, Alert, ScrollView } from "react-native";
import Button from "../component/Button";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const termsandcondition = `1.To use the App, you must be at least 18 years old or the legal age in your jurisdiction. By agreeing to these Terms, you confirm that you are eligible to use the App.

2. You must register for an account to use the App. During registration, you will provide accurate and complete information and update it as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.

3. Provided The App offers various services, including but not limited to storing funds, transferring money, making payments, and purchasing goods and services. We reserve the right to change or discontinue any service at our discretion.

4. Some services provided by the App may involve fees, which will be disclosed to you before completing a transaction. By using the App, you agree to pay any applicable fees as described.

6. Transactions made through the App are processed according to the rules and regulations of the payment networks involved. We are not responsible for delays or errors caused by third-party payment systems.

7. We use encryption and other security measures to protect your information. However, you are responsible for maintaining the security of your account. Notify us immediately if you suspect any unauthorized access to your account.

8.  Your use of the App is governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data.

9. We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or unlawful activities.

10. of Liability We are not liable for any damages resulting from the use or inability to use the App, including but not limited to lost profits, data loss, or any other indirect or consequential damages.

11. Modifications to Terms We may update or modify these Terms from time to time. Any changes will be posted within the App, and the updated Terms will be effective once posted. By continuing to use the App after the changes are made, you agree to the updated Terms.

12. Governing Law These Terms are governed by the laws of [Jurisdiction]. Any disputes related to these Terms shall be resolved in the competent courts of [Jurisdiction].

13. Contact Us If you have any questions about these Terms, please contact us at [contact information].` 
 
    return (
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <ScrollView>
                <View style={styles.modalView}>
                  <Text style={{fontWeight: "bold", marginBottom:"10", fontSize: 25}}>
                    Terms And Condition
                  </Text>
                  <Text style={styles.modalText}>{termsandcondition}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </Modal>

          <TextInput
            style={styles.input}
            placeholder="Fullname"
            placeholderTextColor="#000000"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000000"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000000"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Nomor HP"
            keyboardType="number-pad"
            placeholderTextColor="#000000"
            secureTextEntry={true}
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#19918F' : undefined}
            />
            <Text> I have read and agree to the</Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.registerLink}> Terms and Conditions</Text>
            </Pressable>
            <Text style={{color: "red"}}> *</Text>
          </View>
          
          <Button text="Register" bgColor="#19918F" />

          <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>Have an account?</Text>
                  <Link href="/" style={styles.registerLink}> Login Here</Link>
                </View>

          <StatusBar style="auto" />
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 233,
    height: 57,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row", // Agar teks dan link berada dalam satu baris
    alignItems: "center", // Vertikal rata tengah
    justifyContent: "flex-start", // Horizontal rata kiri
    width: "100%", // Mengambil lebar penuh dari layar
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: "#000",
  },
  registerLink: {
    fontSize: 14,
    color: "#19918F",
  },
  checkboxContainer:{
    flexDirection: "row", // Agar teks dan link berada dalam satu baris
    alignItems: "center", // Vertikal rata tengah
    marginBottom: 20,
    width: "100%"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'justify',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FFFFFF',
  },
  buttonClose: {
    backgroundColor: '#19918F',
  },
});
