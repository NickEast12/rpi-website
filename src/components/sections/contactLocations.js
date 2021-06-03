import React from 'react';
import styled from 'styled-components';
//* Local imports
import LocationMap from '../icons/locationmap';
import Pin from '../../svgs/pin.svg';

const ContactLocationsStyles = styled.section`
  width: 100%;
  .locations {
    padding: 1.5rem 0 2rem 0;
    width: 90%;
    margin: var(--auto);
    text-align: center;
    p {
      margin: 0.5rem 0;
    }
    svg {
      margin-top: 1rem;
      width: 100%;
      height: auto;
    }
  }
  .office {
    padding: 3rem 0;
    background-color: var(--background);
    > h4 {
      color: var(--white);
      text-align: center;
      margin-bottom: 1rem;
    }
    &__wrapper {
      width: 90%;
      margin: var(--auto);
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
      padding-top: 1.5rem;
      &__box {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0 1.5rem;
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
        }
        p {
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        h5,
        address,
        p {
          color: var(--white);
        }
      }
    }
  }
  .office--alt {
    padding: 3rem 0;
    background-color: var(--offWhite);
    > h4 {
      text-align: center;
      margin-bottom: 1rem;
    }
    &__wrapper {
      width: 90%;
      margin: var(--auto);
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
      padding-top: 1.5rem;
      &__box {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0 1.5rem;
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
        }
        p {
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
`;
const ContactLocations = () => {
  console.log('🍎');
  return (
    <ContactLocationsStyles>
      <div className="locations">
        <h3>Our locations around the globe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, a!
        </p>
        <LocationMap />
      </div>
      <div className="office">
        <h4>UK &amp; Europe</h4>
        <div className="office__wrapper">
          <div className="office__wrapper__box">
            <Pin />
            <h5>London</h5>
            <address>5th Floot, 1 Poultry, London, EC2R 8EJ, UK</address>
            <p>+ 44 (0) 203 597 7150</p>
            <p>people@rpint.com</p>
          </div>
          <div className="office__wrapper__box">
            <Pin />
            <h5>Stuttgart</h5>
            <address>Naststrasse 15B Stuttgart 70376 Germany</address>
            <p>+ 49 711 214756 40</p>
            <p>germany@rpint.com</p>
          </div>
        </div>
      </div>
      <div className="office--alt">
        <h4>MEA</h4>
        <div className="office--alt__wrapper">
          <div className="office--alt__wrapper__box">
            <Pin />
            <h5>Dubai</h5>
            <address>
              Office EX-41 Ground Floor, Building 7 Dubai Outsource City UAE (PO
              Box 500313)
            </address>
            <p>+ 971 (0)4 394 8760</p>
            <p>dubai@rpint.com</p>
          </div>
        </div>
      </div>
      <div className="office">
        <h4>APAC</h4>
        <div className="office__wrapper">
          <div className="office__wrapper__box">
            <Pin />
            <h5>Singapore</h5>
            <address>
              One Marina Boulevard Lvl20 1 Marina Boulevard Singapore 018989
            </address>
            <p>+ 65 69785831</p>
            <p>singapore@rpint.com</p>
          </div>
          <div className="office__wrapper__box">
            <Pin />
            <h5>Malaysia</h5>
            <address>
              Level 23, NU Tower 2 Jalan Tun Sambanthan, 50470 KL Sentral Kuala
              Lumpur, Malaysia
            </address>
            <p>+ (603) 2727 1751</p>
            <p>rp@rpint.com</p>
          </div>
          <div className="office__wrapper__box">
            <Pin />
            <h5>New Zealand</h5>
            <address>
              BDH Business Hub 4 Whetu Place Rosedale New Zealand 0630
            </address>
            <p>+ 64 (0) 9 9284031</p>
            <p>anz@rpint.com</p>
          </div>
          <div className="office__wrapper__box">
            <Pin />
            <h5>Hong Kong</h5>
            <address>
              Rooms 1007-1012, 10/F., K. Wah Centre 191 Java Road, North Point
              Hong Kong
            </address>
            <p>zs@rpint.com</p>
          </div>
        </div>
      </div>
    </ContactLocationsStyles>
  );
};

export default ContactLocations;
