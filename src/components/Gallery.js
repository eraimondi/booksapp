import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let notfound = "https://static.thenounproject.com/png/82078-200.png";
    return (
      <div>
        {this.props.items.map((item) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return (
            <a 
            key={item.id} 
            className="book"
            href={infoLink}
            target="_blank"
            >
          <img
          className="book-img" 
          src={imageLinks.thumbnail !== undefined ? imageLinks.thumbnail:notfound}
          alt="book"
          />
          <div className="book-text">
          {title}
          </div>
          </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;