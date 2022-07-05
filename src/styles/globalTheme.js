import styled from 'styled-components'

export const colors = {
    colorPrimary: '#FD6E0D',
    colorSecondary: '#F10C8F',
    colorError: '#E30000',
    colorWhite: '#FFF',
    colorBlack: '#000',
    colorGray: '#A0A0A0',
    colorThird: '#E522E2',
    colorSuccess: '#2A9F52',
    colorDisabled: '#E4E4E4',
}

export const FText = styled.Text`
  color: ${(props) => (props.white ? "#fff" : props.pink ? "#f10c8f" : props.error ? '#cc0000' : "#000")};
  font-family: "MontserratMedium";

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 28px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({ bold, semibold, regular, medium, light }) => {
    switch (true) {
      case bold:
        return `font-family: MontserratBold`;
      case semibold:
        return `font-family: MontserratSemiBold`;
      case regular:
        return `font-family: MontserratRegular`;
      case medium:
        return `font-family: MontserratMedium`;
      case light:
        return `font-family: MontserratLight`;
    }
  }}


${({ center, right, left }) => {
    switch (true) {
      case center:
        return `text-align: center`;
      case right:
        return `text-align: right`;
      case left:
        return `text-align: left`;
    }
  }}
`;


export const InputContainer = styled.View`
padding:15px; 
border-radius:13px;
background-color:#f0f0f0;
justify-content:center;
align-items:center;
width:100%;
${({ icon }) => {
    let direction = icon?.direction ? icon.direction : 'right';
    if(direction != 'right'){return `flex-direction:row-reverse;`}
    if(direction == 'right'){return `flex-direction:row;`}
}}
  
${({ error }) => {
  switch (true) {
    case error:
      return `border-width: 1px; border-color: red`;
  }
}}
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Box = styled.View`
  background-color: ${(props) => (props.black ? "#000" : props.white ? '#fff' : "#f0f0f0")};
  padding: 10px;
  border-radius: 15px;
`;