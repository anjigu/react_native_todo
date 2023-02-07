import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const ListScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>ListScreen</Text>
            <Button></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;