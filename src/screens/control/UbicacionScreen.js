import { Content, Text } from "native-base";
import { CheckBox } from "react-native-elements";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export const UbicacionScreen = (props) => {
  const [state, setState] = useState({
    isReady: false,
    usuario: "",
    clave: "",
    listadoAdultMay: [],
    puntoAtencion: false,
    domicilio: false,
  });

  const navigation = props.navigation.navigate;

  const IndiTestYesavage = () => {
    navigation("IndiTestYesavage");
  };

  const Test = () => {
    navigation("Test");
  };

  /* constructor(){
        super()
        //this.AdultosMayores()
       state = {  
        isReady: false,
        usuario: "",
        clave: "",
        listadoAdultMay: [],
        puntoAtencion: false,
        domicilio: false
    };*/

  useEffect(async() => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    setState(...state, { isReady: true });
    return () => {
      setState({});
    };
},[]);

  useEffect(() => {
    //lo que se va a realizar cuando se carga el componente
    return () => {
      //lo que se va a realizar cuando se desmonta el componente
    }
  }, [])
  //navigation.navigate("ventana") 
  //navigation.replace("ventana") 
  //

  /*async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
   setState({ isReady: true });
  }*/

  // useEffect(() => {
  //   setState(...state, { puntoAtencion: true, domicilio: false });
  //   return () => {
  //     setState({});
  //   };
  // }, []);

  const puntoAtencion = () => {
    //alert('Punto de Atención');
     setState({...state, puntoAtencion: true, domicilio: false})
  }

  // useEffect(() => {
  //   setState(...state, { domicilio: true, puntoAtencion: false });
  //   return () => {
  //     setState({});
  //   };
  // }, []);

  const domicilio = () => {
    //alert('Domicilio');
   setState({...state, domicilio: true, puntoAtencion: false})
  }

  return (
      <Content padder>
        <View style={styles.ContainerTitulo}>
          <Text style={styles.Titulo}>Ubicación del Adulto Mayor</Text>
        </View>
        <View style={styles.ContainerText}>
          <Text style={styles.text}>
            El adulto mayor puede realizar el Test con el acompañamiento
            únicamente en su domicilio.
          </Text>
        </View>
        <View style={styles.ContainerText}>
          <Text style={styles.textSub}>
            Antes de realizar los Tests debe informar sobre el sitio donde se
            está llevando a cabo.
          </Text>
        </View>
        <View style={{ paddingLeft: 25, paddingTop: 15 }}>
          <CheckBox
            checked={state.puntoAtencion}
            onPress={() => puntoAtencion}
            containerStyle={{ backgroundColor: "transparent" }}
            title={<Text style={styles.textOption}>Punto de Atención</Text>}
          />
          <CheckBox
            checked={state.domicilio}
            onPress={() => domicilio}
            containerStyle={{ backgroundColor: "transparent" }}
            title={<Text style={styles.textOption}>Domicilio</Text>}
          />
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={styles.btnContinuar}
            onPress={IndiTestYesavage}
          >
            <Text style={styles.textBtn}>Continuar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSalir} onPress={Test}>
            <Text style={styles.textBtn}>Salir</Text>
          </TouchableOpacity>
        </View>
      </Content>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    // paddingTop: 50,
  },
  ContainerTitulo: {
    //width: WIDTH - 45
  },
  Titulo: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
    opacity: 0.8,
    textAlign: "center",
    // paddingTop: 50,
  },
  text: {
    paddingTop: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textSub: {
    paddingTop: 35,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textOption: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 20,
  },
  ContainerText: {
    //width: WIDTH - 55
  },
  btnContinuar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginTop: 50,
    marginRight: 30,
  },
  btnSalir: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#de0404",
    justifyContent: "center",
    marginTop: 50,
  },
  textBtn: {
    color: "#ffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});