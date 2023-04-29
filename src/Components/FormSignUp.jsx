import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import validator from "validator"

function FormSignUp({ handleSubmit })
{
    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ prom, setProm ] = useState(true)
    const [ nov, setNov ] = useState(false)

    const [errors, setErrors] = useState({ name: {error: false, message: "Deben de ser al menos 3 caracteres"} })
    const [errorAp, setErrorAp] = useState({ lastName: {error: false, message: "Deben de ser al menos 3 caracteres"} })
    const [errorEmail, setErrorEmail] = useState ({ email: {error: false, message: "Debe de contener al menos un @ seguido de un servidor y un dominio ej. nom@gmail.com"} })

    function validarNombre(nombre){
        if(nombre.length >= 3)
        {
            return { name: { error: false, message: '' } }
        }
        else
        {
            return { name: { error: true, message: 'Deben de ser al menos 3 caracteres' } }
        }
    }

    function validarApellido(apellido){
        if(apellido.length >= 3)
        {
            return { lastName: { error: false, message: '' } }
        }
        else
        {
            return { lastName: { error: true, message: 'Deben de ser al menos 3 caracteres' } }
        }
    }

    function validarCorreo(correo){
        if (validator.isEmail(correo))
        {
            return { email: { error: false, message: '' }}
        }
        else
        {
            return { email:{ error: true, message: 'Debe de contener al menos un @ seguido de un servidor y un dominio ej. nom@gmail.com' } }
        }
    }

    return  <form onSubmit={(e) => { e.preventDefault(); handleSubmit({name, lastName, email, prom, nov}) }}>
                <TextField id="name" label="Nombre" variant="outlined" fullWidth margin="normal" onChange={(e) => setName(e.target.value) } value={ name } error={errors.name.error} helperText={errors.name.error ? errors.name.message : ""} onBlur={(e) => { setErrors(validarNombre(e.target.value)) }} /> {/*FullWidth permite que tome el 100% del tamaño del componente padre (form)*/}
                <TextField id="lastname" label="Apellidos" variant="outlined" fullWidth margin="normal" onChange={(e) => setLastName(e.target.value) } value={lastName} error={errorAp.lastName.error} helperText={errorAp.lastName.error ? errorAp.lastName.message : ""} onBlur={(e) => { setErrorAp(validarApellido(e.target.value)) }} />
                <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value) } value={email} error={errorEmail.email.error} helperText={errorEmail.email.error ? errorEmail.email.message : ""} onBlur={(e) => { setErrorEmail(validarCorreo(e.target.value)) }} />
                
                <FormGroup>
                    <FormControlLabel control={ <Switch onChange={(e) => setProm(e.target.checked)} checked={ prom } /> } label="Promociones" />
                    <FormControlLabel control={ <Switch onChange={(e) => setNov(e.target.checked)} checked={ nov } /> } label="Novedades" />
                </FormGroup>

                <Button variant="contained" type="submit" >Registrarse</Button> {/*lo que se encuentra dentro de variant lo podemos encontrar en la documentacion de Material UI*/}
            </form>
}

export default FormSignUp