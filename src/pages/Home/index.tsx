import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Home: React.FC = () => {
  const [infoCep, setInfoCep] = useState({});
  const [searchCep, setSearchCep] = useState('');

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerSearch}>
        <TextInput
          placeholder="Digite o cep"
          value={searchCep}
          onChangeText={text => setSearchCep(text)}
        />
        <TouchableOpacity style={style.containerButton}>
          <Text style={style.TextButton}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerResult}>
        <View style={style.containerResultLine}>
          <Text>Rua: </Text>
        </View>
        <View style={style.containerResultLine}>
          <Text>Bairro: </Text>
        </View>
        <View style={style.containerResultLine}>
          <Text>Cidade: </Text>
        </View>
        <View style={style.containerResultLine}>
          <Text>Estado: </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSearch: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerResult: {
    margin: 15,
  },
  containerButton: {
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    width: '100%',
    maxWidth: 100,
    backgroundColor: '#000099',
    maxHeight: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  TextButton: {
    color: '#FFFFFF',
  },
  containerResultLine: {
    marginBottom: 5,
  },
});
export default Home;
