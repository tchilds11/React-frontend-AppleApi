import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import CeoDetails from './CeoDetails';

const CeoList = () => {
    const [ceos, setCeos] = useState([])
    const history = useHistory();

    useEffect (() => {
        (async () => {
            const ceoData = await fetch('http://127.0.0.1:3001/ceos').then(response => response.json());
            console.log("ceoData is", ceoData);
            setCeos(ceoData);
        })();
    },[setCeos]);
    
    return (
        <>
            {!!ceos.length ? (
                <>
                <Route exact path='/'>
                    <ul>
                        {ceos.map((ceo, index) => {
                            return (
                                 <li key={index}>
                                    <Link to={`/ceo/${ceo.slug}`}>{ceo.name}</Link>
                                    </li>
                        )})}
                    </ul>
                </Route>
                <Route path='/ceo/:ceo_slug'>
                    <CeoDetails ceos={ceos} />
                    <button type="button" onClick={() => history.goBack()}>GO Back</button>
                </Route>
                </>
             ) : (
                 <p>Loading ceos</p>
             )}
        </>
    );
};

export default CeoList;