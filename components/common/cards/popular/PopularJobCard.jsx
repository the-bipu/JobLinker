import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './popularjobcard.style';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const { internship_name, img_link, job_title, location } = item;

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          source={{ uri: checkImageURL(img_link) 
            ? img_link
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" 
          }} 
          resizeMode='contain' 
          style={styles.logoImage} 
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {internship_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
