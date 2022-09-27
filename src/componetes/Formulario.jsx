import { appendErrors, useForm } from "react-hook-form"
const Formulario = () =>{
    const {register,formState:{errors}, handleSubmit}=useForm();
    const onSubmit =(data)=>{
        console.log(data);

    }
    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                required: true,
                maxLengt: 10}
                )}/>
                {errors.nombre?.type ==='required' && <p>El campo es requerido</p> }
        
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" {...register('apellido',
                {
                    required: true,
                    maxLengt: 10})}/>
                    {errors.apellido?.type ==='required' && <p>El campo es requerido</p> }
        
            </div>

            <div>
                <label>Telefono </label>
                <input type="number" {...register('telefono',
                {
                    required: true,
                    maxLengt: 10})}/>
                     {errors.telefono?.type ==='maxLengt' && <p>El campo debe tener menos de 10 caracteres</p> }
            </div>
            <div>
                <label>Email</label>
                <input type="email" {...register('email',{
                pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"})}/>
                 {errors.email?.type ==='maxLengt' && <p>El campo debe tener menos de 10 caracteres</p> }
             
        
            </div>

<input type="submit" value="Enviar"/>


        </form>
    </div>
}
export default Formulario;
