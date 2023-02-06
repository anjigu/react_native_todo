import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { useState } from 'react';

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
  value,
  ...props
}) => {
const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={[
        //스타일이 여러가지 일때는, 조건이 많이 붙는 스타일은 가장 뒤로 보내기
        styles.title, //default
        value && styles.hasValueTitle, //value
        isFocused && styles.focusedTitle, //value +focus  
      ]}>
      {title}
      </Text>

      <TextInput
      //props는 최상단에 위치 
        {...props}
        value={value}
        style={[
          styles.input, 
          value && styles.hasValueInput,
          isFocused && styles.focusedInput]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'none'}
        keyboardAppearance={'light'}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
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
  value: PropTypes.string, 
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
    color: GRAY.DEFAULT
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  }
});
export default Input;