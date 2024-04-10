import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import colors from "../utils/colors";

const Card = ({ icon, text }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={icon} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    card: {
        width: 296,
        height: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: colors.tertiaryBlue,
    },
    text: {
        fontFamily: 'PublicSansBold',
        fontSize: 18,
        lineHeight: 21.8,
        color: colors.white,
    }
});

export default Card;