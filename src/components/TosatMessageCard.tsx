import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'

interface ToastMessageCardProp {
  messageTitle: string;
}

const ToastMessageCard: React.FC<ToastMessageCardProp> = ({ messageTitle }) => {
  const translateY = useRef(new Animated.Value(200)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showToast = Animated.parallel([
      Animated.timing(translateY, {
        toValue: 20, // slide in
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1, // fade in
        duration: 700,
        useNativeDriver: true,
      })
    ]);

    const hideToast = Animated.parallel([
      Animated.timing(translateY, {
        toValue: 500, // slide out
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0, // fade out
        duration: 1000,
        useNativeDriver: true,
      })
    ]);

    Animated.sequence([
      showToast,
      Animated.delay(4000), // wait for 5 seconds
      hideToast
    ]).start();
  }, [translateY, opacity]);

  return (
    <Animated.View style={[styles.toastView, {
      transform: [{ translateY }], opacity
    }]}>
      <View >

      <Text style={styles.textStyle}>{messageTitle} , Notification</Text>
      <Text style={[styles.textStyle , {color:'black'}]}>Lorem Ipsum </Text>

      </View>
    </Animated.View>
  );
}

export default ToastMessageCard

// 
const styles = StyleSheet.create({
  toastView: {
    backgroundColor: 'rgba(60, 60, 60, 0.9)', 
    borderRadius: 30,
    borderColor: "rgba(0, 0, 0, 0.1)", 
    borderWidth: 1.4,
    width: 400,
    height: 110,
    padding: 15, 
    marginHorizontal: 20, 
    marginTop: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  textStyle: {
    color: '#FFFFFF', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});



