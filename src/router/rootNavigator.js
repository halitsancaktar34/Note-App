// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTDETAIL,
  SECONDSSCREEN,
} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import NoteDetail from '../screens/nodeDetail';
import AddNote from '../screens/addNote';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/uı/headerRight';

const Stack = createNativeStackNavigator();

function RootNavigatoor() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.SECONDARY,
      }}>
              <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigatoor;
