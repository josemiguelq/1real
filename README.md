# @codate/auth

This API is part of a generic microservice architecture proposal. 
Its goal is to define a skeleton for building scalable software.

## How to install

```bash
npm i @codate/auth -S

```

## How to start

```bash
PORT=8081
URL=mongodb://localhost/auth
npm run start 

```

## How to use

**Register new User**
    Register new user in microservice for allow future login.

* **URL**
    POST /api/auth/register

* **Data Params**
    
    ```json
    { 
        "email" : "fulano@eail.com" 
    }
    ``` 
    OR
    ```json
    { 
        "email" : "fulano@eail.com",
        "password": "pass123"
    }
    ```

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        { 
            "_id": "13423141234898ASDFAS",
            "email" : "fulano@eail.com"
        }
        ```

----

**Loginr**
    Authenticaion user`s credentials.

* **URL**
    POST /api/auth/login

* **Data Params**
    ```json
    { 
        "email" : "fulano@eail.com",
        "password": "pass123"
    }
    ```

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        { 
            "_id": "13423141234898ASDFAS",
            "email" : "fulano@eail.com"
        }
        ```


 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
