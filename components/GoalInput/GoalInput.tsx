import React, {FC, ReactElement, useState} from 'react';
import {Button, Modal, TextInput, View, Image} from "react-native";
import {styles} from "./GoalInput.style";

interface IProps {
    onAddGoal: (goalText: string) => void;
    visible: boolean;
    onCancel: () => void;
}

const GoalInput: FC<IProps> = ({onAddGoal, visible,onCancel}): ReactElement => {
    const [goalText, setGoalText] = useState('')
    const onGoalTextChange = (text: string) => {
        setGoalText(text)
    }
    const addGoalHandler = () => {
        onAddGoal(goalText)
        setGoalText('')
    }
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../../assets/goal.png')} />
                <TextInput
                    value={goalText}
                    onChangeText={onGoalTextChange}
                    style={styles.textInput}
                    placeholder="Your course goal"
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={onCancel} title="Cancel" color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export {GoalInput};
