import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./Pages/Loading";
const LazyCommonPage = React.lazy(() => import("./Pages/CommonPage"));
const LazyHome = React.lazy(() => import("./Pages/Home"));
const LazyAboutUs = React.lazy(() => import("./Pages/AboutUs"));
const LazyMenu = React.lazy(() => import("./Pages/Menu"));
const LazyReserve = React.lazy(() => import("./Pages/Reserve"));
const LazyError = React.lazy(() => import("./Pages/Error"));

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyCommonPage />
              </React.Suspense>
            }
          >
           
            <Route
              index
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyAboutUs />
                </React.Suspense>
              }
            />
            <Route
              path="menu"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyMenu />
                </React.Suspense>
              }
            />
            <Route
              path="reserve"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyReserve />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyError />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
