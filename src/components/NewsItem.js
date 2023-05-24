import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, badge } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: '24rem' }}>
                <img src={imageUrl} alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title}... <span class="badge bg-secondary">{badge}</span></h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem