import { mysqlConnection } from "../DATABASE/conexion.js"

const getVehiculos= async (_, res) => {
     mysqlConnection.query (await 'CALL SelectVehiculos()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const postVehiculos = async (req, res) => {
    const params = [
        req.body.year,
        req.body.motor,
        req.body.potence,
        req.body.marc,
        req.body.model,
        req.body.typeTransmition
    ];

    const query = 'CALL InsertVehiculos(?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, params, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ msg: 'Error al insertar el vehículo' });
        } else {
            res.json({
                result
            });
        }
    });
};

const getVehiculo= async (req, res) => {
    const params = [
        req.params.search,
    ];

    const query = ' CALL SelectBuscarVehiculo(?);'
    mysqlConnection.query(query, params, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ msg: 'Error al buscar el vehículo' });
        } else {
            res.json({
                result
            });
        }
   });
}

export{getVehiculos, postVehiculos, getVehiculo}
