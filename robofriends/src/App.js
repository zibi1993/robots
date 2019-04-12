import React, {Component} from 'react'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfiled: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(user=>{
            this.setState({robots: user});
        })
       
    }
    onSearchChange=(event)=>{
        this.setState({searchfiled: event.target.value})
    }

    render(){ 
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else {
            return(
            <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList robots = {filterRobots}/> 
            </div>
            );
        }

    
}
}

export default App;