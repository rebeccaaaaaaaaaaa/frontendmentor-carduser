import styled from 'styled-components';
import headerImg from './images/bg-pattern-card.png';
import topBall from './images/bg-pattern-top.png';
import bottomBall from './images/bg-pattern-bottom.png';

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark_cyan);
    height: 100vh;
    background-image: url('${topBall}'), url('${bottomBall}');
    background-repeat: no-repeat,no-repeat;
    background-size: contain,contain;
    background-position-y: -17rem,24rem;
    background-position-x: 0rem, 65rem;
`

export const Card = styled.div`
    background-color: var(--white);
    border-radius: 0.5rem;
    width: 100%;
    max-width: 23rem;
    margin-bottom: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5);
    

    @media (max-width: 600px) {
        max-width: 20rem;

    }

`

export const HeaderCard = styled.div`
    background-image: url(${headerImg});
    height: 10rem;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 10px 10px 0px 0;
`

export const BodyCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    position: relative;
    top: -4rem;
        
`

export const BodyCardAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BodyCardAvatarImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid var(--white);

`

export const BodyCardUserInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`

export const BodyCardUserInformationName = styled.div`
    padding: 10px 0 0 0;
`
export const BodyCardUserInformationNameH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;

`

export const BodyCardUserInformationAge = styled.div`
    padding: 0 0 0 0;

`

export const BodyCardUserInformationAgeP = styled.p`
    font-size: 1.2rem;
    margin: 15px 0 0 15px;
`

export const BodyCardUserInformationLocation = styled.div`
    padding: 0 0 0 0;
`

export const BodyCardUserInformationLocationP = styled.p`
    font-size: 1.0rem;
`

export const FooterCard = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    background-color: var(--white);
    width: 100%;
    max-width: 30rem;
    position: relative;
    bottom: 2rem;
`

export const Line = styled.hr`
    position: relative;
    top: -3rem;
    border: 1px solid #eee;
`

export const FooterCardItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FooterCardTitleH2 = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
`

export const FooterCardDescriptionP = styled.p`
    font-size: 0.8rem;
    margin: 0;

`