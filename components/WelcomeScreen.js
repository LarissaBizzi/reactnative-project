import { ScrollView, View, Text, StyleSheet, Image, useColorScheme, useWindowDimensions } from 'react-native';

export default function WelcomeScreen() {
  const {width, height, fontScale} = useWindowDimensions();
  const colorScheme = useColorScheme();
  return (
    <ScrollView
    style={[
      welcomescreenStyles.container,
      colorScheme === 'light'
        ? { backgroundColor: '#fff' }
        : { backgroundColor: '#333333' },
    ]}>
      <View style={welcomescreenStyles.headerWrapper}>
      <Image
        resizeMode={'cover'}
        style={welcomescreenStyles.logo}
        source={require("../img/logo.png")}
        accessible={true}
        accessibilityLabel='Little Lemon logo'
      />
      <Text
          style={[
            welcomescreenStyles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text style={welcomescreenStyles.regular}>Color Scheme: {colorScheme}</Text>
      <Text
        style={[
          welcomescreenStyles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment.
        </Text>
        <View style={welcomescreenStyles.imageWrapper}>
        <Image
        resizeMode={'cover'}
        style={welcomescreenStyles.image}
        source={require("../img/picture1.png")}
        accessible={true}
        accessibilityLabel='A table of the restaurant with the menu'
      />
      <Image
        resizeMode={'cover'}
        style={welcomescreenStyles.image}
        source={require("../img/picture2.png")}
        accessible={true}
        accessibilityLabel='A restaurant dish with a spoon inside'
      />
      <Image
        resizeMode={'cover'}
        style={welcomescreenStyles.image}
        source={require("../img/picture3.png")}
        accessible={true}
        accessibilityLabel='A lemon cut with a knife'
      />
      <Image
        resizeMode={'cover'}
        style={welcomescreenStyles.image}
        source={require("../img/picture4.png")}
        accessible={true}
        accessibilityLabel='A dish of mussels with a slice of lemon'
      />
      </View>
      <Text style={welcomescreenStyles.regular}>Window Dimensions:</Text>
      <Text style={welcomescreenStyles.regular}>Height: {height}</Text>
      <Text style={welcomescreenStyles.regular}>Width: {width}</Text>
      <Text style={welcomescreenStyles.regular}>Font Scale: {fontScale}</Text>
    </ScrollView>
  );
}

const welcomescreenStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    regular: {
      fontSize: 18,
      textAlign: 'center',
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    },
    headerText: {
      paddingRight: 10,
      paddingLeft: 20,
      paddingTop: 30,
      paddingBottom: 10,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 20,
   },
   imageWrapper: {
    alignItems: 'center'
   },
    image: {
      width: 350,
      height: 250,
      marginBottom: 20,
      borderRadius: 10,
      borderWidth: 2,
   },
})