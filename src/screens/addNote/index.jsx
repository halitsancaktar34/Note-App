//import liraries
import React, {useContext, useState} from 'react';
import {View, SafeAreaView, TextInput, Text, Alert} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/uı/button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const {notes, addNote, updateNote, deleteNote} = useContext(MyContext);
  const {note, type} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const navigation = useNavigation();
  const saveNote = () => {
    const form = {
      id: getRandomNumber(1, 100),
      title: title,
      description: description,
      date: '09:30 pm',
    };
    addNote(form);
    Alert.alert('Notunuz basarili bir sekilde kaydedildi.');
    navigation.goBack();
  };

  const onChangeNote = () => {
    if (title && description) {
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '09:30 pm',
      };
      updateNote(note.id, form);
      Alert.alert('Notunuz basarili bir sekilde guncellendi.');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontWeight: '500', fontSize: 16}}>Baslik</Text>
          <TextInput
            placeholder="Lütfen not basligini bu alana yazınız."
            value={title}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 50,
            }}
            onChangeText={text => setTitle(text)}
          />
          <Text style={{fontWeight: '500', fontSize: 16}}>Aciklama</Text>
          <TextInput
            placeholder="Lütfen notunuzu bu alana yazınız."
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 100,
            }}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View>
          <Button
            onPress={type == 'update' ? onChangeNote : saveNote}
            title={type == 'update' ? 'Guncelle' : 'Kaydet'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddNote;
