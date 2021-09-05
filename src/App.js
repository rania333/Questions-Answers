import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import QuestionsList from './components/QuestionsList';
import  PostDetails from './pages/PostDetails';
import  AddQuestion from './pages/AddQuestion';
import NotFound from './components/NotFound';
import { Component } from 'react';

export default class App extends Component {
  state = {
    questions: [{
        id: 1,
        title: "what's your name?",
        name: "rania",
    }, {
        id: 2,
        title: "what's your fav color?",
        name: "dalia",
    }, {
        id: 3,
        title: "what's your fav hobby?",
        name: "israa",
    }],
    item: ""
}
handleChange = (e) => {
    this.setState({
        item: e.target.value
    });
}
handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
        id: (this.state.questions.length) + 1,
        title: this.state.item,
        name: "rania"
    }
    let updatedItem = [...this.state.questions, newItem];
    this.setState({questions:updatedItem, item:""});
}
//error
handleDelete = (e, id) => {
  e.preventDefault();
    const filteredQuestions = this.state.questions.filter(q => q.id != id);
    console.log(filteredQuestions)
    this.setState({questions: filteredQuestions});
    console.log(this.state.questions);
    // return (<Redirect to="/"/>)
} 
render() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" > 
          <QuestionsList handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          questions={this.state.questions} item={this.state.item}/> 
        </Route>
        <Route path="/add"> <AddQuestion 
          handleChange={this.handleChange} item={this.state.item} handleSubmit={this.handleSubmit}/>
        </Route>
        <Route path="/q/:id"> 
          <PostDetails questions={this.state.questions} handleDelete={this.handleDelete}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}
}
