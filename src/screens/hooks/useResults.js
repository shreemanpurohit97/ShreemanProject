import {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {
    const[results, setResult] = useState([]);
    const[errMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
        try{
        const response = await yelp.get('./search', {
            params:{
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResult(response.data.businesses);
    } catch(err){
        setErrorMessage('something went wrongt');
    }
    
    };

useEffect (() => {
    searchApi('pasta');
}, []);
return [results, searchApi, errMessage]
;
}