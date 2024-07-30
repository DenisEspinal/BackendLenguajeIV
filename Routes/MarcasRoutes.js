import Express from 'express'
import {getMarcas, postMarcas, getRendimientos, postRendimientos, putMarcas} from '../controllers/MarcasController.js'

const apiMarcas = Express();
const apiRendimientos = Express ();

apiMarcas.get('', getMarcas)
apiMarcas.post('', postMarcas)
apiMarcas.put('', putMarcas)
apiRendimientos.get('', getRendimientos)
apiRendimientos.post('', postRendimientos)


export {apiMarcas, apiRendimientos} 

