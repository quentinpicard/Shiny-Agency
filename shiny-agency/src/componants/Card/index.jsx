import PropTypes from 'prop-types';
import DefaultPicture from '../../asset/profile.png'

function Card ({label, picture, title }) {
    return(
        <div style={{display:'flex', flexDirection:'column', padding:15}}>
            <span>{label}</span>
            <img src={picture} title="" alt="freelance" height={80} width={80} />
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