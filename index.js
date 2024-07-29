import Express from 'express'
import cookieParser from 'cookie-parser'


import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
import { apiEstadisticas } from './Routes/EstadisticasRoutes.js'
import { apiEstadisticas2 } from './Routes/EstadisticasRoutes.js'
import { apiMantenimientos } from './Routes/EstadisticasRoutes.js'
import { apiPromDescuentos } from './Routes/PromDescuentosRoutes.js'
import { apiEspecificaciones } from './Routes/EspecificacionesRoutes.js'
import { apiMarcas } from './Routes/MarcasRoutes.js'
import { apiEvaluaciones } from './Routes/EstadisticasRoutes.js'
import { apiResenias } from './Routes/EstadisticasRoutes.js'
import { apiRendimientos } from './Routes/MarcasRoutes.js'
import {authRouter} from './Routes/auth.js'


const app = Express()

app.use(Express.json())
app.use(cookieParser())

app.use('/Comparar-vehiculos', apiVehiculos)
app.use('/MostrarEstadisticas', apiEstadisticas)
app.use('/MostrarPrecio', apiEstadisticas2)
app.use('/MostrarMantenimientos', apiMantenimientos)
app.use('/MostrarPromociones', apiPromDescuentos)
app.use('/MostrarEspecificaciones', apiEspecificaciones)
app.use('/MostrarMarcas', apiMarcas)
app.use('/MostrarEvaluaciones', apiEvaluaciones)
app.use('/MostrarResenias', apiResenias)
app.use('/MostrarRendimientos', apiRendimientos)
app.use('/comparar-vehiculos', apiVehiculos)
app.use('/mostrar-estadisticas', apiEstadisticas)
app.use('/mostrar-precio', apiEstadisticas2)
app.use('/mostrar-mantenimientos', apiMantenimientos)
app.use('/mostrar-promociones', apiPromDescuentos)
app.use('/mostrar-especificaciones', apiEspecificaciones)
app.use('/mostrar-marcas', apiMarcas)
app.use('/mostrar-valuaciones', apiEvaluaciones)
app.use('/mostrar-resenias', apiResenias)
app.use('/mostrarRendimientos', apiRendimientos)
app.use('/auth', authRouter)

app.listen(3000)
console.log('puerto 3000 activo') 



app.get('/', (_, res)=>{ 
    res.send(`<html>
   <head>
       <title>Login</title>
   </head>
   <body>
       <form method= POST action="/auth">
       nombre de usuario: <input type="text" name="user">
       <br>
       contraseña:<input type="password" name="pass">
       <br>
       <input type="submit" value="Iniciar Sesion"/>
       </form>
   </body> 
</html>`) 
})