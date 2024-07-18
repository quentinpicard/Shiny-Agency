import PropTypes from 'prop-types';
import DefaultPicture from '../../asset/profile.png'
import styled from 'styled-components'


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;
const CardImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

function Card ({label, picture, title }) {
    

    return(
        <div style={{display:'flex', flexDirection:'column', padding:15}}>
            <CardLabel>{label}</CardLabel>
            <CardImg src={picture}  alt="freelance" />
            <span>{title}</span>
        </div>  
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