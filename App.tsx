import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MessageCallCard from './src/components/MessageCallCard'
import TosatMessageCard from './src/components/TosatMessageCard'



const App = () => {
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const showMessage = (title: string) => {
    setMessage(title);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }
  return (
    <SafeAreaView  >
      <View style={styles.container}>
        <MessageCallCard title='CAUTION' color="#eed202" titleColor='white' onPress={() => showMessage('CAUTION')} />
        <MessageCallCard title='SUCCESS' color="#38b000" titleColor='white' onPress={() => showMessage('SUCCESS')} />
        <MessageCallCard title='DANGER' color="#e63946" titleColor='white' onPress={() => showMessage('DANGER')} />
        <MessageCallCard title='INFO' color="#00b4d8" titleColor='white' onPress={() => showMessage('INFO')} />
      </View>
      {show && (
        <View style={{alignItems:'center' , justifyContent:'center'}}>

          <TosatMessageCard messageTitle={message}  />
        </View>)
      }

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200,
  }
})


