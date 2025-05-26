class AsignaturasController {
    constructor() {
        this.asignaturas = []; // { nombre, codigo }
        this.estudiantesPorAsignatura = {}; // { codigo: [{ nombre, documento }] }
    }

    agregarAsignatura(req, res) {
        try {
            const { nombre, codigo } = req.body;

            if (!nombre || !codigo) {
                return res.status(400).send("Debe proporcionar nombre y código de la asignatura.");
            }

            if (this.asignaturas.some(a => a.codigo === codigo)) {
                return res.status(409).send("El código de asignatura ya existe.");
            }

            this.asignaturas.push({ nombre, codigo });
            this.estudiantesPorAsignatura[codigo] = [];

            res.status(200).send(`Asignatura '${nombre}' registrada con éxito.`);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    registrarEstudiante(req, res) {
        try {
            const { nombre, documento, codigoAsignatura } = req.body;

            if (!nombre || !documento || !codigoAsignatura) {
                return res.status(400).send("Debe llenar todos los campos.");
            }

            if (!this.estudiantesPorAsignatura[codigoAsignatura]) {
                return res.status(404).send("La asignatura no existe.");
            }

            const lista = this.estudiantesPorAsignatura[codigoAsignatura];
            if (lista.some(est => est.documento === documento)) {
                return res.status(409).send("El estudiante ya está registrado en esta asignatura.");
            }

            lista.push({ nombre, documento });
            res.status(200).send(`Estudiante '${nombre}' registrado en la asignatura.`);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    consultarAsignaturas(req, res) {
        try {
            res.status(200).json(this.asignaturas);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    consultarEstudiantes(req, res) {
        try {
            const { codigo } = req.params;

            if (!codigo || !this.estudiantesPorAsignatura[codigo]) {
                return res.status(404).send("Asignatura no encontrada.");
            }

            const lista = this.estudiantesPorAsignatura[codigo];
            res.status(200).json(lista);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new AsignaturasController();
