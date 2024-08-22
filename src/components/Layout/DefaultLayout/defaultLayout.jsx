import React, { Children } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Content from '../Content/content';
function DefaultLayout({ chilrent }) {
    return (
        <>
            <Header />

            <div className="container">{chilrent}</div>

            <Footer />
        </>
    );
}

export default DefaultLayout;
