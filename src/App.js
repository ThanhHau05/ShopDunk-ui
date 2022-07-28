import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '~/Routes';
import DefaultLayout from '~/Layouts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    const Layout = route.layout === null ? Fragment : DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
