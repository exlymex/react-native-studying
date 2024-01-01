import {Text, View,StyleSheet} from "react-native";
import {FC} from "react";
interface IProps {
    item: string
}
const GoalItem:FC<IProps> = ({item}) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item}</Text>
        </View>
    );
};

export {GoalItem}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        margin: 8
    },
    goalText: {
        color: '#ffffff'
    }
})
