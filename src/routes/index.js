import Movie from '../Pages/Movie/movie';
import News from '../Pages/News/News';
import Search from '../Pages/Search/search';
import TV from '../Pages/TV/tv';

import Content from '../components/Layout/Content/content';

const routerPublic = [
    { path: '/', component: Content },
    { path: '/movie/phim-le', component: Movie },
    { path: '/tv/phim-bo', component: TV },
    { path: '/news', component: News },
    { path: '/search', component: Search },
];

export default routerPublic;
