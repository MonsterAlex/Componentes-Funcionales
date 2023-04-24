import Button from "@mui/material/Button"

function FormSignUp()
{
    return  <form>
                <label>Nombre</label>
                <input type="text" />
                <label>Apellidos</label>
                <input type="text" />
                <label>Correo electronico</label>
                <input type="email" />
                <label>Promociones</label>
                <input type="checkbox" />
                <label>Novedades</label>
                <input type="checkbox" />
                <Button variant="contained" >Registrarse</Button> {/*lo que se encuentra dentro de variant lo podemos encontrar en la documentacion de Material UI*/}
            </form>
}

export default FormSignUp