// controllers/asistenciaController.js

let listaEstudiantes = [];
let listaGuardada = [];

const crearSesion = (req, res) => {
  listaEstudiantes = [];
  listaGuardada = [];
  res.json({ mensaje: "Sesión creada correctamente." });
};

const agregarEstudiante = (req, res) => {
  const { codigo } = req.body;
  if (!codigo || codigo.trim() === "") {
    return res.status(400).json({ error: "Código de estudiante requerido." });
  }
  listaEstudiantes.push({ codigo, estado: "AUSENTE" });
  res.json({ mensaje: "Estudiante agregado.", listaEstudiantes });
};

const cambiarEstadoPresente = (req, res) => {
  const codigo = req.params.codigo;
  const estudiante = listaEstudiantes.find(e => e.codigo === codigo);
  if (!estudiante) {
    return res.status(404).json({ error: "Estudiante no encontrado." });
  }
  estudiante.estado = "PRESENTE";
  res.json({ mensaje: "Estado cambiado a PRESENTE.", estudiante });
};

const cambiarEstadoTarde = (req, res) => {
  const codigo = req.params.codigo;
  const estudiante = listaGuardada.find(e => e.codigo === codigo);
  if (!estudiante) {
    return res.status(404).json({ error: "Estudiante no encontrado en lista guardada." });
  }
  estudiante.estado = "LLEGÓ TARDE";
  res.json({ mensaje: "Estado cambiado a LLEGÓ TARDE.", estudiante });
};

const guardarSesion = (req, res) => {
  listaGuardada = JSON.parse(JSON.stringify(listaEstudiantes));
  res.json({ mensaje: "Sesión guardada.", listaGuardada });
};

const consultarSesion = (req, res) => {
  res.json({ listaGuardada });
};

module.exports = {
  crearSesion,
  agregarEstudiante,
  cambiarEstadoPresente,
  cambiarEstadoTarde,
  guardarSesion,
  consultarSesion
};
