import React, { Component } from 'react';


class ShelfItemsList extends Component{
    

    render() {
    console.log(this.props.item.image_url);
        
        return (
            <div>
                <img src={this.props.item.image_url} height="42" width="42"/>
            </div>
        )


    }

}

export default ShelfItemsList;