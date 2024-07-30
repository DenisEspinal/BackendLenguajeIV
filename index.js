import Express from 'express'
import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
import { apiEstadisticas } from './Routes/EstadisticasRoutes.js'
import { apiPrecios } from './Routes/EstadisticasRoutes.js'
import { apiMantenimientos } from './Routes/EstadisticasRoutes.js'
import { apiPromDescuentos } from './Routes/PromDescuentosRoutes.js'
import { apiEspecificaciones } from './Routes/EspecificacionesRoutes.js'
import { apiMarcas } from './Routes/MarcasRoutes.js'
import { apiEvaluaciones } from './Routes/EstadisticasRoutes.js'
import { apiResenias } from './Routes/EstadisticasRoutes.js'
import { apiRendimientos } from './Routes/MarcasRoutes.js'


const app = Express()

app.use(Express.json())
app.use('/comparar-vehiculos', apiVehiculos)
app.use('/mostrar-estadisticas', apiEstadisticas)
app.use('/mostrar-precio', apiPrecios)
app.use('/mostrar-mantenimientos', apiMantenimientos)
app.use('/mostrar-promociones', apiPromDescuentos)
app.use('/mostrar-especificaciones', apiEspecificaciones)
app.use('/mostrar-marcas', apiMarcas)
app.use('/mostrar-evaluaciones', apiEvaluaciones)
app.use('/mostrar-resenias', apiResenias)
app.use('/mostrar-rendimientos', apiRendimientos)

app.listen(3000)
console.log('puerto 3000 activo') 