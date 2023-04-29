import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native-elements';
import {getRegionesColombia} from '../api/services';

const Regiones = () => {
    const [regionesColombia, setRegionesColombia] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const regionesColombia =await getRegionesColombia();
            setRegionesColombia(regionesColombia);
        }
        fetchData();

    }, []);

    return (
        <View style={styles.container} >

            <text style={styles.title}>Regiones de Colombia</text>
            {regionesColombia.map(region => (
                <text key={region.id} style={styles.text}>{region.name}</text>
            ))}

        </View>
    );
    
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:20,
        fontWeight :'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    }
});
export default Regiones;