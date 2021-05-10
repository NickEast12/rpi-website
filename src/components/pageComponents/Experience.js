import React, { useState } from 'react';
import styled from 'styled-components';

const LowerAboutStyles = styled.section`
  width: 100%;
  padding: 0 0 2rem 0;
  .la {
    width: 90%;
    margin: 0 auto;
    div {
      margin-bottom: 4rem;
      h4 {
        font-size: 2rem;
        font-weight: 700;
        span {
          color: #4e94fb;
          font-weight: 900;
        }
      }
      p {
        margin-top: 1rem;
      }
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        gap: 5px;
        li {
          padding: 5px 8px;
          border-radius: 5px;
          &:nth-child(1n) {
            background: #4e94fb;
          }
          &:nth-child(2n) {
            background: #69ffb7;
          }
          &:nth-child(3n) {
            background: #ef5e93;
          }
        }
      }
    }
  }
`;
const LowerAbout = () => {
  const i = true;
  return (
    <LowerAboutStyles>
      <div className="la">
        <div className="la__tech">
          <h4>My current tech stack</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis explicabo impedit! Quo, quisquam libero.
          </p>
          <ul>
            <li>JSX</li>
            <li>Styled Components</li>
            <li>React.js</li>
            <li>Gatsby.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Sanity.io</li>
            <li>Netlify</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div className="la__work">
          <h4>
            Currently working @ <span>Nutcracker Agency</span>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis explicabo impedit! Quo, quisquam libero.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ad!
          </p>
        </div>
      </div>
    </LowerAboutStyles>
  );
};

export default LowerAbout;
