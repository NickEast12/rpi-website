import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* Local Imports
import Illustration from '../../svgs/map_pins.svg';

const areaData = [
  {
    location: 'UK & Europe',
    established: 1998,
    regional: 'UK, Germany',
    staff: 20,
    total: 3910,
    countries: 44,
    link: 'uk-and-europe',
  },
  {
    location: 'Middle East & Africa',
    established: 2002,
    regional: 'United Arab Emirates',
    staff: 18,
    total: 3540,
    countries: 30,
    link: 'middle-east-and-africa',
  },
  {
    location: 'Asia',
    established: 2007,
    regional: 'Singapore, Malaysia,',
    regionalLower: 'Hong Kong',
    staff: 11,
    total: 1650,
    countries: 18,
    link: 'asia',
  },
  {
    location: 'ANZ & Pacific',
    established: 2010,
    regional: 'Australia, New Zealand',
    staff: 4,
    total: 200,
    countries: 10,
    link: 'anz-and-pacific',
  },

  {
    location: 'Americas',
    established: 2017,
    regional: 'USA',
    staff: 2,
    total: 300,
    countries: 20,
    link: 'americas',
  },
];

const WhereWeWorkStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .work {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
    }
    @media only screen and (min-width: 1024px) {
      padding-top: 1rem;
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: 55% 1fr;
    }
    &__img {
      width: 100%;
      margin: var(--auto);
      @media only screen and (min-width: 600px) {
        max-width: 600px;
      }
      @media only screen and (min-width: 768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &__wrapper {
      margin-top: 1.5rem;
      h4 {
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
      }
      @media only screen and (min-width: 768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .boxes {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem 0;
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 3rem 0 0 0;
      grid-gap: 1rem;
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }
    &__inner {
      text-align: center;
      border-radius: 4.5px;
      padding: 1.5rem 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      @media only screen and (min-width: 768px) {
        width: 100%;
        margin: var(--auto);
      }

      @media only screen and (min-width: 1024px) {
        width: 100%;
        margin: var(--auto);
        padding: 1rem 0 0.5rem 0;
        &:nth-child(1) {
          .clear--fix {
            padding: 0.25rem 0 1.15rem 0;
          }
        }
        &:nth-child(2) {
          .clear--fix {
            padding: 0.25rem 0 1.15rem 0;
          }
        }
        &:nth-child(3) {
          .clear--fix {
            padding: 0.25rem 0 0 0;
          }
        }
        &:nth-child(4) {
          .clear--fix {
            padding: 0.25rem 0 1.15rem 0;
          }
        }
        &:nth-child(5) {
          .clear--fix {
            padding: 0.25rem 0 1.15rem 0;
          }
        }
      }
      &__wrapper {
      }
      &:nth-child(odd) {
        border-top: solid 8px #73d0d9;
      }
      &:nth-child(even) {
        border-top: solid 8px #66c2ab;
      }
      margin-bottom: 0.25rem;
      svg {
        width: 40px;
        display: none;
      }
      h5 {
        font-size: 1.6rem;
        margin: 0.5rem 0;
        @media only screen and (min-width: 1024px) {
          font-size: 1.2rem;
        }
      }

      section {
        padding: 0.75rem 0;
        border-top: solid 0.1px rgba(0, 0, 0, 0.1);
        @media only screen and (min-width: 1024px) {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          padding: 0.25rem 0;
        }
        span {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--newCyan);
          @media only screen and (min-width: 1024px) {
            font-size: 1rem;
          }
        }
        .office {
          font-size: 1.2rem;
          @media only screen and (min-width: 1024px) {
            font-size: 0.9rem;
          }
        }
        p {
          text-transform: uppercase;
          font-size: 0.95rem;
          margin-top: 0.25rem;
          @media only screen and (min-width: 1024px) {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;
const WhereWeWork = () => {
  const i = true;
  return (
    <WhereWeWorkStyles>
      <div className="work">
        <div className="work__img">
          <Illustration />
        </div>
        <div className="work__wrapper">
          <h6 className="sbt">Our offices</h6>
          <h4>Where we work</h4>
          <p>
          Established for 25 years, and acquired by <a href="https://www.themcggroup.com/" target="_blank" rel="noopener">The MCG Group</a> in 2021, RPI operate in 9 countries. We’ve made over 9,600 leadership and technology placements across 120 countries. 
          </p>
          <p>
            Our unique combination of local expertise matched with a truly
            global reach makes us a trusted partner to identify and deliver the
            best talent wherever and whenever you need it.
          </p>
        </div>
      </div>
      <div className="boxes">
        {areaData.map((area) => (
          <div className="boxes__inner" key={area.location}>
            <Link to={`/contact#${area.link}`}>
              <h5>{area.location}</h5>
              <div className="boxes__inner__wrapper">
                <section>
                  <p>Established</p>
                  <span>{area.established}</span>
                </section>
                <section className="clear--fix">
                  <p>Regional offices</p>
                  <span className="office">{area.regional}</span>
                  <span className="office">{area.regionalLower}</span>
                </section>
                <section>
                  <p>Staff</p>
                  <span>{area.staff}</span>
                </section>
                <section>
                  <p>placements to date</p>
                  <span>
                    {area.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </section>
                <section>
                  <p>Countries placed in to date</p>
                  <span>{area.countries}</span>
                </section>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </WhereWeWorkStyles>
  );
};

export default WhereWeWork;
