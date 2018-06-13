import {runner} from '@codate/commons'
import routers from './src/ports/routers'

const config = {
    url: process.env.URL || 'mongodb://localhost/auth',
    port: process.env.PORT || 8082
}

export default runner(config, routers)
