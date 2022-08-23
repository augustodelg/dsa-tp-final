# CTF

## Modificación de flags

Las flags se encuentran dentro del archivo `trabajo_integrador/back-end/app/service/ValidationService.rb`
En el se almacena una variable `FLAGS` que almacena el valor de las mismas siguiendo el orden de los steps en el front:
Por defecto:
```
  FLAGS = {
    0 => "flag{User_Boton}",
    1 => "flag{ojito_RBAC}",
    2 => "flag{xss_adentro}",
    3 => "flag{messirve_felicitaciones}"
  }
```

## Puesta en producción

Para levantar la app en producción se debe realizar los siguiente:


- Copiar los .env.prod.example a .env.prod  
    `cp .env.prod.example  .env.prod`

- Configurar las variables de entorno *(Ver Seccion Variables de entorno)*

- Ejecutar el script de build para la app `bash build-prod.sh`
## Variables de entorno

`DATABASE_NAME` (rails backend) Indica el nombre de la base de datos.

`DATABASE_USER` (rails backend) Indica el nombre de usuario que se utilizara para la base de datos.

`DATABASE_PASSWORD` (rails backend) Indica el nombre de password que se utilizara para la base de datos.

`DATABASE_HOST` Indica el la ip/host de la base de datos.

`RAILS_ENV` Indica el entorno en el que se ejecuta la app (development/production).

`POSTGRES_DB` (postgres) Indica el nombre de la BD

`POSTGRES_USER` (postgres) Indica el usuario para la BD

`POSTGRES_PASSWORD` (postgres) Indica la contraseña para el user de postgres

### IMPORTANTES ⚠️​

`REACT_APP_API_URL` Indica la URL de backend, esta variable la utiliza el front para enviar la peticiones al backend.

`FRONT_APP_URL` Indica la URL del frontend, variable utilizada por el backend para incorporar la/las url e incorporarlas a su lista de cors.


## Cómo vulnerar

 **Primera flag:** La idea es que se realice una búsqueda sobre la base de datos para obtener información y llegar a esta consulta. 
    Indicar en el campo de filtrado `admin' UNION ALL SELECT name, null, null, id FROM roles WHERE '1' LIKE '1`
    
**Segundo flag:**  Se posee una cookie `user_role=2` a la que hay que indicarle el id del ROL admin (que se debería descubri con la flag anterior), por lo tanto solo basta con indicar el `user_role=1`.

**Tercer flag:**  En este caso hay diversas formas pero a modo de ejemplo se puede utilizar `lorem <b onmouseover="alert('mouseover');">ipsum</b>`

**Cuarta flag y FINAL:** Este es un caso de esteganografía.
* Se posee una imagen la cual tiene un mensaje oculto, se debe encontrar la key.
* La key nos la entregan en un hash MD5, en los logs emitidos al resolver la flag anterior.
* Este MD5 es `21232f297a57a5a743894a0e4a801fc3` => `admin`.
* Obtenida la key solo hace falta utilizar una herramienta de esteganografía e introducir la imagen dada y la key para obtener la flag final.
  
  * La herramienta a utilizar seria por ejemplo: https://futureboy.us/stegano/decinput.html 

## Autores

- [Augusto Del Grosso](https://github.com/augustodelg)
- [German Nicolas Velazquez](https://github.com/ger-velazquez)

