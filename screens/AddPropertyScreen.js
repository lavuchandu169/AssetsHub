import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useProperties } from '../PropertiesProvider/PropertiesContext'; // Adjust the import path as needed

function AddPropertyScreen({ navigation }) {
    const { addProperty } = useProperties();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [imageUri, setImageUri] = useState('');

    // Function to request permission and pick image
    const pickImage = async () => {
        // Requesting permission to access the gallery
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
            return;
        }

        // Launching the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const handleSubmit = async () => {
        if (!title || !location || !price || !imageUri) {
            Alert.alert('Error', 'All fields are required, including selecting an image.');
            return;
        }

        try {
            await addProperty({
                title,
                location,
                price,
                imageUri,
            });
            Alert.alert('Success', 'Property added successfully!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to add property.');
            console.error('Failed to add property:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Property Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
                style={styles.input}
            />
            <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                style={styles.input}
            />
            <Button title="Pick an Image" onPress={pickImage} />
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : null}
            <Button title="Submit Property" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        marginVertical: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10
    }
});

export default AddPropertyScreen;
