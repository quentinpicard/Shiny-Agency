import PropTypes from 'prop-types';
import DefaultPicture from '../../asset/profile.png'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors';


const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: normal;
    text-align:left;
    width:100%;
`;
const CardImg = styled.img`
    width: 40%;
    border-radius: 50%;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 24px;
    padding: 16px 24px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    flex : 0 1 43%;
    height : 60%;
    align-items:center;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
    justify-content: space-between;
`;
const Name = styled.span`
    color: ${colors.secondary};
    font-size: 25px;
    font-weight: normal;
`;

function Card ({label, picture, name }) {
    

    return(
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImg src={picture}  alt="freelance" />
            <Name>{name}</Name>
        </CardWrapper>  
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

Card.defaultProps = {
    label:'',
    title: '', 
    picture: DefaultPicture
}

export default Card;