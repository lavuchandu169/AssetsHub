import { Platform } from 'react-native';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Linking } from 'react-native';

function HomeSc({ route }) {
  const { property } = route.params;

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`)
      .catch(err => console.error("Couldn't load page", err));
  };

  const handleSendMessage = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}`)
      .catch(err => console.error("Failed to send SMS", err));
  };

  const openGoogleMaps = (address) => {
    const urlEncodedAddress = encodeURIComponent(address);
    const url = Platform.OS === 'ios' ? 
      `http://maps.apple.com/?address=${urlEncodedAddress}` : 
      `http://maps.google.com/?q=${urlEncodedAddress}`;

    Linking.openURL(url)
      .catch(err => console.error("Failed to open URL", err));
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: property.imageUri }} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.description}>Location: {property.location}</Text>
        <Text style={styles.description}>Price: {property.price}</Text>
        <Text style={styles.description}>Seller: {property.seller.name}</Text>
        <Text style={styles.description}>Contact: {property.seller.contact}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Call Seller"
            onPress={() => handleCall(property.seller.contact)}
            color="#32cd32"
          />
          <Button
            title="Message Seller"
            onPress={() => handleSendMessage(property.seller.contact)}
            color="#1E90FF"
          />
          <Button
            title="View on Map"
            onPress={() => openGoogleMaps(property.location)}
            color="#FF6347"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#483d8b',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default HomeSc;
