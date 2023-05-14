import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var experience= this.props.data.experience;
      var designation= this.props.data.designation;
      var description= this.props.data.description;
      var description2= this.props.data.description2;
      var description3= this.props.data.description3;
      var description4= this.props.data.description4;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Contact</a></li>
	         <li><a className="smoothscroll" href="#resume">Work</a></li>
	         <li><a className="smoothscroll" href="#skills">Skills</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span> with <span>{experience} years</span> of experience.<p>Currently working as a <span>{designation}</span>, {description}</p>{description2}<p>{description3}</p><p>{description4}</p>
            </h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
