import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  const [properties, setProperties] = useState([
    {
      id: '1',
      title: 'Lovely Townhouse',
      location: 'New York',
      price: '$500,000',
      imageUri: 'https://www.exmouthjournal.co.uk/resources/images/17207185/?type=responsive-gallery-fullscreen',
      seller: {
        name: 'Alice Johnson',
        contact: '555-1234'
      }
    },
    {
      id: '2',
      title: 'Lakeside Villa',
      location: 'Michigan',
      price: '$750,000',
      imageUri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1',
      seller: {
        name: 'Bob Smith',
        contact: '555-5678'
      }
    },
    {
      id: '3',
      title: 'Condo by the Beach',
      location: 'California',
      price: '$350,000',
      imageUri: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49427843/original/54b456b3-ddc7-4a52-9673-d1b8d75fc054.jpeg?im_w=720&width=720&quality=70&auto=webp',
      seller: {
        name: 'Cathy Lane',
        contact: '555-9012'
      }
    },
    {
      id: '4',
      title: '2BHK',
      location: 'Ireland',
      price: '$550,000',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6wAoRuK3PJu5waFa8WT2q6ixQCZ1-MN_ufUuOwGWSA&s',
      seller: {
        name: 'Sathvik',
        contact: '0899440920'
      }
    },

    {
      id: '5',
      title: 'double bedroom apartment',
      location: 'K78 V1H9',
      price: '$450,000',
      imageUri: 'https://archello.s3.eu-central-1.amazonaws.com/images/2020/11/03/nid-interior-modern-interior-design-of-2-bedroom-apartment-apartments-archello.1604392458.3519.png',
      seller: {
        name: 'Chandu Lavu',
        contact: '0899440920'
      }
    },
    {
      id: '6',
      title: 'single bedroom flat',
      location: 'D11 A729',
      price: '$350,000',
      imageUri: 'https://fpg.roomsketcher.com/image/topic/33/image/Studio-Apartment-3D-Plan.jpg',
      seller: {
        name: 'Srinivas',
        contact: '0899440920'
      }
    },

    {
      id: '7',
      title: 'villa',
      location: 'D15 N668',
      price: '$850,000',
      imageUri: 'https://www.villaabiente.com/resources/abiente/headers/mobile/Villa%20Abiente%20-%20Magnificent%20exterior%20villa.jpg',
      seller: {
        name: 'Rohith',
        contact: '0899440920'
      }
    },

    {
      id: '8',
      title: 'Land',
      location: 'Ireland',
      price: '$950,000',
      imageUri: 'https://www.shutterstock.com/image-photo/empty-dry-cracked-swamp-reclamation-260nw-1880326891.jpg',
      seller: {
        name: 'mahesh',
        contact: '0899440920'
      }
    },

    {
      id: '9',
      title: 'shoping mall',
      location: 'Ireland',
      price: '$1000,000',
      imageUri: 'https://a.cdn-hotels.com/gdcs/production45/d1954/fc79fb2d-5fe6-4c03-b977-02f226b8073a.jpg',
      seller: {
        name: 'Mani',
        contact: '0899440920'
      }
    },

    {
      id: '10',
      title: '2 Bedroom house',
      location: 'Ireland',
      price: '$550,000',
      imageUri: 'https://assets-global.website-files.com/6375fffd5374d2795f833cc8/6375fffd5374d27a1e833fb6_2br.original.jpg',
      seller: {
        name: 'Sathvik',
        contact: '0899440920'
      }
    }
  ]);

  const handlePress = (item) => {
    navigation.navigate('HomeSc', { property: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.listItem}>
            <Image source={{ uri: item.imageUri }} style={styles.propertyImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>Location: {item.location}</Text>
              <Text style={styles.description}>Price: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#fffafa',
    marginBottom: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#483d8b',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  propertyImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default HomeScreen;
