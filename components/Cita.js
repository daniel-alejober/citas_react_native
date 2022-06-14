import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const Cita = ({ cita, eliminarPaciente }) => {
  return (
    <View style={styles.cita}>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Contacto:</Text>
        <Text style={styles.texto}>{cita.telefono}</Text>
      </View>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Fecha Cita:</Text>
        <Text style={styles.texto}>{cita.fecha}</Text>
      </View>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Hora Cita:</Text>
        <Text style={styles.texto}>{cita.hora}</Text>
      </View>
      <View style={styles.infoCita}>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => eliminarPaciente(cita.id)}
          style={styles.btnEliminar}
        >
          <Text style={styles.textBtn}>Eliminar &#10006;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: "#fff",
    borderBottomColor: "#e1e1e1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  infoCita: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: { fontWeight: "bold", fontSize: 18 },
  texto: { fontSize: 15, marginLeft: 4, color: "gray", fontWeight: "bold" },
  btnEliminar: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
    marginHorizontal: "5%",
  },
  textBtn: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Cita;
