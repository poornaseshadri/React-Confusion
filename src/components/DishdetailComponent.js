import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    renderDish(dish)
    {
        if (dish != null)
            return(
            
                <Card>
                    <CardImg  top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(selectedDish)
    {
        if(selectedDish!=null)
        return(
            <div>
              <h4>Comments </h4>
              <ul className='list-unstyled'>
                <li className='m-1 mt-4'>{selectedDish.comments[0].comment}</li>
                <li className='m-1 mt-4'>--{selectedDish.comments[0].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedDish.comments[0].date)))}</li>
                <li className='m-1 mt-4'>{selectedDish.comments[1].comment}</li>
                <li className='m-1 mt-4'>--{selectedDish.comments[1].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedDish.comments[1].date)))}</li>
                <li className='m-1 mt-4'>{selectedDish.comments[2].comment}</li>
                <li className='m-1 mt-4'>--{selectedDish.comments[2].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedDish.comments[2].date)))}</li>
                <li className='m-1 mt-4'>{selectedDish.comments[3].comment}</li>
                <li className='m-1 mt-4'>--{selectedDish.comments[3].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedDish.comments[3].date)))}</li>
                <li className='m-1 mt-4'>{selectedDish.comments[4].comment}</li>
                <li className='m-1 mt-4'>--{selectedDish.comments[4].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedDish.comments[4].date)))}</li>
            </ul>
            </div>

        );
        else     
          return(
                    <div></div>
                );  
    }

    render()
    {  
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                         {this.renderDish(this.props.selectedDish)}
                      </div>
                    <div className="row">
                      <div  className="col-12 col-sm-12 mt-1 ml-4">
                      {this.renderComments(this.props.selectedDish)}
                      </div>
                    </div>
                </div>
                );
      
    }
}

export default Dishdetail;


               