import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Logo } from '../components/logo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout className='page--contacts'>
    <SEO title='Contatti' />
    <div className='row h-100 justify-content-center align-items-center'>
      <div className='col-10 col-sm-8 col-md'>
        <div className='row'>
          <div className='col-12'>
            <div className='h3'>Lorem ipsum dolor sit amet...</div>
          </div>
          <div className='col-12 mt-3'>
            <Link className='btn btn-link btn-lg' to='/'>
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
