import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import {GoalInput, GoalItem} from "@components";
import {IGoal} from "@types";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [activeGoals, setActiveGoals] = useState<IGoal[]>([])

    const handleModalVisibility = () => {
        setModalIsVisible((prevModalState) => !prevModalState)
    }
    const onAddGoal = (goalText: string) => {
        if (goalText.length === 0) return

        setActiveGoals((prevGoals) => [
            ...prevGoals,
            {id: Math.random().toString(), value: goalText}
        ]);

        handleModalVisibility();
    }
    const onDeleteGoal = (id: string) => {
        setActiveGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
    }
    return (
        <>
            <StatusBar style='light'/>
            <View style={styles.appContainer}>
                <Button onPress={handleModalVisibility} title="Add New Goal" color="#a065ec"/>
                {modalIsVisible &&
                    <GoalInput onCancel={handleModalVisibility} visible={modalIsVisible} onAddGoal={onAddGoal}/>}
                <View style={styles.goalContainer}>
                    <FlatList
                        keyExtractor={(_item, index) => index.toString()}
                        renderItem={({item}) => <GoalItem onDelete={onDeleteGoal} item={item}/>}
                        data={activeGoals}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalContainer: {
        flex: 5
    },
});
