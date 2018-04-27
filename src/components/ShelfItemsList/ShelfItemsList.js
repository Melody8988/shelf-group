import React, { Component } from 'react';
import axios from 'axios';


class ShelfItemsList extends Component {

    deleteItem = () => {        
        axios.delete('/api/user/'+this.props.item.id).then((response) => {
            console.log('item deleted', response);
            this.props.getShelf();
        }).catch((error) => {
            if (error == 'Error: Request failed with status code 403') {
                alert('Sorry, you do not have permission to remove this item.')
            } else {
                console.log('error in get', error);
            }
        })
    }

    clickHandler = () => {
        this.deleteItem();
    }
    

    render() {
        console.log(this.props.item.image_url);

        // let deleteButton = if ()
        return (
            <div>
                <img src={this.props.item.image_url} height="42" width="42" />
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )


    }

}

export default ShelfItemsList;