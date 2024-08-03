import { type } from '@testing-library/user-event/dist/type';
import * as yup from 'yup';
import { object } from 'yup';
//emaili control ediyor email forumunda yazip yazilmadigini ama required ekledigimiz bos bir email gondermez
    const Validation= yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(5).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password")]).required()
    })
 


export default Validation
