import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
function Contact() {
    function handleSubmit(e) {
        e.preventDefault()
        const nombre = e.target[0].value;
        const asunto = e.target[1].value;
        const mensaje = e.target[2].value;
        if ((nombre === "") || (asunto === "seleccion") || (mensaje === "")) {
            alert('Debe completar todos los campos');
        } else {
            alert('Mensaje enviado');
            console.log(nombre);
            console.log(asunto);
            console.log(mensaje);
        }
    }
    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <div> <label htmlFor="fullname">Nombre y Apellido</label>
                    <input type="text" name='fullname' id='fullname' /></div>
                <div> <label htmlFor="asunto">Asunto</label>
                    <select name="asunto" id="asunto">
                        <option value="seleccion" selected>Seleccione opcion</option>
                        <option value="compras">Compras</option>
                        <option value="inconveniente">Inconveniente</option>
                    </select></div>
                <div><label htmlFor="mensage">Mensaje</label>
                    <textarea name="mensage" id="mensage" cols="30" rows="10" placeholder='Escriba su mensaje...'></textarea></div>
                <div><button type="submit">Enviar</button> - <button type="reset">Limpiar</button></div>
            </form>
            <Footer />
        </>
    )
}
export default Contact