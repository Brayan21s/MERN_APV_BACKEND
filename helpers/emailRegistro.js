import nodemailer from 'nodemailer'

const emailRegistro = async (datos)=>{

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, 
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER ,
            pass: process.env.EMAIL_PASS,
        }
    });
    const {email, nombre, token} = datos
    const info = await transporter.sendMail({
        from:"APV-Administrador de Paciente de veterinaria",
        to:email,
        subject:'Confirmación registro en APV',
        text:"COmprueba tu cuenta en APV",
        html:`<p>Hola ${nombre} Comprueba tu cuenta en APV</p>
            <p>TU cuenta ya esta lista, Comprueba que eres tu en sguiente en lace</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token} ">Comprobar Cuenta</a>

        `

    });
    console.log("mensaje Enviado : %s", info.messageId)

}

export default emailRegistro