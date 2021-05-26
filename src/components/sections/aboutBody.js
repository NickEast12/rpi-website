import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const AboutBodyStyles = styled.section`
  width: 100%;
  padding-bottom: 3rem;
  .abody {
    width: 90%;
    margin: var(--auto);
    &__img {
      width: 90%;
      margin: var(--auto);
    }
    &__text {
      margin-top: 2rem;
      h3 {
        margin: 0.25rem 0 0.5rem 0;
        font-size: 2.35rem;
      }
      p {
        margin-bottom: 0.75rem;
      }
    }
  }
`;
const AboutBody = () => {
  const i = true;
  return (
    <AboutBodyStyles>
      <div className="abody">
        <div className="abody__img">
          <Illustration />
        </div>
        <div className="abody__text">
          <h6 className="sbt">Our story</h6>
          <h3>Our story title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aperiam numquam fugiat officia iste reprehenderit magnam impedit,
            sapiente nam beatae cum dolorum voluptates nobis? Tempora!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            deleniti nemo sed debitis laboriosam dolores!
          </p>
        </div>
      </div>
    </AboutBodyStyles>
  );
};

export default AboutBody;
