import {freelanceProfiles} from '../../data/freelanceProfiles/freelanceProfiles';
import Card from "../../componants/Card";
import PropTypes from 'prop-types'

function Freelances () {
    return (
        <div>
            <h1>Freelance</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    // key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.jobTitle}
                />
            ))}
        </div>
    )
}

Card.propTypes = {
    label : PropTypes.string,
    picture : PropTypes.string,
    jobTitle : PropTypes.string
}

export default Freelances;