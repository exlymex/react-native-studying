import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import {GoalItem} from "components";

export default function App() {
    const [goalText, setGoalText] = useState('')
    const [activeGoals, setActiveGoals] = useState<string[]>([])
    const onGoalTextChange = (text:string) => {
        setGoalText(text)
    }
    const onAddGoal = () => {
        setActiveGoals((prevGoals) => [...prevGoals, goalText])
        // setGoalText('')
    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={onGoalTextChange} style={styles.textInput} placeholder="Your course goal"/>
                <Button onPress={onAddGoal} title="Add Goal"/>
            </View>
            <View style={styles.goalContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <GoalItem item={item}/>}
                    data={activeGoals}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalContainer: {
        flex: 5
    },
});
