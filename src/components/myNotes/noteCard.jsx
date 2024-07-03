import React, {Component, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Edit, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNotesStyles';
import {ADDNOTE, NOTDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const NoteCard = ({item, deleteNote, updateNote}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        style={NoteCardStyle.trashButtonContainer}
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }>
        <Edit size="24" color={AppColors.PRIMARY} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        style={NoteCardStyle.trashButtonContainer}
        onPress={() => deleteNote(item.id)}>
        <Trash size="24" color={AppColors.RED} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
