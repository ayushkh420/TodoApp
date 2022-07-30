import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function TodoItem({item,pressHandler}) {
    return(
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 3,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});











// const TodoItem=(item) =>{
//     return(<TouchableOpacity>
//         <Text style={styles.item}>{item.text}</Text>
//       </TouchableOpacity>)  
// }

// export default TodoItem;
