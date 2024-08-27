import Api from '../Pages/API/api';
import Info from '../Pages/Info/info';
import Movie from '../Pages/Movie/movie';
import News from '../Pages/News/News';
import Search from '../Pages/Search/search';
import TV from '../Pages/TV/tv';
import Watch from '../Pages/Watch/watch';

import Content from '../components/Layout/Content/content';

const routerPublic = [
    { path: '/', component: Content },
    { path: '/movie/:movieId', component: Movie },
    { path: '/tv/:tvId', component: TV },
    { path: '/news', component: News },
    { path: '/search', component: Search },
    { path: '/api', component: Api },
    { path: '/info/:slug', component: Info },
    { path: '/watch/:slug', component: Watch },
];

export default routerPublic;
