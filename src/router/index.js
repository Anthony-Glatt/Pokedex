import React from "react";
import { Routes, Route } from 'react-router-dom';
import AppLayout from "src/containers/layout";
import { HomePage } from "src/containers/home";
import PokemonPageWithStore from "../containers/pokemon";
import NoPage from "../containers/noPage";

// const withSuspense = (Component) => (
//   function componentWithSuspense(props) {
//     return (
//       <Suspense fallback={<>...</>}>
//         <Component {...props} />
//       </Suspense>
//     )
//   }
// );

// const Home = withSuspense(React.lazy(() => import('src/containers/home')));
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
        <Route index element={<HomePage />} />
        <Route path='pokemon' element={<PokemonPageWithStore />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
