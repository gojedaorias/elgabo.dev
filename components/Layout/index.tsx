import React from 'react';
import cn from 'classnames';
import Footer from '../Footer';
import TabNavigator from '../TabNavigator';
import { socials } from '@/mocks/socials';
import { links } from '@/mocks/links';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <main className={cn("main")}>
      {children}

      {title !== "post" && title !== "product" && (
        <TabNavigator links={links} socials={socials} />
      )}
      <Footer title={title} />
    </main>
  );
};

export default Layout;
