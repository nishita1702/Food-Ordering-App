import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    //Make an API call and set UserName
    const data = {
      name: "Nishita Kumari",
    };
    setUserName(data.name);
  }, []);

  console.log(userName);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
