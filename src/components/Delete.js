import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';


export default function Delete (props){
        let {id} =useParams(); //get param value
        return (
            <div>
                <Button variant="danger" onClick={(e) => props.handleDelete(e,id)}> 
                {props.children} </Button>
            </div>
        )
    }
