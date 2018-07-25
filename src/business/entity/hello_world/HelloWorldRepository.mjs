import HelloWorld from './HelloWorld.mjs'

class HelloWorldRepository {
    async save(payload) {
        const helloWorld = new HelloWorld(payload)
        return helloWorld.save()
    }

    async find(payload){
        return HelloWorld.find(payload)
    }

    async delete(payload){
        return HelloWorld.delete(payload)
    }
}

export default new HelloWorldRepository()
