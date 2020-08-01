import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    
   function RenderDish({dish})
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
   function RenderComments({comments})
    {
        if(comments!=null)
        return(
            <div>
              <h4>Comments </h4>
              <ul className='list-unstyled'>
                <li className='m-1 mt-4'>{comments[0].comment}</li>
                <li className='m-1 mt-4'>--{comments[0].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[0].date)))}</li>
                <li className='m-1 mt-4'>{comments[1].comment}</li>
                <li className='m-1 mt-4'>--{comments[1].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[1].date)))}</li>
                <li className='m-1 mt-4'>{comments[2].comment}</li>
                <li className='m-1 mt-4'>--{comments[2].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[2].date)))}</li>
                <li className='m-1 mt-4'>{comments[3].comment}</li>
                <li className='m-1 mt-4'>--{comments[3].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[3].date)))}</li>
                <li className='m-1 mt-4'>{comments[4].comment}</li>
                <li className='m-1 mt-4'>--{comments[4].author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[4].date)))}</li>
                
            </ul>
            </div>

        );
        else     
          return(
                    <div>Haiiiiii</div>
                );  
    }

    const Dishdetail=(props)=>{
    {  
        
            return (
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
    
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                    </div>
                );




      
    }
}

export default Dishdetail;


               