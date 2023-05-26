import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(()=>{
    showToast();
  },[])
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Toast Title',
      text2: 'Toast Message',
      visibilityTime: 5000,
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Toast" onPress={showToast} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};
export default App;
