import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import moment from "moment";
import { Picker } from "native-base";
import { styles } from "../../../estilos/styleRegistro";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

export const RegistroAM = (props) => {
  const navigation = props.navigation;
  const { id } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    nacimiento: "",
    genero: "",
    etnia: "",
    domicilio: "",
    pais_origen: "",
    registro: "",
    cedulaValidate: false,
    nombresValidate: false,
    apellidosValidate: false,
    etniaValidate: false,
    domicilioValidate: false,
    pais_origenValidate: false,
    refreshing: false,
    totalRespuestas: [],
    isReady: false,
    disabled: true,
  });
  const [date, setDate] = useState(new Date());
  const [dateRegistro, setDateRegistro] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleRegsitro, setDatePickerVisibilityRegsitro] =
    useState(false);

  useEffect(() => {
    adultosRegistrados();
    return () => {
      setState({});
    }
  }, [state.isReady]);

  const adultosRegistrados = async () => {
    try {
      const responseAM = await fetch(
        "http://192.188.58.82:3000/adultosMayores",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });
      setState({
        ...state,
        totalRespuestas: await responseAM.json(),
        isReady: true,
        refreshing: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const registroAdultoM = async () => {
    try {
      const response = await fetch(
        "http://192.188.58.82:3000/guardarAdultoMayor",
        {
          method: "POST",
          headers: {
            "Accept": "Application/json",
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            am_id: parseInt(state.totalRespuestas.length + 1),//1
            tec_id: parseInt(id),
            uni_id: 1,
            am_cedula: state.cedula,
            am_nombre: state.nombres,
            am_apellido: state.apellidos,
            am_fecha_de_nacimiento: state.nacimiento,
            am_sexo: state.genero,
            am_autoidentificacion_etnica: state.etnia,
            am_pais_de_origen: state.pais_origen,
            am_fecha_registro: state.registro,
            am_domicilio: state.domicilio,
          }),
        }
      );
      console.log(response.status);
      if (response.status == 200) {
        //const json = await response.json();
        navigation.navigate("HeaderInicio");
      } else {
        Alert.alert("MIES APP", "Error al registrar. Intente m??s tarde. ", [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
    // console.log(
    //   JSON.stringify({
    //     am_id: state.totalRespuestas.length + 1,
    //     tec_id: parseInt(id),
    //     uni_id: 1,
    //     am_cedula: state.cedula,
    //     am_nombre: state.nombres,
    //     am_apellido: state.apellidos,
    //     am_fecha_de_nacimiento: state.nacimiento,
    //     am_sexo: state.genero,
    //     am_autoidentificacion_etnica: state.etnia,
    //     am_pais_de_origen: state.pais_origen,
    //     am_fecha_registro: state.registro,
    //     am_domicilio: state.domicilio,
    //   })
    // );
  };

  //actualizar pagina
  const onRefresh = () => {
      setState({
        ...state,
        refreshing: true,
        isReady: false,
      });
  };

  //validaciones de datos
  const validateCedula = (cedula, type) => {
    var alph = /^([0-9]{0,10})$/;
    if (type == "cedula") {
      if (alph.test(cedula)) {
        setState({
          ...state,
          cedulaValidate: true,
          cedula: cedula,
        });
      } else {
        setState({
          ...state,
          cedulaValidate: false,
        });
      }
    }
  };

  const validateNombre = (nombres, type) => {
    var alph =
      /^[a-zA-Z??-??\u00f1\u00d1]+(\s*[a-zA-Z??-??\u00f1\u00d1]*)*[a-zA-Z??-??\u00f1\u00d1]+$/g;
    if (type == "nombres") {
      if (alph.test(nombres)) {
        setState({
          ...state,
          nombresValidate: true,
          nombres: nombres,
        });
      } else {
        setState({
          ...state,
          nombresValidate: false,
        });
      }
    }
  };

  const validateApellidos = (apellidos, type) => {
    var alph =
      /^[a-zA-Z??-??\u00f1\u00d1]+(\s*[a-zA-Z??-??\u00f1\u00d1]*)*[a-zA-Z??-??\u00f1\u00d1]+$/g;
    if (type == "apellidos") {
      if (alph.test(apellidos)) {
        setState({ ...state, apellidosValidate: true, apellidos: apellidos });
      } else {
        setState({ ...state, apellidosValidate: false });
      }
    }
  };

  const validateEtnia = (etnia, type) => {
    var alph =
      /^[a-zA-Z??-??\u00f1\u00d1]+(\s*[a-zA-Z??-??\u00f1\u00d1]*)*[a-zA-Z??-??\u00f1\u00d1]+$/g;
    if (type == "etnia") {
      if (alph.test(etnia)) {
        setState({ ...state, etniaValidate: true, etnia: etnia });
      } else {
        setState({ ...state, etniaValidate: false });
      }
    }
  };

  const validateDomicilio = (domicilio, type) => {
    var alph =
      /^[a-zA-Z??-??\u00f1\u00d1]+(\s*[a-zA-Z??-??\u00f1\u00d1]*)*[a-zA-Z??-??\u00f1\u00d1]+$/g;
    if (type == "domicilio") {
      if (alph.test(domicilio)) {
        setState({ ...state, domicilioValidate: true, domicilio: domicilio });
      } else {
        setState({ ...state, domicilioValidate: false });
      }
    }
  };

  const validatePais = (pais_origen, type) => {
    var alph =
      /^[a-zA-Z??-??\u00f1\u00d1]+(\s*[a-zA-Z??-??\u00f1\u00d1]*)*[a-zA-Z??-??\u00f1\u00d1]+$/g;
    if (type == "pais") {
      if (alph.test(pais_origen)) {
        setState({
          ...state,
          pais_origenValidate: true,
          pais_origen: pais_origen,
          disabled: false,
        });
      } else {
        setState({ ...state, pais_origenValidate: false, disabled: true });
      }
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setState({
      ...state,
      nacimiento: moment(currentDate).format("YYYY-MM-DD"),
    });
    hideDatePicker();
  };

  const showDatePickerRegistro = () => {
    setDatePickerVisibilityRegsitro(true);
  };

  const hideDatePickerRegistro = () => {
    setDatePickerVisibilityRegsitro(false);
  };

  const handleDateRegistro = (event, selectedDate) => {
    const currentDate = selectedDate || dateRegistro;
    setDateRegistro(currentDate);
    setState({
      ...state,
      registro: moment(currentDate).format("YYYY-MM-DD"),
    });
    hideDatePickerRegistro();
  };

  const validarEntradaDatos = () => {
    if (
      state.nombresValidate == true &&
      state.apellidosValidate == true &&
      state.cedulaValidate == true &&
      state.etniaValidate == true &&
      state.domicilioValidate == true &&
      state.pais_origenValidate == true &&
      !state.genero == "" &&
      !state.nacimiento == "" &&
      !state.registro == ""
    ) {
      registroAdultoM();
    } else {
      Alert.alert("MIES APP", "Debe ingresar todos los datos", [
        {
          text: "Continuar",
          style: "destructive",
        },
      ]);
    }
  };

  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={state.refreshing}
            onRefresh={onRefresh.bind(this)}
          />
        }
      >
        <View tyle={styles.tituloContainer}>
          <Text style={styles.TituloLogin}>Registro</Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"md-person-circle-outline"}
            size={28}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            maxLength={10}
            style={[
              styles.input,
              !state.cedulaValidate ? styles.inputError : null,
            ]}
            placeholder="C??dula"
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(cedula) => validateCedula(cedula, "cedula")}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.cedulaValidate ? styles.TextError : null,
              state.cedulaValidate ? styles.TextErrorValid : null,
            ]}
          >
            Debe ingresar 10 digitos num??ricos
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"person-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              !state.nombresValidate ? styles.inputError : null,
            ]}
            placeholder={"Nombres"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(nombres) => validateNombre(nombres, "nombres")}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.nombresValidate ? styles.TextError : null,
              state.nombresValidate ? styles.TextErrorValid : null,
            ]}
          >
            Solo se permiten letras
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"person-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              !state.apellidosValidate ? styles.inputError : null,
            ]}
            placeholder={"Apellidos"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(apellidos) =>
              validateApellidos(apellidos, "apellidos")
            }
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.apellidosValidate ? styles.TextError : null,
              state.apellidosValidate ? styles.TextErrorValid : null,
            ]}
          >
            Solo se permiten letras
          </Text>
        </View>
        <View style={styles.inputContainer2}>
          <View style={styles.input}>
            <Ionicons
              name={"male"}
              size={30}
              color={"rgba(0,0,0,1)"}
              style={styles.inputIcon1}
            />
            <Picker
              mode="dropdown"
              selectedValue={state.genero}
              onValueChange={(itemValue, itemIndex) =>
                setState({ ...state, genero: itemValue })
              }
              style={styles.picker}
            >
              <Picker.Item label="Selecciona un g??nero" value="" />
              <Picker.Item label="Hombre" value="Hombre" />
              <Picker.Item label="Mujer" value="Mujer" />
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              marginLeft: 25,
              fontWeight: "bold",
            }}
          >
            Fecha de Nacimiento:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"calendar-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIconDate}
          />
          <TouchableOpacity style={styles.btnFecha} onPress={showDatePicker}>
            {state.nacimiento == "" && <Text>Selecciona una fecha</Text>}
            {!state.nacimiento == "" && (
              <Text>{moment(state.nacimiento).format("YYYY-MM-DD")}</Text>
            )}
          </TouchableOpacity>
          {isDatePickerVisible && (
            <DateTimePicker
              value={date}
              mode={"date"}
              display="default"
              timeZoneOffsetInMinutes={0}
              onChange={handleDate}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"people-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              !state.etniaValidate ? styles.inputError : null,
            ]}
            placeholder={"Autoidentificaci??n ??tnica"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(etnia) => validateEtnia(etnia, "etnia")}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.etniaValidate ? styles.TextError : null,
              state.etniaValidate ? styles.TextErrorValid : null,
            ]}
          >
            Solo se permiten letras
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"location-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              !state.domicilioValidate ? styles.inputError : null,
            ]}
            placeholder={"Domicilio"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(domicilio) =>
              validateDomicilio(domicilio, "domicilio")
            }
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.domicilioValidate ? styles.TextError : null,
              state.domicilioValidate ? styles.TextErrorValid : null,
            ]}
          >
            Solo se permiten letras
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"locate"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              !state.pais_origenValidate ? styles.inputError : null,
            ]}
            placeholder={"Pa??s de origen"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(pais_origen) => validatePais(pais_origen, "pais")}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.TextDefault,
              !state.pais_origenValidate ? styles.TextError : null,
              state.pais_origenValidate ? styles.TextErrorValid : null,
            ]}
          >
            Solo se permiten letras
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              marginLeft: 25,
              fontWeight: "bold",
            }}
          >
            Fecha de Registro:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"calendar-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIconDate}
          />
          <TouchableOpacity
            style={styles.btnFecha}
            onPress={showDatePickerRegistro}
          >
            {state.registro == "" && <Text>Selecciona una fecha</Text>}
            {!state.registro == "" && (
              <Text>{moment(state.registro).format("YYYY-MM-DD")}</Text>
            )}
          </TouchableOpacity>
          {isDatePickerVisibleRegsitro && (
            <DateTimePicker
              value={dateRegistro}
              mode={"date"}
              display="default"
              timeZoneOffsetInMinutes={0}
              onChange={handleDateRegistro}
            />
          )}
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            disabled={state.disabled}
            style={[
              state.disabled ? styles.btnRegistrarDisabled : null,
              !state.disabled ? styles.btnRegistrar : null,
            ]}
            onPress={validarEntradaDatos}
          >
            <Text style={styles.text}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
