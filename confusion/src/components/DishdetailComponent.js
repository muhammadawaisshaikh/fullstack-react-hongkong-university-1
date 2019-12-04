import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg object src={dish.image} alt={dish.name} />
                    <CardBody body className="ml-5">
                        <CardTitle heading>{dish.name}</CardTitle>  
                        <CardText heading>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        console.log(dish);

        if (dish!= null) {
            const comments = this.props.dish.comments.map((comment)=> {
                return (
                    <div key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    </div>
                );
            });
    
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h3>Comments</h3>
                            {comments}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;