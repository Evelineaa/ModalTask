import React, {useState} from 'react';
import { StyleSheet, View, Button, Alert, modalVisible, Pressable, Text, Modal } from 'react-native';
 


 export default function App() {
  const[alertVisible, setAlertVisible] = useState(false);

   const showAlert = () => {
     setAlertVisible(true);
   }
   const hideAlert = () => {
    setAlertVisible(false);
   }

  return (
     <View style={styles.container}>
      {alertVisible ? null: (
        <Pressable onPress={showAlert} titleStyle = {styles.button}>
          <Text style={styles.teksti}>Show modal message</Text>
        </Pressable>
      )}
      <Modal
       animationType="slide"
       transparent={true}
       visible={alertVisible}
       onRequestClose={hideAlert}
      >
      <View style={styles.alertContainer}>
          <View style={styles.alertContent}>
                <Text style = {styles.textmodal}>this is modal...</Text>
              <Pressable onPress={hideAlert} style={styles.closeButton}>
                <Text style = {styles.textClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     </View>
   );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   teksti: {
    fontSize: 20,
   },
   alertContainer: {
    backgroundColor: 'lightgray',
    height: 150,
    width: '100%',
    justifyContent: 'top',
    top: 70,
    alignItems: 'center',
   },
   textmodal: {
    fontSize: 18,
    top: 20,
   },
   textClose: {
    fontSize: 20,
    top: 80,
    left: 30,
    fontWeight: 'bold',
   }

 });