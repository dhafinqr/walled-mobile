import { ScrollView, Text, View, Pressable } from "react-native";

function Tnc() {

    return(
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
    )
};

export default Tnc;