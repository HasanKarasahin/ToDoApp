import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function ToDoItem({
  item,
  deletePressHandler,
  detailsPressHandler,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => detailsPressHandler(item.item_id.toString())}>
      <View style={styles.item}>
        <View style={styles.leftPlace}>
          <Text style={styles.title}>{item.text}</Text>
          <Text style={styles.details}>
            {item.detail ? item.detail : 'Henüz detay girilmemiş..'}
          </Text>
        </View>
        <View style={styles.rightPlace}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => deletePressHandler(item.item_id.toString())}>
            <Image source={require('../img/delete_remove_20.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
  },
  leftPlace: {
    flex: 1,
  },
  rightPlace: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    paddingTop: 5,
    fontWeight: 'normal',
  },
});
