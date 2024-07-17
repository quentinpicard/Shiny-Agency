import {freelanceProfiles} from '../../data/freelanceProfiles/freelanceProfiles';
import Card from "../../componants/Card";


function Freelances () {
    return (
        <div>
            <h1>Freelance</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    title={profile.jobTitle}
                />
            ))}
        </div>
    )
}


export default Freelances;