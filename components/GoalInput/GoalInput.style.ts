import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color:"#120438",
        borderRadius: 6,
        width: '100%',
        padding: 12
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
       width:100,
        marginHorizontal: 8,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    }
})
