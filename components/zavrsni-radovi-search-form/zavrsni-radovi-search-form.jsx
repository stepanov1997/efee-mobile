import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const ZavrsniRadoviSearchForm = ({ searchOnPress, setModalVisible }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchField, setSearchField] = useState("tema");

  return (
    <View style={styles.dialogContainer}>
      <View style={styles.searchHeader}>
        <MaterialIcons name='chevron-left' size={40} onPress={() => setModalVisible(false)} style={styles.iconCloseModal} />
        <TextInput
          style={styles.textInput}
          onChangeText={text => setSearchTerm(text)}
          placeholder='Pojam za pretragu'
        />
      </View>
      <Picker
        prompt='Kategorija za pretragu'
        style={styles.picker}
        selectedValue={searchField}
        onValueChange={(itemValue, itemIndex) =>
          setSearchField(itemValue)
        }>
        <Picker.Item label="Naslov rada" value="tema" />
        <Picker.Item label="Opis rada" value="obrazlozenje" />
        <Picker.Item label="Mentor" value="mentor.ime" />
        <Picker.Item label="Predsjednik komisije" value="predsjednikKomisije.ime" />
        <Picker.Item label="Član komisije" value="clanKomisije.ime" />
        <Picker.Item label="Student" value="studentIme" />
      </Picker>
      <TouchableOpacity style={styles.searchButton} onPress={() => searchOnPress(searchTerm, searchField)}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, }}>Pretraži</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dialogContainer: {
    paddingVertical: 40,
  },
  searchHeader: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#ddd',
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    height: 40,
    flex: 1,
    marginRight: 15,
  },
  picker: {
    marginVertical: 10,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    color: 'white',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
  }
})
