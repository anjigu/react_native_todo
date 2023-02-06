import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ 
  title, 
  placeholder, 
  ...props
  // KeyboardType, 
  // returnKeyType, 
  // secureTextEntry 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
      //props는 최상단에 위치 
        {...props}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'none'}
        keyboardAppearance={'light'}
      />
    </View>
  );
};

Input.defaultProps = {
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  // keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  // returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  // secureTextEntry: PropTypes.bool,

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