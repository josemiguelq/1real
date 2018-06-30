import environment from '../../common/environment.mjs'

export default class EmailTemplate {
    static createEmailForRegisterUser(userData) {
        const subject = 'Confirmação do seu endereço de email'
        const html = `<div>
                          <p>Olá ${userData.email}</p>
                          <p>Bem vindo ao ${environment.app.name}! Para podermos confirmar o seu endereço de email, clique no link abaixo:<br>
                            <a href="http://${environment.app.domain}/api/auth/confirm/${userData.email}/${userData.password}" target="_blank">
                                http://${environment.app.domain}/api/auth/confirm/${userData.email}/${userData.password}</a>
                          </p>
                          <p>Obrigado por se juntar a esta comunidade.</p>
                      </div>`
        return {
            from: environment.email.from,
            to: userData.email,
            subject: subject,
            html: html,
            text: '',
            password: environment.email.password
        }
    }
}
