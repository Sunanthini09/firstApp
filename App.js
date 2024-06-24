import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2, backgroundColor: 'white',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }} >
        <Image
          source={require('./assets/lru.png')}
          resizeMode="contain"
          style={{width: 120, height: 160}}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }} >
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        มหาวิทยาลัยราชภัฏเลย</Text>
        <Text style={{fontSize: 12}}>
        Loei Rajabhat University</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;