import { PrimaryButton } from "./PrimaryButton";
import { DefaultButton } from "./DefaultButton";
import { DashedButton } from "./DashedButton";
import { TextButton } from "./TextButton";
import { LinkButton } from "./LinkButton";
import './btn.css';
import React from 'react'
function Card() {
  return (
    <div>
      <div >
        <PrimaryButton className="btn">Primary Button</PrimaryButton>
        <DefaultButton className="btn">Default Button</DefaultButton>
        <DashedButton className="btn">Dashed Button</DashedButton>
      </div>
      {/* <div>
        <TextButton className="btn">Text Button</TextButton>
        <LinkButton className="btn">Link Button</LinkButton>
      </div> */}
    </div>
  );
};

export default Card;