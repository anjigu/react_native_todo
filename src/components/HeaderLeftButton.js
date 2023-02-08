import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const HeaderLeftButton = ({ canGoBack, tintColor }) => {
    const navigation = useNavigation();

            if(!canGoBack){
                return null;
            }
            return (
                //헤더 왼쪽 버튼 뒤로가기 기능
                <Pressable onPress={navigation.goBack}> 
                <MaterialCommunityIcons 
                name="chevron-left" 
                size={30} 
                color={tintColor} />
                </Pressable>
            );
};

HeaderLeftButton.PropTypes = {
    canGoBack: PropTypes.bool,
    tintColor: PropTypes.string,
}

export default HeaderLeftButton;