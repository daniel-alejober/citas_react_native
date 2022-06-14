import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { uid } from "../utilities/uid";

const Formulario = ({ citas, setCitas, setMostrarForm }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirmDate = (date) => {
    const opciones = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setFecha(date.toLocaleDateString("es-Es", opciones));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    const opciones = {
      hour: "2-digit",
      minute: "2-digit",
    };
    setHora(time.toLocaleTimeString([], opciones));

    hideTimePicker();
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Todos los campos son obligatorios", [{ text: "OK" }]);
  };

  const crearNuevaCita = () => {
    if ([paciente, propietario, telefono, sintomas, fecha, hora].includes("")) {
      mostrarAlerta();
      return;
    }
    const cita = {
      id: uid(),
      paciente,
      propietario,
      telefono,
      sintomas,
      fecha,
      hora,
    };
    setCitas([...citas, cita]);
    setMostrarForm(false);
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setPaciente(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setPropietario(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Teléfono Contacto</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setTelefono(texto)}
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text style={styles.label}>Fecha</Text>
        <Button
          title={
            fecha ? "Fecha Seleccionada Correctamente" : "Seleccionar Fecha"
          }
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          locale="es-ES"
          customHeaderIOS="Elige una Fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
      </View>

      <View>
        <Text style={styles.label}>Hora</Text>
        <Button
          title={hora ? "Hora Seleccionada Correctamente" : "Seleccionar Hora"}
          onPress={showTimePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          locale="es-ES"
          customHeaderIOS="Elige una Hora"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
      </View>

      <View>
        <Text style={styles.label}>Síntomas</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(texto) => setSintomas(texto)}
        />
      </View>
      <View style={styles.containerBtn}>
        <TouchableHighlight
          onPress={() => crearNuevaCita()}
          style={styles.btnAdd}
        >
          <Text style={styles.textBtn}>Agregar Cita &#10004;</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 10,
  },
  containerBtn: {
    marginVertical: 10,
  },
  btnAdd: {
    padding: 10,
    backgroundColor: "#28a745",
    marginVertical: 10,
    marginHorizontal: "5%",
  },
  textBtn: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Formulario;
