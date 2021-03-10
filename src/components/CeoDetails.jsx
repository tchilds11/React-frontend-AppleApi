import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CeoDetails = ({ceos}) => {
    const { ceo_slug } = useParams();
    const [ceo, setCeo] = useState({});

    useEffect (() => {
        (async () => {
            const ceoData = await fetch(`http://127.0.0.1:3001/ceos/${ceo_slug}`).then(response => response.json());
            console.log("ceoData is", ceoData);
            setCeo(ceoData);
        })();
    },[setCeo, ceo_slug]);


return (
    <p>{ceo.name} was CEO in {ceo.year}</p>
)
}

export default CeoDetails;