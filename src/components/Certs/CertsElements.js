import styled from 'styled-components';

export const CertsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const CertsWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CertsCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 200px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const CertsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;
export const CertsH1 = styled.h1`
    font-size: 50px; 
    font-weight: 600;   
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
       font-size: 2 rem;
    }
`;

export const CertsH2 = styled.h2`
    font-size: 1 rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const CertsP = styled.p`
    font-size: 1 rem;
    text-align: center;
    color: #fff;

`;

/*
*/