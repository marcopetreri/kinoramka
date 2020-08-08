/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { querySiteMetadata } from '../functions';

const Layout: React.FC<{ children: ReactNode; className?: string }> = ({
  className,
  children,
}) => {
  const { title } = querySiteMetadata();

  return (
    <div className={`site__layout ${className}`}>
      <main className='site__main'>{children}</main>
      <footer className='site__footer'>
        <div className='col-auto ml-auto'>
          <span className='site__copy'>
            © {title} {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
