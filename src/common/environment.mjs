import packageJson from '../../package.json'
import defaultEnvironmentConfig from '../../config/default_environment_config.json'

export default {
    app: {
        name: packageJson.name,
        version: packageJson.version,
        domain: process.env.DOMAIN || 'localhost'
    },

    jwt: {
        expiresInSeconds: process.env.JWT_EXPIRES || (5 * 60 * 60)
    },

    email: {
        from: process.env.EMAIL_USER || defaultEnvironmentConfig.email.default_from,
        password: process.env.EMAIL_PASSWORD || defaultEnvironmentConfig.email.default_password
    },

    db: {
        url: process.env.DB_URL || defaultEnvironmentConfig.db.default_url
    },

    server: {
        port: process.env.PORT || defaultEnvironmentConfig.server.default_port
    }
}
