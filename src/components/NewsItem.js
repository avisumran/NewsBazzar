import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "25rem" }}>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-warning" style={{left:'92%',zIndex:'1'}}>{source}
            </span>
          <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/08/16/1600x900/Gallery_1687692475811_1692160997451.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
