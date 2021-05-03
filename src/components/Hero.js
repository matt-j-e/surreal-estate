import React from "react";
import styled from "styled-components";
import device from "../helpers/device";

const HeroSection = styled.section`
  @media ${device.laptopM} {
    display: flex;
    justify-content: center;
    height: 516px;
    background-image: url("./sofa.jpg");
    background-position: bottom -134px center;
    background-size: cover;
  }
  @media ${device.laptopL} {
    background-position: bottom -130px center;
  }
`;

const Strap = styled.h2`
  @media ${device.laptopM} {
    margin-top: 180px;
    font-size: 4rem;
    font-weight: 900;
    color: white;
    span {
      color: #daad65;
    }
  }
  @media ${device.laptopL} {
    margin-top: 140px;
  }
`;

const Hero = () => {
  return (
    <HeroSection className="hero">
      <Strap>
        find your <span>pad.</span>
      </Strap>
    </HeroSection>
  );
};

export default Hero;
