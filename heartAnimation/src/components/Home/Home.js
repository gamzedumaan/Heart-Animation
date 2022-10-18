import { View, FlatList} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Lottie from 'lottie-react-native';

function Home() {
  const HeartAnimation = () => {
    return <View style={styles.container} />;
  };
  return (
    <View style={styles.containerFlatList}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item}) => <HeartAnimation />}
        keyExtractor={item => item}
      />
      <Lottie
        autoSize
        autoPlay
        source={require('./../../../assets/icons/lottie/95020-butterfly-hearts.json')}
      />
    </View>
  );
}

export default Home;
