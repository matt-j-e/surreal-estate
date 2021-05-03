import React from "react";
import styled from "styled-components";
import device from "../helpers/device";

const HeroSection = styled.section`
  display: none;

  @media ${device.laptopM} {
    display: flex;
    justify-content: center;
    height: 60vh;
    background-image: url("./sofa-crop.jpg");
    background-position: bottom center;
    background-size: cover;
  }
  @media ${device.desktop} {
    height: 40vh;
  }
`;

const Strap = styled.h2`
  @media ${device.laptopM} {
    margin-top: 140px;
    font-size: 4rem;
    font-weight: 900;
    color: white;
    span {
      color: #daad65;
    }
  }
  @media ${device.laptopL} {
    margin-top: 160px;
  }
  @media ${device.desktop} {
    margin-top: 180px;
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
