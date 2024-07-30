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

const putVehiculos = async (req, res) => {
    let veh = req.body;
    var sql = "SET @cod_vehiculo = ?; SET @año_vehiculo = ?; SET @mot_vehiculo = ?; SET @pot_vehiculo = ?; SET @cod_marca = ?; SET @modelo = ?; SET @cod_tipo_transmision = ?;\
    CALL UpdateVehiculos( cod_vehiculo,@año_vehiculo, @mot_vehiculo, @pot_vehiculo, @cod_marca, @modelo, @cod_tipo_transmision);";

    mysqlConnection.query(sql, [veh.cod_vehiculo, veh.año_vehiculo, veh.mot_vehiculo, veh.pot_vehiculo, veh.cod_marca, veh.modelo, veh.cod_tipo_transmision], (err, rows, fields) => {
        console.log("Valores recibidos:", veh);
        if (!err)
            res.send("Actualización Correcta");
        else
            console.log(err);
    });
};

//CALL UpdateVehiculos( 1,'2023','electri' , 'HOLA', 3, 'Corolla', 2);

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



export{getVehiculos, postVehiculos, getVehiculo, putVehiculos}
