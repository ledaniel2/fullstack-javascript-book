import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const WelcomeComponent = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to my App!');

  const changeMessage = () => {
    setWelcomeMessage('You clicked the button!');
  };

  return (
    <View>
      <Text>{welcomeMessage}</Text>
      <Button title="Click me!" onPress={changeMessage} />
    </View>
  );
};

export default WelcomeComponent;
