import React, { useEffect } from 'react';
import Wrapper from './styles';
import { Hero, PageHero } from '../../components';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Shuttle | About';
  }, []);

  return (
    // <main>
    //   <PageHero title='about' />
    //   <Wrapper className='page section section-center'>
    //     <img src={aboutImg} alt='pic' />
    //     <article>
    //       <div className='title'>
    //         <h2>My Story</h2>
    //         <div className='underline'></div>
    //       </div>
    //       <p>
    //         TomperWear was started by Varun Tiwar in December'21, with an aim to
    //         build a strong infrastructure for small bussiness owners to expand
    //         their reach, by bringing their products online. Today TomperWear is
    //         used by hundreds of shop owners to expand their bussiness. This is
    //         possible just due to your trust, support and our constant efforts to
    //         make the platform even better. We are working tirelessly to improve
    //         the experiance of our end users and hope to soon reach 1000+
    //         customers.
    //       </p>
    //     </article>
    //   </Wrapper>
    // </main>







    
    <div>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">Designed for engineers</h1>
        <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link" href="#">
            Learn more
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
          <a className="icon-link" href="#">
            Buy
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>



    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div className="col-md-6 bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
      </div>
      <div className="col-md-6 bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
      </div>
    </div>


    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div className="col-md-6 bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
      </div>
      <div className="col-md-6 bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
      </div>
    </div>









    <div className=" m-5 px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#people-circle" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>





    {/* //textbox */}

    <Hero />

   























    </div>

  );
};

export default AboutPage;
