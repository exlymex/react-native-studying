import {Pressable, Text, View} from "react-native";
import {FC, ReactElement} from "react";
import {styles} from "./GoalItem.style";
import {IGoal} from "@types";

interface IProps {
    item: IGoal;
    onDelete: (text: string) => void;
}

const GoalItem: FC<IProps> = ({item, onDelete}): ReactElement => {
    const handleDeleteGoal = () => {
        onDelete(item.id)
    }
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.value}</Text>
            <Pressable android_ripple={{color: "#dddddd"}}
                       style={({pressed}) => [
                           styles.deleteButtonBase,
                           pressed && styles.pressedDeleteButton
                       ]}
                       onPress={handleDeleteGoal}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
        </View>
    );
};

export {GoalItem}


