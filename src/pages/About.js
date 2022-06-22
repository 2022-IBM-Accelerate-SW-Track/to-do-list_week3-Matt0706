import React, { Component, Profiler } from 'react';
import "./About.css";
import profilepic from "../assets/profilepic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <img src={profilepic} alt="Profile Pic"/>
        <h3>Matthew Medina</h3>
        <p>I'm a rising senior at Marist College majoring in Computer Science</p>
      </div>
    )
  }
}