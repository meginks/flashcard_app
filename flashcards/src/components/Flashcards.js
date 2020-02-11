import React from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

class Flashcards extends React.Component {
    state = { 
        nouns = []
    }
    componentDidMount() {
        axios.get('localhost:4001/parole/nouns').then(res => {
            this.setState({nouns: res.data}).catch(error => console.log(error))
        })
    }

    render() {
        return (
        <Container>
            
        </Container>
        )
        
    }
} 


export default Flashcards;