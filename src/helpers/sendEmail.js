import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const sendEmail = async(e) => {
    try {
        await emailjs.sendForm('service_iwbmd3w', 'template_o4aec3g', e.target, 'user_uaSRc2I0JXHuM7uYAWiNA')
        
        Swal.fire(
            'Message Sent',
            'Thank you! Soon a bee in touch with you',
            'success'
        )
    } catch (error) {
        Swal.fire(
            'Oops',
            'An error occured trying to send the email, try again later.',
            'error'
        )
    }

}
