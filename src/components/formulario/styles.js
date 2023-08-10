import { styled } from "styled-components";

const StyledCont = styled.div`
    width: 70%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitleCont = styled.div`
    width: 520px;
`;

const StyledTitle = styled.h1`
    font-size: 50px;
    font-weight: 600;
    color: white;
    line-height: 50px;
    padding-bottom: 40px;
`;

const StyledP = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: white;
    padding: 0 30px 0 0;
`;

const StyledFormCont = styled.div`
    width: 530px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledOffer = styled.div`
    width: 500px;
    background-color: #5E54A4;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 2px 2px 10px black;
`;

const StyledOfferH3 = styled.h3`
    font-size: 16px;
    font-weight: 300;
    color: white;
    text-align: center;
`;

const StyledSpan = styled.span`
    font-weight: 600;
`;

const StyledForm = styled.form`
    width: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 45px 0;
    box-shadow: 2px 2px 10px black;
`;

const StyledInput = styled.input`
    width: 440px;
    font-size: 14px;
    font-weight: 600;
    color: black;
    outline: none;
    border: 2px solid gray;
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px;
    transition: all 0.3s ease;

    &::placeholder {
        color: gray;
    }
    &:focus {
        border: 2px solid #5E54A4;
    }
    &.error {
        border: 2px solid red;
    }
`;

const StyledErrorCont = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
`;

const StyledError = styled.h3`
    font-size: 11px;
    font-weight: 400;
    font-style: italic;
    color: red;
    text-align: end;
`;

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledSubmit = styled.input`
    width: 480px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #38CC8B;
    outline: none;
    border: 0;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    transition: 0.3s ease all;
    cursor: pointer;
    
    &:hover {
        background-color: #77E2B3;
    }
`;

const StyledTerms = styled.h3`
    font-size: 11px;
    font-weight: 400;
    color: #BAB7D4;
    text-align: center;
    margin-top: 20px;
`;

const StyledTermsSpan = styled.span`
    color: #FF7979;
    font-weight: 600;
    cursor: pointer;
`;

export {StyledCont, StyledTitleCont, StyledTitle, StyledP, StyledFormCont, StyledOffer, StyledOfferH3, StyledSpan, StyledForm, StyledInput, StyledErrorCont, StyledError, StyledImg, StyledSubmit, StyledTerms, StyledTermsSpan};