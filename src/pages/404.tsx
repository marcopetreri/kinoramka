import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout className='page--404'>
    <SEO title='404' />
    <div className='row h-100 justify-content-center align-items-center'>
      <div className='col-auto'>
        <h1>404 - Not Found</h1>
        <p>Hai raggiunto una pagina che non esiste...</p>
        <Link className='btn btn-link btn-lg' to='/'>
          Torna alla Home
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
