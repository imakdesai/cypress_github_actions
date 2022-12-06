module.exports =  {
            "baseUrl": process.env.baseUrl,
            "chromeWebSecurity": false,
            "ignore_uncaught": true,
            env: {
                "environment": "credci",
                "userName" : process.env.userName,
                "password" : process.env.password
          }
}
