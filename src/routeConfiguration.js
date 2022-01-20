import React from 'react';
import loadable from '@loadable/component';
import getPageDataLoadingAPI from './containers/pageDataLoadingAPI';
import { NotFoundPage } from './containers';

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
const ListingPage = loadable(() => import(/* webpackChunkName: "ListingPage" */ /* webpackPrefetch: true */ './containers/ListingPage/ListingPage'));
const CompanyPage = loadable(() => import(/* webpackChunkName: "CompanyPage" */ /* webpackPrefetch: true */ './containers/CompanyPage/CompanyPage'));
const ProjectPage = loadable(() => import(/* webpackChunkName: "ProjectPage" */ /* webpackPrefetch: true */ './containers/ProjectPage/ProjectPage'));
const ManageListingsPage = loadable(() => import(/* webpackChunkName: "ManageListingsPage" */ './containers/ManageListingsPage/ManageListingsPage'));
const NewUserPage = loadable(() => import( /* webpackChunkName: "NewUserPage" */ './containers/NewUserPage/NewUserPage'));
const NewProjectUserPage = loadable(() => import( /* webpackChunkName: "NewProjectUserPage" */ './containers/NewProjectUserPage/NewProjectUserPage'));

const PasswordChangePage = loadable(() => import(/* webpackChunkName: "PasswordChangePage" */ './containers/PasswordChangePage/PasswordChangePage'));
const PasswordRecoveryPage = loadable(() => import(/* webpackChunkName: "PasswordRecoveryPage" */ './containers/PasswordRecoveryPage/PasswordRecoveryPage'));
const PasswordResetPage = loadable(() => import(/* webpackChunkName: "PasswordResetPage" */ './containers/PasswordResetPage/PasswordResetPage'));
const PaymentMethodsPage = loadable(() => import(/* webpackChunkName: "PaymentMethodsPage" */ './containers/PaymentMethodsPage/PaymentMethodsPage'));
const PrivacyPolicyPage = loadable(() => import(/* webpackChunkName: "PrivacyPolicyPage" */ './containers/PrivacyPolicyPage/PrivacyPolicyPage'));
const ProfilePage = loadable(() => import(/* webpackChunkName: "ProfilePage" */ './containers/ProfilePage/ProfilePage'));
const ProfileSettingsPage = loadable(() => import(/* webpackChunkName: "ProfileSettingsPage" */ './containers/ProfileSettingsPage/ProfileSettingsPage'));
const NotificationSettingsPage = loadable(() => import(/* webpackChunkName: "NotificationSettingsPage" */ './containers/NotificationSettingsPage/NotificationSettingsPage'));
const SearchPage = loadable(() => import(/* webpackChunkName: "SearchPage" */ /* webpackPrefetch: true */  './containers/SearchPage/SearchPage'));
const StripePayoutPage = loadable(() => import(/* webpackChunkName: "StripePayoutPage" */ './containers/StripePayoutPage/StripePayoutPage'));
const TermsOfServicePage = loadable(() => import(/* webpackChunkName: "TermsOfServicePage" */ './containers/TermsOfServicePage/TermsOfServicePage'));
const TransactionPage = loadable(() => import(/* webpackChunkName: "TransactionPage" */ './containers/TransactionPage/TransactionPage'));

// Styleguide helps you to review current components and develop new ones
const StyleguidePage = loadable(() => import(/* webpackChunkName: "StyleguidePage" */ './containers/StyleguidePage/StyleguidePage'));

export const ACCOUNT_SETTINGS_PAGES = ['NotificationSettingsPage', 'ProfileSettingsPage', 'ContactDetailsPage', 'PasswordChangePage'];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;

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
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: PrivacyPolicyPage,
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

    {
      path: '/lillmossen',
      name: 'Lillmossen',
      component: ProjectPage,
      extraProps: { projectId: 'lillmossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: 'lillmossen' })
    },

    {
      path: '/hybrit',
      name: 'Hybrit',
      component: ProjectPage,
      extraProps: { projectId: 'hybrit' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: 'hybrit' })
    },

    //Vindbrukskollen project links start

    {
      path: '/kattorp-1',
      name: 'Kattorp 1',
      component: ProjectPage,
      extraProps: { projectId: '0584-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-018' })
    },
    {
      path: '/barstad-2',
      name: 'Bårstad 2',
      component: ProjectPage,
      extraProps: { projectId: '0584-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-019' })
    },
    {
      path: '/åbylund',
      name: 'Åbylund',
      component: ProjectPage,
      extraProps: { projectId: '0584-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-020' })
    },
    {
      path: '/bondorlunda',
      name: 'Bondorlunda',
      component: ProjectPage,
      extraProps: { projectId: '0584-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-021' })
    },
    {
      path: '/granby',
      name: 'Granby',
      component: ProjectPage,
      extraProps: { projectId: '0584-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-022' })
    },
    {
      path: '/brodderud',
      name: 'Brodderud',
      component: ProjectPage,
      extraProps: { projectId: '1493-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-008' })
    },
    {
      path: '/sidensjo',
      name: 'Sidensjö',
      component: ProjectPage,
      extraProps: { projectId: '2284-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-017' })
    },
    {
      path: '/holmsjoasen',
      name: 'Holmsjöåsen',
      component: ProjectPage,
      extraProps: { projectId: '2260-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-001' })
    },
    {
      path: '/isbillen-kullmyran',
      name: 'Isbillen-Kullmyran',
      component: ProjectPage,
      extraProps: { projectId: '2283-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-023' })
    },
    {
      path: '/jenasen',
      name: 'Jenåsen',
      component: ProjectPage,
      extraProps: { projectId: '2281-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-006' })
    },
    {
      path: '/kraktorpet',
      name: 'Kråktorpet',
      component: ProjectPage,
      extraProps: { projectId: '2281-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-007' })
    },
    {
      path: '/kampelandet',
      name: 'Kämpelandet',
      component: ProjectPage,
      extraProps: { projectId: '0583-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-014' })
    },
    {
      path: '/karmsjon',
      name: 'Kärmsjön',
      component: ProjectPage,
      extraProps: { projectId: '2283-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-024' })
    },
    {
      path: '/lindomsberget',
      name: 'Lindomsberget',
      component: ProjectPage,
      extraProps: { projectId: '2280-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-014' })
    },
    {
      path: '/vindkraftpark-langasen',
      name: 'Vindkraftpark Långåsen',
      component: ProjectPage,
      extraProps: { projectId: '2260-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-002' })
    },
    {
      path: '/mockelsjoberget',
      name: 'Möckelsjöberget',
      component: ProjectPage,
      extraProps: { projectId: '2280-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-008' })
    },
    {
      path: '/nylandsbergen,-getasen,-rodsjoasen.',
      name: 'Nylandsbergen, Getåsen, Rödsjöåsen.',
      component: ProjectPage,
      extraProps: { projectId: '2281-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-008' })
    },
    {
      path: '/ranasjon',
      name: 'Ranasjön',
      component: ProjectPage,
      extraProps: { projectId: '2283-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-025' })
    },
    {
      path: '/vaskinde-skaggs-3',
      name: 'Väskinde Skäggs 3',
      component: ProjectPage,
      extraProps: { projectId: '0980-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-044' })
    },
    {
      path: '/ödeby',
      name: 'Ödeby',
      component: ProjectPage,
      extraProps: { projectId: '0583-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-026' })
    },
    {
      path: '/medevi',
      name: 'Medevi',
      component: ProjectPage,
      extraProps: { projectId: '0583-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-027' })
    },
    {
      path: '/radasa',
      name: 'Rådåsa',
      component: ProjectPage,
      extraProps: { projectId: '0583-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-028' })
    },
    {
      path: '/åsa',
      name: 'Åsa',
      component: ProjectPage,
      extraProps: { projectId: '0583-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-029' })
    },
    {
      path: '/vindkraftpark-östavall',
      name: 'Vindkraftpark Östavall',
      component: ProjectPage,
      extraProps: { projectId: '2260-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-004' })
    },
    {
      path: '/klimpfjall',
      name: 'Klimpfjäll',
      component: ProjectPage,
      extraProps: { projectId: '2462-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-006' })
    },
    {
      path: '/storsjohojden',
      name: 'Storsjöhöjden',
      component: ProjectPage,
      extraProps: { projectId: '2283-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-030' })
    },
    {
      path: '/lojstahed',
      name: 'Lojstahed',
      component: ProjectPage,
      extraProps: { projectId: '0980-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-015' })
    },
    {
      path: '/klevberget-2',
      name: 'Klevberget 2',
      component: ProjectPage,
      extraProps: { projectId: '2260-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-009' })
    },
    {
      path: '/hornberget-etapp-2',
      name: "Hornberget etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-011' })
    },
    {
      path: '/blabergsliden',
      name: "Blåbergsliden",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-012' })
    },
    {
      path: '/ljusvattnet',
      name: "Ljusvattnet",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-013' })
    },
    {
      path: '/brinken',
      name: "Brinken",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-001' })
    },
    {
      path: '/dal',
      name: "Dal",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-005' })
    },
    {
      path: '/kullboarp',
      name: "Kullboarp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-016' })
    },
    {
      path: '/erikshester',
      name: "Erikshester",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-018' })
    },
    {
      path: '/underbacken',
      name: "Underbacken",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-016' })
    },
    {
      path: '/hovgarden-stavlosa',
      name: "Hovgården Stavlösa",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-008' })
    },
    {
      path: '/medhamra-1',
      name: "Medhamra 1",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-024' })
    },
    {
      path: '/medhamra-2',
      name: "Medhamra 2",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-025' })
    },
    {
      path: '/lau-liffride-nr-1-&-2',
      name: "Lau Liffride Nr 1 & 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-053' })
    },
    {
      path: '/hellvi-smojen',
      name: "Hellvi Smöjen",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-055' })
    },
    {
      path: '/hall-vindpark',
      name: "Hall Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-063' })
    },
    {
      path: '/storugns-vindpark',
      name: "Storugns vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-006' })
    },
    {
      path: '/risugns-vindpark',
      name: "Risugns Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-064' })
    },
    {
      path: '/yttre-stengrund',
      name: "Yttre stengrund",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-001' })
    },
    {
      path: '/utgrunden-i',
      name: "Utgrunden I",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-040' })
    },
    {
      path: '/nasby/överberg',
      name: "Näsby/Överberg",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-022' })
    },
    {
      path: '/fingal-af-boberg',
      name: "Fingal af Boberg",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-003' })
    },
    {
      path: '/östra-ljungby',
      name: "Östra Ljungby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-040' })
    },
    {
      path: '/vanga',
      name: "Vånga",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-068' })
    },
    {
      path: '/hangsdala-falan',
      name: "Hångsdala Falan",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-048' })
    },
    {
      path: '/ebborp-gardsverk',
      name: "Ebborp Gårdsverk",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-046' })
    },
    {
      path: '/kampelandet',
      name: "Kämpelandet",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-031' })
    },
    {
      path: '/hulterstad',
      name: "Hulterstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-050' })
    },
    {
      path: '/botterstad',
      name: "Bötterstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-051' })
    },
    {
      path: '/narvered',
      name: "Narvered",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-052' })
    },
    {
      path: '/vallerstads-östanback',
      name: "Vallerstads-Östanbäck",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-053' })
    },
    {
      path: '/vistena-15-2',
      name: "Vistena 15-2",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-059' })
    },
    {
      path: '/tungelunda-skeby',
      name: "Tungelunda Skeby",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-062' })
    },
    {
      path: '/bjalbo',
      name: "Bjälbo",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-064' })
    },
    {
      path: '/vistena-15-1',
      name: "Vistena 15-1",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-065' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-065' })
    },
    {
      path: '/vistena-18-1',
      name: "Vistena 18-1",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-066' })
    },
    {
      path: '/klackeborg',
      name: "Klackeborg",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-070' })
    },
    {
      path: '/ekebyborna-morby',
      name: "Ekebyborna-Mörby",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-032' })
    },
    {
      path: '/rocklunda',
      name: "Rocklunda",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-033' })
    },
    {
      path: '/vinberga',
      name: "Vinberga",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-035' })
    },
    {
      path: '/stenby-örvad',
      name: "Stenby-Örvad",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-036' })
    },
    {
      path: '/fossala',
      name: "Fossala",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-037' })
    },
    {
      path: '/varvs-skrikstad',
      name: "Varvs-Skrikstad",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-038' })
    },
    {
      path: '/storeberg',
      name: "Storeberg",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-039' })
    },
    {
      path: '/ratorp',
      name: "Råtorp",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-040' })
    },
    {
      path: '/boberg-3',
      name: "Boberg 3",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-041' })
    },
    {
      path: '/lunna',
      name: "Lunna",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-072' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-072' })
    },
    {
      path: '/haddestad',
      name: "Haddestad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-073' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-073' })
    },
    {
      path: '/haradsmossen',
      name: "Häradsmossen",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-075' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-075' })
    },
    {
      path: '/grupp-halleberga',
      name: "grupp Hälleberga",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-043' })
    },
    {
      path: '/skattegarden',
      name: "Skattegården",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-030' })
    },
    {
      path: '/skattegarden',
      name: "Skattegården",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-048' })
    },
    {
      path: '/kroppfjall-311',
      name: "Kroppfjäll 311",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-006' })
    },
    {
      path: '/hokensas',
      name: "Hökensås",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-050' })
    },
    {
      path: '/hovero',
      name: "Höverö",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-011' })
    },
    {
      path: '/brotorp',
      name: "Brotorp",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-023' })
    },
    {
      path: '/anneharad-vindkraft',
      name: "Annehärad vindkraft",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-007' })
    },
    {
      path: '/sodra-rada',
      name: "Södra råda",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-008' })
    },
    {
      path: '/östen-toreboda',
      name: "Östen Töreboda",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-017' })
    },
    {
      path: '/hallvadsholm',
      name: "Hällvadsholm",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-036' })
    },
    {
      path: '/synnerod',
      name: "Synneröd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-034' })
    },
    {
      path: '/deranas',
      name: "Deranäs",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-034' })
    },
    {
      path: '/gabrielsberget',
      name: "Gabrielsberget",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-003' })
    },
    {
      path: '/katoden-4',
      name: "Katoden 4",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-037' })
    },
    {
      path: '/fathult',
      name: "Fathult",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-039' })
    },
    {
      path: '/torkelsrud-munkedal',
      name: "Torkelsrud-Munkedal",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-038' })
    },
    {
      path: '/gunnagarden',
      name: "Gunnagården",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-049' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-049' })
    },
    {
      path: '/magderud---hanhult',
      name: "Magderud - Hanhult",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-003' })
    },
    {
      path: '/slageryd',
      name: "Slageryd",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-020' })
    },
    {
      path: '/vindpark-svartvallsberget',
      name: "Vindpark Svartvallsberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-010' })
    },
    {
      path: '/ed',
      name: "Ed",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-006' })
    },
    {
      path: '/lorby-7-lorby/ysane',
      name: "Lörby 7 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-013' })
    },
    {
      path: '/krassaberg',
      name: "Krassaberg",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-022' })
    },
    {
      path: '/bjorkekull-samf.:1',
      name: "Björkekull Samf.:1",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-023' })
    },
    {
      path: '/gunnilstorp-tranhult',
      name: "Gunnilstorp Tranhult",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-013' })
    },
    {
      path: '/projekt-stenhult',
      name: "Projekt Stenhult",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-015' })
    },
    {
      path: '/liared',
      name: "Liared",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-015' })
    },
    {
      path: '/fanneslunda',
      name: "Fänneslunda",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-016' })
    },
    {
      path: '/hacksvik-del-2',
      name: "Håcksvik del 2",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-006' })
    },
    {
      path: '/borgstena',
      name: "Borgstena",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-003' })
    },
    {
      path: '/dallebo',
      name: "Dållebo",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-014' })
    },
    {
      path: '/tritteboda',
      name: "Tritteboda",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-008' })
    },
    {
      path: '/aletrion-vindkraft',
      name: "Aletrion Vindkraft",
      component: ProjectPage,
      extraProps: { projectId: '1440-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1440-V-003' })
    },
    {
      path: '/hallabron-(boras)',
      name: "Hallabron (Borås)",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-018' })
    },
    {
      path: '/skollunga',
      name: "Sköllunga",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-021' })
    },
    {
      path: '/hangsdala-vindkraftverk-(ann-el-i)',
      name: "Hångsdala Vindkraftverk (Ann-El-i)",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-005' })
    },
    {
      path: '/nasbyholm',
      name: "Näsbyholm",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-014' })
    },
    {
      path: '/arkelstorp-brannskulla',
      name: "Arkelstorp-Brännskulla",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-075' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-075' })
    },
    {
      path: '/kvidinge-syllstorp',
      name: "Kvidinge Syllstorp",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-031' })
    },
    {
      path: '/äsphult-bjarnhult',
      name: "Äsphult-Bjärnhult",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-113' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-113' })
    },
    {
      path: '/östra-herrestad',
      name: "Östra Herrestad",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-068' })
    },
    {
      path: '/notteback-hult',
      name: "Nottebäck Hult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-038' })
    },
    {
      path: '/norrberget',
      name: "Norrberget",
      component: ProjectPage,
      extraProps: { projectId: '1981-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1981-V-001' })
    },
    {
      path: '/borgvattnet-2',
      name: "Borgvattnet 2",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-017' })
    },
    {
      path: '/bohult',
      name: "Bohult",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-001' })
    },
    {
      path: '/bred',
      name: "Bred",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-013' })
    },
    {
      path: '/garebo',
      name: "Gårebo",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-002' })
    },
    {
      path: '/älgon',
      name: "Älgön",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-009' })
    },
    {
      path: '/stora-lonhult',
      name: "Stora Lönhult",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-011' })
    },
    {
      path: '/milletorp',
      name: "Milletorp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-012' })
    },
    {
      path: '/backaskog',
      name: "Bäckaskog",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-006' })
    },
    {
      path: '/herrakra',
      name: "Herråkra",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-013' })
    },
    {
      path: '/tangabo',
      name: "Tångabo",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-015' })
    },
    {
      path: '/herrakra-hult',
      name: "Herråkra Hult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-020' })
    },
    {
      path: '/fagraboke',
      name: "Fagraböke",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-007' })
    },
    {
      path: '/övertorp',
      name: "Övertorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-046' })
    },
    {
      path: '/nedre-strand',
      name: "Nedre Strand",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-017' })
    },
    {
      path: '/tokaryd',
      name: "Tokaryd",
      component: ProjectPage,
      extraProps: { projectId: '1081-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1081-V-001' })
    },
    {
      path: '/hedagarden',
      name: "Hedagården",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-025' })
    },
    {
      path: '/vrams-gunnarstorp',
      name: "Vrams Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '1260-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1260-V-006' })
    },
    {
      path: '/fjelie-laxmans-åkarp',
      name: "Fjelie-Laxmans Åkarp",
      component: ProjectPage,
      extraProps: { projectId: '1262-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1262-V-008' })
    },
    {
      path: '/faringtofta',
      name: "Färingtofta",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-007' })
    },
    {
      path: '/faringtofta',
      name: "Färingtofta",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-017' })
    },
    {
      path: '/lydinge-benarp',
      name: "Lydinge-Benarp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-086' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-086' })
    },
    {
      path: '/skarhults-nygard',
      name: "Skarhults nygård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-019' })
    },
    {
      path: '/hjularod',
      name: "Hjularöd",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-051' })
    },
    {
      path: '/vegeholm',
      name: "Vegeholm",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-003' })
    },
    {
      path: '/erikstads-karr',
      name: "Erikstads-Kärr",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-021' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-015' })
    },
    {
      path: '/åraslov',
      name: "Åraslöv",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-008' })
    },
    {
      path: '/hallevadsholm-vaster',
      name: "Hällevadsholm Väster",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-013' })
    },
    {
      path: '/hallevadsholm-v',
      name: "Hällevadsholm V",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-017' })
    },
    {
      path: '/hallevadsholm-vaster',
      name: "Hällevadsholm Väster",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-025' })
    },
    {
      path: '/vindkraftprojekt-skyas',
      name: "Vindkraftprojekt Skyås",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-004' })
    },
    {
      path: '/bonhult-älmhult',
      name: "Bönhult-Älmhult",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-040' })
    },
    {
      path: '/froslida',
      name: "Fröslida",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-004' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-044' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-047' })
    },
    {
      path: '/gunnarsvattnets-vindpark',
      name: "Gunnarsvattnets vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-012' })
    },
    {
      path: '/edsleskogs-hult',
      name: "Edsleskogs Hult",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-001' })
    },
    {
      path: '/vindpark-edsleskog',
      name: "Vindpark Edsleskog",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-008' })
    },
    {
      path: '/hocksjon',
      name: "Hocksjön",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-002' })
    },
    {
      path: '/bergvind-annefors',
      name: "Bergvind Annefors",
      component: ProjectPage,
      extraProps: { projectId: '2121-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2121-V-001' })
    },
    {
      path: '/norrhalsinge-vindpark',
      name: "Norrhälsinge vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-010' })
    },
    {
      path: '/norrhalsinge-vindpark',
      name: "Norrhälsinge vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-006' })
    },
    {
      path: '/sandruder',
      name: "Sandruder",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-014' })
    },
    {
      path: '/munstorp-7043',
      name: "MUNSTORP 7043",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-028' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1260-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1260-V-004' })
    },
    {
      path: '/virke',
      name: "Virke",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-011' })
    },
    {
      path: '/baretofta',
      name: "Bäretofta",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-030' })
    },
    {
      path: '/hjaras',
      name: "Hjärås",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-039' })
    },
    {
      path: '/vallarod-bjornekulla',
      name: "Vallaröd Björnekulla",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-005' })
    },
    {
      path: '/broby',
      name: "Broby",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-006' })
    },
    {
      path: '/vallarod-kvidinge',
      name: "Vallaröd Kvidinge",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-009' })
    },
    {
      path: '/frestensfalla',
      name: "Frestensfälla",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-012' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-075' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-075' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-030' })
    },
    {
      path: '/munkarynga',
      name: "Munkarynga",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-023' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-009' })
    },
    {
      path: '/manstorp',
      name: "Månstorp",
      component: ProjectPage,
      extraProps: { projectId: '1262-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1262-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-045' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1233-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1233-V-006' })
    },
    {
      path: '/backaskog',
      name: "Bäckaskog",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-008' })
    },
    {
      path: '/verboberget',
      name: "Verboberget",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-004' })
    },
    {
      path: '/horreds-lindhult',
      name: "Horreds-Lindhult",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-001' })
    },
    {
      path: '/orrmosshojden',
      name: "Orrmosshöjden",
      component: ProjectPage,
      extraProps: { projectId: '1863-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1863-V-001' })
    },
    {
      path: '/langsjoby',
      name: "Långsjöby",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-005' })
    },
    {
      path: '/brant-kullsjoliden',
      name: "Bränt-Kullsjöliden",
      component: ProjectPage,
      extraProps: { projectId: '2404-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2404-V-002' })
    },
    {
      path: '/vastermark',
      name: "Västermark",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-034' })
    },
    {
      path: '/holmon---sodra',
      name: "Holmön - södra",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-020' })
    },
    {
      path: '/holmon---norra',
      name: "Holmön - norra",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-019' })
    },
    {
      path: '/nedersånna-/-7042',
      name: "NEDERSÅNNA / 7042",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-032' })
    },
    {
      path: '/bodberget---norra',
      name: "Bodberget - norra",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-002' })
    },
    {
      path: '/bodberget---ostra',
      name: "Bodberget - östra",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-004' })
    },
    {
      path: '/bjursele',
      name: "Bjursele",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-005' })
    },
    {
      path: '/barslov',
      name: "Bårslöv",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-088' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-088' })
    },
    {
      path: '/skephults-backen',
      name: "Skephults-Backen",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-028' })
    },
    {
      path: '/sannamad',
      name: "Sannamåd",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-009' })
    },
    {
      path: '/skaramala',
      name: "Skåramåla",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-005' })
    },
    {
      path: '/krokshult',
      name: "Krokshult",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-006' })
    },
    {
      path: '/salvaryd',
      name: "Salvaryd",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-024' })
    },
    {
      path: '/ellanda',
      name: "Ellanda",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-009' })
    },
    {
      path: '/öja',
      name: "Öja",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-010' })
    },
    {
      path: '/sannamad',
      name: "Sånnamad",
      component: ProjectPage,
      extraProps: { projectId: '0765-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0765-V-002' })
    },
    {
      path: '/ljunggardskop',
      name: "Ljunggårdsköp",
      component: ProjectPage,
      extraProps: { projectId: '0765-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0765-V-003' })
    },
    {
      path: '/åreved-schedingsnas',
      name: "Åreved Schedingsnäs",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-008' })
    },
    {
      path: '/jokkmokksliden',
      name: "Jokkmokksliden",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-007' })
    },
    {
      path: '/fanneslunda-del-1',
      name: "Fänneslunda Del 1",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-017' })
    },
    {
      path: '/stora-kettstaka',
      name: "Stora Kettstaka",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-006' })
    },
    {
      path: '/nord-billingen',
      name: "Nord Billingen",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-041' })
    },
    {
      path: '/ättersta',
      name: "Ättersta",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-008' })
    },
    {
      path: '/stora-istad-ii',
      name: "Stora Istad II",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-008' })
    },
    {
      path: '/aska',
      name: "Aska",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-023' })
    },
    {
      path: '/salsjon',
      name: "Salsjön",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-026' })
    },
    {
      path: '/klinte-klinte-s:43,-eksebo-kraft-2-[klinte-1-henni',
      name: "Klinte Klinte s:43, Eksebo kraft 2 [Klinte 1 Henni",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-040' })
    },
    {
      path: '/brotorp-2',
      name: "Brotorp 2",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-022' })
    },
    {
      path: '/othem-österby-tornsvalan',
      name: "Othem Österby Tornsvalan",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-042' })
    },
    {
      path: '/vaskinde-skaggs-1',
      name: "Väskinde Skäggs 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-043' })
    },
    {
      path: '/boberg-2',
      name: "Boberg 2",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-023' })
    },
    {
      path: '/skuruberget',
      name: "Skuruberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-016' })
    },
    {
      path: '/trattberget,-skallberget.',
      name: "Trattberget, Skallberget.",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-018' })
    },
    {
      path: '/gronmyrberget',
      name: "Grönmyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-018' })
    },
    {
      path: '/storfall',
      name: "Storfall",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-007' })
    },
    {
      path: '/portberget',
      name: "Portberget",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-010' })
    },
    {
      path: '/blackfjallet',
      name: "Blackfjället",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-020' })
    },
    {
      path: '/brattmyrliden---lidenprojekten',
      name: "Brattmyrliden - Lidenprojekten",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-021' })
    },
    {
      path: '/blodrotberget',
      name: "Blodrotberget",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-022' })
    },
    {
      path: '/bursjoliden',
      name: "Bursjöliden",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-023' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-014' })
    },
    {
      path: '/porsgol',
      name: "Porsgöl",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-015' })
    },
    {
      path: '/norrhalsinge-(jarnblasten)',
      name: "Norrhälsinge (Järnblästen)",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-004' })
    },
    {
      path: '/borstad-2',
      name: "Börstad 2",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-003' })
    },
    {
      path: '/frideborg',
      name: "Frideborg",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-013' })
    },
    {
      path: '/vkv_lin-001',
      name: "vkv_lin-001",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-002' })
    },
    {
      path: '/vkv_lin-012',
      name: "vkv_lin-012",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-011' })
    },
    {
      path: '/borringe-1',
      name: "Borringe 1",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-002' })
    },
    {
      path: '/langeryd-i',
      name: "Långeryd I",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-007' })
    },
    {
      path: '/langeryd-ii',
      name: "Långeryd II",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-008' })
    },
    {
      path: '/grupp-brotorp',
      name: "Grupp Brotorp",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-018' })
    },
    {
      path: '/askegarden',
      name: "Askegården",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-002' })
    },
    {
      path: '/ängsholm',
      name: "Ängsholm",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-027' })
    },
    {
      path: '/ågard',
      name: "Ågård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-029' })
    },
    {
      path: '/torkelsrud',
      name: "Torkelsrud",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-008' })
    },
    {
      path: '/vindpark-lursang',
      name: "Vindpark Lursäng",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-037' })
    },
    {
      path: '/utby',
      name: "Utby",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-010' })
    },
    {
      path: '/mariestrom',
      name: "Marieström",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-023' })
    },
    {
      path: '/3953-blad',
      name: "3953 Blad",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-002' })
    },
    {
      path: '/rytteras',
      name: "Rytterås",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-026' })
    },
    {
      path: '/erikstorp-iii',
      name: "Erikstorp III",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-009' })
    },
    {
      path: '/-hoghult-1',
      name: "Höghult 1",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-001' })
    },
    {
      path: '/back',
      name: "Bäck",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-004' })
    },
    {
      path: '/bralanda-torp',
      name: "Brålanda-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-004' })
    },
    {
      path: '/kortered',
      name: "Kortered",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-006' })
    },
    {
      path: '/ulvstorp',
      name: "Ulvstorp",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-009' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-011' })
    },
    {
      path: '/st-levene',
      name: "St Levene",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-006' })
    },
    {
      path: '/skallmeja-/-3815',
      name: "SKALLMEJA / 3815",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-009' })
    },
    {
      path: '/nattorp-7303',
      name: "NATTORP 7303",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-017' })
    },
    {
      path: '/änden-7843',
      name: "ÄNDEN 7843",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-030' })
    },
    {
      path: '/rydingstorp-1',
      name: "Rydingstorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-005' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-012' })
    },
    {
      path: '/segas',
      name: "Segås",
      component: ProjectPage,
      extraProps: { projectId: '1881-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1881-V-002' })
    },
    {
      path: '/-langsjon-1',
      name: "Långsjön 1",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-002' })
    },
    {
      path: '/magderud---hanhult',
      name: "Magderud - Hanhult",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-008' })
    },
    {
      path: '/tranum',
      name: "TRANUM",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-029' })
    },
    {
      path: '/sjovik',
      name: "Sjövik",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-009' })
    },
    {
      path: '/vindpark-sjovik',
      name: "Vindpark Sjövik",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-013' })
    },
    {
      path: '/balltorp',
      name: "Balltorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-002' })
    },
    {
      path: '/jung',
      name: "Jung",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-015' })
    },
    {
      path: '/tagneby',
      name: "Tägneby",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-003' })
    },
    {
      path: '/tegneby',
      name: "Tegneby",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-004' })
    },
    {
      path: '/glanas-vind',
      name: "Glänås Vind",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-006' })
    },
    {
      path: '/millingstorp',
      name: "Millingstorp",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-008' })
    },
    {
      path: '/millingstorp-i',
      name: "Millingstorp I",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-009' })
    },
    {
      path: '/runnestad-3',
      name: "Runnestad 3",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-010' })
    },
    {
      path: '/runnestad-3',
      name: "Runnestad 3",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-011' })
    },
    {
      path: '/runnestad2',
      name: "Runnestad2",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-012' })
    },
    {
      path: '/runnestad-i',
      name: "Runnestad I",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-013' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-016' })
    },
    {
      path: '/svarttorp',
      name: "Svarttorp",
      component: ProjectPage,
      extraProps: { projectId: '0562-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0562-V-001' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-004' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-005' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-006' })
    },
    {
      path: '/hovgarden-i',
      name: "Hovgården I",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-007' })
    },
    {
      path: '/hackenas-iii',
      name: "Häckenäs III",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-009' })
    },
    {
      path: '/stavlosa',
      name: "Stavlösa",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-011' })
    },
    {
      path: '/hackenas-betty',
      name: "Häckenäs Betty",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-014' })
    },
    {
      path: '/hackenas-ii',
      name: "Häckenäs II",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-015' })
    },
    {
      path: '/borstad-1',
      name: "Börstad 1",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-016' })
    },
    {
      path: '/elvina',
      name: "Elvina",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-003' })
    },
    {
      path: '/vkv_lin-003',
      name: "vkv_lin-003",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-004' })
    },
    {
      path: '/vkv_lin-004',
      name: "vkv_lin-004",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-005' })
    },
    {
      path: '/vkv_lin-008',
      name: "vkv_lin-008",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-007' })
    },
    {
      path: '/vkv_lin-009',
      name: "vkv_lin-009",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-008' })
    },
    {
      path: '/vkv_lin-010',
      name: "vkv_lin-010",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-009' })
    },
    {
      path: '/vkv_lin-011',
      name: "vkv_lin-011",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-010' })
    },
    {
      path: '/vkv_lin-013',
      name: "vkv_lin-013",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-012' })
    },
    {
      path: '/vkv_lin-014',
      name: "vkv_lin-014",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-013' })
    },
    {
      path: '/vkv_lin-015',
      name: "vkv_lin-015",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-014' })
    },
    {
      path: '/vkv_lin-029',
      name: "vkv_lin-029",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-018' })
    },
    {
      path: '/vkv_lin-030',
      name: "vkv_lin-030",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-019' })
    },
    {
      path: '/vkv_lin-031',
      name: "vkv_lin-031",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-020' })
    },
    {
      path: '/vkv_lin-032',
      name: "vkv_lin-032",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-021' })
    },
    {
      path: '/bjornsnas',
      name: "Björnsnäs",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-001' })
    },
    {
      path: '/flamminge-gard',
      name: "Flämminge Gård",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-002' })
    },
    {
      path: '/farjestaden',
      name: "Färjestaden",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-003' })
    },
    {
      path: '/gisselo-gard',
      name: "Gisselö Gård",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-004' })
    },
    {
      path: '/kuddby-åby',
      name: "Kuddby-Åby",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-006' })
    },
    {
      path: '/svenneby',
      name: "Svenneby",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-007' })
    },
    {
      path: '/svartinge-udde',
      name: "Svärtinge udde",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-009' })
    },
    {
      path: '/ållono-slott',
      name: "Ållonö slott",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-011' })
    },
    {
      path: '/karebo',
      name: "Kårebo",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-003' })
    },
    {
      path: '/boberg-1',
      name: "Boberg 1",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-001' })
    },
    {
      path: '/ebborp-vind,-emma',
      name: "Ebborp Vind, Emma",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-004' })
    },
    {
      path: '/larstad-2',
      name: "Lårstad 2",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-005' })
    },
    {
      path: '/elvinda,-rocklunda',
      name: "Elvinda, Rocklunda",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-009' })
    },
    {
      path: '/ravsjo',
      name: "Rävsjö",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-010' })
    },
    {
      path: '/skedevi-bonnorp-vind-ab',
      name: "Skedevi Bonnorp Vind AB",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-011' })
    },
    {
      path: '/varby',
      name: "Varby",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-013' })
    },
    {
      path: '/stenkil',
      name: "Stenkil",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-019' })
    },
    {
      path: '/osvald',
      name: "Osvald",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-020' })
    },
    {
      path: '/larstad-1',
      name: "Lårstad 1",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-021' })
    },
    {
      path: '/appunamollan',
      name: "Appunamöllan",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-001' })
    },
    {
      path: '/bjalbo-skenaan-vind',
      name: "Bjälbo-Skenaån Vind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-003' })
    },
    {
      path: '/hogby-1',
      name: "Högby 1",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-006' })
    },
    {
      path: '/isberget-i',
      name: "Isberget I",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-007' })
    },
    {
      path: '/isberget-ii',
      name: "Isberget II",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-008' })
    },
    {
      path: '/isberget-iii',
      name: "Isberget III",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-009' })
    },
    {
      path: '/karleby-vindkraftverk',
      name: "Karleby vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-010' })
    },
    {
      path: '/karlebytorp-vind-2',
      name: "Karlebytorp vind 2",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-011' })
    },
    {
      path: '/normlosa-torpa-vind',
      name: "Normlösa Torpa Vind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-016' })
    },
    {
      path: '/skeby-vind',
      name: "Skeby Vind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-018' })
    },
    {
      path: '/skeby/tungelunda-vindkraft-4',
      name: "Skeby/Tungelunda vindkraft 4",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-019' })
    },
    {
      path: '/skorteby,-lillebror',
      name: "Skorteby, Lillebror",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-021' })
    },
    {
      path: '/skorteby,-storebror',
      name: "Skorteby, Storebror",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-022' })
    },
    {
      path: '/tungelunda---skeby-3',
      name: "Tungelunda - Skeby 3",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-023' })
    },
    {
      path: '/uljeberg',
      name: "Uljeberg",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-024' })
    },
    {
      path: '/wahlby-1',
      name: "Wahlby 1",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-025' })
    },
    {
      path: '/vaderstad-vind',
      name: "Väderstad Vind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-029' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-032' })
    },
    {
      path: '/birger-jarl',
      name: "Birger Jarl",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-033' })
    },
    {
      path: '/ingrid-ylva-bjalbo',
      name: "Ingrid Ylva Bjälbo",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-034' })
    },
    {
      path: '/magnus-ladulas',
      name: "Magnus Ladulås",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-035' })
    },
    {
      path: '/bjalbo',
      name: "Bjälbo",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-036' })
    },
    {
      path: '/bjalbo-lennart',
      name: "Bjälbo Lennart",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-037' })
    },
    {
      path: '/branna',
      name: "Bränna",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-038' })
    },
    {
      path: '/herrgardsvind',
      name: "Herrgårdsvind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-039' })
    },
    {
      path: '/varnas-vind',
      name: "Varnäs Vind",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-040' })
    },
    {
      path: '/lagmansberga',
      name: "Lagmansberga",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-041' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-042' })
    },
    {
      path: '/navered',
      name: "Navered",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-043' })
    },
    {
      path: '/elvira-vind',
      name: "Elvira Vind",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-002' })
    },
    {
      path: '/stjernarps-gods',
      name: "Stjernarps Gods",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-014' })
    },
    {
      path: '/eldsberga',
      name: "Eldsberga",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-015' })
    },
    {
      path: '/andersfalt-norr',
      name: "Andersfält Norr",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-016' })
    },
    {
      path: '/andersfalt-mitt',
      name: "Andersfält Mitt",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-017' })
    },
    {
      path: '/andersfalt-syd',
      name: "Andersfält Syd",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-018' })
    },
    {
      path: '/dragabol',
      name: "Dragabol",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-019' })
    },
    {
      path: '/bonnarp',
      name: "Bonnarp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-001' })
    },
    {
      path: '/havsvind',
      name: "Havsvind",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-004' })
    },
    {
      path: '/mestocka-vkv',
      name: "Mestocka VKV",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-006' })
    },
    {
      path: '/putsered',
      name: "Putsered",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-010' })
    },
    {
      path: '/seglaberga-4',
      name: "Seglaberga 4",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-011' })
    },
    {
      path: '/seglaberga-5',
      name: "Seglaberga 5",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-012' })
    },
    {
      path: '/skottorp',
      name: "Skottorp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-014' })
    },
    {
      path: '/sydvind',
      name: "Sydvind",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-016' })
    },
    {
      path: '/vindkraftverk-forslund',
      name: "Vindkraftverk Forslund",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-021' })
    },
    {
      path: '/vindkraftverk-östorp',
      name: "Vindkraftverk Östorp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-022' })
    },
    {
      path: '/äng-el',
      name: "Äng-EL",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-023' })
    },
    {
      path: '/ösarp/knobbens-vindkraftverk',
      name: "Ösarp/Knöbbens vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-024' })
    },
    {
      path: '/östergard',
      name: "Östergård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-025' })
    },
    {
      path: '/ax-el',
      name: "Ax-El",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-028' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-030' })
    },
    {
      path: '/karragard',
      name: "Kärragård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-031' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-032' })
    },
    {
      path: '/tjarby',
      name: "Tjärby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-033' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-034' })
    },
    {
      path: '/mammarp',
      name: "Mammarp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-035' })
    },
    {
      path: '/lilla-tjarby-gard',
      name: "Lilla Tjärby Gård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-036' })
    },
    {
      path: '/klagstorp',
      name: "Klägstorp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-037' })
    },
    {
      path: '/hov',
      name: "Hov",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-038' })
    },
    {
      path: '/klagstorp',
      name: "Klägstorp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-039' })
    },
    {
      path: '/gunn-el',
      name: "Gunn-El",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-040' })
    },
    {
      path: '/tjarby',
      name: "Tjärby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-041' })
    },
    {
      path: '/manstorps-gard',
      name: "Månstorps Gård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-042' })
    },
    {
      path: '/triton-energi',
      name: "Triton Energi",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-043' })
    },
    {
      path: '/kovlinge',
      name: "Kövlinge",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-044' })
    },
    {
      path: '/varestorps-vind',
      name: "Värestorps Vind",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-045' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-046' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-047' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-048' })
    },
    {
      path: '/bjornsgard',
      name: "Björnsgård",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-049' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-050' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-051' })
    },
    {
      path: '/mellby-kraft-i',
      name: "Mellby Kraft I",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-052' })
    },
    {
      path: '/domestorp-ii',
      name: "Dömestorp II",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-053' })
    },
    {
      path: '/domestorp-i',
      name: "Dömestorp I",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-054' })
    },
    {
      path: '/genevad',
      name: "Genevad",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-055' })
    },
    {
      path: '/askomebjar',
      name: "Askomebjär",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-003' })
    },
    {
      path: '/rosendal-1',
      name: "Rosendal 1",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-013' })
    },
    {
      path: '/735999224950737069-tagarp-114',
      name: "735999224950737069 Tågarp 114",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-018' })
    },
    {
      path: '/karrets-gard',
      name: "Kärrets Gård",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-019' })
    },
    {
      path: '/karrets-gard-ii',
      name: "Kärrets Gård II",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-021' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-022' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-023' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-024' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-025' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-026' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-027' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-028' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-029' })
    },
    {
      path: '/falkenbergsporten-3',
      name: "Falkenbergsporten 3",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-030' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-031' })
    },
    {
      path: '/falkenbergsporten-4',
      name: "Falkenbergsporten 4",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-032' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-033' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-034' })
    },
    {
      path: '/ventosum-10',
      name: "Ventosum 10",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-035' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-037' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-038' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-039' })
    },
    {
      path: '/galtas-syd',
      name: "Galtås Syd",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-040' })
    },
    {
      path: '/galtas-nord',
      name: "Galtås Nord",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-041' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-043' })
    },
    {
      path: '/mit-9003',
      name: "MIT 9003",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-017' })
    },
    {
      path: '/almedal',
      name: "Almedal",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-004' })
    },
    {
      path: '/hono-pinan',
      name: "Hönö Pinan",
      component: ProjectPage,
      extraProps: { projectId: '1407-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1407-V-001' })
    },
    {
      path: '/pinan',
      name: "Pinan",
      component: ProjectPage,
      extraProps: { projectId: '1407-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1407-V-002' })
    },
    {
      path: '/hog',
      name: "Hog",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-003' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-004' })
    },
    {
      path: '/jarnklatt',
      name: "Järnklätt",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-006' })
    },
    {
      path: '/halleby',
      name: "Halleby",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-007' })
    },
    {
      path: '/ranebo',
      name: "Ranebo",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-008' })
    },
    {
      path: '/halle-vindkraftverk',
      name: "Hälle vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-010' })
    },
    {
      path: '/hjalteby',
      name: "Hjälteby",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-001' })
    },
    {
      path: '/kuballe',
      name: "Kuballe",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-003' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-004' })
    },
    {
      path: '/ravsal',
      name: "Rävsal",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-006' })
    },
    {
      path: '/sibracka',
      name: "Sibräcka",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-007' })
    },
    {
      path: '/sibracka',
      name: "Sibräcka",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-008' })
    },
    {
      path: '/stenkyrka-bo',
      name: "Stenkyrka-Bö",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-010' })
    },
    {
      path: '/tolleby',
      name: "Tolleby",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-012' })
    },
    {
      path: '/vallahallene',
      name: "VallaHällene",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-014' })
    },
    {
      path: '/vallhamns-hamn',
      name: "Vallhamns hamn",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-015' })
    },
    {
      path: '/vallhamns-hamn',
      name: "Vallhamns hamn",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-016' })
    },
    {
      path: '/vindkraftverk-habborsby',
      name: "Vindkraftverk Habborsby",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-017' })
    },
    {
      path: '/vindkraftverket-stella',
      name: "Vindkraftverket Stella",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-018' })
    },
    {
      path: '/hallemollan-i',
      name: "Hällemöllan I",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-019' })
    },
    {
      path: '/hallemollan-ii',
      name: "Hällemöllan II",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-020' })
    },
    {
      path: '/ronnang',
      name: "Rönnäng",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-021' })
    },
    {
      path: '/alma-1',
      name: "Alma 1",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-004' })
    },
    {
      path: '/sorgarden',
      name: "Sörgården",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-006' })
    },
    {
      path: '/henan',
      name: "Henån",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-009' })
    },
    {
      path: '/henan/harod',
      name: "Henån/Häröd",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-010' })
    },
    {
      path: '/mollosund',
      name: "Mollösund",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-011' })
    },
    {
      path: '/victoria',
      name: "Victoria",
      component: ProjectPage,
      extraProps: { projectId: '1427-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1427-V-002' })
    },
    {
      path: '/sophie-hogenaset',
      name: "Sophie Hogenäset",
      component: ProjectPage,
      extraProps: { projectId: '1427-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1427-V-003' })
    },
    {
      path: '/hovenaset,-ingeborg',
      name: "Hovenäset, Ingeborg",
      component: ProjectPage,
      extraProps: { projectId: '1427-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1427-V-004' })
    },
    {
      path: '/hermansrod',
      name: "Hermansröd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-002' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-003' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-033' })
    },
    {
      path: '/haga',
      name: "Haga",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-005' })
    },
    {
      path: '/ramberg',
      name: "Ramberg",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-006' })
    },
    {
      path: '/dusgard',
      name: "Dusgård",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-020' })
    },
    {
      path: '/dingle-naturbruksgymnasium',
      name: "Dingle Naturbruksgymnasium",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-023' })
    },
    {
      path: '/hulda',
      name: "Hulda",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-001' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-002' })
    },
    {
      path: '/bro',
      name: "Bro",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-004' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-009' })
    },
    {
      path: '/dusgard',
      name: "Dusgård",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-010' })
    },
    {
      path: '/hornbore',
      name: "Hornbore",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-018' })
    },
    {
      path: '/hede-varniksgarden',
      name: "Hede Värniksgården",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-019' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-025' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-026' })
    },
    {
      path: '/grebban-1',
      name: "Grebban 1",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-029' })
    },
    {
      path: '/grebban-2',
      name: "Grebban 2",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-030' })
    },
    {
      path: '/grebban-3,-tanumshede',
      name: "Grebban 3, Tanumshede",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-031' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-033' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-047' })
    },
    {
      path: '/rorkarr',
      name: "Rörkärr",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-049' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-053' })
    },
    {
      path: '/tannam-smeby',
      name: "Tannam Smeby",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-056' })
    },
    {
      path: '/tannam',
      name: "Tannam",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-057' })
    },
    {
      path: '/tannam',
      name: "Tannam",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-058' })
    },
    {
      path: '/torserods-vindkraftpark-6',
      name: "Torseröds Vindkraftpark 6",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-065' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-065' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-067' })
    },
    {
      path: '/kylsaters-vindkraftverk',
      name: "Kylsäters Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-005' })
    },
    {
      path: '/lundby-grabo',
      name: "Lundby-Gråbo",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-001' })
    },
    {
      path: '/hallsas',
      name: "Hallsås",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-002' })
    },
    {
      path: '/lergraven',
      name: "Lergraven",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-003' })
    },
    {
      path: '/skallsjo',
      name: "Skallsjö",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-004' })
    },
    {
      path: '/frotorp',
      name: "Frötorp",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-002' })
    },
    {
      path: '/hoberg',
      name: "Hoberg",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-003' })
    },
    {
      path: '/hol-1',
      name: "Hol 1",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-004' })
    },
    {
      path: '/3951-sven-vind',
      name: "3951 Sven Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-001' })
    },
    {
      path: '/3952-tomten',
      name: "3952 Tomten",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-002' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-003' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-004' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-005' })
    },
    {
      path: '/flosal-vind',
      name: "FloSal Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-007' })
    },
    {
      path: '/flosal-vind',
      name: "FloSal Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-008' })
    },
    {
      path: '/haberg-2',
      name: "Håberg 2",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-010' })
    },
    {
      path: '/vindkraftverk-i-sal',
      name: "Vindkraftverk i Sal",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-012' })
    },
    {
      path: '/rudberga',
      name: "Rudberga",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-014' })
    },
    {
      path: '/rudberga',
      name: "Rudberga",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-015' })
    },
    {
      path: '/raglanna',
      name: "Råglanna",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-017' })
    },
    {
      path: '/bragnum-vindkraftverk',
      name: "Bragnum vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1445-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1445-V-001' })
    },
    {
      path: '/åsens-sateri',
      name: "Åsens säteri",
      component: ProjectPage,
      extraProps: { projectId: '1445-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1445-V-004' })
    },
    {
      path: '/grashult',
      name: "Gräshult",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-004' })
    },
    {
      path: '/sanden',
      name: "Sanden",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-004' })
    },
    {
      path: '/ömmestorp',
      name: "Ömmestorp",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-005' })
    },
    {
      path: '/grinstads-hagen-1',
      name: "Grinstads-Hagen 1",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-003' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-007' })
    },
    {
      path: '/ållerud',
      name: "Ållerud",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-008' })
    },
    {
      path: '/erikstads-mossebol-1',
      name: "Erikstads-Mossebol 1",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-010' })
    },
    {
      path: '/erikstads-mossebol-2',
      name: "Erikstads-Mossebol 2",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-011' })
    },
    {
      path: '/vena',
      name: "Vena",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-016' })
    },
    {
      path: '/östebyn',
      name: "Östebyn",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-022' })
    },
    {
      path: '/glysbyn',
      name: "Glysbyn",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-026' })
    },
    {
      path: '/bolstads-torp',
      name: "Bolstads-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-027' })
    },
    {
      path: '/brandekulla/sunnana',
      name: "Brändekulla/Sunnanå",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-028' })
    },
    {
      path: '/nygarden',
      name: "Nygården",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-029' })
    },
    {
      path: '/nygarden',
      name: "Nygården",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-030' })
    },
    {
      path: '/nordkarrshogar',
      name: "Nordkärrshögar",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-031' })
    },
    {
      path: '/rodjans-vindkraftverk',
      name: "Rödjans vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-032' })
    },
    {
      path: '/rodjans-gard',
      name: "Rödjans Gård",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-033' })
    },
    {
      path: '/jarns-bon',
      name: "Järns-Bön",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-034' })
    },
    {
      path: '/strom',
      name: "Ström",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-002' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-006' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-008' })
    },
    {
      path: '/kappelabo',
      name: "Kappelabo",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-002' })
    },
    {
      path: '/skepared',
      name: "Skepared",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-003' })
    },
    {
      path: '/hyssna-hokas',
      name: "Hyssna-Hökås",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-005' })
    },
    {
      path: '/staxered',
      name: "Staxered",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-007' })
    },
    {
      path: '/haby',
      name: "Haby",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-008' })
    },
    {
      path: '/naturbruksgymn-strommaskolan(bevis1998-11-04)',
      name: "Naturbruksgymn Strömmaskolan(bevis1998-11-04)",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-009' })
    },
    {
      path: '/åsen-(gardskraftverk)-slutbevis-2007-03-15',
      name: "Åsen (gårdskraftverk) Slutbevis 2007-03-15",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-010' })
    },
    {
      path: '/flohult',
      name: "Flohult",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-015' })
    },
    {
      path: '/hulatorp',
      name: "Hulatorp",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-016' })
    },
    {
      path: '/holm-vindkraftspark-?-park-i-flera-komm-o-lan',
      name: "Holm vindkraftspark ? Park i flera komm o län",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-017' })
    },
    {
      path: '/vastfastigheter,-vastra-gotalansregionen/natgym',
      name: "Västfastigheter, Västra Götalansregionen/Natgym",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-018' })
    },
    {
      path: '/kappelabo',
      name: "Kappelabo",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-019' })
    },
    {
      path: '/blasebo',
      name: "Bläsebo",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-025' })
    },
    {
      path: '/bjorketorp',
      name: "Björketorp",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-027' })
    },
    {
      path: '/holmarp',
      name: "Holmarp",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-005' })
    },
    {
      path: '/3954-gallegarden',
      name: "3954 Gallegården",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-003' })
    },
    {
      path: '/farhaga',
      name: "Fårhaga",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-006' })
    },
    {
      path: '/gategarden,-bengt-c',
      name: "Gategården, Bengt C",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-007' })
    },
    {
      path: '/halvas',
      name: "Halvås",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-008' })
    },
    {
      path: '/helleberg-1',
      name: "Helleberg 1",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-009' })
    },
    {
      path: '/hakantorp-1',
      name: "Håkantorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-010' })
    },
    {
      path: '/hakantorp-2',
      name: "Håkantorp 2",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-011' })
    },
    {
      path: '/kaggarden',
      name: "Kaggården",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-012' })
    },
    {
      path: '/morkagarden-2',
      name: "Mörkagården 2",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-016' })
    },
    {
      path: '/morkagarden-4',
      name: "Mörkagården 4",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-017' })
    },
    {
      path: '/morkagarden-1',
      name: "Mörkagården 1",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-018' })
    },
    {
      path: '/morkagarden-3',
      name: "Mörkagården 3",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-019' })
    },
    {
      path: '/rangeltorp',
      name: "Rangeltorp",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-020' })
    },
    {
      path: '/rosa',
      name: "Rosa",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-022' })
    },
    {
      path: '/ryda',
      name: "Ryda",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-024' })
    },
    {
      path: '/ryda-2',
      name: "Ryda 2",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-025' })
    },
    {
      path: '/skarstad',
      name: "Skarstad",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-028' })
    },
    {
      path: '/edum',
      name: "Edum",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-039' })
    },
    {
      path: '/edum',
      name: "Edum",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-040' })
    },
    {
      path: '/vara',
      name: "Vara",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-041' })
    },
    {
      path: '/vedum-horshaga',
      name: "Vedum Horshaga",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-042' })
    },
    {
      path: '/stora-backebo',
      name: "Stora Bäckebo",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-043' })
    },
    {
      path: '/sandaker',
      name: "Sandåker",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-044' })
    },
    {
      path: '/tl-vind-1',
      name: "TL Vind 1",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-045' })
    },
    {
      path: '/tl-vind-2',
      name: "TL Vind 2",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-046' })
    },
    {
      path: '/tl-vind-3',
      name: "TL Vind 3",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-047' })
    },
    {
      path: '/brattefors-i',
      name: "Brattefors I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-001' })
    },
    {
      path: '/broholm-i',
      name: "Broholm I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-002' })
    },
    {
      path: '/brunnstorp-i',
      name: "Brunnstorp I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-003' })
    },
    {
      path: '/backgarden',
      name: "Bäckgården",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-004' })
    },
    {
      path: '/dalaholm-i',
      name: "Dalaholm I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-005' })
    },
    {
      path: '/dalaholm-ii',
      name: "Dalaholm II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-006' })
    },
    {
      path: '/erikstorp-ii',
      name: "Erikstorp II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-008' })
    },
    {
      path: '/horsmarka',
      name: "Horsmarka",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-010' })
    },
    {
      path: '/jattadansen-i',
      name: "Jättadansen I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-012' })
    },
    {
      path: '/kollbogarden-i',
      name: "Kollbogården I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-013' })
    },
    {
      path: '/kollbogarden-ii',
      name: "Kollbogården II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-014' })
    },
    {
      path: '/kyrkebo-i',
      name: "Kyrkebo I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-016' })
    },
    {
      path: '/kallstorp-i',
      name: "Källstorp I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-017' })
    },
    {
      path: '/mariedal-i',
      name: "Mariedal I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-018' })
    },
    {
      path: '/nolebo-i',
      name: "Nolebo I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-019' })
    },
    {
      path: '/rasegarden-i',
      name: "Rasegården I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-022' })
    },
    {
      path: '/hangelosa-1',
      name: "Hangelösa 1",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-024' })
    },
    {
      path: '/skeby-i',
      name: "Skeby I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-025' })
    },
    {
      path: '/skeby-ii',
      name: "Skeby II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-026' })
    },
    {
      path: '/stockeback-i',
      name: "Stockebäck I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-028' })
    },
    {
      path: '/stora-lund-i',
      name: "Stora lund I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-030' })
    },
    {
      path: '/stora-lund-ii',
      name: "Stora lund II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-031' })
    },
    {
      path: '/svenska-foder',
      name: "Svenska Foder",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-032' })
    },
    {
      path: '/vastermark-i',
      name: "Västermark I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-033' })
    },
    {
      path: '/vattlosa-i',
      name: "Vättlösa I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-035' })
    },
    {
      path: '/vattlosa-ii',
      name: "Vättlösa II",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-036' })
    },
    {
      path: '/-langsjon-4',
      name: "Långsjön 4",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-003' })
    },
    {
      path: '/-skinnfallen-1',
      name: "Skinnfällen 1",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-004' })
    },
    {
      path: '/-stora-krakhult-1',
      name: "Stora Kråkhult 1",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-005' })
    },
    {
      path: '/spannefalla',
      name: "Spännefalla",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-007' })
    },
    {
      path: '/borrud-1',
      name: "Borrud 1",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-001' })
    },
    {
      path: '/borrud-2',
      name: "Borrud 2",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-002' })
    },
    {
      path: '/ljungas',
      name: "Ljungås",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-007' })
    },
    {
      path: '/bert',
      name: "Bert",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-009' })
    },
    {
      path: '/nolasen',
      name: "Nolåsen",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-011' })
    },
    {
      path: '/smeby',
      name: "Smeby",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-013' })
    },
    {
      path: '/ballefors-kyrketorp',
      name: "Bällefors-Kyrketorp",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-015' })
    },
    {
      path: '/gardsten',
      name: "Gårdsten",
      component: ProjectPage,
      extraProps: { projectId: '1480-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1480-V-002' })
    },
    {
      path: '/lyse-bonus',
      name: "Lyse Bonus",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-005' })
    },
    {
      path: '/lys-vind',
      name: "Lys-Vind",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-006' })
    },
    {
      path: '/sivik-iii',
      name: "Sivik III",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-007' })
    },
    {
      path: '/si-vind',
      name: "Si-Vind",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-008' })
    },
    {
      path: '/sture-nolby-ha-046',
      name: "Sture Nolby HA 046",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-009' })
    },
    {
      path: '/vind-invest',
      name: "Vind Invest",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-001' })
    },
    {
      path: '/ljungkile-svenshogen',
      name: "Ljungkile Svenshögen",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-012' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-016' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-018' })
    },
    {
      path: '/torkelsrod-i-uddevalla',
      name: "Torkelsröd i Uddevalla",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-022' })
    },
    {
      path: '/kavlanda',
      name: "Kavlanda",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-027' })
    },
    {
      path: '/hogdals-hjalmberg',
      name: "Hogdals-Hjälmberg",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-006' })
    },
    {
      path: '/bjornvinden',
      name: "Björnvinden",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-009' })
    },
    {
      path: '/asmundtorp',
      name: "Asmundtorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-001' })
    },
    {
      path: '/bralanda-torp',
      name: "Brålanda-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-005' })
    },
    {
      path: '/baberg',
      name: "Båberg",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-006' })
    },
    {
      path: '/fristorp',
      name: "Fristorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-007' })
    },
    {
      path: '/gestads-bjornerud',
      name: "Gestads-Björnerud",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-009' })
    },
    {
      path: '/gestads-bjornerud',
      name: "Gestads-Björnerud",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-010' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-012' })
    },
    {
      path: '/nuntorpskolans-vindkraftverk',
      name: "Nuntorpskolans vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-016' })
    },
    {
      path: '/ramnered',
      name: "Ramnered",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-017' })
    },
    {
      path: '/rannum',
      name: "Rånnum",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-018' })
    },
    {
      path: '/simonstorp',
      name: "Simonstorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-020' })
    },
    {
      path: '/siviken',
      name: "Siviken",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-021' })
    },
    {
      path: '/tobyn',
      name: "Tobyn",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-023' })
    },
    {
      path: '/troneberg',
      name: "Troneberg",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-024' })
    },
    {
      path: '/uppegarden',
      name: "Uppegården",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-025' })
    },
    {
      path: '/vanersnas',
      name: "Vänersnäs",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-026' })
    },
    {
      path: '/biangen',
      name: "Biängen",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-029' })
    },
    {
      path: '/branneriet',
      name: "Bränneriet",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-030' })
    },
    {
      path: '/3965-eka-lilla-v-nas',
      name: "3965-Eka Lilla V-näs",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-031' })
    },
    {
      path: '/wenersnes',
      name: "Wenersnes",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-032' })
    },
    {
      path: '/åstebo',
      name: "Åstebo",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-033' })
    },
    {
      path: '/hullsjon-1',
      name: "Hullsjön 1",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-001' })
    },
    {
      path: '/hullsjon-2',
      name: "Hullsjön 2",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-002' })
    },
    {
      path: '/halltorp',
      name: "Halltorp",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-004' })
    },
    {
      path: '/velanda-gard',
      name: "Velanda gård",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-008' })
    },
    {
      path: '/vittene',
      name: "Vittene",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-010' })
    },
    {
      path: '/genneved',
      name: "Genneved",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-001' })
    },
    {
      path: '/rodeneplatan',
      name: "Rödeneplatån",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-002' })
    },
    {
      path: '/vindkraft-rangedala',
      name: "Vindkraft Rångedala",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-002' })
    },
    {
      path: '/hossna',
      name: "Hössna",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-007' })
    },
    {
      path: '/zepyrus-af-hov',
      name: "Zepyrus af Hov",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-011' })
    },
    {
      path: '/älmestad',
      name: "Älmestad",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-012' })
    },
    {
      path: '/hasselbacka',
      name: "Hässelbacka",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-005' })
    },
    {
      path: '/soderbodane',
      name: "Söderbodane",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-007' })
    },
    {
      path: '/hassleror',
      name: "Hasslerör",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-003' })
    },
    {
      path: '/hassleror',
      name: "Hasslerör",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-004' })
    },
    {
      path: '/bromollan',
      name: "Bromöllan",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-009' })
    },
    {
      path: '/sjobergs-sateri',
      name: "Sjöbergs Säteri",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-010' })
    },
    {
      path: '/backa-vind-3',
      name: "Backa Vind 3",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-001' })
    },
    {
      path: '/lovene',
      name: "Lovene",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-002' })
    },
    {
      path: '/eke-vind',
      name: "Eke Vind",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-007' })
    },
    {
      path: '/harjevads-vind',
      name: "Härjevads Vind",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-009' })
    },
    {
      path: '/almetorps-sateri',
      name: "Almetorps Säteri",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-012' })
    },
    {
      path: '/kedumsvik',
      name: "Kedumsvik",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-014' })
    },
    {
      path: '/lanneholm',
      name: "Lanneholm",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-016' })
    },
    {
      path: '/lanna-1,-lidkoping',
      name: "Lanna 1, Lidköping",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-017' })
    },
    {
      path: '/mansagarden',
      name: "Månsagården",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-018' })
    },
    {
      path: '/skog-1',
      name: "Skog 1",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-021' })
    },
    {
      path: '/skog-2',
      name: "Skog 2",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-022' })
    },
    {
      path: '/ranåker-/-747',
      name: "RANÅKER / 747",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-001' })
    },
    {
      path: '/märene-1992',
      name: "MÄRENE 1992",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-002' })
    },
    {
      path: '/ölanda-/-4391',
      name: "ÖLANDA / 4391",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-003' })
    },
    {
      path: '/viglunda-/-4456',
      name: "VIGLUNDA / 4456",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-005' })
    },
    {
      path: '/skallmeja-/-5680',
      name: "SKALLMEJA / 5680",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-006' })
    },
    {
      path: '/munstorp-5691',
      name: "MUNSTORP 5691",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-008' })
    },
    {
      path: '/hästhalla-/-5692',
      name: "HÄSTHALLA / 5692",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-011' })
    },
    {
      path: '/skallmeja-/-5694',
      name: "SKALLMEJA / 5694",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-012' })
    },
    {
      path: '/istrums-lycke-/-5695',
      name: "ISTRUMS-LYCKE / 5695",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-013' })
    },
    {
      path: '/munstorp-7012',
      name: "MUNSTORP 7012",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-014' })
    },
    {
      path: '/blombacka-/-5693',
      name: "BLOMBACKA / 5693",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-015' })
    },
    {
      path: '/tåstorp-/-a',
      name: "TÅSTORP / A",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-018' })
    },
    {
      path: '/stubbe',
      name: "STUBBE",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-021' })
    },
    {
      path: '/skelycke',
      name: "SKELYCKE",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-023' })
    },
    {
      path: '/skallmeja-/-7304',
      name: "SKALLMEJA / 7304",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-024' })
    },
    {
      path: '/tagelberg-1',
      name: "Tagelberg 1",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-026' })
    },
    {
      path: '/tåstorp-/-b',
      name: "TÅSTORP / B",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-035' })
    },
    {
      path: '/horshaga',
      name: "HORSHAGA",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-037' })
    },
    {
      path: '/brumstorp-1',
      name: "Brumstorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-001' })
    },
    {
      path: '/greby-1',
      name: "Greby 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-002' })
    },
    {
      path: '/klockartorp-1',
      name: "Klockartorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-003' })
    },
    {
      path: '/kyrkbolet-1',
      name: "Kyrkbolet 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-004' })
    },
    {
      path: '/dagstorp-1',
      name: "Dagstorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-006' })
    },
    {
      path: '/tastorp-1',
      name: "Tåstorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-007' })
    },
    {
      path: '/-askeberga-5',
      name: "Askeberga 5",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-009' })
    },
    {
      path: '/-djursatra-2',
      name: "Djursätra 2",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-010' })
    },
    {
      path: '/-djursatra-1',
      name: "Djursätra 1",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-011' })
    },
    {
      path: '/vkv-vaholm-1-8',
      name: "Vkv Vaholm 1-8",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-014' })
    },
    {
      path: '/skultorp',
      name: "Skultorp",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-016' })
    },
    {
      path: '/sortorp',
      name: "Sörtorp",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-004' })
    },
    {
      path: '/hjallo',
      name: "Hjällö",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-008' })
    },
    {
      path: '/stakahemmet',
      name: "Stakahemmet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-010' })
    },
    {
      path: '/stakahemmet',
      name: "Stakahemmet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-011' })
    },
    {
      path: '/stora-solberga',
      name: "Stora Solberga",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-013' })
    },
    {
      path: '/atteby',
      name: "Atteby",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-020' })
    },
    {
      path: '/karstorp',
      name: "Karstorp",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-021' })
    },
    {
      path: '/styrshult',
      name: "Styrshult",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-022' })
    },
    {
      path: '/bjarg',
      name: "Bjärg",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-023' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks-Munkebo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-024' })
    },
    {
      path: '/stekarekarret',
      name: "Stekarekärret",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-025' })
    },
    {
      path: '/överryd',
      name: "Överryd",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-026' })
    },
    {
      path: '/fridene',
      name: "Fridene",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-027' })
    },
    {
      path: '/nyskog',
      name: "Nyskog",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-029' })
    },
    {
      path: '/dalshult',
      name: "Dalshult",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-030' })
    },
    {
      path: '/dalshult-eskelid',
      name: "Dalshult-Eskelid",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-031' })
    },
    {
      path: '/dalshult-1;2-(halls-vilande-pa-sok.-begaran)',
      name: "Dalshult 1;2 (Hålls vilande på sök. begäran)",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-032' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-033' })
    },
    {
      path: '/granbolet',
      name: "Granbolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-034' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-035' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-038' })
    },
    {
      path: '/äskelid',
      name: "Äskelid",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-039' })
    },
    {
      path: '/nyskog',
      name: "Nyskog",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-040' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks Munkebo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-041' })
    },
    {
      path: '/bjarg',
      name: "Bjärg",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-042' })
    },
    {
      path: '/svebrata',
      name: "Svebråta",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-044' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-045' })
    },
    {
      path: '/mellomberga',
      name: "Mellomberga",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-049' })
    },
    {
      path: '/lammevad',
      name: "Lammevad",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-008' })
    },
    {
      path: '/simona-vindkraft-leringen',
      name: "Simona Vindkraft Leringen",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-010' })
    },
    {
      path: '/ammagarden-1',
      name: "Ammagården 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-001' })
    },
    {
      path: '/badene-5',
      name: "Badene 5",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-004' })
    },
    {
      path: '/badene-6-(lilla)',
      name: "Badene 6 (lilla)",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-005' })
    },
    {
      path: '/floby-1',
      name: "Floby 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-006' })
    },
    {
      path: '/grimskullen',
      name: "Grimskullen",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-007' })
    },
    {
      path: '/goteve-1',
      name: "Göteve 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-009' })
    },
    {
      path: '/kampagarden-1',
      name: "Kampagården 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-012' })
    },
    {
      path: '/kleva-1',
      name: "Kleva 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-013' })
    },
    {
      path: '/kalleberg-6',
      name: "Källeberg 6",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-015' })
    },
    {
      path: '/kalvene-1',
      name: "Kälvene 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-016' })
    },
    {
      path: '/luttra-1',
      name: "Luttra 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-017' })
    },
    {
      path: '/monarp-1',
      name: "Mönarp 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-019' })
    },
    {
      path: '/monarp-2',
      name: "Mönarp 2",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-020' })
    },
    {
      path: '/naglarp-1',
      name: "Naglarp 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-021' })
    },
    {
      path: '/naglarp-2',
      name: "Naglarp 2",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-022' })
    },
    {
      path: '/rosenskog-a1',
      name: "Rosenskog A1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-026' })
    },
    {
      path: '/rosenskog-a2',
      name: "Rosenskog A2",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-027' })
    },
    {
      path: '/rosenskog-a6',
      name: "Rosenskog A6",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-028' })
    },
    {
      path: '/rosenskog-v7',
      name: "Rosenskog V7",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-029' })
    },
    {
      path: '/rosenskog-w8,-anders-gotlind',
      name: "Rosenskog W8, Anders Götlind",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-030' })
    },
    {
      path: '/rosenskog-w9,-anders-gotlind',
      name: "Rosenskog W9, Anders Götlind",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-031' })
    },
    {
      path: '/snosback-1',
      name: "Snösbäck 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-036' })
    },
    {
      path: '/sundsholm',
      name: "Sundsholm",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-037' })
    },
    {
      path: '/tunhem-1',
      name: "Tunhem 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-038' })
    },
    {
      path: '/tunhem-2',
      name: "Tunhem 2",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-039' })
    },
    {
      path: '/tunhem-3',
      name: "Tunhem 3",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-040' })
    },
    {
      path: '/tyska-garden-1',
      name: "Tyska gården 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-041' })
    },
    {
      path: '/tyska-garden-5',
      name: "Tyska gården 5",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-042' })
    },
    {
      path: '/ugglum-1',
      name: "Ugglum 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-044' })
    },
    {
      path: '/yllestad-1',
      name: "Yllestad 1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-045' })
    },
    {
      path: '/yllestad',
      name: "Yllestad",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-046' })
    },
    {
      path: '/gokhem',
      name: "Gökhem",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-047' })
    },
    {
      path: '/slabraten',
      name: "Släbråten",
      component: ProjectPage,
      extraProps: { projectId: '1760-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1760-V-001' })
    },
    {
      path: '/lucia,-boholmen',
      name: "Lucia, Boholmen",
      component: ProjectPage,
      extraProps: { projectId: '1761-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1761-V-002' })
    },
    {
      path: '/skinnerud',
      name: "Skinnerud",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-002' })
    },
    {
      path: '/åras',
      name: "Årås",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-003' })
    },
    {
      path: '/nolby,-arnon',
      name: "Nolby, Arnön",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-003' })
    },
    {
      path: '/posseberg',
      name: "Posseberg",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-009' })
    },
    {
      path: '/varnums-hogeberg',
      name: "Varnums-Högeberg",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-010' })
    },
    {
      path: '/kvarnbraten',
      name: "Kvarnbråten",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-011' })
    },
    {
      path: '/eskilsaters-boda',
      name: "Eskilsäters-Boda",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-002' })
    },
    {
      path: '/forsvik',
      name: "Forsvik",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-003' })
    },
    {
      path: '/magnebyn',
      name: "Magnebyn",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-006' })
    },
    {
      path: '/stora-herrestad',
      name: "Stora Herrestad",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-010' })
    },
    {
      path: '/ölseruds-prastgard',
      name: "Ölseruds prästgård",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-015' })
    },
    {
      path: '/önaholm',
      name: "Önaholm",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-016' })
    },
    {
      path: '/ekebergs-gard-jeremias',
      name: "Ekebergs gård Jeremias",
      component: ProjectPage,
      extraProps: { projectId: '1814-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1814-V-002' })
    },
    {
      path: '/kalltorp-tarsta',
      name: "Källtorp Tarsta",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-003' })
    },
    {
      path: '/varbo',
      name: "Vårbo",
      component: ProjectPage,
      extraProps: { projectId: '1862-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1862-V-003' })
    },
    {
      path: '/goksholm',
      name: "Göksholm",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-001' })
    },
    {
      path: '/elmer-1---vindkraftverk',
      name: "Elmer 1 - vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-002' })
    },
    {
      path: '/elmer-2',
      name: "Elmer 2",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-003' })
    },
    {
      path: '/kvismaren-2',
      name: "Kvismaren 2",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-004' })
    },
    {
      path: '/kvismaren-3',
      name: "Kvismaren 3",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-005' })
    },
    {
      path: '/lundstorp-vind',
      name: "Lundstorp Vind",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-006' })
    },
    {
      path: '/nybble-vindkraftverk',
      name: "Nybble Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-007' })
    },
    {
      path: '/odensbacken-1',
      name: "Odensbacken 1",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-008' })
    },
    {
      path: '/usta',
      name: "Usta",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-009' })
    },
    {
      path: '/hovsta',
      name: "Hovsta",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-010' })
    },
    {
      path: '/vindkraftverk-irvingsholms-sateri',
      name: "Vindkraftverk Irvingsholms Säteri",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-011' })
    },
    {
      path: '/kvismaren-1',
      name: "Kvismaren 1",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-012' })
    },
    {
      path: '/askers-via',
      name: "Askers Via",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-013' })
    },
    {
      path: '/mellsavind-1',
      name: "MellsaVind 1",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-014' })
    },
    {
      path: '/norra-runnaby',
      name: "Norra Runnaby",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-016' })
    },
    {
      path: '/vintrosa',
      name: "Vintrosa",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-017' })
    },
    {
      path: '/gotarsvik',
      name: "Götarsvik",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-018' })
    },
    {
      path: '/malgrava',
      name: "Malgräva",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-019' })
    },
    {
      path: '/alva-af-hulta',
      name: "Alva af Hulta",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-003' })
    },
    {
      path: '/almudden',
      name: "Almudden",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-004' })
    },
    {
      path: '/sverkesta-vindkraft-g1',
      name: "Sverkesta Vindkraft G1",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-001' })
    },
    {
      path: '/rockhammar',
      name: "Rockhammar",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-002' })
    },
    {
      path: '/hannevind-11',
      name: "Hannevind 11",
      component: ProjectPage,
      extraProps: { projectId: '1980-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1980-V-001' })
    },
    {
      path: '/tillberga',
      name: "Tillberga",
      component: ProjectPage,
      extraProps: { projectId: '1980-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1980-V-002' })
    },
    {
      path: '/folderfors-vindkraft',
      name: "Folderfors Vindkraft",
      component: ProjectPage,
      extraProps: { projectId: '1981-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1981-V-002' })
    },
    {
      path: '/hjulsta',
      name: "Hjulsta",
      component: ProjectPage,
      extraProps: { projectId: '1983-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1983-V-001' })
    },
    {
      path: '/lunger',
      name: "Lunger",
      component: ProjectPage,
      extraProps: { projectId: '1984-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1984-V-001' })
    },
    {
      path: '/sunds-lovasa',
      name: "Sunds-Lövåsa",
      component: ProjectPage,
      extraProps: { projectId: '0512-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0512-V-001' })
    },
    {
      path: '/örbacken',
      name: "Örbacken",
      component: ProjectPage,
      extraProps: { projectId: '0560-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0560-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-017' })
    },
    {
      path: '/gotala-1',
      name: "Götala 1",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-006' })
    },
    {
      path: '/basthult',
      name: "Bästhult",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-002' })
    },
    {
      path: '/ekas',
      name: "Ekås",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-003' })
    },
    {
      path: '/sennan',
      name: "Sennan",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-004' })
    },
    {
      path: '/savbyholm',
      name: "Sävbyholm",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-017' })
    },
    {
      path: '/alered',
      name: "Alered",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-001' })
    },
    {
      path: '/ramsjo',
      name: "Ramsjö",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-012' })
    },
    {
      path: '/gummarasen',
      name: "Gummaråsen",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-002' })
    },
    {
      path: '/lahall',
      name: "Lahall",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-003' })
    },
    {
      path: '/sodra-cell-varo',
      name: "Södra Cell Värö",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-008' })
    },
    {
      path: '/sodra-cell-varo',
      name: "Södra Cell Värö",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-009' })
    },
    {
      path: '/ulvatorp',
      name: "Ulvatorp",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-012' })
    },
    {
      path: '/vastra-derome',
      name: "Västra Derome",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-014' })
    },
    {
      path: '/stenkyrka-bo',
      name: "Stenkyrka-Bö",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-009' })
    },
    {
      path: '/kyrkerod',
      name: "Kyrkeröd",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-001' })
    },
    {
      path: '/vast-tangen',
      name: "Väst-Tången",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-002' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-012' })
    },
    {
      path: '/vindpark-sogardsfjallet',
      name: "Vindpark Sögårdsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-028' })
    },
    {
      path: '/mungserod',
      name: "Mungseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-042' })
    },
    {
      path: '/mungserod/gurserod/skaverod',
      name: "Mungseröd/Gurseröd/Skaveröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-043' })
    },
    {
      path: '/skallerod',
      name: "Skalleröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-050' })
    },
    {
      path: '/hud',
      name: "Hud",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-055' })
    },
    {
      path: '/vindpark-korpekullen',
      name: "Vindpark Korpekullen",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-001' })
    },
    {
      path: '/grafsnas-vindpark',
      name: "Gräfsnäs Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1440-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1440-V-002' })
    },
    {
      path: '/vanervind',
      name: "Vänervind",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-001' })
    },
    {
      path: '/vastergarden-1',
      name: "Västergården 1",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-005' })
    },
    {
      path: '/karrsbackens-vindpark',
      name: "Kärrsbackens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-001' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-005' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-007' })
    },
    {
      path: '/sannersby',
      name: "Sannersby",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-011' })
    },
    {
      path: '/vindkraftspark-bjorketorp',
      name: "Vindkraftspark Björketorp",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-013' })
    },
    {
      path: '/trollebergsmossen',
      name: "Trollebergsmossen",
      component: ProjectPage,
      extraProps: { projectId: '1466-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1466-V-002' })
    },
    {
      path: '/vindkraft-örevattenasen',
      name: "Vindkraft Örevattenåsen",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-002' })
    },
    {
      path: '/simmersrod',
      name: "Simmersröd",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-020' })
    },
    {
      path: '/vindpark-krakerod',
      name: "Vindpark Kråkeröd",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-026' })
    },
    {
      path: '/frugarden',
      name: "Frugården",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-008' })
    },
    {
      path: '/skogaryd',
      name: "Skogaryd",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-019' })
    },
    {
      path: '/bondegarde',
      name: "Bondegärde",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-001' })
    },
    {
      path: '/froskog-vindkraftpark,-alt-a',
      name: "Fröskog vindkraftpark, alt A",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-002' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks Munkebo",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-018' })
    },
    {
      path: '/karlsberg',
      name: "Karlsberg",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-036' })
    },
    {
      path: '/anneberg',
      name: "Anneberg",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-001' })
    },
    {
      path: '/dimbo,-dimboholm',
      name: "Dimbo, Dimboholm",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-003' })
    },
    {
      path: '/rammarehemmet',
      name: "Råmmarehemmet",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-009' })
    },
    {
      path: '/kalleberg',
      name: "Källeberg",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-014' })
    },
    {
      path: '/rosenskog-vindpark',
      name: "Rosenskog Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-032' })
    },
    {
      path: '/ryttersfjall',
      name: "Ryttersfjäll",
      component: ProjectPage,
      extraProps: { projectId: '1730-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1730-V-001' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-005' })
    },
    {
      path: '/ramsnas',
      name: "Ramsnäs",
      component: ProjectPage,
      extraProps: { projectId: '1860-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1860-V-003' })
    },
    {
      path: '/händene',
      name: "HÄNDENE",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-020' })
    },
    {
      path: '/lilla-solberga',
      name: "Lilla Solberga",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-019' })
    },
    {
      path: '/skutskar',
      name: "Skutskär",
      component: ProjectPage,
      extraProps: { projectId: '0319-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0319-V-001' })
    },
    {
      path: '/koby-4-verk',
      name: "Koby 4 verk",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-004' })
    },
    {
      path: '/stockaryd',
      name: "Stockaryd",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-004' })
    },
    {
      path: '/hylletofta',
      name: "Hylletofta",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-007' })
    },
    {
      path: '/vraneke',
      name: "Vraneke",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-022' })
    },
    {
      path: '/nathult',
      name: "Nåthult",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-001' })
    },
    {
      path: '/holma',
      name: "Holma",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-003' })
    },
    {
      path: '/trolleboda',
      name: "Trolleboda",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-005' })
    },
    {
      path: '/bjornhovda',
      name: "Björnhovda",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-003' })
    },
    {
      path: '/barby',
      name: "Bårby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-008' })
    },
    {
      path: '/kalkstad',
      name: "Kalkstad",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-019' })
    },
    {
      path: '/kristinelund',
      name: "Kristinelund",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-022' })
    },
    {
      path: '/sandby',
      name: "Sandby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-029' })
    },
    {
      path: '/stora-brunneby',
      name: "Stora Brunneby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-031' })
    },
    {
      path: '/torp-ullevi',
      name: "Torp Ullevi",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-035' })
    },
    {
      path: '/tornbotten-i',
      name: "Törnbotten I",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-036' })
    },
    {
      path: '/ullevi',
      name: "Ullevi",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-039' })
    },
    {
      path: '/övertorp-12',
      name: "Övertorp 12",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-044' })
    },
    {
      path: '/brinkabo',
      name: "Brinkabo",
      component: ProjectPage,
      extraProps: { projectId: '0862-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0862-V-001' })
    },
    {
      path: '/sorvik',
      name: "Sörvik",
      component: ProjectPage,
      extraProps: { projectId: '0882-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0882-V-002' })
    },
    {
      path: '/tindered',
      name: "Tindered",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-008' })
    },
    {
      path: '/ramsberg-syd',
      name: "Ramsberg Syd",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-004' })
    },
    {
      path: '/robergsfjallet',
      name: "Röbergsfjället",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-002' })
    },
    {
      path: '/tavelberget',
      name: "Tavelberget",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-002' })
    },
    {
      path: '/kaptensberget',
      name: "Kaptensberget",
      component: ProjectPage,
      extraProps: { projectId: '2104-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2104-V-001' })
    },
    {
      path: '/vindpark-brannasen',
      name: "Vindpark Brännåsen",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-007' })
    },
    {
      path: '/ljusne/vallvik',
      name: "Ljusne/Vallvik",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-006' })
    },
    {
      path: '/storasen',
      name: "Storåsen",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-002' })
    },
    {
      path: '/vindpark-hacksta',
      name: "Vindpark Håcksta",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-005' })
    },
    {
      path: '/stormon',
      name: "Stormon",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-002' })
    },
    {
      path: '/holms-vastbyn',
      name: "Holms-Västbyn",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-003' })
    },
    {
      path: '/sundsskogen',
      name: "SUNDSSKOGEN",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-004' })
    },
    {
      path: '/rammeldalsberget',
      name: "Rammeldalsberget",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-002' })
    },
    {
      path: '/stigshojden',
      name: "Stigshöjden",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-001' })
    },
    {
      path: '/hogklippen',
      name: "Högklippen",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-002' })
    },
    {
      path: '/ingridsveberget',
      name: "Ingridsveberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-003' })
    },
    {
      path: '/bodbergsplatan',
      name: "Bodbergsplatån",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-004' })
    },
    {
      path: '/digerberget-1.',
      name: "Digerberget 1.",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-004' })
    },
    {
      path: '/granberget-1',
      name: "Granberget 1",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-001' })
    },
    {
      path: '/granberget-2',
      name: "Granberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-002' })
    },
    {
      path: '/storberget',
      name: "Storberget",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-001' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-005' })
    },
    {
      path: '/assjo-1,-ella',
      name: "Assjö 1, Ella",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-001' })
    },
    {
      path: '/vivian',
      name: "Vivian",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-002' })
    },
    {
      path: '/mats-eriksson-vindkraftverk-1',
      name: "Mats Eriksson vindkraftverk 1",
      component: ProjectPage,
      extraProps: { projectId: '0117-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0117-V-001' })
    },
    {
      path: '/ljustero-vind-vindkraftverk-2',
      name: "Ljusterö Vind vindkraftverk 2",
      component: ProjectPage,
      extraProps: { projectId: '0117-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0117-V-002' })
    },
    {
      path: '/ekero-asknas',
      name: "Ekerö Asknäs",
      component: ProjectPage,
      extraProps: { projectId: '0125-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0125-V-001' })
    },
    {
      path: '/stockby',
      name: "Stockby",
      component: ProjectPage,
      extraProps: { projectId: '0125-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0125-V-002' })
    },
    {
      path: '/eknas',
      name: "Eknäs",
      component: ProjectPage,
      extraProps: { projectId: '0125-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0125-V-003' })
    },
    {
      path: '/uto',
      name: "Utö",
      component: ProjectPage,
      extraProps: { projectId: '0136-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0136-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0140-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0140-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0181-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0181-V-001' })
    },
    {
      path: '/bjorko',
      name: "Björkö",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-001' })
    },
    {
      path: '/liesta',
      name: "Liesta",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-003' })
    },
    {
      path: '/svenska-hogarna',
      name: "Svenska Högarna",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-004' })
    },
    {
      path: '/bista',
      name: "Bista",
      component: ProjectPage,
      extraProps: { projectId: '0305-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0305-V-001' })
    },
    {
      path: '/hogsta',
      name: "Högsta",
      component: ProjectPage,
      extraProps: { projectId: '0380-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0380-V-001' })
    },
    {
      path: '/hogsta',
      name: "Högsta",
      component: ProjectPage,
      extraProps: { projectId: '0380-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0380-V-002' })
    },
    {
      path: '/hamptappan',
      name: "Hamptäppan",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-003' })
    },
    {
      path: '/litslena-djurby',
      name: "Litslena djurby",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-005' })
    },
    {
      path: '/tawind-ab',
      name: "Tawind AB",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-007' })
    },
    {
      path: '/silvia-af',
      name: "Silvia af",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-008' })
    },
    {
      path: '/skarpangen',
      name: "Skarpängen",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-009' })
    },
    {
      path: '/sneby',
      name: "Sneby",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-010' })
    },
    {
      path: '/sundet-3-verk',
      name: "Sundet 3 verk",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-011' })
    },
    {
      path: '/varfrukyrka',
      name: "Vårfrukyrka",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-012' })
    },
    {
      path: '/rickeby',
      name: "Rickeby",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0382-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0382-V-002' })
    },
    {
      path: '/århammar',
      name: "Århammar",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-001' })
    },
    {
      path: '/äskoping',
      name: "Äsköping",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-001' })
    },
    {
      path: '/dagsjon',
      name: "Dagsjön",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-004' })
    },
    {
      path: '/vidokna',
      name: "Vidökna",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-005' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-001' })
    },
    {
      path: '/älskebo',
      name: "Älskebo",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-002' })
    },
    {
      path: '/ärnanas',
      name: "Ärnanäs",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-002' })
    },
    {
      path: '/skog-(tritteboda)',
      name: "Skog (Tritteboda)",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-003' })
    },
    {
      path: '/bjarkaryd',
      name: "Bjärkaryd",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-005' })
    },
    {
      path: '/lovshult',
      name: "Lövshult",
      component: ProjectPage,
      extraProps: { projectId: '0684-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0684-V-006' })
    },
    {
      path: '/nottebacks-heda',
      name: "Nottebäcks-Heda",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-009' })
    },
    {
      path: '/vraneke',
      name: "Vraneke",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-021' })
    },
    {
      path: '/nottebacks-nobbele',
      name: "Nottebäcks-Nöbbele",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-025' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-026' })
    },
    {
      path: '/nottebacks-heda',
      name: "Nottebäcks-Heda",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-027' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-028' })
    },
    {
      path: '/hageskruv',
      name: "Hageskruv",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-031' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-033' })
    },
    {
      path: '/billy-vind-ab',
      name: "Billy Vind AB",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-002' })
    },
    {
      path: '/billy-vind-ab',
      name: "Billy Vind AB",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-003' })
    },
    {
      path: '/linder-farmell',
      name: "Linder Färmell",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-004' })
    },
    {
      path: '/elensas',
      name: "Elensås",
      component: ProjectPage,
      extraProps: { projectId: '0764-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0764-V-002' })
    },
    {
      path: '/karryd',
      name: "Karryd",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-001' })
    },
    {
      path: '/malajord',
      name: "Målajord",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-007' })
    },
    {
      path: '/bjornhovda-ii',
      name: "Björnhovda II",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-004' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-012' })
    },
    {
      path: '/gronhogen',
      name: "Grönhögen",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-013' })
    },
    {
      path: '/gardby',
      name: "Gårdby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-016' })
    },
    {
      path: '/holmetorp',
      name: "Holmetorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-017' })
    },
    {
      path: '/lindby',
      name: "Lindby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-023' })
    },
    {
      path: '/langralla',
      name: "Långrälla",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-024' })
    },
    {
      path: '/parboang-gard',
      name: "Parboäng Gård",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-027' })
    },
    {
      path: '/svibo',
      name: "Svibo",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-033' })
    },
    {
      path: '/vastergarden',
      name: "Västergården",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-043' })
    },
    {
      path: '/degerhamn-piren-ii',
      name: "Degerhamn piren II",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-045' })
    },
    {
      path: '/degerhamn_4_1',
      name: "Degerhamn_4_1",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-048' })
    },
    {
      path: '/rogers',
      name: "Rogers",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-056' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-098' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-098' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-099' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-099' })
    },
    {
      path: '/sodra-backebo',
      name: "Södra Bäckebo",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-050' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-007' })
    },
    {
      path: '/mortorp-torsboda',
      name: "Mortorp Törsboda",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-008' })
    },
    {
      path: '/hagby-1:2',
      name: "Hagby 1:2",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-009' })
    },
    {
      path: '/ryssbylund,-nobble-och-stojby',
      name: "Ryssbylund, Nöbble och Stojby",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-011' })
    },
    {
      path: '/kulltorp',
      name: "Kulltorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-012' })
    },
    {
      path: '/vassmolosa',
      name: "Vassmolösa",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-013' })
    },
    {
      path: '/bottorp',
      name: "Bottorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-014' })
    },
    {
      path: '/ålem-gunnarsbo',
      name: "Ålem Gunnarsbo",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-015' })
    },
    {
      path: '/elverslosa',
      name: "Elverslösa",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-017' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-018' })
    },
    {
      path: '/vassmolosa-kulltorp',
      name: "Vassmolösa Kulltorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-019' })
    },
    {
      path: '/kulltorp-mortorp',
      name: "Kulltorp Mortorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-020' })
    },
    {
      path: '/stenninge_3_48',
      name: "Stenninge_3_48",
      component: ProjectPage,
      extraProps: { projectId: '0885 -V-00' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885 -V-00' })
    },
    {
      path: '/freja-olsang',
      name: "Freja Olsäng",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-004' })
    },
    {
      path: '/gudingen-(sturko-2)',
      name: "Gudingen (Sturkö 2)",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-005' })
    },
    {
      path: '/ådan-(sturko-1)',
      name: "Ådan (Sturkö 1)",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-006' })
    },
    {
      path: '/harstorp-1',
      name: "Harstorp 1",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-007' })
    },
    {
      path: '/hermansmala',
      name: "Hermansmåla",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-008' })
    },
    {
      path: '/svalemala',
      name: "Svalemåla",
      component: ProjectPage,
      extraProps: { projectId: '1081-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1081-V-003' })
    },
    {
      path: '/lorby-3',
      name: "Lörby 3",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-001' })
    },
    {
      path: '/lorby-1-toke',
      name: "Lörby 1 Toke",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-002' })
    },
    {
      path: '/lorby-6-lorby/ysane',
      name: "Lörby 6 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-003' })
    },
    {
      path: '/lorby-5-lorby/ysane',
      name: "Lörby 5 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-004' })
    },
    {
      path: '/lorby-4-lorby/ysane',
      name: "Lörby 4 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-005' })
    },
    {
      path: '/lorby-2-krok',
      name: "Lörby 2 Krok",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-006' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-007' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-008' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-009' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-010' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-011' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-012' })
    },
    {
      path: '/enslov',
      name: "Enslöv",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-012' })
    },
    {
      path: '/vindkraftverk-skavboke',
      name: "Vindkraftverk Skavböke",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-014' })
    },
    {
      path: '/lerviken',
      name: "Lerviken",
      component: ProjectPage,
      extraProps: { projectId: '1864-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1864-V-001' })
    },
    {
      path: '/oppboga',
      name: "Oppboga",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-006' })
    },
    {
      path: '/öby-gard',
      name: "Öby gård",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-003' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-009' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-019' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-020' })
    },
    {
      path: '/uvberget-hanna',
      name: "Uvberget Hanna",
      component: ProjectPage,
      extraProps: { projectId: '2061-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2061-V-001' })
    },
    {
      path: '/uvberget-boel',
      name: "Uvberget Boel",
      component: ProjectPage,
      extraProps: { projectId: '2061-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2061-V-002' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectId: '2084-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2084-V-001' })
    },
    {
      path: '/paljakoberget',
      name: "Paljakoberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-005' })
    },
    {
      path: '/stratjara',
      name: "Stråtjära",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-004' })
    },
    {
      path: '/klafson',
      name: "Kläfsön",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-003' })
    },
    {
      path: '/rodmyrberget',
      name: "Rödmyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-004' })
    },
    {
      path: '/dalom',
      name: "Dalom",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-006' })
    },
    {
      path: '/vardkasberget',
      name: "Vårdkasberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-007' })
    },
    {
      path: '/verkstaden-4',
      name: "Verkstaden 4",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-002' })
    },
    {
      path: '/bjorkon',
      name: "Björkön",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-005' })
    },
    {
      path: '/hornoberget',
      name: "Hornöberget",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-003' })
    },
    {
      path: '/nyland',
      name: "Nyland",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-010' })
    },
    {
      path: '/skagsudde-linda',
      name: "Skagsudde Linda",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-011' })
    },
    {
      path: '/norrvage',
      name: "Norrvåge",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-012' })
    },
    {
      path: '/norrvage',
      name: "Norrvåge",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-013' })
    },
    {
      path: '/vasterkal',
      name: "Västerkäl",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-014' })
    },
    {
      path: '/almasa',
      name: "Almåsa",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-002' })
    },
    {
      path: '/669828001-vallrun',
      name: "669828001 Vallrun",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-003' })
    },
    {
      path: '/hallingarna-vind-ek-for',
      name: "Hällingarna Vind ek för",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-001' })
    },
    {
      path: '/harrsjon',
      name: "Harrsjön",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-002' })
    },
    {
      path: '/bratteggen-1',
      name: "Bratteggen 1",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-001' })
    },
    {
      path: '/bratteggen-2',
      name: "Bratteggen 2",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-002' })
    },
    {
      path: '/grasjon-anja',
      name: "Gråsjön Anja",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-003' })
    },
    {
      path: '/överhallen',
      name: "Överhallen",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-004' })
    },
    {
      path: '/hallen',
      name: "Hallen",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-005' })
    },
    {
      path: '/bydalen',
      name: "Bydalen",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-006' })
    },
    {
      path: '/kommerberget',
      name: "Kommerberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-001' })
    },
    {
      path: '/bjornskallen,-kajsa',
      name: "Björnskallen, Kajsa",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-002' })
    },
    {
      path: '/karlsbacks-vindkraftverk',
      name: "Karlsbäcks Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-008' })
    },
    {
      path: '/östest-kroket',
      name: "Östest-Kröket",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-002' })
    },
    {
      path: '/digerberget',
      name: "Digerberget",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-009' })
    },
    {
      path: '/randingsvallen',
      name: "Rändingsvallen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-017' })
    },
    {
      path: '/jarnasklubb-vindkraftstation',
      name: "Järnäsklubb vindkraftstation",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-002' })
    },
    {
      path: '/skarvsjoby',
      name: "Skarvsjöby",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-003' })
    },
    {
      path: '/ristrask',
      name: "Risträsk",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-001' })
    },
    {
      path: '/latikberg',
      name: "Latikberg",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-002' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-003' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-004' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-005' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-001' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-007' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-009' })
    },
    {
      path: '/klutmark',
      name: "Klutmark",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-001' })
    },
    {
      path: '/burea',
      name: "Bureå",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-004' })
    },
    {
      path: '/bure-1',
      name: "Bure 1",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-006' })
    },
    {
      path: '/bure-2',
      name: "Bure 2",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-007' })
    },
    {
      path: '/bure-3',
      name: "Bure 3",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-011' })
    },
    {
      path: '/vindmannen',
      name: "Vindmannen",
      component: ProjectPage,
      extraProps: { projectId: '2510-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2510-V-001' })
    },
    {
      path: '/siksundson',
      name: "Siksundsön",
      component: ProjectPage,
      extraProps: { projectId: '2514-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2514-V-003' })
    },
    {
      path: '/rian',
      name: "Rian",
      component: ProjectPage,
      extraProps: { projectId: '2514-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2514-V-004' })
    },
    {
      path: '/haljelot',
      name: "Häljelöt",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-002' })
    },
    {
      path: '/grytsjon',
      name: "Grytsjön",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-009' })
    },
    {
      path: '/suttene',
      name: "Suttene",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-019' })
    },
    {
      path: '/tormoserod-vindpark',
      name: "Tormoseröd Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-062' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-063' })
    },
    {
      path: '/lunnekullen',
      name: "Lunnekullen",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-002' })
    },
    {
      path: '/vindkraft-granan',
      name: "Vindkraft Granan",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-024' })
    },
    {
      path: '/projekt-stenhult',
      name: "Projekt Stenhult",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-017' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-007' })
    },
    {
      path: '/vindkraft-granan',
      name: "Vindkraft Granan",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-011' })
    },
    {
      path: '/skogaryd',
      name: "Skogaryd",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-022' })
    },
    {
      path: '/vindkraftpark-grafsnas-och-livered-m.fl.',
      name: "Vindkraftpark Gräfsnäs och Livered m.fl.",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-005' })
    },
    {
      path: '/grafsnas-vindpark',
      name: "Gräfsnäs Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-006' })
    },
    {
      path: '/vindpark-sjovik/önaholm',
      name: "Vindpark Sjövik/Önaholm",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-011' })
    },
    {
      path: '/kymbo',
      name: "Kymbo",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-007' })
    },
    {
      path: '/sten-kalles-grund',
      name: "Sten-Kalles grund",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-001' })
    },
    {
      path: '/vindpark-sjovik/önaholm',
      name: "Vindpark Sjövik/Önaholm",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-014' })
    },
    {
      path: '/grevekulla',
      name: "Grevekulla",
      component: ProjectPage,
      extraProps: { projectId: '0512-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0512-V-005' })
    },
    {
      path: '/östkinds-haradsallmanning',
      name: "Östkinds Häradsallmänning",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-010' })
    },
    {
      path: '/toronsborg',
      name: "Torönsborg",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-001' })
    },
    {
      path: '/bjorka',
      name: "Björka",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-015' })
    },
    {
      path: '/jonsbo',
      name: "Jonsbo",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-005' })
    },
    {
      path: '/ryssbol',
      name: "Ryssbol",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-007' })
    },
    {
      path: '/frollinge',
      name: "Fröllinge",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-003' })
    },
    {
      path: '/uppnora',
      name: "Uppnora",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-008' })
    },
    {
      path: '/knared',
      name: "Knäred",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-005' })
    },
    {
      path: '/oxhult',
      name: "Oxhult",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-007' })
    },
    {
      path: '/kaphult-vindkraftpark',
      name: "Kåphult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-008' })
    },
    {
      path: '/skogaby',
      name: "Skogaby",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-013' })
    },
    {
      path: '/tommared',
      name: "Tommared",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-018' })
    },
    {
      path: '/uddared',
      name: "Uddared",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-019' })
    },
    {
      path: '/askomebjar',
      name: "Askomebjär",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-002' })
    },
    {
      path: '/bjornasen',
      name: "Björnåsen",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-004' })
    },
    {
      path: '/hjuleberg-vindkraftpark',
      name: "Hjuleberg Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-005' })
    },
    {
      path: '/okome',
      name: "Okome",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-011' })
    },
    {
      path: '/äskasen',
      name: "Äskåsen",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-017' })
    },
    {
      path: '/sallstorp',
      name: "Sällstorp",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-007' })
    },
    {
      path: '/iglasjon',
      name: "Iglasjön",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-002' })
    },
    {
      path: '/garete-rannekarr',
      name: "Garete-Rannekärr",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-002' })
    },
    {
      path: '/varekil',
      name: "Varekil",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-003' })
    },
    {
      path: '/bratton',
      name: "Brattön",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-009' })
    },
    {
      path: '/svarteborgs-skogen',
      name: "Svarteborgs-Skogen",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-015' })
    },
    {
      path: '/vindpark-bratton-salelund',
      name: "Vindpark Brattön-Sälelund",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-024' })
    },
    {
      path: '/vindpark-jarmunderod',
      name: "Vindpark Järmunderöd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-029' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-014' })
    },
    {
      path: '/torgersrod,-habackemarken',
      name: "Torgersröd, Håbäckemarken",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-021' })
    },
    {
      path: '/vindpark-sogardsfjallet',
      name: "Vindpark Sögårdsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-046' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-051' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-059' })
    },
    {
      path: '/vindpark-tagerod',
      name: "Vindpark Tågeröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-060' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-061' })
    },
    {
      path: '/toftedalsfjallet',
      name: "Töftedalsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-001' })
    },
    {
      path: '/toftedalsfjallet',
      name: "Töftedalsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-002' })
    },
    {
      path: '/vindpark-habol',
      name: "Vindpark Håbol",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-004' })
    },
    {
      path: '/projekt-vinnsater',
      name: "Projekt Vinnsäter",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-003' })
    },
    {
      path: '/vindpark-ödeborgsfjallet',
      name: "Vindpark Ödeborgsfjället",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-004' })
    },
    {
      path: '/ravbacka-vindkraftpark',
      name: "Rävbacka Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-005' })
    },
    {
      path: '/öijared',
      name: "Öijared",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-007' })
    },
    {
      path: '/vindpark-brevikshult',
      name: "Vindpark Brevikshult",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-001' })
    },
    {
      path: '/vindkraftpark-älvshult',
      name: "Vindkraftpark Älvshult",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-003' })
    },
    {
      path: '/dingelvik',
      name: "Dingelvik",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-002' })
    },
    {
      path: '/skuggetorp--vindpark',
      name: "Skuggetorp  vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-004' })
    },
    {
      path: '/vindpark-ransliden',
      name: "Vindpark Ränsliden",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-025' })
    },
    {
      path: '/gategardens-vindpark',
      name: "Gategårdens vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-014' })
    },
    {
      path: '/vindkraftprojekt-karrsbacken',
      name: "Vindkraftprojekt Kärrsbacken",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-019' })
    },
    {
      path: '/nedra-hagen',
      name: "Nedra Hagen",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-021' })
    },
    {
      path: '/satila-vindkraftpark',
      name: "Sätila Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-020' })
    },
    {
      path: '/bjorketorp',
      name: "Björketorp",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-021' })
    },
    {
      path: '/öxaback',
      name: "Öxabäck",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-022' })
    },
    {
      path: '/vindkraftspark-stenhult',
      name: "Vindkraftspark Stenhult",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-002' })
    },
    {
      path: '/vanga-och-stenberga',
      name: "Vånga och Stenberga",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-038' })
    },
    {
      path: '/vindkraftpark-fimmerstad',
      name: "Vindkraftpark Fimmerstad",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-005' })
    },
    {
      path: '/fagremo',
      name: "Fägremo",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-006' })
    },
    {
      path: '/arendal/risholmen',
      name: "Arendal/Risholmen",
      component: ProjectPage,
      extraProps: { projectId: '1480-v-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1480-v-001' })
    },
    {
      path: '/vavra-berg',
      name: "Vävra Berg",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-003' })
    },
    {
      path: '/vindkraftpark-preem/lysehogen',
      name: "Vindkraftpark Preem/LyseHogen",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-004' })
    },
    {
      path: '/gunnarby',
      name: "Gunnarby",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-003' })
    },
    {
      path: '/kråkeröd',
      name: "KRÅKERÖD",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-010' })
    },
    {
      path: '/ljungkile-norra',
      name: "Ljungkile Norra",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-011' })
    },
    {
      path: '/ljungkile-hoven',
      name: "Ljungkile-Hoven",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-013' })
    },
    {
      path: '/vindpark-forshalla',
      name: "Vindpark Forshälla",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-025' })
    },
    {
      path: '/vindpark-femstenaberg',
      name: "Vindpark Femstenaberg",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-001' })
    },
    {
      path: '/äng',
      name: "Äng",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-004' })
    },
    {
      path: '/tolvmanstegen',
      name: "Tolvmanstegen",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-005' })
    },
    {
      path: '/nunntorp',
      name: "Nunntorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-015' })
    },
    {
      path: '/larkeskogen-vindkraft',
      name: "Lärkeskogen vindkraft",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-004' })
    },
    {
      path: '/vindkraftverk-rangedala,-falskog',
      name: "Vindkraftverk Rångedala, Falskog",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-001' })
    },
    {
      path: '/galtasen',
      name: "Galtåsen",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-003' })
    },
    {
      path: '/gullered',
      name: "Gullered",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-004' })
    },
    {
      path: '/gullered-hogshult-vindkraftpark',
      name: "Gullered-Högshult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-005' })
    },
    {
      path: '/hallunda-timmele',
      name: "Hällunda-Timmele",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-006' })
    },
    {
      path: '/marback',
      name: "Marbäck",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-009' })
    },
    {
      path: '/froskog-vindkraftpark,-alt-a',
      name: "Fröskog vindkraftpark, alt A",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-003' })
    },
    {
      path: '/vindpark-kingebol',
      name: "Vindpark Kingebol",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-009' })
    },
    {
      path: '/vindpark-sjovik',
      name: "Vindpark Sjövik",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-010' })
    },
    {
      path: '/vindpark-ånimskog',
      name: "Vindpark Ånimskog",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-012' })
    },
    {
      path: '/östra-korsbyn',
      name: "Östra Korsbyn",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-013' })
    },
    {
      path: '/sparresater-vindkraftpark',
      name: "Sparresäter Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-015' })
    },
    {
      path: '/norra-hulan',
      name: "Norra Hulan",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-007' })
    },
    {
      path: '/prastbolet-hulan',
      name: "Prästbolet Hulan",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-017' })
    },
    {
      path: '/velinga',
      name: "Velinga",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-011' })
    },
    {
      path: '/naset',
      name: "Näset",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-023' })
    },
    {
      path: '/årjang-nv',
      name: "Årjäng NV",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-001' })
    },
    {
      path: '/årjang-no',
      name: "Årjäng NO",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-002' })
    },
    {
      path: '/årjang-no',
      name: "Årjäng NO",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-003' })
    },
    {
      path: '/årjang-sv',
      name: "Årjäng SV",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-004' })
    },
    {
      path: '/ölme',
      name: "Ölme",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-001' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-003' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-004' })
    },
    {
      path: '/sattravallen',
      name: "Sättravallen",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-006' })
    },
    {
      path: '/langmarken',
      name: "Långmarken",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-007' })
    },
    {
      path: '/sunnemo-hakanbol',
      name: "Sunnemo-Håkanbol",
      component: ProjectPage,
      extraProps: { projectId: '1783-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1783-V-001' })
    },
    {
      path: '/botilsater',
      name: "Botilsäter",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-001' })
    },
    {
      path: '/hokhult',
      name: "Hökhult",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-004' })
    },
    {
      path: '/knappa',
      name: "Knappa",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-005' })
    },
    {
      path: '/mohultet',
      name: "Mohultet",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-007' })
    },
    {
      path: '/sjonnebol',
      name: "Sjönnebol",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-008' })
    },
    {
      path: '/torserud',
      name: "Torserud",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-012' })
    },
    {
      path: '/slottsbol',
      name: "Slottsbol",
      component: ProjectPage,
      extraProps: { projectId: '1860-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1860-V-002' })
    },
    {
      path: '/markeback',
      name: "Markebäck",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-002' })
    },
    {
      path: '/loknasparken-nyvarpstrask-(1)',
      name: "Löknäsparken Nyvarpsträsk (1)",
      component: ProjectPage,
      extraProps: { projectId: '0120-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0120-V-001' })
    },
    {
      path: '/karo',
      name: "Karö",
      component: ProjectPage,
      extraProps: { projectId: '0382-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0382-V-001' })
    },
    {
      path: '/bjorka',
      name: "Björka",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-006' })
    },
    {
      path: '/bolerum',
      name: "Bolerum",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-007' })
    },
    {
      path: '/marbacks-kopparp',
      name: "Marbäcks-Kopparp",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-008' })
    },
    {
      path: '/älmedal',
      name: "Älmedal",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-002' })
    },
    {
      path: '/tvinnesheda-badeboda',
      name: "Tvinnesheda-Badeboda",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-003' })
    },
    {
      path: '/lenhovda',
      name: "Lenhovda",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-004' })
    },
    {
      path: '/bostorp',
      name: "Bostorp",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-005' })
    },
    {
      path: '/lillahult',
      name: "Lillahult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-007' })
    },
    {
      path: '/vraneke-&-bihult',
      name: "Vraneke & Bihult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-010' })
    },
    {
      path: '/bladingeas',
      name: "Blädingeås",
      component: ProjectPage,
      extraProps: { projectId: '0764-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0764-V-003' })
    },
    {
      path: '/alandskop',
      name: "Alandsköp",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-002' })
    },
    {
      path: '/sjoaryd',
      name: "Sjöaryd",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-004' })
    },
    {
      path: '/hyltan',
      name: "Hyltan",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-005' })
    },
    {
      path: '/byholma',
      name: "Byholma",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-004' })
    },
    {
      path: '/ljunga',
      name: "Ljunga",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-006' })
    },
    {
      path: '/gettnabo-ii',
      name: "Gettnabo II",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-002' })
    },
    {
      path: '/videbacksmala_torhult_sandbacksmala',
      name: "Videbäcksmåla_Torhult_Sandbacksmåla",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-006' })
    },
    {
      path: '/blasinge',
      name: "Bläsinge",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-005' })
    },
    {
      path: '/frosslunda',
      name: "Frösslunda",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-011' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-020' })
    },
    {
      path: '/kastlosa-sodra',
      name: "Kastlösa södra",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-021' })
    },
    {
      path: '/olstorp',
      name: "Olstorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-026' })
    },
    {
      path: '/sodra-kvinneby',
      name: "Södra Kvinneby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-034' })
    },
    {
      path: '/ventlinge-alvar',
      name: "Ventlinge Alvar",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-042' })
    },
    {
      path: '/triberga',
      name: "Triberga",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-053' })
    },
    {
      path: '/utgrunden-2',
      name: "Utgrunden 2",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-055' })
    },
    {
      path: '/froreda',
      name: "Fröreda",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-002' })
    },
    {
      path: '/tonshult',
      name: "Tönshult",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-004' })
    },
    {
      path: '/skruvshult',
      name: "Skruvshult",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-001' })
    },
    {
      path: '/varnanas',
      name: "Värnanäs",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-006' })
    },
    {
      path: '/bjalebo',
      name: "Bjälebo",
      component: ProjectPage,
      extraProps: { projectId: '0882-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0882-V-001' })
    },
    {
      path: '/övrahammar',
      name: "Övrahammar",
      component: ProjectPage,
      extraProps: { projectId: '0882-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0882-V-004' })
    },
    {
      path: '/blekhem',
      name: "Blekhem",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-002' })
    },
    {
      path: '/kilmare_ytterhult',
      name: "Kilmare_Ytterhult",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-003' })
    },
    {
      path: '/manasken',
      name: "Månasken",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-003' })
    },
    {
      path: '/manasken',
      name: "Månasken",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-004' })
    },
    {
      path: '/hakarp',
      name: "Hakarp",
      component: ProjectPage,
      extraProps: { projectId: '1081-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1081-V-002' })
    },
    {
      path: '/hedbodberget-etapp-1',
      name: "Hedbodberget Etapp 1",
      component: ProjectPage,
      extraProps: { projectId: '2031-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2031-V-001' })
    },
    {
      path: '/skaftberget',
      name: "Skäftberget",
      component: ProjectPage,
      extraProps: { projectId: '2034-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2034-V-001' })
    },
    {
      path: '/massingberget',
      name: "Mässingberget",
      component: ProjectPage,
      extraProps: { projectId: '2034-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2034-V-003' })
    },
    {
      path: '/bosberget',
      name: "Bosberget",
      component: ProjectPage,
      extraProps: { projectId: '2062-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2062-V-001' })
    },
    {
      path: '/sundborn-windpark',
      name: "Sundborn Windpark",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-006' })
    },
    {
      path: '/orrberget/stensvedberget',
      name: "Orrberget/Stensvedberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-008' })
    },
    {
      path: '/vindpark-fallasberget',
      name: "Vindpark Fallåsberget",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-006' })
    },
    {
      path: '/vindkraftpark-jattendal',
      name: "Vindkraftpark Jättendal",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-003' })
    },
    {
      path: '/vindkraftpark-riberget',
      name: "Vindkraftpark Riberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-002' })
    },
    {
      path: '/vindkraftpark-dalskolen',
      name: "Vindkraftpark Dalskölen",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-003' })
    },
    {
      path: '/vindpark-hogkolen',
      name: "Vindpark Högkölen",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-004' })
    },
    {
      path: '/vindkraftpark-blacksasberget',
      name: "Vindkraftpark Blacksåsberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-005' })
    },
    {
      path: '/vindpark-vasberget',
      name: "Vindpark Våsberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-006' })
    },
    {
      path: '/vindpark-kvissjaberget',
      name: "Vindpark Kvissjaberget",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-002' })
    },
    {
      path: '/vindpark-hittsjon',
      name: "Vindpark Hittsjön",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-003' })
    },
    {
      path: '/vindpark-hedesunda',
      name: "Vindpark Hedesunda",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-004' })
    },
    {
      path: '/vindkraftpark-gullberg',
      name: "Vindkraftpark Gullberg",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-007' })
    },
    {
      path: '/vindpark-arbra',
      name: "Vindpark Arbrå",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-002' })
    },
    {
      path: '/vindpark-hallbran',
      name: "Vindpark Hallbrån",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-004' })
    },
    {
      path: '/vindpark-glombo',
      name: "Vindpark Glombo",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-007' })
    },
    {
      path: '/ollebacken-etapp-1',
      name: "Ollebacken etapp 1",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-004' })
    },
    {
      path: '/ollebacken-etapp-2',
      name: "Ollebacken etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-007' })
    },
    {
      path: '/murufjallet-(9-st-vindkraftverk)',
      name: "Murufjället (9 st vindkraftverk)",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-009' })
    },
    {
      path: '/bliekevare-1',
      name: "Bliekevare 1",
      component: ProjectPage,
      extraProps: { projectId: '2425-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2425-V-001' })
    },
    {
      path: '/jarvsjokullen',
      name: "Järvsjökullen",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-002' })
    },
    {
      path: '/kinnback',
      name: "Kinnbäck",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-002' })
    },
    {
      path: '/fjallboheden-vindpark',
      name: "Fjällboheden vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-005' })
    },
    {
      path: '/selet',
      name: "Selet",
      component: ProjectPage,
      extraProps: { projectId: '2580-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2580-V-001' })
    },
    {
      path: '/person',
      name: "Persön",
      component: ProjectPage,
      extraProps: { projectId: '2580-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2580-V-002' })
    },
    {
      path: '/holmahult',
      name: "Holmahult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-023' })
    },
    {
      path: '/lyngsasa',
      name: "Lyngsåsa",
      component: ProjectPage,
      extraProps: { projectId: '0764-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0764-V-001' })
    },
    {
      path: '/stromby',
      name: "Strömby",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-004' })
    },
    {
      path: '/harstensbo_mjodehult_ugglebo',
      name: "Harstensbo_Mjödehult_Ugglebo",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-005' })
    },
    {
      path: '/gardsryd',
      name: "Gårdsryd",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-001' })
    },
    {
      path: '/silkomhojden',
      name: "Silkomhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-003' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectId: '2029-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2029-V-001' })
    },
    {
      path: '/kyrkberget',
      name: "Kyrkberget",
      component: ProjectPage,
      extraProps: { projectId: '2062-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2062-V-003' })
    },
    {
      path: '/skallberget/utterberget',
      name: "Skallberget/Utterberget",
      component: ProjectPage,
      extraProps: { projectId: '2084-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2084-V-002' })
    },
    {
      path: '/vindpark-storvrangen',
      name: "Vindpark StorVrången",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-005' })
    },
    {
      path: '/vindpark-klubbacken',
      name: "Vindpark Klubbäcken",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-009' })
    },
    {
      path: '/vindpark-tandsjo',
      name: "Vindpark Tandsjö",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-001' })
    },
    {
      path: '/vindpark-mombyasen',
      name: "Vindpark Mombyåsen",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-004' })
    },
    {
      path: '/bergvind-annefors',
      name: "Bergvind Annefors",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-003' })
    },
    {
      path: '/dyrasvallen',
      name: "Dyråsvallen",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-003' })
    },
    {
      path: '/vindpark-kolvallen',
      name: "Vindpark Kölvallen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-001' })
    },
    {
      path: '/österro',
      name: "ÖSTERRO",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-001' })
    },
    {
      path: '/heleneborg',
      name: "Heleneborg",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-020' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-021' })
    },
    {
      path: '/spargott',
      name: "Spargott",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-022' })
    },
    {
      path: '/almbacka,-felestad',
      name: "Almbacka, Felestad",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-023' })
    },
    {
      path: '/torrlosa',
      name: "Torrlösa",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-024' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-029' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-030' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-033' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-035' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-037' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-039' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-040' })
    },
    {
      path: '/elico-1',
      name: "Elico 1",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-042' })
    },
    {
      path: '/gissleberga',
      name: "Gissleberga",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-051' })
    },
    {
      path: '/duveke,-loarp,-halmstad-1',
      name: "Duveke, Loarp, Halmstad 1",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-053' })
    },
    {
      path: '/duveke,-loarp,-halmstad-2',
      name: "Duveke, Loarp, Halmstad 2",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-054' })
    },
    {
      path: '/duveke,-loarp,-halmstad-3',
      name: "Duveke, Loarp, Halmstad 3",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-055' })
    },
    {
      path: '/vastangard',
      name: "Västangård",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-004' })
    },
    {
      path: '/kornheddinge',
      name: "Kornheddinge",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-005' })
    },
    {
      path: '/trolleberg',
      name: "Trolleberg",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1233-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1233-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1233-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1233-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1233-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1233-V-005' })
    },
    {
      path: '/beateberg-1',
      name: "Beateberg 1",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-001' })
    },
    {
      path: '/sodra-vram',
      name: "Södra Vram",
      component: ProjectPage,
      extraProps: { projectId: '1260-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1260-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-006' })
    },
    {
      path: '/barseback',
      name: "Barsebäck",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-009' })
    },
    {
      path: '/viking-vind',
      name: "Viking Vind",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-017' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1262-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1262-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-001' })
    },
    {
      path: '/lilla-marieholms-kraft-ab',
      name: "Lilla Marieholms Kraft AB",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-002' })
    },
    {
      path: '/tranberga',
      name: "Tranberga",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-017' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-020' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-002' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-013' })
    },
    {
      path: '/vanstad-kommungard',
      name: "Vanstad Kommungård",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-015' })
    },
    {
      path: '/ry',
      name: "Ry",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-023' })
    },
    {
      path: '/langarod',
      name: "Långaröd",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-017' })
    },
    {
      path: '/årrod',
      name: "Årröd",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-018' })
    },
    {
      path: '/he',
      name: "He",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-020' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-023' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-024' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-025' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-031' })
    },
    {
      path: '/norrto',
      name: "Norrto",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-035' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-038' })
    },
    {
      path: '/årrod',
      name: "Årröd",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-041' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-008' })
    },
    {
      path: '/jordboen',
      name: "Jordboen",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-007' })
    },
    {
      path: '/vitakra',
      name: "Vitåkra",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-011' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-012' })
    },
    {
      path: '/manslunda-i',
      name: "Månslunda I",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-013' })
    },
    {
      path: '/tomelilla',
      name: "Tomelilla",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-014' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-015' })
    },
    {
      path: '/ingel-1',
      name: "Ingel 1",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-016' })
    },
    {
      path: '/ingel-2',
      name: "Ingel 2",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-017' })
    },
    {
      path: '/ingel-3',
      name: "Ingel 3",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-018' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-024' })
    },
    {
      path: '/appeltorp',
      name: "Appeltorp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-030' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-037' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-039' })
    },
    {
      path: '/salshog',
      name: "Sälshög",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-044' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-046' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-047' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-048' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-004' })
    },
    {
      path: '/lundsgarden',
      name: "Lundsgården",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-014' })
    },
    {
      path: '/maglaby',
      name: "Maglaby",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-013' })
    },
    {
      path: '/syllstorp',
      name: "Syllstorp",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-014' })
    },
    {
      path: '/tranarp',
      name: "Tranarp",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-023' })
    },
    {
      path: '/masinge',
      name: "Mäsinge",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-014' })
    },
    {
      path: '/boel',
      name: "Boel",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-003' })
    },
    {
      path: '/norra-hamnen',
      name: "Norra hamnen",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-007' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-010' })
    },
    {
      path: '/hansamollan',
      name: "Hansamöllan",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-011' })
    },
    {
      path: '/varpinge-clara',
      name: "Värpinge Clara",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-012' })
    },
    {
      path: '/hardeberga',
      name: "Hardeberga",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-013' })
    },
    {
      path: '/hardeberga',
      name: "Hardeberga",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-018' })
    },
    {
      path: '/maria',
      name: "Maria",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-021' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-008' })
    },
    {
      path: '/norra-moinge',
      name: "Norra Möinge",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-052' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-054' })
    },
    {
      path: '/stureholms-gard',
      name: "Stureholms Gård",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-057' })
    },
    {
      path: '/ormastorp',
      name: "Ormastorp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-058' })
    },
    {
      path: '/örby',
      name: "Örby",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-059' })
    },
    {
      path: '/örby',
      name: "Örby",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-060' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-063' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-064' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-066' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-067' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-068' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-069' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-069' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-070' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-071' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-071' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-072' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-072' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-074' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-074' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-081' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-081' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-082' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-082' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-083' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-083' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-001' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-005' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-007' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-008' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-012' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-017' })
    },
    {
      path: '/ingelstrade',
      name: "Ingelsträde",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-020' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-008' })
    },
    {
      path: '/trollenas',
      name: "Trollenäs",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-012' })
    },
    {
      path: '/backmollan',
      name: "Backmöllan",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-014' })
    },
    {
      path: '/slattang-i',
      name: "Slättäng I",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-015' })
    },
    {
      path: '/aeolus',
      name: "Aeolus",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-016' })
    },
    {
      path: '/ö.-karaby',
      name: "Ö. Karaby",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-017' })
    },
    {
      path: '/vastrabygard',
      name: "Västrabygård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-024' })
    },
    {
      path: '/östra-karaby-ii',
      name: "Östra Karaby II",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-030' })
    },
    {
      path: '/hogersrod',
      name: "Högersröd",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-033' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-035' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-037' })
    },
    {
      path: '/gardstanga',
      name: "Gårdstånga",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-038' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-039' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-041' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-045' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-046' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-047' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-052' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-053' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-054' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-055' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-056' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-057' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-063' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-001' })
    },
    {
      path: '/kadesjo-gussnava',
      name: "Kadesjö-Gussnava",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-017' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-020' })
    },
    {
      path: '/balkakra-vind',
      name: "Balkåkra Vind",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-021' })
    },
    {
      path: '/kopingebro',
      name: "Köpingebro",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-022' })
    },
    {
      path: '/rynge-iii',
      name: "Rynge III",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-023' })
    },
    {
      path: '/st-herrestad-i',
      name: "St Herrestad I",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-025' })
    },
    {
      path: '/st-herrestad-ii',
      name: "St Herrestad II",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-026' })
    },
    {
      path: '/ruuthsbo-i',
      name: "Ruuthsbo I",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-030' })
    },
    {
      path: '/st.-herrestad',
      name: "St. Herrestad",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-038' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-039' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-041' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-043' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-049' })
    },
    {
      path: '/hammarlov',
      name: "Hammarlöv",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-002' })
    },
    {
      path: '/bosarp',
      name: "Bösarp",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-007' })
    },
    {
      path: '/isiegarden',
      name: "Isiegården",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-008' })
    },
    {
      path: '/bjorkliden',
      name: "Björkliden",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-009' })
    },
    {
      path: '/lilla-isie',
      name: "Lilla Isie",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-010' })
    },
    {
      path: '/gislov-ii',
      name: "Gislöv II",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-011' })
    },
    {
      path: '/brunshill',
      name: "Brunshill",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-012' })
    },
    {
      path: '/raborg',
      name: "Råborg",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-013' })
    },
    {
      path: '/bronnestad-honsinge',
      name: "Brönnestad-Hönsinge",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-024' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-029' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-030' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-033' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-037' })
    },
    {
      path: '/margot',
      name: "Margot",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-038' })
    },
    {
      path: '/st-beddinge',
      name: "St Beddinge",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-039' })
    },
    {
      path: '/hemmesdynge',
      name: "Hemmesdynge",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-042' })
    },
    {
      path: '/gronby',
      name: "Grönby",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-038' })
    },
    {
      path: '/nymo',
      name: "Nymö",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-042' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-046' })
    },
    {
      path: '/helan-hovby',
      name: "Helan Hovby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-048' })
    },
    {
      path: '/legered',
      name: "Legered",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-049' })
    },
    {
      path: '/olserod',
      name: "Olseröd",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-052' })
    },
    {
      path: '/ullstorp-åkeboda',
      name: "Ullstorp-Åkeboda",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-063' })
    },
    {
      path: '/öddestad',
      name: "Öddestad",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-064' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-066' })
    },
    {
      path: '/kiaby',
      name: "Kiaby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-067' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-078' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-078' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-079' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-079' })
    },
    {
      path: '/tollarpabjar',
      name: "Tollarpabjär",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-083' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-083' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-085' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-085' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-086' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-086' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-089' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-089' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-090' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-090' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-095' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-095' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-097' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-097' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-098' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-098' })
    },
    {
      path: '/raby-gard',
      name: "Råby Gård",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-100' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-100' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-107' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-107' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-110' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-110' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-004' })
    },
    {
      path: '/zavanna',
      name: "Zavanna",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-009' })
    },
    {
      path: '/borrby1',
      name: "Borrby1",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-010' })
    },
    {
      path: '/mansunen,-gislov',
      name: "Månsunen, Gislöv",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-012' })
    },
    {
      path: '/byara',
      name: "Byåra",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-020' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-024' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-025' })
    },
    {
      path: '/vranarp',
      name: "Vranarp",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-033' })
    },
    {
      path: '/borrby3',
      name: "Borrby3",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-035' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-038' })
    },
    {
      path: '/äsperod',
      name: "Äsperöd",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-039' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-041' })
    },
    {
      path: '/sandby',
      name: "Sandby",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-047' })
    },
    {
      path: '/spannarp',
      name: "Spannarp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-007' })
    },
    {
      path: '/heden',
      name: "Heden",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-010' })
    },
    {
      path: '/ingelstorp',
      name: "Ingelstorp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-011' })
    },
    {
      path: '/skorpinge',
      name: "Skörpinge",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-012' })
    },
    {
      path: '/össjo',
      name: "Össjö",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-017' })
    },
    {
      path: '/humlarp',
      name: "Humlarp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-018' })
    },
    {
      path: '/harninge',
      name: "Härninge",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-019' })
    },
    {
      path: '/boarp',
      name: "Boarp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-025' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-003' })
    },
    {
      path: '/östergard',
      name: "Östergård",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-019' })
    },
    {
      path: '/norra-skravlinge',
      name: "Norra Skrävlinge",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-017' })
    },
    {
      path: '/ängalid-ii,-karlsnas',
      name: "Ängalid II, Karlsnäs",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-027' })
    },
    {
      path: '/ängalid-iv,-norra-skravlinge',
      name: "Ängalid IV, Norra Skrävlinge",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-056' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1260-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1260-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-028' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-033' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-019' })
    },
    {
      path: '/kvidinge',
      name: "Kvidinge",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-010' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-019' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-020' })
    },
    {
      path: '/tranarp',
      name: "Tranarp",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-022' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-002' })
    },
    {
      path: '/annelov-1',
      name: "Annelöv 1",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-007' })
    },
    {
      path: '/ottarp',
      name: "Ottarp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-061' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-073' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-073' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-005' })
    },
    {
      path: '/harriemollan',
      name: "Harriemöllan",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-013' })
    },
    {
      path: '/soderto-mossarp',
      name: "Söderto-Mossarp",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-062' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-033' })
    },
    {
      path: '/örum-vindkraftpark',
      name: "Örum vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-045' })
    },
    {
      path: '/örum',
      name: "Örum",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-047' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-050' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-093' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-093' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-048' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-033' })
    },
    {
      path: '/skanes-varsjo',
      name: "Skånes Värsjö",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-013' })
    },
    {
      path: '/norra-varalov',
      name: "Norra Varalöv",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-046' })
    },
    {
      path: '/arkelstorp-brannskulla',
      name: "Arkelstorp-Brännskulla",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-003' })
    },
    {
      path: '/skanes-varsjo',
      name: "Skånes Värsjö",
      component: ProjectPage,
      extraProps: { projectId: '1257-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1257-V-001' })
    },
    {
      path: '/bellinga',
      name: "Bellinga",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-004' })
    },
    {
      path: '/trulstorp',
      name: "Trulstorp",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1275-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1275-V-004' })
    },
    {
      path: '/rosendal',
      name: "Rosendal",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-051' })
    },
    {
      path: '/lydinge-benarp',
      name: "Lydinge-Benarp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-079' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-079' })
    },
    {
      path: '/karlfaltsgarden',
      name: "Karlfältsgården",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-010' })
    },
    {
      path: '/nasbyholm-ii',
      name: "Näsbyholm II",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-020' })
    },
    {
      path: '/maglarp-vindkraftpark',
      name: "Maglarp vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-022' })
    },
    {
      path: '/ullstorp-åkeboda',
      name: "Ullstorp-Åkeboda",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-073' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-073' })
    },
    {
      path: '/sjunkalotten',
      name: "Sjunkalotten",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-028' })
    },
    {
      path: '/vegeholm',
      name: "Vegeholm",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-023' })
    },
    {
      path: '/haringstorp',
      name: "Häringstorp",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-026' })
    },
    {
      path: '/åkebo',
      name: "Åkebo",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-041' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-101' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-101' })
    },
    {
      path: '/åraslov',
      name: "Åraslöv",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-004' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-013' })
    },
    {
      path: '/halmstadgarden',
      name: "Halmstadgården",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-014' })
    },
    {
      path: '/svalov',
      name: "Svalöv",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-041' })
    },
    {
      path: '/knutstorp',
      name: "Knutstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-047' })
    },
    {
      path: '/duveke-vindkraftpark',
      name: "Duveke vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-048' })
    },
    {
      path: '/knutstorp',
      name: "Knutstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-049' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-004' })
    },
    {
      path: '/uddarp',
      name: "Uddarp",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-005' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-008' })
    },
    {
      path: '/skabersjo-vindkraftpark',
      name: "Skabersjö vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-014' })
    },
    {
      path: '/rydsgards-vindkraftpark',
      name: "Rydsgårds vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-015' })
    },
    {
      path: '/ågerup',
      name: "Ågerup",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-020' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-008' })
    },
    {
      path: '/vallsas',
      name: "Vallsås",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-010' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-033' })
    },
    {
      path: '/munka-tagarp',
      name: "Munka-Tågarp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-036' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1275-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1275-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-020' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-009' })
    },
    {
      path: '/frestensfalla',
      name: "Frestensfälla",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-015' })
    },
    {
      path: '/lillgrund-vindkraftpark',
      name: "Lillgrund Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-002' })
    },
    {
      path: '/vindon',
      name: "Vindön",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-004' })
    },
    {
      path: '/lundakra',
      name: "Lundåkra",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-006' })
    },
    {
      path: '/rogle',
      name: "Rögle",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-056' })
    },
    {
      path: '/vastraby',
      name: "Västraby",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-076' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-076' })
    },
    {
      path: '/vastraby',
      name: "Västraby",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-080' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-080' })
    },
    {
      path: '/pilshult-allerum',
      name: "Pilshult-Allerum",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-085' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-085' })
    },
    {
      path: '/vala',
      name: "Väla",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-087' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-087' })
    },
    {
      path: '/ragakra',
      name: "Rågåkra",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-021' })
    },
    {
      path: '/tangelsas',
      name: "Tängelsås",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-018' })
    },
    {
      path: '/skarhult',
      name: "Skarhult",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-020' })
    },
    {
      path: '/viderup-toftaholm',
      name: "Viderup-Toftaholm",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-050' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-059' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-011' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-021' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-037' })
    },
    {
      path: '/vittskovle',
      name: "Vittskövle",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-039' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-043' })
    },
    {
      path: '/isgrannatorp',
      name: "Isgrannatorp",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-044' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-047' })
    },
    {
      path: '/rabelov',
      name: "Råbelöv",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-057' })
    },
    {
      path: '/åhus-ripa',
      name: "Åhus-Ripa",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-069' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-069' })
    },
    {
      path: '/hoge-vag-vindkraftpark',
      name: "Höge Väg Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-070' })
    },
    {
      path: '/fegelstorp',
      name: "Fegelstorp",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-071' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-071' })
    },
    {
      path: '/borrestad-tolserod',
      name: "Borrestad-Tolseröd",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-077' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-077' })
    },
    {
      path: '/trane-örmatofta',
      name: "Träne Örmatofta",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-091' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-091' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-094' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-094' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-002' })
    },
    {
      path: '/östra-herrestad-vindkraftpark',
      name: "Östra Herrestad Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-031' })
    },
    {
      path: '/össjo-skog',
      name: "Össjö Skog",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-004' })
    },
    {
      path: '/haringstorp',
      name: "Häringstorp",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-015' })
    },
    {
      path: '/roke-algustorp',
      name: "Röke-Algustorp",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-017' })
    },
    {
      path: '/ballingslov',
      name: "Ballingslöv",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-020' })
    },
    {
      path: '/navlingeasen',
      name: "Nävlingeåsen",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-022' })
    },
    {
      path: '/loshult',
      name: "Loshult",
      component: ProjectPage,
      extraProps: { projectId: '1373-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1373-V-002' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-019' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-020' })
    },
    {
      path: '/millingstorp',
      name: "Millingstorp",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-021' })
    },
    {
      path: '/krokek',
      name: "Krokek",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-022' })
    },
    {
      path: '/valla-vind',
      name: "Valla Vind",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-023' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-024' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-028' })
    },
    {
      path: '/ekelunda',
      name: "Ekelunda",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-011' })
    },
    {
      path: '/susekulla',
      name: "Susekulla",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-013' })
    },
    {
      path: '/skorro',
      name: "Skorrö",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-014' })
    },
    {
      path: '/kvilla',
      name: "Kvilla",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-016' })
    },
    {
      path: '/ekaryd-1',
      name: "Ekaryd 1",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-025' })
    },
    {
      path: '/kroka-1',
      name: "Kroka 1",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-026' })
    },
    {
      path: '/kroka-2',
      name: "Kroka 2",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-027' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-028' })
    },
    {
      path: '/ekaryd-2',
      name: "Ekaryd 2",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-029' })
    },
    {
      path: '/greby',
      name: "Greby",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-013' })
    },
    {
      path: '/jamjo',
      name: "Jämjö",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-014' })
    },
    {
      path: '/laxeby',
      name: "Laxeby",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-015' })
    },
    {
      path: '/langlot',
      name: "Långlöt",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-016' })
    },
    {
      path: '/stenninge',
      name: "Stenninge",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-021' })
    },
    {
      path: '/byrum',
      name: "Byrum",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-025' })
    },
    {
      path: '/boda-torp',
      name: "Böda Torp",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-026' })
    },
    {
      path: '/gardslosa',
      name: "Gärdslösa",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-028' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-033' })
    },
    {
      path: '/sammelstorp',
      name: "Sammelstorp",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-045' })
    },
    {
      path: '/stenninge',
      name: "Stenninge",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-038' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-053' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-054' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-055' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-058' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-063' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-066' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-067' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-070' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-071' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-071' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-072' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-072' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-073' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-073' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-074' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-074' })
    },
    {
      path: '/hagestad',
      name: "Hagestad",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-075' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-075' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-078' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-078' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-083' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-083' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-085' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-085' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-086' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-086' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-087' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-087' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-092' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-092' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-093' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-093' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-105' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-105' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-109' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-109' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-113' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-113' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-114' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-114' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-115' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-115' })
    },
    {
      path: '/borrby2',
      name: "Borrby2",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-055' })
    },
    {
      path: '/taghusa',
      name: "Tåghusa",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-059' })
    },
    {
      path: '/borrby2',
      name: "Borrby2",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-063' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-016' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-017' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-017' })
    },
    {
      path: '/staverhult',
      name: "Staverhult",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-029' })
    },
    {
      path: '/kvilla-1',
      name: "Kvilla 1",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-018' })
    },
    {
      path: '/gettnabo-1',
      name: "Gettnabo 1",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-020' })
    },
    {
      path: '/stromby-vastra',
      name: "Strömby västra",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-022' })
    },
    {
      path: '/vetlycke',
      name: "Vetlycke",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-023' })
    },
    {
      path: '/gardslosa',
      name: "Gärdslösa",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-012' })
    },
    {
      path: '/rapplinge',
      name: "Räpplinge",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-019' })
    },
    {
      path: '/stora-istad',
      name: "Stora Istad",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-022' })
    },
    {
      path: '/arbelunda',
      name: "Arbelunda",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-024' })
    },
    {
      path: '/lerkaka',
      name: "Lerkaka",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-031' })
    },
    {
      path: '/nedre-vannborga',
      name: "Nedre Vannborga",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-035' })
    },
    {
      path: '/persnas--hallnas',
      name: "Persnäs- Hallnäs",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-036' })
    },
    {
      path: '/norrby',
      name: "Norrby",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-041' })
    },
    {
      path: '/boda-kronopark',
      name: "Böda Kronopark",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-043' })
    },
    {
      path: '/gyllebo',
      name: "Gyllebo",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-067' })
    },
    {
      path: '/ava',
      name: "Ava",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-015' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-001' })
    },
    {
      path: '/storrisberget',
      name: "Storrisberget",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-002' })
    },
    {
      path: '/knulen',
      name: "Knulen",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-003' })
    },
    {
      path: '/ava',
      name: "Ava",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-004' })
    },
    {
      path: '/gabrielsberget-vast',
      name: "Gabrielsberget Väst",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-005' })
    },
    {
      path: '/stenberg',
      name: "Stenberg",
      component: ProjectPage,
      extraProps: { projectId: '2401-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2401-V-006' })
    },
    {
      path: '/fabodliden',
      name: "Fäbodliden",
      component: ProjectPage,
      extraProps: { projectId: '2404-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2404-V-001' })
    },
    {
      path: '/bliekevare',
      name: "Bliekevare",
      component: ProjectPage,
      extraProps: { projectId: '2425-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2425-V-002' })
    },
    {
      path: '/vindkraftpark-kvallaliden',
      name: "Vindkraftpark Kvällåliden",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-005' })
    },
    {
      path: '/vindkraftpark-backaskog',
      name: "Vindkraftpark Bäckaskog",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-006' })
    },
    {
      path: '/hogaliden',
      name: "Högaliden",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-013' })
    },
    {
      path: '/taftea',
      name: "Täfteå",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-015' })
    },
    {
      path: '/hornmyran',
      name: "Hornmyran",
      component: ProjectPage,
      extraProps: { projectId: '2481-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2481-V-001' })
    },
    {
      path: '/vinliden',
      name: "Vinliden",
      component: ProjectPage,
      extraProps: { projectId: '2481-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2481-V-003' })
    },
    {
      path: '/petlandskar',
      name: "Petlandskär",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-014' })
    },
    {
      path: '/vastvattnet',
      name: "Västvattnet",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-007' })
    },
    {
      path: '/morttjarnberget',
      name: "Mörttjärnberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-016' })
    },
    {
      path: '/garpkolen',
      name: "Garpkölen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-025' })
    },
    {
      path: '/moskogen',
      name: "Moskogen",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-010' })
    },
    {
      path: '/rashon',
      name: "Råshön",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-004' })
    },
    {
      path: '/storrun',
      name: "Storrun",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-005' })
    },
    {
      path: '/brocklingsberget-1',
      name: "Bröcklingsberget 1",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-009' })
    },
    {
      path: '/brocklingsberget-2',
      name: "Bröcklingsberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-010' })
    },
    {
      path: '/midsommarberget',
      name: "Midsommarberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-015' })
    },
    {
      path: '/havsnas',
      name: "Havsnäs",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-014' })
    },
    {
      path: '/rodovalen',
      name: "Rodovålen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-030' })
    },
    {
      path: '/langavalen',
      name: "Långåvålen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-027' })
    },
    {
      path: '/grasjon',
      name: "Gråsjön",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-007' })
    },
    {
      path: '/middagsberget',
      name: "Middagsberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-014' })
    },
    {
      path: '/gardsjoberget',
      name: "Gårdsjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-011' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-013' })
    },
    {
      path: '/ängersjokolen',
      name: "Ängersjökölen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-035' })
    },
    {
      path: '/norderasen',
      name: "Norderåsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-028' })
    },
    {
      path: '/tasjoberget',
      name: "Tåsjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-021' })
    },
    {
      path: '/klocka',
      name: "Klocka",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-009' })
    },
    {
      path: '/tangbole',
      name: "Tångböle",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-011' })
    },
    {
      path: '/skaftasen',
      name: "Skaftåsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-032' })
    },
    {
      path: '/lovhogen',
      name: "Lövhögen",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-014' })
    },
    {
      path: '/digerasen',
      name: "Digeråsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-024' })
    },
    {
      path: '/nyhemsmanen',
      name: "Nyhemsmanen",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-017' })
    },
    {
      path: '/nyhemsmanen-storberget',
      name: "Nyhemsmanen-Storberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-004' })
    },
    {
      path: '/lill-villflon',
      name: "Lill-Villflon",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-009' })
    },
    {
      path: '/kalkstenshojden',
      name: "Kalkstenshöjden",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-007' })
    },
    {
      path: '/kalkstenshojden',
      name: "Kalkstenshöjden",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-003' })
    },
    {
      path: '/storhogen',
      name: "Storhögen",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-003' })
    },
    {
      path: '/bodberget',
      name: "Bodberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-008' })
    },
    {
      path: '/sandtjarnberget',
      name: "Sandtjärnberget",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-031' })
    },
    {
      path: '/bjorkvattnet',
      name: "Björkvattnet",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-015' })
    },
    {
      path: '/dalasen',
      name: "Dalåsen",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-010' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-010' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-018' })
    },
    {
      path: '/nysaterasen',
      name: "Nysäteråsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-029' })
    },
    {
      path: '/tornas',
      name: "Tornäs",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-006' })
    },
    {
      path: '/kalkstenhojden',
      name: "Kalkstenhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-006' })
    },
    {
      path: '/handsjoknusen',
      name: "Handsjöknusen",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-024' })
    },
    {
      path: '/brickan/olingsdal',
      name: "Brickan/Olingsdal",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-037' })
    },
    {
      path: '/risbrunn',
      name: "Risbrunn",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-039' })
    },
    {
      path: '/glissjoberget/norderasen',
      name: "Glissjöberget/Norderåsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-038' })
    },
    {
      path: '/ope',
      name: "Ope",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-005' })
    },
    {
      path: '/nordbyn',
      name: "Nordbyn",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-009' })
    },
    {
      path: '/dintestorp',
      name: "Dintestorp",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-005' })
    },
    {
      path: '/rumperyd',
      name: "Rumperyd",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-006' })
    },
    {
      path: '/ljunghem-1.13',
      name: "Ljunghem 1.13",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-007' })
    },
    {
      path: '/tunarp',
      name: "Tunarp",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-008' })
    },
    {
      path: '/ljunghem',
      name: "Ljunghem",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-013' })
    },
    {
      path: '/golhult',
      name: "Gölhult",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-004' })
    },
    {
      path: '/salvaryd',
      name: "Salvaryd",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-001' })
    },
    {
      path: '/broddstorp',
      name: "Broddstorp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-005' })
    },
    {
      path: '/branalt',
      name: "Brånalt",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-002' })
    },
    {
      path: '/öringe',
      name: "Öringe",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-056' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-009' })
    },
    {
      path: '/uvereds-vindkraftforening',
      name: "Uvereds Vindkraftförening",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-019' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-027' })
    },
    {
      path: '/skorstorp',
      name: "Skörstorp",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-035' })
    },
    {
      path: '/orreberg',
      name: "Orreberg",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-012' })
    },
    {
      path: '/hanhult',
      name: "Hanhult",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-001' })
    },
    {
      path: '/brasmaviken',
      name: "Brasmaviken",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-006' })
    },
    {
      path: '/forsvik',
      name: "Forsvik",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-007' })
    },
    {
      path: '/vindpark-ekeby',
      name: "Vindpark Ekeby",
      component: ProjectPage,
      extraProps: { projectId: '1881-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1881-V-001' })
    },
    {
      path: '/eveboda',
      name: "Eveboda",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-001' })
    },
    {
      path: '/vkv_lin-005',
      name: "vkv_lin-005",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-006' })
    },
    {
      path: '/vkv_lin-021',
      name: "vkv_lin-021",
      component: ProjectPage,
      extraProps: { projectId: '0580-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0580-V-016' })
    },
    {
      path: '/herrberga',
      name: "Herrberga",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-005' })
    },
    {
      path: '/dansbygget/svenshult',
      name: "Dansbygget/Svenshult",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-003' })
    },
    {
      path: '/lovstaviken',
      name: "Lövstaviken",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-010' })
    },
    {
      path: '/vindil-kraft-ab',
      name: "Vindil Kraft AB",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-015' })
    },
    {
      path: '/vaby',
      name: "Väby",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-016' })
    },
    {
      path: '/munkagard',
      name: "Munkagård",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-005' })
    },
    {
      path: '/utteros',
      name: "Utteros",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-018' })
    },
    {
      path: '/ravlanda,-tyft',
      name: "Rävlanda, Tyft",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-005' })
    },
    {
      path: '/sundsby',
      name: "sundsby",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-011' })
    },
    {
      path: '/tyfta-vindkraftpark',
      name: "Tyfta Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1419-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1419-V-013' })
    },
    {
      path: '/ileberg-1,-tarnmasen',
      name: "Ileberg 1, Tärnmåsen",
      component: ProjectPage,
      extraProps: { projectId: '1421-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1421-V-005' })
    },
    {
      path: '/jarmunderod(lilla-parken)-3-verk',
      name: "Järmunderöd(Lilla Parken) 3 verk",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-010' })
    },
    {
      path: '/torod',
      name: "Toröd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-018' })
    },
    {
      path: '/haby-torp',
      name: "Håby-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-022' })
    },
    {
      path: '/skaverod',
      name: "Skaveröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-015' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-016' })
    },
    {
      path: '/hud',
      name: "Hud",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-032' })
    },
    {
      path: '/skallerod-habackemarken',
      name: "Skalleröd Håbäckemarken",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-048' })
    },
    {
      path: '/skarbo',
      name: "Skärbo",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-054' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectId: '1445-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1445-V-003' })
    },
    {
      path: '/grashult',
      name: "Gräshult",
      component: ProjectPage,
      extraProps: { projectId: '1446-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1446-V-005' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-002' })
    },
    {
      path: '/qvantenburg-2',
      name: "Qvantenburg 2",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-012' })
    },
    {
      path: '/kuserud-1',
      name: "Kuserud 1",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-019' })
    },
    {
      path: '/karlsfalt',
      name: "Karlsfält",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-023' })
    },
    {
      path: '/berg-vastra',
      name: "Berg Västra",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-003' })
    },
    {
      path: '/vindkraftpark-lekvall',
      name: "Vindkraftpark Lekvall",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-015' })
    },
    {
      path: '/girovind',
      name: "Girovind",
      component: ProjectPage,
      extraProps: { projectId: '1466-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1466-V-001' })
    },
    {
      path: '/skatofta',
      name: "Skatofta",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-029' })
    },
    {
      path: '/lycke',
      name: "Lycke",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-001' })
    },
    {
      path: '/stale',
      name: "STALE",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-021' })
    },
    {
      path: '/vindkraftprojekt-stale',
      name: "Vindkraftprojekt Stale",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-023' })
    },
    {
      path: '/lejdebergen',
      name: "LEJDEBERGEN",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-028' })
    },
    {
      path: '/neanberg/vik',
      name: "Neanberg/VIK",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-003' })
    },
    {
      path: '/duvered',
      name: "Duvered",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-002' })
    },
    {
      path: '/vindpark-ekesbo',
      name: "Vindpark Ekesbo",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-010' })
    },
    {
      path: '/faleberg',
      name: "Fåleberg",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-002' })
    },
    {
      path: '/vindkraft-bangahagen',
      name: "Vindkraft Bångahagen",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-005' })
    },
    {
      path: '/sjoberg',
      name: "Sjöberg",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-006' })
    },
    {
      path: '/simmatorp-/-7835',
      name: "SIMMATORP / 7835",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-010' })
    },
    {
      path: '/viglunda-/-7307',
      name: "VIGLUNDA / 7307",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-016' })
    },
    {
      path: '/kilagården-/7306-1',
      name: "KILAGÅRDEN /7306-1",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-025' })
    },
    {
      path: '/karstorp-/-7044-3',
      name: "KARSTORP / 7044-3",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-031' })
    },
    {
      path: '/nyckeltorp-/-7308-2',
      name: "NYCKELTORP / 7308-2",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-033' })
    },
    {
      path: '/blombacka-/-7837-1',
      name: "BLOMBACKA / 7837-1",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-038' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-046' })
    },
    {
      path: '/-askeberga',
      name: "Askeberga",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-008' })
    },
    {
      path: '/bossgarden-(galneryd)',
      name: "Bossgården (Galneryd)",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-002' })
    },
    {
      path: '/getaryggen,-soderryd,-stora-bjorstorp',
      name: "Getaryggen, Söderryd, Stora Björstorp",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-005' })
    },
    {
      path: '/fagelas-torp',
      name: "Fågelås-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-006' })
    },
    {
      path: '/fagelas-spakas,-borrbackstorp',
      name: "Fågelås-Spakås, Borrbäckstorp",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-015' })
    },
    {
      path: '/badene',
      name: "Badene",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-003' })
    },
    {
      path: '/goteve-vindpark',
      name: "Göteve Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-010' })
    },
    {
      path: '/monarp',
      name: "Mönarp",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-018' })
    },
    {
      path: '/skanum-a3',
      name: "Skånum A3",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-033' })
    },
    {
      path: '/tyskagarden',
      name: "Tyskagården",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-043' })
    },
    {
      path: '/vissle',
      name: "Vissle",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-008' })
    },
    {
      path: '/ramsnas',
      name: "Ramsnäs",
      component: ProjectPage,
      extraProps: { projectId: '1860-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1860-V-001' })
    },
    {
      path: '/ullavi',
      name: "Ullavi",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-002' })
    },
    {
      path: '/kyleberg',
      name: "Kyleberg",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-005' })
    },
    {
      path: '/raby',
      name: "Råby",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-015' })
    },
    {
      path: '/boda',
      name: "Boda",
      component: ProjectPage,
      extraProps: { projectId: '0512-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0512-V-003' })
    },
    {
      path: '/hogstad-gard',
      name: "Högstad Gård",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-005' })
    },
    {
      path: '/svenneby-gard',
      name: "Svenneby Gård",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-008' })
    },
    {
      path: '/hackegarden',
      name: "Hackegården",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-004' })
    },
    {
      path: '/skottorp',
      name: "Skottorp",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-015' })
    },
    {
      path: '/vallberga-gard-molla',
      name: "Vallberga Gård Mölla",
      component: ProjectPage,
      extraProps: { projectId: '1381-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1381-V-020' })
    },
    {
      path: '/hasslas-morups-lunnagard',
      name: "Hässlås Morups-Lunnagård",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-006' })
    },
    {
      path: '/hasslas-morups-lunnagard',
      name: "Hässlås Morups-Lunnagård",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-007' })
    },
    {
      path: '/sprangskulla',
      name: "Språngskulla",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-006' })
    },
    {
      path: '/torekull-mr-trend-9001',
      name: "Torekull Mr trend 9001",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-010' })
    },
    {
      path: '/tvaaker',
      name: "Tvååker",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-016' })
    },
    {
      path: '/spekerods-torp',
      name: "Spekeröds-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-005' })
    },
    {
      path: '/hog',
      name: "Hog",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-011' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectId: '1427-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1427-V-001' })
    },
    {
      path: '/svarteborg',
      name: "Svarteborg",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-004' })
    },
    {
      path: '/hede-ryr',
      name: "Hede-Ryr",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-011' })
    },
    {
      path: '/vindpark-annerod',
      name: "Vindpark Anneröd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-028' })
    },
    {
      path: '/hessland',
      name: "Hessland",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-020' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-023' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-024' })
    },
    {
      path: '/kloverod',
      name: "Klöveröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-027' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-034' })
    },
    {
      path: '/lur-backa',
      name: "Lur-Backa",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-036' })
    },
    {
      path: '/kil-lursang',
      name: "Kil-Lursäng",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-038' })
    },
    {
      path: '/kil-lursang',
      name: "Kil-Lursäng",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-040' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-066' })
    },
    {
      path: '/hajom-holane',
      name: "Hajom Holane",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-003' })
    },
    {
      path: '/eolus-vind',
      name: "Eolus Vind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-006' })
    },
    {
      path: '/ulvstorp,-djerf',
      name: "Ulvstorp, Djerf",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-011' })
    },
    {
      path: '/tumleberg-norr',
      name: "Tumleberg Norr",
      component: ProjectPage,
      extraProps: { projectId: '1445-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1445-V-002' })
    },
    {
      path: '/lid',
      name: "Lid",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-002' })
    },
    {
      path: '/tangelsbol',
      name: "Tängelsbol",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-002' })
    },
    {
      path: '/grinstads-hagen-2-ost',
      name: "Grinstads-Hagen 2 öst",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-004' })
    },
    {
      path: '/vastergarden-5',
      name: "Västergården 5",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-006' })
    },
    {
      path: '/fagelbacka',
      name: "Fågelbacka",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-013' })
    },
    {
      path: '/sobyn',
      name: "Söbyn",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-015' })
    },
    {
      path: '/bolstads-prastgard-1',
      name: "Bolstads-Prästgård 1",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-017' })
    },
    {
      path: '/brabol',
      name: "Bråbol",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-018' })
    },
    {
      path: '/holken',
      name: "Holken",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-020' })
    },
    {
      path: '/sannersby',
      name: "Sannersby",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-004' })
    },
    {
      path: '/stora-farsnas',
      name: "Stora Farsnäs",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-004' })
    },
    {
      path: '/berghem',
      name: "Berghem",
      component: ProjectPage,
      extraProps: { projectId: '1463-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1463-V-006' })
    },
    {
      path: '/branneberg',
      name: "Bränneberg",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-004' })
    },
    {
      path: '/bustorp',
      name: "Bustorp",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-005' })
    },
    {
      path: '/tornum',
      name: "Tornum",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-033' })
    },
    {
      path: '/ulfstorp',
      name: "Ulfstorp",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-034' })
    },
    {
      path: '/vanga-hed-1',
      name: "Vånga Hed 1",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-037' })
    },
    {
      path: '/kollbogarden-iii',
      name: "Kollbogården III",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-015' })
    },
    {
      path: '/äle',
      name: "Äle",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-038' })
    },
    {
      path: '/äskekarr-1&2',
      name: "Äskekärr 1&2",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-003' })
    },
    {
      path: '/noteberg',
      name: "Nöteberg",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-001' })
    },
    {
      path: '/sivik',
      name: "Sivik",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-002' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-003' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-011' })
    },
    {
      path: '/gunnarby-&-skoghem',
      name: "Gunnarby & Skoghem",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-008' })
    },
    {
      path: '/herrestads-svenseröd',
      name: "HERRESTADS-SVENSERÖD",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-009' })
    },
    {
      path: '/nordmanneröd',
      name: "NORDMANNERÖD",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-014' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-017' })
    },
    {
      path: '/råsseröd',
      name: "RÅSSERÖD",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-019' })
    },
    {
      path: '/bockegarden',
      name: "Bockegården",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-003' })
    },
    {
      path: '/haljerud',
      name: "Häljerud",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-013' })
    },
    {
      path: '/honseberg',
      name: "Hönseberg",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-014' })
    },
    {
      path: '/upplo',
      name: "Upplo",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-003' })
    },
    {
      path: '/hasselbacka',
      name: "Hässelbacka",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-004' })
    },
    {
      path: '/soderbodane',
      name: "Söderbodane",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-006' })
    },
    {
      path: '/varslen',
      name: "Värslen",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-001' })
    },
    {
      path: '/arvidstorp-vind',
      name: "Arvidstorp vind",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-003' })
    },
    {
      path: '/stenbrona-saleby',
      name: "Stenbrona-Saleby",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-004' })
    },
    {
      path: '/narefors-1-norr',
      name: "Närefors 1 Norr",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-008' })
    },
    {
      path: '/bast',
      name: "Bast",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-013' })
    },
    {
      path: '/lindarva',
      name: "Lindärva",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-025' })
    },
    {
      path: '/harjevad',
      name: "Härjevad",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-026' })
    },
    {
      path: '/storeberg',
      name: "Storeberg",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-028' })
    },
    {
      path: '/entorp-/-5690-1',
      name: "ENTORP / 5690-1",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-004' })
    },
    {
      path: '/horshaga-/-7309',
      name: "HORSHAGA / 7309",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-022' })
    },
    {
      path: '/skalleberg-och-dunabolet',
      name: "Skalleberg och Dunabolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-001' })
    },
    {
      path: '/skalleberg-och-bossgarden',
      name: "Skalleberg och Bossgården",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-003' })
    },
    {
      path: '/åsen',
      name: "Åsen",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-009' })
    },
    {
      path: '/prastbolet',
      name: "Prästbolet",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-016' })
    },
    {
      path: '/fridene',
      name: "Fridene",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-028' })
    },
    {
      path: '/övre-rinkabacken',
      name: "Övre Rinkabäcken",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-037' })
    },
    {
      path: '/skalleberg',
      name: "Skalleberg",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-048' })
    },
    {
      path: '/krogstorp',
      name: "Krogstorp",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-006' })
    },
    {
      path: '/gudhem',
      name: "Gudhem",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-008' })
    },
    {
      path: '/skanum-r1',
      name: "Skånum R1",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-034' })
    },
    {
      path: '/vindkraftanlaggning-norrboda',
      name: "Vindkraftanläggning Norrboda",
      component: ProjectPage,
      extraProps: { projectId: '1862-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1862-V-001' })
    },
    {
      path: '/vindkraftanlaggning-grannas-eka',
      name: "Vindkraftanläggning Grannäs Eka",
      component: ProjectPage,
      extraProps: { projectId: '1862-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1862-V-002' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectId: '1883-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1883-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-004' })
    },
    {
      path: '/blotskog',
      name: "Blötskog",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-014' })
    },
    {
      path: '/albrunna-norra',
      name: "Albrunna norra",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-001' })
    },
    {
      path: '/albrunna-norra',
      name: "Albrunna norra",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-002' })
    },
    {
      path: '/brostorp',
      name: "Brostorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-006' })
    },
    {
      path: '/brottorp',
      name: "Bröttorp",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-007' })
    },
    {
      path: '/degerhamn-piren-i',
      name: "Degerhamn piren I",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-009' })
    },
    {
      path: '/dorby',
      name: "Dörby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-010' })
    },
    {
      path: '/gronhogen',
      name: "Grönhögen",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-014' })
    },
    {
      path: '/mellstaby',
      name: "Mellstaby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-025' })
    },
    {
      path: '/ventlinge',
      name: "Ventlinge",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-041' })
    },
    {
      path: '/ävro',
      name: "Ävrö",
      component: ProjectPage,
      extraProps: { projectId: '0882-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0882-V-003' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-003' })
    },
    {
      path: '/gunnon',
      name: "Gunnön",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-001' })
    },
    {
      path: '/vindkraft-stjarnarp',
      name: "Vindkraft Stjärnarp",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-013' })
    },
    {
      path: '/skintaby',
      name: "Skintaby",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-015' })
    },
    {
      path: '/martensklack',
      name: "Mårtensklack",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-001' })
    },
    {
      path: '/vackerdalberget',
      name: "Vackerdalberget",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-003' })
    },
    {
      path: '/vindpark-stocka',
      name: "Vindpark Stocka",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-001' })
    },
    {
      path: '/vindpark-morkasen',
      name: "Vindpark Mörkåsen",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-002' })
    },
    {
      path: '/langberget-2',
      name: "Långberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-005' })
    },
    {
      path: '/raftsjohojden-syd',
      name: "Raftsjöhöjden syd",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-006' })
    },
    {
      path: '/tasvedberget',
      name: "Tåsvedberget",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-008' })
    },
    {
      path: '/gammalbodberget-1.',
      name: "Gammalbodberget 1.",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-005' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-006' })
    },
    {
      path: '/axelsvik-1',
      name: "Axelsvik 1",
      component: ProjectPage,
      extraProps: { projectId: '2514-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2514-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-003' })
    },
    {
      path: '/nashulta-åstorp',
      name: "Näshulta Åstorp",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-006' })
    },
    {
      path: '/brokafall',
      name: "Brokafall",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-010' })
    },
    {
      path: '/spinkhemmet',
      name: "Spinkhemmet",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-012' })
    },
    {
      path: '/ekekullen-dintestorp',
      name: "Ekekullen Dintestorp",
      component: ProjectPage,
      extraProps: { projectId: '0620-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0620-V-001' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-007' })
    },
    {
      path: '/skarpa-alby-i',
      name: "Skarpa Alby I",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-030' })
    },
    {
      path: '/ullevi-i',
      name: "Ullevi I",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-037' })
    },
    {
      path: '/ullevi-ii',
      name: "Ullevi II",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-038' })
    },
    {
      path: '/ryningsnas',
      name: "Ryningsnäs",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-001' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-003' })
    },
    {
      path: '/vennebjorke',
      name: "Vennebjörke",
      component: ProjectPage,
      extraProps: { projectId: '0884-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0884-V-001' })
    },
    {
      path: '/vannborga',
      name: "Vannborga",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-006' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-001' })
    },
    {
      path: '/silkomhojden',
      name: "Silkomhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-003' })
    },
    {
      path: '/gussjoberget',
      name: "Gussjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-005' })
    },
    {
      path: '/sausberget',
      name: "Sausberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-006' })
    },
    {
      path: '/vindpark-nyvallsasen',
      name: "Vindpark Nyvallsåsen",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-008' })
    },
    {
      path: '/skogberget-åsboberget-verk-1',
      name: "Skogberget-Åsboberget verk 1",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-010' })
    },
    {
      path: '/vindkraft-vardkasen',
      name: "Vindkraft Vårdkasen",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-001' })
    },
    {
      path: '/vardkallberget',
      name: "Vårdkallberget",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-001' })
    },
    {
      path: '/bodtjarnberget',
      name: "Bodtjärnberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-001' })
    },
    {
      path: '/harrsjon',
      name: "Harrsjön",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-003' })
    },
    {
      path: '/betasberget',
      name: "Betåsberget",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-005' })
    },
    {
      path: '/handsjokrusen-1.',
      name: "Handsjökrusen 1.",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-007' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-008' })
    },
    {
      path: '/noret',
      name: "Noret",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-003' })
    },
    {
      path: '/storon',
      name: "Storön",
      component: ProjectPage,
      extraProps: { projectId: '2514-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2514-V-001' })
    },
    {
      path: '/holma',
      name: "Holma",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-024' })
    },
    {
      path: '/hasslehult',
      name: "Hässlehult",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-006' })
    },
    {
      path: '/spraxhult',
      name: "Språxhult",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-008' })
    },
    {
      path: '/ljungryda',
      name: "Ljungryda",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-001' })
    },
    {
      path: '/ljungryda',
      name: "Ljungryda",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-002' })
    },
    {
      path: '/pebo-naturbruk',
      name: "PeBo Naturbruk",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-029' })
    },
    {
      path: '/urasa',
      name: "Uråsa",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-004' })
    },
    {
      path: '/ryd-ronnerum',
      name: "Ryd-Rönnerum",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-028' })
    },
    {
      path: '/ryd_ronnerum_hogsrum',
      name: "Ryd_Rönnerum_Högsrum",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-052' })
    },
    {
      path: '/åsen',
      name: "Åsen",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-002' })
    },
    {
      path: '/vindpark-klubbacken',
      name: "Vindpark Klubbäcken",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-002' })
    },
    {
      path: '/nyborg-ryggasen',
      name: "Nyborg Ryggåsen",
      component: ProjectPage,
      extraProps: { projectId: '0139-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0139-V-001' })
    },
    {
      path: '/hannas',
      name: "Hannas",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-036' })
    },
    {
      path: '/ängalid-iii-&-torsnas,-torrlosa',
      name: "Ängalid III & Torsnäs, Torrlösa",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-016' })
    },
    {
      path: '/kadesjo-gussnava',
      name: "Kadesjö-Gussnava",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-014' })
    },
    {
      path: '/soderto-mossarp',
      name: "Söderto-Mossarp",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-001' })
    },
    {
      path: '/tranarp-karreberga',
      name: "Tranarp Kärreberga",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-012' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-021' })
    },
    {
      path: '/vastanby-gard',
      name: "Västanby gård",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-061' })
    },
    {
      path: '/örum-vindkraftpark',
      name: "Örum vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-087' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-087' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-012' })
    },
    {
      path: '/snapparp',
      name: "Snapparp",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-005' })
    },
    {
      path: '/vinninge',
      name: "Vinninge",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-016' })
    },
    {
      path: '/äsperod',
      name: "Äsperöd",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-025' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-008' })
    },
    {
      path: '/kvistofta-katslosa',
      name: "Kvistofta-Katslösa",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-078' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-078' })
    },
    {
      path: '/odarslov',
      name: "Odarslöv",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-021' })
    },
    {
      path: '/reslovsgarden',
      name: "Reslövsgården",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-015' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-028' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-038' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-046' })
    },
    {
      path: '/faladen',
      name: "Fäladen",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-050' })
    },
    {
      path: '/tirup-hallstorp',
      name: "Tirup Hällstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-052' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-057' })
    },
    {
      path: '/trolleberg',
      name: "Trolleberg",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1262-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1262-V-007' })
    },
    {
      path: '/tjustorp',
      name: "Tjustorp",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-013' })
    },
    {
      path: '/kadesjo',
      name: "Kadesjö",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-012' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-019' })
    },
    {
      path: '/lyby',
      name: "Lyby",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-029' })
    },
    {
      path: '/sallerup',
      name: "Sallerup",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-002' })
    },
    {
      path: '/orup',
      name: "Orup",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-003' })
    },
    {
      path: '/valterslund',
      name: "Valterslund",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-019' })
    },
    {
      path: '/everod-vindkraftpark',
      name: "Everöd Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-028' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-043' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-018' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-007' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-008' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-017' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-018' })
    },
    {
      path: '/sonnertorp',
      name: "Sönnertorp",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-002' })
    },
    {
      path: '/norra-hamnen',
      name: "Norra hamnen",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-005' })
    },
    {
      path: '/varpinge',
      name: "Värpinge",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-014' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-062' })
    },
    {
      path: '/hyllstorp',
      name: "Hyllstorp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-084' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-084' })
    },
    {
      path: '/ingelstrade',
      name: "Ingelsträde",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-003' })
    },
    {
      path: '/stora-gorslov-tappeshusen',
      name: "Stora Görslöv-Täppeshusen",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-004' })
    },
    {
      path: '/kullen',
      name: "Kullen",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-006' })
    },
    {
      path: '/stora-gorslov',
      name: "Stora Görslöv",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-018' })
    },
    {
      path: '/bronneslov',
      name: "Brönneslöv",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-011' })
    },
    {
      path: '/arup-hogserod',
      name: "Arup-Högseröd",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-048' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-060' })
    },
    {
      path: '/bjaresjo',
      name: "Bjäresjö",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-004' })
    },
    {
      path: '/slitevind-rynge',
      name: "Slitevind Rynge",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-024' })
    },
    {
      path: '/slitevind-eriksfalt',
      name: "Slitevind Eriksfält",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-027' })
    },
    {
      path: '/larsbo',
      name: "Larsbo",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-028' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-037' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-006' })
    },
    {
      path: '/gislov',
      name: "Gislöv",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-023' })
    },
    {
      path: '/maglarp-vindkraftpark',
      name: "Maglarp vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-028' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-041' })
    },
    {
      path: '/önnestad',
      name: "Önnestad",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-050' })
    },
    {
      path: '/mollebacken',
      name: "Möllebacken",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-051' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-053' })
    },
    {
      path: '/hovby',
      name: "Hovby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-054' })
    },
    {
      path: '/fjalkinge',
      name: "Fjälkinge",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-055' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-065' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-065' })
    },
    {
      path: '/hassla',
      name: "Hassla",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-080' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-080' })
    },
    {
      path: '/rinkaby',
      name: "Rinkaby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-092' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-092' })
    },
    {
      path: '/nobbelov',
      name: "Nöbbelöv",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-099' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-099' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-103' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-103' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-106' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-106' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-108' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-108' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-109' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-109' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-111' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-111' })
    },
    {
      path: '/legeved',
      name: "Legeved",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-112' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-112' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-006' })
    },
    {
      path: '/simris1',
      name: "Simris1",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-017' })
    },
    {
      path: '/karlaby',
      name: "Karlaby",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-030' })
    },
    {
      path: '/rorum',
      name: "Rörum",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-034' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-037' })
    },
    {
      path: '/olofsfalt',
      name: "Olofsfält",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-026' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-028' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-032' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-002' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-018' })
    },
    {
      path: '/halmstadgarden',
      name: "Halmstadgården",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-026' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-031' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-009' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1261-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1261-V-013' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-001' })
    },
    {
      path: '/alestad-harderup',
      name: "Alestad-Hårderup",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-004' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-005' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-010' })
    },
    {
      path: '/assmasa',
      name: "Assmåsa",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-016' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-017' })
    },
    {
      path: '/alestad-harderup',
      name: "Alestad-Hårderup",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-018' })
    },
    {
      path: '/huggelseke-bessinge',
      name: "Huggelseke-Bessinge",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-003' })
    },
    {
      path: '/brostorp-snogerod',
      name: "Brostorp-Snogeröd",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-006' })
    },
    {
      path: '/everod-vindkraftpark',
      name: "Everöd Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-009' })
    },
    {
      path: '/ramsasa',
      name: "Ramsåsa",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-022' })
    },
    {
      path: '/ingelstadgarden',
      name: "Ingelstadgården",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-023' })
    },
    {
      path: '/bollerup',
      name: "Bollerup",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-045' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-011' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-009' })
    },
    {
      path: '/odarslov',
      name: "Odarslöv",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-017' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-020' })
    },
    {
      path: '/örja',
      name: "Örja",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-053' })
    },
    {
      path: '/kulla-gunnarstorp',
      name: "Kulla Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-055' })
    },
    {
      path: '/horsahagen',
      name: "Horsahagen",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-065' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-065' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-002' })
    },
    {
      path: '/glimminge',
      name: "Glimminge",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-007' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-009' })
    },
    {
      path: '/ravatorpet',
      name: "Rävatorpet",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-010' })
    },
    {
      path: '/vastrabygard',
      name: "Västrabygård",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-022' })
    },
    {
      path: '/slattang',
      name: "Slättäng",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-026' })
    },
    {
      path: '/äspinge-klemedstorp',
      name: "Äspinge-Klemedstorp",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-029' })
    },
    {
      path: '/gardstanga',
      name: "Gårdstånga",
      component: ProjectPage,
      extraProps: { projectId: '1285-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1285-V-049' })
    },
    {
      path: '/ruuthsbo-karragarden',
      name: "Ruuthsbo-Kärragården",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-003' })
    },
    {
      path: '/ystad-hamn',
      name: "Ystad hamn",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-014' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-019' })
    },
    {
      path: '/st-herrestad',
      name: "St Herrestad",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-046' })
    },
    {
      path: '/stora-beddinge',
      name: "Stora Beddinge",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-001' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-004' })
    },
    {
      path: '/bronnestad-honsinge',
      name: "Brönnestad-Hönsinge",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-017' })
    },
    {
      path: '/stora-jordberga',
      name: "Stora Jordberga",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-025' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-035' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-036' })
    },
    {
      path: '/lyngby',
      name: "Lyngby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-045' })
    },
    {
      path: '/gards-kopinge',
      name: "Gärds-Köpinge",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-056' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-059' })
    },
    {
      path: '/isgrannatorp',
      name: "Isgrannatorp",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-072' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-072' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-081' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-081' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-102' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-102' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-104' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-104' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-105' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-105' })
    },
    {
      path: '/östra-herrestad-vindkraftpark',
      name: "Östra Herrestad Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-018' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-019' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-027' })
    },
    {
      path: '/ingelstorp-strovelstorp',
      name: "Ingelstorp Strövelstorp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-002' })
    },
    {
      path: '/össjo-vindkraftpark',
      name: "Össjö vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-009' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-024' })
    },
    {
      path: '/skorpinge',
      name: "Skörpinge",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-029' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-016' })
    },
    {
      path: '/klagerup',
      name: "Klågerup",
      component: ProjectPage,
      extraProps: { projectId: '1263-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1263-V-003' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-019' })
    },
    {
      path: '/jordberga',
      name: "Jordberga",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-003' })
    },
    {
      path: '/kiaby',
      name: "Kiaby",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-058' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-025' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-012' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-015' })
    },
    {
      path: '/kvilla-2',
      name: "Kvilla 2",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-019' })
    },
    {
      path: '/finlabo',
      name: "Finlabo",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-021' })
    },
    {
      path: '/hunderum',
      name: "Hunderum",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-029' })
    },
    {
      path: '/langlot',
      name: "Långlöt",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-042' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-056' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-064' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-079' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-079' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-081' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-081' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-088' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-088' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-091' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-091' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-102' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-102' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-106' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-106' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-107' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-107' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-110' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-110' })
    },
    {
      path: '/stromby/karlshult',
      name: "Strömby/Karlshult",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-017' })
    },
    {
      path: '/langore',
      name: "Långöre",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-017' })
    },
    {
      path: '/ronnerum',
      name: "Rönnerum",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-020' })
    },
    {
      path: '/egby-2',
      name: "Egby 2",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-027' })
    },
    {
      path: '/langore',
      name: "Långöre",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-032' })
    },
    {
      path: '/melosa',
      name: "Melösa",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-034' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-040' })
    },
    {
      path: '/egby',
      name: "Egby",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-044' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-076' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-076' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-077' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-077' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-111' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-111' })
    },
    {
      path: '/vertical-wind',
      name: "Vertical Wind",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-044' })
    },
    {
      path: '/ekangen',
      name: "Ekängen",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-045' })
    },
    {
      path: '/nallkullen',
      name: "Nallkullen",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-004' })
    },
    {
      path: '/bjornskallen',
      name: "Björnskallen",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-009' })
    },
    {
      path: '/bjarme',
      name: "Bjärme",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-001' })
    },
    {
      path: '/ytterocke',
      name: "Ytterocke",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-012' })
    },
    {
      path: '/kamsasen',
      name: "Kamsåsen",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-008' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-002' })
    },
    {
      path: '/runtuna',
      name: "Runtuna",
      component: ProjectPage,
      extraProps: { projectId: '0480-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0480-V-001' })
    },
    {
      path: '/alvesta',
      name: "Alvesta",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-009' })
    },
    {
      path: '/haneberg',
      name: "Haneberg",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-007' })
    },
    {
      path: '/stavhalla',
      name: "Stavhälla",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-004' })
    },
    {
      path: '/nas/knutsberg',
      name: "Näs/Knutsberg",
      component: ProjectPage,
      extraProps: { projectId: '0486-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0486-V-001' })
    },
    {
      path: '/överada',
      name: "Överåda",
      component: ProjectPage,
      extraProps: { projectId: '0488-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0488-V-001' })
    },
    {
      path: '/golhult',
      name: "Gölhult",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-003' })
    },
    {
      path: '/äskhult',
      name: "Äskhult",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-002' })
    },
    {
      path: '/topperyd-3-och-4',
      name: "Topperyd 3 och 4",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-004' })
    },
    {
      path: '/topperyd-1-och-2',
      name: "Topperyd 1 och 2",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-005' })
    },
    {
      path: '/vallerstad-vind',
      name: "Vallerstad Vind",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-003' })
    },
    {
      path: '/lemhults-torp',
      name: "Lemhults Torp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-006' })
    },
    {
      path: '/oberga',
      name: "Oberga",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-003' })
    },
    {
      path: '/ytterbostugan',
      name: "Ytterbostugan",
      component: ProjectPage,
      extraProps: { projectId: '0480-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0480-V-002' })
    },
    {
      path: '/selaon',
      name: "Selaön",
      component: ProjectPage,
      extraProps: { projectId: '0486-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0486-V-002' })
    },
    {
      path: '/pirkafjall',
      name: "Pirkafjäll",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-002' })
    },
    {
      path: '/pirkafjall/kyrkarp',
      name: "Pirkafjäll/Kyrkarp",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-009' })
    },
    {
      path: '/smedstorp',
      name: "Smedstorp",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-012' })
    },
    {
      path: '/tumback',
      name: "Tumbäck",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-005' })
    },
    {
      path: '/skogshemmet(sacken)',
      name: "Skogshemmet(säcken)",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-009' })
    },
    {
      path: '/tumback',
      name: "Tumbäck",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-010' })
    },
    {
      path: '/karaby/kallerstad-vindkraftsprojekt',
      name: "Karaby/Kållerstad vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-003' })
    },
    {
      path: '/trollabergens-vindkraftsprojekt',
      name: "Trollabergens vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-004' })
    },
    {
      path: '/norra-bohults-vindkraftsprojekt',
      name: "Norra Bohults vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-005' })
    },
    {
      path: '/kashults-vindkraftsprojekt',
      name: "Käshults vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-009' })
    },
    {
      path: '/gunillaberg',
      name: "Gunillaberg",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-003' })
    },
    {
      path: '/brahehus',
      name: "Brahehus",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-006' })
    },
    {
      path: '/sotterfallan',
      name: "Sötterfällan",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-008' })
    },
    {
      path: '/lyckas',
      name: "Lyckås",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-010' })
    },
    {
      path: '/tuggarpsgruppen',
      name: "Tuggarpsgruppen",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-012' })
    },
    {
      path: '/hagganas',
      name: "Hägganäs",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-006' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-008' })
    },
    {
      path: '/packebo',
      name: "Packebo",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-009' })
    },
    {
      path: '/hylte',
      name: "Hylte",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-010' })
    },
    {
      path: '/vindpark-hoglandet',
      name: "Vindpark Höglandet",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-011' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-012' })
    },
    {
      path: '/gallaryd-gripenberg',
      name: "Gällaryd-Gripenberg",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-001' })
    },
    {
      path: '/hindsen',
      name: "Hindsen",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-004' })
    },
    {
      path: '/äsprilla,-froderyd',
      name: "Äsprilla, Fröderyd",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-003' })
    },
    {
      path: '/stensasa',
      name: "Stensåsa",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-007' })
    },
    {
      path: '/lilla-gotestorp',
      name: "Lilla Götestorp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-009' })
    },
    {
      path: '/skaftesfall',
      name: "Skäftesfall",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-010' })
    },
    {
      path: '/adelov',
      name: "Adelöv",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-002' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-006' })
    },
    {
      path: '/äskas-harshult-(10-verk-varav-2-i-vetlanda.-ansoka',
      name: "Äskås-Harshult (10 verk varav 2 i Vetlanda. Ansöka",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-004' })
    },
    {
      path: '/haneberg',
      name: "Haneberg",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-013' })
    },
    {
      path: '/ryfors',
      name: "Ryfors",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-004' })
    },
    {
      path: '/örserum',
      name: "Örserum",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-007' })
    },
    {
      path: '/solslatt',
      name: "Solslätt",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-002' })
    },
    {
      path: '/lemnhult',
      name: "Lemnhult",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-011' })
    },
    {
      path: '/skogsvind',
      name: "Skogsvind",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-001' })
    },
    {
      path: '/halaveden(lyngsbergen)',
      name: "Hålaveden(Lyngsbergen)",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-005' })
    },
    {
      path: '/olsvenne-2',
      name: "Olsvenne 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-005' })
    },
    {
      path: '/nas-sigsarve-sladdkvenni',
      name: "Näs Sigsarve Sladdkvenni",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-019' })
    },
    {
      path: '/grotlingbo-kauparve-marten-1',
      name: "Grötlingbo Kauparve Mårten 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-020' })
    },
    {
      path: '/östergarn-bengts',
      name: "Östergarn Bengts",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-021' })
    },
    {
      path: '/barlingbo-stave-stafva',
      name: "Barlingbo Stave Stafva",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-022' })
    },
    {
      path: '/fole-stora-ryftes---ryftes',
      name: "Fole Stora Ryftes - Ryftes",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-024' })
    },
    {
      path: '/lummelunda-tjauls',
      name: "Lummelunda Tjauls",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-025' })
    },
    {
      path: '/grotlingbo-sigsarve-vindudd-iv',
      name: "Grötlingbo Sigsarve Vindudd IV",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-026' })
    },
    {
      path: '/grotlingbo-skradsarve-vindudd-v',
      name: "Grötlingbo Skradsarve Vindudd V",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-027' })
    },
    {
      path: '/larbro-hall-hagvards-i-hagvards-hall',
      name: "Lärbro Hall Hägvards I Hägvards Hall",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-028' })
    },
    {
      path: '/lanthamnen-klinte',
      name: "Lanthamnen Klinte",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-030' })
    },
    {
      path: '/nar-siglajvs-1-&-2',
      name: "När Siglajvs 1 & 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-032' })
    },
    {
      path: '/grotlingbo-roes-grotlingbo-1-agri',
      name: "Grötlingbo Roes Grötlingbo 1 Agri",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-033' })
    },
    {
      path: '/havdhem-bols-ryftes-hulda-[kulle-2]',
      name: "Havdhem Bols Ryftes Hulda [Kulle 2]",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-034' })
    },
    {
      path: '/hablingbo-stora-burge',
      name: "Hablingbo Stora Burge",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-035' })
    },
    {
      path: '/klinte-strands-isak',
      name: "Klinte Strands Isak",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-036' })
    },
    {
      path: '/hangvar-kyrkebys-2',
      name: "Hangvar Kyrkebys 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-038' })
    },
    {
      path: '/fole-stora-sojdeby---ryftes-kristina',
      name: "Fole Stora Sojdeby - Ryftes Kristina",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-039' })
    },
    {
      path: '/nas-levide-selma',
      name: "Näs Levide Selma",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-045' })
    },
    {
      path: '/hangvar-kyrkebys-1',
      name: "Hangvar Kyrkebys 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-046' })
    },
    {
      path: '/hablingbo-stjups',
      name: "Hablingbo Stjups",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-052' })
    },
    {
      path: '/hellvi-stengrinde',
      name: "Hellvi Stengrinde",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-058' })
    },
    {
      path: '/smojen-vindpark-1-[slitevind-xx]',
      name: "Smöjen vindpark 1 [Slitevind XX]",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-002' })
    },
    {
      path: '/kulle-vindpark',
      name: "Kulle vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-004' })
    },
    {
      path: '/gansparken-1',
      name: "Gansparken 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-008' })
    },
    {
      path: '/nasudden-vast-n1',
      name: "Näsudden Väst N1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-009' })
    },
    {
      path: '/stugylparken-s1',
      name: "Stugylparken S1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-010' })
    },
    {
      path: '/mastermyr-vindkraftpark',
      name: "Mästermyr Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-011' })
    },
    {
      path: '/vindpark-boge',
      name: "Vindpark Boge",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-012' })
    },
    {
      path: '/anga-vinpark',
      name: "Anga Vinpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-013' })
    },
    {
      path: '/nasudden-vast-vindkraftpark',
      name: "Näsudden Väst Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-014' })
    },
    {
      path: '/forsviden-norra',
      name: "Forsviden Norra",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-016' })
    },
    {
      path: '/nar-öndarve-narvind-johan',
      name: "När Öndarve Närvind Johan",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-023' })
    },
    {
      path: '/klinte-vindpark',
      name: "Klinte Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-049' })
    },
    {
      path: '/nas-amfunds-snaigsto',
      name: "Näs Amfunds Snaigsto",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-018' })
    },
    {
      path: '/lummelunda-tjauls-agro-1',
      name: "Lummelunda Tjauls Agro 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-029' })
    },
    {
      path: '/hablingbo-stjups-hablingbovind',
      name: "Hablingbo Stjups Hablingbovind",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-031' })
    },
    {
      path: '/hangvar-kyrkebys,-kyrkebys-3-&-4',
      name: "Hangvar Kyrkebys, Kyrkebys 3 & 4",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-047' })
    },
    {
      path: '/granliden-vindkraftpark',
      name: "Granliden vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2505-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2505-V-001' })
    },
    {
      path: '/flakaberget',
      name: "Flakaberget",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-021' })
    },
    {
      path: '/taka-apua-vindkraftpark',
      name: "Taka Apua vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2518-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2518-V-009' })
    },
    {
      path: '/sjoatorp',
      name: "Sjöatorp",
      component: ProjectPage,
      extraProps: { projectId: '0764-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0764-V-004' })
    },
    {
      path: '/hamneda',
      name: "Hamneda",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-030' })
    },
    {
      path: '/trollberget',
      name: "Trollberget",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-008' })
    },
    {
      path: '/furasa',
      name: "Furåsa",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-017' })
    },
    {
      path: '/rodstahojden',
      name: "Rödstahöjden",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-022' })
    },
    {
      path: '/playa-plannja',
      name: "Playa Plannja",
      component: ProjectPage,
      extraProps: { projectId: '2580-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2580-V-003' })
    },
    {
      path: '/uljabuoda-vindkraftspark',
      name: "Uljabuoda vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '2506-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2506-V-001' })
    },
    {
      path: '/hornliden',
      name: "Hornliden",
      component: ProjectPage,
      extraProps: { projectId: '2505-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2505-V-002' })
    },
    {
      path: '/suorva-vindkraftpark',
      name: "Suorva Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2510-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2510-V-003' })
    },
    {
      path: '/horshaga',
      name: "Horshaga",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-034' })
    },
    {
      path: '/raberg',
      name: "Råberg",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-009' })
    },
    {
      path: '/vraskogen',
      name: "Vråskogen",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-031' })
    },
    {
      path: '/rute-furillen-slitevind-xi-&-xii',
      name: "Rute Furillen Slitevind XI & XII",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-060' })
    },
    {
      path: '/hablingbo-bertels',
      name: "Hablingbo Bertels",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-061' })
    },
    {
      path: '/lycke',
      name: "Lycke",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-006' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-033' })
    },
    {
      path: '/sjomala',
      name: "Sjömåla",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-036' })
    },
    {
      path: '/vindrosen-skarby',
      name: "Vindrosen Skårby",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-004' })
    },
    {
      path: '/äskas-harshult',
      name: "Äskås-Harshult",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-008' })
    },
    {
      path: '/stenkyrka-stora-bjars-1-&-2',
      name: "Stenkyrka Stora Bjärs 1 & 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-059' })
    },
    {
      path: '/kareby-torp',
      name: "Kareby-Torp",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-005' })
    },
    {
      path: '/godeshult',
      name: "Gödeshult",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-037' })
    },
    {
      path: '/vindpark-kolvallen',
      name: "Vindpark Kölvallen",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-008' })
    },
    {
      path: '/klintarna',
      name: "Klintarna",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-005' })
    },
    {
      path: '/lockarp',
      name: "Lockarp",
      component: ProjectPage,
      extraProps: { projectId: '0686-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0686-V-012' })
    },
    {
      path: '/edsleskogs-hult',
      name: "Edsleskogs-Hult",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-015' })
    },
    {
      path: '/froskogs-hult',
      name: "Fröskogs-Hult",
      component: ProjectPage,
      extraProps: { projectId: '1492-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1492-V-016' })
    },
    {
      path: '/frinnaryd',
      name: "Frinnaryd",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-014' })
    },
    {
      path: '/lida',
      name: "Lida",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-011' })
    },
    {
      path: '/hagstad',
      name: "Hagstad",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-009' })
    },
    {
      path: '/åsthult',
      name: "Åsthult",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-010' })
    },
    {
      path: '/stora-moshult',
      name: "Stora Moshult",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-019' })
    },
    {
      path: '/grotlingbo-kattlunds',
      name: "Grötlingbo Kattlunds",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-048' })
    },
    {
      path: '/larbro-nors-norrvange-nr-1-&-2',
      name: "Lärbro Nors Norrvange Nr 1 & 2",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-054' })
    },
    {
      path: '/hejnum-boters-(fole-stora-sojdeby)',
      name: "Hejnum Boters (Fole Stora Sojdeby)",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-062' })
    },
    {
      path: '/storugns-10',
      name: "Storugns 10",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-057' })
    },
    {
      path: '/klosterstad',
      name: "Klosterstad",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-026' })
    },
    {
      path: '/vavinge-/-lottstad',
      name: "Vävinge / Lottstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-045' })
    },
    {
      path: '/lagmansberga-21',
      name: "Lagmansberga 21",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-014' })
    },
    {
      path: '/vindpark-harja',
      name: "Vindpark Härja",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-047' })
    },
    {
      path: '/hanorp',
      name: "Hanorp",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-030' })
    },
    {
      path: '/vallerstad',
      name: "Vallerstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-047' })
    },
    {
      path: '/ramstad',
      name: "Ramstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-048' })
    },
    {
      path: '/hageby-vistena-ullekalv',
      name: "Hageby Vistena Ullekalv",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-049' })
    },
    {
      path: '/finketorp-hogstad',
      name: "Finketorp Hogstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-054' })
    },
    {
      path: '/nederlosa',
      name: "Nederlösa",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-057' })
    },
    {
      path: '/strommestad-haddestad',
      name: "Strömmestad Haddestad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-061' })
    },
    {
      path: '/hyppinge-gardsverk',
      name: "Hyppinge Gårdsverk",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-067' })
    },
    {
      path: '/habblarp-gardsverk',
      name: "Habblarp Gårdsverk",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-068' })
    },
    {
      path: '/fornasa',
      name: "Fornåsa",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-034' })
    },
    {
      path: '/prasttorp',
      name: "Prästtorp",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-042' })
    },
    {
      path: '/hassla',
      name: "Hassla",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-074' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-074' })
    },
    {
      path: '/oras',
      name: "Orås",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-076' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-076' })
    },
    {
      path: '/östen-skovde',
      name: "Östen Skövde",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-017' })
    },
    {
      path: '/hallevadsholm-2-och-3',
      name: "Hällevadsholm 2 och 3",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-035' })
    },
    {
      path: '/kanna',
      name: "Kånna",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-035' })
    },
    {
      path: '/hamneda-horn',
      name: "Hamneda Horn",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-036' })
    },
    {
      path: '/åby',
      name: "Åby",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-038' })
    },
    {
      path: '/gravens-grund',
      name: "Gravens grund",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-013' })
    },
    {
      path: '/ottravad',
      name: "Ottravad",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-050' })
    },
    {
      path: '/gunnilstorp/tranhult',
      name: "Gunnilstorp/Tranhult",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-011' })
    },
    {
      path: '/fanneslunda----od-del-2',
      name: "Fänneslunda  - Od del 2",
      component: ProjectPage,
      extraProps: { projectId: '1466-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1466-V-003' })
    },
    {
      path: '/mardaklev',
      name: "Mårdaklev",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-003' })
    },
    {
      path: '/vindkraftpark-fyrskog',
      name: "Vindkraftpark Fyrskog",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-006' })
    },
    {
      path: '/ytterstad',
      name: "Ytterstad",
      component: ProjectPage,
      extraProps: { projectId: '1441-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1441-V-008' })
    },
    {
      path: '/lovaskog',
      name: "Lövaskog",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-004' })
    },
    {
      path: '/vindasen',
      name: "Vindåsen",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-007' })
    },
    {
      path: '/rubblarp/lokaryd/vastanhaga',
      name: "Rubblarp/Lökaryd/Västanhaga",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-007' })
    },
    {
      path: '/åkers-grytas',
      name: "Åkers-Grytås",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-001' })
    },
    {
      path: '/hallabron-(ulricehamn)',
      name: "Hallabron (Ulricehamn)",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-006' })
    },
    {
      path: '/vassberg',
      name: "Våssberg",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-007' })
    },
    {
      path: '/gustav-dahlen:1',
      name: "Gustav Dahlen:1",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-001' })
    },
    {
      path: '/sorby-åraslov',
      name: "Sörby-Åraslöv",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-027' })
    },
    {
      path: '/lillasate',
      name: "Lillasäte",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-020' })
    },
    {
      path: '/äsphult-bjarnhult',
      name: "Äsphult-Bjärnhult",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-028' })
    },
    {
      path: '/notteback',
      name: "Nottebäck",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-039' })
    },
    {
      path: '/gustav-dahlén-2',
      name: "Gustav Dahlén 2",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-002' })
    },
    {
      path: '/navlinge',
      name: "Nävlinge",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-030' })
    },
    {
      path: '/norra-karr',
      name: "Norra Kärr",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-011' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectId: '1494-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1494-V-024' })
    },
    {
      path: '/tveta-/-1',
      name: "TVETA / 1",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-019' })
    },
    {
      path: '/tveta-/-3',
      name: "TVETA / 3",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-036' })
    },
    {
      path: '/vindpark-stormossen',
      name: "Vindpark Stormossen",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-003' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectId: '1444-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1444-V-013' })
    },
    {
      path: '/hallesas-ucklums-berg',
      name: "Hällesås Ucklums-Berg",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-001' })
    },
    {
      path: '/ljungkile-svenshogen',
      name: "Ljungkile Svenshögen",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-009' })
    },
    {
      path: '/ås',
      name: "Ås",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-016' })
    },
    {
      path: '/tagelberg-2',
      name: "Tagelberg 2",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-027' })
    },
    {
      path: '/ramnared',
      name: "Ramnared",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-006' })
    },
    {
      path: '/lunnekullen',
      name: "Lunnekullen",
      component: ProjectPage,
      extraProps: { projectId: '1472-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1472-V-006' })
    },
    {
      path: '/sotared',
      name: "Sotared",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-014' })
    },
    {
      path: '/hallsas,-stenstorp,-norrkvarn,-äskekarr,-slatteval',
      name: "Hällsås, Stenstorp, Norrkvarn, Äskekärr, Slätteval",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-007' })
    },
    {
      path: '/vindpark-edsleskog',
      name: "Vindpark Edsleskog",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-001' })
    },
    {
      path: '/vindpark-annerod',
      name: "Vindpark Anneröd",
      component: ProjectPage,
      extraProps: { projectId: '1485-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1485-V-024' })
    },
    {
      path: '/almeshult',
      name: "Almeshult",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-001' })
    },
    {
      path: '/holmen',
      name: "Holmen",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-020' })
    },
    {
      path: '/stensvattsmarken',
      name: "Stensvattsmarken",
      component: ProjectPage,
      extraProps: { projectId: '2403-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2403-V-009' })
    },
    {
      path: '/ytterberg',
      name: "Ytterberg",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-004' })
    },
    {
      path: '/åmliden',
      name: "Åmliden",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-005' })
    },
    {
      path: '/åmliden-2',
      name: "Åmliden 2",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-006' })
    },
    {
      path: '/fjalbyn',
      name: "Fjälbyn",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-014' })
    },
    {
      path: '/bodberget---vastra',
      name: "Bodberget - västra",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-003' })
    },
    {
      path: '/humlemala',
      name: "Humlemåla",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-002' })
    },
    {
      path: '/ire',
      name: "Ire",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-003' })
    },
    {
      path: '/loberget',
      name: "Loberget",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-004' })
    },
    {
      path: '/rosendal',
      name: "Rosendal",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-032' })
    },
    {
      path: '/storliden',
      name: "Storliden",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-008' })
    },
    {
      path: '/holmon',
      name: "Holmön",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-010' })
    },
    {
      path: '/holmon---vastra',
      name: "Holmön - västra",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-011' })
    },
    {
      path: '/gudhema-vallar',
      name: "Gudhema Vallar",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-050' })
    },
    {
      path: '/uleberg',
      name: "Uleberg",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-051' })
    },
    {
      path: '/blekinge-offshore',
      name: "Blekinge Offshore",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-014' })
    },
    {
      path: '/brickan-(svegstrom)',
      name: "Brickan (Svegström)",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-040' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-069' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-069' })
    },
    {
      path: '/gagnef-rosberget',
      name: "Gagnef Rosberget",
      component: ProjectPage,
      extraProps: { projectId: '2026-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2026-V-001' })
    },
    {
      path: '/saby',
      name: "Säby",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-014' })
    },
    {
      path: '/vindkraftpark-grafsnas-och-livered-m.fl.',
      name: "Vindkraftpark Gräfsnäs och Livered m.fl.",
      component: ProjectPage,
      extraProps: { projectId: '1440-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1440-V-001' })
    },
    {
      path: '/rocklinge',
      name: "Röcklinge",
      component: ProjectPage,
      extraProps: { projectId: '0331-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0331-V-001' })
    },
    {
      path: '/finnhyttan',
      name: "Finnhyttan",
      component: ProjectPage,
      extraProps: { projectId: '2083-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2083-V-001' })
    },
    {
      path: '/knutstorp-palstorp',
      name: "Knutstorp-Pålstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-058' })
    },
    {
      path: '/vettebergets-vindpark',
      name: "Vettebergets Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-002' })
    },
    {
      path: '/hycklinge-5.8',
      name: "Hycklinge 5.8",
      component: ProjectPage,
      extraProps: { projectId: '0513-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0513-V-004' })
    },
    {
      path: '/skedom',
      name: "Skedom",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-020' })
    },
    {
      path: '/norra-gullabo',
      name: "Norra Gullabo",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-030' })
    },
    {
      path: '/grotlingbo-uddvide-domerarve',
      name: "Grötlingbo Uddvide Domerarve",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-051' })
    },
    {
      path: '/ulvatorp',
      name: "Ulvatorp",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-019' })
    },
    {
      path: '/ulatofta',
      name: "Ulatofta",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-044' })
    },
    {
      path: '/raby',
      name: "Råby",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-045' })
    },
    {
      path: '/ormastorp',
      name: "Ormastorp",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-046' })
    },
    {
      path: '/elestorp/tormastrorp',
      name: "Elestorp/Tormastrorp",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-047' })
    },
    {
      path: '/haraholmen',
      name: "Haraholmen",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-001' })
    },
    {
      path: '/marakallen',
      name: "Marakallen",
      component: ProjectPage,
      extraProps: { projectId: '2580-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2580-V-004' })
    },
    {
      path: '/bondon',
      name: "Bondön",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-002' })
    },
    {
      path: '/dragaliden',
      name: "Dragaliden",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-003' })
    },
    {
      path: '/stor-blaliden',
      name: "Stor-Blåliden",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-004' })
    },
    {
      path: '/bondon-vindkraftpark-ii',
      name: "Bondön vindkraftpark II",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-007' })
    },
    {
      path: '/klocktarnan-vindkraftpark',
      name: "Klocktärnan vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-008' })
    },
    {
      path: '/trundon-vindkraftpark',
      name: "Trundön vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-010' })
    },
    {
      path: '/haradskolen',
      name: "Haradskölen",
      component: ProjectPage,
      extraProps: { projectId: '2582-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2582-V-001' })
    },
    {
      path: '/seskaro',
      name: "Seskarö",
      component: ProjectPage,
      extraProps: { projectId: '2583-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2583-V-001' })
    },
    {
      path: '/vindkraftpark-stopparen',
      name: "Vindkraftpark Stopparen",
      component: ProjectPage,
      extraProps: { projectId: '2583-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2583-V-002' })
    },
    {
      path: '/vuono-vindkraftpark',
      name: "Vuono vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2583-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2583-V-003' })
    },
    {
      path: '/vindkraftverk-luossavaara',
      name: "Vindkraftverk Luossavaara",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-001' })
    },
    {
      path: '/viscaria-3',
      name: "Viscaria 3",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-002' })
    },
    {
      path: '/viscaria-2',
      name: "Viscaria 2",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-003' })
    },
    {
      path: '/viscaria-1',
      name: "Viscaria 1",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-004' })
    },
    {
      path: '/viscaria-4',
      name: "Viscaria 4",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-005' })
    },
    {
      path: '/viscaria-6',
      name: "Viscaria 6",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-006' })
    },
    {
      path: '/viscaria-5',
      name: "Viscaria 5",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-007' })
    },
    {
      path: '/kulltorp',
      name: "Kulltorp",
      component: ProjectPage,
      extraProps: { projectId: '0617-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0617-V-002' })
    },
    {
      path: '/brataparken',
      name: "Bråtaparken",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-001' })
    },
    {
      path: '/enviksberget',
      name: "Enviksberget",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-010' })
    },
    {
      path: '/torserods-vindkraftpark-5',
      name: "Torseröds Vindkraftpark 5",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-064' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-064' })
    },
    {
      path: '/frostnas',
      name: "Frostnäs",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-012' })
    },
    {
      path: '/ingelstorp',
      name: "Ingelstorp",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-005' })
    },
    {
      path: '/svenska-bjorn',
      name: "Svenska Björn",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-005' })
    },
    {
      path: '/vimmelstorp',
      name: "Vimmelstorp",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-015' })
    },
    {
      path: '/vindkraftverk-hakunge',
      name: "Vindkraftverk Hakunge",
      component: ProjectPage,
      extraProps: { projectId: '0115-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0115-V-001' })
    },
    {
      path: '/bleckberget',
      name: "Bleckberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-006' })
    },
    {
      path: '/storflohojden',
      name: "Storflohöjden",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-007' })
    },
    {
      path: '/ismundsundet',
      name: "Ismundsundet",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-005' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-013' })
    },
    {
      path: '/gastsjo',
      name: "Gastsjö",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-020' })
    },
    {
      path: '/fisksjolandet',
      name: "Fisksjölandet",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-020' })
    },
    {
      path: '/fjallmarkhojden',
      name: "Fjällmarkhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-021' })
    },
    {
      path: '/hog-hanasen',
      name: "Hög-Hanåsen",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-022' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-114' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-114' })
    },
    {
      path: '/granberg',
      name: "Granberg",
      component: ProjectPage,
      extraProps: { projectId: '2039-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2039-V-002' })
    },
    {
      path: '/hallarp',
      name: "Hällarp",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-046' })
    },
    {
      path: '/dalen',
      name: "Dalen",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-008' })
    },
    {
      path: '/kastlosa_15_4',
      name: "Kastlösa_15_4",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-049' })
    },
    {
      path: '/mullbergs-vindpark',
      name: "Mullbergs Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-015' })
    },
    {
      path: '/vindpark-ljungbyholm',
      name: "Vindpark Ljungbyholm",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-021' })
    },
    {
      path: '/ignaberga-attarp',
      name: "Ignaberga-Attarp",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-025' })
    },
    {
      path: '/bingsta',
      name: "Bingsta",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-018' })
    },
    {
      path: '/gisselas',
      name: "Gisselås",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-025' })
    },
    {
      path: '/gimmene',
      name: "Gimmene",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-051' })
    },
    {
      path: '/gunborod',
      name: "Gunboröd",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-039' })
    },
    {
      path: '/gunnarsbo',
      name: "Gunnarsbo",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-022' })
    },
    {
      path: '/gustavstorp',
      name: "Gustavstorp",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-005' })
    },
    {
      path: '/hena',
      name: "Henå",
      component: ProjectPage,
      extraProps: { projectId: '1443-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1443-V-002' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-100' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-100' })
    },
    {
      path: '/wind-elsson',
      name: "Wind-elsson",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-020' })
    },
    {
      path: '/ättersta',
      name: "Ättersta",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-009' })
    },
    {
      path: '/norrvange',
      name: "Norrvange",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-065' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-065' })
    },
    {
      path: '/tangelgarde',
      name: "Tängelgårde",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-066' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-066' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-067' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-067' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-068' })
    },
    {
      path: '/golingstorp',
      name: "Gölingstorp",
      component: ProjectPage,
      extraProps: { projectId: '0513-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0513-V-001' })
    },
    {
      path: '/trilleholm',
      name: "Trilleholm",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-015' })
    },
    {
      path: '/rudet',
      name: "Rudet",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-016' })
    },
    {
      path: '/katrineberg',
      name: "katrineberg",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-017' })
    },
    {
      path: '/ask',
      name: "Ask",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-059' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-060' })
    },
    {
      path: '/stromby',
      name: "Strömby",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-031' })
    },
    {
      path: '/soderasen',
      name: "Söderåsen",
      component: ProjectPage,
      extraProps: { projectId: '2104-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2104-V-002' })
    },
    {
      path: '/sjisjka-vindkraftspark',
      name: "Sjisjka Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '2523-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2523-V-004' })
    },
    {
      path: '/kraklingbo-vidfalle',
      name: "Kräklingbo Vidfälle",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-056' })
    },
    {
      path: '/prastkila',
      name: "Prästkila",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-005' })
    },
    {
      path: '/projekt-gullspangsparken',
      name: "Projekt Gullspångsparken",
      component: ProjectPage,
      extraProps: { projectId: '1447-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1447-V-003' })
    },
    {
      path: '/smedstorp',
      name: "Smedstorp",
      component: ProjectPage,
      extraProps: { projectId: '0642-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0642-V-003' })
    },
    {
      path: '/frotorp',
      name: "Frotorp",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-001' })
    },
    {
      path: '/skarvesjo',
      name: "Skarvesjö",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-052' })
    },
    {
      path: '/kronoback',
      name: "Kronobäck",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-053' })
    },
    {
      path: '/hyggelsebo',
      name: "Hyggelsebo",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-005' })
    },
    {
      path: '/hanger',
      name: "Hånger",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-009' })
    },
    {
      path: '/mjosjo',
      name: "Mjösjö",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-021' })
    },
    {
      path: '/storgrundet',
      name: "Storgrundet",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-011' })
    },
    {
      path: '/kattegatt-offshore',
      name: "Kattegatt Offshore",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-048' })
    },
    {
      path: '/brunsmo-vindkraftpark',
      name: "Brunsmo Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-016' })
    },
    {
      path: '/skappentorp',
      name: "Skäppentorp",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-054' })
    },
    {
      path: '/em',
      name: "Em",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-051' })
    },
    {
      path: '/monsteras-bruk',
      name: "Mönsterås Bruk",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-056' })
    },
    {
      path: '/hanger',
      name: "Hånger",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-010' })
    },
    {
      path: '/salitradberget',
      name: "Säliträdberget",
      component: ProjectPage,
      extraProps: { projectId: '2062-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2062-V-004' })
    },
    {
      path: '/dalen-2',
      name: "Dalen 2",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-022' })
    },
    {
      path: '/uvberget',
      name: "Uvberget",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-012' })
    },
    {
      path: '/baldersrum',
      name: "Baldersrum",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-010' })
    },
    {
      path: '/slatte',
      name: "Slätte",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-012' })
    },
    {
      path: '/åbuen-2',
      name: "Åbuen 2",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-031' })
    },
    {
      path: '/lyrestad-ii',
      name: "Lyrestad II",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-018' })
    },
    {
      path: '/hacksvik-del-1',
      name: "Håcksvik del 1",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-006' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-004' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-005' })
    },
    {
      path: '/barstad',
      name: "Bårstad",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-001' })
    },
    {
      path: '/bolsnas',
      name: "Bölsnäs",
      component: ProjectPage,
      extraProps: { projectId: '0765-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0765-V-004' })
    },
    {
      path: '/rakenas',
      name: "Rakenäs",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-006' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-003' })
    },
    {
      path: '/kusberget',
      name: "Kusberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-022' })
    },
    {
      path: '/brevikshult-vastra',
      name: "Brevikshult Västra",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-007' })
    },
    {
      path: '/tomasliden',
      name: "Tomasliden",
      component: ProjectPage,
      extraProps: { projectId: '2417-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2417-V-007' })
    },
    {
      path: '/verboberget---reutoberget',
      name: "Verboberget - Reutoberget",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-005' })
    },
    {
      path: '/åberget',
      name: "Åberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-019' })
    },
    {
      path: '/varkumla-brandstorp',
      name: "Vårkumla-Brandstorp",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-052' })
    },
    {
      path: '/jung-åsa',
      name: "Jung-Åsa",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-049' })
    },
    {
      path: '/lansterhojden',
      name: "Länsterhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-009' })
    },
    {
      path: '/galtryggen',
      name: "Galtryggen",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-002' })
    },
    {
      path: '/årjang-byn',
      name: "Årjäng Byn",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-007' })
    },
    {
      path: '/frykdalshojden',
      name: "Frykdalshöjden",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-004' })
    },
    {
      path: '/vase',
      name: "Väse",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-007' })
    },
    {
      path: '/fagerasen',
      name: "Fageråsen",
      component: ProjectPage,
      extraProps: { projectId: '2023-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2023-V-007' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-019' })
    },
    {
      path: '/degerkolen',
      name: "Degerkölen",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-013' })
    },
    {
      path: '/galberget',
      name: "Galberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-019' })
    },
    {
      path: '/storflotten',
      name: "Storflötten",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-013' })
    },
    {
      path: '/ulvas',
      name: "Ulvås",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-003' })
    },
    {
      path: '/brevikshult-östra',
      name: "Brevikshult Östra",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-008' })
    },
    {
      path: '/skonero',
      name: "Skönero",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-002' })
    },
    {
      path: '/fastlycke_övraby',
      name: "Fastlycke_Övraby",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-001' })
    },
    {
      path: '/juktan-vindkraftpark',
      name: "Juktan Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-002' })
    },
    {
      path: '/norrback-vindkraftpark',
      name: "Norrbäck Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2481-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2481-V-005' })
    },
    {
      path: '/bredtrask',
      name: "Bredträsk",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-003' })
    },
    {
      path: '/bramhult',
      name: "Brämhult",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-005' })
    },
    {
      path: '/ornungaskogen-del-1',
      name: "Ornungaskogen del 1",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-006' })
    },
    {
      path: '/ornungaskogen-del-2',
      name: "Ornungaskogen del 2",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-008' })
    },
    {
      path: '/stenkulla',
      name: "Stenkulla",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-050' })
    },
    {
      path: '/årjang-nv-etapp-2',
      name: "Årjäng NV etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-005' })
    },
    {
      path: '/haljebyn',
      name: "Häljebyn",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-006' })
    },
    {
      path: '/gravlingkullarna',
      name: "Grävlingkullarna",
      component: ProjectPage,
      extraProps: { projectId: '1782-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1782-V-002' })
    },
    {
      path: '/fjallrammen',
      name: "Fjällrämmen",
      component: ProjectPage,
      extraProps: { projectId: '1782-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1782-V-003' })
    },
    {
      path: '/tavelsas',
      name: "Tävelsås",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-012' })
    },
    {
      path: '/sommarsate',
      name: "Sommarsäte",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-040' })
    },
    {
      path: '/svarvarehemmet',
      name: "Svarvarehemmet",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-025' })
    },
    {
      path: '/svarvarehemmet',
      name: "Svarvarehemmet",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-025' })
    },
    {
      path: '/bjornberget',
      name: "Björnberget",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-010' })
    },
    {
      path: '/gubbaberget',
      name: "Gubbaberget",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-012' })
    },
    {
      path: '/gubbaberget-soder',
      name: "Gubbaberget Söder",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-012' })
    },
    {
      path: '/hastkullen',
      name: "Hästkullen",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-027' })
    },
    {
      path: '/spelasen',
      name: "Spelåsen",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-009' })
    },
    {
      path: '/spjutasberget',
      name: "Spjutåsberget",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-013' })
    },
    {
      path: '/bengtsboda',
      name: "Bengtsboda",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-006' })
    },
    {
      path: '/letesmala',
      name: "Letesmåla",
      component: ProjectPage,
      extraProps: { projectId: '1082-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1082-V-006' })
    },
    {
      path: '/letesmala-2',
      name: "Letesmåla 2",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-007' })
    },
    {
      path: '/öbackarna--lorbyrondellen',
      name: "Öbackarna- Lörbyrondellen",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-015' })
    },
    {
      path: '/skalmershult',
      name: "Skälmershult",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-005' })
    },
    {
      path: '/longastunturi',
      name: "Longastunturi",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-009' })
    },
    {
      path: '/kuusivaara',
      name: "Kuusivaara",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-008' })
    },
    {
      path: '/kuusivaara',
      name: "Kuusivaara",
      component: ProjectPage,
      extraProps: { projectId: '2523-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2523-V-002' })
    },
    {
      path: '/bergon',
      name: "Bergön",
      component: ProjectPage,
      extraProps: { projectId: '2514-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2514-V-006' })
    },
    {
      path: '/haraldsmala',
      name: "Haraldsmåla",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-024' })
    },
    {
      path: '/haraldsmala',
      name: "Haraldsmåla",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-057' })
    },
    {
      path: '/hoppeskogen',
      name: "Hoppeskogen",
      component: ProjectPage,
      extraProps: { projectId: '0884-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0884-V-002' })
    },
    {
      path: '/pilaholm',
      name: "Pilaholm",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-021' })
    },
    {
      path: '/åby-alebo',
      name: "Åby-Alebo",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-058' })
    },
    {
      path: '/karnebo',
      name: "Kärnebo",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-059' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-059' })
    },
    {
      path: '/ryd-ronnerum',
      name: "Ryd-Rönnerum",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-101' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-101' })
    },
    {
      path: '/tyllinge',
      name: "Tyllinge",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-011' })
    },
    {
      path: '/tegen',
      name: "Tegen",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-035' })
    },
    {
      path: '/vindplats-goteborg',
      name: "Vindplats Göteborg",
      component: ProjectPage,
      extraProps: { projectId: '1480-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1480-V-003' })
    },
    {
      path: '/forsmark-vindkraftpark',
      name: "Forsmark Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0382-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0382-V-003' })
    },
    {
      path: '/äpplaryd',
      name: "Äpplaryd",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-004' })
    },
    {
      path: '/prastatorpet',
      name: "Prästatorpet",
      component: ProjectPage,
      extraProps: { projectId: '0687-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0687-V-008' })
    },
    {
      path: '/sikaskalen',
      name: "Sikåskälen",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-027' })
    },
    {
      path: '/morttjarnberget-2',
      name: "Mörttjärnberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-025' })
    },
    {
      path: '/åliden---lidenprojekten',
      name: "Åliden - Lidenprojekten",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-024' })
    },
    {
      path: '/groninge',
      name: "Gröninge",
      component: ProjectPage,
      extraProps: { projectId: '0513-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0513-V-002' })
    },
    {
      path: '/palsbo',
      name: "Palsbo",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-008' })
    },
    {
      path: '/villkol',
      name: "Villköl",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-004' })
    },
    {
      path: '/sundstorp',
      name: "Sundstorp",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-006' })
    },
    {
      path: '/lannaker',
      name: "Lännåker",
      component: ProjectPage,
      extraProps: { projectId: '0136-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0136-V-002' })
    },
    {
      path: '/grimmared',
      name: "Grimmared",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-020' })
    },
    {
      path: '/knuts-kulle',
      name: "Knuts kulle",
      component: ProjectPage,
      extraProps: { projectId: '0617-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0617-V-003' })
    },
    {
      path: '/gunnilstorp/tranhult',
      name: "Gunnilstorp/Tranhult",
      component: ProjectPage,
      extraProps: { projectId: '0617-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0617-V-001' })
    },
    {
      path: '/botsmark',
      name: "Botsmark",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-018' })
    },
    {
      path: '/öllov',
      name: "Öllöv",
      component: ProjectPage,
      extraProps: { projectId: '1278-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1278-V-017' })
    },
    {
      path: '/gamlebo',
      name: "Gamlebo",
      component: ProjectPage,
      extraProps: { projectId: '0617-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0617-V-004' })
    },
    {
      path: '/lebro',
      name: "Lebro",
      component: ProjectPage,
      extraProps: { projectId: '0461-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0461-V-002' })
    },
    {
      path: '/stora-tockarp',
      name: "Stora Tockarp",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-032' })
    },
    {
      path: '/galthult',
      name: "Galthult",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-033' })
    },
    {
      path: '/fjarestad',
      name: "Fjärestad",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-089' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-089' })
    },
    {
      path: '/stora-gorslov',
      name: "Stora Gorslöv",
      component: ProjectPage,
      extraProps: { projectId: '1284-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1284-V-022' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-036' })
    },
    {
      path: '/alltorp',
      name: "Alltorp",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-005' })
    },
    {
      path: '/vindkraftpark-hemberget',
      name: "Vindkraftpark Hemberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-011' })
    },
    {
      path: '/åndberget',
      name: "Åndberget",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-034' })
    },
    {
      path: '/kraftberget',
      name: "Kraftberget",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-008' })
    },
    {
      path: '/ågard',
      name: "Ågård",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-020' })
    },
    {
      path: '/torpaskoga',
      name: "Torpaskoga",
      component: ProjectPage,
      extraProps: { projectId: '1860-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1860-V-004' })
    },
    {
      path: '/öna',
      name: "Öna",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-007' })
    },
    {
      path: '/skederids-boda',
      name: "Skederids-Boda",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-006' })
    },
    {
      path: '/svartno',
      name: "Svartnö",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-009' })
    },
    {
      path: '/vallasen',
      name: "Vallåsen",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-008' })
    },
    {
      path: '/harensas',
      name: "Härensås",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-011' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0764-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0764-V-005' })
    },
    {
      path: '/smultronet-4',
      name: "Smultronet 4",
      component: ProjectPage,
      extraProps: { projectId: '0480-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0480-V-003' })
    },
    {
      path: '/hultsberg',
      name: "Hultsberg",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-009' })
    },
    {
      path: '/mangen',
      name: "Mången",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-013' })
    },
    {
      path: '/karleby',
      name: "Karleby",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-055' })
    },
    {
      path: '/tavelberget,-etapp-2',
      name: "Tavelberget, etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-011' })
    },
    {
      path: '/normlosa-östanback',
      name: "Normlösa-Östanbäck",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-056' })
    },
    {
      path: '/ekenas',
      name: "Ekenäs",
      component: ProjectPage,
      extraProps: { projectId: '0821-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0821-V-001' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-025' })
    },
    {
      path: '/stubberud',
      name: "Stubberud",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-011' })
    },
    {
      path: '/koltorp',
      name: "Koltorp",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-021' })
    },
    {
      path: '/mosjo-torsjo',
      name: "Mosjö-Törsjö",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-022' })
    },
    {
      path: '/assartorp',
      name: "Assartorp",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-022' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-023' })
    },
    {
      path: '/petersborg',
      name: "Petersborg",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-007' })
    },
    {
      path: '/stora-lund',
      name: "Stora Lund",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-039' })
    },
    {
      path: '/vattlosa',
      name: "Vättlösa",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-040' })
    },
    {
      path: '/hjarsaslilla',
      name: "Hjärsåslilla",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-008' })
    },
    {
      path: '/rossberget',
      name: "Rossberget",
      component: ProjectPage,
      extraProps: { projectId: '2062-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2062-V-005' })
    },
    {
      path: '/langholmsberget',
      name: "Långholmsberget",
      component: ProjectPage,
      extraProps: { projectId: '2061-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2061-V-003' })
    },
    {
      path: '/blomsterhult',
      name: "Blomsterhult",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-005' })
    },
    {
      path: '/morkullberget',
      name: "Morkullberget",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-013' })
    },
    {
      path: '/ryket',
      name: "Ryket",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-029' })
    },
    {
      path: '/lysings-harads',
      name: "Lysings Härads",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-030' })
    },
    {
      path: '/forsviden-sodra-vindkraftspark',
      name: "Forsviden Södra vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-017' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-021' })
    },
    {
      path: '/pinnarekulla',
      name: "Pinnarekulla",
      component: ProjectPage,
      extraProps: { projectId: '0683-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0683-V-011' })
    },
    {
      path: '/riphacochkka-vindkraftpark',
      name: "Riphacochkka vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2584-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2584-V-010' })
    },
    {
      path: '/rydsgard',
      name: "Rydsgård",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-002' })
    },
    {
      path: '/trunnerup',
      name: "Trunnerup",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-025' })
    },
    {
      path: '/övre-dikasjo',
      name: "Övre Dikasjö",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-008' })
    },
    {
      path: '/vassland-eolus',
      name: "Vassland Eolus",
      component: ProjectPage,
      extraProps: { projectId: '1884-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1884-V-001' })
    },
    {
      path: '/palstorp',
      name: "Pålstorp",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-061' })
    },
    {
      path: '/ryssberget',
      name: "Ryssberget",
      component: ProjectPage,
      extraProps: { projectId: '1272-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1272-V-007' })
    },
    {
      path: '/halsingeskogen',
      name: "Hälsingeskogen",
      component: ProjectPage,
      extraProps: { projectId: '2121-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2121-V-002' })
    },
    {
      path: '/djurseryd',
      name: "Djurseryd",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-016' })
    },
    {
      path: '/fagerberg',
      name: "Fagerberg",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-020' })
    },
    {
      path: '/kajsberget-6',
      name: "Kajsberget 6",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-026' })
    },
    {
      path: '/fjallberget',
      name: "Fjällberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-018' })
    },
    {
      path: '/kajsberget-7',
      name: "Kajsberget 7",
      component: ProjectPage,
      extraProps: { projectId: '2021-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2021-V-027' })
    },
    {
      path: '/sodra-karra',
      name: "Södra Kärra",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-009' })
    },
    {
      path: '/gardshyttan',
      name: "Gärdshyttan",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-010' })
    },
    {
      path: '/nyckelhult-2',
      name: "Nyckelhult 2",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-014' })
    },
    {
      path: '/trane-örmatofta',
      name: "Träne Örmatofta",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-115' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-115' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-026' })
    },
    {
      path: '/övra-glumslov',
      name: "Övra Glumslöv",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-015' })
    },
    {
      path: '/orreholmen',
      name: "Orreholmen",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-025' })
    },
    {
      path: '/amundtorp',
      name: "Amundtorp",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-047' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-047' })
    },
    {
      path: '/torpa',
      name: "Torpa",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-006' })
    },
    {
      path: '/lerberg',
      name: "Lerberg",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-008' })
    },
    {
      path: '/vindpark-ulvberget',
      name: "Vindpark Ulvberget",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-004' })
    },
    {
      path: '/lundby-tradet',
      name: "Lundby Trädet",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-008' })
    },
    {
      path: '/burasen',
      name: "Buråsen",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-012' })
    },
    {
      path: '/holmevattnet',
      name: "Holmevattnet",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-008' })
    },
    {
      path: '/vindkraftpark-koktraskliden',
      name: "Vindkraftpark Kokträskliden",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-009' })
    },
    {
      path: '/åmjolkesbo',
      name: "Åmjölkesbo",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-008' })
    },
    {
      path: '/öljersjo',
      name: "Öljersjö",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-017' })
    },
    {
      path: '/applerum',
      name: "Applerum",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-032' })
    },
    {
      path: '/applerum',
      name: "Applerum",
      component: ProjectPage,
      extraProps: { projectId: '0834-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0834-V-032' })
    },
    {
      path: '/vinberga',
      name: "Vinberga",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-019' })
    },
    {
      path: '/persmala',
      name: "Persmåla",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-020' })
    },
    {
      path: '/ramdala',
      name: "Ramdala",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-021' })
    },
    {
      path: '/saby',
      name: "Säby",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-022' })
    },
    {
      path: '/basane',
      name: "Båsane",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-038' })
    },
    {
      path: '/liane',
      name: "Liane",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-040' })
    },
    {
      path: '/vartofta-gard',
      name: "Vartofta Gård",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-054' })
    },
    {
      path: '/malajord',
      name: "Målajord",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-013' })
    },
    {
      path: '/bockstigen-1',
      name: "Bockstigen 1",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-001' })
    },
    {
      path: '/vindkraftpark-hogen',
      name: "Vindkraftpark Högen",
      component: ProjectPage,
      extraProps: { projectId: '1462-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1462-V-018' })
    },
    {
      path: '/losen-älmtamala',
      name: "Lösen-Älmtamåla",
      component: ProjectPage,
      extraProps: { projectId: '1080-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1080-V-018' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-008' })
    },
    {
      path: '/stickninge',
      name: "Stickninge",
      component: ProjectPage,
      extraProps: { projectId: '1814-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1814-V-003' })
    },
    {
      path: '/monarp',
      name: "Mönarp",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-053' })
    },
    {
      path: '/lebo',
      name: "Lebo",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-012' })
    },
    {
      path: '/hedared-bollebygd',
      name: "Hedared Bollebygd",
      component: ProjectPage,
      extraProps: { projectId: '1443-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1443-V-003' })
    },
    {
      path: '/lilla-solberga',
      name: "Lilla Solberga",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-051' })
    },
    {
      path: '/kuserud',
      name: "Kuserud",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-037' })
    },
    {
      path: '/toftedals-bon',
      name: "Töftedals-Bön",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-009' })
    },
    {
      path: '/varnebo',
      name: "Värnebo",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-006' })
    },
    {
      path: '/varnebo',
      name: "Värnebo",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-006' })
    },
    {
      path: '/åttingsaker',
      name: "Åttingsåker",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-006' })
    },
    {
      path: '/stuveryr',
      name: "Stuveryr",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-007' })
    },
    {
      path: '/bandene-1',
      name: "Bandene 1",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-008' })
    },
    {
      path: '/bandene-2',
      name: "Bandene 2",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-009' })
    },
    {
      path: '/horntveten',
      name: "Horntveten",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-010' })
    },
    {
      path: '/runnsater',
      name: "Runnsäter",
      component: ProjectPage,
      extraProps: { projectId: '1439-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1439-V-011' })
    },
    {
      path: '/gunbjorbyn',
      name: "Gunbjörbyn",
      component: ProjectPage,
      extraProps: { projectId: '1460-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1460-V-007' })
    },
    {
      path: '/lunna',
      name: "Lunna",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-008' })
    },
    {
      path: '/rangeltorp',
      name: "Rangeltorp",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-051' })
    },
    {
      path: '/kroken',
      name: "Kroken",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-052' })
    },
    {
      path: '/lau-liffride',
      name: "Lau Liffride",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-070' })
    },
    {
      path: '/stjupsparken',
      name: "Stjupsparken",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-072' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-072' })
    },
    {
      path: '/karrarp',
      name: "Kärrarp",
      component: ProjectPage,
      extraProps: { projectId: '1277-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1277-V-032' })
    },
    {
      path: '/varsvik',
      name: "Varsvik",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-007' })
    },
    {
      path: '/nordviken',
      name: "Nordviken",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-010' })
    },
    {
      path: '/vindpark-oskarshamn',
      name: "Vindpark Oskarshamn",
      component: ProjectPage,
      extraProps: { projectId: '0882-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0882-V-005' })
    },
    {
      path: '/bjurerud',
      name: "Bjurerud",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-016' })
    },
    {
      path: '/langenas',
      name: "Långenäs",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-008' })
    },
    {
      path: '/nyeds-hulteby',
      name: "Nyeds-Hulteby",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-014' })
    },
    {
      path: '/mjoberget',
      name: "Mjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-014' })
    },
    {
      path: '/gnost',
      name: "Gnöst",
      component: ProjectPage,
      extraProps: { projectId: '0884-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0884-V-003' })
    },
    {
      path: '/österhultsmala',
      name: "Österhultsmåla",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-026' })
    },
    {
      path: '/vindkraftpark-florkolen',
      name: "Vindkraftpark Florkölen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-041' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0582-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0582-V-006' })
    },
    {
      path: '/hokopinge',
      name: "Hököpinge",
      component: ProjectPage,
      extraProps: { projectId: '1233-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1233-V-007' })
    },
    {
      path: '/nolgarden-sorgarden',
      name: "Nolgården Sörgården",
      component: ProjectPage,
      extraProps: { projectId: '1781-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1781-V-013' })
    },
    {
      path: '/kangerod',
      name: "Kangeröd",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-010' })
    },
    {
      path: '/dalby',
      name: "Dalby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-024' })
    },
    {
      path: '/hallestad',
      name: "Hällestad",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-025' })
    },
    {
      path: '/lyngby',
      name: "Lyngby",
      component: ProjectPage,
      extraProps: { projectId: '1281-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1281-V-026' })
    },
    {
      path: '/svanabyn',
      name: "Svanabyn",
      component: ProjectPage,
      extraProps: { projectId: '2425-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2425-V-003' })
    },
    {
      path: '/siene',
      name: "Siene",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-009' })
    },
    {
      path: '/skakeltorp',
      name: "Skakeltorp",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-010' })
    },
    {
      path: '/uggletorp',
      name: "Uggletorp",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-011' })
    },
    {
      path: '/ornungaskogen',
      name: "Ornungaskogen",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-012' })
    },
    {
      path: '/brunnsbo',
      name: "Brunnsbo",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-008' })
    },
    {
      path: '/gersnas',
      name: "Gersnäs",
      component: ProjectPage,
      extraProps: { projectId: '0483-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0483-V-008' })
    },
    {
      path: '/tygelsjo',
      name: "Tygelsjö",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-008' })
    },
    {
      path: '/svenstorp',
      name: "Svenstorp",
      component: ProjectPage,
      extraProps: { projectId: '1256-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1256-V-007' })
    },
    {
      path: '/humlekärr',
      name: "HUMLEKÄRR",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-013' })
    },
    {
      path: '/norro',
      name: "Norrö",
      component: ProjectPage,
      extraProps: { projectId: '0117-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0117-V-003' })
    },
    {
      path: '/rosendal-mjalnas',
      name: "Rosendal-Mjälnäs",
      component: ProjectPage,
      extraProps: { projectId: '0428-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0428-V-010' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-012' })
    },
    {
      path: '/sattra',
      name: "Sättra",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-031' })
    },
    {
      path: '/gullakra',
      name: "Gullåkra",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-012' })
    },
    {
      path: '/flackarp',
      name: "Flackarp",
      component: ProjectPage,
      extraProps: { projectId: '1230-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1230-V-011' })
    },
    {
      path: '/ruskelsby',
      name: "Ruskelsby",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-032' })
    },
    {
      path: '/kortered',
      name: "Kortered",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-012' })
    },
    {
      path: '/trosaskogen',
      name: "Trosaskogen",
      component: ProjectPage,
      extraProps: { projectId: '0488-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0488-V-003' })
    },
    {
      path: '/kalvabacken',
      name: "Kalvabacken",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-024' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectId: '0767-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0767-V-010' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-017' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-018' })
    },
    {
      path: '/mallebo',
      name: "Mållebo",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-019' })
    },
    {
      path: '/sodra-viback',
      name: "Södra-Vibäck",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-015' })
    },
    {
      path: '/norra-hunna',
      name: "Norra Hunna",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-012' })
    },
    {
      path: '/nyckelhult',
      name: "Nyckelhult",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-013' })
    },
    {
      path: '/-nyckelhult-1',
      name: "Nyckelhult 1",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-004' })
    },
    {
      path: '/nyckelhult-2',
      name: "Nyckelhult 2",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-005' })
    },
    {
      path: '/hallsberg',
      name: "Hallsberg",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-007' })
    },
    {
      path: '/rönneberga',
      name: "RÖNNEBERGA",
      component: ProjectPage,
      extraProps: { projectId: '1282-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1282-V-016' })
    },
    {
      path: '/ölmevalla-bolg',
      name: "Ölmevalla-Bolg",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-007' })
    },
    {
      path: '/brandshult',
      name: "Brandshult",
      component: ProjectPage,
      extraProps: { projectId: '1384-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1384-V-009' })
    },
    {
      path: '/älmasa',
      name: "Älmåsa",
      component: ProjectPage,
      extraProps: { projectId: '1443-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1443-V-004' })
    },
    {
      path: '/lytorp',
      name: "Lytorp",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-011' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-027' })
    },
    {
      path: '/gunnarp',
      name: "Gunnarp",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-048' })
    },
    {
      path: '/henset',
      name: "Henset",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-049' })
    },
    {
      path: '/koinge',
      name: "Köinge",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-050' })
    },
    {
      path: '/palsbo',
      name: "Palsbo",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-008' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-041' })
    },
    {
      path: '/brannan',
      name: "Brännan",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-042' })
    },
    {
      path: '/kronoberget',
      name: "Kronoberget",
      component: ProjectPage,
      extraProps: { projectId: '1814-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1814-V-001' })
    },
    {
      path: '/kungbergen',
      name: "Kungbergen",
      component: ProjectPage,
      extraProps: { projectId: '1782-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1782-V-001' })
    },
    {
      path: '/billingen',
      name: "Billingen",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-018' })
    },
    {
      path: '/stora-bjurum-ö',
      name: "Stora Bjurum Ö",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-055' })
    },
    {
      path: '/hogetomt-skara-lo',
      name: "Högetomt Skara LO",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-048' })
    },
    {
      path: '/teaker',
      name: "Teåker",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-041' })
    },
    {
      path: '/skovde-lo2',
      name: "Skövde LO2",
      component: ProjectPage,
      extraProps: { projectId: '1496-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1496-V-020' })
    },
    {
      path: '/vindpark-bjornsjobodarna---bodriset',
      name: "Vindpark Björnsjöbodarna - Bodriset",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-025' })
    },
    {
      path: '/vindpark-bjornsjobodarna---solberget-vast',
      name: "Vindpark Björnsjöbodarna - Solberget Väst",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-026' })
    },
    {
      path: '/stangsered',
      name: "Stängsered",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-028' })
    },
    {
      path: '/blidsberg',
      name: "Blidsberg",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-029' })
    },
    {
      path: '/storhojden',
      name: "Storhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-017' })
    },
    {
      path: '/storhojden',
      name: "Storhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-018' })
    },
    {
      path: '/vitberget-v3',
      name: "Vitberget V3",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-026' })
    },
    {
      path: '/vitberget-v1',
      name: "Vitberget V1",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-028' })
    },
    {
      path: '/vitberget-v2',
      name: "Vitberget V2",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-029' })
    },
    {
      path: '/saxberget',
      name: "Saxberget",
      component: ProjectPage,
      extraProps: { projectId: '2085-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2085-V-004' })
    },
    {
      path: '/älgkullen',
      name: "Älgkullen",
      component: ProjectPage,
      extraProps: { projectId: '2061-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2061-V-005' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectId: '1214-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1214-V-062' })
    },
    {
      path: '/ånglarna',
      name: "Ånglarna",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-012' })
    },
    {
      path: '/aldermyrberget',
      name: "Aldermyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-015' })
    },
    {
      path: '/mjoback-vindkraftpark',
      name: "Mjöbäck Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-004' })
    },
    {
      path: '/hjo-fagelas-vindkraftpark',
      name: "Hjo Fågelås Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-046' })
    },
    {
      path: '/vara-badene',
      name: "Vara Badene",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-053' })
    },
    {
      path: '/vindpark-bjornsjobodarna---valpasmyrberget',
      name: "Vindpark Björnsjöbodarna - Valpåsmyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-027' })
    },
    {
      path: '/vindpark-bjornsjobodarna---kilbodhojden',
      name: "Vindpark Björnsjöbodarna - Kilbodhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-028' })
    },
    {
      path: '/knostad',
      name: "Knöstad",
      component: ProjectPage,
      extraProps: { projectId: '1785-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1785-V-017' })
    },
    {
      path: '/norra-lansmansberget',
      name: "Norra Länsmansberget",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-005' })
    },
    {
      path: '/backmossen',
      name: "Backmossen",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-006' })
    },
    {
      path: '/norra-vedbo-(jonkoping/aneby)',
      name: "Norra vedbo (Jönköping/Aneby)",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-013' })
    },
    {
      path: '/lockarp',
      name: "Lockarp",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-017' })
    },
    {
      path: '/forsviden-sodra-vindkraftpark',
      name: "Forsviden Södra Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-073' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-073' })
    },
    {
      path: '/fasikan',
      name: "Fasikan",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-029' })
    },
    {
      path: '/tollsjo-slatthult-hedared',
      name: "Töllsjö-Slätthult HEDARED",
      component: ProjectPage,
      extraProps: { projectId: '1443-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1443-V-001' })
    },
    {
      path: '/brattberget',
      name: "Brattberget",
      component: ProjectPage,
      extraProps: { projectId: '2505-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2505-V-003' })
    },
    {
      path: '/ekholma',
      name: "Ekholma",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-040' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-011' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-052' })
    },
    {
      path: '/munkflohogen',
      name: "Munkflohögen",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-002' })
    },
    {
      path: '/gaxsjo-raftsjohojden',
      name: "Gåxsjö-Raftsjöhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-012' })
    },
    {
      path: '/vindpark-lillsela',
      name: "Vindpark Lillsela",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-023' })
    },
    {
      path: '/gaxsjo-raftsjohojden-2',
      name: "Gåxsjö-Raftsjöhöjden 2",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-013' })
    },
    {
      path: '/vastra-kinneskogen',
      name: "Västra Kinneskogen",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-011' })
    },
    {
      path: '/raftsjohojden',
      name: "Raftsjöhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-017' })
    },
    {
      path: '/åskalen',
      name: "Åskälen",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-022' })
    },
    {
      path: '/österasen',
      name: "Österåsen",
      component: ProjectPage,
      extraProps: { projectId: '2380-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2380-V-007' })
    },
    {
      path: '/hallberget',
      name: "Hällberget",
      component: ProjectPage,
      extraProps: { projectId: '2513-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2513-V-001' })
    },
    {
      path: '/åshult',
      name: "Åshult",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-014' })
    },
    {
      path: '/furuby',
      name: "Furuby",
      component: ProjectPage,
      extraProps: { projectId: '0780-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0780-V-002' })
    },
    {
      path: '/grimsas',
      name: "Grimsås",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-010' })
    },
    {
      path: '/vindkraftpark-östra-frolunda',
      name: "Vindkraftpark Östra Frölunda",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-001' })
    },
    {
      path: '/rosenskog',
      name: "Rosenskog",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-048' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-048' })
    },
    {
      path: '/lyrestad',
      name: "Lyrestad",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-012' })
    },
    {
      path: '/karehamn',
      name: "Kårehamn",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-001' })
    },
    {
      path: '/stengardsholma',
      name: "Stengårdsholma",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-002' })
    },
    {
      path: '/granberget',
      name: "Granberget",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-005' })
    },
    {
      path: '/lervik',
      name: "Lervik",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-004' })
    },
    {
      path: '/fangsjon',
      name: "Fängsjön",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-037' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-037' })
    },
    {
      path: '/lannaberget',
      name: "Lannaberget",
      component: ProjectPage,
      extraProps: { projectId: '2031-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2031-V-004' })
    },
    {
      path: '/broboberget',
      name: "Broboberget",
      component: ProjectPage,
      extraProps: { projectId: '2031-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2031-V-005' })
    },
    {
      path: '/vaberget',
      name: "Vaberget",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-038' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-038' })
    },
    {
      path: '/norrliden-bjorksele',
      name: "Norrliden Björksele",
      component: ProjectPage,
      extraProps: { projectId: '2481-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2481-V-011' })
    },
    {
      path: '/hultema',
      name: "Hultema",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-016' })
    },
    {
      path: '/rosendal/lydinge/benarp',
      name: "Rosendal/Lydinge/Benarp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-090' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-090' })
    },
    {
      path: '/vargtrask-1',
      name: "Vargträsk 1",
      component: ProjectPage,
      extraProps: { projectId: '2481-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2481-V-004' })
    },
    {
      path: '/fabodberget-vindkraftpark',
      name: "Fäbodberget Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-012' })
    },
    {
      path: '/hajsberget-och-sodra-lansmansberget',
      name: "Häjsberget och södra Länsmansberget",
      component: ProjectPage,
      extraProps: { projectId: '1766-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1766-V-001' })
    },
    {
      path: '/mjallby-ellen',
      name: "Mjällby Ellen",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-016' })
    },
    {
      path: '/grano',
      name: "Gränö",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-005' })
    },
    {
      path: '/skrallarberget',
      name: "Skrallarberget",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-006' })
    },
    {
      path: '/tvaaker',
      name: "Tvååker",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-021' })
    },
    {
      path: '/bjornlandhojden',
      name: "Björnlandhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-021' })
    },
    {
      path: '/vindpark-marviken',
      name: "Vindpark Marviken",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-016' })
    },
    {
      path: '/vikboland-vind',
      name: "Vikboland Vind",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-017' })
    },
    {
      path: '/glotesvalen',
      name: "Glötesvålen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-026' })
    },
    {
      path: '/aapua-vindpark',
      name: "Aapua Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2518-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2518-V-001' })
    },
    {
      path: '/lantvallen',
      name: "Lantvallen",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-006' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-009' })
    },
    {
      path: '/norra-sunhult',
      name: "Norra Sunhult",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-003' })
    },
    {
      path: '/gratanliden',
      name: "Gråtanliden",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-012' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1482-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1482-V-009' })
    },
    {
      path: '/duvhallen-vindpark',
      name: "Duvhällen Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-014' })
    },
    {
      path: '/han-vindpark',
      name: "Hån Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '1765-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1765-V-008' })
    },
    {
      path: '/sydkustens-vind',
      name: "Sydkustens Vind",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-026' })
    },
    {
      path: '/larsbo-valparbo',
      name: "Larsbo-Valparbo",
      component: ProjectPage,
      extraProps: { projectId: '0360-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0360-V-001' })
    },
    {
      path: '/hogabjar',
      name: "Högabjär",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-008' })
    },
    {
      path: '/karsas',
      name: "Kärsås",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-009' })
    },
    {
      path: '/hedeskoga-vindkraftpark',
      name: "Hedeskoga Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-012' })
    },
    {
      path: '/vaggeryds-vindbrukspark',
      name: "Vaggeryds Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-016' })
    },
    {
      path: '/ävlingeby-gard',
      name: "Ävlingeby gård",
      component: ProjectPage,
      extraProps: { projectId: '0488-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0488-V-002' })
    },
    {
      path: '/vastergarden',
      name: "Västergården",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-022' })
    },
    {
      path: '/naverstads-tyft-edsam',
      name: "Naverstads-Tyft Edsäm",
      component: ProjectPage,
      extraProps: { projectId: '1435-V-068' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1435-V-068' })
    },
    {
      path: '/bergvind-lingbo',
      name: "Bergvind Lingbo",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-007' })
    },
    {
      path: '/bjorkhojden',
      name: "Björkhöjden",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-001' })
    },
    {
      path: '/bodhogarna',
      name: "Bodhögarna",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-016' })
    },
    {
      path: '/barasen',
      name: "Bäråsen",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-011' })
    },
    {
      path: '/ebbegarde',
      name: "Ebbegärde",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-003' })
    },
    {
      path: '/hastkullen',
      name: "Hästkullen",
      component: ProjectPage,
      extraProps: { projectId: '2280-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2280-V-015' })
    },
    {
      path: '/savar',
      name: "Sävar",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-003' })
    },
    {
      path: '/laxaskogen',
      name: "Laxåskogen",
      component: ProjectPage,
      extraProps: { projectId: '1860-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1860-V-005' })
    },
    {
      path: '/stor-skalsjon',
      name: "Stor-Skälsjön",
      component: ProjectPage,
      extraProps: { projectId: '2262-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2262-V-001' })
    },
    {
      path: '/maevaara-vindkraftpark',
      name: "Maevaara vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2518-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2518-V-008' })
    },
    {
      path: '/malarberget',
      name: "Målarberget",
      component: ProjectPage,
      extraProps: { projectId: '1962-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1962-V-001' })
    },
    {
      path: '/hyltakra-med-omnejd-i-älmhult',
      name: "Hyltåkra med omnejd i Älmhult",
      component: ProjectPage,
      extraProps: { projectId: '0765-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0765-V-001' })
    },
    {
      path: '/pautrask-vindpark',
      name: "Pauträsk vindpark",
      component: ProjectPage,
      extraProps: { projectId: '2462-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2462-V-007' })
    },
    {
      path: '/rodene',
      name: "Rödene",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-007' })
    },
    {
      path: '/skottfjallet',
      name: "Skottfjället",
      component: ProjectPage,
      extraProps: { projectId: '1430-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1430-V-027' })
    },
    {
      path: '/stamasen',
      name: "Stamåsen",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-031' })
    },
    {
      path: '/stockasbodarna',
      name: "Stockåsbodarna",
      component: ProjectPage,
      extraProps: { projectId: '2281-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2281-V-010' })
    },
    {
      path: '/blaiken',
      name: "Blaiken",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-004' })
    },
    {
      path: '/storbrannkullen',
      name: "Storbrännkullen",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-006' })
    },
    {
      path: '/tjarnas',
      name: "Tjärnäs",
      component: ProjectPage,
      extraProps: { projectId: '2104-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2104-V-003' })
    },
    {
      path: '/treriksroset',
      name: "Treriksröset",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-016' })
    },
    {
      path: '/vindin-vattenregleringsmagasin',
      name: "VindIn vattenregleringsmagasin",
      component: ProjectPage,
      extraProps: { projectId: '2510-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2510-V-002' })
    },
    {
      path: '/langgrund-1',
      name: "Långgrund 1",
      component: ProjectPage,
      extraProps: { projectId: '0488-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0488-V-004' })
    },
    {
      path: '/soder-landsort',
      name: "Söder Landsort",
      component: ProjectPage,
      extraProps: { projectId: '0192-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0192-V-001' })
    },
    {
      path: '/almagrundet',
      name: "Almagrundet",
      component: ProjectPage,
      extraProps: { projectId: '0120-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0120-V-002' })
    },
    {
      path: '/campsgrund',
      name: "Campsgrund",
      component: ProjectPage,
      extraProps: { projectId: '0360-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0360-V-002' })
    },
    {
      path: '/utposten',
      name: "Utposten",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-006' })
    },
    {
      path: '/vindpark-tonsen',
      name: "Vindpark Tönsen",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-001' })
    },
    {
      path: '/ögonfagnaden',
      name: "Ögonfägnaden",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-013' })
    },
    {
      path: '/örken',
      name: "Örken",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-009' })
    },
    {
      path: '/örken-nord',
      name: "Örken Nord",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-010' })
    },
    {
      path: '/byrasen',
      name: "Byråsen",
      component: ProjectPage,
      extraProps: { projectId: '2023-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2023-V-008' })
    },
    {
      path: '/bosjovarden',
      name: "Bösjövarden",
      component: ProjectPage,
      extraProps: { projectId: '2062-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2062-V-006' })
    },
    {
      path: '/basebo',
      name: "Basebo",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-007' })
    },
    {
      path: '/ramsberget',
      name: "Rämsberget",
      component: ProjectPage,
      extraProps: { projectId: '2023-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2023-V-003' })
    },
    {
      path: '/korpfjallet',
      name: "Korpfjället",
      component: ProjectPage,
      extraProps: { projectId: '2023-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2023-V-004' })
    },
    {
      path: '/riskebo',
      name: "Riskebo",
      component: ProjectPage,
      extraProps: { projectId: '2083-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2083-V-003' })
    },
    {
      path: '/vettasen/finnberget',
      name: "Vettåsen/Finnberget",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-001' })
    },
    {
      path: '/knasjoberget',
      name: "Knäsjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-039' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-039' })
    },
    {
      path: '/knasjoberget',
      name: "Knäsjöberget",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-040' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-040' })
    },
    {
      path: '/krontorp',
      name: "Krontorp",
      component: ProjectPage,
      extraProps: { projectId: '1862-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1862-V-004' })
    },
    {
      path: '/bjorkvattnet',
      name: "Björkvattnet",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-019' })
    },
    {
      path: '/svartnas',
      name: "Svartnäs",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-005' })
    },
    {
      path: '/hedningsmala',
      name: "Hedningsmåla",
      component: ProjectPage,
      extraProps: { projectId: '0512-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0512-V-006' })
    },
    {
      path: '/vindpark-jadraas',
      name: "Vindpark Jädraås",
      component: ProjectPage,
      extraProps: { projectId: '2101-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2101-V-008' })
    },
    {
      path: '/zinkgruvan',
      name: "Zinkgruvan",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-001' })
    },
    {
      path: '/fanbyn',
      name: "Fanbyn",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-008' })
    },
    {
      path: '/ödmarden',
      name: "Ödmården",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-012' })
    },
    {
      path: '/soderkoping/valdemarsvik',
      name: "Söderköping/Valdemarsvik",
      component: ProjectPage,
      extraProps: { projectId: '0563-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0563-V-001' })
    },
    {
      path: '/fallbadan',
      name: "Fällbådan",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-004' })
    },
    {
      path: '/norra-klasgrunden',
      name: "Norra Klasgrunden",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-005' })
    },
    {
      path: '/sodra-klasgrunden',
      name: "Södra Klasgrunden",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-006' })
    },
    {
      path: '/penningskar',
      name: "Penningskär",
      component: ProjectPage,
      extraProps: { projectId: '0480-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0480-V-004' })
    },
    {
      path: '/grepen',
      name: "Grepen",
      component: ProjectPage,
      extraProps: { projectId: '0382-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0382-V-004' })
    },
    {
      path: '/sodra-kvarken',
      name: "Södra Kvarken",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-022' })
    },
    {
      path: '/vaktaren',
      name: "Väktaren",
      component: ProjectPage,
      extraProps: { projectId: '2480-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2480-V-023' })
    },
    {
      path: '/rata-storgrund-etapp-1',
      name: "Rata Storgrund etapp 1",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-007' })
    },
    {
      path: '/rata-storgrund-etapp-2',
      name: "Rata Storgrund etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-008' })
    },
    {
      path: '/haru',
      name: "Haru",
      component: ProjectPage,
      extraProps: { projectId: '2583-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2583-V-004' })
    },
    {
      path: '/brotorp',
      name: "Brotorp",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-060' })
    },
    {
      path: '/markbygden-vindkraftpark,-etapp-2',
      name: "Markbygden vindkraftpark, etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-009' })
    },
    {
      path: '/rosenholm-vindpark',
      name: "Rosenholm Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-043' })
    },
    {
      path: '/karskruv',
      name: "Karskruv",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-035' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-035' })
    },
    {
      path: '/utknallen',
      name: "Utknallen",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-007' })
    },
    {
      path: '/tahult',
      name: "Tåhult",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-019' })
    },
    {
      path: '/marhult-vindpark',
      name: "Marhult Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-044' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-044' })
    },
    {
      path: '/skraplinge',
      name: "Skräplinge",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-007' })
    },
    {
      path: '/hablinge-vindpark',
      name: "Hablinge Vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-074' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-074' })
    },
    {
      path: '/hornamossen',
      name: "Hornamossen",
      component: ProjectPage,
      extraProps: { projectId: '0643-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0643-V-008' })
    },
    {
      path: '/stonnansbo',
      name: "Stönnansbo",
      component: ProjectPage,
      extraProps: { projectId: '0360-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0360-V-003' })
    },
    {
      path: '/rolunda',
      name: "Rölunda",
      component: ProjectPage,
      extraProps: { projectId: '0305-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0305-V-002' })
    },
    {
      path: '/stentjarnasen',
      name: "Stentjärnåsen",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-023' })
    },
    {
      path: '/klevberget',
      name: "Klevberget",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-015' })
    },
    {
      path: '/bordsjo-vindbrukspark',
      name: "Bordsjö Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-016' })
    },
    {
      path: '/hornberget',
      name: "Hornberget",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-001' })
    },
    {
      path: '/klamman',
      name: "Klämman",
      component: ProjectPage,
      extraProps: { projectId: '0662-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0662-V-010' })
    },
    {
      path: '/fjallberg-vindkraftspark',
      name: "Fjällberg Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-013' })
    },
    {
      path: '/rockneby',
      name: "Rockneby",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-016' })
    },
    {
      path: '/rockneby',
      name: "Rockneby",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-028' })
    },
    {
      path: '/vassmolosa',
      name: "Vassmolösa",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-030' })
    },
    {
      path: '/trollberget-2',
      name: "Trollberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2080-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2080-V-013' })
    },
    {
      path: '/änglarp',
      name: "Änglarp",
      component: ProjectPage,
      extraProps: { projectId: '1465-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1465-V-013' })
    },
    {
      path: '/ånhammar',
      name: "Ånhammar",
      component: ProjectPage,
      extraProps: { projectId: '0461-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0461-V-001' })
    },
    {
      path: '/vasttorp',
      name: "Västtorp",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-056' })
    },
    {
      path: '/åsle',
      name: "Åsle",
      component: ProjectPage,
      extraProps: { projectId: '1499-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1499-V-057' })
    },
    {
      path: '/velanda-gard',
      name: "Velanda gård",
      component: ProjectPage,
      extraProps: { projectId: '1488-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1488-V-007' })
    },
    {
      path: '/stor-rotliden-vindkraftpark',
      name: "Stor-Rotliden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-003' })
    },
    {
      path: '/lyckas-gard',
      name: "Lyckås gård",
      component: ProjectPage,
      extraProps: { projectId: '1276-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1276-V-021' })
    },
    {
      path: '/erikstorp-i',
      name: "Erikstorp I",
      component: ProjectPage,
      extraProps: { projectId: '1471-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1471-V-007' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-075' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-075' })
    },
    {
      path: '/gardsverk-asmundstorp',
      name: "Gårdsverk Asmundstorp",
      component: ProjectPage,
      extraProps: { projectId: '1487-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1487-V-034' })
    },
    {
      path: '/gislorp',
      name: "Gislorp",
      component: ProjectPage,
      extraProps: { projectId: '0583-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0583-V-025' })
    },
    {
      path: '/tapplarp',
      name: "Tapplarp",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-014' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-003' })
    },
    {
      path: '/hallhult/fredriksdal',
      name: "Hallhult/Fredriksdal",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-007' })
    },
    {
      path: '/bosarp',
      name: "Bösarp",
      component: ProjectPage,
      extraProps: { projectId: '1290-V-117' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1290-V-117' })
    },
    {
      path: '/grolanda',
      name: "Grolanda",
      component: ProjectPage,
      extraProps: { projectId: '1440-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1440-V-004' })
    },
    {
      path: '/ruuthsbo-vindkraftpark',
      name: "Ruuthsbo Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-009' })
    },
    {
      path: '/bronnestad',
      name: "Brönnestad",
      component: ProjectPage,
      extraProps: { projectId: '1293-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1293-V-034' })
    },
    {
      path: '/brunnslov',
      name: "Brunnslöv",
      component: ProjectPage,
      extraProps: { projectId: '1266-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1266-V-051' })
    },
    {
      path: '/sorbyparken',
      name: "Sörbyparken",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-009' })
    },
    {
      path: '/äspinge',
      name: "Äspinge",
      component: ProjectPage,
      extraProps: { projectId: '1267-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1267-V-021' })
    },
    {
      path: '/vindpark-vanern',
      name: "Vindpark Vänern",
      component: ProjectPage,
      extraProps: { projectId: '1780-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1780-V-005' })
    },
    {
      path: '/mosas',
      name: "Mosås",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-027' })
    },
    {
      path: '/seltorp',
      name: "Seltorp",
      component: ProjectPage,
      extraProps: { projectId: '1880-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1880-V-028' })
    },
    {
      path: '/erken',
      name: "Erken",
      component: ProjectPage,
      extraProps: { projectId: '0188-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0188-V-010' })
    },
    {
      path: '/vabynas',
      name: "Väbynäs",
      component: ProjectPage,
      extraProps: { projectId: '1081-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1081-V-004' })
    },
    {
      path: '/horeryd',
      name: "Höreryd",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-027' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-025' })
    },
    {
      path: '/mossgard',
      name: "Mossgård",
      component: ProjectPage,
      extraProps: { projectId: '0685-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0685-V-021' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '1060-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1060-V-007' })
    },
    {
      path: '/lorby-ysane',
      name: "Lörby-Ysane",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-017' })
    },
    {
      path: '/solve',
      name: "Sölve",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-018' })
    },
    {
      path: '/bjorkevik',
      name: "Björkevik",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-019' })
    },
    {
      path: '/östana',
      name: "Östanå",
      component: ProjectPage,
      extraProps: { projectId: '0117-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0117-V-004' })
    },
    {
      path: '/mariedamm',
      name: "Mariedamm",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-005' })
    },
    {
      path: '/raliden',
      name: "Råliden",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-019' })
    },
    {
      path: '/kloverberget',
      name: "Klöverberget",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-020' })
    },
    {
      path: '/smeby',
      name: "Smeby",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-024' })
    },
    {
      path: '/borstorp',
      name: "Börstorp",
      component: ProjectPage,
      extraProps: { projectId: '1493-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1493-V-023' })
    },
    {
      path: '/östra-hamnen',
      name: "Östra Hamnen",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-009' })
    },
    {
      path: '/langtora-vindkraft',
      name: "Långtora Vindkraft",
      component: ProjectPage,
      extraProps: { projectId: '0381-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0381-V-015' })
    },
    {
      path: '/åmliden',
      name: "Åmliden",
      component: ProjectPage,
      extraProps: { projectId: '2418-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2418-V-012' })
    },
    {
      path: '/klappe',
      name: "Kläppe",
      component: ProjectPage,
      extraProps: { projectId: '2321-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2321-V-013' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-091' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-091' })
    },
    {
      path: '/ottarp',
      name: "Ottarp",
      component: ProjectPage,
      extraProps: { projectId: '1283-V-092' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1283-V-092' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-001' })
    },
    {
      path: '/larbro-liffride',
      name: "Lärbro Liffride",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-071' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-071' })
    },
    {
      path: '/blakliden-vindkraftpark',
      name: "Blakliden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-011' })
    },
    {
      path: '/skogberget',
      name: "Skogberget",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-015' })
    },
    {
      path: '/örum',
      name: "Örum",
      component: ProjectPage,
      extraProps: { projectId: '1286-V-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1286-V-029' })
    },
    {
      path: '/garsnas',
      name: "Gärsnäs",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-069' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-069' })
    },
    {
      path: '/tjustorp',
      name: "Tjustorp",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-049' })
    },
    {
      path: '/ö-ingelstad',
      name: "Ö Ingelstad",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-050' })
    },
    {
      path: '/strömmestad',
      name: "STRÖMMESTAD",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-077' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-077' })
    },
    {
      path: '/branninge',
      name: "Bränninge",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-071' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-071' })
    },
    {
      path: '/salvetorp',
      name: "Salvetorp",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-058' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-058' })
    },
    {
      path: '/hogstad',
      name: "Hogstad",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-078' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-078' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-063' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-063' })
    },
    {
      path: '/vistena-18-2',
      name: "Vistena 18-2",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-060' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-060' })
    },
    {
      path: '/hogby-gardsverk',
      name: "Högby Gårdsverk",
      component: ProjectPage,
      extraProps: { projectId: '0586-V-069' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0586-V-069' })
    },
    {
      path: '/brannlidens-vindkraftspark',
      name: "Brännlidens vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-021' })
    },
    {
      path: '/siggebohyttan',
      name: "Siggebohyttan",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-007' })
    },
    {
      path: '/nordbyn',
      name: "Nordbyn",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-010' })
    },
    {
      path: '/vallsta',
      name: "Vallsta",
      component: ProjectPage,
      extraProps: { projectId: '2309-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2309-V-011' })
    },
    {
      path: '/vindparken-lonhult',
      name: "Vindparken Lönhult",
      component: ProjectPage,
      extraProps: { projectId: '0604-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0604-V-017' })
    },
    {
      path: '/selkavaara-vindkraftpark',
      name: "Selkävaara Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2521-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2521-V-004' })
    },
    {
      path: '/lehtirova-vindkraftpark',
      name: "Lehtirova vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2521-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2521-V-001' })
    },
    {
      path: '/langgrund-2',
      name: "Långgrund 2",
      component: ProjectPage,
      extraProps: { projectId: '0481-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0481-V-007' })
    },
    {
      path: '/utposten-2',
      name: "Utposten 2",
      component: ProjectPage,
      extraProps: { projectId: '2180-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2180-V-008' })
    },
    {
      path: '/gretas-klackar-1',
      name: "Gretas Klackar 1",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-009' })
    },
    {
      path: '/idhult',
      name: "Idhult",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-055' })
    },
    {
      path: '/hassleby',
      name: "Hässleby",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-018' })
    },
    {
      path: '/nordkolen',
      name: "Nordkölen",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-021' })
    },
    {
      path: '/gardesfloberget',
      name: "Gärdesfloberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-003' })
    },
    {
      path: '/gardesfloberget',
      name: "Gärdesfloberget",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-022' })
    },
    {
      path: '/bystorp-vind',
      name: "Bystorp Vind",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-054' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-054' })
    },
    {
      path: '/storasen',
      name: "Storåsen",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-016' })
    },
    {
      path: '/sandselehojderna-vindkraftpark',
      name: "Sandselehöjderna Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-009' })
    },
    {
      path: '/markbygden-ett',
      name: "Markbygden ETT",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-016' })
    },
    {
      path: '/lonneborg',
      name: "Lönneborg",
      component: ProjectPage,
      extraProps: { projectId: '1083-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1083-V-020' })
    },
    {
      path: '/langjum',
      name: "Längjum",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-055' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-055' })
    },
    {
      path: '/rockagarden',
      name: "Rockagården",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-056' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-056' })
    },
    {
      path: '/erikstads-bjornebol',
      name: "Erikstads-Björnebol",
      component: ProjectPage,
      extraProps: { projectId: '1461-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1461-V-014' })
    },
    {
      path: '/hagstad',
      name: "Hagstad",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-019' })
    },
    {
      path: '/borghamn',
      name: "Borghamn",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-027' })
    },
    {
      path: '/tolanga',
      name: "Tolånga",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-024' })
    },
    {
      path: '/franninge',
      name: "Fränninge",
      component: ProjectPage,
      extraProps: { projectId: '1265-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1265-V-025' })
    },
    {
      path: '/v1-sorlidberget',
      name: "V1 Sörlidberget",
      component: ProjectPage,
      extraProps: { projectId: '2282-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2282-V-030' })
    },
    {
      path: '/soderakra',
      name: "Söderåkra",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-031' })
    },
    {
      path: '/ravsnas',
      name: "Rävsnäs",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-022' })
    },
    {
      path: '/humla',
      name: "Humla",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-031' })
    },
    {
      path: '/rorum',
      name: "Rörum",
      component: ProjectPage,
      extraProps: { projectId: '1291-V-070' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1291-V-070' })
    },
    {
      path: '/horla',
      name: "Horla",
      component: ProjectPage,
      extraProps: { projectId: '1442-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1442-V-013' })
    },
    {
      path: '/sparlosa',
      name: "Sparlösa",
      component: ProjectPage,
      extraProps: { projectId: '1470-V-057' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1470-V-057' })
    },
    {
      path: '/mangslidberget',
      name: "Mangslidberget",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-007' })
    },
    {
      path: '/vilseberga',
      name: "Vilseberga",
      component: ProjectPage,
      extraProps: { projectId: '0584-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0584-V-028' })
    },
    {
      path: '/stollsaterberget',
      name: "Stöllsäterberget",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-001' })
    },
    {
      path: '/verkanliden',
      name: "Verkanliden",
      component: ProjectPage,
      extraProps: { projectId: '2421-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2421-V-014' })
    },
    {
      path: '/gretas-klackar-2',
      name: "Gretas Klackar 2",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-015' })
    },
    {
      path: '/finnaberget',
      name: "Finnåberget",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-036' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-036' })
    },
    {
      path: '/fabodliden-ii',
      name: "Fäbodliden II",
      component: ProjectPage,
      extraProps: { projectId: '2404-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2404-V-003' })
    },
    {
      path: '/storhojden-etapp-2',
      name: "Storhöjden etapp 2",
      component: ProjectPage,
      extraProps: { projectId: '2283-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2283-V-042' })
    },
    {
      path: '/brantet,-solberg',
      name: "Bräntet, Solberg",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-016' })
    },
    {
      path: '/boarp',
      name: "Boarp",
      component: ProjectPage,
      extraProps: { projectId: '0665-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0665-V-017' })
    },
    {
      path: '/hedared',
      name: "Hedared",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-009' })
    },
    {
      path: '/bruzaholm-vindkraftpark',
      name: "Bruzaholm Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0686-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0686-V-015' })
    },
    {
      path: '/boarp-och-stigared-vindkraftpark',
      name: "Boarp och Stigared Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1491-V-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1491-V-030' })
    },
    {
      path: '/stormyrberget-vindkraftpark',
      name: "Stormyrberget Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2284-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2284-V-025' })
    },
    {
      path: '/gronhult-vindkraftpark',
      name: "Grönhult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1452-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1452-V-009' })
    },
    {
      path: '/nasudden-öst-vindkraftpark',
      name: "Näsudden Öst Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-076' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-076' })
    },
    {
      path: '/velinga-vindkraftpark',
      name: "Velinga Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '1498-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1498-V-012' })
    },
    {
      path: '/nasudden-vindkraftpark',
      name: "Näsudden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-003' })
    },
    {
      path: '/skals-vindpark',
      name: "Skåls vindpark",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-007' })
    },
    {
      path: '/grasgarde',
      name: "Gräsgärde",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-032' })
    },
    {
      path: '/hogehult',
      name: "Högehult",
      component: ProjectPage,
      extraProps: { projectId: '0881-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0881-V-007' })
    },
    {
      path: '/ed-sv-/-burasen',
      name: "Ed SV / Buråsen",
      component: ProjectPage,
      extraProps: { projectId: '1438-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1438-V-010' })
    },
    {
      path: '/ödeshog',
      name: "Ödeshög",
      component: ProjectPage,
      extraProps: { projectId: '0509-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0509-V-027' })
    },
    {
      path: '/skalsparken-vast',
      name: "Skålsparken Väst",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-077' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-077' })
    },
    {
      path: '/flottskar',
      name: "Flottskär",
      component: ProjectPage,
      extraProps: { projectId: '0360-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0360-V-004' })
    },
    {
      path: '/storlandet-vindkraftpark',
      name: "Storlandet Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectId: '2523-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2523-V-006' })
    },
    {
      path: '/tribbhult',
      name: "Tribbhult",
      component: ProjectPage,
      extraProps: { projectId: '0883-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0883-V-013' })
    },
    {
      path: '/markbygden-etapp-3',
      name: "Markbygden Etapp 3",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-012' })
    },
    {
      path: '/erstrask',
      name: "Ersträsk",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-017' })
    },
    {
      path: '/skansen',
      name: "Skansen",
      component: ProjectPage,
      extraProps: { projectId: '2084-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2084-V-004' })
    },
    {
      path: '/örken-munkabol',
      name: "Örken-Munkabol",
      component: ProjectPage,
      extraProps: { projectId: '1315-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1315-V-017' })
    },
    {
      path: '/stomne',
      name: "Stömne",
      component: ProjectPage,
      extraProps: { projectId: '1784-V-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1784-V-001' })
    },
    {
      path: '/rojmyrberget',
      name: "Röjmyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2409-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2409-V-009' })
    },
    {
      path: '/morkullberget',
      name: "Morkullberget",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-018' })
    },
    {
      path: '/upplo',
      name: "Upplo",
      component: ProjectPage,
      extraProps: { projectId: '1489-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1489-V-011' })
    },
    {
      path: '/kallbomark',
      name: "Källbomark",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-022' })
    },
    {
      path: '/smygheden',
      name: "Smygheden",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-024' })
    },
    {
      path: '/hycklinge',
      name: "Hycklinge",
      component: ProjectPage,
      extraProps: { projectId: '0513-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0513-V-005' })
    },
    {
      path: '/kaymavaara-vindkraftspark',
      name: "Käymävaara Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectId: '2521-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2521-V-005' })
    },
    {
      path: '/rydsgard',
      name: "Rydsgård",
      component: ProjectPage,
      extraProps: { projectId: '1264-V-027' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1264-V-027' })
    },
    {
      path: '/backagard',
      name: "Bäckagård",
      component: ProjectPage,
      extraProps: { projectId: '1383-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1383-V-023' })
    },
    {
      path: '/ripfjallet',
      name: "Ripfjället",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-008' })
    },
    {
      path: '/nyvallsasen',
      name: "Nyvallsåsen",
      component: ProjectPage,
      extraProps: { projectId: '2132-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2132-V-011' })
    },
    {
      path: '/munkhyttan',
      name: "Munkhyttan",
      component: ProjectPage,
      extraProps: { projectId: '1885-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1885-V-008' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-041' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-041' })
    },
    {
      path: '/skarpen',
      name: "Skarpen",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-016' })
    },
    {
      path: '/blasmark',
      name: "Blåsmark",
      component: ProjectPage,
      extraProps: { projectId: '2581-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2581-V-018' })
    },
    {
      path: '/mosjoberg',
      name: "Mösjöberg",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-008' })
    },
    {
      path: '/wfz1',
      name: "WFZ1",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-003' })
    },
    {
      path: '/wfz2',
      name: "WFZ2",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-004' })
    },
    {
      path: '/wfz3',
      name: "WFZ3",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-005' })
    },
    {
      path: '/wfz4',
      name: "WFZ4",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-006' })
    },
    {
      path: '/wfz5',
      name: "WFZ5",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-007' })
    },
    {
      path: '/svarvarebacken',
      name: "Svarvarebacken",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-049' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-049' })
    },
    {
      path: '/blisterliden',
      name: "Blisterliden",
      component: ProjectPage,
      extraProps: { projectId: '2482-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2482-V-025' })
    },
    {
      path: '/grubban',
      name: "Grubban",
      component: ProjectPage,
      extraProps: { projectId: '2361-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2361-V-042' })
    },
    {
      path: '/rambo',
      name: "Rambo",
      component: ProjectPage,
      extraProps: { projectId: '2404-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2404-V-004' })
    },
    {
      path: '/lyckas',
      name: "Lyckås",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-013' })
    },
    {
      path: '/kriegers-flak',
      name: "Kriegers Flak",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-009' })
    },
    {
      path: '/stora-middelgrund',
      name: "Stora Middelgrund",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-010' })
    },
    {
      path: '/bleka',
      name: "Bleka",
      component: ProjectPage,
      extraProps: { projectId: '2313-V-028' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2313-V-028' })
    },
    {
      path: '/karsamala',
      name: "Karsamåla",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-008' })
    },
    {
      path: '/dalshult',
      name: "Dalshult",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-052' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-052' })
    },
    {
      path: '/nas-sigsarve',
      name: "Näs Sigsarve",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-078' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-078' })
    },
    {
      path: '/olofsberg',
      name: "Olofsberg",
      component: ProjectPage,
      extraProps: { projectId: '2404-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2404-V-005' })
    },
    {
      path: '/kattegatt-syd',
      name: "Kattegatt Syd",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-012' })
    },
    {
      path: '/fyrskeppet',
      name: "Fyrskeppet",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-013' })
    },
    {
      path: '/vindkraftpark-fagelas',
      name: "Vindkraftpark Fågelås",
      component: ProjectPage,
      extraProps: { projectId: '1497-V-053' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1497-V-053' })
    },
    {
      path: '/alnarp',
      name: "Alnarp",
      component: ProjectPage,
      extraProps: { projectId: '1262-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1262-V-009' })
    },
    {
      path: '/bjorko',
      name: "Björkö",
      component: ProjectPage,
      extraProps: { projectId: '1407-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1407-V-003' })
    },
    {
      path: '/össjo',
      name: "Össjö",
      component: ProjectPage,
      extraProps: { projectId: '1292-V-034' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1292-V-034' })
    },
    {
      path: '/hokanas-hovgard',
      name: "Hökanäs-Hovgård",
      component: ProjectPage,
      extraProps: { projectId: '0760-V-045' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0760-V-045' })
    },
    {
      path: '/yttre-ringvagen',
      name: "Yttre ringvägen",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-010' })
    },
    {
      path: '/galatea-galene',
      name: "Galatea-Galene",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-014' })
    },
    {
      path: '/torp',
      name: "Torp",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-061' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-061' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectId: '1861-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1861-V-010' })
    },
    {
      path: '/lilla-kettstaka',
      name: "Lilla Kettstaka",
      component: ProjectPage,
      extraProps: { projectId: '1882-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1882-V-015' })
    },
    {
      path: '/kallmyrberget',
      name: "Källmyrberget",
      component: ProjectPage,
      extraProps: { projectId: '2161-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2161-V-017' })
    },
    {
      path: '/vindpark-femstenaberg',
      name: "Vindpark Femstenaberg",
      component: ProjectPage,
      extraProps: { projectId: '1486-V-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1486-V-012' })
    },
    {
      path: '/stora-uvberget',
      name: "Stora Uvberget",
      component: ProjectPage,
      extraProps: { projectId: '0484-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0484-V-015' })
    },
    {
      path: '/hogsjon',
      name: "Högsjön",
      component: ProjectPage,
      extraProps: { projectId: '0562-V-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0562-V-003' })
    },
    {
      path: '/klintaberg',
      name: "Klintaberg",
      component: ProjectPage,
      extraProps: { projectId: '0562-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0562-V-004' })
    },
    {
      path: '/skybygget',
      name: "Skybygget",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-019' })
    },
    {
      path: '/fagremo',
      name: "Fägremo",
      component: ProjectPage,
      extraProps: { projectId: '1473-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1473-V-025' })
    },
    {
      path: '/lillas',
      name: "Lillås",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-009' })
    },
    {
      path: '/norrberget',
      name: "Norrberget",
      component: ProjectPage,
      extraProps: { projectId: '2183-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2183-V-010' })
    },
    {
      path: '/galmsjomyran',
      name: "Galmsjömyran",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-006' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-006' })
    },
    {
      path: '/grasas',
      name: "Gräsås",
      component: ProjectPage,
      extraProps: { projectId: '1380-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1380-V-021' })
    },
    {
      path: '/urasa-vindbrukspark',
      name: "Uråsa Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectId: '0763-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0763-V-009' })
    },
    {
      path: '/jiltjaur',
      name: "Jiltjaur",
      component: ProjectPage,
      extraProps: { projectId: '2422-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2422-V-010' })
    },
    {
      path: '/storberget-2',
      name: "Storberget 2",
      component: ProjectPage,
      extraProps: { projectId: '2463-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2463-V-014' })
    },
    {
      path: '/kusberget',
      name: "Kusberget",
      component: ProjectPage,
      extraProps: { projectId: '2305-V-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2305-V-031' })
    },
    {
      path: '/kapelludden',
      name: "Kapelludden",
      component: ProjectPage,
      extraProps: { projectId: '0980-V-079' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0980-V-079' })
    },
    {
      path: '/stora-middelgrund',
      name: "Stora Middelgrund",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-015' })
    },
    {
      path: '/sylen',
      name: "Sylen",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-002' })
    },
    {
      path: '/nedra-sandby',
      name: "Nedra Sandby",
      component: ProjectPage,
      extraProps: { projectId: '0885-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0885-V-046' })
    },
    {
      path: '/marktjarn',
      name: "Marktjärn",
      component: ProjectPage,
      extraProps: { projectId: '2260-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2260-V-017' })
    },
    {
      path: '/poseidon-syd',
      name: "Poseidon Syd",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-016' })
    },
    {
      path: '/poseidon-nord',
      name: "Poseidon Nord",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-017' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-017' })
    },
    {
      path: '/eystrasalt',
      name: "Eystrasalt",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-018' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-018' })
    },
    {
      path: '/savedalen',
      name: "Sävedalen",
      component: ProjectPage,
      extraProps: { projectId: '1495-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1495-V-050' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectId: '0840-V-102' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0840-V-102' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectId: '2303-V-026' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2303-V-026' })
    },
    {
      path: '/aspeland',
      name: "Aspeland",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-009' })
    },
    {
      path: '/skane-havsvindpark',
      name: "Skåne havsvindpark",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-019' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-019' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectId: '1484-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1484-V-014' })
    },
    {
      path: '/bondrum',
      name: "Bondrum",
      component: ProjectPage,
      extraProps: { projectId: '1270-V-051' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1270-V-051' })
    },
    {
      path: '/ramma',
      name: "Rämma",
      component: ProjectPage,
      extraProps: { projectId: '1415-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1415-V-023' })
    },
    {
      path: '/jattebergen',
      name: "Jättebergen",
      component: ProjectPage,
      extraProps: { projectId: '0581-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0581-V-020' })
    },
    {
      path: '/silja',
      name: "Silja",
      component: ProjectPage,
      extraProps: { projectId: '2184-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2184-V-010' })
    },
    {
      path: '/roknolen',
      name: "Röknölen",
      component: ProjectPage,
      extraProps: { projectId: '1737-V-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1737-V-009' })
    },
    {
      path: '/storgrundet',
      name: "Storgrundet",
      component: ProjectPage,
      extraProps: { projectId: '2182-V-016' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2182-V-016' })
    },
    {
      path: '/stormossen',
      name: "Stormossen",
      component: ProjectPage,
      extraProps: { projectId: '2181-V-007' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2181-V-007' })
    },
    {
      path: '/mareld',
      name: "Mareld",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-020' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-020' })
    },
    {
      path: '/dyning',
      name: "Dyning",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-021' })
    },
    {
      path: '/orsa-norr',
      name: "Orsa Norr",
      component: ProjectPage,
      extraProps: { projectId: '2034-V-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2034-V-004' })
    },
    {
      path: '/triton',
      name: "Triton",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-022' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-022' })
    },
    {
      path: '/tretjarnsberget',
      name: "Tretjärnsberget",
      component: ProjectPage,
      extraProps: { projectId: '1983-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1983-V-002' })
    },
    {
      path: '/kedjeasen',
      name: "Kedjeåsen",
      component: ProjectPage,
      extraProps: { projectId: '1883-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1883-V-002' })
    },
    {
      path: '/sallebraten',
      name: "Sällebråten",
      component: ProjectPage,
      extraProps: { projectId: '0781-V-042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0781-V-042' })
    },
    {
      path: '/jordberga',
      name: "Jordberga",
      component: ProjectPage,
      extraProps: { projectId: '1287-V-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1287-V-046' })
    },
    {
      path: '/tonshult',
      name: "Tönshult",
      component: ProjectPage,
      extraProps: { projectId: '0860-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0860-V-010' })
    },
    {
      path: '/sjollen',
      name: "Sjollen",
      component: ProjectPage,
      extraProps: { projectId: '1280-V-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1280-V-011' })
    },
    {
      path: '/kila',
      name: "Kila",
      component: ProjectPage,
      extraProps: { projectId: '1382-V-050' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1382-V-050' })
    },
    {
      path: '/kultje',
      name: "Kultje",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-023' })
    },
    {
      path: '/vassberg-',
      name: "Våssberg",
      component: ProjectPage,
      extraProps: { projectId: '1490-V-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1490-V-010' })
    },
    {
      path: '/hjartsola',
      name: "Hjärtsöla",
      component: ProjectPage,
      extraProps: { projectId: '0682-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0682-V-023' })
    },
    {
      path: '/mortsjo',
      name: "Mörtsjö",
      component: ProjectPage,
      extraProps: { projectId: '0562-V-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0562-V-005' })
    },
    {
      path: '/ebbegarde',
      name: "Ebbegärde",
      component: ProjectPage,
      extraProps: { projectId: '0880-V-033' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0880-V-033' })
    },
    {
      path: '/karnebo',
      name: "Kärnebo",
      component: ProjectPage,
      extraProps: { projectId: '0861-V-062' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0861-V-062' })
    },
    {
      path: '/aurora',
      name: "Aurora",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-024' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-024' })
    },
    {
      path: '/mallby',
      name: "Mällby",
      component: ProjectPage,
      extraProps: { projectId: '0680-V-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '0680-V-014' })
    },
    {
      path: '/nordkolen',
      name: "Nordkölen",
      component: ProjectPage,
      extraProps: { projectId: '2326-V-023' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '2326-V-023' })
    },
    {
      path: '/bjornetjarnsberget',
      name: "Björnetjärnsberget",
      component: ProjectPage,
      extraProps: { projectId: '1730-V-002' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '1730-V-002' })
    },
    {
      path: '/vidar',
      name: "Vidar",
      component: ProjectPage,
      extraProps: { projectId: '3000-V-025' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectId: '3000-V-025' })
    },
    
    // Project links end

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: PasswordResetPage ,
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
