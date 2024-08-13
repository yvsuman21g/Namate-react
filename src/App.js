import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import { lazy, Suspense } from 'react';

//  Lazy loading for Performance Optimization

const Grocery = lazy(()=>import("./components/Grocery"));

const About = lazy(()=>import("./components/About"));

const AppLayout = () =>{
    return(
        <div className='App'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}><Contact/></Suspense>
                ),
            },
            {
                path:"/grocery",
                element: (<Suspense fallback={<h1>Loading......</h1>}>
                    <Grocery/>
                    </Suspense>),
            },
            {
                path:"/restaurants/:resId",
                element: <RestrauntMenu/>,
            },
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)