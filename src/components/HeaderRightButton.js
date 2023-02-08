import { Pressable } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderRightButton = ({ tintColor }) => {
    return (
        <Pressable onPress={() => {}} hitSlop={10}>
            <MaterialCommunityIcons 
            name="cog" size={20} color={tintColor}/>
        </Pressable>
    )
}

export default HeaderRightButton;