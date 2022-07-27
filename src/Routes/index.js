import Config from '~/Config';

//Pages
import Home from '~/Pages/Home';
import iPhone from '~/Pages/iPhone';
import iPad from '~/Pages/iPad';
import PhuKien from '~/Pages/PhuKien';

// Public Routes
const PublicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.iphone, component: iPhone },
    { path: Config.routes.ipad, component: iPad },
    { path: Config.routes.phu_kien, component: PhuKien },
];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
