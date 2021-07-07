import React from 'react';
import styled from 'styled-components';
//* Local imports
import { Link } from 'gatsby';
import LocationMap from '../../svgs/map_pins.svg';
import Pin from '../../svgs/pin.svg';

const ContactLocationsStyles = styled.section`
  width: 100%;
  .locations {
    max-width: var(--maxWidth);
    padding: 1.5rem 0 2rem 0;
    width: 90%;
    margin: var(--auto);
    text-align: center;
    p {
      margin: 0.5rem 0;
    }
    &__btns {
      display: flex;
      justify-content: center;
      align-items: center;
      /* gap: 1rem; */
      margin-top: 1.5rem;
      button {
        margin-right: 10px;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: solid var(--background) 2px;
        border-radius: 50px;
        background-color: transparent;
        transition: all 0.25s ease;
        &:hover {
          background: linear-gradient(
            344deg,
            rgba(102, 194, 171, 1) 13%,
            rgba(115, 208, 217, 1) 92%
          );
        }
        span {
          color: var(--background);
          font-weight: 700;
        }
      }
    }
    svg {
      margin-top: 3rem;
      width: 100%;
      height: 100%;
      max-width: 750px;
      @media only screen and (min-width: 1280px) {
        width: 80%;
      }
    }
  }
  .offices {
    max-width: var(--maxWidth);
    margin: var(--auto);
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 60% 1fr;
      grid-column-gap: 1rem;
      &__box {
        height: 100%;
        &__wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        &:nth-child(2) {
          .offices__box__wrapper {
            grid-template-columns: 1fr;
          }
        }
      }
    }
    &__box {
      margin-top: 2rem;
      max-width: var(--maxWidth);
      h4 {
        text-align: center;
        margin-bottom: 2rem;
        @media only screen and (min-width: 1024px) {
          text-align: left;
        }
      }
      &__wrapper {
        section {
          &:nth-child(1n) {
            border-bottom: solid 8px var(--newBlue);
            @media only screen and (min-width: 1024px) {
              border-bottom: none;
            }
          }
          &:nth-child(2n) {
            border-bottom: solid 8px var(--newCyan);
            @media only screen and (min-width: 1024px) {
              border-bottom: none;
            }
          }
          border-radius: 2.5px;
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          svg {
            width: 55px;
            margin-bottom: 1rem;
          }
          h5 {
            font-weight: 700;
            font-size: 1.875rem;
            line-height: 2.25rem;
            letter-spacing: -1.5px;
            margin-bottom: 0.5rem;
          }
          address {
            margin-bottom: 0.5rem;
            margin: 0.5rem auto;
            max-width: 400px;
          }
          p {
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
        }
      }
      @media only screen and (min-width: 1024px) {
        .europe,
        .dubai,
        .apac {
          grid-gap: 1rem;
          section {
            height: 100%;
            padding: 1rem 1.5rem;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            address {
              text-align: left;
            }
            &:nth-child(odd) {
              border-top: solid 8px var(--newBlue);
            }
            &:nth-child(even) {
              border-top: solid 8px var(--newCyan);
            }
          }
        }
        .apac {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
  .alt-o {
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
      padding-bottom: 3rem;
    }
  }
`;
const ContactLocations = () => {
  const i = true;
  return (
    <ContactLocationsStyles>
      <div className="locations">
        <h3>Our locations around the globe</h3>
        <div className="locations__btns">
          <Link to="/contact#uk-europe">
            <button type="button">
              <span>UK &amp; Europe</span>
            </button>
          </Link>
          <Link to="/contact#mea">
            <button type="button">
              <span>MEA</span>
            </button>
          </Link>
          <Link to="/contact#apac">
            <button type="button">
              <span>APAC</span>
            </button>
          </Link>
        </div>
        <LocationMap />
      </div>
      <div className="offices">
        <div className="offices__box" id="uk-europe">
          <h4>UK &amp; Europe</h4>
          <div className="offices__box__wrapper europe">
            <section>
              <Pin />
              <h5>London</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/5th+Floor,+1+Poultry,+London+EC2R+8EJ/@51.5133463,-0.0927404,17z/data=!3m1!4b1!4m5!3m4!1s0x48760354e6a16a63:0x6ac3d4a9cbeaf534!8m2!3d51.5133463!4d-0.0905464"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  5th Floot, 1 Poultry, London, EC2R 8EJ, UK
                </a>
              </address>
              <p>
                <a href="tel:+44 (0) 203 597 7150"> + 44 (0) 203 597 7150</a>
              </p>
              <p>
                <a href="mailto:people@rpint.com"> people@rpint.com</a>
              </p>
            </section>
            <section>
              <Pin />
              <h5>Stuttgart</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/Naststra%C3%9Fe+15b,+70376+Stuttgart,+Germany/@48.8144932,9.2115734,17z/data=!3m1!4b1!4m5!3m4!1s0x4799c54755e6aaab:0x6afce6e401d85160!8m2!3d48.8144932!4d9.2137674"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naststrasse 15B Stuttgart 70376 Germany
                </a>
              </address>
              <p>
                <a href="tel:+49 711 214756 40"> + 49 711 214756 40</a>
              </p>
              <p>
                <a href="mailto:germany@rpint.com"> germany@rpint.com</a>
              </p>
            </section>
          </div>
        </div>
        <div className="offices__box" id="mea">
          <h4>MEA</h4>
          <div className="offices__box__wrapper dubai">
            <section>
              <Pin />
              <h5>Dubai</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/Dubai+Outsource+City/@25.1237489,55.4231638,17z/data=!4m8!1m2!2m1!1sOffice+EX-41+Ground+Floor,+Building+7+Dubai+Outsource+City+UAE+++++++++++++++++(PO+Box+500313)!3m4!1s0x3e5f63bd5e70ad87:0x4feb6ba83055a868!8m2!3d25.1239098!4d55.4252854"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office EX-41 Ground Floor, Building 7 Dubai Outsource City UAE
                  (PO Box 500313)
                </a>
              </address>
              <p>
                <a href="tel:971 (0)4 394 8760" rel="noopener noreferrer">
                  + 971 (0)4 394 8760
                </a>
              </p>
              <p>
                <a href="mailto:dubai@rpint.com"> dubai@rpint.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="offices alt-o">
        <div className="offices__box" id="apac">
          <h4>APAC</h4>
          <div className="offices__box__wrapper apac">
            <section>
              <Pin />
              <h5>Singapore</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/One+Marina+Boulevard+Office+Building/@1.2822004,103.8504573,17z/data=!3m1!4b1!4m5!3m4!1s0x31da19764d461df5:0x1c75e38f90b41fbd!8m2!3d1.2822004!4d103.8526513"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  One Marina Boulevard Lvl20 1 Marina Boulevard Singapore 018989
                </a>
              </address>
              <p>
                <a href="tel:+65 69785831">+ 65 69785831</a>
              </p>
              <p>
                <a href="mailto:singapore@rpint.com"> singapore@rpint.com</a>
              </p>
            </section>
            <section>
              <Pin />
              <h5>Malaysia</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/TDCX+Malaysia+(NU+Tower+2+Office)/@3.1333054,101.6840409,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4992c3f7607b:0xa0d05a713540da90!8m2!3d3.1333054!4d101.6862349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Level 23, NU Tower 2 Jalan Tun Sambanthan, 50470 KL Sentral
                  Kuala Lumpur, Malaysia
                </a>
              </address>
              <p>
                <a href="tel:+(603) 2727 1751"> + (603) 2727 1751</a>
              </p>
              <p>
                <a href="mailto:rp@rpint.com"> rp@rpint.com</a>
              </p>
            </section>
            <section>
              <Pin />
              <h5>New Zealand</h5>
              <address>
                <a
                  href="https://www.google.com/maps/place/BDH+Business+Hub/@-36.7472428,174.7344563,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d3a2bfd2d32f7:0xa99e3be5822083d8!8m2!3d-36.7472308!4d174.7365569"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BDH Business Hub 4 Whetu Place Rosedale New Zealand 0630
                </a>
              </address>
              <p>
                <a href="tel:+64 (0) 9 9284031">+ 64 (0) 9 9284031</a>
              </p>
              <p>
                <a href="mailto:anz@rpint.com">anz@rpint.com</a>
              </p>
            </section>
            <section>
              <Pin />
              <h5>Hong Kong</h5>
              <address>
                Rooms 1007-1012, 10/F., K. Wah Centre 191 Java Road, North Point
                Hong Kong
              </address>
              <p>
                <a href="mailto:zs@rpint.com "> zs@rpint.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </ContactLocationsStyles>
  );
};

export default ContactLocations;
