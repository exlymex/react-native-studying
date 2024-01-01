import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pressedDeleteButton: {
        opacity: 0.9,
    },
    deleteButtonBase: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 6,
        marginLeft: 8,
    },
    deleteButtonText: {
        color: '#5e0acc',
        fontWeight: 'bold'
    },
    goalText: {
        color: '#ffffff'
    }
})