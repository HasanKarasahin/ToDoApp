import React, {useState} from 'react';
import {StyleSheet, View, Alert, Text, TouchableHighlight, Modal} from 'react-native';

export default function CustomModal({visible,onApprove,onClose}) {
  const [modalVisible, setmodalVisible] = useState(visible);

  return (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>İtem silinecek. Onaylıyor musunuz?</Text>

                   <View style={styles.touchableHighlightView}>
                       <TouchableHighlight
                           style={{...styles.openButton, backgroundColor: '#2196F3'}}
                           onPress={() => {
                               onApprove()
                           }}>
                           <Text style={styles.textStyle}>Evet</Text>
                       </TouchableHighlight>
                       <TouchableHighlight
                           style={{...styles.openButton, backgroundColor: '#f32175'}}
                           onPress={() => {
                               onClose()
                           }}>
                           <Text style={styles.textStyle}>Hayır</Text>
                       </TouchableHighlight>
                   </View>
                </View>
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 5,
        padding: 10,
        elevation: 1,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    touchableHighlightView:{
        padding:10,
        flexDirection:'row',
    }
});
