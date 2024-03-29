import React from 'react';
import loadable from '@loadable/component';
import getPageDataLoadingAPI from './containers/pageDataLoadingAPI';
import { NotFoundPage } from './containers';
import { medlaProjects, externalProjects } from './projects-config'

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

const pageDataLoadingAPI = getPageDataLoadingAPI();

const AboutPage = loadable(() => import(/* webpackChunkName: "AboutPage" */ './containers/AboutPage/AboutPage'));
const AuthenticationPage = loadable(() => import(/* webpackChunkName: "AuthenticationPage" */ './containers/AuthenticationPage/AuthenticationPage'));
const CheckoutPage = loadable(() => import(/* webpackChunkName: "CheckoutPage" */ './containers/CheckoutPage/CheckoutPage'));
const ContactDetailsPage = loadable(() => import(/* webpackChunkName: "ContactDetailsPage" */ './containers/ContactDetailsPage/ContactDetailsPage'));
const EditListingPage = loadable(() => import(/* webpackChunkName: "EditListingPage" */ './containers/EditListingPage/EditListingPage'));
const EmailVerificationPage = loadable(() => import(/* webpackChunkName: "EmailVerificationPage" */ './containers/EmailVerificationPage/EmailVerificationPage'));
const FAQPage = loadable(() => import(/* webpackChunkName: "FAQPage" */ './containers/FAQPage/FAQPage'));
const InboxPage = loadable(() => import(/* webpackChunkName: "InboxPage" */ './containers/InboxPage/InboxPage'));
const LandingPage = loadable(() => import(/* webpackChunkName: "LandingPage" */ './containers/LandingPage/LandingPage'));
const LandingPageMunicipality = loadable(() => import(/* webpackChunkName: "LandingPageMunicipality" */ './containers/LandingPageMunicipality/LandingPageMunicipality'));
const ListingPage = loadable(() => import(/* webpackChunkName: "ListingPage" */ /* webpackPrefetch: true */ './containers/ListingPage/ListingPage'));
const CompanyPage = loadable(() => import(/* webpackChunkName: "CompanyPage" */ /* webpackPrefetch: true */ './containers/CompanyPage/CompanyPage'));
const ProjectPage = loadable(() => import(/* webpackChunkName: "ProjectPage" */ /* webpackPrefetch: true */ './containers/ProjectPage/ProjectPage'));
const ProjectEmbed = loadable(() => import(/* webpackChunkName: "ProjectEmbed" */ /* webpackPrefetch: true */ './containers/ProjectPage/ProjectEmbed'));
const CityPage = loadable(() => import(/* webpackChunkName: "CityPage" */ /* webpackPrefetch: true */ './containers/CityPage/CityPage'));
const ManageListingsPage = loadable(() => import(/* webpackChunkName: "ManageListingsPage" */ './containers/ManageListingsPage/ManageListingsPage'));
const NewUserPage = loadable(() => import( /* webpackChunkName: "NewUserPage" */ './containers/NewUserPage/NewUserPage'));
const NewProjectUserPage = loadable(() => import( /* webpackChunkName: "NewProjectUserPage" */ './containers/NewProjectUserPage/NewProjectUserPage'));
const ConnectMunicipalityPage = loadable(() => import( /* webpackChunkName: "ConnectMunicipalityPage" */ './containers/ConnectMunicipalityPage/ConnectMunicipalityPage'));
const ConnectCompanyPage = loadable(() => import( /* webpackChunkName: "ConnectCompanyPage" */ './containers/ConnectCompanyPage/ConnectCompanyPage'));

const PasswordChangePage = loadable(() => import(/* webpackChunkName: "PasswordChangePage" */ './containers/PasswordChangePage/PasswordChangePage'));
const PasswordRecoveryPage = loadable(() => import(/* webpackChunkName: "PasswordRecoveryPage" */ './containers/PasswordRecoveryPage/PasswordRecoveryPage'));
const PasswordResetPage = loadable(() => import(/* webpackChunkName: "PasswordResetPage" */ './containers/PasswordResetPage/PasswordResetPage'));
const PaymentMethodsPage = loadable(() => import(/* webpackChunkName: "PaymentMethodsPage" */ './containers/PaymentMethodsPage/PaymentMethodsPage'));
const PrivacyPolicyPage = loadable(() => import(/* webpackChunkName: "PrivacyPolicyPage" */ './containers/PrivacyPolicyPage/PrivacyPolicyPage'));
const ProjectsMapPage = loadable(() => import(/* webpackChunkName: "ProjectsMapPage" */ './containers/ProjectsMapPage/ProjectsMapPage'));
const ProfilePage = loadable(() => import(/* webpackChunkName: "ProfilePage" */ './containers/ProfilePage/ProfilePage'));
const ProfileSettingsPage = loadable(() => import(/* webpackChunkName: "ProfileSettingsPage" */ './containers/ProfileSettingsPage/ProfileSettingsPage'));
const NotificationSettingsPage = loadable(() => import(/* webpackChunkName: "NotificationSettingsPage" */ './containers/NotificationSettingsPage/NotificationSettingsPage'));
const SearchPage = loadable(() => import(/* webpackChunkName: "SearchPage" */ /* webpackPrefetch: true */  './containers/SearchPage/SearchPage'));
const StripePayoutPage = loadable(() => import(/* webpackChunkName: "StripePayoutPage" */ './containers/StripePayoutPage/StripePayoutPage'));
const TermsOfServicePage = loadable(() => import(/* webpackChunkName: "TermsOfServicePage" */ './containers/TermsOfServicePage/TermsOfServicePage'));
const SiteMapPage = loadable(() => import(/* webpackChunkName: "SiteMapPage" */ './containers/SiteMapPage/SiteMapPage'));
const TransactionPage = loadable(() => import(/* webpackChunkName: "TransactionPage" */ './containers/TransactionPage/TransactionPage'));

// Styleguide helps you to review current components and develop new ones
const StyleguidePage = loadable(() => import(/* webpackChunkName: "StyleguidePage" */ './containers/StyleguidePage/StyleguidePage'));

export const ACCOUNT_SETTINGS_PAGES = ['NotificationSettingsPage', 'ProfileSettingsPage', 'ContactDetailsPage', 'PasswordChangePage'];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;
const medlaProjectPaths = medlaProjects.map(p => (
    {
      path: `/${p.Projektnamn
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/å/g, 'a')
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/\W/g, "-")}`,
        name: `/${p.Projektnamn
          .replace(/\W/g, "-")}`,
      component: ProjectPage,
      extraProps: { projectId: p.Områdes_ID },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: p.Områdes_ID })
    }
));
const medlaProjectPathsEn = medlaProjects.map(p => (
  {
    path: `/en/${p.Projektnamn
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/\W/g, "-")}`,
      name: `/${p.Projektnamn
        .replace(/\W/g, "-")}`,
    component: ProjectPage,
    extraProps: { projectId: p.Områdes_ID },
    loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: p.Områdes_ID })
  }
));
const medlaProjectEmbedPaths = medlaProjects.map(p => (
  {
    path: `/embed/${p.Projektnamn
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/\W/g, "-")}`,
      name: `/${p.Projektnamn
        .replace(/\W/g, "-")}`,
    component: ProjectEmbed,
    extraProps: { projectId: p.Områdes_ID },
    loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: p.Områdes_ID })
  }
));
const externalProjectPaths = externalProjects.map(p => (
  {
    path: `/${p.Projektnamn
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/\W/g, "-")}`,
    name: `/${p.Projektnamn
      .replace(/\W/g, "-")}`,
    component: ProjectPage,
    extraProps: { projectId: p.Områdes_ID },
    loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: p.Områdes_ID })
  }
));

const externalProjectPathsEn = externalProjects.map(p => (
  {
    path: `/en/${p.Projektnamn
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/\W/g, "-")}`,
    name: `/${p.Projektnamn
      .replace(/\W/g, "-")}`,
    component: ProjectPage,
    extraProps: { projectId: p.Områdes_ID },
    loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: p.Områdes_ID })
  }
));

// NOTE: Most server-side endpoints are prefixed with /api. Requests to those
// endpoints are indended to be handled in the server instead of the browser and
// they will not render the application. So remember to avoid routes starting
// with /api and if you encounter clashing routes see server/index.js if there's
// a conflicting route defined there.

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },

    {
      path: '/Municipality',
      name: 'LandingPage',
      component: LandingPageMunicipality,
    },


    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/vanliga-fragor',
      name: 'FAQPage',
      component: FAQPage,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: SearchPage,
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/s/jobs',
      name: 'SearchJobsPage',
      component: SearchPage,
      auth: true,
      authPage: 'LoginPage',
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/p',
      name: 'ProjectBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/c/:slug/:id',
      name: 'CompanyPage',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: CheckoutPage,
      setInitialValues: pageDataLoadingAPI.CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/c/:slug/:id/:variant',
      name: 'CompanyPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/l/:slug/:id/:type/:tab',
      name: 'EditListingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/c/:id',
      name: 'CompanyPageCanonical',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: ProfilePage,
      loadData: pageDataLoadingAPI.ProfilePage.loadData,
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ProfileSettingsPage,
    },
    {
      path: '/p/:id',
      name: 'ProjectPage',
      component: ProjectPage,
      loadData: pageDataLoadingAPI.ProjectPage.loadData,
    },
    {
      path: '/notification-settings',
      name: 'NotificationSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: NotificationSettingsPage,
    },

    {
      path: '/ny-anvandare',
      name: 'NewUserPage',
      component: NewUserPage,
    },

    {
      path: '/anslut-projekt',
      name: 'NewProjectUserPage',
      component: NewProjectUserPage,
    },

    {
      path: '/anslut-kommun',
      name: 'ConnectMunicipalityPage',
      component: ConnectMunicipalityPage,
    },

    {
      path: '/registrera-foretag',
      name: 'ConnectMunicipalityPage',
      component: ConnectCompanyPage,
    },


    // Note: authenticating with IdP (e.g. Facebook) expects that /login path exists
    // so that in the error case users can be redirected back to the LoginPage
    // In case you change this, remember to update the route in server/api/auth/loginWithIdp.js
    {
      path: '/login',
      name: 'LoginPage',
      component: AuthenticationPage,
      extraProps: { tab: 'login' },
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: AuthenticationPage,
      extraProps: { tab: 'signup' },
    },
    {
      path: '/confirm',
      name: 'ConfirmPage',
      component: AuthenticationPage,
      extraProps: { tab: 'confirm' },
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: PasswordRecoveryPage,
    },
    {
      path: '/nytt-losenord',
      name: 'PasswordRecoveryPage',
      component: PasswordRecoveryPage,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: InboxPage,
      loadData: pageDataLoadingAPI.InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'customer' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: pageDataLoadingAPI.TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'provider' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ManageListingsPage,
      loadData: pageDataLoadingAPI.ManageListingsPage.loadData,
    },
    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="NotificationSettingsPage" />,
    },
    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ContactDetailsPage,
      loadData: pageDataLoadingAPI.ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: PasswordChangePage,
    },
    {
      path: '/account/payments',
      name: 'StripePayoutPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payment-methods',
      name: 'PaymentMethodsPage',
      auth: true,
      authPage: 'LoginPage',
      component: PaymentMethodsPage,
      loadData: pageDataLoadingAPI.PaymentMethodsPage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: TermsOfServicePage,
    },
    {
      path: '/sitemap',
      name: 'SiteMapPage',
      component: SiteMapPage,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: PrivacyPolicyPage,
    },
    {
      path: '/projects',
      name: 'ProjectsMapPage',
      component: ProjectsMapPage,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: StyleguidePage,
      extraProps: { raw: true },
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },


    //English versions

    
    {
      path: '/en/',
      name: 'LandingPageEn',
      component: LandingPage,
    },
    {
      path: '/en/about',
      name: 'AboutPageEn',
      component: AboutPage,
    },
    {
      path: '/en/about',
      name: 'AboutPageEn',
      component: AboutPage,
    },
    {
      path: '/en/vanliga-fragor',
      name: 'FAQPageEn',
      component: FAQPage,
    },
    {
      path: '/en/s',
      name: 'SearchPageEn',
      component: SearchPage,
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/en/s/jobs',
      name: 'SearchJobsPageEn',
      component: SearchPage,
      auth: true,
      authPage: 'LoginPage',
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/en/l',
      name: 'ListingBasePageEn',
      component: RedirectToLandingPage,
    },
    {
      path: '/en/p',
      name: 'ProjectBasePageEn',
      component: RedirectToLandingPage,
    },
    {
      path: '/en/l/:slug/:id',
      name: 'ListingPageEn',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/c/:slug/:id',
      name: 'CompanyPageEn',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/l/:slug/:id/checkout',
      name: 'CheckoutPageEn',
      auth: true,
      component: CheckoutPage,
      setInitialValues: pageDataLoadingAPI.CheckoutPage.setInitialValues,
    },
    {
      path: '/en/l/:slug/:id/:variant',
      name: 'ListingPageVariantEn',
      auth: true,
      authPage: 'LoginPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/c/:slug/:id/:variant',
      name: 'CompanyPageVariantEn',
      auth: true,
      authPage: 'LoginPage',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/l/new',
      name: 'NewListingPageEn',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/en/l/:slug/:id/:type/:tab',
      name: 'EditListingPageEn',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },
    {
      path: '/en/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPageEn',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/en/l/:id',
      name: 'ListingPageCanonicalEn',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/c/:id',
      name: 'CompanyPageCanonicalEn',
      component: CompanyPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/en/u',
      name: 'ProfileBasePageEn',
      component: RedirectToLandingPage,
    },
    {
      path: '/en/u/:id',
      name: 'ProfilePageEn',
      component: ProfilePage,
      loadData: pageDataLoadingAPI.ProfilePage.loadData,
    },
    {
      path: '/en/profile-settings',
      name: 'ProfileSettingsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: ProfileSettingsPage,
    },
    {
      path: '/en/p/:id',
      name: 'ProjectPageEn',
      component: ProjectPage,
      loadData: pageDataLoadingAPI.ProjectPage.loadData,
    },
    {
      path: '/en/notification-settings',
      name: 'NotificationSettingsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: NotificationSettingsPage,
    },

    {
      path: '/en/ny-anvandare',
      name: 'NewUserPageEn',
      component: NewUserPage,
    },

    {
      path: '/en/anslut-projekt',
      name: 'NewProjectUserPageEn',
      component: NewProjectUserPage,
    },

    {
      path: '/en/anslut-kommun',
      name: 'ConnectMunicipalityPageEn',
      component: ConnectMunicipalityPage,
    },

    {
      path: '/en/registrera-foretag',
      name: 'ConnectMunicipalityPageEn',
      component: ConnectCompanyPage,
    },


    // Note: authenticating with IdP (e.g. Facebook) expects that /login path exists
    // so that in the error case users can be redirected back to the LoginPage
    // In case you change this, remember to update the route in server/api/auth/loginWithIdp.js
    {
      path: '/en/login',
      name: 'LoginPageEn',
      component: AuthenticationPage,
      extraProps: { tab: 'login' },
    },
    {
      path: '/en/signup',
      name: 'SignupPageEn',
      component: AuthenticationPage,
      extraProps: { tab: 'signup' },
    },
    {
      path: '/en/confirm',
      name: 'ConfirmPageEn',
      component: AuthenticationPage,
      extraProps: { tab: 'confirm' },
    },
    {
      path: '/en/recover-password',
      name: 'PasswordRecoveryPageEn',
      component: PasswordRecoveryPage,
    },
    {
      path: '/en/nytt-losenord',
      name: 'PasswordRecoveryPageEn',
      component: PasswordRecoveryPage,
    },
    {
      path: '/en/inbox',
      name: 'InboxBasePageEn',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/en/inbox/:tab',
      name: 'InboxPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: InboxPage,
      loadData: pageDataLoadingAPI.InboxPage.loadData,
    },
    {
      path: '/en/order/:id',
      name: 'OrderPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/en/order/:id/details',
      name: 'OrderDetailsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'customer' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: pageDataLoadingAPI.TransactionPage.setInitialValues,
    },
    {
      path: '/en/sale/:id',
      name: 'SalePageEn',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/en/sale/:id/details',
      name: 'SaleDetailsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'provider' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/en/listings',
      name: 'ManageListingsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: ManageListingsPage,
      loadData: pageDataLoadingAPI.ManageListingsPage.loadData,
    },
    {
      path: '/en/account',
      name: 'AccountSettingsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="NotificationSettingsPage" />,
    },
    {
      path: '/en/account/contact-details',
      name: 'ContactDetailsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: ContactDetailsPage,
      loadData: pageDataLoadingAPI.ContactDetailsPage.loadData,
    },
    {
      path: '/en/account/change-password',
      name: 'PasswordChangePageEn',
      auth: true,
      authPage: 'LoginPage',
      component: PasswordChangePage,
    },
    {
      path: '/en/account/payments',
      name: 'StripePayoutPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/en/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/en/account/payment-methods',
      name: 'PaymentMethodsPageEn',
      auth: true,
      authPage: 'LoginPage',
      component: PaymentMethodsPage,
      loadData: pageDataLoadingAPI.PaymentMethodsPage.loadData,
    },
    {
      path: '/en/terms-of-service',
      name: 'TermsOfServicePageEn',
      component: TermsOfServicePage,
    },
    {
      path: '/en/sitemap',
      name: 'SiteMapPageEn',
      component: SiteMapPage,
    },
    {
      path: '/en/privacy-policy',
      name: 'PrivacyPolicyPageEn',
      component: PrivacyPolicyPage,
    },
    {
      path: '/en/projects',
      name: 'ProjectsMapPageEn',
      component: ProjectsMapPage,
    },
    {
      path: '/en/styleguide',
      name: 'StyleguideEn',
      component: StyleguidePage,
    },
    {
      path: '/en/styleguide/g/:group',
      name: 'StyleguideGroupEn',
      component: StyleguidePage,
    },
    {
      path: '/en/styleguide/c/:component',
      name: 'StyleguideComponentEn',
      component: StyleguidePage,
    },
    {
      path: '/en/styleguide/c/:component/:example',
      name: 'StyleguideComponentExampleEn',
      component: StyleguidePage,
    },
    {
      path: '/en/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRawEn',
      component: StyleguidePage,
      extraProps: { raw: true },
    },
    {
      path: '/en/notfound',
      name: 'NotFoundPageEn',
      component: props => <NotFoundPage {...props} />,
    },

    //medlaProject links start

    {
      path: '/umea',
      name: 'Umeå',
      component: CityPage,
      extraProps: { projectId: 'umea' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: 'umea' })
    },

    //medlaProject and externalProject from projects-config.js

    ...medlaProjectPaths,
    ...medlaProjectPathsEn,
    ...medlaProjectEmbedPaths,
    ...externalProjectPaths,
    ...externalProjectPathsEn,

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: PasswordResetPage,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: EmailVerificationPage,
      loadData: pageDataLoadingAPI.EmailVerificationPage.loadData,
    },
  ];
};

export default routeConfiguration;
