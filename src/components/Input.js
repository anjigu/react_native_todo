import { StyleSheet, Text, TextInput, View } from "react-native";
import PropType from 'prop-types';

const Input = ({title}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <TextInput 
            style={styles.input}
            placeholder={placeholder ?? title}
            placeholderTextColor={'#a3a3a3'}
            />
        </View>
    );
};

Input.protTypes = {
    title: PropType.string,
    placeholder: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    title: {
        marginBottom: 4
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 8,
        height: 42,
    }
})
export default Input;