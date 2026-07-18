import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 40 },
    title: {
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    card: {
        marginBottom: 15,
        borderRadius: 12,
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: 'transparent',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 15,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        color: '#777',
    },
    location: {
        color: '#777',
        fontSize: 12,
        marginTop: 2,
    },
    online: {
        color: '#2e7d32',
        fontSize: 12,
        marginTop: 4,
        fontWeight: 'bold',
    },
    offline: {
        color: '#c62828',
        fontSize: 12,
        marginTop: 4,
        fontWeight: 'bold',
    },
});