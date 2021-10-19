import styled from 'styled-components'
import { useField } from 'formik'


const Control = styled.div`
    margin-bottom: 20px;
`

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: .5rem;
    font-size: 1.4rem;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    border-radius: 4px;
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: .5rem;
`

const ErrorMessage = styled.div`
    color: #FF3737 ;
`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error 
            ? (
                <ErrorMessage> 
                    { meta.error } 
                </ErrorMessage>
            ) 
            : null }
        </Control>
    )
}

export default Input
