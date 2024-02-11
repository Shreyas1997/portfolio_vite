import './findMeFab.css';

function FindMeFab(){
    return(
        <div className = "fab">
            <ul className = "fab-buttons">
                <li className = "fab-buttons__item">
                    <a href = {"https://www.instagram.com/kumarshreyas073/"} className = "fab-buttons__link" target = "_blank" rel = "noopener noreferrer">
                        <i className = "icon-material icon-material_ig"></i>
                    </a>
                </li>
                <li className = "fab-buttons__item">
                    <a href = {"https://github.com/Shreyas1997"} className = "fab-buttons__link" target = "_blank" rel = "noopener noreferrer">
                        <i className = "icon-material icon-material_gh"></i>
                    </a>
                </li>
                <li className = "fab-buttons__item">
                    <a href = {"https://www.linkedin.com/in/shreyas-kumar-524097bb"} className = "fab-buttons__link" target = "_blank" rel = "noopener noreferrer">
                        <i className = "icon-material icon-material_li"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FindMeFab;