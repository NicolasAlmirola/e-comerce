<h1 align="center" style='margin: 0; font-size: 2rem; text-align: center; color: #7776d6;'>Contribuciones a e-comerce</h1>
<div  align="right" style='margin: 0; font-size: 1rem; text-align: right;'>
    <sub><b>Por</b></sub>
    <a href="https://github.com/YaulPauly" target="_blank" rel="noopener" >
        <sub><b>Paul Yauly</b></sub>
    </a>
</div>
<br />
<br />


1. Se realiza un Fork del proyecto.

2. Se clona este con el siguiente comando:
    ```bash 
    git clone 'url del proyecto'
    ```

3. Se accede a la carpeta con el comando.
    ```bash
    cd 'carpeta del proyecto'
    ```
4. Se instala dependencias de este con el comando:

    ```bash
    npm i -y
    ```

5. Para poder crear una rama, se puede realizar de 2 maneras:
	* Con el comando 
        ```bash
        git branch 'nombre_rama'
        ```
        Esta rama nacera desde la rama donde estes ubicado.

	* A través de GitHub, se ingresa a `branches` y se crea una nueva rama.

6. En caso de haber creado la rama a través de GitHub y quieras utilizarla de manera local, primero debes utilizar el comando:
    ```bash
     git fetch origin 'nombre_rama'
     ```
     para así tener esa rama de manera local. Este solo se utiliza una vez para bajarte la rama en especifico que querias utilizar y la creaste desde gitHub, ya que si lo creaste con el comando de manera local no es necesario.

7. Una vez que ya tengas la rama en tu local, podras cambiar de rama a traves del comando:
    ```bash
    git checkout 'nombre_rama'
    ````
8. En caso tengas que actualizar una rama con los cambios de otros compañeros, utilizar el comando: 
    ```bash
    git pull origin 'nombre_rama'
    ```` 
    Esto bajara todos los cambios que realizo tu compañero.

9. Cuando realizas un cambio y deseas subirlo, primero debes agregarlo al Stating, esta es una etapa intermedia donde se procede con el comando:
    ```bash
    git add 'nombre_archivo'
    ```
    y para subir todos tus cambios de una utiliza el comando:
    ```bash
    git add .
    ````

10. Para obtener el estado actual de tu proyecto utilza:
    ```bash
    git status
    ```

11. Despues puedes continuar con el comando:
    ```bash
    git commit -m 'descripcion_cambio'
    ```

12. Y por ultimo para confirmar la subida, utiliza el comando:
    ```bash
    git push origin nombre_rama
    ```

13. Despues realiza el `PULL REQUEST` a traves de github. 