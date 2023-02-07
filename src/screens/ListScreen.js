import { Button, StyleSheet, Text, View } from 'react-native';

const ListScreen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>ListScreen</Text>
    
      <Button
        title="push" //같은 화면이어도, 화면을 계속 쌓으면서 이동
        onPress={() => navigation.push('List', { ts: Date.now() })}
      />
      <Button
        title="navigate" //같은 화면이면, 추가로 화면을 쌓지 않음
        onPress={() => navigation.navigate('List', { ts: Date.now() })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListScreen;
