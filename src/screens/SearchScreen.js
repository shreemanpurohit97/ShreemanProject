import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './Components/SearchBar';
import useResults from './hooks/useResults';
import ResultList from './Components/Result';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, searchApi, errMessage] = useResults('');
   
    const FilterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;

        })
    }

    return (
        <View style={styles.background}>
            
            <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            
    {errMessage ? <Text>{errMessage}</Text> : null}
    
        <ScrollView>
   
        <ResultList results={FilterResultsByPrice('$')} title='Cost Effective'
        />
        <ResultList results={FilterResultsByPrice('$$')} title='Big Pricier'
        />
        <ResultList results={FilterResultsByPrice('$$$')} title='Big Spender'
        />
        
        </ScrollView>
        </View>
    );

};
const styles = StyleSheet.create({
    background:{
        backgroundColor: '#fff',
        flex:1
    }
}

);

export default SearchScreen;