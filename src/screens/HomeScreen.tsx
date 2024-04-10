import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Card from "../components/Card";
import colors from "../utils/colors";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <Image source={require("../../assets/logo.png")} />
                    <Text style={styles.title}>
                        Gerenciando sua clínica
                    </Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <Text style={styles.subtitle}>
                        Escolha qual seção deseja iniciar:
                    </Text>
                    <Card icon={require("../../assets/icons/doctorIcon.png")} text="Médicos(as)" />
                    <Card icon={require("../../assets/icons/personIcon.png")} text="Pacientes" />
                    <Card icon={require("../../assets/icons/calendarIcon.png")} text="Consultas" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingRight: 32,
        paddingLeft: 32,
    },
    scrollViewContent: {
        
    },
    headerContainer: {
        alignItems: 'flex-start',
        marginBottom: 42,
    },
    title: {
        fontFamily: 'PublicSansBold',
        fontSize: 16,
        lineHeight: 19.4,
        color: colors.quaternaryBlue,
        marginTop: 8,
    },
    buttonContainer: {
        alignItems: 'center',
        gap: 16,
    },
    subtitle: {
        alignSelf: 'flex-start',
        paddingLeft: 4.8,
        fontFamily: 'PublicSansRegular',
        fontSize: 16,
        lineHeight: 19.4,
        color: colors.black,
    },
});

export default HomeScreen;
