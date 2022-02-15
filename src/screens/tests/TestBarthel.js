import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

export const TestBarthel = (props) => {
  const [state, setState] = useState({
    //state = {
      nombreUsuario: "",
      unidadAtencion: "",
      zona: "",
      distrito: "",
      modalidad: "",
      anio: "",
      meses: "",
      aplicadoPor: "",
      //Ver y ocultar clave
      showPass: true,
      press: false
    //}
  });
  const navigation = props.navigation;

 

  // const registroUsuario = () => {
  //   //alert('OK');
  //   const { nombreUsuario } = state;
  //   const { unidadAtencion } = state;
  //   const { zona } = state;
  //   const { distrito } = state;
  //   const { modalidad } = state;
  //   const { anio } = state;
  //   const { meses } = state;
  //   const { aplicadoPor } = state;

  //   fetch('http://192.168.1.9/pruebas_react/registrarse.php', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'Application/json',
  //       'Content-type': 'Application/json'
  //     },
  //     body: JSON.stringify({
  //       nombreUsuario: nombreUsuario,
  //       unidadAtencion: unidadAtencion,
  //       zona: zona,
  //       distrito: distrito,
  //       modalidad: modalidad,
  //       anio: anio,
  //       meses: meses,
  //       aplicadoPor: aplicadoPor,
  //     })

  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       alert(responseJson);
  //     }).catch((error) => {
  //       console.log(error);
  //     });

  // }


  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.logoContainer}>

      </View>
      <View tyle={styles.tituloContainer}>
        <Text style={styles.TituloLogin}>Indice de Barthel</Text>
      </View>
      <View tyle={styles.titulLabel}>
        <Text style={styles.TextInfo}>Versión Original. Actividades Básicas de la Vida Diaria</Text>
      </View>
      <View tyle={styles.titulLabel}>
        <Text style={styles.TextInfo}>FICHA N° 3a</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Nombre del usuario'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setState({ ...state, nombreUsuario: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'md-school'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Nombre de la Unidad de Atención'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={unidadAtencion => setState({ ...state, unidadAtencion })}
        />
      </View>
      <View style={styles.inputContainer}>

        <Icon name={'ios-pin'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Zona'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={zona => setState({ zona })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-locate'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Distrito'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={distrito => setState({ ...state, distrito })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-time'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Modalidad de Atención'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={modalidad => setState({ modalidad })}
        />
      </View>
      <View tyle={styles.tituloLabel}>
        <Text style={styles.labelEdad}>Edad</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'md-time'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Años'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={anio => setState({ anio })}
        />

      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-today'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Meses'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={meses => setState({ meses })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Aplicado por'}
          placeholderTextColor={'rgba(0,0,0,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={aplicadoPor => setState({ aplicadoPor })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.btnRegistrar}
          onPress={() => navigation.navigate('PreguntasBarthel')}>
          <Text style={styles.text}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.navigate('Test')}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );

};
export default TestBarthel;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',

  },
  scrollView: {
    // backgroundColor: 'pink',
    marginBottom: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 40,
  },
  logoLogin: {

    height: 150
  },
  tituloContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  tituloLabel: {
    alignItems: 'center',
    marginBottom: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  TituloLogin: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    justifyContent: 'center',
    textAlign: 'center'
  },
  TextInfo: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'center'
  },
  labelEdad: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    //opacity: 0.5
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,1)',
    marginHorizontal: 25,

  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  forgot: {
    color: 'rgba(0,0,0,1)',
    fontSize: 18,
    paddingTop: 20,
  },
  btnRegistrar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 30

  },
  btnCancelar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    marginBottom: 20,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});