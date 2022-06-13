import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
//*El componente de Button no se le pueden cambiar los estilos por defecto te dara los estilos dependiendo de android y ios, y asi se usa  <Button title="Eliminar" /> para eso usamos TouchableHighlight

const Cita = ({ cita, eliminarPaciente }) => {
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
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
  label: { fontWeight: "bold", fontSize: 18, marginTop: 10 },
  texto: { fontSize: 15 },
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
