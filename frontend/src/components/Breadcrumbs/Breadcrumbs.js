import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {

    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
        currentLink += `/${crumb}`;

        if (crumb === 'edit-boardgame') {
            return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink} className="disabled-cursor" onClick={ (e) => e.preventDefault() }>{crumb}</Link>            
            </div>
            );
        } else {
            // Render a clickable link for other crumbs
            return (

            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
            );
        }
        });

        return <div className="breadcrumbs">{crumbs}</div>;
}