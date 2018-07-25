import helloWorldRepository from '../entity/hello_world/HelloWorldRepository'

export default class SaveHelloWorld {
    async execute(incomePayload, responder) {
        try {
            if(!this.isValidPayload(payload))
                throw new Error('Invalid Payload')

            const savedHelloWorld = helloWorldRepository.save()
            responder.success({savedHelloWorld})

        } catch (err) {
            responder.unauthorized()
        }
    }

    isValidPayload(payload){
        return typeof(payload) != 'undefined'
    }
}
