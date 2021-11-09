import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  const x = 'myCourse';

  console.log(x);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Try editing me! </Text>
    </View>
  );
};

export default App;
