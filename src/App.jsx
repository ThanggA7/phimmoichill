import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/header';
import Footer from './components/Layout/Footer/footer';
import NFound from './Pages/notFound/404notFound';
import routerPublic from './routes';
function App() {
    return (
        <>
            <Header />
            <Routes>
                {routerPublic.map((data, index) => {
                    const Page = data.component;
                    return <Route key={index} path={data.path} element={<Page />} />;
                })}
                <Route path="*" element={<NFound />} />
            </Routes>

            <Footer />
            <></>
        </>
    );
}

export default App;
