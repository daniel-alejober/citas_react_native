import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Constants from "expo-constants";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

export default function App() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [citas, setCitas] = useState([]);

  const eliminarPaciente = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={cerrarTeclado}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight
            style={styles.btnMostrar}
            onPress={mostrarFormulario}
          >
            <Text style={styles.textMostrar}>
              {mostrarForm ? "Cancelar Cita" : "Agregar Cita"}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.subTitle}>Crea Nueva Cita</Text>
              <Formulario
                setCitas={setCitas}
                citas={citas}
                setMostrarForm={setMostrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.subTitle}>
                {citas.length
                  ? "Administra tus Citas"
                  : "No tienes ninguna cita"}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item: cita }) => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarPaciente={eliminarPaciente}
                  />
                )}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#aa076b",
    flex: 1,
  },
  contenido: {
    flex: 1,
    marginHorizontal: "1%",
    marginBottom: 15,
  },
  titulo: {
    marginTop: Constants.statusBarHeight,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginVertical: 10,
  },
  listado: {
    flex: 1,
  },
  btnMostrar: {
    padding: 10,
    backgroundColor: "#17a2b8",
    marginVertical: 10,
    marginHorizontal: "5%",
  },
  textMostrar: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
