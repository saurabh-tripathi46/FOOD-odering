import React, {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from './component/Cart';
import  {CartContextProvider}  from './utils/cartContext';
import { Provider } from 'react-redux';
import { store } from './utils/appStore';
const RestaurantMenuComponent  = lazy(()=>{
    return import('./component/RestaurantMenuComponent')
});
const BodyComponent  = lazy(()=>{
    return import('./component/BodyComponent')
});
const Cart = lazy(()=>{
    return import('./component/Cart')
});
const AppLayout = ()=>{
    const [cartValue, setCartValue] = useState([])
    return <div className='app-container'>
        <Provider store={store}>
        <CartContextProvider>
        <HeaderComponent/>
    <Outlet/>
    </CartContextProvider>
        </Provider>
 </div>
 
}

const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
        {
            path: '/',
            element: <Suspense>
                <BodyComponent />
            </Suspense>
        },
        {
            path: '/about',
            element: <AboutComponent />
        },
        {
            path: '/cart',
            element:<Suspense>
            <Cart />
            </Suspense> 
        },
        {
        path: '/restaurants/:id',
        element: <Suspense>
            <RestaurantMenuComponent />
            </Suspense>
    }
]
},
{
    path: '/contact',
    element: <ContactComponent />
}])
const root = ReactDOM.createRoot(document.getElementById("root"))
// function HeadingComponent(){
//     return <h1>Heading</h1>
// }

root.render(<RouterProvider router = {router} />)

    
    