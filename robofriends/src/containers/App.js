import React, {Component} from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

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
        const {robots, searchfiled} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1>:
            (
            <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filterRobots}/> 
            </Scroll>
            
            </div>
            )
        }

    
}


export default App;