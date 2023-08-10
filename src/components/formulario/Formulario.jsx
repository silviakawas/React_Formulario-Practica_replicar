import { useState } from "react";
import { StyledCont, StyledError, StyledErrorCont, StyledForm, StyledFormCont, StyledImg, StyledInput, StyledOffer, StyledOfferH3, StyledP, StyledSpan, StyledSubmit, StyledTerms, StyledTermsSpan, StyledTitle, StyledTitleCont } from "./styles";

const Formulario = ()=>{

    const [fields, setFields] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);

    return(
        <>
            <StyledCont>
                <StyledTitleCont>
                    <StyledTitle>Learn to code by watching others</StyledTitle>
                    <StyledP>
                        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
                    </StyledP>
                </StyledTitleCont>
                <StyledFormCont>
                    <StyledOffer>
                        <StyledOfferH3>
                            <StyledSpan>Try it free 7 days</StyledSpan> then $20/mo. thereafter
                        </StyledOfferH3>
                    </StyledOffer>
                    <StyledForm onSubmit={e => handleSubmit(e, fields, setSubmitted)}>
                        <StyledInput
                            type='text'
                            placeholder='Name'
                            onChange={e => setFields({...fields, name: e.target.value})}
                            className={
                                (submitted && fields.name === '') || /\d/.test(fields.name)
									? 'error'
									: ''
							} />
                        {submitted && fields.name === '' ? (
                            <StyledErrorCont>
                                <StyledError>First Name cannot be empty</StyledError>
                                <StyledImg src='./public/icon-error.svg'/>
                            </StyledErrorCont>
                        ) : ( '')}
                        {submitted && /\d/.test(fields.name) ? (
							<StyledErrorCont>
								<StyledError>First Name should not contain numbers</StyledError>
								<StyledImg src='./public/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}

                        <StyledInput
                            type='text'
                            placeholder='Last Name'
                            onChange={e => setFields({...fields, lastname: e.target.value})}
                            className={
                                (submitted && fields.lastname === '') ||
								/\d/.test(fields.lastname)
									? 'error'
									: ''
							} />
                        {submitted && fields.lastname === '' ? (
                            <StyledErrorCont>
                                <StyledError>Last Name cannot be empty</StyledError>
                                <StyledImg src='./public/icon-error.svg'/>
                            </StyledErrorCont>
                        ) : ( '')}
                        {submitted && /\d/.test(fields.lastname) ? (
							<StyledErrorCont>
								<StyledError>Last Name should not contain numbers</StyledError>
								<StyledImg src='./public/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}

                        <StyledInput
                            type='email'
                            placeholder='Email Address'
                            onChange={e => setFields({...fields, email: e.target.value})}
                            className={submitted && fields.email === '' ? 'error' : ''}/>
                        
                        {submitted && fields.email === '' ? (
							<StyledErrorCont>
								<StyledError>Email cannot be empty</StyledError>
								<StyledImg src='./public/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}

                        <StyledInput
                            type='password'
                            placeholder='Password'
                            onChange={e => setFields({...fields, password: e.target.value})}
                            className={submitted && fields.password === '' ? 'error' : ''}/>
                        
                        {submitted && fields.password === '' ? (
							<StyledErrorCont>
								<StyledError>Password cannot be empty</StyledError>
								<StyledImg src='./public/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}

                        <StyledSubmit type='submit' value='CLAIM YOUR FREE TRIAL'/>

                        <StyledTerms>
                            By clicking the button, you are agreeing to our {' '}<StyledTermsSpan>Terms and Services</StyledTermsSpan>
                        </StyledTerms>
                    </StyledForm>
                </StyledFormCont>
            </StyledCont>
        </>
    );

};

const handleSubmit = (e, fields, setSubmitted) =>{
    e.preventDefault();

    if(fields.name === ''){
        console.log('Name field is required');
        setSubmitted(true);
    }else if (/\d/.test(fields.name)){
        console.log('Name field should not contain numbers');
        setSubmitted(true);
    }else {
        setSubmitted(false);
    }

    if(fields.lastname === ''){
        console.log('Last name field is required');
        setSubmitted(true);
    }else if (/\d/.test(fields.lastname)){
        console.log('Last name field should not contain numbers');
        setSubmitted(true);
    }else {
        setSubmitted(false);
    }

    if(fields.email === ''){
        console.log('Email field is required');
        setSubmitted(true);
    }else {
        setSubmitted(false);
    }

    if(fields.password === ''){
        console.log('Password field is required');
        setSubmitted(true);
    }else {
        setSubmitted(false);
    }
}

export default Formulario;