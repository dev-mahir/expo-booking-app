import React from 'react';
import StackNavigator from './screens/StackNavigator';
import { ModalPortal } from "react-native-modals";


const App = () => {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  )
}

export default App;