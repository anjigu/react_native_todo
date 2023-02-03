import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
    DEFAULT: "default",
    EMAIL: "email-address",
}
const Input = ({ title, placeholder, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        //특정 문자를 자동으로 대문자로 변경
        autoCapitalize={'name'}
        //자동 수정
        autoCorrect={false}
        keyboardType={keyboardType}
      />
    </View>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 42,
  },
});

export default Input;
