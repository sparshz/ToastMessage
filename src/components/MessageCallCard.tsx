import { SafeAreaView, StyleSheet,Animated,Text, TouchableOpacity, View } from 'react-native'
import React ,{useRef , useEffect} from 'react'

interface MessageCallCardProps{
    title: string;
    titleColor:string;
    color:string;
    onPress:()=>void;
}

const MessageCallCard:React.FC<MessageCallCardProps> = ({title,color,titleColor,onPress}) => {
    const translateY = useRef(new Animated.Value(700)).current; 
  const opacity = useRef(new Animated.Value(0)).current; 


  useEffect(() => {
    
    Animated.timing(translateY, {
      toValue: 0, 
      duration: 1200,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 1, 
      duration: 1400, 
      useNativeDriver: true,
    }).start();
  }, [translateY, opacity]);
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={onPress}>

        <Animated.View style={[styles.cardView , {backgroundColor:color},{
          transform: [{ translateY }],
          opacity,
        },]}>
            <Text style={[styles.textView,{color:titleColor}]}>{title}</Text>
        </Animated.View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MessageCallCard

const styles = StyleSheet.create({
    cardView:{
        width:250,
        height:50,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    textView:{
        
        fontSize:25,
        fontWeight:'bold'
        
    }
})



