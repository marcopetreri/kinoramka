import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Logo } from '../components/logo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout className='page--home'>
    <SEO title='Home' />
    <div className='row h-100 justify-content-center align-items-center'>
      <div className='col-10 col-sm-8 col-md'>
        <div className='row'>
          <div className='col-12'>
            <Logo></Logo>
          </div>
          <div className='col-12 mt-3'>
            <small>Nothing is real but you</small>
            {/* <Link className='btn btn-link btn-lg' to='/contatti'>
              Contatti
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
