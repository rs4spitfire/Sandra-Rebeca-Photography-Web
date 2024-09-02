import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';


import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import PricingPage from 'src/content/pages/Business';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Main Pages


const HomePage = Loader(lazy(() => import('src/content/pages/Home')));
const PortfolioPage = Loader(lazy(() => import('src/content/pages/Portfolio')));
const AboutMePage = Loader(lazy(() => import('src/content/pages/AboutMe')));
const ContactMePage = Loader(lazy(() => import('src/content/pages/ContactMe')));
const BusinessPage = Loader(lazy(()=>import('src/content/pages/Business')))
//Portfolio Pages
const EventPage = Loader(lazy(() => import('src/content/pages/Portfolio/Events')));
const FamilyPage = Loader(lazy(() => import('src/content/pages/Portfolio/Family')));
const NaturePage = Loader(lazy(()=> import('src/content/pages/Portfolio/Nature')));
const PortraitPage = Loader(lazy(() => import('src/content/pages/Portfolio/Portrait')));
const NewbornPage = Loader(lazy(() => import('src/content/pages/Portfolio/Newborn')));
const RealEstatePage = Loader(lazy(() => import('src/content/pages/Portfolio/RealEstate')));

//Family Galleries
const MarielaFamily = Loader(lazy(()=> import('src/content/pages/Portfolio/Family/Mariela')))
//Gallery Pages
const CarlasFamily = Loader(lazy(()=>import('src/content/pages/CarlasFamily')))
// Dashboards

const Home = Loader(lazy(() => import('src/content/dashboards/Home')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'pages',
        children:[
          {
            path: 'Portfolio',
            element:<PortfolioPage />
            
          },
          {
            path: 'AboutMe',
            element:<StatusComingSoon />
          },
          {
            path: 'ContactMe',
            element:<StatusComingSoon />
          },
          {
            path: 'Business',
            element:<PricingPage />
          }
        ]
      },
      {
        path: '/pages/Portfolio',
        children:[          
            {
              path:'EVENTS',
              element: <EventPage />
            },
            {
              path:'FAMILY',
              element: <FamilyPage />
            },
            {
              path:'NATURE',
              element: <NaturePage />
            },
            {
              path:'NEWBORN',
              element: <NewbornPage />
            },
            {
              path:'PORTRAITS',
              element: <PortraitPage />
            }        
          ]
      },
      {
        path:'/pages/Portfolio/FAMILY',
        children:[
          {
            path:'Mariela%20Family',
            element: <MarielaFamily />
          }
        ]
      },
      {
        path:'/pages/Galleries',
        children:[
          {
            path:'PayneFamily',
            element: <CarlasFamily />
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="Home" replace />
      },
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
