import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Picker } from 'react-native';

export const ZavrsniRadoviSearchForm = ({ searchOnPress }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchField, setSearchField] = useState("tema");

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setSearchTerm(text)}
      />
      <Picker
        selectedValue={searchField}
        onValueChange={(itemValue, itemIndex) =>
          setSearchField(itemValue)
        }>
        <Picker.Item label="Naslov rada" value="tema" />
        <Picker.Item label="Opis rada" value="obrazlozenje" />
        <Picker.Item label="Status rada" value="trenutniStatus.statusZavrsnogRada.naziv" />
        <Picker.Item label="Mentor" value="mentor.ime" />
        <Picker.Item label="Predsjednik komisije" value="predsjednikKomisije.ime" />
        <Picker.Item label="Član komisije" value="clanKomisije.ime" />
        <Picker.Item label="Student" value="studentIme" />
      </Picker>
      <Button title='Pretraga' onPress={() => searchOnPress(searchTerm, searchField)} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    borderWidth: 1,
  }
})
