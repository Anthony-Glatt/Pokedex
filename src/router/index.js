import React from "react";
import { Routes, Route } from 'react-router-dom';
import AppLayout from "../containers/layout";
// import HomePageWithStore from "../containers/home";
import PokemonPage from "../containers/pokemon";
import NoPage from "../containers/noPage";

const withSuspense = (Component) => (
  function componentWithSuspense(props) {
    return (
      <Suspense fallback={<>...</>}>
        <Component {...props} />
      </Suspense>
    )
  }
);

const Home = withSuspense(React.lazy(() => import('src/containers/home')));
/**
 * The primary router
 * 
 * @function
 * @memberof router
 * @returns {React.Component}
 */
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='pokemon' element={<PokemonPage />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
