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
                //hitSlop의 경우, 클릭 범위를 넒혀줌
                <Pressable onPress={navigation.goBack} hitSlop={10}> 
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