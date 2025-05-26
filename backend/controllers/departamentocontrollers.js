class DepartamentoController {
    constructor() {
        this.departamentos = [
            { codigo: "D001", nombre: "Ciencias Básicas" },
            { codigo: "D002", nombre: "Ingeniería" }
        ];
    }

    consultar(req, res) {
        try {
            const { codigo } = req.params;
            const departamento = this.departamentos.find(dep => dep.codigo === codigo);

            if (!departamento) {
                return res.status(404).send("Departamento no encontrado");
            }

            res.status(200).json(departamento);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    modificar(req, res) {
        try {
            const { codigo, nuevoNombre } = req.body;
            const departamento = this.departamentos.find(dep => dep.codigo === codigo);

            if (!departamento) {
                return res.status(404).send("Departamento no encontrado para modificar");
            }

            departamento.nombre = nuevoNombre;
            res.status(200).send("Departamento modificado con éxito");
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new DepartamentoController();
