import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet } from 'react-native';

const Review = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    // Send the review and rating to the server or handle it in some other way
    console.log(review, rating);
  };

  return (
    <View style={styles.container}>
      <Text>Please leave a review:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setReview(text)}
        value={review}
      />
      <Text>Please rate your experience:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setRating(text)}
        value={rating}
      />
      <Button onPress={handleSubmit} title="Submit Review" color="#A57A5A" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D3D3D3"
  },
})

export default Review;