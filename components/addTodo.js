import React,{useState} from "react";
import { View,Text,StyleSheet,Button, TextInput } from "react-native";


export default function AddTodo( {submitHandler}){
    const [text,setText] = useState( '');


    const changeHandler = (val) => {
        setText(val);
    }

 return( 

    <View>
        <TextInput 
         style={styles.input}
         placeholder="Add Todo"
         onChangeText={changeHandler}  />
            <Button onPress={()=> submitHandler(text)} title="Add Todo" color='coral' />
    </View>
)
}


const styles = StyleSheet.create({
input: {

}
})