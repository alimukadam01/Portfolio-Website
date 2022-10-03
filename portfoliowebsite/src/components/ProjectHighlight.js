import React from 'react'

function ProjectHighlight(props) {
  return (
    <div className="card">
        <img className="card-img-top" src={ props.img } alt="/"/>
        <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <p className="card-text">{ props.desc }</p>
            <a href={props.link} className="btn btn-outline-primary">Check this out!</a>
        </div>
    </div>
  )
}

export default ProjectHighlight