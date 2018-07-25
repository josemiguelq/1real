# @agrointeli/microservice-demo

HelloWorld Template

This API is part of a generic microservice architecture proposal. 
Its goal is to define a skeleton for building scalable software.

Credits for @codate
https://github.com/codate
by: Charles Viegas

Edited By: Vitor Jucá
https://github.com/vitorjuca

## How to install

```bash
npm i @agrointeli/microservice-demo -S

```

## How to start

```bash
PORT=8081
URL=mongodb://localhost/database
npm run start 

```

## How to use

**See HelloWorld**
    Save HelloWorld on database

* **URL**
    POST /

* **Data Params**
    
    ```json
    { 
        "hello_world" : "Olá mundo" 
    }
    ``` 

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        { 
            "_id": "13423141234898ASDFAS",
            "hello_world" : "Olá Mundo"
        }
        ```