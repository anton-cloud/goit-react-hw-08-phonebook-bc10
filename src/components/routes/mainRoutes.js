import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: '/',
    component:lazy(() => import('../pages/homePage/HomePage' /* webpackChunkName: "Homepage" */)),
    exact: true,
    private: false,
    restricted: false,
  },
  {
    name: "Contacts",
    path: '/contacts',
    component:lazy(() => import('../pages/contactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */)),
    exact: true,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Login ",
    path: '/login',
    component:lazy(() => import('../pages/authPages/AuthPages' /* webpackChunkName: "AuthPages" */)),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Register ",
    path: '/register',
    component:lazy(() => import('../pages/authPages/AuthPages' /* webpackChunkName: "AuthPages" */)),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  }
]

export default mainRoutes;