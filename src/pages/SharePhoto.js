import React ,{useState} from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';


const SharePhoto = () => {
  const {navigate} = useNavigation();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      
    }
    navigate("Photos",{image})
  };

  return (
    <View>
      <Header title="Share Photo" />
      <View style={styles.container}>
        <Button
          placeholder="Select From Library"
          onPress={pickImage}
        />
        <Button placeholder="Open Camera" onPress={() => navigate("Camera")} />
      </View>
    </View>
  );
};

export default SharePhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
