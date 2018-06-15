const FROM = 'noreplyfaciles@gmail.com'
const PASSWORD = 'faciles@123'
const PRODUCT_NAME = 'Meu Prontuário'
const PRODUCT_DOMAIN = 'https://www.meuprontuario.com'

export default class EmailTemplate {
    static createEmailForRegisterUser(userData) {
        const subject = 'Confirmação do seu endereço de email'
        const html = `<div>
                          <p>Olá ${userData.email}</p>
                          <p>Bem vindo ao ${PRODUCT_NAME}! Para podermos confirmar o seu endereço de email, clique no link abaixo:<br>
                            <a href="${PRODUCT_DOMAIN}/auth/confirm/${userData.email}/${userData.password}" target="_blank">${PRODUCT_DOMAIN}/auth/confirm/${userData.email}/${userData.password}</a>
                          </p>
                          <p>Obrigado por se juntar a esta comunidade.</p>
                      </div>`
        return {
            from: FROM,
            to: userData.email,
            subject: subject,
            html: html,
            text: '',
            password: PASSWORD
        }
    }
}
