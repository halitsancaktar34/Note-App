//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/uı/button';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';

// create a component
const NotDetail = ({route}) => {
  const {note} = route?.params;
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={{flex: 1, backgroundColor: AppColors.WHITE, padding:10}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Baslik</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Not</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                color: AppColors.SECONDARY,
                marginVertical: 10,
              }}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default NotDetail;
