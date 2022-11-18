import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import registerInstruction from '../../../images/Instruction/RegisterInstruction.png';
import loginInstruction from '../../../images/Instruction/LoginInstruction.png';
import addContactInstruction from '../../../images/Instruction/AddContactInstruction.png';
import updateContactInstruction from '../../../images/Instruction/UpdateContactInstruction.png';
import deleteContactInstruction from '../../../images/Instruction/DeleteContactInstruction.png';

import { SlideEffect } from './StepperInstruction.styled';

const StepperInstruction = () => {
  const images = [
    registerInstruction,
    loginInstruction,
    addContactInstruction,
    updateContactInstruction,
    deleteContactInstruction,
  ];

  return (
    <Slide>
      <SlideEffect>
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>Register</span>
        </div>
      </SlideEffect>
      <SlideEffect>
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>Login</span>
        </div>
      </SlideEffect>
      <SlideEffect>
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>Add Contact</span>
        </div>
      </SlideEffect>
      <SlideEffect>
        <div style={{ backgroundImage: `url(${images[3]})` }}>
          <span>Update Contact</span>
        </div>
      </SlideEffect>
      <SlideEffect>
        <div style={{ backgroundImage: `url(${images[4]})` }}>
          <span>Delete Contact</span>
        </div>
      </SlideEffect>
    </Slide>
  );
};

export default StepperInstruction;
