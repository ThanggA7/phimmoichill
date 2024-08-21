import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Movie from "./Pages/Movie/movie";
import NFound from "./Pages/notFound/404notFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <Content />
            </div>
          }
        />

        <Route path="/movie/phim-le" element={<Movie />} />
        <Route path="/tv/phim-bo" element={<Movie />} />
        <Route path="/tv/tv-shows" element={<Movie />} />
        <Route path="/news" element={<Movie />} />
        <Route path="/hot" element={<Movie />} />
        <Route path="*" element={<NFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
