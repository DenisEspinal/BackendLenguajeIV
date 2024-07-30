import Express from 'express'
const apiVehiculos = Express();

import { getVehiculos, postVehiculos, putVehiculos } from '../controllers/CompararVehiculoController.js'

apiVehiculos.get('', getVehiculos)
apiVehiculos.post('', postVehiculos)
apiVehiculos.put('', putVehiculos)

export {apiVehiculos}
