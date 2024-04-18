import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    container:{
      width: '100%',
      padding: 20,
  
    },
    title: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    text:{
      fontSize: 16,
      color: '#6f6f6f',
    },
    whiteText:{
      fontSize: 16,
      color: 'white',
    },
    textInput:{
      width: Dimensions.get('screen').width*0.6,
      borderColor: '#6f6f6f',
      borderWidth: 1,
      borderRadius: 10,
      padding: 12,
    },
    inputContainer:{
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addButton:{
      width: Dimensions.get('screen').width*0.25,
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    scrollContainer:{
      marginTop: 20,
    },
    itemContainer:{
      paddingVertical: 20,
      borderBottomColor: '#d2d2d2',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  
    },
    textDone:{
      fontSize: 16,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    removeButton:{
      backgroundColor: '#f33d3d',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 20,
    }
  });

  export default styles;