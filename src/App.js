import {
Content,
Card,
HeaderCard,
BodyCard,
BodyCardAvatar,
BodyCardAvatarImg,
BodyCardUserInformation,
BodyCardUserInformationName,
BodyCardUserInformationNameH1,
BodyCardUserInformationAge,
BodyCardUserInformationAgeP,
BodyCardUserInformationLocation,
BodyCardUserInformationLocationP,
FooterCard,
Line,
FooterCardItens,
FooterCardTitleH2,
FooterCardDescriptionP
} from './AppEstilo.js'
import './App.css';
import avatarImg from './images/image-victor.jpg';

function Name({ name }) {
  return <span>{name}</span>;
}

function Age({ age }) {
  return <span>{age}</span>;
}

function Location ({ location }) {
  return <span>{location}</span>;
}

function Followers ({ followers }) {
  return <div>{followers}</div>;
}

function Likes ({ likes }) {
  return <div>{likes}</div>;
}

function Photos ({ photos }) {
  return <div>{photos}</div>;
}

function App() {

  return (
    <Content>
      <Card>
        <HeaderCard></HeaderCard>
        <BodyCard>
          <BodyCardAvatar>
            <BodyCardAvatarImg src={avatarImg} alt="Victor Crest Avatar" />
          </BodyCardAvatar>
          <BodyCardUserInformation>
            <BodyCardUserInformationName>
              <BodyCardUserInformationNameH1 ><Name name="Victor Crest"/></BodyCardUserInformationNameH1>
            </BodyCardUserInformationName>
            <BodyCardUserInformationAge>
               <BodyCardUserInformationAgeP> <Age age="26"/> </BodyCardUserInformationAgeP>
            </BodyCardUserInformationAge>
          </BodyCardUserInformation>
            <BodyCardUserInformationLocation>
              <BodyCardUserInformationLocationP><Location location="London"/> </BodyCardUserInformationLocationP>
            </BodyCardUserInformationLocation>
        </BodyCard>
        <Line/>
        <FooterCard>
            <FooterCardItens>
              <FooterCardTitleH2> <Followers followers="80K"/> </FooterCardTitleH2>
              <FooterCardDescriptionP> Followers </FooterCardDescriptionP>
            </FooterCardItens>

            <FooterCardItens>
              <FooterCardTitleH2> <Likes likes="803k"/></FooterCardTitleH2>
              <FooterCardDescriptionP> Likes </FooterCardDescriptionP>
            </FooterCardItens>


            <FooterCardItens>
              <FooterCardTitleH2> <Photos photos="1.4K"/> </FooterCardTitleH2>
              <FooterCardDescriptionP> Photos </FooterCardDescriptionP>
            </FooterCardItens>
        </FooterCard>
      </Card>
    </Content>
  );
}

export default App;
