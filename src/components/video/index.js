import React from "react";
import { connect } from "react-redux";

// import { Container } from './styles';

const video = ({ activeLesson, activeModule }) => (
  <div>
    <strong>Modulo {activeModule.title}</strong>
    <span>Aula {activeLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(video);
