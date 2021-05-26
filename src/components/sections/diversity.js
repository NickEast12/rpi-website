import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const DiversityStyles = styled.section`
  width: 100%;
  padding-bottom: 3rem;
  .diversity {
    width: 90%;
    margin: var(--auto);
    &__left {
      width: 90%;
      margin: var(--auto);
    }
    &__right {
      margin-top: 2.5rem;
      h4 {
        font-size: 2.35rem;
        margin: 0.25rem 0 0.5rem 0;
      }
    }
  }
`;
const Diversity = () => {
  const i = true;
  return (
    <DiversityStyles>
      <div className="diversity">
        <div className="diversity__left">
          <Illustration />
        </div>
        <div className="diversity__right">
          <h6 className="sbt">Diversity</h6>
          <h4>Diversity title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eum deserunt perferendis quibusdam distinctio accusantium illo,
            voluptatem, molestiae obcaecati nihil repellendus magnam voluptas
            nobis ipsam.
          </p>
        </div>
      </div>
    </DiversityStyles>
  );
};

export default Diversity;
