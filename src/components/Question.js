import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../images/default.png';
export default class Question extends Component {
    render() {
        const {questions} = this.props;
        return (
            <div className="question-list">
                {questions.map(question => (
                    <div className="question-box" key={question.id}>
                    <div className="author">
                        <p>posted by: <span>{question.name} </span> </p>
                        <img src={Image} alt="default" />
                    </div>
                    <div className="content">
                        <p>{question.title}</p>
                    </div>
                    <div className="footer">
                        <NavLink to={"/q/"+question.id} className="more">More Details</NavLink>
                    </div>            
                </div>
                ))}
                {/* <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/one" className="more">More Details</Link>
                    </div>            
                </div> */}
                {/* <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/" className="more">More Details</Link>
                    </div>            
                </div>
                <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/" className="more">More Details</Link>
                    </div>            
                </div>
                <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/" className="more">More Details</Link>
                    </div>            
                </div>
                <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/" className="more">More Details</Link>
                    </div>            
                </div>
                <div className="question-box">
                    <div className="author">
                        <p>posted by: <span>Rania</span> </p>
                        <img src={Image} alt="default pic" />
                    </div>
                    <div className="content">
                        <p>this is my first post fdfghjgfjds dfhdsgfgdsfsd g dfhgdhfgd sdfsada sdf</p>
                    </div>
                    <div className="footer">
                        <Link to="/" className="more">More Details</Link>
                    </div>            
                </div> */}
            </div>
        )
    }
}
