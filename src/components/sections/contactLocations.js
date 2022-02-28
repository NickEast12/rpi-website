import React from 'react';
import styled from 'styled-components';
//* Local imports
import { Link } from 'gatsby';
import LocationMap from '../../svgs/map_pins.svg';
import Pin from '../../svgs/pin.svg';

const ContactLocationsStyles = styled.section`
  width: 100%;
  padding-bottom: 2rem;
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
      flex-wrap: wrap;
      align-items: center;
      /* gap: 15px; */
      margin-top: 1.5rem;
      button {
        margin-right: 10px;
        cursor: pointer;
        padding: 0.5rem;
        margin-bottom: 0.75rem;
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
    width: 90%;
    &__box {
      padding: 1rem 0;
      margin-bottom: 0.5rem;
      h4 {
        text-align: center;
      }
      section {
        display: grid;
        grid-gap: 1rem;
        margin: 2rem auto 0 auto;
        max-width: 700px;
      }
      &:nth-child(1) {
        section {
          @media only screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
      &:nth-child(2) {
        section {
          grid-template-columns: repeat(1, 1fr);
        }
      }
      &:nth-child(3) {
        section {
          @media only screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
      &:nth-child(4) {
        section {
          max-width: 1100px;
          @media only screen and (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      }
    }
  }
`;
const ContactLocations = ({ regions, offices }) => {
  const [europe, middleEast, asia, pacific, america] = offices;
  const europeData = europe.nodes.reverse();
  const middleEastAfrica = middleEast.nodes;
  const pacificData = pacific.nodes.reverse();
  const asiaData = asia.nodes;
  const americaData = america.nodes;
  return (
    <ContactLocationsStyles>
      <div className="locations">
        <h3>Our locations around the globe</h3>
        <div className="locations__btns">
          {regions.map((button) => (
            <Link
              to={`/contact/#${button.slug.current}`}
              key={button.slug.current}
            >
              <button type="button">
                <span>{button.title}</span>
              </button>
            </Link>
          ))}
        </div>
        <LocationMap />
      </div>
      <div className="offices">
        <div className="offices__box" id="uk-and-europe">
          <h4>UK &amp; Europe</h4>
          <section>
            {europeData.map((office) => (
              <SingleOffice key={office.id} office={office} />
            ))}
          </section>
        </div>
        <div className="offices__box" id="middle-east-and-africa">
          <h4>Middle East &amp; Africa</h4>
          <section>
            {middleEastAfrica.map((office) => (
              <SingleOffice key={office.id} office={office} />
            ))}
          </section>
        </div>
        <div className="offices__box" id="anz-and-pacific">
          <h4>ANZ &amp; Pacific</h4>
          <section>
            {pacificData.map((office) => (
              <SingleOffice key={office.id} office={office} />
            ))}
          </section>
        </div>
        <div className="offices__box" id="asia">
          <h4>Asia</h4>
          <section>
            {asiaData.map((office) => (
              <SingleOffice key={office.id} office={office} />
            ))}
          </section>
        </div>
        <div className="offices__box" id="americas">
          <h4>Americas</h4>
          <section>
            {americaData.map((office) => (
              <SingleOffice key={office.id} office={office} />
            ))}
          </section>
        </div>
      </div>
    </ContactLocationsStyles>
  );
};

export default ContactLocations;

const SingleOfficeStyles = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top: solid 8px var(--newBlue);
  border-radius: 10px;
  margin: 0 auto 0.5rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 350px;
  .s-o {
    svg {
      width: 40px;
      height: 40px;
    }
    text-align: center;
    h5 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
    address {
      margin-bottom: 0.5rem;
    }
    &--number,
    &--email {
      font-weight: 700;
    }
    &--email {
      margin-top: 0.25rem;
    }
  }
`;
const SingleOffice = ({ office }) => {
  const location =
    office.addressone +
    office.addresstwo +
    office.addressthree +
    office.addressfour;
  const t = location.split(' ');
  return (
    <SingleOfficeStyles>
      <div className="s-o">
        <Pin />
        <h5>{office.name}</h5>
        <address>
          <a
            href={`https://what3words.com/${office.whatthreewords}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{office.addressone}</p>
            <p>{office.addresstwo}</p>
            <p>{office.addressthree}</p>
            <p>{office.addressfour}</p>
          </a>
        </address>
        {office.ealicence ? (
          <p className="s-o--ea">{`EA Licence : ${office.ealicence}`}</p>
        ) : (
          ''
        )}
        <a href={`tel:${office.number}`}>
          <p className="s-o--number">{office.number}</p>
        </a>
        <a href={`mailto:${office.email}`}>
          <p className="s-o--email">{office.email}</p>
        </a>
      </div>
    </SingleOfficeStyles>
  );
};
