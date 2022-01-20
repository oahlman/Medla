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
      path: '/hybrit',
      name: 'Hybrit',
      component: ProjectPage,
      extraProps: { projectUrl: 'hybrit' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hybrit' })
    },

    //Vindbrukskollen project links start

    {
      path: '/kattorp-1',
      name: 'Kattorp 1',
      component: ProjectPage,
      extraProps: { projectUrl: 'kattorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kattorp-1' })
    },
    {
      path: '/barstad-2',
      name: 'Bårstad 2',
      component: ProjectPage,
      extraProps: { projectUrl: 'barstad-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barstad-2' })
    },
    {
      path: '/åbylund',
      name: 'Åbylund',
      component: ProjectPage,
      extraProps: { projectUrl: 'åbylund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åbylund' })
    },
    {
      path: '/bondorlunda',
      name: 'Bondorlunda',
      component: ProjectPage,
      extraProps: { projectUrl: 'bondorlunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondorlunda' })
    },
    {
      path: '/granby',
      name: 'Granby',
      component: ProjectPage,
      extraProps: { projectUrl: 'granby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granby' })
    },
    {
      path: '/brodderud',
      name: 'Brodderud',
      component: ProjectPage,
      extraProps: { projectUrl: 'brodderud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brodderud' })
    },
    {
      path: '/sidensjo',
      name: 'Sidensjö',
      component: ProjectPage,
      extraProps: { projectUrl: 'sidensjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sidensjo' })
    },
    {
      path: '/holmsjoasen',
      name: 'Holmsjöåsen',
      component: ProjectPage,
      extraProps: { projectUrl: 'holmsjoasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmsjoasen' })
    },
    {
      path: '/isbillen-kullmyran',
      name: 'Isbillen-Kullmyran',
      component: ProjectPage,
      extraProps: { projectUrl: 'isbillen-kullmyran' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isbillen-kullmyran' })
    },
    {
      path: '/jenasen',
      name: 'Jenåsen',
      component: ProjectPage,
      extraProps: { projectUrl: 'jenasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jenasen' })
    },
    {
      path: '/kraktorpet',
      name: 'Kråktorpet',
      component: ProjectPage,
      extraProps: { projectUrl: 'kraktorpet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kraktorpet' })
    },
    {
      path: '/kampelandet',
      name: 'Kämpelandet',
      component: ProjectPage,
      extraProps: { projectUrl: 'kampelandet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kampelandet' })
    },
    {
      path: '/karmsjon',
      name: 'Kärmsjön',
      component: ProjectPage,
      extraProps: { projectUrl: 'karmsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karmsjon' })
    },
    {
      path: '/lindomsberget',
      name: 'Lindomsberget',
      component: ProjectPage,
      extraProps: { projectUrl: 'lindomsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lindomsberget' })
    },
    {
      path: '/vindkraftpark-langasen',
      name: 'Vindkraftpark Långåsen',
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-langasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-langasen' })
    },
    {
      path: '/mockelsjoberget',
      name: 'Möckelsjöberget',
      component: ProjectPage,
      extraProps: { projectUrl: 'mockelsjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mockelsjoberget' })
    },
    {
      path: '/nylandsbergen,-getasen,-rodsjoasen.',
      name: 'Nylandsbergen, Getåsen, Rödsjöåsen.',
      component: ProjectPage,
      extraProps: { projectUrl: 'nylandsbergen,-getasen,-rodsjoasen.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nylandsbergen,-getasen,-rodsjoasen.' })
    },
    {
      path: '/ranasjon',
      name: 'Ranasjön',
      component: ProjectPage,
      extraProps: { projectUrl: 'ranasjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ranasjon' })
    },
    {
      path: '/vaskinde-skaggs-3',
      name: 'Väskinde Skäggs 3',
      component: ProjectPage,
      extraProps: { projectUrl: 'vaskinde-skaggs-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaskinde-skaggs-3' })
    },
    {
      path: '/ödeby',
      name: 'Ödeby',
      component: ProjectPage,
      extraProps: { projectUrl: 'ödeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ödeby' })
    },
    {
      path: '/medevi',
      name: 'Medevi',
      component: ProjectPage,
      extraProps: { projectUrl: 'medevi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'medevi' })
    },
    {
      path: '/radasa',
      name: 'Rådåsa',
      component: ProjectPage,
      extraProps: { projectUrl: 'radasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'radasa' })
    },
    {
      path: '/åsa',
      name: 'Åsa',
      component: ProjectPage,
      extraProps: { projectUrl: 'åsa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsa' })
    },
    {
      path: '/vindkraftpark-östavall',
      name: 'Vindkraftpark Östavall',
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-östavall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-östavall' })
    },
    {
      path: '/klimpfjall',
      name: 'Klimpfjäll',
      component: ProjectPage,
      extraProps: { projectUrl: 'klimpfjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klimpfjall' })
    },
    {
      path: '/storsjohojden',
      name: 'Storsjöhöjden',
      component: ProjectPage,
      extraProps: { projectUrl: 'storsjohojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storsjohojden' })
    },
    {
      path: '/lojstahed',
      name: 'Lojstahed',
      component: ProjectPage,
      extraProps: { projectUrl: 'lojstahed' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lojstahed' })
    },
    {
      path: '/klevberget-2',
      name: 'Klevberget 2',
      component: ProjectPage,
      extraProps: { projectUrl: 'klevberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klevberget-2' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hornberget-etapp-2',
      name: "Hornberget etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornberget-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornberget-etapp-2' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/blabergsliden',
      name: "Blåbergsliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'blabergsliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blabergsliden' })
    },
    {
      path: '/ljusvattnet',
      name: "Ljusvattnet",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljusvattnet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljusvattnet' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/brinken',
      name: "Brinken",
      component: ProjectPage,
      extraProps: { projectUrl: 'brinken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brinken' })
    },
    {
      path: '/dal',
      name: "Dal",
      component: ProjectPage,
      extraProps: { projectUrl: 'dal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dal' })
    },
    {
      path: '/kullboarp',
      name: "Kullboarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kullboarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kullboarp' })
    },
    {
      path: '/erikshester',
      name: "Erikshester",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikshester' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikshester' })
    },
    {
      path: '/underbacken',
      name: "Underbacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'underbacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'underbacken' })
    },
    {
      path: '/hovgarden-stavlosa',
      name: "Hovgården Stavlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovgarden-stavlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovgarden-stavlosa' })
    },
    {
      path: '/medhamra-1',
      name: "Medhamra 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'medhamra-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'medhamra-1' })
    },
    {
      path: '/medhamra-2',
      name: "Medhamra 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'medhamra-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'medhamra-2' })
    },
    {
      path: '/lau-liffride-nr-1-&-2',
      name: "Lau Liffride Nr 1 & 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'lau-liffride-nr-1-&-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lau-liffride-nr-1-&-2' })
    },
    {
      path: '/hellvi-smojen',
      name: "Hellvi Smöjen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hellvi-smojen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hellvi-smojen' })
    },
    {
      path: '/hall-vindpark',
      name: "Hall Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hall-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hall-vindpark' })
    },
    {
      path: '/storugns-vindpark',
      name: "Storugns vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'storugns-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storugns-vindpark' })
    },
    {
      path: '/risugns-vindpark',
      name: "Risugns Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'risugns-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'risugns-vindpark' })
    },
    {
      path: '/yttre-stengrund',
      name: "Yttre stengrund",
      component: ProjectPage,
      extraProps: { projectUrl: 'yttre-stengrund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'yttre-stengrund' })
    },
    {
      path: '/utgrunden-i',
      name: "Utgrunden I",
      component: ProjectPage,
      extraProps: { projectUrl: 'utgrunden-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utgrunden-i' })
    },
    {
      path: '/nasby/överberg',
      name: "Näsby/Överberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasby/överberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasby/överberg' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/fingal-af-boberg',
      name: "Fingal af Boberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'fingal-af-boberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fingal-af-boberg' })
    },
    {
      path: '/östra-ljungby',
      name: "Östra Ljungby",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-ljungby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-ljungby' })
    },
    {
      path: '/vanga',
      name: "Vånga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanga' })
    },
    {
      path: '/hangsdala-falan',
      name: "Hångsdala Falan",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangsdala-falan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangsdala-falan' })
    },
    {
      path: '/ebborp-gardsverk',
      name: "Ebborp Gårdsverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'ebborp-gardsverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ebborp-gardsverk' })
    },
    {
      path: '/kampelandet',
      name: "Kämpelandet",
      component: ProjectPage,
      extraProps: { projectUrl: 'kampelandet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kampelandet' })
    },
    {
      path: '/hulterstad',
      name: "Hulterstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hulterstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hulterstad' })
    },
    {
      path: '/botterstad',
      name: "Bötterstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'botterstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'botterstad' })
    },
    {
      path: '/narvered',
      name: "Narvered",
      component: ProjectPage,
      extraProps: { projectUrl: 'narvered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'narvered' })
    },
    {
      path: '/vallerstads-östanback',
      name: "Vallerstads-Östanbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallerstads-östanback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallerstads-östanback' })
    },
    {
      path: '/vistena-15-2',
      name: "Vistena 15-2",
      component: ProjectPage,
      extraProps: { projectUrl: 'vistena-15-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vistena-15-2' })
    },
    {
      path: '/tungelunda-skeby',
      name: "Tungelunda Skeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tungelunda-skeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tungelunda-skeby' })
    },
    {
      path: '/bjalbo',
      name: "Bjälbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjalbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjalbo' })
    },
    {
      path: '/vistena-15-1',
      name: "Vistena 15-1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vistena-15-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vistena-15-1' })
    },
    {
      path: '/vistena-18-1',
      name: "Vistena 18-1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vistena-18-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vistena-18-1' })
    },
    {
      path: '/klackeborg',
      name: "Klackeborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'klackeborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klackeborg' })
    },
    {
      path: '/ekebyborna-morby',
      name: "Ekebyborna-Mörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekebyborna-morby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekebyborna-morby' })
    },
    {
      path: '/rocklunda',
      name: "Rocklunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'rocklunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rocklunda' })
    },
    {
      path: '/vinberga',
      name: "Vinberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vinberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vinberga' })
    },
    {
      path: '/stenby-örvad',
      name: "Stenby-Örvad",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenby-örvad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenby-örvad' })
    },
    {
      path: '/fossala',
      name: "Fossala",
      component: ProjectPage,
      extraProps: { projectUrl: 'fossala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fossala' })
    },
    {
      path: '/varvs-skrikstad',
      name: "Varvs-Skrikstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'varvs-skrikstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varvs-skrikstad' })
    },
    {
      path: '/storeberg',
      name: "Storeberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'storeberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storeberg' })
    },
    {
      path: '/ratorp',
      name: "Råtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ratorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ratorp' })
    },
    {
      path: '/boberg-3',
      name: "Boberg 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'boberg-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boberg-3' })
    },
    {
      path: '/lunna',
      name: "Lunna",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunna' })
    },
    {
      path: '/haddestad',
      name: "Haddestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'haddestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haddestad' })
    },
    {
      path: '/haradsmossen',
      name: "Häradsmossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'haradsmossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haradsmossen' })
    },
    {
      path: '/grupp-halleberga',
      name: "grupp Hälleberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'grupp-halleberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grupp-halleberga' })
    },
    {
      path: '/skattegarden',
      name: "Skattegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'skattegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skattegarden' })
    },
    {
      path: '/skattegarden',
      name: "Skattegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'skattegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skattegarden' })
    },
    {
      path: '/kroppfjall-311',
      name: "Kroppfjäll 311",
      component: ProjectPage,
      extraProps: { projectUrl: 'kroppfjall-311' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kroppfjall-311' })
    },
    {
      path: '/hokensas',
      name: "Hökensås",
      component: ProjectPage,
      extraProps: { projectUrl: 'hokensas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hokensas' })
    },
    {
      path: '/hovero',
      name: "Höverö",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovero' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovero' })
    },
    {
      path: '/brotorp',
      name: "Brotorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'brotorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brotorp' })
    },
    {
      path: '/anneharad-vindkraft',
      name: "Annehärad vindkraft",
      component: ProjectPage,
      extraProps: { projectUrl: 'anneharad-vindkraft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'anneharad-vindkraft' })
    },
    {
      path: '/sodra-rada',
      name: "Södra råda",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-rada' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-rada' })
    },
    {
      path: '/östen-toreboda',
      name: "Östen Töreboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'östen-toreboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östen-toreboda' })
    },
    {
      path: '/hallvadsholm',
      name: "Hällvadsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallvadsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallvadsholm' })
    },
    {
      path: '/synnerod',
      name: "Synneröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'synnerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'synnerod' })
    },
    {
      path: '/deranas',
      name: "Deranäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'deranas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'deranas' })
    },
    {
      path: '/gabrielsberget',
      name: "Gabrielsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gabrielsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gabrielsberget' })
    },
    {
      path: '/katoden-4',
      name: "Katoden 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'katoden-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'katoden-4' })
    },
    {
      path: '/fathult',
      name: "Fathult",
      component: ProjectPage,
      extraProps: { projectUrl: 'fathult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fathult' })
    },
    {
      path: '/torkelsrud-munkedal',
      name: "Torkelsrud-Munkedal",
      component: ProjectPage,
      extraProps: { projectUrl: 'torkelsrud-munkedal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torkelsrud-munkedal' })
    },
    {
      path: '/gunnagarden',
      name: "Gunnagården",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnagarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnagarden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/magderud---hanhult',
      name: "Magderud - Hanhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'magderud---hanhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'magderud---hanhult' })
    },
    {
      path: '/slageryd',
      name: "Slageryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'slageryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slageryd' })
    },
    {
      path: '/vindpark-svartvallsberget',
      name: "Vindpark Svartvallsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-svartvallsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-svartvallsberget' })
    },
    {
      path: '/ed',
      name: "Ed",
      component: ProjectPage,
      extraProps: { projectUrl: 'ed' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ed' })
    },
    {
      path: '/lorby-7-lorby/ysane',
      name: "Lörby 7 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-7-lorby/ysane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-7-lorby/ysane' })
    },
    {
      path: '/krassaberg',
      name: "Krassaberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'krassaberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'krassaberg' })
    },
    {
      path: '/bjorkekull-samf.:1',
      name: "Björkekull Samf.:1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkekull-samf.:1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkekull-samf.:1' })
    },
    {
      path: '/gunnilstorp-tranhult',
      name: "Gunnilstorp Tranhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnilstorp-tranhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnilstorp-tranhult' })
    },
    {
      path: '/projekt-stenhult',
      name: "Projekt Stenhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-stenhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-stenhult' })
    },
    {
      path: '/liared',
      name: "Liared",
      component: ProjectPage,
      extraProps: { projectUrl: 'liared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'liared' })
    },
    {
      path: '/fanneslunda',
      name: "Fänneslunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'fanneslunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fanneslunda' })
    },
    {
      path: '/hacksvik-del-2',
      name: "Håcksvik del 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hacksvik-del-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hacksvik-del-2' })
    },
    {
      path: '/borgstena',
      name: "Borgstena",
      component: ProjectPage,
      extraProps: { projectUrl: 'borgstena' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borgstena' })
    },
    {
      path: '/dallebo',
      name: "Dållebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'dallebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dallebo' })
    },
    {
      path: '/tritteboda',
      name: "Tritteboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'tritteboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tritteboda' })
    },
    {
      path: '/aletrion-vindkraft',
      name: "Aletrion Vindkraft",
      component: ProjectPage,
      extraProps: { projectUrl: 'aletrion-vindkraft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aletrion-vindkraft' })
    },
    {
      path: '/hallabron-(boras)',
      name: "Hallabron (Borås)",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallabron-(boras)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallabron-(boras)' })
    },
    {
      path: '/skollunga',
      name: "Sköllunga",
      component: ProjectPage,
      extraProps: { projectUrl: 'skollunga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skollunga' })
    },
    {
      path: '/hangsdala-vindkraftverk-(ann-el-i)',
      name: "Hångsdala Vindkraftverk (Ann-El-i)",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangsdala-vindkraftverk-(ann-el-i)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangsdala-vindkraftverk-(ann-el-i)' })
    },
    {
      path: '/nasbyholm',
      name: "Näsbyholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasbyholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasbyholm' })
    },
    {
      path: '/arkelstorp-brannskulla',
      name: "Arkelstorp-Brännskulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'arkelstorp-brannskulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arkelstorp-brannskulla' })
    },
    {
      path: '/kvidinge-syllstorp',
      name: "Kvidinge Syllstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvidinge-syllstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvidinge-syllstorp' })
    },
    {
      path: '/äsphult-bjarnhult',
      name: "Äsphult-Bjärnhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'äsphult-bjarnhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äsphult-bjarnhult' })
    },
    {
      path: '/östra-herrestad',
      name: "Östra Herrestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-herrestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-herrestad' })
    },
    {
      path: '/notteback-hult',
      name: "Nottebäck Hult",
      component: ProjectPage,
      extraProps: { projectUrl: 'notteback-hult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'notteback-hult' })
    },
    {
      path: '/norrberget',
      name: "Norrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrberget' })
    },
    {
      path: '/borgvattnet-2',
      name: "Borgvattnet 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'borgvattnet-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borgvattnet-2' })
    },
    {
      path: '/bohult',
      name: "Bohult",
      component: ProjectPage,
      extraProps: { projectUrl: 'bohult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bohult' })
    },
    {
      path: '/bred',
      name: "Bred",
      component: ProjectPage,
      extraProps: { projectUrl: 'bred' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bred' })
    },
    {
      path: '/garebo',
      name: "Gårebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'garebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'garebo' })
    },
    {
      path: '/älgon',
      name: "Älgön",
      component: ProjectPage,
      extraProps: { projectUrl: 'älgon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älgon' })
    },
    {
      path: '/stora-lonhult',
      name: "Stora Lönhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-lonhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-lonhult' })
    },
    {
      path: '/milletorp',
      name: "Milletorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'milletorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'milletorp' })
    },
    {
      path: '/backaskog',
      name: "Bäckaskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'backaskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backaskog' })
    },
    {
      path: '/herrakra',
      name: "Herråkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'herrakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'herrakra' })
    },
    {
      path: '/tangabo',
      name: "Tångabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'tangabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tangabo' })
    },
    {
      path: '/herrakra-hult',
      name: "Herråkra Hult",
      component: ProjectPage,
      extraProps: { projectUrl: 'herrakra-hult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'herrakra-hult' })
    },
    {
      path: '/fagraboke',
      name: "Fagraböke",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagraboke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagraboke' })
    },
    {
      path: '/övertorp',
      name: "Övertorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'övertorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övertorp' })
    },
    {
      path: '/nedre-strand',
      name: "Nedre Strand",
      component: ProjectPage,
      extraProps: { projectUrl: 'nedre-strand' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nedre-strand' })
    },
    {
      path: '/tokaryd',
      name: "Tokaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'tokaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tokaryd' })
    },
    {
      path: '/hedagarden',
      name: "Hedagården",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedagarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedagarden' })
    },
    {
      path: '/vrams-gunnarstorp',
      name: "Vrams Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vrams-gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vrams-gunnarstorp' })
    },
    {
      path: '/fjelie-laxmans-åkarp',
      name: "Fjelie-Laxmans Åkarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjelie-laxmans-åkarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjelie-laxmans-åkarp' })
    },
    {
      path: '/faringtofta',
      name: "Färingtofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'faringtofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'faringtofta' })
    },
    {
      path: '/faringtofta',
      name: "Färingtofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'faringtofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'faringtofta' })
    },
    {
      path: '/lydinge-benarp',
      name: "Lydinge-Benarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lydinge-benarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lydinge-benarp' })
    },
    {
      path: '/skarhults-nygard',
      name: "Skarhults nygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarhults-nygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarhults-nygard' })
    },
    {
      path: '/hjularod',
      name: "Hjularöd",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjularod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjularod' })
    },
    {
      path: '/vegeholm',
      name: "Vegeholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'vegeholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vegeholm' })
    },
    {
      path: '/erikstads-karr',
      name: "Erikstads-Kärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstads-karr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstads-karr' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarstorp' })
    },
    {
      path: '/åraslov',
      name: "Åraslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'åraslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åraslov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hallevadsholm-vaster',
      name: "Hällevadsholm Väster",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallevadsholm-vaster' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallevadsholm-vaster' })
    },
    {
      path: '/hallevadsholm-v',
      name: "Hällevadsholm V",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallevadsholm-v' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallevadsholm-v' })
    },
    {
      path: '/hallevadsholm-vaster',
      name: "Hällevadsholm Väster",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallevadsholm-vaster' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallevadsholm-vaster' })
    },
    {
      path: '/vindkraftprojekt-skyas',
      name: "Vindkraftprojekt Skyås",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftprojekt-skyas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftprojekt-skyas' })
    },
    {
      path: '/bonhult-älmhult',
      name: "Bönhult-Älmhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'bonhult-älmhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bonhult-älmhult' })
    },
    {
      path: '/froslida',
      name: "Fröslida",
      component: ProjectPage,
      extraProps: { projectUrl: 'froslida' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froslida' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'tormoserodsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tormoserodsfjallet' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'laggarebolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laggarebolet' })
    },
    {
      path: '/gunnarsvattnets-vindpark',
      name: "Gunnarsvattnets vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarsvattnets-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarsvattnets-vindpark' })
    },
    {
      path: '/edsleskogs-hult',
      name: "Edsleskogs Hult",
      component: ProjectPage,
      extraProps: { projectUrl: 'edsleskogs-hult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'edsleskogs-hult' })
    },
    {
      path: '/vindpark-edsleskog',
      name: "Vindpark Edsleskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-edsleskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-edsleskog' })
    },
    {
      path: '/hocksjon',
      name: "Hocksjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'hocksjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hocksjon' })
    },
    {
      path: '/bergvind-annefors',
      name: "Bergvind Annefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'bergvind-annefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bergvind-annefors' })
    },
    {
      path: '/norrhalsinge-vindpark',
      name: "Norrhälsinge vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrhalsinge-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrhalsinge-vindpark' })
    },
    {
      path: '/norrhalsinge-vindpark',
      name: "Norrhälsinge vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrhalsinge-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrhalsinge-vindpark' })
    },
    {
      path: '/sandruder',
      name: "Sandruder",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandruder' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandruder' })
    },
    {
      path: '/munstorp-7043',
      name: "MUNSTORP 7043",
      component: ProjectPage,
      extraProps: { projectUrl: 'munstorp-7043' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munstorp-7043' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'laggarebolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laggarebolet' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/virke',
      name: "Virke",
      component: ProjectPage,
      extraProps: { projectUrl: 'virke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'virke' })
    },
    {
      path: '/baretofta',
      name: "Bäretofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'baretofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'baretofta' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hjaras',
      name: "Hjärås",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjaras' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjaras' })
    },
    {
      path: '/vallarod-bjornekulla',
      name: "Vallaröd Björnekulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallarod-bjornekulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallarod-bjornekulla' })
    },
    {
      path: '/broby',
      name: "Broby",
      component: ProjectPage,
      extraProps: { projectUrl: 'broby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'broby' })
    },
    {
      path: '/vallarod-kvidinge',
      name: "Vallaröd Kvidinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallarod-kvidinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallarod-kvidinge' })
    },
    {
      path: '/frestensfalla',
      name: "Frestensfälla",
      component: ProjectPage,
      extraProps: { projectUrl: 'frestensfalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frestensfalla' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectUrl: 'sanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sanna' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'froslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froslov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/munkarynga',
      name: "Munkarynga",
      component: ProjectPage,
      extraProps: { projectUrl: 'munkarynga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munkarynga' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/manstorp',
      name: "Månstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'manstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'manstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/backaskog',
      name: "Bäckaskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'backaskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backaskog' })
    },
    {
      path: '/verboberget',
      name: "Verboberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'verboberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'verboberget' })
    },
    {
      path: '/horreds-lindhult',
      name: "Horreds-Lindhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'horreds-lindhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horreds-lindhult' })
    },
    {
      path: '/orrmosshojden',
      name: "Orrmosshöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'orrmosshojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orrmosshojden' })
    },
    {
      path: '/langsjoby',
      name: "Långsjöby",
      component: ProjectPage,
      extraProps: { projectUrl: 'langsjoby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langsjoby' })
    },
    {
      path: '/brant-kullsjoliden',
      name: "Bränt-Kullsjöliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'brant-kullsjoliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brant-kullsjoliden' })
    },
    {
      path: '/vastermark',
      name: "Västermark",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastermark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastermark' })
    },
    {
      path: '/holmon---sodra',
      name: "Holmön - södra",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmon---sodra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmon---sodra' })
    },
    {
      path: '/holmon---norra',
      name: "Holmön - norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmon---norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmon---norra' })
    },
    {
      path: '/nedersånna-/-7042',
      name: "NEDERSÅNNA / 7042",
      component: ProjectPage,
      extraProps: { projectUrl: 'nedersånna-/-7042' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nedersånna-/-7042' })
    },
    {
      path: '/bodberget---norra',
      name: "Bodberget - norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodberget---norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodberget---norra' })
    },
    {
      path: '/bodberget---ostra',
      name: "Bodberget - östra",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodberget---ostra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodberget---ostra' })
    },
    {
      path: '/bjursele',
      name: "Bjursele",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjursele' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjursele' })
    },
    {
      path: '/barslov',
      name: "Bårslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'barslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barslov' })
    },
    {
      path: '/skephults-backen',
      name: "Skephults-Backen",
      component: ProjectPage,
      extraProps: { projectUrl: 'skephults-backen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skephults-backen' })
    },
    {
      path: '/sannamad',
      name: "Sannamåd",
      component: ProjectPage,
      extraProps: { projectUrl: 'sannamad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sannamad' })
    },
    {
      path: '/skaramala',
      name: "Skåramåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaramala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaramala' })
    },
    {
      path: '/krokshult',
      name: "Krokshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'krokshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'krokshult' })
    },
    {
      path: '/salvaryd',
      name: "Salvaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'salvaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salvaryd' })
    },
    {
      path: '/ellanda',
      name: "Ellanda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ellanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ellanda' })
    },
    {
      path: '/öja',
      name: "Öja",
      component: ProjectPage,
      extraProps: { projectUrl: 'öja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öja' })
    },
    {
      path: '/sannamad',
      name: "Sånnamad",
      component: ProjectPage,
      extraProps: { projectUrl: 'sannamad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sannamad' })
    },
    {
      path: '/ljunggardskop',
      name: "Ljunggårdsköp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljunggardskop' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljunggardskop' })
    },
    {
      path: '/åreved-schedingsnas',
      name: "Åreved Schedingsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'åreved-schedingsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åreved-schedingsnas' })
    },
    {
      path: '/jokkmokksliden',
      name: "Jokkmokksliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'jokkmokksliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jokkmokksliden' })
    },
    {
      path: '/fanneslunda-del-1',
      name: "Fänneslunda Del 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'fanneslunda-del-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fanneslunda-del-1' })
    },
    {
      path: '/stora-kettstaka',
      name: "Stora Kettstaka",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-kettstaka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-kettstaka' })
    },
    {
      path: '/nord-billingen',
      name: "Nord Billingen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nord-billingen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nord-billingen' })
    },
    {
      path: '/ättersta',
      name: "Ättersta",
      component: ProjectPage,
      extraProps: { projectUrl: 'ättersta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ättersta' })
    },
    {
      path: '/stora-istad-ii',
      name: "Stora Istad II",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-istad-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-istad-ii' })
    },
    {
      path: '/aska',
      name: "Aska",
      component: ProjectPage,
      extraProps: { projectUrl: 'aska' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aska' })
    },
    {
      path: '/salsjon',
      name: "Salsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'salsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salsjon' })
    },
    {
      path: '/klinte-klinte-s:43,-eksebo-kraft-2-[klinte-1-henni',
      name: "Klinte Klinte s:43, Eksebo kraft 2 [Klinte 1 Henni",
      component: ProjectPage,
      extraProps: { projectUrl: 'klinte-klinte-s:43,-eksebo-kraft-2-[klinte-1-henni' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klinte-klinte-s:43,-eksebo-kraft-2-[klinte-1-henni' })
    },
    {
      path: '/brotorp-2',
      name: "Brotorp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'brotorp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brotorp-2' })
    },
    {
      path: '/othem-österby-tornsvalan',
      name: "Othem Österby Tornsvalan",
      component: ProjectPage,
      extraProps: { projectUrl: 'othem-österby-tornsvalan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'othem-österby-tornsvalan' })
    },
    {
      path: '/vaskinde-skaggs-1',
      name: "Väskinde Skäggs 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaskinde-skaggs-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaskinde-skaggs-1' })
    },
    {
      path: '/boberg-2',
      name: "Boberg 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'boberg-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boberg-2' })
    },
    {
      path: '/skuruberget',
      name: "Skuruberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skuruberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skuruberget' })
    },
    {
      path: '/trattberget,-skallberget.',
      name: "Trattberget, Skallberget.",
      component: ProjectPage,
      extraProps: { projectUrl: 'trattberget,-skallberget.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trattberget,-skallberget.' })
    },
    {
      path: '/gronmyrberget',
      name: "Grönmyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gronmyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gronmyrberget' })
    },
    {
      path: '/storfall',
      name: "Storfall",
      component: ProjectPage,
      extraProps: { projectUrl: 'storfall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storfall' })
    },
    {
      path: '/portberget',
      name: "Portberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'portberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'portberget' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/blackfjallet',
      name: "Blackfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'blackfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blackfjallet' })
    },
    {
      path: '/brattmyrliden---lidenprojekten',
      name: "Brattmyrliden - Lidenprojekten",
      component: ProjectPage,
      extraProps: { projectUrl: 'brattmyrliden---lidenprojekten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brattmyrliden---lidenprojekten' })
    },
    {
      path: '/blodrotberget',
      name: "Blodrotberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'blodrotberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blodrotberget' })
    },
    {
      path: '/bursjoliden',
      name: "Bursjöliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bursjoliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bursjoliden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/porsgol',
      name: "Porsgöl",
      component: ProjectPage,
      extraProps: { projectUrl: 'porsgol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'porsgol' })
    },
    {
      path: '/norrhalsinge-(jarnblasten)',
      name: "Norrhälsinge (Järnblästen)",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrhalsinge-(jarnblasten)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrhalsinge-(jarnblasten)' })
    },
    {
      path: '/borstad-2',
      name: "Börstad 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'borstad-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borstad-2' })
    },
    {
      path: '/frideborg',
      name: "Frideborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'frideborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frideborg' })
    },
    {
      path: '/vkv_lin-001',
      name: "vkv_lin-001",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-001' })
    },
    {
      path: '/vkv_lin-012',
      name: "vkv_lin-012",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-012' })
    },
    {
      path: '/borringe-1',
      name: "Borringe 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'borringe-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borringe-1' })
    },
    {
      path: '/langeryd-i',
      name: "Långeryd I",
      component: ProjectPage,
      extraProps: { projectUrl: 'langeryd-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langeryd-i' })
    },
    {
      path: '/langeryd-ii',
      name: "Långeryd II",
      component: ProjectPage,
      extraProps: { projectUrl: 'langeryd-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langeryd-ii' })
    },
    {
      path: '/grupp-brotorp',
      name: "Grupp Brotorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'grupp-brotorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grupp-brotorp' })
    },
    {
      path: '/askegarden',
      name: "Askegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'askegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'askegarden' })
    },
    {
      path: '/ängsholm',
      name: "Ängsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'ängsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ängsholm' })
    },
    {
      path: '/ågard',
      name: "Ågård",
      component: ProjectPage,
      extraProps: { projectUrl: 'ågard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ågard' })
    },
    {
      path: '/torkelsrud',
      name: "Torkelsrud",
      component: ProjectPage,
      extraProps: { projectUrl: 'torkelsrud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torkelsrud' })
    },
    {
      path: '/vindpark-lursang',
      name: "Vindpark Lursäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-lursang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-lursang' })
    },
    {
      path: '/utby',
      name: "Utby",
      component: ProjectPage,
      extraProps: { projectUrl: 'utby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utby' })
    },
    {
      path: '/mariestrom',
      name: "Marieström",
      component: ProjectPage,
      extraProps: { projectUrl: 'mariestrom' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mariestrom' })
    },
    {
      path: '/3953-blad',
      name: "3953 Blad",
      component: ProjectPage,
      extraProps: { projectUrl: '3953-blad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '3953-blad' })
    },
    {
      path: '/rytteras',
      name: "Rytterås",
      component: ProjectPage,
      extraProps: { projectUrl: 'rytteras' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rytteras' })
    },
    {
      path: '/erikstorp-iii',
      name: "Erikstorp III",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstorp-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstorp-iii' })
    },
    {
      path: '/-hoghult-1',
      name: "Höghult 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-hoghult-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-hoghult-1' })
    },
    {
      path: '/back',
      name: "Bäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'back' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'back' })
    },
    {
      path: '/bralanda-torp',
      name: "Brålanda-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bralanda-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bralanda-torp' })
    },
    {
      path: '/kortered',
      name: "Kortered",
      component: ProjectPage,
      extraProps: { projectUrl: 'kortered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kortered' })
    },
    {
      path: '/ulvstorp',
      name: "Ulvstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulvstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulvstorp' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectUrl: 'wastgota-wind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wastgota-wind' })
    },
    {
      path: '/st-levene',
      name: "St Levene",
      component: ProjectPage,
      extraProps: { projectUrl: 'st-levene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st-levene' })
    },
    {
      path: '/skallmeja-/-3815',
      name: "SKALLMEJA / 3815",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallmeja-/-3815' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallmeja-/-3815' })
    },
    {
      path: '/nattorp-7303',
      name: "NATTORP 7303",
      component: ProjectPage,
      extraProps: { projectUrl: 'nattorp-7303' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nattorp-7303' })
    },
    {
      path: '/änden-7843',
      name: "ÄNDEN 7843",
      component: ProjectPage,
      extraProps: { projectUrl: 'änden-7843' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'änden-7843' })
    },
    {
      path: '/rydingstorp-1',
      name: "Rydingstorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'rydingstorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rydingstorp-1' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'laggarebolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laggarebolet' })
    },
    {
      path: '/segas',
      name: "Segås",
      component: ProjectPage,
      extraProps: { projectUrl: 'segas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'segas' })
    },
    {
      path: '/-langsjon-1',
      name: "Långsjön 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-langsjon-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-langsjon-1' })
    },
    {
      path: '/magderud---hanhult',
      name: "Magderud - Hanhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'magderud---hanhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'magderud---hanhult' })
    },
    {
      path: '/tranum',
      name: "TRANUM",
      component: ProjectPage,
      extraProps: { projectUrl: 'tranum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tranum' })
    },
    {
      path: '/sjovik',
      name: "Sjövik",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjovik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjovik' })
    },
    {
      path: '/vindpark-sjovik',
      name: "Vindpark Sjövik",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sjovik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sjovik' })
    },
    {
      path: '/balltorp',
      name: "Balltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'balltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'balltorp' })
    },
    {
      path: '/jung',
      name: "Jung",
      component: ProjectPage,
      extraProps: { projectUrl: 'jung' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jung' })
    },
    {
      path: '/tagneby',
      name: "Tägneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tagneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tagneby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/tegneby',
      name: "Tegneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tegneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tegneby' })
    },
    {
      path: '/glanas-vind',
      name: "Glänås Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'glanas-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'glanas-vind' })
    },
    {
      path: '/millingstorp',
      name: "Millingstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'millingstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'millingstorp' })
    },
    {
      path: '/millingstorp-i',
      name: "Millingstorp I",
      component: ProjectPage,
      extraProps: { projectUrl: 'millingstorp-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'millingstorp-i' })
    },
    {
      path: '/runnestad-3',
      name: "Runnestad 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'runnestad-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runnestad-3' })
    },
    {
      path: '/runnestad-3',
      name: "Runnestad 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'runnestad-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runnestad-3' })
    },
    {
      path: '/runnestad2',
      name: "Runnestad2",
      component: ProjectPage,
      extraProps: { projectUrl: 'runnestad2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runnestad2' })
    },
    {
      path: '/runnestad-i',
      name: "Runnestad I",
      component: ProjectPage,
      extraProps: { projectUrl: 'runnestad-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runnestad-i' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hastholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hastholmen' })
    },
    {
      path: '/svarttorp',
      name: "Svarttorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarttorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarttorp' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagebyhoga-sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagebyhoga-sandby' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagebyhoga-sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagebyhoga-sandby' })
    },
    {
      path: '/hagebyhoga-sandby',
      name: "Hagebyhöga-Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagebyhoga-sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagebyhoga-sandby' })
    },
    {
      path: '/hovgarden-i',
      name: "Hovgården I",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovgarden-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovgarden-i' })
    },
    {
      path: '/hackenas-iii',
      name: "Häckenäs III",
      component: ProjectPage,
      extraProps: { projectUrl: 'hackenas-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hackenas-iii' })
    },
    {
      path: '/stavlosa',
      name: "Stavlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'stavlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stavlosa' })
    },
    {
      path: '/hackenas-betty',
      name: "Häckenäs Betty",
      component: ProjectPage,
      extraProps: { projectUrl: 'hackenas-betty' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hackenas-betty' })
    },
    {
      path: '/hackenas-ii',
      name: "Häckenäs II",
      component: ProjectPage,
      extraProps: { projectUrl: 'hackenas-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hackenas-ii' })
    },
    {
      path: '/borstad-1',
      name: "Börstad 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'borstad-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borstad-1' })
    },
    {
      path: '/elvina',
      name: "Elvina",
      component: ProjectPage,
      extraProps: { projectUrl: 'elvina' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elvina' })
    },
    {
      path: '/vkv_lin-003',
      name: "vkv_lin-003",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-003' })
    },
    {
      path: '/vkv_lin-004',
      name: "vkv_lin-004",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-004' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-004' })
    },
    {
      path: '/vkv_lin-008',
      name: "vkv_lin-008",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-008' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-008' })
    },
    {
      path: '/vkv_lin-009',
      name: "vkv_lin-009",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-009' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-009' })
    },
    {
      path: '/vkv_lin-010',
      name: "vkv_lin-010",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-010' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-010' })
    },
    {
      path: '/vkv_lin-011',
      name: "vkv_lin-011",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-011' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-011' })
    },
    {
      path: '/vkv_lin-013',
      name: "vkv_lin-013",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-013' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-013' })
    },
    {
      path: '/vkv_lin-014',
      name: "vkv_lin-014",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-014' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-014' })
    },
    {
      path: '/vkv_lin-015',
      name: "vkv_lin-015",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-015' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-015' })
    },
    {
      path: '/vkv_lin-029',
      name: "vkv_lin-029",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-029' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-029' })
    },
    {
      path: '/vkv_lin-030',
      name: "vkv_lin-030",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-030' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-030' })
    },
    {
      path: '/vkv_lin-031',
      name: "vkv_lin-031",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-031' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-031' })
    },
    {
      path: '/vkv_lin-032',
      name: "vkv_lin-032",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-032' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-032' })
    },
    {
      path: '/bjornsnas',
      name: "Björnsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornsnas' })
    },
    {
      path: '/flamminge-gard',
      name: "Flämminge Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'flamminge-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flamminge-gard' })
    },
    {
      path: '/farjestaden',
      name: "Färjestaden",
      component: ProjectPage,
      extraProps: { projectUrl: 'farjestaden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'farjestaden' })
    },
    {
      path: '/gisselo-gard',
      name: "Gisselö Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'gisselo-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gisselo-gard' })
    },
    {
      path: '/kuddby-åby',
      name: "Kuddby-Åby",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuddby-åby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuddby-åby' })
    },
    {
      path: '/svenneby',
      name: "Svenneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenneby' })
    },
    {
      path: '/svartinge-udde',
      name: "Svärtinge udde",
      component: ProjectPage,
      extraProps: { projectUrl: 'svartinge-udde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svartinge-udde' })
    },
    {
      path: '/ållono-slott',
      name: "Ållonö slott",
      component: ProjectPage,
      extraProps: { projectUrl: 'ållono-slott' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ållono-slott' })
    },
    {
      path: '/karebo',
      name: "Kårebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'karebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karebo' })
    },
    {
      path: '/boberg-1',
      name: "Boberg 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'boberg-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boberg-1' })
    },
    {
      path: '/ebborp-vind,-emma',
      name: "Ebborp Vind, Emma",
      component: ProjectPage,
      extraProps: { projectUrl: 'ebborp-vind,-emma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ebborp-vind,-emma' })
    },
    {
      path: '/larstad-2',
      name: "Lårstad 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'larstad-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larstad-2' })
    },
    {
      path: '/elvinda,-rocklunda',
      name: "Elvinda, Rocklunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'elvinda,-rocklunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elvinda,-rocklunda' })
    },
    {
      path: '/ravsjo',
      name: "Rävsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravsjo' })
    },
    {
      path: '/skedevi-bonnorp-vind-ab',
      name: "Skedevi Bonnorp Vind AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'skedevi-bonnorp-vind-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skedevi-bonnorp-vind-ab' })
    },
    {
      path: '/varby',
      name: "Varby",
      component: ProjectPage,
      extraProps: { projectUrl: 'varby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varby' })
    },
    {
      path: '/stenkil',
      name: "Stenkil",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenkil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenkil' })
    },
    {
      path: '/osvald',
      name: "Osvald",
      component: ProjectPage,
      extraProps: { projectUrl: 'osvald' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'osvald' })
    },
    {
      path: '/larstad-1',
      name: "Lårstad 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'larstad-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larstad-1' })
    },
    {
      path: '/appunamollan',
      name: "Appunamöllan",
      component: ProjectPage,
      extraProps: { projectUrl: 'appunamollan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'appunamollan' })
    },
    {
      path: '/bjalbo-skenaan-vind',
      name: "Bjälbo-Skenaån Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjalbo-skenaan-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjalbo-skenaan-vind' })
    },
    {
      path: '/hogby-1',
      name: "Högby 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogby-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogby-1' })
    },
    {
      path: '/isberget-i',
      name: "Isberget I",
      component: ProjectPage,
      extraProps: { projectUrl: 'isberget-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isberget-i' })
    },
    {
      path: '/isberget-ii',
      name: "Isberget II",
      component: ProjectPage,
      extraProps: { projectUrl: 'isberget-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isberget-ii' })
    },
    {
      path: '/isberget-iii',
      name: "Isberget III",
      component: ProjectPage,
      extraProps: { projectUrl: 'isberget-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isberget-iii' })
    },
    {
      path: '/karleby-vindkraftverk',
      name: "Karleby vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'karleby-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karleby-vindkraftverk' })
    },
    {
      path: '/karlebytorp-vind-2',
      name: "Karlebytorp vind 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlebytorp-vind-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlebytorp-vind-2' })
    },
    {
      path: '/normlosa-torpa-vind',
      name: "Normlösa Torpa Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'normlosa-torpa-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'normlosa-torpa-vind' })
    },
    {
      path: '/skeby-vind',
      name: "Skeby Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'skeby-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skeby-vind' })
    },
    {
      path: '/skeby/tungelunda-vindkraft-4',
      name: "Skeby/Tungelunda vindkraft 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'skeby/tungelunda-vindkraft-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skeby/tungelunda-vindkraft-4' })
    },
    {
      path: '/skorteby,-lillebror',
      name: "Skorteby, Lillebror",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorteby,-lillebror' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorteby,-lillebror' })
    },
    {
      path: '/skorteby,-storebror',
      name: "Skorteby, Storebror",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorteby,-storebror' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorteby,-storebror' })
    },
    {
      path: '/tungelunda---skeby-3',
      name: "Tungelunda - Skeby 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'tungelunda---skeby-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tungelunda---skeby-3' })
    },
    {
      path: '/uljeberg',
      name: "Uljeberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'uljeberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uljeberg' })
    },
    {
      path: '/wahlby-1',
      name: "Wahlby 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'wahlby-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wahlby-1' })
    },
    {
      path: '/vaderstad-vind',
      name: "Väderstad Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaderstad-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaderstad-vind' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectUrl: 'appuna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'appuna' })
    },
    {
      path: '/birger-jarl',
      name: "Birger Jarl",
      component: ProjectPage,
      extraProps: { projectUrl: 'birger-jarl' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'birger-jarl' })
    },
    {
      path: '/ingrid-ylva-bjalbo',
      name: "Ingrid Ylva Bjälbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingrid-ylva-bjalbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingrid-ylva-bjalbo' })
    },
    {
      path: '/magnus-ladulas',
      name: "Magnus Ladulås",
      component: ProjectPage,
      extraProps: { projectUrl: 'magnus-ladulas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'magnus-ladulas' })
    },
    {
      path: '/bjalbo',
      name: "Bjälbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjalbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjalbo' })
    },
    {
      path: '/bjalbo-lennart',
      name: "Bjälbo Lennart",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjalbo-lennart' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjalbo-lennart' })
    },
    {
      path: '/branna',
      name: "Bränna",
      component: ProjectPage,
      extraProps: { projectUrl: 'branna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'branna' })
    },
    {
      path: '/herrgardsvind',
      name: "Herrgårdsvind",
      component: ProjectPage,
      extraProps: { projectUrl: 'herrgardsvind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'herrgardsvind' })
    },
    {
      path: '/varnas-vind',
      name: "Varnäs Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'varnas-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varnas-vind' })
    },
    {
      path: '/lagmansberga',
      name: "Lagmansberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'lagmansberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lagmansberga' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectUrl: 'appuna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'appuna' })
    },
    {
      path: '/navered',
      name: "Navered",
      component: ProjectPage,
      extraProps: { projectUrl: 'navered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'navered' })
    },
    {
      path: '/elvira-vind',
      name: "Elvira Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'elvira-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elvira-vind' })
    },
    {
      path: '/stjernarps-gods',
      name: "Stjernarps Gods",
      component: ProjectPage,
      extraProps: { projectUrl: 'stjernarps-gods' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stjernarps-gods' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/eldsberga',
      name: "Eldsberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'eldsberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eldsberga' })
    },
    {
      path: '/andersfalt-norr',
      name: "Andersfält Norr",
      component: ProjectPage,
      extraProps: { projectUrl: 'andersfalt-norr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'andersfalt-norr' })
    },
    {
      path: '/andersfalt-mitt',
      name: "Andersfält Mitt",
      component: ProjectPage,
      extraProps: { projectUrl: 'andersfalt-mitt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'andersfalt-mitt' })
    },
    {
      path: '/andersfalt-syd',
      name: "Andersfält Syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'andersfalt-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'andersfalt-syd' })
    },
    {
      path: '/dragabol',
      name: "Dragabol",
      component: ProjectPage,
      extraProps: { projectUrl: 'dragabol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dragabol' })
    },
    {
      path: '/bonnarp',
      name: "Bonnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bonnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bonnarp' })
    },
    {
      path: '/havsvind',
      name: "Havsvind",
      component: ProjectPage,
      extraProps: { projectUrl: 'havsvind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'havsvind' })
    },
    {
      path: '/mestocka-vkv',
      name: "Mestocka VKV",
      component: ProjectPage,
      extraProps: { projectUrl: 'mestocka-vkv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mestocka-vkv' })
    },
    {
      path: '/putsered',
      name: "Putsered",
      component: ProjectPage,
      extraProps: { projectUrl: 'putsered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'putsered' })
    },
    {
      path: '/seglaberga-4',
      name: "Seglaberga 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'seglaberga-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'seglaberga-4' })
    },
    {
      path: '/seglaberga-5',
      name: "Seglaberga 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'seglaberga-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'seglaberga-5' })
    },
    {
      path: '/skottorp',
      name: "Skottorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skottorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skottorp' })
    },
    {
      path: '/sydvind',
      name: "Sydvind",
      component: ProjectPage,
      extraProps: { projectUrl: 'sydvind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sydvind' })
    },
    {
      path: '/vindkraftverk-forslund',
      name: "Vindkraftverk Forslund",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-forslund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-forslund' })
    },
    {
      path: '/vindkraftverk-östorp',
      name: "Vindkraftverk Östorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-östorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-östorp' })
    },
    {
      path: '/äng-el',
      name: "Äng-EL",
      component: ProjectPage,
      extraProps: { projectUrl: 'äng-el' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äng-el' })
    },
    {
      path: '/ösarp/knobbens-vindkraftverk',
      name: "Ösarp/Knöbbens vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'ösarp/knobbens-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ösarp/knobbens-vindkraftverk' })
    },
    {
      path: '/östergard',
      name: "Östergård",
      component: ProjectPage,
      extraProps: { projectUrl: 'östergard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östergard' })
    },
    {
      path: '/ax-el',
      name: "Ax-El",
      component: ProjectPage,
      extraProps: { projectUrl: 'ax-el' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ax-el' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectUrl: 'laholm/tjarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laholm/tjarby' })
    },
    {
      path: '/karragard',
      name: "Kärragård",
      component: ProjectPage,
      extraProps: { projectUrl: 'karragard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karragard' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectUrl: 'laholm/tjarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laholm/tjarby' })
    },
    {
      path: '/tjarby',
      name: "Tjärby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tjarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tjarby' })
    },
    {
      path: '/laholm/tjarby',
      name: "Laholm/Tjärby",
      component: ProjectPage,
      extraProps: { projectUrl: 'laholm/tjarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laholm/tjarby' })
    },
    {
      path: '/mammarp',
      name: "Mammarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'mammarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mammarp' })
    },
    {
      path: '/lilla-tjarby-gard',
      name: "Lilla Tjärby Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-tjarby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-tjarby-gard' })
    },
    {
      path: '/klagstorp',
      name: "Klägstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'klagstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klagstorp' })
    },
    {
      path: '/hov',
      name: "Hov",
      component: ProjectPage,
      extraProps: { projectUrl: 'hov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hov' })
    },
    {
      path: '/klagstorp',
      name: "Klägstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'klagstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klagstorp' })
    },
    {
      path: '/gunn-el',
      name: "Gunn-El",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunn-el' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunn-el' })
    },
    {
      path: '/tjarby',
      name: "Tjärby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tjarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tjarby' })
    },
    {
      path: '/manstorps-gard',
      name: "Månstorps Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'manstorps-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'manstorps-gard' })
    },
    {
      path: '/triton-energi',
      name: "Triton Energi",
      component: ProjectPage,
      extraProps: { projectUrl: 'triton-energi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'triton-energi' })
    },
    {
      path: '/kovlinge',
      name: "Kövlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'kovlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kovlinge' })
    },
    {
      path: '/varestorps-vind',
      name: "Värestorps Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'varestorps-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varestorps-vind' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby' })
    },
    {
      path: '/bjornsgard',
      name: "Björnsgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornsgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornsgard' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby' })
    },
    {
      path: '/mellby',
      name: "Mellby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby' })
    },
    {
      path: '/mellby-kraft-i',
      name: "Mellby Kraft I",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellby-kraft-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellby-kraft-i' })
    },
    {
      path: '/domestorp-ii',
      name: "Dömestorp II",
      component: ProjectPage,
      extraProps: { projectUrl: 'domestorp-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'domestorp-ii' })
    },
    {
      path: '/domestorp-i',
      name: "Dömestorp I",
      component: ProjectPage,
      extraProps: { projectUrl: 'domestorp-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'domestorp-i' })
    },
    {
      path: '/genevad',
      name: "Genevad",
      component: ProjectPage,
      extraProps: { projectUrl: 'genevad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'genevad' })
    },
    {
      path: '/askomebjar',
      name: "Askomebjär",
      component: ProjectPage,
      extraProps: { projectUrl: 'askomebjar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'askomebjar' })
    },
    {
      path: '/rosendal-1',
      name: "Rosendal 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosendal-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosendal-1' })
    },
    {
      path: '/735999224950737069-tagarp-114',
      name: "735999224950737069 Tågarp 114",
      component: ProjectPage,
      extraProps: { projectUrl: '735999224950737069-tagarp-114' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '735999224950737069-tagarp-114' })
    },
    {
      path: '/karrets-gard',
      name: "Kärrets Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'karrets-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karrets-gard' })
    },
    {
      path: '/karrets-gard-ii',
      name: "Kärrets Gård II",
      component: ProjectPage,
      extraProps: { projectUrl: 'karrets-gard-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karrets-gard-ii' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuling' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuling' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuling' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuling' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuling' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuling' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuling' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuling' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/kuling',
      name: "Kuling",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuling' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuling' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/falkenbergsporten-3',
      name: "Falkenbergsporten 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'falkenbergsporten-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'falkenbergsporten-3' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/falkenbergsporten-4',
      name: "Falkenbergsporten 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'falkenbergsporten-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'falkenbergsporten-4' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/ventosum-10',
      name: "Ventosum 10",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum-10' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum-10' })
    },
    {
      path: '/ventosum',
      name: "Ventosum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventosum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventosum' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/galtas-syd',
      name: "Galtås Syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'galtas-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galtas-syd' })
    },
    {
      path: '/galtas-nord',
      name: "Galtås Nord",
      component: ProjectPage,
      extraProps: { projectUrl: 'galtas-nord' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galtas-nord' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/mit-9003',
      name: "MIT 9003",
      component: ProjectPage,
      extraProps: { projectUrl: 'mit-9003' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mit-9003' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/almedal',
      name: "Almedal",
      component: ProjectPage,
      extraProps: { projectUrl: 'almedal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almedal' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hono-pinan',
      name: "Hönö Pinan",
      component: ProjectPage,
      extraProps: { projectUrl: 'hono-pinan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hono-pinan' })
    },
    {
      path: '/pinan',
      name: "Pinan",
      component: ProjectPage,
      extraProps: { projectUrl: 'pinan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pinan' })
    },
    {
      path: '/hog',
      name: "Hog",
      component: ProjectPage,
      extraProps: { projectUrl: 'hog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hog' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectUrl: 'holm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holm' })
    },
    {
      path: '/jarnklatt',
      name: "Järnklätt",
      component: ProjectPage,
      extraProps: { projectUrl: 'jarnklatt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jarnklatt' })
    },
    {
      path: '/halleby',
      name: "Halleby",
      component: ProjectPage,
      extraProps: { projectUrl: 'halleby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halleby' })
    },
    {
      path: '/ranebo',
      name: "Ranebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'ranebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ranebo' })
    },
    {
      path: '/halle-vindkraftverk',
      name: "Hälle vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'halle-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halle-vindkraftverk' })
    },
    {
      path: '/hjalteby',
      name: "Hjälteby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjalteby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjalteby' })
    },
    {
      path: '/kuballe',
      name: "Kuballe",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuballe' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuballe' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas' })
    },
    {
      path: '/ravsal',
      name: "Rävsal",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravsal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravsal' })
    },
    {
      path: '/sibracka',
      name: "Sibräcka",
      component: ProjectPage,
      extraProps: { projectUrl: 'sibracka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sibracka' })
    },
    {
      path: '/sibracka',
      name: "Sibräcka",
      component: ProjectPage,
      extraProps: { projectUrl: 'sibracka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sibracka' })
    },
    {
      path: '/stenkyrka-bo',
      name: "Stenkyrka-Bö",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenkyrka-bo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenkyrka-bo' })
    },
    {
      path: '/tolleby',
      name: "Tolleby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tolleby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tolleby' })
    },
    {
      path: '/vallahallene',
      name: "VallaHällene",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallahallene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallahallene' })
    },
    {
      path: '/vallhamns-hamn',
      name: "Vallhamns hamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallhamns-hamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallhamns-hamn' })
    },
    {
      path: '/vallhamns-hamn',
      name: "Vallhamns hamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallhamns-hamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallhamns-hamn' })
    },
    {
      path: '/vindkraftverk-habborsby',
      name: "Vindkraftverk Habborsby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-habborsby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-habborsby' })
    },
    {
      path: '/vindkraftverket-stella',
      name: "Vindkraftverket Stella",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverket-stella' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverket-stella' })
    },
    {
      path: '/hallemollan-i',
      name: "Hällemöllan I",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallemollan-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallemollan-i' })
    },
    {
      path: '/hallemollan-ii',
      name: "Hällemöllan II",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallemollan-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallemollan-ii' })
    },
    {
      path: '/ronnang',
      name: "Rönnäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'ronnang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ronnang' })
    },
    {
      path: '/alma-1',
      name: "Alma 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'alma-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alma-1' })
    },
    {
      path: '/sorgarden',
      name: "Sörgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'sorgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sorgarden' })
    },
    {
      path: '/henan',
      name: "Henån",
      component: ProjectPage,
      extraProps: { projectUrl: 'henan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'henan' })
    },
    {
      path: '/henan/harod',
      name: "Henån/Häröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'henan/harod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'henan/harod' })
    },
    {
      path: '/mollosund',
      name: "Mollösund",
      component: ProjectPage,
      extraProps: { projectUrl: 'mollosund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mollosund' })
    },
    {
      path: '/victoria',
      name: "Victoria",
      component: ProjectPage,
      extraProps: { projectUrl: 'victoria' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'victoria' })
    },
    {
      path: '/sophie-hogenaset',
      name: "Sophie Hogenäset",
      component: ProjectPage,
      extraProps: { projectUrl: 'sophie-hogenaset' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sophie-hogenaset' })
    },
    {
      path: '/hovenaset,-ingeborg',
      name: "Hovenäset, Ingeborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovenaset,-ingeborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovenaset,-ingeborg' })
    },
    {
      path: '/hermansrod',
      name: "Hermansröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'hermansrod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hermansrod' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berg' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berg' })
    },
    {
      path: '/haga',
      name: "Haga",
      component: ProjectPage,
      extraProps: { projectUrl: 'haga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haga' })
    },
    {
      path: '/ramberg',
      name: "Ramberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramberg' })
    },
    {
      path: '/dusgard',
      name: "Dusgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'dusgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dusgard' })
    },
    {
      path: '/dingle-naturbruksgymnasium',
      name: "Dingle Naturbruksgymnasium",
      component: ProjectPage,
      extraProps: { projectUrl: 'dingle-naturbruksgymnasium' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dingle-naturbruksgymnasium' })
    },
    {
      path: '/hulda',
      name: "Hulda",
      component: ProjectPage,
      extraProps: { projectUrl: 'hulda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hulda' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'bramserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bramserod' })
    },
    {
      path: '/bro',
      name: "Bro",
      component: ProjectPage,
      extraProps: { projectUrl: 'bro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bro' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-ledum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-ledum' })
    },
    {
      path: '/dusgard',
      name: "Dusgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'dusgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dusgard' })
    },
    {
      path: '/hornbore',
      name: "Hornbore",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornbore' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornbore' })
    },
    {
      path: '/hede-varniksgarden',
      name: "Hede Värniksgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'hede-varniksgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hede-varniksgarden' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/grebban-1',
      name: "Grebban 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'grebban-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grebban-1' })
    },
    {
      path: '/grebban-2',
      name: "Grebban 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'grebban-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grebban-2' })
    },
    {
      path: '/grebban-3,-tanumshede',
      name: "Grebban 3, Tanumshede",
      component: ProjectPage,
      extraProps: { projectUrl: 'grebban-3,-tanumshede' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grebban-3,-tanumshede' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-ledum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-ledum' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'bramserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bramserod' })
    },
    {
      path: '/rorkarr',
      name: "Rörkärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'rorkarr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rorkarr' })
    },
    {
      path: '/projekt-ledum',
      name: "Projekt Ledum",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-ledum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-ledum' })
    },
    {
      path: '/tannam-smeby',
      name: "Tannam Smeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'tannam-smeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tannam-smeby' })
    },
    {
      path: '/tannam',
      name: "Tannam",
      component: ProjectPage,
      extraProps: { projectUrl: 'tannam' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tannam' })
    },
    {
      path: '/tannam',
      name: "Tannam",
      component: ProjectPage,
      extraProps: { projectUrl: 'tannam' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tannam' })
    },
    {
      path: '/torserods-vindkraftpark-6',
      name: "Torseröds Vindkraftpark 6",
      component: ProjectPage,
      extraProps: { projectUrl: 'torserods-vindkraftpark-6' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torserods-vindkraftpark-6' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/kylsaters-vindkraftverk',
      name: "Kylsäters Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'kylsaters-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kylsaters-vindkraftverk' })
    },
    {
      path: '/lundby-grabo',
      name: "Lundby-Gråbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'lundby-grabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lundby-grabo' })
    },
    {
      path: '/hallsas',
      name: "Hallsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallsas' })
    },
    {
      path: '/lergraven',
      name: "Lergraven",
      component: ProjectPage,
      extraProps: { projectUrl: 'lergraven' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lergraven' })
    },
    {
      path: '/skallsjo',
      name: "Skallsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallsjo' })
    },
    {
      path: '/frotorp',
      name: "Frötorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'frotorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frotorp' })
    },
    {
      path: '/hoberg',
      name: "Hoberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hoberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hoberg' })
    },
    {
      path: '/hol-1',
      name: "Hol 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hol-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hol-1' })
    },
    {
      path: '/3951-sven-vind',
      name: "3951 Sven Vind",
      component: ProjectPage,
      extraProps: { projectUrl: '3951-sven-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '3951-sven-vind' })
    },
    {
      path: '/3952-tomten',
      name: "3952 Tomten",
      component: ProjectPage,
      extraProps: { projectUrl: '3952-tomten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '3952-tomten' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'astranna-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'astranna-vind' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'astranna-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'astranna-vind' })
    },
    {
      path: '/astranna-vind',
      name: "Astranna Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'astranna-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'astranna-vind' })
    },
    {
      path: '/flosal-vind',
      name: "FloSal Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'flosal-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flosal-vind' })
    },
    {
      path: '/flosal-vind',
      name: "FloSal Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'flosal-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flosal-vind' })
    },
    {
      path: '/haberg-2',
      name: "Håberg 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'haberg-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haberg-2' })
    },
    {
      path: '/vindkraftverk-i-sal',
      name: "Vindkraftverk i Sal",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-i-sal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-i-sal' })
    },
    {
      path: '/rudberga',
      name: "Rudberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'rudberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rudberga' })
    },
    {
      path: '/rudberga',
      name: "Rudberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'rudberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rudberga' })
    },
    {
      path: '/raglanna',
      name: "Råglanna",
      component: ProjectPage,
      extraProps: { projectUrl: 'raglanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raglanna' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bragnum-vindkraftverk',
      name: "Bragnum vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'bragnum-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bragnum-vindkraftverk' })
    },
    {
      path: '/åsens-sateri',
      name: "Åsens säteri",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsens-sateri' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsens-sateri' })
    },
    {
      path: '/grashult',
      name: "Gräshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'grashult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grashult' })
    },
    {
      path: '/sanden',
      name: "Sanden",
      component: ProjectPage,
      extraProps: { projectUrl: 'sanden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sanden' })
    },
    {
      path: '/ömmestorp',
      name: "Ömmestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ömmestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ömmestorp' })
    },
    {
      path: '/grinstads-hagen-1',
      name: "Grinstads-Hagen 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'grinstads-hagen-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grinstads-hagen-1' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'backen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backen' })
    },
    {
      path: '/ållerud',
      name: "Ållerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'ållerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ållerud' })
    },
    {
      path: '/erikstads-mossebol-1',
      name: "Erikstads-Mossebol 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstads-mossebol-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstads-mossebol-1' })
    },
    {
      path: '/erikstads-mossebol-2',
      name: "Erikstads-Mossebol 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstads-mossebol-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstads-mossebol-2' })
    },
    {
      path: '/vena',
      name: "Vena",
      component: ProjectPage,
      extraProps: { projectUrl: 'vena' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vena' })
    },
    {
      path: '/östebyn',
      name: "Östebyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'östebyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östebyn' })
    },
    {
      path: '/glysbyn',
      name: "Glysbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'glysbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'glysbyn' })
    },
    {
      path: '/bolstads-torp',
      name: "Bolstads-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bolstads-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bolstads-torp' })
    },
    {
      path: '/brandekulla/sunnana',
      name: "Brändekulla/Sunnanå",
      component: ProjectPage,
      extraProps: { projectUrl: 'brandekulla/sunnana' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brandekulla/sunnana' })
    },
    {
      path: '/nygarden',
      name: "Nygården",
      component: ProjectPage,
      extraProps: { projectUrl: 'nygarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nygarden' })
    },
    {
      path: '/nygarden',
      name: "Nygården",
      component: ProjectPage,
      extraProps: { projectUrl: 'nygarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nygarden' })
    },
    {
      path: '/nordkarrshogar',
      name: "Nordkärrshögar",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordkarrshogar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordkarrshogar' })
    },
    {
      path: '/rodjans-vindkraftverk',
      name: "Rödjans vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodjans-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodjans-vindkraftverk' })
    },
    {
      path: '/rodjans-gard',
      name: "Rödjans Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodjans-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodjans-gard' })
    },
    {
      path: '/jarns-bon',
      name: "Järns-Bön",
      component: ProjectPage,
      extraProps: { projectUrl: 'jarns-bon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jarns-bon' })
    },
    {
      path: '/strom',
      name: "Ström",
      component: ProjectPage,
      extraProps: { projectUrl: 'strom' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'strom' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'prassebergens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prassebergens-vindpark' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'prassebergens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prassebergens-vindpark' })
    },
    {
      path: '/kappelabo',
      name: "Kappelabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'kappelabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kappelabo' })
    },
    {
      path: '/skepared',
      name: "Skepared",
      component: ProjectPage,
      extraProps: { projectUrl: 'skepared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skepared' })
    },
    {
      path: '/hyssna-hokas',
      name: "Hyssna-Hökås",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyssna-hokas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyssna-hokas' })
    },
    {
      path: '/staxered',
      name: "Staxered",
      component: ProjectPage,
      extraProps: { projectUrl: 'staxered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'staxered' })
    },
    {
      path: '/haby',
      name: "Haby",
      component: ProjectPage,
      extraProps: { projectUrl: 'haby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haby' })
    },
    {
      path: '/naturbruksgymn-strommaskolan(bevis1998-11-04)',
      name: "Naturbruksgymn Strömmaskolan(bevis1998-11-04)",
      component: ProjectPage,
      extraProps: { projectUrl: 'naturbruksgymn-strommaskolan(bevis1998-11-04)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'naturbruksgymn-strommaskolan(bevis1998-11-04)' })
    },
    {
      path: '/åsen-(gardskraftverk)-slutbevis-2007-03-15',
      name: "Åsen (gårdskraftverk) Slutbevis 2007-03-15",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsen-(gardskraftverk)-slutbevis-2007-03-15' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsen-(gardskraftverk)-slutbevis-2007-03-15' })
    },
    {
      path: '/flohult',
      name: "Flohult",
      component: ProjectPage,
      extraProps: { projectUrl: 'flohult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flohult' })
    },
    {
      path: '/hulatorp',
      name: "Hulatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'hulatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hulatorp' })
    },
    {
      path: '/holm-vindkraftspark-?-park-i-flera-komm-o-lan',
      name: "Holm vindkraftspark ? Park i flera komm o län",
      component: ProjectPage,
      extraProps: { projectUrl: 'holm-vindkraftspark-?-park-i-flera-komm-o-lan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holm-vindkraftspark-?-park-i-flera-komm-o-lan' })
    },
    {
      path: '/vastfastigheter,-vastra-gotalansregionen/natgym',
      name: "Västfastigheter, Västra Götalansregionen/Natgym",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastfastigheter,-vastra-gotalansregionen/natgym' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastfastigheter,-vastra-gotalansregionen/natgym' })
    },
    {
      path: '/kappelabo',
      name: "Kappelabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'kappelabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kappelabo' })
    },
    {
      path: '/blasebo',
      name: "Bläsebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'blasebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blasebo' })
    },
    {
      path: '/bjorketorp',
      name: "Björketorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorketorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorketorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/holmarp',
      name: "Holmarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmarp' })
    },
    {
      path: '/3954-gallegarden',
      name: "3954 Gallegården",
      component: ProjectPage,
      extraProps: { projectUrl: '3954-gallegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '3954-gallegarden' })
    },
    {
      path: '/farhaga',
      name: "Fårhaga",
      component: ProjectPage,
      extraProps: { projectUrl: 'farhaga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'farhaga' })
    },
    {
      path: '/gategarden,-bengt-c',
      name: "Gategården, Bengt C",
      component: ProjectPage,
      extraProps: { projectUrl: 'gategarden,-bengt-c' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gategarden,-bengt-c' })
    },
    {
      path: '/halvas',
      name: "Halvås",
      component: ProjectPage,
      extraProps: { projectUrl: 'halvas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halvas' })
    },
    {
      path: '/helleberg-1',
      name: "Helleberg 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'helleberg-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'helleberg-1' })
    },
    {
      path: '/hakantorp-1',
      name: "Håkantorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hakantorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hakantorp-1' })
    },
    {
      path: '/hakantorp-2',
      name: "Håkantorp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hakantorp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hakantorp-2' })
    },
    {
      path: '/kaggarden',
      name: "Kaggården",
      component: ProjectPage,
      extraProps: { projectUrl: 'kaggarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kaggarden' })
    },
    {
      path: '/morkagarden-2',
      name: "Mörkagården 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkagarden-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkagarden-2' })
    },
    {
      path: '/morkagarden-4',
      name: "Mörkagården 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkagarden-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkagarden-4' })
    },
    {
      path: '/morkagarden-1',
      name: "Mörkagården 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkagarden-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkagarden-1' })
    },
    {
      path: '/morkagarden-3',
      name: "Mörkagården 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkagarden-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkagarden-3' })
    },
    {
      path: '/rangeltorp',
      name: "Rangeltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'rangeltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rangeltorp' })
    },
    {
      path: '/rosa',
      name: "Rosa",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosa' })
    },
    {
      path: '/ryda',
      name: "Ryda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryda' })
    },
    {
      path: '/ryda-2',
      name: "Ryda 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryda-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryda-2' })
    },
    {
      path: '/skarstad',
      name: "Skarstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarstad' })
    },
    {
      path: '/edum',
      name: "Edum",
      component: ProjectPage,
      extraProps: { projectUrl: 'edum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'edum' })
    },
    {
      path: '/edum',
      name: "Edum",
      component: ProjectPage,
      extraProps: { projectUrl: 'edum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'edum' })
    },
    {
      path: '/vara',
      name: "Vara",
      component: ProjectPage,
      extraProps: { projectUrl: 'vara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vara' })
    },
    {
      path: '/vedum-horshaga',
      name: "Vedum Horshaga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vedum-horshaga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vedum-horshaga' })
    },
    {
      path: '/stora-backebo',
      name: "Stora Bäckebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-backebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-backebo' })
    },
    {
      path: '/sandaker',
      name: "Sandåker",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandaker' })
    },
    {
      path: '/tl-vind-1',
      name: "TL Vind 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tl-vind-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tl-vind-1' })
    },
    {
      path: '/tl-vind-2',
      name: "TL Vind 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'tl-vind-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tl-vind-2' })
    },
    {
      path: '/tl-vind-3',
      name: "TL Vind 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'tl-vind-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tl-vind-3' })
    },
    {
      path: '/brattefors-i',
      name: "Brattefors I",
      component: ProjectPage,
      extraProps: { projectUrl: 'brattefors-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brattefors-i' })
    },
    {
      path: '/broholm-i',
      name: "Broholm I",
      component: ProjectPage,
      extraProps: { projectUrl: 'broholm-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'broholm-i' })
    },
    {
      path: '/brunnstorp-i',
      name: "Brunnstorp I",
      component: ProjectPage,
      extraProps: { projectUrl: 'brunnstorp-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brunnstorp-i' })
    },
    {
      path: '/backgarden',
      name: "Bäckgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'backgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backgarden' })
    },
    {
      path: '/dalaholm-i',
      name: "Dalaholm I",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalaholm-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalaholm-i' })
    },
    {
      path: '/dalaholm-ii',
      name: "Dalaholm II",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalaholm-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalaholm-ii' })
    },
    {
      path: '/erikstorp-ii',
      name: "Erikstorp II",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstorp-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstorp-ii' })
    },
    {
      path: '/horsmarka',
      name: "Horsmarka",
      component: ProjectPage,
      extraProps: { projectUrl: 'horsmarka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horsmarka' })
    },
    {
      path: '/jattadansen-i',
      name: "Jättadansen I",
      component: ProjectPage,
      extraProps: { projectUrl: 'jattadansen-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jattadansen-i' })
    },
    {
      path: '/kollbogarden-i',
      name: "Kollbogården I",
      component: ProjectPage,
      extraProps: { projectUrl: 'kollbogarden-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kollbogarden-i' })
    },
    {
      path: '/kollbogarden-ii',
      name: "Kollbogården II",
      component: ProjectPage,
      extraProps: { projectUrl: 'kollbogarden-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kollbogarden-ii' })
    },
    {
      path: '/kyrkebo-i',
      name: "Kyrkebo I",
      component: ProjectPage,
      extraProps: { projectUrl: 'kyrkebo-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kyrkebo-i' })
    },
    {
      path: '/kallstorp-i',
      name: "Källstorp I",
      component: ProjectPage,
      extraProps: { projectUrl: 'kallstorp-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kallstorp-i' })
    },
    {
      path: '/mariedal-i',
      name: "Mariedal I",
      component: ProjectPage,
      extraProps: { projectUrl: 'mariedal-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mariedal-i' })
    },
    {
      path: '/nolebo-i',
      name: "Nolebo I",
      component: ProjectPage,
      extraProps: { projectUrl: 'nolebo-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nolebo-i' })
    },
    {
      path: '/rasegarden-i',
      name: "Rasegården I",
      component: ProjectPage,
      extraProps: { projectUrl: 'rasegarden-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rasegarden-i' })
    },
    {
      path: '/hangelosa-1',
      name: "Hangelösa 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangelosa-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangelosa-1' })
    },
    {
      path: '/skeby-i',
      name: "Skeby I",
      component: ProjectPage,
      extraProps: { projectUrl: 'skeby-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skeby-i' })
    },
    {
      path: '/skeby-ii',
      name: "Skeby II",
      component: ProjectPage,
      extraProps: { projectUrl: 'skeby-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skeby-ii' })
    },
    {
      path: '/stockeback-i',
      name: "Stockebäck I",
      component: ProjectPage,
      extraProps: { projectUrl: 'stockeback-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stockeback-i' })
    },
    {
      path: '/stora-lund-i',
      name: "Stora lund I",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-lund-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-lund-i' })
    },
    {
      path: '/stora-lund-ii',
      name: "Stora lund II",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-lund-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-lund-ii' })
    },
    {
      path: '/svenska-foder',
      name: "Svenska Foder",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenska-foder' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenska-foder' })
    },
    {
      path: '/vastermark-i',
      name: "Västermark I",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastermark-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastermark-i' })
    },
    {
      path: '/vattlosa-i',
      name: "Vättlösa I",
      component: ProjectPage,
      extraProps: { projectUrl: 'vattlosa-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vattlosa-i' })
    },
    {
      path: '/vattlosa-ii',
      name: "Vättlösa II",
      component: ProjectPage,
      extraProps: { projectUrl: 'vattlosa-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vattlosa-ii' })
    },
    {
      path: '/-langsjon-4',
      name: "Långsjön 4",
      component: ProjectPage,
      extraProps: { projectUrl: '-langsjon-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-langsjon-4' })
    },
    {
      path: '/-skinnfallen-1',
      name: "Skinnfällen 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-skinnfallen-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-skinnfallen-1' })
    },
    {
      path: '/-stora-krakhult-1',
      name: "Stora Kråkhult 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-stora-krakhult-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-stora-krakhult-1' })
    },
    {
      path: '/spannefalla',
      name: "Spännefalla",
      component: ProjectPage,
      extraProps: { projectUrl: 'spannefalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spannefalla' })
    },
    {
      path: '/borrud-1',
      name: "Borrud 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrud-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrud-1' })
    },
    {
      path: '/borrud-2',
      name: "Borrud 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrud-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrud-2' })
    },
    {
      path: '/ljungas',
      name: "Ljungås",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungas' })
    },
    {
      path: '/bert',
      name: "Bert",
      component: ProjectPage,
      extraProps: { projectUrl: 'bert' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bert' })
    },
    {
      path: '/nolasen',
      name: "Nolåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nolasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nolasen' })
    },
    {
      path: '/smeby',
      name: "Smeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'smeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smeby' })
    },
    {
      path: '/ballefors-kyrketorp',
      name: "Bällefors-Kyrketorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ballefors-kyrketorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ballefors-kyrketorp' })
    },
    {
      path: '/gardsten',
      name: "Gårdsten",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardsten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardsten' })
    },
    {
      path: '/lyse-bonus',
      name: "Lyse Bonus",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyse-bonus' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyse-bonus' })
    },
    {
      path: '/lys-vind',
      name: "Lys-Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'lys-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lys-vind' })
    },
    {
      path: '/sivik-iii',
      name: "Sivik III",
      component: ProjectPage,
      extraProps: { projectUrl: 'sivik-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sivik-iii' })
    },
    {
      path: '/si-vind',
      name: "Si-Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'si-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'si-vind' })
    },
    {
      path: '/sture-nolby-ha-046',
      name: "Sture Nolby HA 046",
      component: ProjectPage,
      extraProps: { projectUrl: 'sture-nolby-ha-046' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sture-nolby-ha-046' })
    },
    {
      path: '/vind-invest',
      name: "Vind Invest",
      component: ProjectPage,
      extraProps: { projectUrl: 'vind-invest' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vind-invest' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ljungkile-svenshogen',
      name: "Ljungkile Svenshögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungkile-svenshogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungkile-svenshogen' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectUrl: 'rålanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rålanda' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectUrl: 'rålanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rålanda' })
    },
    {
      path: '/torkelsrod-i-uddevalla',
      name: "Torkelsröd i Uddevalla",
      component: ProjectPage,
      extraProps: { projectUrl: 'torkelsrod-i-uddevalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torkelsrod-i-uddevalla' })
    },
    {
      path: '/kavlanda',
      name: "Kavlanda",
      component: ProjectPage,
      extraProps: { projectUrl: 'kavlanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kavlanda' })
    },
    {
      path: '/hogdals-hjalmberg',
      name: "Hogdals-Hjälmberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogdals-hjalmberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogdals-hjalmberg' })
    },
    {
      path: '/bjornvinden',
      name: "Björnvinden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornvinden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornvinden' })
    },
    {
      path: '/asmundtorp',
      name: "Asmundtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'asmundtorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'asmundtorp' })
    },
    {
      path: '/bralanda-torp',
      name: "Brålanda-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bralanda-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bralanda-torp' })
    },
    {
      path: '/baberg',
      name: "Båberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'baberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'baberg' })
    },
    {
      path: '/fristorp',
      name: "Fristorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'fristorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fristorp' })
    },
    {
      path: '/gestads-bjornerud',
      name: "Gestads-Björnerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'gestads-bjornerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gestads-bjornerud' })
    },
    {
      path: '/gestads-bjornerud',
      name: "Gestads-Björnerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'gestads-bjornerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gestads-bjornerud' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectUrl: 'holm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holm' })
    },
    {
      path: '/nuntorpskolans-vindkraftverk',
      name: "Nuntorpskolans vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'nuntorpskolans-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nuntorpskolans-vindkraftverk' })
    },
    {
      path: '/ramnered',
      name: "Ramnered",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramnered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramnered' })
    },
    {
      path: '/rannum',
      name: "Rånnum",
      component: ProjectPage,
      extraProps: { projectUrl: 'rannum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rannum' })
    },
    {
      path: '/simonstorp',
      name: "Simonstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'simonstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'simonstorp' })
    },
    {
      path: '/siviken',
      name: "Siviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'siviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'siviken' })
    },
    {
      path: '/tobyn',
      name: "Tobyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'tobyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tobyn' })
    },
    {
      path: '/troneberg',
      name: "Troneberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'troneberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'troneberg' })
    },
    {
      path: '/uppegarden',
      name: "Uppegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'uppegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uppegarden' })
    },
    {
      path: '/vanersnas',
      name: "Vänersnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanersnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanersnas' })
    },
    {
      path: '/biangen',
      name: "Biängen",
      component: ProjectPage,
      extraProps: { projectUrl: 'biangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'biangen' })
    },
    {
      path: '/branneriet',
      name: "Bränneriet",
      component: ProjectPage,
      extraProps: { projectUrl: 'branneriet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'branneriet' })
    },
    {
      path: '/3965-eka-lilla-v-nas',
      name: "3965-Eka Lilla V-näs",
      component: ProjectPage,
      extraProps: { projectUrl: '3965-eka-lilla-v-nas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '3965-eka-lilla-v-nas' })
    },
    {
      path: '/wenersnes',
      name: "Wenersnes",
      component: ProjectPage,
      extraProps: { projectUrl: 'wenersnes' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wenersnes' })
    },
    {
      path: '/åstebo',
      name: "Åstebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'åstebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åstebo' })
    },
    {
      path: '/hullsjon-1',
      name: "Hullsjön 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hullsjon-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hullsjon-1' })
    },
    {
      path: '/hullsjon-2',
      name: "Hullsjön 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hullsjon-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hullsjon-2' })
    },
    {
      path: '/halltorp',
      name: "Halltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'halltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halltorp' })
    },
    {
      path: '/velanda-gard',
      name: "Velanda gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'velanda-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'velanda-gard' })
    },
    {
      path: '/vittene',
      name: "Vittene",
      component: ProjectPage,
      extraProps: { projectUrl: 'vittene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vittene' })
    },
    {
      path: '/genneved',
      name: "Genneved",
      component: ProjectPage,
      extraProps: { projectUrl: 'genneved' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'genneved' })
    },
    {
      path: '/rodeneplatan',
      name: "Rödeneplatån",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodeneplatan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodeneplatan' })
    },
    {
      path: '/vindkraft-rangedala',
      name: "Vindkraft Rångedala",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-rangedala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-rangedala' })
    },
    {
      path: '/hossna',
      name: "Hössna",
      component: ProjectPage,
      extraProps: { projectUrl: 'hossna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hossna' })
    },
    {
      path: '/zepyrus-af-hov',
      name: "Zepyrus af Hov",
      component: ProjectPage,
      extraProps: { projectUrl: 'zepyrus-af-hov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'zepyrus-af-hov' })
    },
    {
      path: '/älmestad',
      name: "Älmestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'älmestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älmestad' })
    },
    {
      path: '/hasselbacka',
      name: "Hässelbacka",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasselbacka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasselbacka' })
    },
    {
      path: '/soderbodane',
      name: "Söderbodane",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderbodane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderbodane' })
    },
    {
      path: '/hassleror',
      name: "Hasslerör",
      component: ProjectPage,
      extraProps: { projectUrl: 'hassleror' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hassleror' })
    },
    {
      path: '/hassleror',
      name: "Hasslerör",
      component: ProjectPage,
      extraProps: { projectUrl: 'hassleror' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hassleror' })
    },
    {
      path: '/bromollan',
      name: "Bromöllan",
      component: ProjectPage,
      extraProps: { projectUrl: 'bromollan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bromollan' })
    },
    {
      path: '/sjobergs-sateri',
      name: "Sjöbergs Säteri",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjobergs-sateri' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjobergs-sateri' })
    },
    {
      path: '/backa-vind-3',
      name: "Backa Vind 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'backa-vind-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backa-vind-3' })
    },
    {
      path: '/lovene',
      name: "Lovene",
      component: ProjectPage,
      extraProps: { projectUrl: 'lovene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lovene' })
    },
    {
      path: '/eke-vind',
      name: "Eke Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'eke-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eke-vind' })
    },
    {
      path: '/harjevads-vind',
      name: "Härjevads Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'harjevads-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harjevads-vind' })
    },
    {
      path: '/almetorps-sateri',
      name: "Almetorps Säteri",
      component: ProjectPage,
      extraProps: { projectUrl: 'almetorps-sateri' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almetorps-sateri' })
    },
    {
      path: '/kedumsvik',
      name: "Kedumsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'kedumsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kedumsvik' })
    },
    {
      path: '/lanneholm',
      name: "Lanneholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'lanneholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lanneholm' })
    },
    {
      path: '/lanna-1,-lidkoping',
      name: "Lanna 1, Lidköping",
      component: ProjectPage,
      extraProps: { projectUrl: 'lanna-1,-lidkoping' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lanna-1,-lidkoping' })
    },
    {
      path: '/mansagarden',
      name: "Månsagården",
      component: ProjectPage,
      extraProps: { projectUrl: 'mansagarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mansagarden' })
    },
    {
      path: '/skog-1',
      name: "Skog 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'skog-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skog-1' })
    },
    {
      path: '/skog-2',
      name: "Skog 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'skog-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skog-2' })
    },
    {
      path: '/ranåker-/-747',
      name: "RANÅKER / 747",
      component: ProjectPage,
      extraProps: { projectUrl: 'ranåker-/-747' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ranåker-/-747' })
    },
    {
      path: '/märene-1992',
      name: "MÄRENE 1992",
      component: ProjectPage,
      extraProps: { projectUrl: 'märene-1992' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'märene-1992' })
    },
    {
      path: '/ölanda-/-4391',
      name: "ÖLANDA / 4391",
      component: ProjectPage,
      extraProps: { projectUrl: 'ölanda-/-4391' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ölanda-/-4391' })
    },
    {
      path: '/viglunda-/-4456',
      name: "VIGLUNDA / 4456",
      component: ProjectPage,
      extraProps: { projectUrl: 'viglunda-/-4456' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viglunda-/-4456' })
    },
    {
      path: '/skallmeja-/-5680',
      name: "SKALLMEJA / 5680",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallmeja-/-5680' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallmeja-/-5680' })
    },
    {
      path: '/munstorp-5691',
      name: "MUNSTORP 5691",
      component: ProjectPage,
      extraProps: { projectUrl: 'munstorp-5691' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munstorp-5691' })
    },
    {
      path: '/hästhalla-/-5692',
      name: "HÄSTHALLA / 5692",
      component: ProjectPage,
      extraProps: { projectUrl: 'hästhalla-/-5692' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hästhalla-/-5692' })
    },
    {
      path: '/skallmeja-/-5694',
      name: "SKALLMEJA / 5694",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallmeja-/-5694' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallmeja-/-5694' })
    },
    {
      path: '/istrums-lycke-/-5695',
      name: "ISTRUMS-LYCKE / 5695",
      component: ProjectPage,
      extraProps: { projectUrl: 'istrums-lycke-/-5695' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'istrums-lycke-/-5695' })
    },
    {
      path: '/munstorp-7012',
      name: "MUNSTORP 7012",
      component: ProjectPage,
      extraProps: { projectUrl: 'munstorp-7012' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munstorp-7012' })
    },
    {
      path: '/blombacka-/-5693',
      name: "BLOMBACKA / 5693",
      component: ProjectPage,
      extraProps: { projectUrl: 'blombacka-/-5693' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blombacka-/-5693' })
    },
    {
      path: '/tåstorp-/-a',
      name: "TÅSTORP / A",
      component: ProjectPage,
      extraProps: { projectUrl: 'tåstorp-/-a' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tåstorp-/-a' })
    },
    {
      path: '/stubbe',
      name: "STUBBE",
      component: ProjectPage,
      extraProps: { projectUrl: 'stubbe' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stubbe' })
    },
    {
      path: '/skelycke',
      name: "SKELYCKE",
      component: ProjectPage,
      extraProps: { projectUrl: 'skelycke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skelycke' })
    },
    {
      path: '/skallmeja-/-7304',
      name: "SKALLMEJA / 7304",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallmeja-/-7304' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallmeja-/-7304' })
    },
    {
      path: '/tagelberg-1',
      name: "Tagelberg 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tagelberg-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tagelberg-1' })
    },
    {
      path: '/tåstorp-/-b',
      name: "TÅSTORP / B",
      component: ProjectPage,
      extraProps: { projectUrl: 'tåstorp-/-b' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tåstorp-/-b' })
    },
    {
      path: '/horshaga',
      name: "HORSHAGA",
      component: ProjectPage,
      extraProps: { projectUrl: 'horshaga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horshaga' })
    },
    {
      path: '/brumstorp-1',
      name: "Brumstorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'brumstorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brumstorp-1' })
    },
    {
      path: '/greby-1',
      name: "Greby 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'greby-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'greby-1' })
    },
    {
      path: '/klockartorp-1',
      name: "Klockartorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'klockartorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klockartorp-1' })
    },
    {
      path: '/kyrkbolet-1',
      name: "Kyrkbolet 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kyrkbolet-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kyrkbolet-1' })
    },
    {
      path: '/dagstorp-1',
      name: "Dagstorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'dagstorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dagstorp-1' })
    },
    {
      path: '/tastorp-1',
      name: "Tåstorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tastorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tastorp-1' })
    },
    {
      path: '/-askeberga-5',
      name: "Askeberga 5",
      component: ProjectPage,
      extraProps: { projectUrl: '-askeberga-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-askeberga-5' })
    },
    {
      path: '/-djursatra-2',
      name: "Djursätra 2",
      component: ProjectPage,
      extraProps: { projectUrl: '-djursatra-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-djursatra-2' })
    },
    {
      path: '/-djursatra-1',
      name: "Djursätra 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-djursatra-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-djursatra-1' })
    },
    {
      path: '/vkv-vaholm-1-8',
      name: "Vkv Vaholm 1-8",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv-vaholm-1-8' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv-vaholm-1-8' })
    },
    {
      path: '/skultorp',
      name: "Skultorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skultorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skultorp' })
    },
    {
      path: '/sortorp',
      name: "Sörtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sortorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sortorp' })
    },
    {
      path: '/hjallo',
      name: "Hjällö",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjallo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjallo' })
    },
    {
      path: '/stakahemmet',
      name: "Stakahemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'stakahemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stakahemmet' })
    },
    {
      path: '/stakahemmet',
      name: "Stakahemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'stakahemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stakahemmet' })
    },
    {
      path: '/stora-solberga',
      name: "Stora Solberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-solberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-solberga' })
    },
    {
      path: '/atteby',
      name: "Atteby",
      component: ProjectPage,
      extraProps: { projectUrl: 'atteby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'atteby' })
    },
    {
      path: '/karstorp',
      name: "Karstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'karstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karstorp' })
    },
    {
      path: '/styrshult',
      name: "Styrshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'styrshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'styrshult' })
    },
    {
      path: '/bjarg',
      name: "Bjärg",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjarg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjarg' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks-Munkebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'grevbacks-munkebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grevbacks-munkebo' })
    },
    {
      path: '/stekarekarret',
      name: "Stekarekärret",
      component: ProjectPage,
      extraProps: { projectUrl: 'stekarekarret' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stekarekarret' })
    },
    {
      path: '/överryd',
      name: "Överryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'överryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'överryd' })
    },
    {
      path: '/fridene',
      name: "Fridene",
      component: ProjectPage,
      extraProps: { projectUrl: 'fridene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fridene' })
    },
    {
      path: '/nyskog',
      name: "Nyskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyskog' })
    },
    {
      path: '/dalshult',
      name: "Dalshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalshult' })
    },
    {
      path: '/dalshult-eskelid',
      name: "Dalshult-Eskelid",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalshult-eskelid' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalshult-eskelid' })
    },
    {
      path: '/dalshult-1;2-(halls-vilande-pa-sok.-begaran)',
      name: "Dalshult 1;2 (Hålls vilande på sök. begäran)",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalshult-1;2-(halls-vilande-pa-sok.-begaran)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalshult-1;2-(halls-vilande-pa-sok.-begaran)' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'signesbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'signesbo' })
    },
    {
      path: '/granbolet',
      name: "Granbolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'granbolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granbolet' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'signesbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'signesbo' })
    },
    {
      path: '/signesbo',
      name: "Signesbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'signesbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'signesbo' })
    },
    {
      path: '/äskelid',
      name: "Äskelid",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskelid' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskelid' })
    },
    {
      path: '/nyskog',
      name: "Nyskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyskog' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks Munkebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'grevbacks-munkebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grevbacks-munkebo' })
    },
    {
      path: '/bjarg',
      name: "Bjärg",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjarg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjarg' })
    },
    {
      path: '/svebrata',
      name: "Svebråta",
      component: ProjectPage,
      extraProps: { projectUrl: 'svebrata' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svebrata' })
    },
    {
      path: '/laggarebolet',
      name: "Laggarebolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'laggarebolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laggarebolet' })
    },
    {
      path: '/mellomberga',
      name: "Mellomberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellomberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellomberga' })
    },
    {
      path: '/lammevad',
      name: "Lammevad",
      component: ProjectPage,
      extraProps: { projectUrl: 'lammevad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lammevad' })
    },
    {
      path: '/simona-vindkraft-leringen',
      name: "Simona Vindkraft Leringen",
      component: ProjectPage,
      extraProps: { projectUrl: 'simona-vindkraft-leringen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'simona-vindkraft-leringen' })
    },
    {
      path: '/ammagarden-1',
      name: "Ammagården 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ammagarden-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ammagarden-1' })
    },
    {
      path: '/badene-5',
      name: "Badene 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'badene-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'badene-5' })
    },
    {
      path: '/badene-6-(lilla)',
      name: "Badene 6 (lilla)",
      component: ProjectPage,
      extraProps: { projectUrl: 'badene-6-(lilla)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'badene-6-(lilla)' })
    },
    {
      path: '/floby-1',
      name: "Floby 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'floby-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'floby-1' })
    },
    {
      path: '/grimskullen',
      name: "Grimskullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'grimskullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grimskullen' })
    },
    {
      path: '/goteve-1',
      name: "Göteve 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'goteve-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'goteve-1' })
    },
    {
      path: '/kampagarden-1',
      name: "Kampagården 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kampagarden-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kampagarden-1' })
    },
    {
      path: '/kleva-1',
      name: "Kleva 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kleva-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kleva-1' })
    },
    {
      path: '/kalleberg-6',
      name: "Källeberg 6",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalleberg-6' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalleberg-6' })
    },
    {
      path: '/kalvene-1',
      name: "Kälvene 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalvene-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalvene-1' })
    },
    {
      path: '/luttra-1',
      name: "Luttra 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'luttra-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'luttra-1' })
    },
    {
      path: '/monarp-1',
      name: "Mönarp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'monarp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'monarp-1' })
    },
    {
      path: '/monarp-2',
      name: "Mönarp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'monarp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'monarp-2' })
    },
    {
      path: '/naglarp-1',
      name: "Naglarp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'naglarp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'naglarp-1' })
    },
    {
      path: '/naglarp-2',
      name: "Naglarp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'naglarp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'naglarp-2' })
    },
    {
      path: '/rosenskog-a1',
      name: "Rosenskog A1",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-a1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-a1' })
    },
    {
      path: '/rosenskog-a2',
      name: "Rosenskog A2",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-a2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-a2' })
    },
    {
      path: '/rosenskog-a6',
      name: "Rosenskog A6",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-a6' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-a6' })
    },
    {
      path: '/rosenskog-v7',
      name: "Rosenskog V7",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-v7' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-v7' })
    },
    {
      path: '/rosenskog-w8,-anders-gotlind',
      name: "Rosenskog W8, Anders Götlind",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-w8,-anders-gotlind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-w8,-anders-gotlind' })
    },
    {
      path: '/rosenskog-w9,-anders-gotlind',
      name: "Rosenskog W9, Anders Götlind",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-w9,-anders-gotlind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-w9,-anders-gotlind' })
    },
    {
      path: '/snosback-1',
      name: "Snösbäck 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'snosback-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'snosback-1' })
    },
    {
      path: '/sundsholm',
      name: "Sundsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundsholm' })
    },
    {
      path: '/tunhem-1',
      name: "Tunhem 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tunhem-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tunhem-1' })
    },
    {
      path: '/tunhem-2',
      name: "Tunhem 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'tunhem-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tunhem-2' })
    },
    {
      path: '/tunhem-3',
      name: "Tunhem 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'tunhem-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tunhem-3' })
    },
    {
      path: '/tyska-garden-1',
      name: "Tyska gården 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tyska-garden-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tyska-garden-1' })
    },
    {
      path: '/tyska-garden-5',
      name: "Tyska gården 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'tyska-garden-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tyska-garden-5' })
    },
    {
      path: '/ugglum-1',
      name: "Ugglum 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ugglum-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ugglum-1' })
    },
    {
      path: '/yllestad-1',
      name: "Yllestad 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'yllestad-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'yllestad-1' })
    },
    {
      path: '/yllestad',
      name: "Yllestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'yllestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'yllestad' })
    },
    {
      path: '/gokhem',
      name: "Gökhem",
      component: ProjectPage,
      extraProps: { projectUrl: 'gokhem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gokhem' })
    },
    {
      path: '/slabraten',
      name: "Släbråten",
      component: ProjectPage,
      extraProps: { projectUrl: 'slabraten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slabraten' })
    },
    {
      path: '/lucia,-boholmen',
      name: "Lucia, Boholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'lucia,-boholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lucia,-boholmen' })
    },
    {
      path: '/skinnerud',
      name: "Skinnerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'skinnerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skinnerud' })
    },
    {
      path: '/åras',
      name: "Årås",
      component: ProjectPage,
      extraProps: { projectUrl: 'åras' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åras' })
    },
    {
      path: '/nolby,-arnon',
      name: "Nolby, Arnön",
      component: ProjectPage,
      extraProps: { projectUrl: 'nolby,-arnon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nolby,-arnon' })
    },
    {
      path: '/posseberg',
      name: "Posseberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'posseberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'posseberg' })
    },
    {
      path: '/varnums-hogeberg',
      name: "Varnums-Högeberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'varnums-hogeberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varnums-hogeberg' })
    },
    {
      path: '/kvarnbraten',
      name: "Kvarnbråten",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvarnbraten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvarnbraten' })
    },
    {
      path: '/eskilsaters-boda',
      name: "Eskilsäters-Boda",
      component: ProjectPage,
      extraProps: { projectUrl: 'eskilsaters-boda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eskilsaters-boda' })
    },
    {
      path: '/forsvik',
      name: "Forsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsvik' })
    },
    {
      path: '/magnebyn',
      name: "Magnebyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'magnebyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'magnebyn' })
    },
    {
      path: '/stora-herrestad',
      name: "Stora Herrestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-herrestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-herrestad' })
    },
    {
      path: '/ölseruds-prastgard',
      name: "Ölseruds prästgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'ölseruds-prastgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ölseruds-prastgard' })
    },
    {
      path: '/önaholm',
      name: "Önaholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'önaholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'önaholm' })
    },
    {
      path: '/ekebergs-gard-jeremias',
      name: "Ekebergs gård Jeremias",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekebergs-gard-jeremias' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekebergs-gard-jeremias' })
    },
    {
      path: '/kalltorp-tarsta',
      name: "Källtorp Tarsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalltorp-tarsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalltorp-tarsta' })
    },
    {
      path: '/varbo',
      name: "Vårbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'varbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varbo' })
    },
    {
      path: '/goksholm',
      name: "Göksholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'goksholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'goksholm' })
    },
    {
      path: '/elmer-1---vindkraftverk',
      name: "Elmer 1 - vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'elmer-1---vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elmer-1---vindkraftverk' })
    },
    {
      path: '/elmer-2',
      name: "Elmer 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'elmer-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elmer-2' })
    },
    {
      path: '/kvismaren-2',
      name: "Kvismaren 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvismaren-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvismaren-2' })
    },
    {
      path: '/kvismaren-3',
      name: "Kvismaren 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvismaren-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvismaren-3' })
    },
    {
      path: '/lundstorp-vind',
      name: "Lundstorp Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'lundstorp-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lundstorp-vind' })
    },
    {
      path: '/nybble-vindkraftverk',
      name: "Nybble Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'nybble-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nybble-vindkraftverk' })
    },
    {
      path: '/odensbacken-1',
      name: "Odensbacken 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'odensbacken-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odensbacken-1' })
    },
    {
      path: '/usta',
      name: "Usta",
      component: ProjectPage,
      extraProps: { projectUrl: 'usta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'usta' })
    },
    {
      path: '/hovsta',
      name: "Hovsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovsta' })
    },
    {
      path: '/vindkraftverk-irvingsholms-sateri',
      name: "Vindkraftverk Irvingsholms Säteri",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-irvingsholms-sateri' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-irvingsholms-sateri' })
    },
    {
      path: '/kvismaren-1',
      name: "Kvismaren 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvismaren-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvismaren-1' })
    },
    {
      path: '/askers-via',
      name: "Askers Via",
      component: ProjectPage,
      extraProps: { projectUrl: 'askers-via' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'askers-via' })
    },
    {
      path: '/mellsavind-1',
      name: "MellsaVind 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellsavind-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellsavind-1' })
    },
    {
      path: '/norra-runnaby',
      name: "Norra Runnaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-runnaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-runnaby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vintrosa',
      name: "Vintrosa",
      component: ProjectPage,
      extraProps: { projectUrl: 'vintrosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vintrosa' })
    },
    {
      path: '/gotarsvik',
      name: "Götarsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'gotarsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gotarsvik' })
    },
    {
      path: '/malgrava',
      name: "Malgräva",
      component: ProjectPage,
      extraProps: { projectUrl: 'malgrava' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'malgrava' })
    },
    {
      path: '/alva-af-hulta',
      name: "Alva af Hulta",
      component: ProjectPage,
      extraProps: { projectUrl: 'alva-af-hulta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alva-af-hulta' })
    },
    {
      path: '/almudden',
      name: "Almudden",
      component: ProjectPage,
      extraProps: { projectUrl: 'almudden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almudden' })
    },
    {
      path: '/sverkesta-vindkraft-g1',
      name: "Sverkesta Vindkraft G1",
      component: ProjectPage,
      extraProps: { projectUrl: 'sverkesta-vindkraft-g1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sverkesta-vindkraft-g1' })
    },
    {
      path: '/rockhammar',
      name: "Rockhammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'rockhammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rockhammar' })
    },
    {
      path: '/hannevind-11',
      name: "Hannevind 11",
      component: ProjectPage,
      extraProps: { projectUrl: 'hannevind-11' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hannevind-11' })
    },
    {
      path: '/tillberga',
      name: "Tillberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'tillberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tillberga' })
    },
    {
      path: '/folderfors-vindkraft',
      name: "Folderfors Vindkraft",
      component: ProjectPage,
      extraProps: { projectUrl: 'folderfors-vindkraft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'folderfors-vindkraft' })
    },
    {
      path: '/hjulsta',
      name: "Hjulsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjulsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjulsta' })
    },
    {
      path: '/lunger',
      name: "Lunger",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunger' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunger' })
    },
    {
      path: '/sunds-lovasa',
      name: "Sunds-Lövåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'sunds-lovasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sunds-lovasa' })
    },
    {
      path: '/örbacken',
      name: "Örbacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'örbacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örbacken' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gotala-1',
      name: "Götala 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'gotala-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gotala-1' })
    },
    {
      path: '/basthult',
      name: "Bästhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'basthult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'basthult' })
    },
    {
      path: '/ekas',
      name: "Ekås",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekas' })
    },
    {
      path: '/sennan',
      name: "Sennan",
      component: ProjectPage,
      extraProps: { projectUrl: 'sennan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sennan' })
    },
    {
      path: '/savbyholm',
      name: "Sävbyholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'savbyholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'savbyholm' })
    },
    {
      path: '/alered',
      name: "Alered",
      component: ProjectPage,
      extraProps: { projectUrl: 'alered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alered' })
    },
    {
      path: '/ramsjo',
      name: "Ramsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsjo' })
    },
    {
      path: '/gummarasen',
      name: "Gummaråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'gummarasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gummarasen' })
    },
    {
      path: '/lahall',
      name: "Lahall",
      component: ProjectPage,
      extraProps: { projectUrl: 'lahall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lahall' })
    },
    {
      path: '/sodra-cell-varo',
      name: "Södra Cell Värö",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-cell-varo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-cell-varo' })
    },
    {
      path: '/sodra-cell-varo',
      name: "Södra Cell Värö",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-cell-varo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-cell-varo' })
    },
    {
      path: '/ulvatorp',
      name: "Ulvatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulvatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulvatorp' })
    },
    {
      path: '/vastra-derome',
      name: "Västra Derome",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastra-derome' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastra-derome' })
    },
    {
      path: '/stenkyrka-bo',
      name: "Stenkyrka-Bö",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenkyrka-bo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenkyrka-bo' })
    },
    {
      path: '/kyrkerod',
      name: "Kyrkeröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'kyrkerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kyrkerod' })
    },
    {
      path: '/vast-tangen',
      name: "Väst-Tången",
      component: ProjectPage,
      extraProps: { projectUrl: 'vast-tangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vast-tangen' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'taranderod,-lurs-amdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taranderod,-lurs-amdal' })
    },
    {
      path: '/vindpark-sogardsfjallet',
      name: "Vindpark Sögårdsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sogardsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sogardsfjallet' })
    },
    {
      path: '/mungserod',
      name: "Mungseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'mungserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mungserod' })
    },
    {
      path: '/mungserod/gurserod/skaverod',
      name: "Mungseröd/Gurseröd/Skaveröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'mungserod/gurserod/skaverod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mungserod/gurserod/skaverod' })
    },
    {
      path: '/skallerod',
      name: "Skalleröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallerod' })
    },
    {
      path: '/hud',
      name: "Hud",
      component: ProjectPage,
      extraProps: { projectUrl: 'hud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hud' })
    },
    {
      path: '/vindpark-korpekullen',
      name: "Vindpark Korpekullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-korpekullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-korpekullen' })
    },
    {
      path: '/grafsnas-vindpark',
      name: "Gräfsnäs Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'grafsnas-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grafsnas-vindpark' })
    },
    {
      path: '/vanervind',
      name: "Vänervind",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanervind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanervind' })
    },
    {
      path: '/vastergarden-1',
      name: "Västergården 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastergarden-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastergarden-1' })
    },
    {
      path: '/karrsbackens-vindpark',
      name: "Kärrsbackens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'karrsbackens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karrsbackens-vindpark' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'prassebergens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prassebergens-vindpark' })
    },
    {
      path: '/prassebergens-vindpark',
      name: "Prässebergens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'prassebergens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prassebergens-vindpark' })
    },
    {
      path: '/sannersby',
      name: "Sannersby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sannersby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sannersby' })
    },
    {
      path: '/vindkraftspark-bjorketorp',
      name: "Vindkraftspark Björketorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftspark-bjorketorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftspark-bjorketorp' })
    },
    {
      path: '/trollebergsmossen',
      name: "Trollebergsmossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'trollebergsmossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trollebergsmossen' })
    },
    {
      path: '/vindkraft-örevattenasen',
      name: "Vindkraft Örevattenåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-örevattenasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-örevattenasen' })
    },
    {
      path: '/simmersrod',
      name: "Simmersröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'simmersrod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'simmersrod' })
    },
    {
      path: '/vindpark-krakerod',
      name: "Vindpark Kråkeröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-krakerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-krakerod' })
    },
    {
      path: '/frugarden',
      name: "Frugården",
      component: ProjectPage,
      extraProps: { projectUrl: 'frugarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frugarden' })
    },
    {
      path: '/skogaryd',
      name: "Skogaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogaryd' })
    },
    {
      path: '/bondegarde',
      name: "Bondegärde",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondegarde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondegarde' })
    },
    {
      path: '/froskog-vindkraftpark,-alt-a',
      name: "Fröskog vindkraftpark, alt A",
      component: ProjectPage,
      extraProps: { projectUrl: 'froskog-vindkraftpark,-alt-a' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froskog-vindkraftpark,-alt-a' })
    },
    {
      path: '/grevbacks-munkebo',
      name: "Grevbäcks Munkebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'grevbacks-munkebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grevbacks-munkebo' })
    },
    {
      path: '/karlsberg',
      name: "Karlsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlsberg' })
    },
    {
      path: '/anneberg',
      name: "Anneberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'anneberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'anneberg' })
    },
    {
      path: '/dimbo,-dimboholm',
      name: "Dimbo, Dimboholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'dimbo,-dimboholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dimbo,-dimboholm' })
    },
    {
      path: '/rammarehemmet',
      name: "Råmmarehemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'rammarehemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rammarehemmet' })
    },
    {
      path: '/kalleberg',
      name: "Källeberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalleberg' })
    },
    {
      path: '/rosenskog-vindpark',
      name: "Rosenskog Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog-vindpark' })
    },
    {
      path: '/ryttersfjall',
      name: "Ryttersfjäll",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryttersfjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryttersfjall' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'backhammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backhammar' })
    },
    {
      path: '/ramsnas',
      name: "Ramsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsnas' })
    },
    {
      path: '/händene',
      name: "HÄNDENE",
      component: ProjectPage,
      extraProps: { projectUrl: 'händene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'händene' })
    },
    {
      path: '/lilla-solberga',
      name: "Lilla Solberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-solberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-solberga' })
    },
    {
      path: '/skutskar',
      name: "Skutskär",
      component: ProjectPage,
      extraProps: { projectUrl: 'skutskar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skutskar' })
    },
    {
      path: '/koby-4-verk',
      name: "Koby 4 verk",
      component: ProjectPage,
      extraProps: { projectUrl: 'koby-4-verk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'koby-4-verk' })
    },
    {
      path: '/stockaryd',
      name: "Stockaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'stockaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stockaryd' })
    },
    {
      path: '/hylletofta',
      name: "Hylletofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'hylletofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hylletofta' })
    },
    {
      path: '/vraneke',
      name: "Vraneke",
      component: ProjectPage,
      extraProps: { projectUrl: 'vraneke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vraneke' })
    },
    {
      path: '/nathult',
      name: "Nåthult",
      component: ProjectPage,
      extraProps: { projectUrl: 'nathult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nathult' })
    },
    {
      path: '/holma',
      name: "Holma",
      component: ProjectPage,
      extraProps: { projectUrl: 'holma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holma' })
    },
    {
      path: '/trolleboda',
      name: "Trolleboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'trolleboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trolleboda' })
    },
    {
      path: '/bjornhovda',
      name: "Björnhovda",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornhovda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornhovda' })
    },
    {
      path: '/barby',
      name: "Bårby",
      component: ProjectPage,
      extraProps: { projectUrl: 'barby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barby' })
    },
    {
      path: '/kalkstad',
      name: "Kalkstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalkstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalkstad' })
    },
    {
      path: '/kristinelund',
      name: "Kristinelund",
      component: ProjectPage,
      extraProps: { projectUrl: 'kristinelund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kristinelund' })
    },
    {
      path: '/sandby',
      name: "Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandby' })
    },
    {
      path: '/stora-brunneby',
      name: "Stora Brunneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-brunneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-brunneby' })
    },
    {
      path: '/torp-ullevi',
      name: "Torp Ullevi",
      component: ProjectPage,
      extraProps: { projectUrl: 'torp-ullevi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torp-ullevi' })
    },
    {
      path: '/tornbotten-i',
      name: "Törnbotten I",
      component: ProjectPage,
      extraProps: { projectUrl: 'tornbotten-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tornbotten-i' })
    },
    {
      path: '/ullevi',
      name: "Ullevi",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullevi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullevi' })
    },
    {
      path: '/övertorp-12',
      name: "Övertorp 12",
      component: ProjectPage,
      extraProps: { projectUrl: 'övertorp-12' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övertorp-12' })
    },
    {
      path: '/brinkabo',
      name: "Brinkabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'brinkabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brinkabo' })
    },
    {
      path: '/sorvik',
      name: "Sörvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'sorvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sorvik' })
    },
    {
      path: '/tindered',
      name: "Tindered",
      component: ProjectPage,
      extraProps: { projectUrl: 'tindered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tindered' })
    },
    {
      path: '/ramsberg-syd',
      name: "Ramsberg Syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsberg-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsberg-syd' })
    },
    {
      path: '/robergsfjallet',
      name: "Röbergsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'robergsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'robergsfjallet' })
    },
    {
      path: '/tavelberget',
      name: "Tavelberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'tavelberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tavelberget' })
    },
    {
      path: '/kaptensberget',
      name: "Kaptensberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kaptensberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kaptensberget' })
    },
    {
      path: '/vindpark-brannasen',
      name: "Vindpark Brännåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-brannasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-brannasen' })
    },
    {
      path: '/ljusne/vallvik',
      name: "Ljusne/Vallvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljusne/vallvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljusne/vallvik' })
    },
    {
      path: '/storasen',
      name: "Storåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'storasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storasen' })
    },
    {
      path: '/vindpark-hacksta',
      name: "Vindpark Håcksta",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hacksta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hacksta' })
    },
    {
      path: '/stormon',
      name: "Stormon",
      component: ProjectPage,
      extraProps: { projectUrl: 'stormon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stormon' })
    },
    {
      path: '/holms-vastbyn',
      name: "Holms-Västbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'holms-vastbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holms-vastbyn' })
    },
    {
      path: '/sundsskogen',
      name: "SUNDSSKOGEN",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundsskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundsskogen' })
    },
    {
      path: '/rammeldalsberget',
      name: "Rammeldalsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'rammeldalsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rammeldalsberget' })
    },
    {
      path: '/stigshojden',
      name: "Stigshöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'stigshojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stigshojden' })
    },
    {
      path: '/hogklippen',
      name: "Högklippen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogklippen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogklippen' })
    },
    {
      path: '/ingridsveberget',
      name: "Ingridsveberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingridsveberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingridsveberget' })
    },
    {
      path: '/bodbergsplatan',
      name: "Bodbergsplatån",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodbergsplatan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodbergsplatan' })
    },
    {
      path: '/digerberget-1.',
      name: "Digerberget 1.",
      component: ProjectPage,
      extraProps: { projectUrl: 'digerberget-1.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'digerberget-1.' })
    },
    {
      path: '/granberget-1',
      name: "Granberget 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'granberget-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granberget-1' })
    },
    {
      path: '/granberget-2',
      name: "Granberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'granberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granberget-2' })
    },
    {
      path: '/storberget',
      name: "Storberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'storberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storberget' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornefors' })
    },
    {
      path: '/assjo-1,-ella',
      name: "Assjö 1, Ella",
      component: ProjectPage,
      extraProps: { projectUrl: 'assjo-1,-ella' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'assjo-1,-ella' })
    },
    {
      path: '/vivian',
      name: "Vivian",
      component: ProjectPage,
      extraProps: { projectUrl: 'vivian' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vivian' })
    },
    {
      path: '/mats-eriksson-vindkraftverk-1',
      name: "Mats Eriksson vindkraftverk 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'mats-eriksson-vindkraftverk-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mats-eriksson-vindkraftverk-1' })
    },
    {
      path: '/ljustero-vind-vindkraftverk-2',
      name: "Ljusterö Vind vindkraftverk 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljustero-vind-vindkraftverk-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljustero-vind-vindkraftverk-2' })
    },
    {
      path: '/ekero-asknas',
      name: "Ekerö Asknäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekero-asknas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekero-asknas' })
    },
    {
      path: '/stockby',
      name: "Stockby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stockby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stockby' })
    },
    {
      path: '/eknas',
      name: "Eknäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'eknas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eknas' })
    },
    {
      path: '/uto',
      name: "Utö",
      component: ProjectPage,
      extraProps: { projectUrl: 'uto' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uto' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bjorko',
      name: "Björkö",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorko' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorko' })
    },
    {
      path: '/liesta',
      name: "Liesta",
      component: ProjectPage,
      extraProps: { projectUrl: 'liesta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'liesta' })
    },
    {
      path: '/svenska-hogarna',
      name: "Svenska Högarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenska-hogarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenska-hogarna' })
    },
    {
      path: '/bista',
      name: "Bista",
      component: ProjectPage,
      extraProps: { projectUrl: 'bista' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bista' })
    },
    {
      path: '/hogsta',
      name: "Högsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogsta' })
    },
    {
      path: '/hogsta',
      name: "Högsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogsta' })
    },
    {
      path: '/hamptappan',
      name: "Hamptäppan",
      component: ProjectPage,
      extraProps: { projectUrl: 'hamptappan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hamptappan' })
    },
    {
      path: '/litslena-djurby',
      name: "Litslena djurby",
      component: ProjectPage,
      extraProps: { projectUrl: 'litslena-djurby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'litslena-djurby' })
    },
    {
      path: '/tawind-ab',
      name: "Tawind AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'tawind-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tawind-ab' })
    },
    {
      path: '/silvia-af',
      name: "Silvia af",
      component: ProjectPage,
      extraProps: { projectUrl: 'silvia-af' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'silvia-af' })
    },
    {
      path: '/skarpangen',
      name: "Skarpängen",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarpangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarpangen' })
    },
    {
      path: '/sneby',
      name: "Sneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sneby' })
    },
    {
      path: '/sundet-3-verk',
      name: "Sundet 3 verk",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundet-3-verk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundet-3-verk' })
    },
    {
      path: '/varfrukyrka',
      name: "Vårfrukyrka",
      component: ProjectPage,
      extraProps: { projectUrl: 'varfrukyrka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varfrukyrka' })
    },
    {
      path: '/rickeby',
      name: "Rickeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'rickeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rickeby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/århammar',
      name: "Århammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'århammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'århammar' })
    },
    {
      path: '/äskoping',
      name: "Äsköping",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskoping' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskoping' })
    },
    {
      path: '/dagsjon',
      name: "Dagsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'dagsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dagsjon' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vidokna',
      name: "Vidökna",
      component: ProjectPage,
      extraProps: { projectUrl: 'vidokna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vidokna' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'fredriksdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fredriksdal' })
    },
    {
      path: '/älskebo',
      name: "Älskebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'älskebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älskebo' })
    },
    {
      path: '/ärnanas',
      name: "Ärnanäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ärnanas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ärnanas' })
    },
    {
      path: '/skog-(tritteboda)',
      name: "Skog (Tritteboda)",
      component: ProjectPage,
      extraProps: { projectUrl: 'skog-(tritteboda)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skog-(tritteboda)' })
    },
    {
      path: '/bjarkaryd',
      name: "Bjärkaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjarkaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjarkaryd' })
    },
    {
      path: '/lovshult',
      name: "Lövshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'lovshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lovshult' })
    },
    {
      path: '/nottebacks-heda',
      name: "Nottebäcks-Heda",
      component: ProjectPage,
      extraProps: { projectUrl: 'nottebacks-heda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nottebacks-heda' })
    },
    {
      path: '/vraneke',
      name: "Vraneke",
      component: ProjectPage,
      extraProps: { projectUrl: 'vraneke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vraneke' })
    },
    {
      path: '/nottebacks-nobbele',
      name: "Nottebäcks-Nöbbele",
      component: ProjectPage,
      extraProps: { projectUrl: 'nottebacks-nobbele' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nottebacks-nobbele' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortelek' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortelek' })
    },
    {
      path: '/nottebacks-heda',
      name: "Nottebäcks-Heda",
      component: ProjectPage,
      extraProps: { projectUrl: 'nottebacks-heda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nottebacks-heda' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortelek' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortelek' })
    },
    {
      path: '/hageskruv',
      name: "Hageskruv",
      component: ProjectPage,
      extraProps: { projectUrl: 'hageskruv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hageskruv' })
    },
    {
      path: '/mortelek',
      name: "Mörtelek",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortelek' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortelek' })
    },
    {
      path: '/billy-vind-ab',
      name: "Billy Vind AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'billy-vind-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'billy-vind-ab' })
    },
    {
      path: '/billy-vind-ab',
      name: "Billy Vind AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'billy-vind-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'billy-vind-ab' })
    },
    {
      path: '/linder-farmell',
      name: "Linder Färmell",
      component: ProjectPage,
      extraProps: { projectUrl: 'linder-farmell' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'linder-farmell' })
    },
    {
      path: '/elensas',
      name: "Elensås",
      component: ProjectPage,
      extraProps: { projectUrl: 'elensas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elensas' })
    },
    {
      path: '/karryd',
      name: "Karryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'karryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karryd' })
    },
    {
      path: '/malajord',
      name: "Målajord",
      component: ProjectPage,
      extraProps: { projectUrl: 'malajord' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'malajord' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bjornhovda-ii',
      name: "Björnhovda II",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornhovda-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornhovda-ii' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'gettlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gettlinge' })
    },
    {
      path: '/gronhogen',
      name: "Grönhögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'gronhogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gronhogen' })
    },
    {
      path: '/gardby',
      name: "Gårdby",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardby' })
    },
    {
      path: '/holmetorp',
      name: "Holmetorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmetorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmetorp' })
    },
    {
      path: '/lindby',
      name: "Lindby",
      component: ProjectPage,
      extraProps: { projectUrl: 'lindby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lindby' })
    },
    {
      path: '/langralla',
      name: "Långrälla",
      component: ProjectPage,
      extraProps: { projectUrl: 'langralla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langralla' })
    },
    {
      path: '/parboang-gard',
      name: "Parboäng Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'parboang-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'parboang-gard' })
    },
    {
      path: '/svibo',
      name: "Svibo",
      component: ProjectPage,
      extraProps: { projectUrl: 'svibo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svibo' })
    },
    {
      path: '/vastergarden',
      name: "Västergården",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastergarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastergarden' })
    },
    {
      path: '/degerhamn-piren-ii',
      name: "Degerhamn piren II",
      component: ProjectPage,
      extraProps: { projectUrl: 'degerhamn-piren-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'degerhamn-piren-ii' })
    },
    {
      path: '/degerhamn_4_1',
      name: "Degerhamn_4_1",
      component: ProjectPage,
      extraProps: { projectUrl: 'degerhamn_4_1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'degerhamn_4_1' })
    },
    {
      path: '/rogers',
      name: "Rogers",
      component: ProjectPage,
      extraProps: { projectUrl: 'rogers' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rogers' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'gettlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gettlinge' })
    },
    {
      path: '/gettlinge',
      name: "Gettlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'gettlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gettlinge' })
    },
    {
      path: '/sodra-backebo',
      name: "Södra Bäckebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-backebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-backebo' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortorp' })
    },
    {
      path: '/mortorp-torsboda',
      name: "Mortorp Törsboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortorp-torsboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortorp-torsboda' })
    },
    {
      path: '/hagby-1:2',
      name: "Hagby 1:2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagby-1:2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagby-1:2' })
    },
    {
      path: '/ryssbylund,-nobble-och-stojby',
      name: "Ryssbylund, Nöbble och Stojby",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryssbylund,-nobble-och-stojby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryssbylund,-nobble-och-stojby' })
    },
    {
      path: '/kulltorp',
      name: "Kulltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kulltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kulltorp' })
    },
    {
      path: '/vassmolosa',
      name: "Vassmolösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassmolosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassmolosa' })
    },
    {
      path: '/bottorp',
      name: "Bottorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bottorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bottorp' })
    },
    {
      path: '/ålem-gunnarsbo',
      name: "Ålem Gunnarsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'ålem-gunnarsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ålem-gunnarsbo' })
    },
    {
      path: '/elverslosa',
      name: "Elverslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'elverslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elverslosa' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vassmolosa-kulltorp',
      name: "Vassmolösa Kulltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassmolosa-kulltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassmolosa-kulltorp' })
    },
    {
      path: '/kulltorp-mortorp',
      name: "Kulltorp Mortorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kulltorp-mortorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kulltorp-mortorp' })
    },
    {
      path: '/stenninge_3_48',
      name: "Stenninge_3_48",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenninge_3_48' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenninge_3_48' })
    },
    {
      path: '/freja-olsang',
      name: "Freja Olsäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'freja-olsang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'freja-olsang' })
    },
    {
      path: '/gudingen-(sturko-2)',
      name: "Gudingen (Sturkö 2)",
      component: ProjectPage,
      extraProps: { projectUrl: 'gudingen-(sturko-2)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gudingen-(sturko-2)' })
    },
    {
      path: '/ådan-(sturko-1)',
      name: "Ådan (Sturkö 1)",
      component: ProjectPage,
      extraProps: { projectUrl: 'ådan-(sturko-1)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ådan-(sturko-1)' })
    },
    {
      path: '/harstorp-1',
      name: "Harstorp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'harstorp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harstorp-1' })
    },
    {
      path: '/hermansmala',
      name: "Hermansmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hermansmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hermansmala' })
    },
    {
      path: '/svalemala',
      name: "Svalemåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'svalemala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svalemala' })
    },
    {
      path: '/lorby-3',
      name: "Lörby 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-3' })
    },
    {
      path: '/lorby-1-toke',
      name: "Lörby 1 Toke",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-1-toke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-1-toke' })
    },
    {
      path: '/lorby-6-lorby/ysane',
      name: "Lörby 6 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-6-lorby/ysane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-6-lorby/ysane' })
    },
    {
      path: '/lorby-5-lorby/ysane',
      name: "Lörby 5 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-5-lorby/ysane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-5-lorby/ysane' })
    },
    {
      path: '/lorby-4-lorby/ysane',
      name: "Lörby 4 Lörby/Ysane",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-4-lorby/ysane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-4-lorby/ysane' })
    },
    {
      path: '/lorby-2-krok',
      name: "Lörby 2 Krok",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-2-krok' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-2-krok' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/horby',
      name: "Hörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'horby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horby' })
    },
    {
      path: '/enslov',
      name: "Enslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'enslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'enslov' })
    },
    {
      path: '/vindkraftverk-skavboke',
      name: "Vindkraftverk Skavböke",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-skavboke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-skavboke' })
    },
    {
      path: '/lerviken',
      name: "Lerviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'lerviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lerviken' })
    },
    {
      path: '/oppboga',
      name: "Oppboga",
      component: ProjectPage,
      extraProps: { projectUrl: 'oppboga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'oppboga' })
    },
    {
      path: '/öby-gard',
      name: "Öby gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'öby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öby-gard' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'äppelbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äppelbo' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'äppelbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äppelbo' })
    },
    {
      path: '/äppelbo',
      name: "Äppelbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'äppelbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äppelbo' })
    },
    {
      path: '/uvberget-hanna',
      name: "Uvberget Hanna",
      component: ProjectPage,
      extraProps: { projectUrl: 'uvberget-hanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uvberget-hanna' })
    },
    {
      path: '/uvberget-boel',
      name: "Uvberget Boel",
      component: ProjectPage,
      extraProps: { projectUrl: 'uvberget-boel' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uvberget-boel' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas' })
    },
    {
      path: '/paljakoberget',
      name: "Paljakoberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'paljakoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'paljakoberget' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/stratjara',
      name: "Stråtjära",
      component: ProjectPage,
      extraProps: { projectUrl: 'stratjara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stratjara' })
    },
    {
      path: '/klafson',
      name: "Kläfsön",
      component: ProjectPage,
      extraProps: { projectUrl: 'klafson' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klafson' })
    },
    {
      path: '/rodmyrberget',
      name: "Rödmyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodmyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodmyrberget' })
    },
    {
      path: '/dalom',
      name: "Dalom",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalom' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalom' })
    },
    {
      path: '/vardkasberget',
      name: "Vårdkasberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vardkasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vardkasberget' })
    },
    {
      path: '/verkstaden-4',
      name: "Verkstaden 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'verkstaden-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'verkstaden-4' })
    },
    {
      path: '/bjorkon',
      name: "Björkön",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkon' })
    },
    {
      path: '/hornoberget',
      name: "Hornöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornoberget' })
    },
    {
      path: '/nyland',
      name: "Nyland",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyland' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyland' })
    },
    {
      path: '/skagsudde-linda',
      name: "Skagsudde Linda",
      component: ProjectPage,
      extraProps: { projectUrl: 'skagsudde-linda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skagsudde-linda' })
    },
    {
      path: '/norrvage',
      name: "Norrvåge",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrvage' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrvage' })
    },
    {
      path: '/norrvage',
      name: "Norrvåge",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrvage' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrvage' })
    },
    {
      path: '/vasterkal',
      name: "Västerkäl",
      component: ProjectPage,
      extraProps: { projectUrl: 'vasterkal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vasterkal' })
    },
    {
      path: '/almasa',
      name: "Almåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'almasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almasa' })
    },
    {
      path: '/669828001-vallrun',
      name: "669828001 Vallrun",
      component: ProjectPage,
      extraProps: { projectUrl: '669828001-vallrun' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '669828001-vallrun' })
    },
    {
      path: '/hallingarna-vind-ek-for',
      name: "Hällingarna Vind ek för",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallingarna-vind-ek-for' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallingarna-vind-ek-for' })
    },
    {
      path: '/harrsjon',
      name: "Harrsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'harrsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harrsjon' })
    },
    {
      path: '/bratteggen-1',
      name: "Bratteggen 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bratteggen-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bratteggen-1' })
    },
    {
      path: '/bratteggen-2',
      name: "Bratteggen 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'bratteggen-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bratteggen-2' })
    },
    {
      path: '/grasjon-anja',
      name: "Gråsjön Anja",
      component: ProjectPage,
      extraProps: { projectUrl: 'grasjon-anja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grasjon-anja' })
    },
    {
      path: '/överhallen',
      name: "Överhallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'överhallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'överhallen' })
    },
    {
      path: '/hallen',
      name: "Hallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallen' })
    },
    {
      path: '/bydalen',
      name: "Bydalen",
      component: ProjectPage,
      extraProps: { projectUrl: 'bydalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bydalen' })
    },
    {
      path: '/kommerberget',
      name: "Kommerberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kommerberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kommerberget' })
    },
    {
      path: '/bjornskallen,-kajsa',
      name: "Björnskallen, Kajsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornskallen,-kajsa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornskallen,-kajsa' })
    },
    {
      path: '/karlsbacks-vindkraftverk',
      name: "Karlsbäcks Vindkraftverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlsbacks-vindkraftverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlsbacks-vindkraftverk' })
    },
    {
      path: '/östest-kroket',
      name: "Östest-Kröket",
      component: ProjectPage,
      extraProps: { projectUrl: 'östest-kroket' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östest-kroket' })
    },
    {
      path: '/digerberget',
      name: "Digerberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'digerberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'digerberget' })
    },
    {
      path: '/randingsvallen',
      name: "Rändingsvallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'randingsvallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'randingsvallen' })
    },
    {
      path: '/jarnasklubb-vindkraftstation',
      name: "Järnäsklubb vindkraftstation",
      component: ProjectPage,
      extraProps: { projectUrl: 'jarnasklubb-vindkraftstation' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jarnasklubb-vindkraftstation' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/skarvsjoby',
      name: "Skarvsjöby",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarvsjoby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarvsjoby' })
    },
    {
      path: '/ristrask',
      name: "Risträsk",
      component: ProjectPage,
      extraProps: { projectUrl: 'ristrask' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ristrask' })
    },
    {
      path: '/latikberg',
      name: "Latikberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'latikberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'latikberg' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectUrl: 'klimpfjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klimpfjall' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectUrl: 'klimpfjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klimpfjall' })
    },
    {
      path: '/klimpfjall',
      name: "Klimpfjäll",
      component: ProjectPage,
      extraProps: { projectUrl: 'klimpfjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klimpfjall' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornefors' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornefors' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmsund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmsund' })
    },
    {
      path: '/klutmark',
      name: "Klutmark",
      component: ProjectPage,
      extraProps: { projectUrl: 'klutmark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klutmark' })
    },
    {
      path: '/burea',
      name: "Bureå",
      component: ProjectPage,
      extraProps: { projectUrl: 'burea' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'burea' })
    },
    {
      path: '/bure-1',
      name: "Bure 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bure-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bure-1' })
    },
    {
      path: '/bure-2',
      name: "Bure 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'bure-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bure-2' })
    },
    {
      path: '/bure-3',
      name: "Bure 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'bure-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bure-3' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vindmannen',
      name: "Vindmannen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindmannen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindmannen' })
    },
    {
      path: '/siksundson',
      name: "Siksundsön",
      component: ProjectPage,
      extraProps: { projectUrl: 'siksundson' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'siksundson' })
    },
    {
      path: '/rian',
      name: "Rian",
      component: ProjectPage,
      extraProps: { projectUrl: 'rian' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rian' })
    },
    {
      path: '/haljelot',
      name: "Häljelöt",
      component: ProjectPage,
      extraProps: { projectUrl: 'haljelot' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haljelot' })
    },
    {
      path: '/grytsjon',
      name: "Grytsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'grytsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grytsjon' })
    },
    {
      path: '/suttene',
      name: "Suttene",
      component: ProjectPage,
      extraProps: { projectUrl: 'suttene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'suttene' })
    },
    {
      path: '/tormoserod-vindpark',
      name: "Tormoseröd Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'tormoserod-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tormoserod-vindpark' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'tormoserodsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tormoserodsfjallet' })
    },
    {
      path: '/lunnekullen',
      name: "Lunnekullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunnekullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunnekullen' })
    },
    {
      path: '/vindkraft-granan',
      name: "Vindkraft Granan",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-granan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-granan' })
    },
    {
      path: '/projekt-stenhult',
      name: "Projekt Stenhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-stenhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-stenhult' })
    },
    {
      path: '/tormoserodsfjallet',
      name: "Tormoserödsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'tormoserodsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tormoserodsfjallet' })
    },
    {
      path: '/vindkraft-granan',
      name: "Vindkraft Granan",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-granan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-granan' })
    },
    {
      path: '/skogaryd',
      name: "Skogaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogaryd' })
    },
    {
      path: '/vindkraftpark-grafsnas-och-livered-m.fl.',
      name: "Vindkraftpark Gräfsnäs och Livered m.fl.",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-grafsnas-och-livered-m.fl.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-grafsnas-och-livered-m.fl.' })
    },
    {
      path: '/grafsnas-vindpark',
      name: "Gräfsnäs Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'grafsnas-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grafsnas-vindpark' })
    },
    {
      path: '/vindpark-sjovik/önaholm',
      name: "Vindpark Sjövik/Önaholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sjovik/önaholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sjovik/önaholm' })
    },
    {
      path: '/kymbo',
      name: "Kymbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'kymbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kymbo' })
    },
    {
      path: '/sten-kalles-grund',
      name: "Sten-Kalles grund",
      component: ProjectPage,
      extraProps: { projectUrl: 'sten-kalles-grund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sten-kalles-grund' })
    },
    {
      path: '/vindpark-sjovik/önaholm',
      name: "Vindpark Sjövik/Önaholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sjovik/önaholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sjovik/önaholm' })
    },
    {
      path: '/grevekulla',
      name: "Grevekulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'grevekulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grevekulla' })
    },
    {
      path: '/östkinds-haradsallmanning',
      name: "Östkinds Häradsallmänning",
      component: ProjectPage,
      extraProps: { projectUrl: 'östkinds-haradsallmanning' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östkinds-haradsallmanning' })
    },
    {
      path: '/toronsborg',
      name: "Torönsborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'toronsborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'toronsborg' })
    },
    {
      path: '/bjorka',
      name: "Björka",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorka' })
    },
    {
      path: '/jonsbo',
      name: "Jonsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'jonsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jonsbo' })
    },
    {
      path: '/ryssbol',
      name: "Ryssbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryssbol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryssbol' })
    },
    {
      path: '/frollinge',
      name: "Fröllinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'frollinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frollinge' })
    },
    {
      path: '/uppnora',
      name: "Uppnora",
      component: ProjectPage,
      extraProps: { projectUrl: 'uppnora' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uppnora' })
    },
    {
      path: '/knared',
      name: "Knäred",
      component: ProjectPage,
      extraProps: { projectUrl: 'knared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knared' })
    },
    {
      path: '/oxhult',
      name: "Oxhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'oxhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'oxhult' })
    },
    {
      path: '/kaphult-vindkraftpark',
      name: "Kåphult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'kaphult-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kaphult-vindkraftpark' })
    },
    {
      path: '/skogaby',
      name: "Skogaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogaby' })
    },
    {
      path: '/tommared',
      name: "Tommared",
      component: ProjectPage,
      extraProps: { projectUrl: 'tommared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tommared' })
    },
    {
      path: '/uddared',
      name: "Uddared",
      component: ProjectPage,
      extraProps: { projectUrl: 'uddared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uddared' })
    },
    {
      path: '/askomebjar',
      name: "Askomebjär",
      component: ProjectPage,
      extraProps: { projectUrl: 'askomebjar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'askomebjar' })
    },
    {
      path: '/bjornasen',
      name: "Björnåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornasen' })
    },
    {
      path: '/hjuleberg-vindkraftpark',
      name: "Hjuleberg Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjuleberg-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjuleberg-vindkraftpark' })
    },
    {
      path: '/okome',
      name: "Okome",
      component: ProjectPage,
      extraProps: { projectUrl: 'okome' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'okome' })
    },
    {
      path: '/äskasen',
      name: "Äskåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskasen' })
    },
    {
      path: '/sallstorp',
      name: "Sällstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sallstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sallstorp' })
    },
    {
      path: '/iglasjon',
      name: "Iglasjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'iglasjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'iglasjon' })
    },
    {
      path: '/garete-rannekarr',
      name: "Garete-Rannekärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'garete-rannekarr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'garete-rannekarr' })
    },
    {
      path: '/varekil',
      name: "Varekil",
      component: ProjectPage,
      extraProps: { projectUrl: 'varekil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varekil' })
    },
    {
      path: '/bratton',
      name: "Brattön",
      component: ProjectPage,
      extraProps: { projectUrl: 'bratton' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bratton' })
    },
    {
      path: '/svarteborgs-skogen',
      name: "Svarteborgs-Skogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarteborgs-skogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarteborgs-skogen' })
    },
    {
      path: '/vindpark-bratton-salelund',
      name: "Vindpark Brattön-Sälelund",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-bratton-salelund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-bratton-salelund' })
    },
    {
      path: '/vindpark-jarmunderod',
      name: "Vindpark Järmunderöd",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-jarmunderod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-jarmunderod' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod/gurserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod/gurserod' })
    },
    {
      path: '/torgersrod,-habackemarken',
      name: "Torgersröd, Håbäckemarken",
      component: ProjectPage,
      extraProps: { projectUrl: 'torgersrod,-habackemarken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torgersrod,-habackemarken' })
    },
    {
      path: '/vindpark-sogardsfjallet',
      name: "Vindpark Sögårdsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sogardsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sogardsfjallet' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod/gurserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod/gurserod' })
    },
    {
      path: '/bramserod',
      name: "Bramseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'bramserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bramserod' })
    },
    {
      path: '/vindpark-tagerod',
      name: "Vindpark Tågeröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-tagerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-tagerod' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'taranderod,-lurs-amdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taranderod,-lurs-amdal' })
    },
    {
      path: '/toftedalsfjallet',
      name: "Töftedalsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'toftedalsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'toftedalsfjallet' })
    },
    {
      path: '/toftedalsfjallet',
      name: "Töftedalsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'toftedalsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'toftedalsfjallet' })
    },
    {
      path: '/vindpark-habol',
      name: "Vindpark Håbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-habol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-habol' })
    },
    {
      path: '/projekt-vinnsater',
      name: "Projekt Vinnsäter",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-vinnsater' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-vinnsater' })
    },
    {
      path: '/vindpark-ödeborgsfjallet',
      name: "Vindpark Ödeborgsfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ödeborgsfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ödeborgsfjallet' })
    },
    {
      path: '/ravbacka-vindkraftpark',
      name: "Rävbacka Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravbacka-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravbacka-vindkraftpark' })
    },
    {
      path: '/öijared',
      name: "Öijared",
      component: ProjectPage,
      extraProps: { projectUrl: 'öijared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öijared' })
    },
    {
      path: '/vindpark-brevikshult',
      name: "Vindpark Brevikshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-brevikshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-brevikshult' })
    },
    {
      path: '/vindkraftpark-älvshult',
      name: "Vindkraftpark Älvshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-älvshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-älvshult' })
    },
    {
      path: '/dingelvik',
      name: "Dingelvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'dingelvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dingelvik' })
    },
    {
      path: '/skuggetorp--vindpark',
      name: "Skuggetorp  vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'skuggetorp--vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skuggetorp--vindpark' })
    },
    {
      path: '/vindpark-ransliden',
      name: "Vindpark Ränsliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ransliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ransliden' })
    },
    {
      path: '/gategardens-vindpark',
      name: "Gategårdens vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'gategardens-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gategardens-vindpark' })
    },
    {
      path: '/vindkraftprojekt-karrsbacken',
      name: "Vindkraftprojekt Kärrsbacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftprojekt-karrsbacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftprojekt-karrsbacken' })
    },
    {
      path: '/nedra-hagen',
      name: "Nedra Hagen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nedra-hagen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nedra-hagen' })
    },
    {
      path: '/satila-vindkraftpark',
      name: "Sätila Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'satila-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'satila-vindkraftpark' })
    },
    {
      path: '/bjorketorp',
      name: "Björketorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorketorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorketorp' })
    },
    {
      path: '/öxaback',
      name: "Öxabäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'öxaback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öxaback' })
    },
    {
      path: '/vindkraftspark-stenhult',
      name: "Vindkraftspark Stenhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftspark-stenhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftspark-stenhult' })
    },
    {
      path: '/vanga-och-stenberga',
      name: "Vånga och Stenberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanga-och-stenberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanga-och-stenberga' })
    },
    {
      path: '/vindkraftpark-fimmerstad',
      name: "Vindkraftpark Fimmerstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-fimmerstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-fimmerstad' })
    },
    {
      path: '/fagremo',
      name: "Fägremo",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagremo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagremo' })
    },
    {
      path: '/arendal/risholmen',
      name: "Arendal/Risholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'arendal/risholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arendal/risholmen' })
    },
    {
      path: '/vavra-berg',
      name: "Vävra Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vavra-berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vavra-berg' })
    },
    {
      path: '/vindkraftpark-preem/lysehogen',
      name: "Vindkraftpark Preem/LyseHogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-preem/lysehogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-preem/lysehogen' })
    },
    {
      path: '/gunnarby',
      name: "Gunnarby",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarby' })
    },
    {
      path: '/kråkeröd',
      name: "KRÅKERÖD",
      component: ProjectPage,
      extraProps: { projectUrl: 'kråkeröd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kråkeröd' })
    },
    {
      path: '/ljungkile-norra',
      name: "Ljungkile Norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungkile-norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungkile-norra' })
    },
    {
      path: '/ljungkile-hoven',
      name: "Ljungkile-Hoven",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungkile-hoven' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungkile-hoven' })
    },
    {
      path: '/vindpark-forshalla',
      name: "Vindpark Forshälla",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-forshalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-forshalla' })
    },
    {
      path: '/vindpark-femstenaberg',
      name: "Vindpark Femstenaberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-femstenaberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-femstenaberg' })
    },
    {
      path: '/äng',
      name: "Äng",
      component: ProjectPage,
      extraProps: { projectUrl: 'äng' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äng' })
    },
    {
      path: '/tolvmanstegen',
      name: "Tolvmanstegen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tolvmanstegen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tolvmanstegen' })
    },
    {
      path: '/nunntorp',
      name: "Nunntorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'nunntorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nunntorp' })
    },
    {
      path: '/larkeskogen-vindkraft',
      name: "Lärkeskogen vindkraft",
      component: ProjectPage,
      extraProps: { projectUrl: 'larkeskogen-vindkraft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larkeskogen-vindkraft' })
    },
    {
      path: '/vindkraftverk-rangedala,-falskog',
      name: "Vindkraftverk Rångedala, Falskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-rangedala,-falskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-rangedala,-falskog' })
    },
    {
      path: '/galtasen',
      name: "Galtåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'galtasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galtasen' })
    },
    {
      path: '/gullered',
      name: "Gullered",
      component: ProjectPage,
      extraProps: { projectUrl: 'gullered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gullered' })
    },
    {
      path: '/gullered-hogshult-vindkraftpark',
      name: "Gullered-Högshult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'gullered-hogshult-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gullered-hogshult-vindkraftpark' })
    },
    {
      path: '/hallunda-timmele',
      name: "Hällunda-Timmele",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallunda-timmele' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallunda-timmele' })
    },
    {
      path: '/marback',
      name: "Marbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'marback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marback' })
    },
    {
      path: '/froskog-vindkraftpark,-alt-a',
      name: "Fröskog vindkraftpark, alt A",
      component: ProjectPage,
      extraProps: { projectUrl: 'froskog-vindkraftpark,-alt-a' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froskog-vindkraftpark,-alt-a' })
    },
    {
      path: '/vindpark-kingebol',
      name: "Vindpark Kingebol",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-kingebol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-kingebol' })
    },
    {
      path: '/vindpark-sjovik',
      name: "Vindpark Sjövik",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-sjovik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-sjovik' })
    },
    {
      path: '/vindpark-ånimskog',
      name: "Vindpark Ånimskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ånimskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ånimskog' })
    },
    {
      path: '/östra-korsbyn',
      name: "Östra Korsbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-korsbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-korsbyn' })
    },
    {
      path: '/sparresater-vindkraftpark',
      name: "Sparresäter Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'sparresater-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sparresater-vindkraftpark' })
    },
    {
      path: '/norra-hulan',
      name: "Norra Hulan",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-hulan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-hulan' })
    },
    {
      path: '/prastbolet-hulan',
      name: "Prästbolet Hulan",
      component: ProjectPage,
      extraProps: { projectUrl: 'prastbolet-hulan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prastbolet-hulan' })
    },
    {
      path: '/velinga',
      name: "Velinga",
      component: ProjectPage,
      extraProps: { projectUrl: 'velinga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'velinga' })
    },
    {
      path: '/naset',
      name: "Näset",
      component: ProjectPage,
      extraProps: { projectUrl: 'naset' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'naset' })
    },
    {
      path: '/årjang-nv',
      name: "Årjäng NV",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-nv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-nv' })
    },
    {
      path: '/årjang-no',
      name: "Årjäng NO",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-no' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-no' })
    },
    {
      path: '/årjang-no',
      name: "Årjäng NO",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-no' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-no' })
    },
    {
      path: '/årjang-sv',
      name: "Årjäng SV",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-sv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-sv' })
    },
    {
      path: '/ölme',
      name: "Ölme",
      component: ProjectPage,
      extraProps: { projectUrl: 'ölme' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ölme' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'backhammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backhammar' })
    },
    {
      path: '/backhammar',
      name: "Bäckhammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'backhammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backhammar' })
    },
    {
      path: '/sattravallen',
      name: "Sättravallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'sattravallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sattravallen' })
    },
    {
      path: '/langmarken',
      name: "Långmarken",
      component: ProjectPage,
      extraProps: { projectUrl: 'langmarken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langmarken' })
    },
    {
      path: '/sunnemo-hakanbol',
      name: "Sunnemo-Håkanbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'sunnemo-hakanbol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sunnemo-hakanbol' })
    },
    {
      path: '/botilsater',
      name: "Botilsäter",
      component: ProjectPage,
      extraProps: { projectUrl: 'botilsater' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'botilsater' })
    },
    {
      path: '/hokhult',
      name: "Hökhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hokhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hokhult' })
    },
    {
      path: '/knappa',
      name: "Knappa",
      component: ProjectPage,
      extraProps: { projectUrl: 'knappa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knappa' })
    },
    {
      path: '/mohultet',
      name: "Mohultet",
      component: ProjectPage,
      extraProps: { projectUrl: 'mohultet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mohultet' })
    },
    {
      path: '/sjonnebol',
      name: "Sjönnebol",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjonnebol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjonnebol' })
    },
    {
      path: '/torserud',
      name: "Torserud",
      component: ProjectPage,
      extraProps: { projectUrl: 'torserud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torserud' })
    },
    {
      path: '/slottsbol',
      name: "Slottsbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'slottsbol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slottsbol' })
    },
    {
      path: '/markeback',
      name: "Markebäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'markeback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'markeback' })
    },
    {
      path: '/loknasparken-nyvarpstrask-(1)',
      name: "Löknäsparken Nyvarpsträsk (1)",
      component: ProjectPage,
      extraProps: { projectUrl: 'loknasparken-nyvarpstrask-(1)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'loknasparken-nyvarpstrask-(1)' })
    },
    {
      path: '/karo',
      name: "Karö",
      component: ProjectPage,
      extraProps: { projectUrl: 'karo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karo' })
    },
    {
      path: '/bjorka',
      name: "Björka",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorka' })
    },
    {
      path: '/bolerum',
      name: "Bolerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'bolerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bolerum' })
    },
    {
      path: '/marbacks-kopparp',
      name: "Marbäcks-Kopparp",
      component: ProjectPage,
      extraProps: { projectUrl: 'marbacks-kopparp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marbacks-kopparp' })
    },
    {
      path: '/älmedal',
      name: "Älmedal",
      component: ProjectPage,
      extraProps: { projectUrl: 'älmedal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älmedal' })
    },
    {
      path: '/tvinnesheda-badeboda',
      name: "Tvinnesheda-Badeboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'tvinnesheda-badeboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tvinnesheda-badeboda' })
    },
    {
      path: '/lenhovda',
      name: "Lenhovda",
      component: ProjectPage,
      extraProps: { projectUrl: 'lenhovda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lenhovda' })
    },
    {
      path: '/bostorp',
      name: "Bostorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bostorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bostorp' })
    },
    {
      path: '/lillahult',
      name: "Lillahult",
      component: ProjectPage,
      extraProps: { projectUrl: 'lillahult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lillahult' })
    },
    {
      path: '/vraneke-&-bihult',
      name: "Vraneke & Bihult",
      component: ProjectPage,
      extraProps: { projectUrl: 'vraneke-&-bihult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vraneke-&-bihult' })
    },
    {
      path: '/bladingeas',
      name: "Blädingeås",
      component: ProjectPage,
      extraProps: { projectUrl: 'bladingeas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bladingeas' })
    },
    {
      path: '/alandskop',
      name: "Alandsköp",
      component: ProjectPage,
      extraProps: { projectUrl: 'alandskop' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alandskop' })
    },
    {
      path: '/sjoaryd',
      name: "Sjöaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjoaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjoaryd' })
    },
    {
      path: '/hyltan',
      name: "Hyltan",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyltan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyltan' })
    },
    {
      path: '/byholma',
      name: "Byholma",
      component: ProjectPage,
      extraProps: { projectUrl: 'byholma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'byholma' })
    },
    {
      path: '/ljunga',
      name: "Ljunga",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljunga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljunga' })
    },
    {
      path: '/gettnabo-ii',
      name: "Gettnabo II",
      component: ProjectPage,
      extraProps: { projectUrl: 'gettnabo-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gettnabo-ii' })
    },
    {
      path: '/videbacksmala_torhult_sandbacksmala',
      name: "Videbäcksmåla_Torhult_Sandbacksmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'videbacksmala_torhult_sandbacksmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'videbacksmala_torhult_sandbacksmala' })
    },
    {
      path: '/blasinge',
      name: "Bläsinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'blasinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blasinge' })
    },
    {
      path: '/frosslunda',
      name: "Frösslunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'frosslunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frosslunda' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'kastlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kastlosa' })
    },
    {
      path: '/kastlosa-sodra',
      name: "Kastlösa södra",
      component: ProjectPage,
      extraProps: { projectUrl: 'kastlosa-sodra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kastlosa-sodra' })
    },
    {
      path: '/olstorp',
      name: "Olstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'olstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'olstorp' })
    },
    {
      path: '/sodra-kvinneby',
      name: "Södra Kvinneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-kvinneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-kvinneby' })
    },
    {
      path: '/ventlinge-alvar',
      name: "Ventlinge Alvar",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventlinge-alvar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventlinge-alvar' })
    },
    {
      path: '/triberga',
      name: "Triberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'triberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'triberga' })
    },
    {
      path: '/utgrunden-2',
      name: "Utgrunden 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'utgrunden-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utgrunden-2' })
    },
    {
      path: '/froreda',
      name: "Fröreda",
      component: ProjectPage,
      extraProps: { projectUrl: 'froreda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froreda' })
    },
    {
      path: '/tonshult',
      name: "Tönshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'tonshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tonshult' })
    },
    {
      path: '/skruvshult',
      name: "Skruvshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'skruvshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skruvshult' })
    },
    {
      path: '/varnanas',
      name: "Värnanäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'varnanas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varnanas' })
    },
    {
      path: '/bjalebo',
      name: "Bjälebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjalebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjalebo' })
    },
    {
      path: '/övrahammar',
      name: "Övrahammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'övrahammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övrahammar' })
    },
    {
      path: '/blekhem',
      name: "Blekhem",
      component: ProjectPage,
      extraProps: { projectUrl: 'blekhem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blekhem' })
    },
    {
      path: '/kilmare_ytterhult',
      name: "Kilmare_Ytterhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'kilmare_ytterhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kilmare_ytterhult' })
    },
    {
      path: '/manasken',
      name: "Månasken",
      component: ProjectPage,
      extraProps: { projectUrl: 'manasken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'manasken' })
    },
    {
      path: '/manasken',
      name: "Månasken",
      component: ProjectPage,
      extraProps: { projectUrl: 'manasken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'manasken' })
    },
    {
      path: '/hakarp',
      name: "Hakarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'hakarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hakarp' })
    },
    {
      path: '/hedbodberget-etapp-1',
      name: "Hedbodberget Etapp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedbodberget-etapp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedbodberget-etapp-1' })
    },
    {
      path: '/skaftberget',
      name: "Skäftberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaftberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaftberget' })
    },
    {
      path: '/massingberget',
      name: "Mässingberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'massingberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'massingberget' })
    },
    {
      path: '/bosberget',
      name: "Bosberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bosberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bosberget' })
    },
    {
      path: '/sundborn-windpark',
      name: "Sundborn Windpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundborn-windpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundborn-windpark' })
    },
    {
      path: '/orrberget/stensvedberget',
      name: "Orrberget/Stensvedberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'orrberget/stensvedberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orrberget/stensvedberget' })
    },
    {
      path: '/vindpark-fallasberget',
      name: "Vindpark Fallåsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-fallasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-fallasberget' })
    },
    {
      path: '/vindkraftpark-jattendal',
      name: "Vindkraftpark Jättendal",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-jattendal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-jattendal' })
    },
    {
      path: '/vindkraftpark-riberget',
      name: "Vindkraftpark Riberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-riberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-riberget' })
    },
    {
      path: '/vindkraftpark-dalskolen',
      name: "Vindkraftpark Dalskölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-dalskolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-dalskolen' })
    },
    {
      path: '/vindpark-hogkolen',
      name: "Vindpark Högkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hogkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hogkolen' })
    },
    {
      path: '/vindkraftpark-blacksasberget',
      name: "Vindkraftpark Blacksåsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-blacksasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-blacksasberget' })
    },
    {
      path: '/vindpark-vasberget',
      name: "Vindpark Våsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-vasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-vasberget' })
    },
    {
      path: '/vindpark-kvissjaberget',
      name: "Vindpark Kvissjaberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-kvissjaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-kvissjaberget' })
    },
    {
      path: '/vindpark-hittsjon',
      name: "Vindpark Hittsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hittsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hittsjon' })
    },
    {
      path: '/vindpark-hedesunda',
      name: "Vindpark Hedesunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hedesunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hedesunda' })
    },
    {
      path: '/vindkraftpark-gullberg',
      name: "Vindkraftpark Gullberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-gullberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-gullberg' })
    },
    {
      path: '/vindpark-arbra',
      name: "Vindpark Arbrå",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-arbra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-arbra' })
    },
    {
      path: '/vindpark-hallbran',
      name: "Vindpark Hallbrån",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hallbran' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hallbran' })
    },
    {
      path: '/vindpark-glombo',
      name: "Vindpark Glombo",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-glombo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-glombo' })
    },
    {
      path: '/ollebacken-etapp-1',
      name: "Ollebacken etapp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ollebacken-etapp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ollebacken-etapp-1' })
    },
    {
      path: '/ollebacken-etapp-2',
      name: "Ollebacken etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ollebacken-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ollebacken-etapp-2' })
    },
    {
      path: '/murufjallet-(9-st-vindkraftverk)',
      name: "Murufjället (9 st vindkraftverk)",
      component: ProjectPage,
      extraProps: { projectUrl: 'murufjallet-(9-st-vindkraftverk)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'murufjallet-(9-st-vindkraftverk)' })
    },
    {
      path: '/bliekevare-1',
      name: "Bliekevare 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bliekevare-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bliekevare-1' })
    },
    {
      path: '/jarvsjokullen',
      name: "Järvsjökullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'jarvsjokullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jarvsjokullen' })
    },
    {
      path: '/kinnback',
      name: "Kinnbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'kinnback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kinnback' })
    },
    {
      path: '/fjallboheden-vindpark',
      name: "Fjällboheden vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjallboheden-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjallboheden-vindpark' })
    },
    {
      path: '/selet',
      name: "Selet",
      component: ProjectPage,
      extraProps: { projectUrl: 'selet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'selet' })
    },
    {
      path: '/person',
      name: "Persön",
      component: ProjectPage,
      extraProps: { projectUrl: 'person' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'person' })
    },
    {
      path: '/holmahult',
      name: "Holmahult",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmahult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmahult' })
    },
    {
      path: '/lyngsasa',
      name: "Lyngsåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngsasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngsasa' })
    },
    {
      path: '/stromby',
      name: "Strömby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stromby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stromby' })
    },
    {
      path: '/harstensbo_mjodehult_ugglebo',
      name: "Harstensbo_Mjödehult_Ugglebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'harstensbo_mjodehult_ugglebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harstensbo_mjodehult_ugglebo' })
    },
    {
      path: '/gardsryd',
      name: "Gårdsryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardsryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardsryd' })
    },
    {
      path: '/silkomhojden',
      name: "Silkomhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'silkomhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'silkomhojden' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogberget' })
    },
    {
      path: '/kyrkberget',
      name: "Kyrkberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kyrkberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kyrkberget' })
    },
    {
      path: '/skallberget/utterberget',
      name: "Skallberget/Utterberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallberget/utterberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallberget/utterberget' })
    },
    {
      path: '/vindpark-storvrangen',
      name: "Vindpark StorVrången",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-storvrangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-storvrangen' })
    },
    {
      path: '/vindpark-klubbacken',
      name: "Vindpark Klubbäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-klubbacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-klubbacken' })
    },
    {
      path: '/vindpark-tandsjo',
      name: "Vindpark Tandsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-tandsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-tandsjo' })
    },
    {
      path: '/vindpark-mombyasen',
      name: "Vindpark Mombyåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-mombyasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-mombyasen' })
    },
    {
      path: '/bergvind-annefors',
      name: "Bergvind Annefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'bergvind-annefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bergvind-annefors' })
    },
    {
      path: '/dyrasvallen',
      name: "Dyråsvallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'dyrasvallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dyrasvallen' })
    },
    {
      path: '/vindpark-kolvallen',
      name: "Vindpark Kölvallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-kolvallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-kolvallen' })
    },
    {
      path: '/österro',
      name: "ÖSTERRO",
      component: ProjectPage,
      extraProps: { projectUrl: 'österro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'österro' })
    },
    {
      path: '/heleneborg',
      name: "Heleneborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'heleneborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'heleneborg' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectUrl: 'tirup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tirup' })
    },
    {
      path: '/spargott',
      name: "Spargott",
      component: ProjectPage,
      extraProps: { projectUrl: 'spargott' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spargott' })
    },
    {
      path: '/almbacka,-felestad',
      name: "Almbacka, Felestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'almbacka,-felestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almbacka,-felestad' })
    },
    {
      path: '/torrlosa',
      name: "Torrlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'torrlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torrlosa' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/elico-1',
      name: "Elico 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'elico-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elico-1' })
    },
    {
      path: '/gissleberga',
      name: "Gissleberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'gissleberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gissleberga' })
    },
    {
      path: '/duveke,-loarp,-halmstad-1',
      name: "Duveke, Loarp, Halmstad 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'duveke,-loarp,-halmstad-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duveke,-loarp,-halmstad-1' })
    },
    {
      path: '/duveke,-loarp,-halmstad-2',
      name: "Duveke, Loarp, Halmstad 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'duveke,-loarp,-halmstad-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duveke,-loarp,-halmstad-2' })
    },
    {
      path: '/duveke,-loarp,-halmstad-3',
      name: "Duveke, Loarp, Halmstad 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'duveke,-loarp,-halmstad-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duveke,-loarp,-halmstad-3' })
    },
    {
      path: '/vastangard',
      name: "Västangård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastangard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastangard' })
    },
    {
      path: '/kornheddinge',
      name: "Kornheddinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'kornheddinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kornheddinge' })
    },
    {
      path: '/trolleberg',
      name: "Trolleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'trolleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trolleberg' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/beateberg-1',
      name: "Beateberg 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'beateberg-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'beateberg-1' })
    },
    {
      path: '/sodra-vram',
      name: "Södra Vram",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-vram' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-vram' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/barseback',
      name: "Barsebäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'barseback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barseback' })
    },
    {
      path: '/viking-vind',
      name: "Viking Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'viking-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viking-vind' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lilla-marieholms-kraft-ab',
      name: "Lilla Marieholms Kraft AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-marieholms-kraft-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-marieholms-kraft-ab' })
    },
    {
      path: '/tranberga',
      name: "Tranberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'tranberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tranberga' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectUrl: 'klamby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klamby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vanstad-kommungard',
      name: "Vanstad Kommungård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanstad-kommungard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanstad-kommungard' })
    },
    {
      path: '/ry',
      name: "Ry",
      component: ProjectPage,
      extraProps: { projectUrl: 'ry' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ry' })
    },
    {
      path: '/langarod',
      name: "Långaröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'langarod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langarod' })
    },
    {
      path: '/årrod',
      name: "Årröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'årrod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årrod' })
    },
    {
      path: '/he',
      name: "He",
      component: ProjectPage,
      extraProps: { projectUrl: 'he' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'he' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/norrto',
      name: "Norrto",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrto' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrto' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/årrod',
      name: "Årröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'årrod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årrod' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/jordboen',
      name: "Jordboen",
      component: ProjectPage,
      extraProps: { projectUrl: 'jordboen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jordboen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vitakra',
      name: "Vitåkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'vitakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vitakra' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunnarp' })
    },
    {
      path: '/manslunda-i',
      name: "Månslunda I",
      component: ProjectPage,
      extraProps: { projectUrl: 'manslunda-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'manslunda-i' })
    },
    {
      path: '/tomelilla',
      name: "Tomelilla",
      component: ProjectPage,
      extraProps: { projectUrl: 'tomelilla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tomelilla' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunnarp' })
    },
    {
      path: '/ingel-1',
      name: "Ingel 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingel-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingel-1' })
    },
    {
      path: '/ingel-2',
      name: "Ingel 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingel-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingel-2' })
    },
    {
      path: '/ingel-3',
      name: "Ingel 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingel-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingel-3' })
    },
    {
      path: '/lunnarp',
      name: "Lunnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunnarp' })
    },
    {
      path: '/appeltorp',
      name: "Appeltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'appeltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'appeltorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/salshog',
      name: "Sälshög",
      component: ProjectPage,
      extraProps: { projectUrl: 'salshog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salshog' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum-bontofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum-bontofta' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum-bontofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum-bontofta' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum-bontofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum-bontofta' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lundsgarden',
      name: "Lundsgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'lundsgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lundsgarden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/maglaby',
      name: "Maglaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'maglaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'maglaby' })
    },
    {
      path: '/syllstorp',
      name: "Syllstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'syllstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'syllstorp' })
    },
    {
      path: '/tranarp',
      name: "Tranarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tranarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tranarp' })
    },
    {
      path: '/masinge',
      name: "Mäsinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'masinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'masinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/boel',
      name: "Boel",
      component: ProjectPage,
      extraProps: { projectUrl: 'boel' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boel' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/norra-hamnen',
      name: "Norra hamnen",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-hamnen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-hamnen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangby' })
    },
    {
      path: '/hansamollan',
      name: "Hansamöllan",
      component: ProjectPage,
      extraProps: { projectUrl: 'hansamollan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hansamollan' })
    },
    {
      path: '/varpinge-clara',
      name: "Värpinge Clara",
      component: ProjectPage,
      extraProps: { projectUrl: 'varpinge-clara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varpinge-clara' })
    },
    {
      path: '/hardeberga',
      name: "Hardeberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'hardeberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hardeberga' })
    },
    {
      path: '/hardeberga',
      name: "Hardeberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'hardeberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hardeberga' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/maria',
      name: "Maria",
      component: ProjectPage,
      extraProps: { projectUrl: 'maria' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'maria' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'annelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'annelov' })
    },
    {
      path: '/norra-moinge',
      name: "Norra Möinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-moinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-moinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/stureholms-gard',
      name: "Stureholms Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'stureholms-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stureholms-gard' })
    },
    {
      path: '/ormastorp',
      name: "Ormastorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ormastorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ormastorp' })
    },
    {
      path: '/örby',
      name: "Örby",
      component: ProjectPage,
      extraProps: { projectUrl: 'örby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örby' })
    },
    {
      path: '/örby',
      name: "Örby",
      component: ProjectPage,
      extraProps: { projectUrl: 'örby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnestorp' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnestorp' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tappeshusen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tappeshusen' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tappeshusen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tappeshusen' })
    },
    {
      path: '/tappeshusen',
      name: "Täppeshusen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tappeshusen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tappeshusen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnestorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ingelstrade',
      name: "Ingelsträde",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstrade' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstrade' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/trollenas',
      name: "Trollenäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'trollenas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trollenas' })
    },
    {
      path: '/backmollan',
      name: "Backmöllan",
      component: ProjectPage,
      extraProps: { projectUrl: 'backmollan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backmollan' })
    },
    {
      path: '/slattang-i',
      name: "Slättäng I",
      component: ProjectPage,
      extraProps: { projectUrl: 'slattang-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slattang-i' })
    },
    {
      path: '/aeolus',
      name: "Aeolus",
      component: ProjectPage,
      extraProps: { projectUrl: 'aeolus' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aeolus' })
    },
    {
      path: '/ö.-karaby',
      name: "Ö. Karaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'ö.-karaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ö.-karaby' })
    },
    {
      path: '/vastrabygard',
      name: "Västrabygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastrabygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastrabygard' })
    },
    {
      path: '/östra-karaby-ii',
      name: "Östra Karaby II",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-karaby-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-karaby-ii' })
    },
    {
      path: '/hogersrod',
      name: "Högersröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogersrod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogersrod' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gardstanga',
      name: "Gårdstånga",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardstanga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardstanga' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'varlinge-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varlinge-gard' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'varlinge-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varlinge-gard' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/kadesjo-gussnava',
      name: "Kadesjö-Gussnava",
      component: ProjectPage,
      extraProps: { projectUrl: 'kadesjo-gussnava' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kadesjo-gussnava' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/balkakra-vind',
      name: "Balkåkra Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'balkakra-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'balkakra-vind' })
    },
    {
      path: '/kopingebro',
      name: "Köpingebro",
      component: ProjectPage,
      extraProps: { projectUrl: 'kopingebro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kopingebro' })
    },
    {
      path: '/rynge-iii',
      name: "Rynge III",
      component: ProjectPage,
      extraProps: { projectUrl: 'rynge-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rynge-iii' })
    },
    {
      path: '/st-herrestad-i',
      name: "St Herrestad I",
      component: ProjectPage,
      extraProps: { projectUrl: 'st-herrestad-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st-herrestad-i' })
    },
    {
      path: '/st-herrestad-ii',
      name: "St Herrestad II",
      component: ProjectPage,
      extraProps: { projectUrl: 'st-herrestad-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st-herrestad-ii' })
    },
    {
      path: '/ruuthsbo-i',
      name: "Ruuthsbo I",
      component: ProjectPage,
      extraProps: { projectUrl: 'ruuthsbo-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ruuthsbo-i' })
    },
    {
      path: '/st.-herrestad',
      name: "St. Herrestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'st.-herrestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st.-herrestad' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'froslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froslov' })
    },
    {
      path: '/hammarlov',
      name: "Hammarlöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'hammarlov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hammarlov' })
    },
    {
      path: '/bosarp',
      name: "Bösarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bosarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bosarp' })
    },
    {
      path: '/isiegarden',
      name: "Isiegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'isiegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isiegarden' })
    },
    {
      path: '/bjorkliden',
      name: "Björkliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkliden' })
    },
    {
      path: '/lilla-isie',
      name: "Lilla Isie",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-isie' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-isie' })
    },
    {
      path: '/gislov-ii',
      name: "Gislöv II",
      component: ProjectPage,
      extraProps: { projectUrl: 'gislov-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gislov-ii' })
    },
    {
      path: '/brunshill',
      name: "Brunshill",
      component: ProjectPage,
      extraProps: { projectUrl: 'brunshill' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brunshill' })
    },
    {
      path: '/raborg',
      name: "Råborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'raborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raborg' })
    },
    {
      path: '/bronnestad-honsinge',
      name: "Brönnestad-Hönsinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'bronnestad-honsinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bronnestad-honsinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/margot',
      name: "Margot",
      component: ProjectPage,
      extraProps: { projectUrl: 'margot' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'margot' })
    },
    {
      path: '/st-beddinge',
      name: "St Beddinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'st-beddinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st-beddinge' })
    },
    {
      path: '/hemmesdynge',
      name: "Hemmesdynge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hemmesdynge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hemmesdynge' })
    },
    {
      path: '/gronby',
      name: "Grönby",
      component: ProjectPage,
      extraProps: { projectUrl: 'gronby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gronby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/nymo',
      name: "Nymö",
      component: ProjectPage,
      extraProps: { projectUrl: 'nymo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nymo' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngbygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngbygard' })
    },
    {
      path: '/helan-hovby',
      name: "Helan Hovby",
      component: ProjectPage,
      extraProps: { projectUrl: 'helan-hovby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'helan-hovby' })
    },
    {
      path: '/legered',
      name: "Legered",
      component: ProjectPage,
      extraProps: { projectUrl: 'legered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'legered' })
    },
    {
      path: '/olserod',
      name: "Olseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'olserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'olserod' })
    },
    {
      path: '/ullstorp-åkeboda',
      name: "Ullstorp-Åkeboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullstorp-åkeboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullstorp-åkeboda' })
    },
    {
      path: '/öddestad',
      name: "Öddestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'öddestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öddestad' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/kiaby',
      name: "Kiaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'kiaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kiaby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/tollarpabjar',
      name: "Tollarpabjär",
      component: ProjectPage,
      extraProps: { projectUrl: 'tollarpabjar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tollarpabjar' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngbygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngbygard' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsholm' })
    },
    {
      path: '/raby-gard',
      name: "Råby Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'raby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raby-gard' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/zavanna',
      name: "Zavanna",
      component: ProjectPage,
      extraProps: { projectUrl: 'zavanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'zavanna' })
    },
    {
      path: '/borrby1',
      name: "Borrby1",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrby1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrby1' })
    },
    {
      path: '/mansunen,-gislov',
      name: "Månsunen, Gislöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'mansunen,-gislov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mansunen,-gislov' })
    },
    {
      path: '/byara',
      name: "Byåra",
      component: ProjectPage,
      extraProps: { projectUrl: 'byara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'byara' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vranarp',
      name: "Vranarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vranarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vranarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/borrby3',
      name: "Borrby3",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrby3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrby3' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/äsperod',
      name: "Äsperöd",
      component: ProjectPage,
      extraProps: { projectUrl: 'äsperod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äsperod' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sandby',
      name: "Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/spannarp',
      name: "Spannarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'spannarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spannarp' })
    },
    {
      path: '/heden',
      name: "Heden",
      component: ProjectPage,
      extraProps: { projectUrl: 'heden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'heden' })
    },
    {
      path: '/ingelstorp',
      name: "Ingelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstorp' })
    },
    {
      path: '/skorpinge',
      name: "Skörpinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorpinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorpinge' })
    },
    {
      path: '/össjo',
      name: "Össjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'össjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'össjo' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/humlarp',
      name: "Humlarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlarp' })
    },
    {
      path: '/harninge',
      name: "Härninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'harninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harninge' })
    },
    {
      path: '/boarp',
      name: "Boarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'boarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/östergard',
      name: "Östergård",
      component: ProjectPage,
      extraProps: { projectUrl: 'östergard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östergard' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/norra-skravlinge',
      name: "Norra Skrävlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-skravlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-skravlinge' })
    },
    {
      path: '/ängalid-ii,-karlsnas',
      name: "Ängalid II, Karlsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ängalid-ii,-karlsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ängalid-ii,-karlsnas' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ängalid-iv,-norra-skravlinge',
      name: "Ängalid IV, Norra Skrävlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'ängalid-iv,-norra-skravlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ängalid-iv,-norra-skravlinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/kvidinge',
      name: "Kvidinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvidinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvidinge' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'karreberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karreberga' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'karreberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karreberga' })
    },
    {
      path: '/tranarp',
      name: "Tranarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tranarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tranarp' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'annelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'annelov' })
    },
    {
      path: '/annelov-1',
      name: "Annelöv 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'annelov-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'annelov-1' })
    },
    {
      path: '/ottarp',
      name: "Ottarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ottarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ottarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/harriemollan',
      name: "Harriemöllan",
      component: ProjectPage,
      extraProps: { projectUrl: 'harriemollan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harriemollan' })
    },
    {
      path: '/soderto-mossarp',
      name: "Söderto-Mossarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderto-mossarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderto-mossarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/örum-vindkraftpark',
      name: "Örum vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'örum-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örum-vindkraftpark' })
    },
    {
      path: '/örum',
      name: "Örum",
      component: ProjectPage,
      extraProps: { projectUrl: 'örum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örum' })
    },
    {
      path: '/froslov',
      name: "Fröslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'froslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froslov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/skanes-varsjo',
      name: "Skånes Värsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'skanes-varsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skanes-varsjo' })
    },
    {
      path: '/norra-varalov',
      name: "Norra Varalöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-varalov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-varalov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/arkelstorp-brannskulla',
      name: "Arkelstorp-Brännskulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'arkelstorp-brannskulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arkelstorp-brannskulla' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/skanes-varsjo',
      name: "Skånes Värsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'skanes-varsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skanes-varsjo' })
    },
    {
      path: '/bellinga',
      name: "Bellinga",
      component: ProjectPage,
      extraProps: { projectUrl: 'bellinga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bellinga' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/trulstorp',
      name: "Trulstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'trulstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trulstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/rosendal',
      name: "Rosendal",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosendal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosendal' })
    },
    {
      path: '/lydinge-benarp',
      name: "Lydinge-Benarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lydinge-benarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lydinge-benarp' })
    },
    {
      path: '/karlfaltsgarden',
      name: "Karlfältsgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlfaltsgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlfaltsgarden' })
    },
    {
      path: '/nasbyholm-ii',
      name: "Näsbyholm II",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasbyholm-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasbyholm-ii' })
    },
    {
      path: '/maglarp-vindkraftpark',
      name: "Maglarp vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'maglarp-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'maglarp-vindkraftpark' })
    },
    {
      path: '/ullstorp-åkeboda',
      name: "Ullstorp-Åkeboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullstorp-åkeboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullstorp-åkeboda' })
    },
    {
      path: '/sjunkalotten',
      name: "Sjunkalotten",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjunkalotten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjunkalotten' })
    },
    {
      path: '/vegeholm',
      name: "Vegeholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'vegeholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vegeholm' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/haringstorp',
      name: "Häringstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'haringstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haringstorp' })
    },
    {
      path: '/åkebo',
      name: "Åkebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'åkebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åkebo' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'ovesholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ovesholm' })
    },
    {
      path: '/åraslov',
      name: "Åraslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'åraslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åraslov' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectUrl: 'tirup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tirup' })
    },
    {
      path: '/halmstadgarden',
      name: "Halmstadgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'halmstadgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halmstadgarden' })
    },
    {
      path: '/svalov',
      name: "Svalöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'svalov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svalov' })
    },
    {
      path: '/knutstorp',
      name: "Knutstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'knutstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knutstorp' })
    },
    {
      path: '/duveke-vindkraftpark',
      name: "Duveke vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'duveke-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duveke-vindkraftpark' })
    },
    {
      path: '/knutstorp',
      name: "Knutstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'knutstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knutstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/uddarp',
      name: "Uddarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'uddarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uddarp' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodervidinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodervidinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/skabersjo-vindkraftpark',
      name: "Skabersjö vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'skabersjo-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skabersjo-vindkraftpark' })
    },
    {
      path: '/rydsgards-vindkraftpark',
      name: "Rydsgårds vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'rydsgards-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rydsgards-vindkraftpark' })
    },
    {
      path: '/ågerup',
      name: "Ågerup",
      component: ProjectPage,
      extraProps: { projectUrl: 'ågerup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ågerup' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum-bontofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum-bontofta' })
    },
    {
      path: '/vallsas',
      name: "Vallsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallsas' })
    },
    {
      path: '/bondrum-bontofta',
      name: "Bondrum-Bontofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum-bontofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum-bontofta' })
    },
    {
      path: '/munka-tagarp',
      name: "Munka-Tågarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'munka-tagarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munka-tagarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/frestensfalla',
      name: "Frestensfälla",
      component: ProjectPage,
      extraProps: { projectUrl: 'frestensfalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frestensfalla' })
    },
    {
      path: '/lillgrund-vindkraftpark',
      name: "Lillgrund Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'lillgrund-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lillgrund-vindkraftpark' })
    },
    {
      path: '/vindon',
      name: "Vindön",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindon' })
    },
    {
      path: '/lundakra',
      name: "Lundåkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'lundakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lundakra' })
    },
    {
      path: '/rogle',
      name: "Rögle",
      component: ProjectPage,
      extraProps: { projectUrl: 'rogle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rogle' })
    },
    {
      path: '/vastraby',
      name: "Västraby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastraby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastraby' })
    },
    {
      path: '/vastraby',
      name: "Västraby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastraby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastraby' })
    },
    {
      path: '/pilshult-allerum',
      name: "Pilshult-Allerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'pilshult-allerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pilshult-allerum' })
    },
    {
      path: '/vala',
      name: "Väla",
      component: ProjectPage,
      extraProps: { projectUrl: 'vala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vala' })
    },
    {
      path: '/ragakra',
      name: "Rågåkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'ragakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ragakra' })
    },
    {
      path: '/tangelsas',
      name: "Tängelsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'tangelsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tangelsas' })
    },
    {
      path: '/skarhult',
      name: "Skarhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarhult' })
    },
    {
      path: '/viderup-toftaholm',
      name: "Viderup-Toftaholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'viderup-toftaholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viderup-toftaholm' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'marsvinsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marsvinsholm' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'marsvinsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marsvinsholm' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsholm' })
    },
    {
      path: '/vittskovle',
      name: "Vittskövle",
      component: ProjectPage,
      extraProps: { projectUrl: 'vittskovle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vittskovle' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsholm' })
    },
    {
      path: '/isgrannatorp',
      name: "Isgrannatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'isgrannatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isgrannatorp' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'ovesholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ovesholm' })
    },
    {
      path: '/rabelov',
      name: "Råbelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'rabelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rabelov' })
    },
    {
      path: '/åhus-ripa',
      name: "Åhus-Ripa",
      component: ProjectPage,
      extraProps: { projectUrl: 'åhus-ripa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åhus-ripa' })
    },
    {
      path: '/hoge-vag-vindkraftpark',
      name: "Höge Väg Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hoge-vag-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hoge-vag-vindkraftpark' })
    },
    {
      path: '/fegelstorp',
      name: "Fegelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'fegelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fegelstorp' })
    },
    {
      path: '/borrestad-tolserod',
      name: "Borrestad-Tolseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrestad-tolserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrestad-tolserod' })
    },
    {
      path: '/trane-örmatofta',
      name: "Träne Örmatofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'trane-örmatofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trane-örmatofta' })
    },
    {
      path: '/ovesholm',
      name: "Ovesholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'ovesholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ovesholm' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/östra-herrestad-vindkraftpark',
      name: "Östra Herrestad Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-herrestad-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-herrestad-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/össjo-skog',
      name: "Össjö Skog",
      component: ProjectPage,
      extraProps: { projectUrl: 'össjo-skog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'össjo-skog' })
    },
    {
      path: '/haringstorp',
      name: "Häringstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'haringstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haringstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/roke-algustorp',
      name: "Röke-Algustorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'roke-algustorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'roke-algustorp' })
    },
    {
      path: '/ballingslov',
      name: "Ballingslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'ballingslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ballingslov' })
    },
    {
      path: '/navlingeasen',
      name: "Nävlingeåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'navlingeasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'navlingeasen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/loshult',
      name: "Loshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'loshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'loshult' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hastholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hastholmen' })
    },
    {
      path: '/hastholmen',
      name: "Hästholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hastholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hastholmen' })
    },
    {
      path: '/millingstorp',
      name: "Millingstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'millingstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'millingstorp' })
    },
    {
      path: '/krokek',
      name: "Krokek",
      component: ProjectPage,
      extraProps: { projectUrl: 'krokek' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'krokek' })
    },
    {
      path: '/valla-vind',
      name: "Valla Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'valla-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'valla-vind' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ekelunda',
      name: "Ekelunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekelunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekelunda' })
    },
    {
      path: '/susekulla',
      name: "Susekulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'susekulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'susekulla' })
    },
    {
      path: '/skorro',
      name: "Skorrö",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorro' })
    },
    {
      path: '/kvilla',
      name: "Kvilla",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvilla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvilla' })
    },
    {
      path: '/ekaryd-1',
      name: "Ekaryd 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekaryd-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekaryd-1' })
    },
    {
      path: '/kroka-1',
      name: "Kroka 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kroka-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kroka-1' })
    },
    {
      path: '/kroka-2',
      name: "Kroka 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'kroka-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kroka-2' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarstorp' })
    },
    {
      path: '/ekaryd-2',
      name: "Ekaryd 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekaryd-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekaryd-2' })
    },
    {
      path: '/greby',
      name: "Greby",
      component: ProjectPage,
      extraProps: { projectUrl: 'greby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'greby' })
    },
    {
      path: '/jamjo',
      name: "Jämjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'jamjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jamjo' })
    },
    {
      path: '/laxeby',
      name: "Laxeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'laxeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laxeby' })
    },
    {
      path: '/langlot',
      name: "Långlöt",
      component: ProjectPage,
      extraProps: { projectUrl: 'langlot' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langlot' })
    },
    {
      path: '/stenninge',
      name: "Stenninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenninge' })
    },
    {
      path: '/byrum',
      name: "Byrum",
      component: ProjectPage,
      extraProps: { projectUrl: 'byrum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'byrum' })
    },
    {
      path: '/boda-torp',
      name: "Böda Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'boda-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boda-torp' })
    },
    {
      path: '/gardslosa',
      name: "Gärdslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardslosa' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellboda' })
    },
    {
      path: '/sammelstorp',
      name: "Sammelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sammelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sammelstorp' })
    },
    {
      path: '/stenninge',
      name: "Stenninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenninge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hagestad',
      name: "Hagestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagestad' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/borrby2',
      name: "Borrby2",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrby2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrby2' })
    },
    {
      path: '/taghusa',
      name: "Tåghusa",
      component: ProjectPage,
      extraProps: { projectUrl: 'taghusa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taghusa' })
    },
    {
      path: '/borrby2',
      name: "Borrby2",
      component: ProjectPage,
      extraProps: { projectUrl: 'borrby2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borrby2' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmsund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmsund' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmsund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmsund' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skackarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skackarp' })
    },
    {
      path: '/staverhult',
      name: "Staverhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'staverhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'staverhult' })
    },
    {
      path: '/kvilla-1',
      name: "Kvilla 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvilla-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvilla-1' })
    },
    {
      path: '/gettnabo-1',
      name: "Gettnabo 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'gettnabo-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gettnabo-1' })
    },
    {
      path: '/stromby-vastra',
      name: "Strömby västra",
      component: ProjectPage,
      extraProps: { projectUrl: 'stromby-vastra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stromby-vastra' })
    },
    {
      path: '/vetlycke',
      name: "Vetlycke",
      component: ProjectPage,
      extraProps: { projectUrl: 'vetlycke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vetlycke' })
    },
    {
      path: '/gardslosa',
      name: "Gärdslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardslosa' })
    },
    {
      path: '/rapplinge',
      name: "Räpplinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'rapplinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rapplinge' })
    },
    {
      path: '/stora-istad',
      name: "Stora Istad",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-istad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-istad' })
    },
    {
      path: '/arbelunda',
      name: "Arbelunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'arbelunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arbelunda' })
    },
    {
      path: '/lerkaka',
      name: "Lerkaka",
      component: ProjectPage,
      extraProps: { projectUrl: 'lerkaka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lerkaka' })
    },
    {
      path: '/nedre-vannborga',
      name: "Nedre Vannborga",
      component: ProjectPage,
      extraProps: { projectUrl: 'nedre-vannborga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nedre-vannborga' })
    },
    {
      path: '/persnas--hallnas',
      name: "Persnäs- Hallnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'persnas--hallnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'persnas--hallnas' })
    },
    {
      path: '/norrby',
      name: "Norrby",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrby' })
    },
    {
      path: '/boda-kronopark',
      name: "Böda Kronopark",
      component: ProjectPage,
      extraProps: { projectUrl: 'boda-kronopark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boda-kronopark' })
    },
    {
      path: '/gyllebo',
      name: "Gyllebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'gyllebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gyllebo' })
    },
    {
      path: '/ava',
      name: "Ava",
      component: ProjectPage,
      extraProps: { projectUrl: 'ava' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ava' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'granasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granasen' })
    },
    {
      path: '/storrisberget',
      name: "Storrisberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'storrisberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storrisberget' })
    },
    {
      path: '/knulen',
      name: "Knulen",
      component: ProjectPage,
      extraProps: { projectUrl: 'knulen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knulen' })
    },
    {
      path: '/ava',
      name: "Ava",
      component: ProjectPage,
      extraProps: { projectUrl: 'ava' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ava' })
    },
    {
      path: '/gabrielsberget-vast',
      name: "Gabrielsberget Väst",
      component: ProjectPage,
      extraProps: { projectUrl: 'gabrielsberget-vast' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gabrielsberget-vast' })
    },
    {
      path: '/stenberg',
      name: "Stenberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenberg' })
    },
    {
      path: '/fabodliden',
      name: "Fäbodliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'fabodliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fabodliden' })
    },
    {
      path: '/bliekevare',
      name: "Bliekevare",
      component: ProjectPage,
      extraProps: { projectUrl: 'bliekevare' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bliekevare' })
    },
    {
      path: '/vindkraftpark-kvallaliden',
      name: "Vindkraftpark Kvällåliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-kvallaliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-kvallaliden' })
    },
    {
      path: '/vindkraftpark-backaskog',
      name: "Vindkraftpark Bäckaskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-backaskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-backaskog' })
    },
    {
      path: '/hogaliden',
      name: "Högaliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogaliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogaliden' })
    },
    {
      path: '/taftea',
      name: "Täfteå",
      component: ProjectPage,
      extraProps: { projectUrl: 'taftea' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taftea' })
    },
    {
      path: '/hornmyran',
      name: "Hornmyran",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornmyran' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornmyran' })
    },
    {
      path: '/vinliden',
      name: "Vinliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'vinliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vinliden' })
    },
    {
      path: '/petlandskar',
      name: "Petlandskär",
      component: ProjectPage,
      extraProps: { projectUrl: 'petlandskar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'petlandskar' })
    },
    {
      path: '/vastvattnet',
      name: "Västvattnet",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastvattnet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastvattnet' })
    },
    {
      path: '/morttjarnberget',
      name: "Mörttjärnberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'morttjarnberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morttjarnberget' })
    },
    {
      path: '/garpkolen',
      name: "Garpkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'garpkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'garpkolen' })
    },
    {
      path: '/moskogen',
      name: "Moskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'moskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'moskogen' })
    },
    {
      path: '/rashon',
      name: "Råshön",
      component: ProjectPage,
      extraProps: { projectUrl: 'rashon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rashon' })
    },
    {
      path: '/storrun',
      name: "Storrun",
      component: ProjectPage,
      extraProps: { projectUrl: 'storrun' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storrun' })
    },
    {
      path: '/brocklingsberget-1',
      name: "Bröcklingsberget 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'brocklingsberget-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brocklingsberget-1' })
    },
    {
      path: '/brocklingsberget-2',
      name: "Bröcklingsberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'brocklingsberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brocklingsberget-2' })
    },
    {
      path: '/midsommarberget',
      name: "Midsommarberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'midsommarberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'midsommarberget' })
    },
    {
      path: '/havsnas',
      name: "Havsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'havsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'havsnas' })
    },
    {
      path: '/rodovalen',
      name: "Rodovålen",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodovalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodovalen' })
    },
    {
      path: '/langavalen',
      name: "Långåvålen",
      component: ProjectPage,
      extraProps: { projectUrl: 'langavalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langavalen' })
    },
    {
      path: '/grasjon',
      name: "Gråsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'grasjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grasjon' })
    },
    {
      path: '/middagsberget',
      name: "Middagsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'middagsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'middagsberget' })
    },
    {
      path: '/gardsjoberget',
      name: "Gårdsjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardsjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardsjoberget' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogberget' })
    },
    {
      path: '/ängersjokolen',
      name: "Ängersjökölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ängersjokolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ängersjokolen' })
    },
    {
      path: '/norderasen',
      name: "Norderåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'norderasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norderasen' })
    },
    {
      path: '/tasjoberget',
      name: "Tåsjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'tasjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tasjoberget' })
    },
    {
      path: '/klocka',
      name: "Klocka",
      component: ProjectPage,
      extraProps: { projectUrl: 'klocka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klocka' })
    },
    {
      path: '/tangbole',
      name: "Tångböle",
      component: ProjectPage,
      extraProps: { projectUrl: 'tangbole' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tangbole' })
    },
    {
      path: '/skaftasen',
      name: "Skaftåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaftasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaftasen' })
    },
    {
      path: '/lovhogen',
      name: "Lövhögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'lovhogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lovhogen' })
    },
    {
      path: '/digerasen',
      name: "Digeråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'digerasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'digerasen' })
    },
    {
      path: '/nyhemsmanen',
      name: "Nyhemsmanen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyhemsmanen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyhemsmanen' })
    },
    {
      path: '/nyhemsmanen-storberget',
      name: "Nyhemsmanen-Storberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyhemsmanen-storberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyhemsmanen-storberget' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lill-villflon',
      name: "Lill-Villflon",
      component: ProjectPage,
      extraProps: { projectUrl: 'lill-villflon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lill-villflon' })
    },
    {
      path: '/kalkstenshojden',
      name: "Kalkstenshöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalkstenshojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalkstenshojden' })
    },
    {
      path: '/kalkstenshojden',
      name: "Kalkstenshöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalkstenshojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalkstenshojden' })
    },
    {
      path: '/storhogen',
      name: "Storhögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'storhogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storhogen' })
    },
    {
      path: '/bodberget',
      name: "Bodberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodberget' })
    },
    {
      path: '/sandtjarnberget',
      name: "Sandtjärnberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandtjarnberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandtjarnberget' })
    },
    {
      path: '/bjorkvattnet',
      name: "Björkvattnet",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkvattnet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkvattnet' })
    },
    {
      path: '/dalasen',
      name: "Dalåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalasen' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectUrl: 'skyttmon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skyttmon' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectUrl: 'skyttmon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skyttmon' })
    },
    {
      path: '/nysaterasen',
      name: "Nysäteråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nysaterasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nysaterasen' })
    },
    {
      path: '/tornas',
      name: "Tornäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'tornas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tornas' })
    },
    {
      path: '/kalkstenhojden',
      name: "Kalkstenhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalkstenhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalkstenhojden' })
    },
    {
      path: '/handsjoknusen',
      name: "Handsjöknusen",
      component: ProjectPage,
      extraProps: { projectUrl: 'handsjoknusen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'handsjoknusen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/brickan/olingsdal',
      name: "Brickan/Olingsdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'brickan/olingsdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brickan/olingsdal' })
    },
    {
      path: '/risbrunn',
      name: "Risbrunn",
      component: ProjectPage,
      extraProps: { projectUrl: 'risbrunn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'risbrunn' })
    },
    {
      path: '/glissjoberget/norderasen',
      name: "Glissjöberget/Norderåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'glissjoberget/norderasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'glissjoberget/norderasen' })
    },
    {
      path: '/ope',
      name: "Ope",
      component: ProjectPage,
      extraProps: { projectUrl: 'ope' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ope' })
    },
    {
      path: '/nordbyn',
      name: "Nordbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordbyn' })
    },
    {
      path: '/dintestorp',
      name: "Dintestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'dintestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dintestorp' })
    },
    {
      path: '/rumperyd',
      name: "Rumperyd",
      component: ProjectPage,
      extraProps: { projectUrl: 'rumperyd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rumperyd' })
    },
    {
      path: '/ljunghem-1.13',
      name: "Ljunghem 1.13",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljunghem-1.13' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljunghem-1.13' })
    },
    {
      path: '/tunarp',
      name: "Tunarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tunarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tunarp' })
    },
    {
      path: '/ljunghem',
      name: "Ljunghem",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljunghem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljunghem' })
    },
    {
      path: '/golhult',
      name: "Gölhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'golhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'golhult' })
    },
    {
      path: '/salvaryd',
      name: "Salvaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'salvaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salvaryd' })
    },
    {
      path: '/broddstorp',
      name: "Broddstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'broddstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'broddstorp' })
    },
    {
      path: '/branalt',
      name: "Brånalt",
      component: ProjectPage,
      extraProps: { projectUrl: 'branalt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'branalt' })
    },
    {
      path: '/öringe',
      name: "Öringe",
      component: ProjectPage,
      extraProps: { projectUrl: 'öringe' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öringe' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarstorp' })
    },
    {
      path: '/uvereds-vindkraftforening',
      name: "Uvereds Vindkraftförening",
      component: ProjectPage,
      extraProps: { projectUrl: 'uvereds-vindkraftforening' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uvereds-vindkraftforening' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslosa' })
    },
    {
      path: '/skorstorp',
      name: "Skörstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorstorp' })
    },
    {
      path: '/orreberg',
      name: "Orreberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'orreberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orreberg' })
    },
    {
      path: '/hanhult',
      name: "Hanhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hanhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hanhult' })
    },
    {
      path: '/brasmaviken',
      name: "Brasmaviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'brasmaviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brasmaviken' })
    },
    {
      path: '/forsvik',
      name: "Forsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsvik' })
    },
    {
      path: '/vindpark-ekeby',
      name: "Vindpark Ekeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ekeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ekeby' })
    },
    {
      path: '/eveboda',
      name: "Eveboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'eveboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eveboda' })
    },
    {
      path: '/vkv_lin-005',
      name: "vkv_lin-005",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-005' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-005' })
    },
    {
      path: '/vkv_lin-021',
      name: "vkv_lin-021",
      component: ProjectPage,
      extraProps: { projectUrl: 'vkv_lin-021' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vkv_lin-021' })
    },
    {
      path: '/herrberga',
      name: "Herrberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'herrberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'herrberga' })
    },
    {
      path: '/dansbygget/svenshult',
      name: "Dansbygget/Svenshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'dansbygget/svenshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dansbygget/svenshult' })
    },
    {
      path: '/lovstaviken',
      name: "Lövstaviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'lovstaviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lovstaviken' })
    },
    {
      path: '/vindil-kraft-ab',
      name: "Vindil Kraft AB",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindil-kraft-ab' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindil-kraft-ab' })
    },
    {
      path: '/vaby',
      name: "Väby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaby' })
    },
    {
      path: '/munkagard',
      name: "Munkagård",
      component: ProjectPage,
      extraProps: { projectUrl: 'munkagard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munkagard' })
    },
    {
      path: '/utteros',
      name: "Utteros",
      component: ProjectPage,
      extraProps: { projectUrl: 'utteros' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utteros' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ravlanda,-tyft',
      name: "Rävlanda, Tyft",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravlanda,-tyft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravlanda,-tyft' })
    },
    {
      path: '/sundsby',
      name: "sundsby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundsby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundsby' })
    },
    {
      path: '/tyfta-vindkraftpark',
      name: "Tyfta Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'tyfta-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tyfta-vindkraftpark' })
    },
    {
      path: '/ileberg-1,-tarnmasen',
      name: "Ileberg 1, Tärnmåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ileberg-1,-tarnmasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ileberg-1,-tarnmasen' })
    },
    {
      path: '/jarmunderod(lilla-parken)-3-verk',
      name: "Järmunderöd(Lilla Parken) 3 verk",
      component: ProjectPage,
      extraProps: { projectUrl: 'jarmunderod(lilla-parken)-3-verk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jarmunderod(lilla-parken)-3-verk' })
    },
    {
      path: '/torod',
      name: "Toröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'torod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torod' })
    },
    {
      path: '/haby-torp',
      name: "Håby-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'haby-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haby-torp' })
    },
    {
      path: '/skaverod',
      name: "Skaveröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod/gurserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod/gurserod' })
    },
    {
      path: '/hud',
      name: "Hud",
      component: ProjectPage,
      extraProps: { projectUrl: 'hud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hud' })
    },
    {
      path: '/skallerod-habackemarken',
      name: "Skalleröd Håbäckemarken",
      component: ProjectPage,
      extraProps: { projectUrl: 'skallerod-habackemarken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skallerod-habackemarken' })
    },
    {
      path: '/skarbo',
      name: "Skärbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarbo' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectUrl: 'wastgota-wind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wastgota-wind' })
    },
    {
      path: '/grashult',
      name: "Gräshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'grashult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grashult' })
    },
    {
      path: '/gunnarstorp',
      name: "Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarstorp' })
    },
    {
      path: '/qvantenburg-2',
      name: "Qvantenburg 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'qvantenburg-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'qvantenburg-2' })
    },
    {
      path: '/kuserud-1',
      name: "Kuserud 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuserud-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuserud-1' })
    },
    {
      path: '/karlsfalt',
      name: "Karlsfält",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlsfalt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlsfalt' })
    },
    {
      path: '/berg-vastra',
      name: "Berg Västra",
      component: ProjectPage,
      extraProps: { projectUrl: 'berg-vastra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berg-vastra' })
    },
    {
      path: '/vindkraftpark-lekvall',
      name: "Vindkraftpark Lekvall",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-lekvall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-lekvall' })
    },
    {
      path: '/girovind',
      name: "Girovind",
      component: ProjectPage,
      extraProps: { projectUrl: 'girovind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'girovind' })
    },
    {
      path: '/skatofta',
      name: "Skatofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'skatofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skatofta' })
    },
    {
      path: '/lycke',
      name: "Lycke",
      component: ProjectPage,
      extraProps: { projectUrl: 'lycke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lycke' })
    },
    {
      path: '/stale',
      name: "STALE",
      component: ProjectPage,
      extraProps: { projectUrl: 'stale' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stale' })
    },
    {
      path: '/vindkraftprojekt-stale',
      name: "Vindkraftprojekt Stale",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftprojekt-stale' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftprojekt-stale' })
    },
    {
      path: '/lejdebergen',
      name: "LEJDEBERGEN",
      component: ProjectPage,
      extraProps: { projectUrl: 'lejdebergen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lejdebergen' })
    },
    {
      path: '/neanberg/vik',
      name: "Neanberg/VIK",
      component: ProjectPage,
      extraProps: { projectUrl: 'neanberg/vik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'neanberg/vik' })
    },
    {
      path: '/duvered',
      name: "Duvered",
      component: ProjectPage,
      extraProps: { projectUrl: 'duvered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duvered' })
    },
    {
      path: '/vindpark-ekesbo',
      name: "Vindpark Ekesbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ekesbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ekesbo' })
    },
    {
      path: '/faleberg',
      name: "Fåleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'faleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'faleberg' })
    },
    {
      path: '/vindkraft-bangahagen',
      name: "Vindkraft Bångahagen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-bangahagen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-bangahagen' })
    },
    {
      path: '/sjoberg',
      name: "Sjöberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjoberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjoberg' })
    },
    {
      path: '/simmatorp-/-7835',
      name: "SIMMATORP / 7835",
      component: ProjectPage,
      extraProps: { projectUrl: 'simmatorp-/-7835' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'simmatorp-/-7835' })
    },
    {
      path: '/viglunda-/-7307',
      name: "VIGLUNDA / 7307",
      component: ProjectPage,
      extraProps: { projectUrl: 'viglunda-/-7307' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viglunda-/-7307' })
    },
    {
      path: '/kilagården-/7306-1',
      name: "KILAGÅRDEN /7306-1",
      component: ProjectPage,
      extraProps: { projectUrl: 'kilagården-/7306-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kilagården-/7306-1' })
    },
    {
      path: '/karstorp-/-7044-3',
      name: "KARSTORP / 7044-3",
      component: ProjectPage,
      extraProps: { projectUrl: 'karstorp-/-7044-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karstorp-/-7044-3' })
    },
    {
      path: '/nyckeltorp-/-7308-2',
      name: "NYCKELTORP / 7308-2",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyckeltorp-/-7308-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyckeltorp-/-7308-2' })
    },
    {
      path: '/blombacka-/-7837-1',
      name: "BLOMBACKA / 7837-1",
      component: ProjectPage,
      extraProps: { projectUrl: 'blombacka-/-7837-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blombacka-/-7837-1' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslosa' })
    },
    {
      path: '/-askeberga',
      name: "Askeberga",
      component: ProjectPage,
      extraProps: { projectUrl: '-askeberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-askeberga' })
    },
    {
      path: '/bossgarden-(galneryd)',
      name: "Bossgården (Galneryd)",
      component: ProjectPage,
      extraProps: { projectUrl: 'bossgarden-(galneryd)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bossgarden-(galneryd)' })
    },
    {
      path: '/getaryggen,-soderryd,-stora-bjorstorp',
      name: "Getaryggen, Söderryd, Stora Björstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'getaryggen,-soderryd,-stora-bjorstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'getaryggen,-soderryd,-stora-bjorstorp' })
    },
    {
      path: '/fagelas-torp',
      name: "Fågelås-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagelas-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagelas-torp' })
    },
    {
      path: '/fagelas-spakas,-borrbackstorp',
      name: "Fågelås-Spakås, Borrbäckstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagelas-spakas,-borrbackstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagelas-spakas,-borrbackstorp' })
    },
    {
      path: '/badene',
      name: "Badene",
      component: ProjectPage,
      extraProps: { projectUrl: 'badene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'badene' })
    },
    {
      path: '/goteve-vindpark',
      name: "Göteve Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'goteve-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'goteve-vindpark' })
    },
    {
      path: '/monarp',
      name: "Mönarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'monarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'monarp' })
    },
    {
      path: '/skanum-a3',
      name: "Skånum A3",
      component: ProjectPage,
      extraProps: { projectUrl: 'skanum-a3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skanum-a3' })
    },
    {
      path: '/tyskagarden',
      name: "Tyskagården",
      component: ProjectPage,
      extraProps: { projectUrl: 'tyskagarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tyskagarden' })
    },
    {
      path: '/vissle',
      name: "Vissle",
      component: ProjectPage,
      extraProps: { projectUrl: 'vissle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vissle' })
    },
    {
      path: '/ramsnas',
      name: "Ramsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsnas' })
    },
    {
      path: '/ullavi',
      name: "Ullavi",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullavi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullavi' })
    },
    {
      path: '/kyleberg',
      name: "Kyleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'kyleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kyleberg' })
    },
    {
      path: '/raby',
      name: "Råby",
      component: ProjectPage,
      extraProps: { projectUrl: 'raby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raby' })
    },
    {
      path: '/boda',
      name: "Boda",
      component: ProjectPage,
      extraProps: { projectUrl: 'boda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boda' })
    },
    {
      path: '/hogstad-gard',
      name: "Högstad Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogstad-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogstad-gard' })
    },
    {
      path: '/svenneby-gard',
      name: "Svenneby Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenneby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenneby-gard' })
    },
    {
      path: '/hackegarden',
      name: "Hackegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'hackegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hackegarden' })
    },
    {
      path: '/skottorp',
      name: "Skottorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skottorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skottorp' })
    },
    {
      path: '/vallberga-gard-molla',
      name: "Vallberga Gård Mölla",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallberga-gard-molla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallberga-gard-molla' })
    },
    {
      path: '/hasslas-morups-lunnagard',
      name: "Hässlås Morups-Lunnagård",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslas-morups-lunnagard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslas-morups-lunnagard' })
    },
    {
      path: '/hasslas-morups-lunnagard',
      name: "Hässlås Morups-Lunnagård",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslas-morups-lunnagard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslas-morups-lunnagard' })
    },
    {
      path: '/sprangskulla',
      name: "Språngskulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'sprangskulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sprangskulla' })
    },
    {
      path: '/torekull-mr-trend-9001',
      name: "Torekull Mr trend 9001",
      component: ProjectPage,
      extraProps: { projectUrl: 'torekull-mr-trend-9001' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torekull-mr-trend-9001' })
    },
    {
      path: '/tvaaker',
      name: "Tvååker",
      component: ProjectPage,
      extraProps: { projectUrl: 'tvaaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tvaaker' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/spekerods-torp',
      name: "Spekeröds-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'spekerods-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spekerods-torp' })
    },
    {
      path: '/hog',
      name: "Hog",
      component: ProjectPage,
      extraProps: { projectUrl: 'hog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hog' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berg' })
    },
    {
      path: '/svarteborg',
      name: "Svarteborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarteborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarteborg' })
    },
    {
      path: '/hede-ryr',
      name: "Hede-Ryr",
      component: ProjectPage,
      extraProps: { projectUrl: 'hede-ryr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hede-ryr' })
    },
    {
      path: '/vindpark-annerod',
      name: "Vindpark Anneröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-annerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-annerod' })
    },
    {
      path: '/hessland',
      name: "Hessland",
      component: ProjectPage,
      extraProps: { projectUrl: 'hessland' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hessland' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/kloverod',
      name: "Klöveröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'kloverod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kloverod' })
    },
    {
      path: '/taranderod,-lurs-amdal',
      name: "Taranderöd, Lurs-Amdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'taranderod,-lurs-amdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taranderod,-lurs-amdal' })
    },
    {
      path: '/lur-backa',
      name: "Lur-Backa",
      component: ProjectPage,
      extraProps: { projectUrl: 'lur-backa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lur-backa' })
    },
    {
      path: '/kil-lursang',
      name: "Kil-Lursäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil-lursang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil-lursang' })
    },
    {
      path: '/kil-lursang',
      name: "Kil-Lursäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil-lursang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil-lursang' })
    },
    {
      path: '/kil',
      name: "Kil",
      component: ProjectPage,
      extraProps: { projectUrl: 'kil' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kil' })
    },
    {
      path: '/hajom-holane',
      name: "Hajom Holane",
      component: ProjectPage,
      extraProps: { projectUrl: 'hajom-holane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hajom-holane' })
    },
    {
      path: '/eolus-vind',
      name: "Eolus Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'eolus-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eolus-vind' })
    },
    {
      path: '/ulvstorp,-djerf',
      name: "Ulvstorp, Djerf",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulvstorp,-djerf' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulvstorp,-djerf' })
    },
    {
      path: '/tumleberg-norr',
      name: "Tumleberg Norr",
      component: ProjectPage,
      extraProps: { projectUrl: 'tumleberg-norr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tumleberg-norr' })
    },
    {
      path: '/lid',
      name: "Lid",
      component: ProjectPage,
      extraProps: { projectUrl: 'lid' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lid' })
    },
    {
      path: '/tangelsbol',
      name: "Tängelsbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'tangelsbol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tangelsbol' })
    },
    {
      path: '/grinstads-hagen-2-ost',
      name: "Grinstads-Hagen 2 öst",
      component: ProjectPage,
      extraProps: { projectUrl: 'grinstads-hagen-2-ost' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grinstads-hagen-2-ost' })
    },
    {
      path: '/vastergarden-5',
      name: "Västergården 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastergarden-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastergarden-5' })
    },
    {
      path: '/fagelbacka',
      name: "Fågelbacka",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagelbacka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagelbacka' })
    },
    {
      path: '/sobyn',
      name: "Söbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'sobyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sobyn' })
    },
    {
      path: '/bolstads-prastgard-1',
      name: "Bolstads-Prästgård 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bolstads-prastgard-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bolstads-prastgard-1' })
    },
    {
      path: '/brabol',
      name: "Bråbol",
      component: ProjectPage,
      extraProps: { projectUrl: 'brabol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brabol' })
    },
    {
      path: '/holken',
      name: "Holken",
      component: ProjectPage,
      extraProps: { projectUrl: 'holken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holken' })
    },
    {
      path: '/sannersby',
      name: "Sannersby",
      component: ProjectPage,
      extraProps: { projectUrl: 'sannersby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sannersby' })
    },
    {
      path: '/stora-farsnas',
      name: "Stora Farsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-farsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-farsnas' })
    },
    {
      path: '/berghem',
      name: "Berghem",
      component: ProjectPage,
      extraProps: { projectUrl: 'berghem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berghem' })
    },
    {
      path: '/branneberg',
      name: "Bränneberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'branneberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'branneberg' })
    },
    {
      path: '/bustorp',
      name: "Bustorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bustorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bustorp' })
    },
    {
      path: '/tornum',
      name: "Tornum",
      component: ProjectPage,
      extraProps: { projectUrl: 'tornum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tornum' })
    },
    {
      path: '/ulfstorp',
      name: "Ulfstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulfstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulfstorp' })
    },
    {
      path: '/vanga-hed-1',
      name: "Vånga Hed 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vanga-hed-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vanga-hed-1' })
    },
    {
      path: '/kollbogarden-iii',
      name: "Kollbogården III",
      component: ProjectPage,
      extraProps: { projectUrl: 'kollbogarden-iii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kollbogarden-iii' })
    },
    {
      path: '/äle',
      name: "Äle",
      component: ProjectPage,
      extraProps: { projectUrl: 'äle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äle' })
    },
    {
      path: '/äskekarr-1&2',
      name: "Äskekärr 1&2",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskekarr-1&2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskekarr-1&2' })
    },
    {
      path: '/noteberg',
      name: "Nöteberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'noteberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'noteberg' })
    },
    {
      path: '/sivik',
      name: "Sivik",
      component: ProjectPage,
      extraProps: { projectUrl: 'sivik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sivik' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlekarr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlekarr' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlekarr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlekarr' })
    },
    {
      path: '/gunnarby-&-skoghem',
      name: "Gunnarby & Skoghem",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarby-&-skoghem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarby-&-skoghem' })
    },
    {
      path: '/herrestads-svenseröd',
      name: "HERRESTADS-SVENSERÖD",
      component: ProjectPage,
      extraProps: { projectUrl: 'herrestads-svenseröd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'herrestads-svenseröd' })
    },
    {
      path: '/nordmanneröd',
      name: "NORDMANNERÖD",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordmanneröd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordmanneröd' })
    },
    {
      path: '/rålanda',
      name: "RÅLANDA",
      component: ProjectPage,
      extraProps: { projectUrl: 'rålanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rålanda' })
    },
    {
      path: '/råsseröd',
      name: "RÅSSERÖD",
      component: ProjectPage,
      extraProps: { projectUrl: 'råsseröd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'råsseröd' })
    },
    {
      path: '/bockegarden',
      name: "Bockegården",
      component: ProjectPage,
      extraProps: { projectUrl: 'bockegarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bockegarden' })
    },
    {
      path: '/haljerud',
      name: "Häljerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'haljerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haljerud' })
    },
    {
      path: '/honseberg',
      name: "Hönseberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'honseberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'honseberg' })
    },
    {
      path: '/upplo',
      name: "Upplo",
      component: ProjectPage,
      extraProps: { projectUrl: 'upplo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'upplo' })
    },
    {
      path: '/hasselbacka',
      name: "Hässelbacka",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasselbacka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasselbacka' })
    },
    {
      path: '/soderbodane',
      name: "Söderbodane",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderbodane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderbodane' })
    },
    {
      path: '/varslen',
      name: "Värslen",
      component: ProjectPage,
      extraProps: { projectUrl: 'varslen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varslen' })
    },
    {
      path: '/arvidstorp-vind',
      name: "Arvidstorp vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'arvidstorp-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arvidstorp-vind' })
    },
    {
      path: '/stenbrona-saleby',
      name: "Stenbrona-Saleby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenbrona-saleby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenbrona-saleby' })
    },
    {
      path: '/narefors-1-norr',
      name: "Närefors 1 Norr",
      component: ProjectPage,
      extraProps: { projectUrl: 'narefors-1-norr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'narefors-1-norr' })
    },
    {
      path: '/bast',
      name: "Bast",
      component: ProjectPage,
      extraProps: { projectUrl: 'bast' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bast' })
    },
    {
      path: '/lindarva',
      name: "Lindärva",
      component: ProjectPage,
      extraProps: { projectUrl: 'lindarva' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lindarva' })
    },
    {
      path: '/harjevad',
      name: "Härjevad",
      component: ProjectPage,
      extraProps: { projectUrl: 'harjevad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harjevad' })
    },
    {
      path: '/storeberg',
      name: "Storeberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'storeberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storeberg' })
    },
    {
      path: '/entorp-/-5690-1',
      name: "ENTORP / 5690-1",
      component: ProjectPage,
      extraProps: { projectUrl: 'entorp-/-5690-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'entorp-/-5690-1' })
    },
    {
      path: '/horshaga-/-7309',
      name: "HORSHAGA / 7309",
      component: ProjectPage,
      extraProps: { projectUrl: 'horshaga-/-7309' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horshaga-/-7309' })
    },
    {
      path: '/skalleberg-och-dunabolet',
      name: "Skalleberg och Dunabolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'skalleberg-och-dunabolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skalleberg-och-dunabolet' })
    },
    {
      path: '/skalleberg-och-bossgarden',
      name: "Skalleberg och Bossgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'skalleberg-och-bossgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skalleberg-och-bossgarden' })
    },
    {
      path: '/åsen',
      name: "Åsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsen' })
    },
    {
      path: '/prastbolet',
      name: "Prästbolet",
      component: ProjectPage,
      extraProps: { projectUrl: 'prastbolet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prastbolet' })
    },
    {
      path: '/fridene',
      name: "Fridene",
      component: ProjectPage,
      extraProps: { projectUrl: 'fridene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fridene' })
    },
    {
      path: '/övre-rinkabacken',
      name: "Övre Rinkabäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'övre-rinkabacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övre-rinkabacken' })
    },
    {
      path: '/skalleberg',
      name: "Skalleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'skalleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skalleberg' })
    },
    {
      path: '/krogstorp',
      name: "Krogstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'krogstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'krogstorp' })
    },
    {
      path: '/gudhem',
      name: "Gudhem",
      component: ProjectPage,
      extraProps: { projectUrl: 'gudhem' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gudhem' })
    },
    {
      path: '/skanum-r1',
      name: "Skånum R1",
      component: ProjectPage,
      extraProps: { projectUrl: 'skanum-r1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skanum-r1' })
    },
    {
      path: '/vindkraftanlaggning-norrboda',
      name: "Vindkraftanläggning Norrboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftanlaggning-norrboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftanlaggning-norrboda' })
    },
    {
      path: '/vindkraftanlaggning-grannas-eka',
      name: "Vindkraftanläggning Grannäs Eka",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftanlaggning-grannas-eka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftanlaggning-grannas-eka' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'granasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granasen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/blotskog',
      name: "Blötskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'blotskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blotskog' })
    },
    {
      path: '/albrunna-norra',
      name: "Albrunna norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'albrunna-norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'albrunna-norra' })
    },
    {
      path: '/albrunna-norra',
      name: "Albrunna norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'albrunna-norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'albrunna-norra' })
    },
    {
      path: '/brostorp',
      name: "Brostorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'brostorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brostorp' })
    },
    {
      path: '/brottorp',
      name: "Bröttorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'brottorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brottorp' })
    },
    {
      path: '/degerhamn-piren-i',
      name: "Degerhamn piren I",
      component: ProjectPage,
      extraProps: { projectUrl: 'degerhamn-piren-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'degerhamn-piren-i' })
    },
    {
      path: '/dorby',
      name: "Dörby",
      component: ProjectPage,
      extraProps: { projectUrl: 'dorby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dorby' })
    },
    {
      path: '/gronhogen',
      name: "Grönhögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'gronhogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gronhogen' })
    },
    {
      path: '/mellstaby',
      name: "Mellstaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellstaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellstaby' })
    },
    {
      path: '/ventlinge',
      name: "Ventlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'ventlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ventlinge' })
    },
    {
      path: '/ävro',
      name: "Ävrö",
      component: ProjectPage,
      extraProps: { projectUrl: 'ävro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ävro' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellboda' })
    },
    {
      path: '/gunnon',
      name: "Gunnön",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnon' })
    },
    {
      path: '/vindkraft-stjarnarp',
      name: "Vindkraft Stjärnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-stjarnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-stjarnarp' })
    },
    {
      path: '/skintaby',
      name: "Skintaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'skintaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skintaby' })
    },
    {
      path: '/martensklack',
      name: "Mårtensklack",
      component: ProjectPage,
      extraProps: { projectUrl: 'martensklack' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'martensklack' })
    },
    {
      path: '/vackerdalberget',
      name: "Vackerdalberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vackerdalberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vackerdalberget' })
    },
    {
      path: '/vindpark-stocka',
      name: "Vindpark Stocka",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-stocka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-stocka' })
    },
    {
      path: '/vindpark-morkasen',
      name: "Vindpark Mörkåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-morkasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-morkasen' })
    },
    {
      path: '/langberget-2',
      name: "Långberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'langberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langberget-2' })
    },
    {
      path: '/raftsjohojden-syd',
      name: "Raftsjöhöjden syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'raftsjohojden-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raftsjohojden-syd' })
    },
    {
      path: '/tasvedberget',
      name: "Tåsvedberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'tasvedberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tasvedberget' })
    },
    {
      path: '/gammalbodberget-1.',
      name: "Gammalbodberget 1.",
      component: ProjectPage,
      extraProps: { projectUrl: 'gammalbodberget-1.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gammalbodberget-1.' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornefors' })
    },
    {
      path: '/axelsvik-1',
      name: "Axelsvik 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'axelsvik-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'axelsvik-1' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/nashulta-åstorp',
      name: "Näshulta Åstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'nashulta-åstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nashulta-åstorp' })
    },
    {
      path: '/brokafall',
      name: "Brokafall",
      component: ProjectPage,
      extraProps: { projectUrl: 'brokafall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brokafall' })
    },
    {
      path: '/spinkhemmet',
      name: "Spinkhemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'spinkhemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spinkhemmet' })
    },
    {
      path: '/ekekullen-dintestorp',
      name: "Ekekullen Dintestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekekullen-dintestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekekullen-dintestorp' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'paboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'paboda' })
    },
    {
      path: '/skarpa-alby-i',
      name: "Skarpa Alby I",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarpa-alby-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarpa-alby-i' })
    },
    {
      path: '/ullevi-i',
      name: "Ullevi I",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullevi-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullevi-i' })
    },
    {
      path: '/ullevi-ii',
      name: "Ullevi II",
      component: ProjectPage,
      extraProps: { projectUrl: 'ullevi-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ullevi-ii' })
    },
    {
      path: '/ryningsnas',
      name: "Ryningsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryningsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryningsnas' })
    },
    {
      path: '/holm',
      name: "Holm",
      component: ProjectPage,
      extraProps: { projectUrl: 'holm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holm' })
    },
    {
      path: '/vennebjorke',
      name: "Vennebjörke",
      component: ProjectPage,
      extraProps: { projectUrl: 'vennebjorke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vennebjorke' })
    },
    {
      path: '/vannborga',
      name: "Vannborga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vannborga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vannborga' })
    },
    {
      path: '/hogberget',
      name: "Högberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogberget' })
    },
    {
      path: '/silkomhojden',
      name: "Silkomhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'silkomhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'silkomhojden' })
    },
    {
      path: '/gussjoberget',
      name: "Gussjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gussjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gussjoberget' })
    },
    {
      path: '/sausberget',
      name: "Sausberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'sausberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sausberget' })
    },
    {
      path: '/vindpark-nyvallsasen',
      name: "Vindpark Nyvallsåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-nyvallsasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-nyvallsasen' })
    },
    {
      path: '/skogberget-åsboberget-verk-1',
      name: "Skogberget-Åsboberget verk 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogberget-åsboberget-verk-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogberget-åsboberget-verk-1' })
    },
    {
      path: '/vindkraft-vardkasen',
      name: "Vindkraft Vårdkasen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraft-vardkasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraft-vardkasen' })
    },
    {
      path: '/vardkallberget',
      name: "Vårdkallberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vardkallberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vardkallberget' })
    },
    {
      path: '/bodtjarnberget',
      name: "Bodtjärnberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodtjarnberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodtjarnberget' })
    },
    {
      path: '/harrsjon',
      name: "Harrsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'harrsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harrsjon' })
    },
    {
      path: '/betasberget',
      name: "Betåsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'betasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'betasberget' })
    },
    {
      path: '/handsjokrusen-1.',
      name: "Handsjökrusen 1.",
      component: ProjectPage,
      extraProps: { projectUrl: 'handsjokrusen-1.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'handsjokrusen-1.' })
    },
    {
      path: '/hornefors',
      name: "Hörnefors",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornefors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornefors' })
    },
    {
      path: '/noret',
      name: "Noret",
      component: ProjectPage,
      extraProps: { projectUrl: 'noret' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'noret' })
    },
    {
      path: '/storon',
      name: "Storön",
      component: ProjectPage,
      extraProps: { projectUrl: 'storon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storon' })
    },
    {
      path: '/holma',
      name: "Holma",
      component: ProjectPage,
      extraProps: { projectUrl: 'holma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holma' })
    },
    {
      path: '/hasslehult',
      name: "Hässlehult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslehult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslehult' })
    },
    {
      path: '/spraxhult',
      name: "Språxhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'spraxhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spraxhult' })
    },
    {
      path: '/ljungryda',
      name: "Ljungryda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungryda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungryda' })
    },
    {
      path: '/ljungryda',
      name: "Ljungryda",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungryda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungryda' })
    },
    {
      path: '/pebo-naturbruk',
      name: "PeBo Naturbruk",
      component: ProjectPage,
      extraProps: { projectUrl: 'pebo-naturbruk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pebo-naturbruk' })
    },
    {
      path: '/urasa',
      name: "Uråsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'urasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'urasa' })
    },
    {
      path: '/ryd-ronnerum',
      name: "Ryd-Rönnerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryd-ronnerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryd-ronnerum' })
    },
    {
      path: '/ryd_ronnerum_hogsrum',
      name: "Ryd_Rönnerum_Högsrum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryd_ronnerum_hogsrum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryd_ronnerum_hogsrum' })
    },
    {
      path: '/åsen',
      name: "Åsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsen' })
    },
    {
      path: '/vindpark-klubbacken',
      name: "Vindpark Klubbäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-klubbacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-klubbacken' })
    },
    {
      path: '/nyborg-ryggasen',
      name: "Nyborg Ryggåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyborg-ryggasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyborg-ryggasen' })
    },
    {
      path: '/hannas',
      name: "Hannas",
      component: ProjectPage,
      extraProps: { projectUrl: 'hannas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hannas' })
    },
    {
      path: '/ängalid-iii-&-torsnas,-torrlosa',
      name: "Ängalid III & Torsnäs, Torrlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'ängalid-iii-&-torsnas,-torrlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ängalid-iii-&-torsnas,-torrlosa' })
    },
    {
      path: '/kadesjo-gussnava',
      name: "Kadesjö-Gussnava",
      component: ProjectPage,
      extraProps: { projectUrl: 'kadesjo-gussnava' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kadesjo-gussnava' })
    },
    {
      path: '/soderto-mossarp',
      name: "Söderto-Mossarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderto-mossarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderto-mossarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/tranarp-karreberga',
      name: "Tranarp Kärreberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'tranarp-karreberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tranarp-karreberga' })
    },
    {
      path: '/karreberga',
      name: "Kärreberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'karreberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karreberga' })
    },
    {
      path: '/vastanby-gard',
      name: "Västanby gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastanby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastanby-gard' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/örum-vindkraftpark',
      name: "Örum vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'örum-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örum-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodervidinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodervidinge' })
    },
    {
      path: '/snapparp',
      name: "Snapparp",
      component: ProjectPage,
      extraProps: { projectUrl: 'snapparp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'snapparp' })
    },
    {
      path: '/vinninge',
      name: "Vinninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'vinninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vinninge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/äsperod',
      name: "Äsperöd",
      component: ProjectPage,
      extraProps: { projectUrl: 'äsperod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äsperod' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/kvistofta-katslosa',
      name: "Kvistofta-Katslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvistofta-katslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvistofta-katslosa' })
    },
    {
      path: '/odarslov',
      name: "Odarslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'odarslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odarslov' })
    },
    {
      path: '/reslovsgarden',
      name: "Reslövsgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'reslovsgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'reslovsgarden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/faladen',
      name: "Fäladen",
      component: ProjectPage,
      extraProps: { projectUrl: 'faladen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'faladen' })
    },
    {
      path: '/tirup-hallstorp',
      name: "Tirup Hällstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tirup-hallstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tirup-hallstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/trolleberg',
      name: "Trolleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'trolleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trolleberg' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/tjustorp',
      name: "Tjustorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tjustorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tjustorp' })
    },
    {
      path: '/kadesjo',
      name: "Kadesjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'kadesjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kadesjo' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectUrl: 'klamby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klamby' })
    },
    {
      path: '/lyby',
      name: "Lyby",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sallerup',
      name: "Sallerup",
      component: ProjectPage,
      extraProps: { projectUrl: 'sallerup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sallerup' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/orup',
      name: "Orup",
      component: ProjectPage,
      extraProps: { projectUrl: 'orup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orup' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/valterslund',
      name: "Valterslund",
      component: ProjectPage,
      extraProps: { projectUrl: 'valterslund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'valterslund' })
    },
    {
      path: '/everod-vindkraftpark',
      name: "Everöd Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'everod-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'everod-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyllinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyllinge' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyllinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyllinge' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectUrl: 'sanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sanna' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectUrl: 'sanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sanna' })
    },
    {
      path: '/sonnertorp',
      name: "Sönnertorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sonnertorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sonnertorp' })
    },
    {
      path: '/norra-hamnen',
      name: "Norra hamnen",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-hamnen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-hamnen' })
    },
    {
      path: '/varpinge',
      name: "Värpinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'varpinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varpinge' })
    },
    {
      path: '/annelov',
      name: "Annelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'annelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'annelov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hyllstorp',
      name: "Hyllstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyllstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyllstorp' })
    },
    {
      path: '/ingelstrade',
      name: "Ingelsträde",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstrade' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstrade' })
    },
    {
      path: '/stora-gorslov-tappeshusen',
      name: "Stora Görslöv-Täppeshusen",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-gorslov-tappeshusen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-gorslov-tappeshusen' })
    },
    {
      path: '/kullen',
      name: "Kullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'kullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kullen' })
    },
    {
      path: '/stora-gorslov',
      name: "Stora Görslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-gorslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-gorslov' })
    },
    {
      path: '/bronneslov',
      name: "Brönneslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'bronneslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bronneslov' })
    },
    {
      path: '/arup-hogserod',
      name: "Arup-Högseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'arup-hogserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'arup-hogserod' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bjaresjo',
      name: "Bjäresjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjaresjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjaresjo' })
    },
    {
      path: '/slitevind-rynge',
      name: "Slitevind Rynge",
      component: ProjectPage,
      extraProps: { projectUrl: 'slitevind-rynge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slitevind-rynge' })
    },
    {
      path: '/slitevind-eriksfalt',
      name: "Slitevind Eriksfält",
      component: ProjectPage,
      extraProps: { projectUrl: 'slitevind-eriksfalt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slitevind-eriksfalt' })
    },
    {
      path: '/larsbo',
      name: "Larsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'larsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larsbo' })
    },
    {
      path: '/marsvinsholm',
      name: "Marsvinsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'marsvinsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marsvinsholm' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gislov',
      name: "Gislöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'gislov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gislov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/maglarp-vindkraftpark',
      name: "Maglarp vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'maglarp-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'maglarp-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/önnestad',
      name: "Önnestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'önnestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'önnestad' })
    },
    {
      path: '/mollebacken',
      name: "Möllebacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'mollebacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mollebacken' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hovby',
      name: "Hovby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hovby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hovby' })
    },
    {
      path: '/fjalkinge',
      name: "Fjälkinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjalkinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjalkinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hassla',
      name: "Hassla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hassla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hassla' })
    },
    {
      path: '/rinkaby',
      name: "Rinkaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'rinkaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rinkaby' })
    },
    {
      path: '/nobbelov',
      name: "Nöbbelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'nobbelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nobbelov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/karsholm',
      name: "Karsholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsholm' })
    },
    {
      path: '/legeved',
      name: "Legeved",
      component: ProjectPage,
      extraProps: { projectUrl: 'legeved' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'legeved' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/simris1',
      name: "Simris1",
      component: ProjectPage,
      extraProps: { projectUrl: 'simris1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'simris1' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/karlaby',
      name: "Karlaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'karlaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karlaby' })
    },
    {
      path: '/rorum',
      name: "Rörum",
      component: ProjectPage,
      extraProps: { projectUrl: 'rorum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rorum' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/olofsfalt',
      name: "Olofsfält",
      component: ProjectPage,
      extraProps: { projectUrl: 'olofsfalt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'olofsfalt' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lonnstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lonnstorp' })
    },
    {
      path: '/halmstadgarden',
      name: "Halmstadgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'halmstadgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halmstadgarden' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lonnstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lonnstorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sodervidinge',
      name: "Södervidinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodervidinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodervidinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/alestad-harderup',
      name: "Alestad-Hårderup",
      component: ProjectPage,
      extraProps: { projectUrl: 'alestad-harderup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alestad-harderup' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectUrl: 'klamby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klamby' })
    },
    {
      path: '/klamby',
      name: "Klamby",
      component: ProjectPage,
      extraProps: { projectUrl: 'klamby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klamby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/assmasa',
      name: "Assmåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'assmasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'assmasa' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/alestad-harderup',
      name: "Alestad-Hårderup",
      component: ProjectPage,
      extraProps: { projectUrl: 'alestad-harderup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alestad-harderup' })
    },
    {
      path: '/huggelseke-bessinge',
      name: "Huggelseke-Bessinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'huggelseke-bessinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'huggelseke-bessinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/brostorp-snogerod',
      name: "Brostorp-Snogeröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'brostorp-snogerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brostorp-snogerod' })
    },
    {
      path: '/everod-vindkraftpark',
      name: "Everöd Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'everod-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'everod-vindkraftpark' })
    },
    {
      path: '/ramsasa',
      name: "Ramsåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsasa' })
    },
    {
      path: '/ingelstadgarden',
      name: "Ingelstadgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstadgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstadgarden' })
    },
    {
      path: '/bollerup',
      name: "Bollerup",
      component: ProjectPage,
      extraProps: { projectUrl: 'bollerup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bollerup' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangby' })
    },
    {
      path: '/odarslov',
      name: "Odarslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'odarslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odarslov' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangby' })
    },
    {
      path: '/örja',
      name: "Örja",
      component: ProjectPage,
      extraProps: { projectUrl: 'örja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örja' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/kulla-gunnarstorp',
      name: "Kulla Gunnarstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kulla-gunnarstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kulla-gunnarstorp' })
    },
    {
      path: '/horsahagen',
      name: "Horsahagen",
      component: ProjectPage,
      extraProps: { projectUrl: 'horsahagen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horsahagen' })
    },
    {
      path: '/gunnestorp',
      name: "Gunnestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnestorp' })
    },
    {
      path: '/glimminge',
      name: "Glimminge",
      component: ProjectPage,
      extraProps: { projectUrl: 'glimminge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'glimminge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/varlinge-gard',
      name: "Värlinge gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'varlinge-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varlinge-gard' })
    },
    {
      path: '/ravatorpet',
      name: "Rävatorpet",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravatorpet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravatorpet' })
    },
    {
      path: '/vastrabygard',
      name: "Västrabygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastrabygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastrabygard' })
    },
    {
      path: '/slattang',
      name: "Slättäng",
      component: ProjectPage,
      extraProps: { projectUrl: 'slattang' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slattang' })
    },
    {
      path: '/äspinge-klemedstorp',
      name: "Äspinge-Klemedstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'äspinge-klemedstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äspinge-klemedstorp' })
    },
    {
      path: '/gardstanga',
      name: "Gårdstånga",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardstanga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardstanga' })
    },
    {
      path: '/ruuthsbo-karragarden',
      name: "Ruuthsbo-Kärragården",
      component: ProjectPage,
      extraProps: { projectUrl: 'ruuthsbo-karragarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ruuthsbo-karragarden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ystad-hamn',
      name: "Ystad hamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'ystad-hamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ystad-hamn' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/st-herrestad',
      name: "St Herrestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'st-herrestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'st-herrestad' })
    },
    {
      path: '/stora-beddinge',
      name: "Stora Beddinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-beddinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-beddinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/bronnestad-honsinge',
      name: "Brönnestad-Hönsinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'bronnestad-honsinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bronnestad-honsinge' })
    },
    {
      path: '/stora-jordberga',
      name: "Stora Jordberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-jordberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-jordberga' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lyngby',
      name: "Lyngby",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngby' })
    },
    {
      path: '/gards-kopinge',
      name: "Gärds-Köpinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'gards-kopinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gards-kopinge' })
    },
    {
      path: '/lyngbygard',
      name: "Lyngbygård",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngbygard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngbygard' })
    },
    {
      path: '/isgrannatorp',
      name: "Isgrannatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'isgrannatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'isgrannatorp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/östra-herrestad-vindkraftpark',
      name: "Östra Herrestad Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-herrestad-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-herrestad-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/ingelstorp-strovelstorp',
      name: "Ingelstorp Strövelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstorp-strovelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstorp-strovelstorp' })
    },
    {
      path: '/össjo-vindkraftpark',
      name: "Össjö vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'össjo-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'össjo-vindkraftpark' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/skorpinge',
      name: "Skörpinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'skorpinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skorpinge' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/klagerup',
      name: "Klågerup",
      component: ProjectPage,
      extraProps: { projectUrl: 'klagerup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klagerup' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangby' })
    },
    {
      path: '/jordberga',
      name: "Jordberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'jordberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jordberga' })
    },
    {
      path: '/kiaby',
      name: "Kiaby",
      component: ProjectPage,
      extraProps: { projectUrl: 'kiaby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kiaby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'paboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'paboda' })
    },
    {
      path: '/paboda',
      name: "Påboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'paboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'paboda' })
    },
    {
      path: '/kvilla-2',
      name: "Kvilla 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'kvilla-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kvilla-2' })
    },
    {
      path: '/finlabo',
      name: "Finlabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'finlabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'finlabo' })
    },
    {
      path: '/hunderum',
      name: "Hunderum",
      component: ProjectPage,
      extraProps: { projectUrl: 'hunderum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hunderum' })
    },
    {
      path: '/langlot',
      name: "Långlöt",
      component: ProjectPage,
      extraProps: { projectUrl: 'langlot' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langlot' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/stromby/karlshult',
      name: "Strömby/Karlshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'stromby/karlshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stromby/karlshult' })
    },
    {
      path: '/langore',
      name: "Långöre",
      component: ProjectPage,
      extraProps: { projectUrl: 'langore' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langore' })
    },
    {
      path: '/ronnerum',
      name: "Rönnerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ronnerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ronnerum' })
    },
    {
      path: '/egby-2',
      name: "Egby 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'egby-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'egby-2' })
    },
    {
      path: '/langore',
      name: "Långöre",
      component: ProjectPage,
      extraProps: { projectUrl: 'langore' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langore' })
    },
    {
      path: '/melosa',
      name: "Melösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'melosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'melosa' })
    },
    {
      path: '/mellboda',
      name: "Mellböda",
      component: ProjectPage,
      extraProps: { projectUrl: 'mellboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mellboda' })
    },
    {
      path: '/egby',
      name: "Egby",
      component: ProjectPage,
      extraProps: { projectUrl: 'egby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'egby' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/vertical-wind',
      name: "Vertical Wind",
      component: ProjectPage,
      extraProps: { projectUrl: 'vertical-wind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vertical-wind' })
    },
    {
      path: '/ekangen',
      name: "Ekängen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekangen' })
    },
    {
      path: '/nallkullen',
      name: "Nallkullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nallkullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nallkullen' })
    },
    {
      path: '/bjornskallen',
      name: "Björnskallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornskallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornskallen' })
    },
    {
      path: '/bjarme',
      name: "Bjärme",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjarme' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjarme' })
    },
    {
      path: '/ytterocke',
      name: "Ytterocke",
      component: ProjectPage,
      extraProps: { projectUrl: 'ytterocke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ytterocke' })
    },
    {
      path: '/kamsasen',
      name: "Kamsåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'kamsasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kamsasen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/runtuna',
      name: "Runtuna",
      component: ProjectPage,
      extraProps: { projectUrl: 'runtuna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runtuna' })
    },
    {
      path: '/alvesta',
      name: "Alvesta",
      component: ProjectPage,
      extraProps: { projectUrl: 'alvesta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alvesta' })
    },
    {
      path: '/haneberg',
      name: "Haneberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'haneberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haneberg' })
    },
    {
      path: '/stavhalla',
      name: "Stavhälla",
      component: ProjectPage,
      extraProps: { projectUrl: 'stavhalla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stavhalla' })
    },
    {
      path: '/nas/knutsberg',
      name: "Näs/Knutsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas/knutsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas/knutsberg' })
    },
    {
      path: '/överada',
      name: "Överåda",
      component: ProjectPage,
      extraProps: { projectUrl: 'överada' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'överada' })
    },
    {
      path: '/golhult',
      name: "Gölhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'golhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'golhult' })
    },
    {
      path: '/äskhult',
      name: "Äskhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskhult' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/topperyd-3-och-4',
      name: "Topperyd 3 och 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'topperyd-3-och-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'topperyd-3-och-4' })
    },
    {
      path: '/topperyd-1-och-2',
      name: "Topperyd 1 och 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'topperyd-1-och-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'topperyd-1-och-2' })
    },
    {
      path: '/vallerstad-vind',
      name: "Vallerstad Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallerstad-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallerstad-vind' })
    },
    {
      path: '/lemhults-torp',
      name: "Lemhults Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lemhults-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lemhults-torp' })
    },
    {
      path: '/oberga',
      name: "Oberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'oberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'oberga' })
    },
    {
      path: '/ytterbostugan',
      name: "Ytterbostugan",
      component: ProjectPage,
      extraProps: { projectUrl: 'ytterbostugan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ytterbostugan' })
    },
    {
      path: '/selaon',
      name: "Selaön",
      component: ProjectPage,
      extraProps: { projectUrl: 'selaon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'selaon' })
    },
    {
      path: '/pirkafjall',
      name: "Pirkafjäll",
      component: ProjectPage,
      extraProps: { projectUrl: 'pirkafjall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pirkafjall' })
    },
    {
      path: '/pirkafjall/kyrkarp',
      name: "Pirkafjäll/Kyrkarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'pirkafjall/kyrkarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pirkafjall/kyrkarp' })
    },
    {
      path: '/smedstorp',
      name: "Smedstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'smedstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smedstorp' })
    },
    {
      path: '/tumback',
      name: "Tumbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'tumback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tumback' })
    },
    {
      path: '/skogshemmet(sacken)',
      name: "Skogshemmet(säcken)",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogshemmet(sacken)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogshemmet(sacken)' })
    },
    {
      path: '/tumback',
      name: "Tumbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'tumback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tumback' })
    },
    {
      path: '/karaby/kallerstad-vindkraftsprojekt',
      name: "Karaby/Kållerstad vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectUrl: 'karaby/kallerstad-vindkraftsprojekt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karaby/kallerstad-vindkraftsprojekt' })
    },
    {
      path: '/trollabergens-vindkraftsprojekt',
      name: "Trollabergens vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectUrl: 'trollabergens-vindkraftsprojekt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trollabergens-vindkraftsprojekt' })
    },
    {
      path: '/norra-bohults-vindkraftsprojekt',
      name: "Norra Bohults vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-bohults-vindkraftsprojekt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-bohults-vindkraftsprojekt' })
    },
    {
      path: '/kashults-vindkraftsprojekt',
      name: "Käshults vindkraftsprojekt",
      component: ProjectPage,
      extraProps: { projectUrl: 'kashults-vindkraftsprojekt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kashults-vindkraftsprojekt' })
    },
    {
      path: '/gunillaberg',
      name: "Gunillaberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunillaberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunillaberg' })
    },
    {
      path: '/brahehus',
      name: "Brahehus",
      component: ProjectPage,
      extraProps: { projectUrl: 'brahehus' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brahehus' })
    },
    {
      path: '/sotterfallan',
      name: "Sötterfällan",
      component: ProjectPage,
      extraProps: { projectUrl: 'sotterfallan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sotterfallan' })
    },
    {
      path: '/lyckas',
      name: "Lyckås",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyckas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyckas' })
    },
    {
      path: '/tuggarpsgruppen',
      name: "Tuggarpsgruppen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tuggarpsgruppen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tuggarpsgruppen' })
    },
    {
      path: '/hagganas',
      name: "Hägganäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagganas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagganas' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallhult' })
    },
    {
      path: '/packebo',
      name: "Packebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'packebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'packebo' })
    },
    {
      path: '/hylte',
      name: "Hylte",
      component: ProjectPage,
      extraProps: { projectUrl: 'hylte' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hylte' })
    },
    {
      path: '/vindpark-hoglandet',
      name: "Vindpark Höglandet",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-hoglandet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-hoglandet' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'fredriksdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fredriksdal' })
    },
    {
      path: '/gallaryd-gripenberg',
      name: "Gällaryd-Gripenberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'gallaryd-gripenberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gallaryd-gripenberg' })
    },
    {
      path: '/hindsen',
      name: "Hindsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hindsen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hindsen' })
    },
    {
      path: '/äsprilla,-froderyd',
      name: "Äsprilla, Fröderyd",
      component: ProjectPage,
      extraProps: { projectUrl: 'äsprilla,-froderyd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äsprilla,-froderyd' })
    },
    {
      path: '/stensasa',
      name: "Stensåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'stensasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stensasa' })
    },
    {
      path: '/lilla-gotestorp',
      name: "Lilla Götestorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-gotestorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-gotestorp' })
    },
    {
      path: '/skaftesfall',
      name: "Skäftesfall",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaftesfall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaftesfall' })
    },
    {
      path: '/adelov',
      name: "Adelöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'adelov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'adelov' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/äskas-harshult-(10-verk-varav-2-i-vetlanda.-ansoka',
      name: "Äskås-Harshult (10 verk varav 2 i Vetlanda. Ansöka",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskas-harshult-(10-verk-varav-2-i-vetlanda.-ansoka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskas-harshult-(10-verk-varav-2-i-vetlanda.-ansoka' })
    },
    {
      path: '/haneberg',
      name: "Haneberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'haneberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haneberg' })
    },
    {
      path: '/ryfors',
      name: "Ryfors",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryfors' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryfors' })
    },
    {
      path: '/örserum',
      name: "Örserum",
      component: ProjectPage,
      extraProps: { projectUrl: 'örserum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örserum' })
    },
    {
      path: '/solslatt',
      name: "Solslätt",
      component: ProjectPage,
      extraProps: { projectUrl: 'solslatt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'solslatt' })
    },
    {
      path: '/lemnhult',
      name: "Lemnhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'lemnhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lemnhult' })
    },
    {
      path: '/skogsvind',
      name: "Skogsvind",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogsvind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogsvind' })
    },
    {
      path: '/halaveden(lyngsbergen)',
      name: "Hålaveden(Lyngsbergen)",
      component: ProjectPage,
      extraProps: { projectUrl: 'halaveden(lyngsbergen)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halaveden(lyngsbergen)' })
    },
    {
      path: '/olsvenne-2',
      name: "Olsvenne 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'olsvenne-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'olsvenne-2' })
    },
    {
      path: '/nas-sigsarve-sladdkvenni',
      name: "Näs Sigsarve Sladdkvenni",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas-sigsarve-sladdkvenni' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas-sigsarve-sladdkvenni' })
    },
    {
      path: '/grotlingbo-kauparve-marten-1',
      name: "Grötlingbo Kauparve Mårten 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-kauparve-marten-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-kauparve-marten-1' })
    },
    {
      path: '/östergarn-bengts',
      name: "Östergarn Bengts",
      component: ProjectPage,
      extraProps: { projectUrl: 'östergarn-bengts' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östergarn-bengts' })
    },
    {
      path: '/barlingbo-stave-stafva',
      name: "Barlingbo Stave Stafva",
      component: ProjectPage,
      extraProps: { projectUrl: 'barlingbo-stave-stafva' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barlingbo-stave-stafva' })
    },
    {
      path: '/fole-stora-ryftes---ryftes',
      name: "Fole Stora Ryftes - Ryftes",
      component: ProjectPage,
      extraProps: { projectUrl: 'fole-stora-ryftes---ryftes' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fole-stora-ryftes---ryftes' })
    },
    {
      path: '/lummelunda-tjauls',
      name: "Lummelunda Tjauls",
      component: ProjectPage,
      extraProps: { projectUrl: 'lummelunda-tjauls' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lummelunda-tjauls' })
    },
    {
      path: '/grotlingbo-sigsarve-vindudd-iv',
      name: "Grötlingbo Sigsarve Vindudd IV",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-sigsarve-vindudd-iv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-sigsarve-vindudd-iv' })
    },
    {
      path: '/grotlingbo-skradsarve-vindudd-v',
      name: "Grötlingbo Skradsarve Vindudd V",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-skradsarve-vindudd-v' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-skradsarve-vindudd-v' })
    },
    {
      path: '/larbro-hall-hagvards-i-hagvards-hall',
      name: "Lärbro Hall Hägvards I Hägvards Hall",
      component: ProjectPage,
      extraProps: { projectUrl: 'larbro-hall-hagvards-i-hagvards-hall' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larbro-hall-hagvards-i-hagvards-hall' })
    },
    {
      path: '/lanthamnen-klinte',
      name: "Lanthamnen Klinte",
      component: ProjectPage,
      extraProps: { projectUrl: 'lanthamnen-klinte' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lanthamnen-klinte' })
    },
    {
      path: '/nar-siglajvs-1-&-2',
      name: "När Siglajvs 1 & 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'nar-siglajvs-1-&-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nar-siglajvs-1-&-2' })
    },
    {
      path: '/grotlingbo-roes-grotlingbo-1-agri',
      name: "Grötlingbo Roes Grötlingbo 1 Agri",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-roes-grotlingbo-1-agri' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-roes-grotlingbo-1-agri' })
    },
    {
      path: '/havdhem-bols-ryftes-hulda-[kulle-2]',
      name: "Havdhem Bols Ryftes Hulda [Kulle 2]",
      component: ProjectPage,
      extraProps: { projectUrl: 'havdhem-bols-ryftes-hulda-[kulle-2]' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'havdhem-bols-ryftes-hulda-[kulle-2]' })
    },
    {
      path: '/hablingbo-stora-burge',
      name: "Hablingbo Stora Burge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hablingbo-stora-burge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hablingbo-stora-burge' })
    },
    {
      path: '/klinte-strands-isak',
      name: "Klinte Strands Isak",
      component: ProjectPage,
      extraProps: { projectUrl: 'klinte-strands-isak' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klinte-strands-isak' })
    },
    {
      path: '/hangvar-kyrkebys-2',
      name: "Hangvar Kyrkebys 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangvar-kyrkebys-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangvar-kyrkebys-2' })
    },
    {
      path: '/fole-stora-sojdeby---ryftes-kristina',
      name: "Fole Stora Sojdeby - Ryftes Kristina",
      component: ProjectPage,
      extraProps: { projectUrl: 'fole-stora-sojdeby---ryftes-kristina' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fole-stora-sojdeby---ryftes-kristina' })
    },
    {
      path: '/nas-levide-selma',
      name: "Näs Levide Selma",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas-levide-selma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas-levide-selma' })
    },
    {
      path: '/hangvar-kyrkebys-1',
      name: "Hangvar Kyrkebys 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangvar-kyrkebys-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangvar-kyrkebys-1' })
    },
    {
      path: '/hablingbo-stjups',
      name: "Hablingbo Stjups",
      component: ProjectPage,
      extraProps: { projectUrl: 'hablingbo-stjups' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hablingbo-stjups' })
    },
    {
      path: '/hellvi-stengrinde',
      name: "Hellvi Stengrinde",
      component: ProjectPage,
      extraProps: { projectUrl: 'hellvi-stengrinde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hellvi-stengrinde' })
    },
    {
      path: '/smojen-vindpark-1-[slitevind-xx]',
      name: "Smöjen vindpark 1 [Slitevind XX]",
      component: ProjectPage,
      extraProps: { projectUrl: 'smojen-vindpark-1-[slitevind-xx]' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smojen-vindpark-1-[slitevind-xx]' })
    },
    {
      path: '/kulle-vindpark',
      name: "Kulle vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'kulle-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kulle-vindpark' })
    },
    {
      path: '/gansparken-1',
      name: "Gansparken 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'gansparken-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gansparken-1' })
    },
    {
      path: '/nasudden-vast-n1',
      name: "Näsudden Väst N1",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasudden-vast-n1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasudden-vast-n1' })
    },
    {
      path: '/stugylparken-s1',
      name: "Stugylparken S1",
      component: ProjectPage,
      extraProps: { projectUrl: 'stugylparken-s1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stugylparken-s1' })
    },
    {
      path: '/mastermyr-vindkraftpark',
      name: "Mästermyr Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'mastermyr-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mastermyr-vindkraftpark' })
    },
    {
      path: '/vindpark-boge',
      name: "Vindpark Boge",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-boge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-boge' })
    },
    {
      path: '/anga-vinpark',
      name: "Anga Vinpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'anga-vinpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'anga-vinpark' })
    },
    {
      path: '/nasudden-vast-vindkraftpark',
      name: "Näsudden Väst Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasudden-vast-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasudden-vast-vindkraftpark' })
    },
    {
      path: '/forsviden-norra',
      name: "Forsviden Norra",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsviden-norra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsviden-norra' })
    },
    {
      path: '/nar-öndarve-narvind-johan',
      name: "När Öndarve Närvind Johan",
      component: ProjectPage,
      extraProps: { projectUrl: 'nar-öndarve-narvind-johan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nar-öndarve-narvind-johan' })
    },
    {
      path: '/klinte-vindpark',
      name: "Klinte Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'klinte-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klinte-vindpark' })
    },
    {
      path: '/nas-amfunds-snaigsto',
      name: "Näs Amfunds Snaigsto",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas-amfunds-snaigsto' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas-amfunds-snaigsto' })
    },
    {
      path: '/lummelunda-tjauls-agro-1',
      name: "Lummelunda Tjauls Agro 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'lummelunda-tjauls-agro-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lummelunda-tjauls-agro-1' })
    },
    {
      path: '/hablingbo-stjups-hablingbovind',
      name: "Hablingbo Stjups Hablingbovind",
      component: ProjectPage,
      extraProps: { projectUrl: 'hablingbo-stjups-hablingbovind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hablingbo-stjups-hablingbovind' })
    },
    {
      path: '/hangvar-kyrkebys,-kyrkebys-3-&-4',
      name: "Hangvar Kyrkebys, Kyrkebys 3 & 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'hangvar-kyrkebys,-kyrkebys-3-&-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hangvar-kyrkebys,-kyrkebys-3-&-4' })
    },
    {
      path: '/granliden-vindkraftpark',
      name: "Granliden vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'granliden-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granliden-vindkraftpark' })
    },
    {
      path: '/flakaberget',
      name: "Flakaberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'flakaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flakaberget' })
    },
    {
      path: '/taka-apua-vindkraftpark',
      name: "Taka Apua vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'taka-apua-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'taka-apua-vindkraftpark' })
    },
    {
      path: '/sjoatorp',
      name: "Sjöatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjoatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjoatorp' })
    },
    {
      path: '/hamneda',
      name: "Hamneda",
      component: ProjectPage,
      extraProps: { projectUrl: 'hamneda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hamneda' })
    },
    {
      path: '/trollberget',
      name: "Trollberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'trollberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trollberget' })
    },
    {
      path: '/furasa',
      name: "Furåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'furasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'furasa' })
    },
    {
      path: '/rodstahojden',
      name: "Rödstahöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodstahojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodstahojden' })
    },
    {
      path: '/playa-plannja',
      name: "Playa Plannja",
      component: ProjectPage,
      extraProps: { projectUrl: 'playa-plannja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'playa-plannja' })
    },
    {
      path: '/uljabuoda-vindkraftspark',
      name: "Uljabuoda vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'uljabuoda-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uljabuoda-vindkraftspark' })
    },
    {
      path: '/hornliden',
      name: "Hornliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornliden' })
    },
    {
      path: '/suorva-vindkraftpark',
      name: "Suorva Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'suorva-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'suorva-vindkraftpark' })
    },
    {
      path: '/horshaga',
      name: "Horshaga",
      component: ProjectPage,
      extraProps: { projectUrl: 'horshaga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horshaga' })
    },
    {
      path: '/raberg',
      name: "Råberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'raberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raberg' })
    },
    {
      path: '/vraskogen',
      name: "Vråskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vraskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vraskogen' })
    },
    {
      path: '/rute-furillen-slitevind-xi-&-xii',
      name: "Rute Furillen Slitevind XI & XII",
      component: ProjectPage,
      extraProps: { projectUrl: 'rute-furillen-slitevind-xi-&-xii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rute-furillen-slitevind-xi-&-xii' })
    },
    {
      path: '/hablingbo-bertels',
      name: "Hablingbo Bertels",
      component: ProjectPage,
      extraProps: { projectUrl: 'hablingbo-bertels' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hablingbo-bertels' })
    },
    {
      path: '/lycke',
      name: "Lycke",
      component: ProjectPage,
      extraProps: { projectUrl: 'lycke' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lycke' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skackarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skackarp' })
    },
    {
      path: '/sjomala',
      name: "Sjömåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjomala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjomala' })
    },
    {
      path: '/vindrosen-skarby',
      name: "Vindrosen Skårby",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindrosen-skarby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindrosen-skarby' })
    },
    {
      path: '/äskas-harshult',
      name: "Äskås-Harshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'äskas-harshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äskas-harshult' })
    },
    {
      path: '/stenkyrka-stora-bjars-1-&-2',
      name: "Stenkyrka Stora Bjärs 1 & 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenkyrka-stora-bjars-1-&-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenkyrka-stora-bjars-1-&-2' })
    },
    {
      path: '/kareby-torp',
      name: "Kareby-Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kareby-torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kareby-torp' })
    },
    {
      path: '/godeshult',
      name: "Gödeshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'godeshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'godeshult' })
    },
    {
      path: '/vindpark-kolvallen',
      name: "Vindpark Kölvallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-kolvallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-kolvallen' })
    },
    {
      path: '/klintarna',
      name: "Klintarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'klintarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klintarna' })
    },
    {
      path: '/lockarp',
      name: "Lockarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lockarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lockarp' })
    },
    {
      path: '/edsleskogs-hult',
      name: "Edsleskogs-Hult",
      component: ProjectPage,
      extraProps: { projectUrl: 'edsleskogs-hult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'edsleskogs-hult' })
    },
    {
      path: '/froskogs-hult',
      name: "Fröskogs-Hult",
      component: ProjectPage,
      extraProps: { projectUrl: 'froskogs-hult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'froskogs-hult' })
    },
    {
      path: '/frinnaryd',
      name: "Frinnaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'frinnaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frinnaryd' })
    },
    {
      path: '/lida',
      name: "Lida",
      component: ProjectPage,
      extraProps: { projectUrl: 'lida' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lida' })
    },
    {
      path: '/hagstad',
      name: "Hagstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagstad' })
    },
    {
      path: '/åsthult',
      name: "Åsthult",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsthult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsthult' })
    },
    {
      path: '/stora-moshult',
      name: "Stora Moshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-moshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-moshult' })
    },
    {
      path: '/grotlingbo-kattlunds',
      name: "Grötlingbo Kattlunds",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-kattlunds' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-kattlunds' })
    },
    {
      path: '/larbro-nors-norrvange-nr-1-&-2',
      name: "Lärbro Nors Norrvange Nr 1 & 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'larbro-nors-norrvange-nr-1-&-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larbro-nors-norrvange-nr-1-&-2' })
    },
    {
      path: '/hejnum-boters-(fole-stora-sojdeby)',
      name: "Hejnum Boters (Fole Stora Sojdeby)",
      component: ProjectPage,
      extraProps: { projectUrl: 'hejnum-boters-(fole-stora-sojdeby)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hejnum-boters-(fole-stora-sojdeby)' })
    },
    {
      path: '/storugns-10',
      name: "Storugns 10",
      component: ProjectPage,
      extraProps: { projectUrl: 'storugns-10' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storugns-10' })
    },
    {
      path: '/klosterstad',
      name: "Klosterstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'klosterstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klosterstad' })
    },
    {
      path: '/vavinge-/-lottstad',
      name: "Vävinge / Lottstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'vavinge-/-lottstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vavinge-/-lottstad' })
    },
    {
      path: '/lagmansberga-21',
      name: "Lagmansberga 21",
      component: ProjectPage,
      extraProps: { projectUrl: 'lagmansberga-21' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lagmansberga-21' })
    },
    {
      path: '/vindpark-harja',
      name: "Vindpark Härja",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-harja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-harja' })
    },
    {
      path: '/hanorp',
      name: "Hanorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'hanorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hanorp' })
    },
    {
      path: '/vallerstad',
      name: "Vallerstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallerstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallerstad' })
    },
    {
      path: '/ramstad',
      name: "Ramstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramstad' })
    },
    {
      path: '/hageby-vistena-ullekalv',
      name: "Hageby Vistena Ullekalv",
      component: ProjectPage,
      extraProps: { projectUrl: 'hageby-vistena-ullekalv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hageby-vistena-ullekalv' })
    },
    {
      path: '/finketorp-hogstad',
      name: "Finketorp Hogstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'finketorp-hogstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'finketorp-hogstad' })
    },
    {
      path: '/nederlosa',
      name: "Nederlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'nederlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nederlosa' })
    },
    {
      path: '/strommestad-haddestad',
      name: "Strömmestad Haddestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'strommestad-haddestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'strommestad-haddestad' })
    },
    {
      path: '/hyppinge-gardsverk',
      name: "Hyppinge Gårdsverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyppinge-gardsverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyppinge-gardsverk' })
    },
    {
      path: '/habblarp-gardsverk',
      name: "Habblarp Gårdsverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'habblarp-gardsverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'habblarp-gardsverk' })
    },
    {
      path: '/fornasa',
      name: "Fornåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'fornasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fornasa' })
    },
    {
      path: '/prasttorp',
      name: "Prästtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'prasttorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prasttorp' })
    },
    {
      path: '/hassla',
      name: "Hassla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hassla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hassla' })
    },
    {
      path: '/oras',
      name: "Orås",
      component: ProjectPage,
      extraProps: { projectUrl: 'oras' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'oras' })
    },
    {
      path: '/östen-skovde',
      name: "Östen Skövde",
      component: ProjectPage,
      extraProps: { projectUrl: 'östen-skovde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östen-skovde' })
    },
    {
      path: '/hallevadsholm-2-och-3',
      name: "Hällevadsholm 2 och 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallevadsholm-2-och-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallevadsholm-2-och-3' })
    },
    {
      path: '/kanna',
      name: "Kånna",
      component: ProjectPage,
      extraProps: { projectUrl: 'kanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kanna' })
    },
    {
      path: '/hamneda-horn',
      name: "Hamneda Horn",
      component: ProjectPage,
      extraProps: { projectUrl: 'hamneda-horn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hamneda-horn' })
    },
    {
      path: '/åby',
      name: "Åby",
      component: ProjectPage,
      extraProps: { projectUrl: 'åby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åby' })
    },
    {
      path: '/gravens-grund',
      name: "Gravens grund",
      component: ProjectPage,
      extraProps: { projectUrl: 'gravens-grund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gravens-grund' })
    },
    {
      path: '/ottravad',
      name: "Ottravad",
      component: ProjectPage,
      extraProps: { projectUrl: 'ottravad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ottravad' })
    },
    {
      path: '/gunnilstorp/tranhult',
      name: "Gunnilstorp/Tranhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnilstorp/tranhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnilstorp/tranhult' })
    },
    {
      path: '/fanneslunda----od-del-2',
      name: "Fänneslunda  - Od del 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'fanneslunda----od-del-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fanneslunda----od-del-2' })
    },
    {
      path: '/mardaklev',
      name: "Mårdaklev",
      component: ProjectPage,
      extraProps: { projectUrl: 'mardaklev' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mardaklev' })
    },
    {
      path: '/vindkraftpark-fyrskog',
      name: "Vindkraftpark Fyrskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-fyrskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-fyrskog' })
    },
    {
      path: '/ytterstad',
      name: "Ytterstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'ytterstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ytterstad' })
    },
    {
      path: '/lovaskog',
      name: "Lövaskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'lovaskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lovaskog' })
    },
    {
      path: '/vindasen',
      name: "Vindåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindasen' })
    },
    {
      path: '/rubblarp/lokaryd/vastanhaga',
      name: "Rubblarp/Lökaryd/Västanhaga",
      component: ProjectPage,
      extraProps: { projectUrl: 'rubblarp/lokaryd/vastanhaga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rubblarp/lokaryd/vastanhaga' })
    },
    {
      path: '/åkers-grytas',
      name: "Åkers-Grytås",
      component: ProjectPage,
      extraProps: { projectUrl: 'åkers-grytas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åkers-grytas' })
    },
    {
      path: '/hallabron-(ulricehamn)',
      name: "Hallabron (Ulricehamn)",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallabron-(ulricehamn)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallabron-(ulricehamn)' })
    },
    {
      path: '/vassberg',
      name: "Våssberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassberg' })
    },
    {
      path: '/gustav-dahlen:1',
      name: "Gustav Dahlen:1",
      component: ProjectPage,
      extraProps: { projectUrl: 'gustav-dahlen:1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gustav-dahlen:1' })
    },
    {
      path: '/sorby-åraslov',
      name: "Sörby-Åraslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'sorby-åraslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sorby-åraslov' })
    },
    {
      path: '/lillasate',
      name: "Lillasäte",
      component: ProjectPage,
      extraProps: { projectUrl: 'lillasate' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lillasate' })
    },
    {
      path: '/äsphult-bjarnhult',
      name: "Äsphult-Bjärnhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'äsphult-bjarnhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äsphult-bjarnhult' })
    },
    {
      path: '/notteback',
      name: "Nottebäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'notteback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'notteback' })
    },
    {
      path: '/gustav-dahlén-2',
      name: "Gustav Dahlén 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'gustav-dahlén-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gustav-dahlén-2' })
    },
    {
      path: '/navlinge',
      name: "Nävlinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'navlinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'navlinge' })
    },
    {
      path: '/norra-karr',
      name: "Norra Kärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-karr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-karr' })
    },
    {
      path: '/hasslosa',
      name: "Hasslösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'hasslosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hasslosa' })
    },
    {
      path: '/tveta-/-1',
      name: "TVETA / 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'tveta-/-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tveta-/-1' })
    },
    {
      path: '/tveta-/-3',
      name: "TVETA / 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'tveta-/-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tveta-/-3' })
    },
    {
      path: '/vindpark-stormossen',
      name: "Vindpark Stormossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-stormossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-stormossen' })
    },
    {
      path: '/wastgota-wind',
      name: "Wästgöta Wind",
      component: ProjectPage,
      extraProps: { projectUrl: 'wastgota-wind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wastgota-wind' })
    },
    {
      path: '/hallesas-ucklums-berg',
      name: "Hällesås Ucklums-Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallesas-ucklums-berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallesas-ucklums-berg' })
    },
    {
      path: '/ljungkile-svenshogen',
      name: "Ljungkile Svenshögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ljungkile-svenshogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ljungkile-svenshogen' })
    },
    {
      path: '/ås',
      name: "Ås",
      component: ProjectPage,
      extraProps: { projectUrl: 'ås' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ås' })
    },
    {
      path: '/tagelberg-2',
      name: "Tagelberg 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'tagelberg-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tagelberg-2' })
    },
    {
      path: '/ramnared',
      name: "Ramnared",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramnared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramnared' })
    },
    {
      path: '/lunnekullen',
      name: "Lunnekullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunnekullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunnekullen' })
    },
    {
      path: '/sotared',
      name: "Sotared",
      component: ProjectPage,
      extraProps: { projectUrl: 'sotared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sotared' })
    },
    {
      path: '/hallsas,-stenstorp,-norrkvarn,-äskekarr,-slatteval',
      name: "Hällsås, Stenstorp, Norrkvarn, Äskekärr, Slätteval",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallsas,-stenstorp,-norrkvarn,-äskekarr,-slatteval' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallsas,-stenstorp,-norrkvarn,-äskekarr,-slatteval' })
    },
    {
      path: '/vindpark-edsleskog',
      name: "Vindpark Edsleskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-edsleskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-edsleskog' })
    },
    {
      path: '/vindpark-annerod',
      name: "Vindpark Anneröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-annerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-annerod' })
    },
    {
      path: '/almeshult',
      name: "Almeshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'almeshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almeshult' })
    },
    {
      path: '/holmen',
      name: "Holmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmen' })
    },
    {
      path: '/stensvattsmarken',
      name: "Stensvattsmarken",
      component: ProjectPage,
      extraProps: { projectUrl: 'stensvattsmarken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stensvattsmarken' })
    },
    {
      path: '/ytterberg',
      name: "Ytterberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'ytterberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ytterberg' })
    },
    {
      path: '/åmliden',
      name: "Åmliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'åmliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åmliden' })
    },
    {
      path: '/åmliden-2',
      name: "Åmliden 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'åmliden-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åmliden-2' })
    },
    {
      path: '/fjalbyn',
      name: "Fjälbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjalbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjalbyn' })
    },
    {
      path: '/bodberget---vastra',
      name: "Bodberget - västra",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodberget---vastra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodberget---vastra' })
    },
    {
      path: '/humlemala',
      name: "Humlemåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlemala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlemala' })
    },
    {
      path: '/ire',
      name: "Ire",
      component: ProjectPage,
      extraProps: { projectUrl: 'ire' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ire' })
    },
    {
      path: '/loberget',
      name: "Loberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'loberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'loberget' })
    },
    {
      path: '/rosendal',
      name: "Rosendal",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosendal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosendal' })
    },
    {
      path: '/storliden',
      name: "Storliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'storliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storliden' })
    },
    {
      path: '/holmon',
      name: "Holmön",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmon' })
    },
    {
      path: '/holmon---vastra',
      name: "Holmön - västra",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmon---vastra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmon---vastra' })
    },
    {
      path: '/gudhema-vallar',
      name: "Gudhema Vallar",
      component: ProjectPage,
      extraProps: { projectUrl: 'gudhema-vallar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gudhema-vallar' })
    },
    {
      path: '/uleberg',
      name: "Uleberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'uleberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uleberg' })
    },
    {
      path: '/blekinge-offshore',
      name: "Blekinge Offshore",
      component: ProjectPage,
      extraProps: { projectUrl: 'blekinge-offshore' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blekinge-offshore' })
    },
    {
      path: '/brickan-(svegstrom)',
      name: "Brickan (Svegström)",
      component: ProjectPage,
      extraProps: { projectUrl: 'brickan-(svegstrom)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brickan-(svegstrom)' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gagnef-rosberget',
      name: "Gagnef Rosberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gagnef-rosberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gagnef-rosberget' })
    },
    {
      path: '/saby',
      name: "Säby",
      component: ProjectPage,
      extraProps: { projectUrl: 'saby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'saby' })
    },
    {
      path: '/vindkraftpark-grafsnas-och-livered-m.fl.',
      name: "Vindkraftpark Gräfsnäs och Livered m.fl.",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-grafsnas-och-livered-m.fl.' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-grafsnas-och-livered-m.fl.' })
    },
    {
      path: '/rocklinge',
      name: "Röcklinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'rocklinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rocklinge' })
    },
    {
      path: '/finnhyttan',
      name: "Finnhyttan",
      component: ProjectPage,
      extraProps: { projectUrl: 'finnhyttan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'finnhyttan' })
    },
    {
      path: '/knutstorp-palstorp',
      name: "Knutstorp-Pålstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'knutstorp-palstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knutstorp-palstorp' })
    },
    {
      path: '/vettebergets-vindpark',
      name: "Vettebergets Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'vettebergets-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vettebergets-vindpark' })
    },
    {
      path: '/hycklinge-5.8',
      name: "Hycklinge 5.8",
      component: ProjectPage,
      extraProps: { projectUrl: 'hycklinge-5.8' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hycklinge-5.8' })
    },
    {
      path: '/skedom',
      name: "Skedom",
      component: ProjectPage,
      extraProps: { projectUrl: 'skedom' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skedom' })
    },
    {
      path: '/norra-gullabo',
      name: "Norra Gullabo",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-gullabo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-gullabo' })
    },
    {
      path: '/grotlingbo-uddvide-domerarve',
      name: "Grötlingbo Uddvide Domerarve",
      component: ProjectPage,
      extraProps: { projectUrl: 'grotlingbo-uddvide-domerarve' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grotlingbo-uddvide-domerarve' })
    },
    {
      path: '/ulvatorp',
      name: "Ulvatorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulvatorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulvatorp' })
    },
    {
      path: '/ulatofta',
      name: "Ulatofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulatofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulatofta' })
    },
    {
      path: '/raby',
      name: "Råby",
      component: ProjectPage,
      extraProps: { projectUrl: 'raby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raby' })
    },
    {
      path: '/ormastorp',
      name: "Ormastorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ormastorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ormastorp' })
    },
    {
      path: '/elestorp/tormastrorp',
      name: "Elestorp/Tormastrorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'elestorp/tormastrorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'elestorp/tormastrorp' })
    },
    {
      path: '/haraholmen',
      name: "Haraholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'haraholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haraholmen' })
    },
    {
      path: '/marakallen',
      name: "Marakallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'marakallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marakallen' })
    },
    {
      path: '/bondon',
      name: "Bondön",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondon' })
    },
    {
      path: '/dragaliden',
      name: "Dragaliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'dragaliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dragaliden' })
    },
    {
      path: '/stor-blaliden',
      name: "Stor-Blåliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'stor-blaliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stor-blaliden' })
    },
    {
      path: '/bondon-vindkraftpark-ii',
      name: "Bondön vindkraftpark II",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondon-vindkraftpark-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondon-vindkraftpark-ii' })
    },
    {
      path: '/klocktarnan-vindkraftpark',
      name: "Klocktärnan vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'klocktarnan-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klocktarnan-vindkraftpark' })
    },
    {
      path: '/trundon-vindkraftpark',
      name: "Trundön vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'trundon-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trundon-vindkraftpark' })
    },
    {
      path: '/haradskolen',
      name: "Haradskölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'haradskolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haradskolen' })
    },
    {
      path: '/seskaro',
      name: "Seskarö",
      component: ProjectPage,
      extraProps: { projectUrl: 'seskaro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'seskaro' })
    },
    {
      path: '/vindkraftpark-stopparen',
      name: "Vindkraftpark Stopparen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-stopparen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-stopparen' })
    },
    {
      path: '/vuono-vindkraftpark',
      name: "Vuono vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'vuono-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vuono-vindkraftpark' })
    },
    {
      path: '/vindkraftverk-luossavaara',
      name: "Vindkraftverk Luossavaara",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-luossavaara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-luossavaara' })
    },
    {
      path: '/viscaria-3',
      name: "Viscaria 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-3' })
    },
    {
      path: '/viscaria-2',
      name: "Viscaria 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-2' })
    },
    {
      path: '/viscaria-1',
      name: "Viscaria 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-1' })
    },
    {
      path: '/viscaria-4',
      name: "Viscaria 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-4' })
    },
    {
      path: '/viscaria-6',
      name: "Viscaria 6",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-6' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-6' })
    },
    {
      path: '/viscaria-5',
      name: "Viscaria 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'viscaria-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'viscaria-5' })
    },
    {
      path: '/kulltorp',
      name: "Kulltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'kulltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kulltorp' })
    },
    {
      path: '/brataparken',
      name: "Bråtaparken",
      component: ProjectPage,
      extraProps: { projectUrl: 'brataparken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brataparken' })
    },
    {
      path: '/enviksberget',
      name: "Enviksberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'enviksberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'enviksberget' })
    },
    {
      path: '/torserods-vindkraftpark-5',
      name: "Torseröds Vindkraftpark 5",
      component: ProjectPage,
      extraProps: { projectUrl: 'torserods-vindkraftpark-5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torserods-vindkraftpark-5' })
    },
    {
      path: '/frostnas',
      name: "Frostnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'frostnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frostnas' })
    },
    {
      path: '/ingelstorp',
      name: "Ingelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ingelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ingelstorp' })
    },
    {
      path: '/svenska-bjorn',
      name: "Svenska Björn",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenska-bjorn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenska-bjorn' })
    },
    {
      path: '/vimmelstorp',
      name: "Vimmelstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vimmelstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vimmelstorp' })
    },
    {
      path: '/vindkraftverk-hakunge',
      name: "Vindkraftverk Hakunge",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftverk-hakunge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftverk-hakunge' })
    },
    {
      path: '/bleckberget',
      name: "Bleckberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bleckberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bleckberget' })
    },
    {
      path: '/storflohojden',
      name: "Storflohöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'storflohojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storflohojden' })
    },
    {
      path: '/ismundsundet',
      name: "Ismundsundet",
      component: ProjectPage,
      extraProps: { projectUrl: 'ismundsundet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ismundsundet' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gastsjo',
      name: "Gastsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'gastsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gastsjo' })
    },
    {
      path: '/fisksjolandet',
      name: "Fisksjölandet",
      component: ProjectPage,
      extraProps: { projectUrl: 'fisksjolandet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fisksjolandet' })
    },
    {
      path: '/fjallmarkhojden',
      name: "Fjällmarkhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjallmarkhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjallmarkhojden' })
    },
    {
      path: '/hog-hanasen',
      name: "Hög-Hanåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hog-hanasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hog-hanasen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/granberg',
      name: "Granberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'granberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granberg' })
    },
    {
      path: '/hallarp',
      name: "Hällarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallarp' })
    },
    {
      path: '/dalen',
      name: "Dalen",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalen' })
    },
    {
      path: '/kastlosa_15_4',
      name: "Kastlösa_15_4",
      component: ProjectPage,
      extraProps: { projectUrl: 'kastlosa_15_4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kastlosa_15_4' })
    },
    {
      path: '/mullbergs-vindpark',
      name: "Mullbergs Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'mullbergs-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mullbergs-vindpark' })
    },
    {
      path: '/vindpark-ljungbyholm',
      name: "Vindpark Ljungbyholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ljungbyholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ljungbyholm' })
    },
    {
      path: '/ignaberga-attarp',
      name: "Ignaberga-Attarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ignaberga-attarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ignaberga-attarp' })
    },
    {
      path: '/bingsta',
      name: "Bingsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'bingsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bingsta' })
    },
    {
      path: '/gisselas',
      name: "Gisselås",
      component: ProjectPage,
      extraProps: { projectUrl: 'gisselas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gisselas' })
    },
    {
      path: '/gimmene',
      name: "Gimmene",
      component: ProjectPage,
      extraProps: { projectUrl: 'gimmene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gimmene' })
    },
    {
      path: '/gunborod',
      name: "Gunboröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunborod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunborod' })
    },
    {
      path: '/gunnarsbo',
      name: "Gunnarsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarsbo' })
    },
    {
      path: '/gustavstorp',
      name: "Gustavstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gustavstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gustavstorp' })
    },
    {
      path: '/hena',
      name: "Henå",
      component: ProjectPage,
      extraProps: { projectUrl: 'hena' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hena' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'kastlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kastlosa' })
    },
    {
      path: '/wind-elsson',
      name: "Wind-elsson",
      component: ProjectPage,
      extraProps: { projectUrl: 'wind-elsson' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wind-elsson' })
    },
    {
      path: '/ättersta',
      name: "Ättersta",
      component: ProjectPage,
      extraProps: { projectUrl: 'ättersta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ättersta' })
    },
    {
      path: '/norrvange',
      name: "Norrvange",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrvange' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrvange' })
    },
    {
      path: '/tangelgarde',
      name: "Tängelgårde",
      component: ProjectPage,
      extraProps: { projectUrl: 'tangelgarde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tangelgarde' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/nas',
      name: "Näs",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas' })
    },
    {
      path: '/golingstorp',
      name: "Gölingstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'golingstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'golingstorp' })
    },
    {
      path: '/trilleholm',
      name: "Trilleholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'trilleholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trilleholm' })
    },
    {
      path: '/rudet',
      name: "Rudet",
      component: ProjectPage,
      extraProps: { projectUrl: 'rudet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rudet' })
    },
    {
      path: '/katrineberg',
      name: "katrineberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'katrineberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'katrineberg' })
    },
    {
      path: '/ask',
      name: "Ask",
      component: ProjectPage,
      extraProps: { projectUrl: 'ask' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ask' })
    },
    {
      path: '/lonnstorp',
      name: "Lönnstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lonnstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lonnstorp' })
    },
    {
      path: '/stromby',
      name: "Strömby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stromby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stromby' })
    },
    {
      path: '/soderasen',
      name: "Söderåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderasen' })
    },
    {
      path: '/sjisjka-vindkraftspark',
      name: "Sjisjka Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjisjka-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjisjka-vindkraftspark' })
    },
    {
      path: '/kraklingbo-vidfalle',
      name: "Kräklingbo Vidfälle",
      component: ProjectPage,
      extraProps: { projectUrl: 'kraklingbo-vidfalle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kraklingbo-vidfalle' })
    },
    {
      path: '/prastkila',
      name: "Prästkila",
      component: ProjectPage,
      extraProps: { projectUrl: 'prastkila' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prastkila' })
    },
    {
      path: '/projekt-gullspangsparken',
      name: "Projekt Gullspångsparken",
      component: ProjectPage,
      extraProps: { projectUrl: 'projekt-gullspangsparken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'projekt-gullspangsparken' })
    },
    {
      path: '/smedstorp',
      name: "Smedstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'smedstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smedstorp' })
    },
    {
      path: '/frotorp',
      name: "Frotorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'frotorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frotorp' })
    },
    {
      path: '/skarvesjo',
      name: "Skarvesjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarvesjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarvesjo' })
    },
    {
      path: '/kronoback',
      name: "Kronobäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'kronoback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kronoback' })
    },
    {
      path: '/hyggelsebo',
      name: "Hyggelsebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyggelsebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyggelsebo' })
    },
    {
      path: '/hanger',
      name: "Hånger",
      component: ProjectPage,
      extraProps: { projectUrl: 'hanger' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hanger' })
    },
    {
      path: '/mjosjo',
      name: "Mjösjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'mjosjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mjosjo' })
    },
    {
      path: '/storgrundet',
      name: "Storgrundet",
      component: ProjectPage,
      extraProps: { projectUrl: 'storgrundet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storgrundet' })
    },
    {
      path: '/kattegatt-offshore',
      name: "Kattegatt Offshore",
      component: ProjectPage,
      extraProps: { projectUrl: 'kattegatt-offshore' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kattegatt-offshore' })
    },
    {
      path: '/brunsmo-vindkraftpark',
      name: "Brunsmo Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'brunsmo-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brunsmo-vindkraftpark' })
    },
    {
      path: '/skappentorp',
      name: "Skäppentorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skappentorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skappentorp' })
    },
    {
      path: '/em',
      name: "Em",
      component: ProjectPage,
      extraProps: { projectUrl: 'em' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'em' })
    },
    {
      path: '/monsteras-bruk',
      name: "Mönsterås Bruk",
      component: ProjectPage,
      extraProps: { projectUrl: 'monsteras-bruk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'monsteras-bruk' })
    },
    {
      path: '/hanger',
      name: "Hånger",
      component: ProjectPage,
      extraProps: { projectUrl: 'hanger' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hanger' })
    },
    {
      path: '/salitradberget',
      name: "Säliträdberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'salitradberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salitradberget' })
    },
    {
      path: '/dalen-2',
      name: "Dalen 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalen-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalen-2' })
    },
    {
      path: '/uvberget',
      name: "Uvberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'uvberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uvberget' })
    },
    {
      path: '/baldersrum',
      name: "Baldersrum",
      component: ProjectPage,
      extraProps: { projectUrl: 'baldersrum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'baldersrum' })
    },
    {
      path: '/slatte',
      name: "Slätte",
      component: ProjectPage,
      extraProps: { projectUrl: 'slatte' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'slatte' })
    },
    {
      path: '/åbuen-2',
      name: "Åbuen 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'åbuen-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åbuen-2' })
    },
    {
      path: '/lyrestad-ii',
      name: "Lyrestad II",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyrestad-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyrestad-ii' })
    },
    {
      path: '/hacksvik-del-1',
      name: "Håcksvik del 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'hacksvik-del-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hacksvik-del-1' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/barstad',
      name: "Bårstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'barstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barstad' })
    },
    {
      path: '/bolsnas',
      name: "Bölsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'bolsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bolsnas' })
    },
    {
      path: '/rakenas',
      name: "Rakenäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'rakenas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rakenas' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'backen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backen' })
    },
    {
      path: '/kusberget',
      name: "Kusberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kusberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kusberget' })
    },
    {
      path: '/brevikshult-vastra',
      name: "Brevikshult Västra",
      component: ProjectPage,
      extraProps: { projectUrl: 'brevikshult-vastra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brevikshult-vastra' })
    },
    {
      path: '/tomasliden',
      name: "Tomasliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'tomasliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tomasliden' })
    },
    {
      path: '/verboberget---reutoberget',
      name: "Verboberget - Reutoberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'verboberget---reutoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'verboberget---reutoberget' })
    },
    {
      path: '/åberget',
      name: "Åberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'åberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åberget' })
    },
    {
      path: '/varkumla-brandstorp',
      name: "Vårkumla-Brandstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'varkumla-brandstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varkumla-brandstorp' })
    },
    {
      path: '/jung-åsa',
      name: "Jung-Åsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'jung-åsa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jung-åsa' })
    },
    {
      path: '/lansterhojden',
      name: "Länsterhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'lansterhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lansterhojden' })
    },
    {
      path: '/galtryggen',
      name: "Galtryggen",
      component: ProjectPage,
      extraProps: { projectUrl: 'galtryggen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galtryggen' })
    },
    {
      path: '/årjang-byn',
      name: "Årjäng Byn",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-byn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-byn' })
    },
    {
      path: '/frykdalshojden',
      name: "Frykdalshöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'frykdalshojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'frykdalshojden' })
    },
    {
      path: '/vase',
      name: "Väse",
      component: ProjectPage,
      extraProps: { projectUrl: 'vase' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vase' })
    },
    {
      path: '/fagerasen',
      name: "Fageråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagerasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagerasen' })
    },
    {
      path: '/skyttmon',
      name: "Skyttmon",
      component: ProjectPage,
      extraProps: { projectUrl: 'skyttmon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skyttmon' })
    },
    {
      path: '/degerkolen',
      name: "Degerkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'degerkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'degerkolen' })
    },
    {
      path: '/galberget',
      name: "Galberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'galberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galberget' })
    },
    {
      path: '/storflotten',
      name: "Storflötten",
      component: ProjectPage,
      extraProps: { projectUrl: 'storflotten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storflotten' })
    },
    {
      path: '/ulvas',
      name: "Ulvås",
      component: ProjectPage,
      extraProps: { projectUrl: 'ulvas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ulvas' })
    },
    {
      path: '/brevikshult-östra',
      name: "Brevikshult Östra",
      component: ProjectPage,
      extraProps: { projectUrl: 'brevikshult-östra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brevikshult-östra' })
    },
    {
      path: '/skonero',
      name: "Skönero",
      component: ProjectPage,
      extraProps: { projectUrl: 'skonero' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skonero' })
    },
    {
      path: '/fastlycke_övraby',
      name: "Fastlycke_Övraby",
      component: ProjectPage,
      extraProps: { projectUrl: 'fastlycke_övraby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fastlycke_övraby' })
    },
    {
      path: '/juktan-vindkraftpark',
      name: "Juktan Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'juktan-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'juktan-vindkraftpark' })
    },
    {
      path: '/norrback-vindkraftpark',
      name: "Norrbäck Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrback-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrback-vindkraftpark' })
    },
    {
      path: '/bredtrask',
      name: "Bredträsk",
      component: ProjectPage,
      extraProps: { projectUrl: 'bredtrask' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bredtrask' })
    },
    {
      path: '/bramhult',
      name: "Brämhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'bramhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bramhult' })
    },
    {
      path: '/ornungaskogen-del-1',
      name: "Ornungaskogen del 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'ornungaskogen-del-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ornungaskogen-del-1' })
    },
    {
      path: '/ornungaskogen-del-2',
      name: "Ornungaskogen del 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'ornungaskogen-del-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ornungaskogen-del-2' })
    },
    {
      path: '/stenkulla',
      name: "Stenkulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'stenkulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stenkulla' })
    },
    {
      path: '/årjang-nv-etapp-2',
      name: "Årjäng NV etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'årjang-nv-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'årjang-nv-etapp-2' })
    },
    {
      path: '/haljebyn',
      name: "Häljebyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'haljebyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haljebyn' })
    },
    {
      path: '/gravlingkullarna',
      name: "Grävlingkullarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'gravlingkullarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gravlingkullarna' })
    },
    {
      path: '/fjallrammen',
      name: "Fjällrämmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjallrammen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjallrammen' })
    },
    {
      path: '/tavelsas',
      name: "Tävelsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'tavelsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tavelsas' })
    },
    {
      path: '/sommarsate',
      name: "Sommarsäte",
      component: ProjectPage,
      extraProps: { projectUrl: 'sommarsate' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sommarsate' })
    },
    {
      path: '/svarvarehemmet',
      name: "Svarvarehemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarvarehemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarvarehemmet' })
    },
    {
      path: '/svarvarehemmet',
      name: "Svarvarehemmet",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarvarehemmet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarvarehemmet' })
    },
    {
      path: '/bjornberget',
      name: "Björnberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornberget' })
    },
    {
      path: '/gubbaberget',
      name: "Gubbaberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gubbaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gubbaberget' })
    },
    {
      path: '/gubbaberget-soder',
      name: "Gubbaberget Söder",
      component: ProjectPage,
      extraProps: { projectUrl: 'gubbaberget-soder' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gubbaberget-soder' })
    },
    {
      path: '/hastkullen',
      name: "Hästkullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hastkullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hastkullen' })
    },
    {
      path: '/spelasen',
      name: "Spelåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'spelasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spelasen' })
    },
    {
      path: '/spjutasberget',
      name: "Spjutåsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'spjutasberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'spjutasberget' })
    },
    {
      path: '/bengtsboda',
      name: "Bengtsboda",
      component: ProjectPage,
      extraProps: { projectUrl: 'bengtsboda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bengtsboda' })
    },
    {
      path: '/letesmala',
      name: "Letesmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'letesmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'letesmala' })
    },
    {
      path: '/letesmala-2',
      name: "Letesmåla 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'letesmala-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'letesmala-2' })
    },
    {
      path: '/öbackarna--lorbyrondellen',
      name: "Öbackarna- Lörbyrondellen",
      component: ProjectPage,
      extraProps: { projectUrl: 'öbackarna--lorbyrondellen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öbackarna--lorbyrondellen' })
    },
    {
      path: '/skalmershult',
      name: "Skälmershult",
      component: ProjectPage,
      extraProps: { projectUrl: 'skalmershult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skalmershult' })
    },
    {
      path: '/longastunturi',
      name: "Longastunturi",
      component: ProjectPage,
      extraProps: { projectUrl: 'longastunturi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'longastunturi' })
    },
    {
      path: '/kuusivaara',
      name: "Kuusivaara",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuusivaara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuusivaara' })
    },
    {
      path: '/kuusivaara',
      name: "Kuusivaara",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuusivaara' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuusivaara' })
    },
    {
      path: '/bergon',
      name: "Bergön",
      component: ProjectPage,
      extraProps: { projectUrl: 'bergon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bergon' })
    },
    {
      path: '/haraldsmala',
      name: "Haraldsmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'haraldsmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haraldsmala' })
    },
    {
      path: '/haraldsmala',
      name: "Haraldsmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'haraldsmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haraldsmala' })
    },
    {
      path: '/hoppeskogen',
      name: "Hoppeskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hoppeskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hoppeskogen' })
    },
    {
      path: '/pilaholm',
      name: "Pilaholm",
      component: ProjectPage,
      extraProps: { projectUrl: 'pilaholm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pilaholm' })
    },
    {
      path: '/åby-alebo',
      name: "Åby-Alebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'åby-alebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åby-alebo' })
    },
    {
      path: '/karnebo',
      name: "Kärnebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'karnebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karnebo' })
    },
    {
      path: '/ryd-ronnerum',
      name: "Ryd-Rönnerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryd-ronnerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryd-ronnerum' })
    },
    {
      path: '/tyllinge',
      name: "Tyllinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'tyllinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tyllinge' })
    },
    {
      path: '/tegen',
      name: "Tegen",
      component: ProjectPage,
      extraProps: { projectUrl: 'tegen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tegen' })
    },
    {
      path: '/vindplats-goteborg',
      name: "Vindplats Göteborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindplats-goteborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindplats-goteborg' })
    },
    {
      path: '/forsmark-vindkraftpark',
      name: "Forsmark Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsmark-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsmark-vindkraftpark' })
    },
    {
      path: '/äpplaryd',
      name: "Äpplaryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'äpplaryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äpplaryd' })
    },
    {
      path: '/prastatorpet',
      name: "Prästatorpet",
      component: ProjectPage,
      extraProps: { projectUrl: 'prastatorpet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'prastatorpet' })
    },
    {
      path: '/sikaskalen',
      name: "Sikåskälen",
      component: ProjectPage,
      extraProps: { projectUrl: 'sikaskalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sikaskalen' })
    },
    {
      path: '/morttjarnberget-2',
      name: "Mörttjärnberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'morttjarnberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morttjarnberget-2' })
    },
    {
      path: '/åliden---lidenprojekten',
      name: "Åliden - Lidenprojekten",
      component: ProjectPage,
      extraProps: { projectUrl: 'åliden---lidenprojekten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åliden---lidenprojekten' })
    },
    {
      path: '/groninge',
      name: "Gröninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'groninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'groninge' })
    },
    {
      path: '/palsbo',
      name: "Palsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'palsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'palsbo' })
    },
    {
      path: '/villkol',
      name: "Villköl",
      component: ProjectPage,
      extraProps: { projectUrl: 'villkol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'villkol' })
    },
    {
      path: '/sundstorp',
      name: "Sundstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'sundstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sundstorp' })
    },
    {
      path: '/lannaker',
      name: "Lännåker",
      component: ProjectPage,
      extraProps: { projectUrl: 'lannaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lannaker' })
    },
    {
      path: '/grimmared',
      name: "Grimmared",
      component: ProjectPage,
      extraProps: { projectUrl: 'grimmared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grimmared' })
    },
    {
      path: '/knuts-kulle',
      name: "Knuts kulle",
      component: ProjectPage,
      extraProps: { projectUrl: 'knuts-kulle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knuts-kulle' })
    },
    {
      path: '/gunnilstorp/tranhult',
      name: "Gunnilstorp/Tranhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnilstorp/tranhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnilstorp/tranhult' })
    },
    {
      path: '/botsmark',
      name: "Botsmark",
      component: ProjectPage,
      extraProps: { projectUrl: 'botsmark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'botsmark' })
    },
    {
      path: '/öllov',
      name: "Öllöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'öllov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öllov' })
    },
    {
      path: '/gamlebo',
      name: "Gamlebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'gamlebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gamlebo' })
    },
    {
      path: '/lebro',
      name: "Lebro",
      component: ProjectPage,
      extraProps: { projectUrl: 'lebro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lebro' })
    },
    {
      path: '/stora-tockarp',
      name: "Stora Tockarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-tockarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-tockarp' })
    },
    {
      path: '/galthult',
      name: "Galthult",
      component: ProjectPage,
      extraProps: { projectUrl: 'galthult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galthult' })
    },
    {
      path: '/fjarestad',
      name: "Fjärestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjarestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjarestad' })
    },
    {
      path: '/stora-gorslov',
      name: "Stora Gorslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-gorslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-gorslov' })
    },
    {
      path: '/backen',
      name: "Bäcken",
      component: ProjectPage,
      extraProps: { projectUrl: 'backen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backen' })
    },
    {
      path: '/alltorp',
      name: "Alltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'alltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alltorp' })
    },
    {
      path: '/vindkraftpark-hemberget',
      name: "Vindkraftpark Hemberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-hemberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-hemberget' })
    },
    {
      path: '/åndberget',
      name: "Åndberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'åndberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åndberget' })
    },
    {
      path: '/kraftberget',
      name: "Kraftberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kraftberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kraftberget' })
    },
    {
      path: '/ågard',
      name: "Ågård",
      component: ProjectPage,
      extraProps: { projectUrl: 'ågard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ågard' })
    },
    {
      path: '/torpaskoga',
      name: "Torpaskoga",
      component: ProjectPage,
      extraProps: { projectUrl: 'torpaskoga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torpaskoga' })
    },
    {
      path: '/öna',
      name: "Öna",
      component: ProjectPage,
      extraProps: { projectUrl: 'öna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öna' })
    },
    {
      path: '/skederids-boda',
      name: "Skederids-Boda",
      component: ProjectPage,
      extraProps: { projectUrl: 'skederids-boda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skederids-boda' })
    },
    {
      path: '/svartno',
      name: "Svartnö",
      component: ProjectPage,
      extraProps: { projectUrl: 'svartno' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svartno' })
    },
    {
      path: '/vallasen',
      name: "Vallåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallasen' })
    },
    {
      path: '/harensas',
      name: "Härensås",
      component: ProjectPage,
      extraProps: { projectUrl: 'harensas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'harensas' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/smultronet-4',
      name: "Smultronet 4",
      component: ProjectPage,
      extraProps: { projectUrl: 'smultronet-4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smultronet-4' })
    },
    {
      path: '/hultsberg',
      name: "Hultsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hultsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hultsberg' })
    },
    {
      path: '/mangen',
      name: "Mången",
      component: ProjectPage,
      extraProps: { projectUrl: 'mangen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mangen' })
    },
    {
      path: '/karleby',
      name: "Karleby",
      component: ProjectPage,
      extraProps: { projectUrl: 'karleby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karleby' })
    },
    {
      path: '/tavelberget,-etapp-2',
      name: "Tavelberget, etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'tavelberget,-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tavelberget,-etapp-2' })
    },
    {
      path: '/normlosa-östanback',
      name: "Normlösa-Östanbäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'normlosa-östanback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'normlosa-östanback' })
    },
    {
      path: '/ekenas',
      name: "Ekenäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekenas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekenas' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortorp' })
    },
    {
      path: '/stubberud',
      name: "Stubberud",
      component: ProjectPage,
      extraProps: { projectUrl: 'stubberud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stubberud' })
    },
    {
      path: '/koltorp',
      name: "Koltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'koltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'koltorp' })
    },
    {
      path: '/mosjo-torsjo',
      name: "Mosjö-Törsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'mosjo-torsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mosjo-torsjo' })
    },
    {
      path: '/assartorp',
      name: "Assartorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'assartorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'assartorp' })
    },
    {
      path: '/stangby',
      name: "Stångby",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangby' })
    },
    {
      path: '/petersborg',
      name: "Petersborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'petersborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'petersborg' })
    },
    {
      path: '/stora-lund',
      name: "Stora Lund",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-lund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-lund' })
    },
    {
      path: '/vattlosa',
      name: "Vättlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'vattlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vattlosa' })
    },
    {
      path: '/hjarsaslilla',
      name: "Hjärsåslilla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjarsaslilla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjarsaslilla' })
    },
    {
      path: '/rossberget',
      name: "Rossberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'rossberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rossberget' })
    },
    {
      path: '/langholmsberget',
      name: "Långholmsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'langholmsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langholmsberget' })
    },
    {
      path: '/blomsterhult',
      name: "Blomsterhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'blomsterhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blomsterhult' })
    },
    {
      path: '/morkullberget',
      name: "Morkullberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkullberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkullberget' })
    },
    {
      path: '/ryket',
      name: "Ryket",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryket' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryket' })
    },
    {
      path: '/lysings-harads',
      name: "Lysings Härads",
      component: ProjectPage,
      extraProps: { projectUrl: 'lysings-harads' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lysings-harads' })
    },
    {
      path: '/forsviden-sodra-vindkraftspark',
      name: "Forsviden Södra vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsviden-sodra-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsviden-sodra-vindkraftspark' })
    },
    {
      path: '/holmsund',
      name: "Holmsund",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmsund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmsund' })
    },
    {
      path: '/pinnarekulla',
      name: "Pinnarekulla",
      component: ProjectPage,
      extraProps: { projectUrl: 'pinnarekulla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pinnarekulla' })
    },
    {
      path: '/riphacochkka-vindkraftpark',
      name: "Riphacochkka vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'riphacochkka-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'riphacochkka-vindkraftpark' })
    },
    {
      path: '/rydsgard',
      name: "Rydsgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'rydsgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rydsgard' })
    },
    {
      path: '/trunnerup',
      name: "Trunnerup",
      component: ProjectPage,
      extraProps: { projectUrl: 'trunnerup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trunnerup' })
    },
    {
      path: '/övre-dikasjo',
      name: "Övre Dikasjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'övre-dikasjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övre-dikasjo' })
    },
    {
      path: '/vassland-eolus',
      name: "Vassland Eolus",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassland-eolus' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassland-eolus' })
    },
    {
      path: '/palstorp',
      name: "Pålstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'palstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'palstorp' })
    },
    {
      path: '/ryssberget',
      name: "Ryssberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'ryssberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ryssberget' })
    },
    {
      path: '/halsingeskogen',
      name: "Hälsingeskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'halsingeskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'halsingeskogen' })
    },
    {
      path: '/djurseryd',
      name: "Djurseryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'djurseryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'djurseryd' })
    },
    {
      path: '/fagerberg',
      name: "Fagerberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagerberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagerberg' })
    },
    {
      path: '/kajsberget-6',
      name: "Kajsberget 6",
      component: ProjectPage,
      extraProps: { projectUrl: 'kajsberget-6' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kajsberget-6' })
    },
    {
      path: '/fjallberget',
      name: "Fjällberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjallberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjallberget' })
    },
    {
      path: '/kajsberget-7',
      name: "Kajsberget 7",
      component: ProjectPage,
      extraProps: { projectUrl: 'kajsberget-7' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kajsberget-7' })
    },
    {
      path: '/sodra-karra',
      name: "Södra Kärra",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-karra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-karra' })
    },
    {
      path: '/gardshyttan',
      name: "Gärdshyttan",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardshyttan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardshyttan' })
    },
    {
      path: '/nyckelhult-2',
      name: "Nyckelhult 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyckelhult-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyckelhult-2' })
    },
    {
      path: '/trane-örmatofta',
      name: "Träne Örmatofta",
      component: ProjectPage,
      extraProps: { projectUrl: 'trane-örmatofta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trane-örmatofta' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/övra-glumslov',
      name: "Övra Glumslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'övra-glumslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'övra-glumslov' })
    },
    {
      path: '/orreholmen',
      name: "Orreholmen",
      component: ProjectPage,
      extraProps: { projectUrl: 'orreholmen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orreholmen' })
    },
    {
      path: '/amundtorp',
      name: "Amundtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'amundtorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'amundtorp' })
    },
    {
      path: '/torpa',
      name: "Torpa",
      component: ProjectPage,
      extraProps: { projectUrl: 'torpa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torpa' })
    },
    {
      path: '/lerberg',
      name: "Lerberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'lerberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lerberg' })
    },
    {
      path: '/vindpark-ulvberget',
      name: "Vindpark Ulvberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-ulvberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-ulvberget' })
    },
    {
      path: '/lundby-tradet',
      name: "Lundby Trädet",
      component: ProjectPage,
      extraProps: { projectUrl: 'lundby-tradet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lundby-tradet' })
    },
    {
      path: '/burasen',
      name: "Buråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'burasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'burasen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/holmevattnet',
      name: "Holmevattnet",
      component: ProjectPage,
      extraProps: { projectUrl: 'holmevattnet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'holmevattnet' })
    },
    {
      path: '/vindkraftpark-koktraskliden',
      name: "Vindkraftpark Kokträskliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-koktraskliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-koktraskliden' })
    },
    {
      path: '/åmjolkesbo',
      name: "Åmjölkesbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'åmjolkesbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åmjolkesbo' })
    },
    {
      path: '/öljersjo',
      name: "Öljersjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'öljersjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'öljersjo' })
    },
    {
      path: '/applerum',
      name: "Applerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'applerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'applerum' })
    },
    {
      path: '/applerum',
      name: "Applerum",
      component: ProjectPage,
      extraProps: { projectUrl: 'applerum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'applerum' })
    },
    {
      path: '/vinberga',
      name: "Vinberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vinberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vinberga' })
    },
    {
      path: '/persmala',
      name: "Persmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'persmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'persmala' })
    },
    {
      path: '/ramdala',
      name: "Ramdala",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramdala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramdala' })
    },
    {
      path: '/saby',
      name: "Säby",
      component: ProjectPage,
      extraProps: { projectUrl: 'saby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'saby' })
    },
    {
      path: '/basane',
      name: "Båsane",
      component: ProjectPage,
      extraProps: { projectUrl: 'basane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'basane' })
    },
    {
      path: '/liane',
      name: "Liane",
      component: ProjectPage,
      extraProps: { projectUrl: 'liane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'liane' })
    },
    {
      path: '/vartofta-gard',
      name: "Vartofta Gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'vartofta-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vartofta-gard' })
    },
    {
      path: '/malajord',
      name: "Målajord",
      component: ProjectPage,
      extraProps: { projectUrl: 'malajord' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'malajord' })
    },
    {
      path: '/bockstigen-1',
      name: "Bockstigen 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bockstigen-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bockstigen-1' })
    },
    {
      path: '/vindkraftpark-hogen',
      name: "Vindkraftpark Högen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-hogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-hogen' })
    },
    {
      path: '/losen-älmtamala',
      name: "Lösen-Älmtamåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'losen-älmtamala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'losen-älmtamala' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectUrl: 'odensvi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odensvi' })
    },
    {
      path: '/stickninge',
      name: "Stickninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'stickninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stickninge' })
    },
    {
      path: '/monarp',
      name: "Mönarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'monarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'monarp' })
    },
    {
      path: '/lebo',
      name: "Lebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'lebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lebo' })
    },
    {
      path: '/hedared-bollebygd',
      name: "Hedared Bollebygd",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedared-bollebygd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedared-bollebygd' })
    },
    {
      path: '/lilla-solberga',
      name: "Lilla Solberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-solberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-solberga' })
    },
    {
      path: '/kuserud',
      name: "Kuserud",
      component: ProjectPage,
      extraProps: { projectUrl: 'kuserud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kuserud' })
    },
    {
      path: '/toftedals-bon',
      name: "Töftedals-Bön",
      component: ProjectPage,
      extraProps: { projectUrl: 'toftedals-bon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'toftedals-bon' })
    },
    {
      path: '/varnebo',
      name: "Värnebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'varnebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varnebo' })
    },
    {
      path: '/varnebo',
      name: "Värnebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'varnebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varnebo' })
    },
    {
      path: '/åttingsaker',
      name: "Åttingsåker",
      component: ProjectPage,
      extraProps: { projectUrl: 'åttingsaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åttingsaker' })
    },
    {
      path: '/stuveryr',
      name: "Stuveryr",
      component: ProjectPage,
      extraProps: { projectUrl: 'stuveryr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stuveryr' })
    },
    {
      path: '/bandene-1',
      name: "Bandene 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'bandene-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bandene-1' })
    },
    {
      path: '/bandene-2',
      name: "Bandene 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'bandene-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bandene-2' })
    },
    {
      path: '/horntveten',
      name: "Horntveten",
      component: ProjectPage,
      extraProps: { projectUrl: 'horntveten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horntveten' })
    },
    {
      path: '/runnsater',
      name: "Runnsäter",
      component: ProjectPage,
      extraProps: { projectUrl: 'runnsater' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'runnsater' })
    },
    {
      path: '/gunbjorbyn',
      name: "Gunbjörbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunbjorbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunbjorbyn' })
    },
    {
      path: '/lunna',
      name: "Lunna",
      component: ProjectPage,
      extraProps: { projectUrl: 'lunna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lunna' })
    },
    {
      path: '/rangeltorp',
      name: "Rangeltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'rangeltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rangeltorp' })
    },
    {
      path: '/kroken',
      name: "Kroken",
      component: ProjectPage,
      extraProps: { projectUrl: 'kroken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kroken' })
    },
    {
      path: '/lau-liffride',
      name: "Lau Liffride",
      component: ProjectPage,
      extraProps: { projectUrl: 'lau-liffride' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lau-liffride' })
    },
    {
      path: '/stjupsparken',
      name: "Stjupsparken",
      component: ProjectPage,
      extraProps: { projectUrl: 'stjupsparken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stjupsparken' })
    },
    {
      path: '/karrarp',
      name: "Kärrarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'karrarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karrarp' })
    },
    {
      path: '/varsvik',
      name: "Varsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'varsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'varsvik' })
    },
    {
      path: '/nordviken',
      name: "Nordviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordviken' })
    },
    {
      path: '/vindpark-oskarshamn',
      name: "Vindpark Oskarshamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-oskarshamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-oskarshamn' })
    },
    {
      path: '/bjurerud',
      name: "Bjurerud",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjurerud' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjurerud' })
    },
    {
      path: '/langenas',
      name: "Långenäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'langenas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langenas' })
    },
    {
      path: '/nyeds-hulteby',
      name: "Nyeds-Hulteby",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyeds-hulteby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyeds-hulteby' })
    },
    {
      path: '/mjoberget',
      name: "Mjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'mjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mjoberget' })
    },
    {
      path: '/gnost',
      name: "Gnöst",
      component: ProjectPage,
      extraProps: { projectUrl: 'gnost' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gnost' })
    },
    {
      path: '/österhultsmala',
      name: "Österhultsmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'österhultsmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'österhultsmala' })
    },
    {
      path: '/vindkraftpark-florkolen',
      name: "Vindkraftpark Florkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-florkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-florkolen' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/hokopinge',
      name: "Hököpinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hokopinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hokopinge' })
    },
    {
      path: '/nolgarden-sorgarden',
      name: "Nolgården Sörgården",
      component: ProjectPage,
      extraProps: { projectUrl: 'nolgarden-sorgarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nolgarden-sorgarden' })
    },
    {
      path: '/kangerod',
      name: "Kangeröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'kangerod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kangerod' })
    },
    {
      path: '/dalby',
      name: "Dalby",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalby' })
    },
    {
      path: '/hallestad',
      name: "Hällestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallestad' })
    },
    {
      path: '/lyngby',
      name: "Lyngby",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyngby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyngby' })
    },
    {
      path: '/svanabyn',
      name: "Svanabyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'svanabyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svanabyn' })
    },
    {
      path: '/siene',
      name: "Siene",
      component: ProjectPage,
      extraProps: { projectUrl: 'siene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'siene' })
    },
    {
      path: '/skakeltorp',
      name: "Skakeltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skakeltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skakeltorp' })
    },
    {
      path: '/uggletorp',
      name: "Uggletorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'uggletorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'uggletorp' })
    },
    {
      path: '/ornungaskogen',
      name: "Ornungaskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ornungaskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ornungaskogen' })
    },
    {
      path: '/brunnsbo',
      name: "Brunnsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'brunnsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brunnsbo' })
    },
    {
      path: '/gersnas',
      name: "Gersnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'gersnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gersnas' })
    },
    {
      path: '/tygelsjo',
      name: "Tygelsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'tygelsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tygelsjo' })
    },
    {
      path: '/svenstorp',
      name: "Svenstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'svenstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svenstorp' })
    },
    {
      path: '/humlekärr',
      name: "HUMLEKÄRR",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlekärr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlekärr' })
    },
    {
      path: '/norro',
      name: "Norrö",
      component: ProjectPage,
      extraProps: { projectUrl: 'norro' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norro' })
    },
    {
      path: '/rosendal-mjalnas',
      name: "Rosendal-Mjälnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosendal-mjalnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosendal-mjalnas' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/sattra',
      name: "Sättra",
      component: ProjectPage,
      extraProps: { projectUrl: 'sattra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sattra' })
    },
    {
      path: '/gullakra',
      name: "Gullåkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'gullakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gullakra' })
    },
    {
      path: '/flackarp',
      name: "Flackarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'flackarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flackarp' })
    },
    {
      path: '/ruskelsby',
      name: "Ruskelsby",
      component: ProjectPage,
      extraProps: { projectUrl: 'ruskelsby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ruskelsby' })
    },
    {
      path: '/kortered',
      name: "Kortered",
      component: ProjectPage,
      extraProps: { projectUrl: 'kortered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kortered' })
    },
    {
      path: '/trosaskogen',
      name: "Trosaskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'trosaskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trosaskogen' })
    },
    {
      path: '/kalvabacken',
      name: "Kalvabacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'kalvabacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kalvabacken' })
    },
    {
      path: '/sanna',
      name: "Sånna",
      component: ProjectPage,
      extraProps: { projectUrl: 'sanna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sanna' })
    },
    {
      path: '/fredriksdal',
      name: "Fredriksdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'fredriksdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fredriksdal' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallhult' })
    },
    {
      path: '/mallebo',
      name: "Mållebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'mallebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mallebo' })
    },
    {
      path: '/sodra-viback',
      name: "Södra-Vibäck",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-viback' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-viback' })
    },
    {
      path: '/norra-hunna',
      name: "Norra Hunna",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-hunna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-hunna' })
    },
    {
      path: '/nyckelhult',
      name: "Nyckelhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyckelhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyckelhult' })
    },
    {
      path: '/-nyckelhult-1',
      name: "Nyckelhult 1",
      component: ProjectPage,
      extraProps: { projectUrl: '-nyckelhult-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '-nyckelhult-1' })
    },
    {
      path: '/nyckelhult-2',
      name: "Nyckelhult 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyckelhult-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyckelhult-2' })
    },
    {
      path: '/hallsberg',
      name: "Hallsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallsberg' })
    },
    {
      path: '/rönneberga',
      name: "RÖNNEBERGA",
      component: ProjectPage,
      extraProps: { projectUrl: 'rönneberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rönneberga' })
    },
    {
      path: '/ölmevalla-bolg',
      name: "Ölmevalla-Bolg",
      component: ProjectPage,
      extraProps: { projectUrl: 'ölmevalla-bolg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ölmevalla-bolg' })
    },
    {
      path: '/brandshult',
      name: "Brandshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'brandshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brandshult' })
    },
    {
      path: '/älmasa',
      name: "Älmåsa",
      component: ProjectPage,
      extraProps: { projectUrl: 'älmasa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älmasa' })
    },
    {
      path: '/lytorp',
      name: "Lytorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lytorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lytorp' })
    },
    {
      path: '/mortorp',
      name: "Mortorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortorp' })
    },
    {
      path: '/gunnarp',
      name: "Gunnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gunnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gunnarp' })
    },
    {
      path: '/henset',
      name: "Henset",
      component: ProjectPage,
      extraProps: { projectUrl: 'henset' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'henset' })
    },
    {
      path: '/koinge',
      name: "Köinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'koinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'koinge' })
    },
    {
      path: '/palsbo',
      name: "Palsbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'palsbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'palsbo' })
    },
    {
      path: '/berg',
      name: "Berg",
      component: ProjectPage,
      extraProps: { projectUrl: 'berg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'berg' })
    },
    {
      path: '/brannan',
      name: "Brännan",
      component: ProjectPage,
      extraProps: { projectUrl: 'brannan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brannan' })
    },
    {
      path: '/kronoberget',
      name: "Kronoberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kronoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kronoberget' })
    },
    {
      path: '/kungbergen',
      name: "Kungbergen",
      component: ProjectPage,
      extraProps: { projectUrl: 'kungbergen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kungbergen' })
    },
    {
      path: '/billingen',
      name: "Billingen",
      component: ProjectPage,
      extraProps: { projectUrl: 'billingen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'billingen' })
    },
    {
      path: '/stora-bjurum-ö',
      name: "Stora Bjurum Ö",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-bjurum-ö' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-bjurum-ö' })
    },
    {
      path: '/hogetomt-skara-lo',
      name: "Högetomt Skara LO",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogetomt-skara-lo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogetomt-skara-lo' })
    },
    {
      path: '/teaker',
      name: "Teåker",
      component: ProjectPage,
      extraProps: { projectUrl: 'teaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'teaker' })
    },
    {
      path: '/skovde-lo2',
      name: "Skövde LO2",
      component: ProjectPage,
      extraProps: { projectUrl: 'skovde-lo2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skovde-lo2' })
    },
    {
      path: '/vindpark-bjornsjobodarna---bodriset',
      name: "Vindpark Björnsjöbodarna - Bodriset",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-bjornsjobodarna---bodriset' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-bjornsjobodarna---bodriset' })
    },
    {
      path: '/vindpark-bjornsjobodarna---solberget-vast',
      name: "Vindpark Björnsjöbodarna - Solberget Väst",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-bjornsjobodarna---solberget-vast' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-bjornsjobodarna---solberget-vast' })
    },
    {
      path: '/stangsered',
      name: "Stängsered",
      component: ProjectPage,
      extraProps: { projectUrl: 'stangsered' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stangsered' })
    },
    {
      path: '/blidsberg',
      name: "Blidsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'blidsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blidsberg' })
    },
    {
      path: '/storhojden',
      name: "Storhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'storhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storhojden' })
    },
    {
      path: '/storhojden',
      name: "Storhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'storhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storhojden' })
    },
    {
      path: '/vitberget-v3',
      name: "Vitberget V3",
      component: ProjectPage,
      extraProps: { projectUrl: 'vitberget-v3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vitberget-v3' })
    },
    {
      path: '/vitberget-v1',
      name: "Vitberget V1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vitberget-v1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vitberget-v1' })
    },
    {
      path: '/vitberget-v2',
      name: "Vitberget V2",
      component: ProjectPage,
      extraProps: { projectUrl: 'vitberget-v2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vitberget-v2' })
    },
    {
      path: '/saxberget',
      name: "Saxberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'saxberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'saxberget' })
    },
    {
      path: '/älgkullen',
      name: "Älgkullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'älgkullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'älgkullen' })
    },
    {
      path: '/tirup',
      name: "Tirup",
      component: ProjectPage,
      extraProps: { projectUrl: 'tirup' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tirup' })
    },
    {
      path: '/ånglarna',
      name: "Ånglarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'ånglarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ånglarna' })
    },
    {
      path: '/aldermyrberget',
      name: "Aldermyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'aldermyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aldermyrberget' })
    },
    {
      path: '/mjoback-vindkraftpark',
      name: "Mjöbäck Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'mjoback-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mjoback-vindkraftpark' })
    },
    {
      path: '/hjo-fagelas-vindkraftpark',
      name: "Hjo Fågelås Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjo-fagelas-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjo-fagelas-vindkraftpark' })
    },
    {
      path: '/vara-badene',
      name: "Vara Badene",
      component: ProjectPage,
      extraProps: { projectUrl: 'vara-badene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vara-badene' })
    },
    {
      path: '/vindpark-bjornsjobodarna---valpasmyrberget',
      name: "Vindpark Björnsjöbodarna - Valpåsmyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-bjornsjobodarna---valpasmyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-bjornsjobodarna---valpasmyrberget' })
    },
    {
      path: '/vindpark-bjornsjobodarna---kilbodhojden',
      name: "Vindpark Björnsjöbodarna - Kilbodhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-bjornsjobodarna---kilbodhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-bjornsjobodarna---kilbodhojden' })
    },
    {
      path: '/knostad',
      name: "Knöstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'knostad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knostad' })
    },
    {
      path: '/norra-lansmansberget',
      name: "Norra Länsmansberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-lansmansberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-lansmansberget' })
    },
    {
      path: '/backmossen',
      name: "Backmossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'backmossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backmossen' })
    },
    {
      path: '/norra-vedbo-(jonkoping/aneby)',
      name: "Norra vedbo (Jönköping/Aneby)",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-vedbo-(jonkoping/aneby)' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-vedbo-(jonkoping/aneby)' })
    },
    {
      path: '/lockarp',
      name: "Lockarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'lockarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lockarp' })
    },
    {
      path: '/forsviden-sodra-vindkraftpark',
      name: "Forsviden Södra Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'forsviden-sodra-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'forsviden-sodra-vindkraftpark' })
    },
    {
      path: '/fasikan',
      name: "Fasikan",
      component: ProjectPage,
      extraProps: { projectUrl: 'fasikan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fasikan' })
    },
    {
      path: '/tollsjo-slatthult-hedared',
      name: "Töllsjö-Slätthult HEDARED",
      component: ProjectPage,
      extraProps: { projectUrl: 'tollsjo-slatthult-hedared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tollsjo-slatthult-hedared' })
    },
    {
      path: '/brattberget',
      name: "Brattberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'brattberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brattberget' })
    },
    {
      path: '/ekholma',
      name: "Ekholma",
      component: ProjectPage,
      extraProps: { projectUrl: 'ekholma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ekholma' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod/gurserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod/gurserod' })
    },
    {
      path: '/skaverod/gurserod',
      name: "Skaveröd/Gurseröd",
      component: ProjectPage,
      extraProps: { projectUrl: 'skaverod/gurserod' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skaverod/gurserod' })
    },
    {
      path: '/munkflohogen',
      name: "Munkflohögen",
      component: ProjectPage,
      extraProps: { projectUrl: 'munkflohogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munkflohogen' })
    },
    {
      path: '/gaxsjo-raftsjohojden',
      name: "Gåxsjö-Raftsjöhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'gaxsjo-raftsjohojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gaxsjo-raftsjohojden' })
    },
    {
      path: '/vindpark-lillsela',
      name: "Vindpark Lillsela",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-lillsela' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-lillsela' })
    },
    {
      path: '/gaxsjo-raftsjohojden-2',
      name: "Gåxsjö-Raftsjöhöjden 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'gaxsjo-raftsjohojden-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gaxsjo-raftsjohojden-2' })
    },
    {
      path: '/vastra-kinneskogen',
      name: "Västra Kinneskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastra-kinneskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastra-kinneskogen' })
    },
    {
      path: '/raftsjohojden',
      name: "Raftsjöhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'raftsjohojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raftsjohojden' })
    },
    {
      path: '/åskalen',
      name: "Åskälen",
      component: ProjectPage,
      extraProps: { projectUrl: 'åskalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åskalen' })
    },
    {
      path: '/österasen',
      name: "Österåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'österasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'österasen' })
    },
    {
      path: '/hallberget',
      name: "Hällberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallberget' })
    },
    {
      path: '/åshult',
      name: "Åshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'åshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åshult' })
    },
    {
      path: '/furuby',
      name: "Furuby",
      component: ProjectPage,
      extraProps: { projectUrl: 'furuby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'furuby' })
    },
    {
      path: '/grimsas',
      name: "Grimsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'grimsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grimsas' })
    },
    {
      path: '/vindkraftpark-östra-frolunda',
      name: "Vindkraftpark Östra Frölunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-östra-frolunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-östra-frolunda' })
    },
    {
      path: '/rosenskog',
      name: "Rosenskog",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenskog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenskog' })
    },
    {
      path: '/lyrestad',
      name: "Lyrestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyrestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyrestad' })
    },
    {
      path: '/karehamn',
      name: "Kårehamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'karehamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karehamn' })
    },
    {
      path: '/stengardsholma',
      name: "Stengårdsholma",
      component: ProjectPage,
      extraProps: { projectUrl: 'stengardsholma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stengardsholma' })
    },
    {
      path: '/granberget',
      name: "Granberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'granberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granberget' })
    },
    {
      path: '/lervik',
      name: "Lervik",
      component: ProjectPage,
      extraProps: { projectUrl: 'lervik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lervik' })
    },
    {
      path: '/fangsjon',
      name: "Fängsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'fangsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fangsjon' })
    },
    {
      path: '/lannaberget',
      name: "Lannaberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'lannaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lannaberget' })
    },
    {
      path: '/broboberget',
      name: "Broboberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'broboberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'broboberget' })
    },
    {
      path: '/vaberget',
      name: "Vaberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaberget' })
    },
    {
      path: '/norrliden-bjorksele',
      name: "Norrliden Björksele",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrliden-bjorksele' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrliden-bjorksele' })
    },
    {
      path: '/hultema',
      name: "Hultema",
      component: ProjectPage,
      extraProps: { projectUrl: 'hultema' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hultema' })
    },
    {
      path: '/rosendal/lydinge/benarp',
      name: "Rosendal/Lydinge/Benarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosendal/lydinge/benarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosendal/lydinge/benarp' })
    },
    {
      path: '/vargtrask-1',
      name: "Vargträsk 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'vargtrask-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vargtrask-1' })
    },
    {
      path: '/fabodberget-vindkraftpark',
      name: "Fäbodberget Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'fabodberget-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fabodberget-vindkraftpark' })
    },
    {
      path: '/hajsberget-och-sodra-lansmansberget',
      name: "Häjsberget och södra Länsmansberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hajsberget-och-sodra-lansmansberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hajsberget-och-sodra-lansmansberget' })
    },
    {
      path: '/mjallby-ellen',
      name: "Mjällby Ellen",
      component: ProjectPage,
      extraProps: { projectUrl: 'mjallby-ellen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mjallby-ellen' })
    },
    {
      path: '/grano',
      name: "Gränö",
      component: ProjectPage,
      extraProps: { projectUrl: 'grano' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grano' })
    },
    {
      path: '/skrallarberget',
      name: "Skrallarberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skrallarberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skrallarberget' })
    },
    {
      path: '/tvaaker',
      name: "Tvååker",
      component: ProjectPage,
      extraProps: { projectUrl: 'tvaaker' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tvaaker' })
    },
    {
      path: '/bjornlandhojden',
      name: "Björnlandhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornlandhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornlandhojden' })
    },
    {
      path: '/vindpark-marviken',
      name: "Vindpark Marviken",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-marviken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-marviken' })
    },
    {
      path: '/vikboland-vind',
      name: "Vikboland Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'vikboland-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vikboland-vind' })
    },
    {
      path: '/glotesvalen',
      name: "Glötesvålen",
      component: ProjectPage,
      extraProps: { projectUrl: 'glotesvalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'glotesvalen' })
    },
    {
      path: '/aapua-vindpark',
      name: "Aapua Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'aapua-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aapua-vindpark' })
    },
    {
      path: '/lantvallen',
      name: "Lantvallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'lantvallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lantvallen' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectUrl: 'odensvi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odensvi' })
    },
    {
      path: '/norra-sunhult',
      name: "Norra Sunhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-sunhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-sunhult' })
    },
    {
      path: '/gratanliden',
      name: "Gråtanliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'gratanliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gratanliden' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/duvhallen-vindpark',
      name: "Duvhällen Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'duvhallen-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'duvhallen-vindpark' })
    },
    {
      path: '/han-vindpark',
      name: "Hån Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'han-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'han-vindpark' })
    },
    {
      path: '/sydkustens-vind',
      name: "Sydkustens Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'sydkustens-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sydkustens-vind' })
    },
    {
      path: '/larsbo-valparbo',
      name: "Larsbo-Valparbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'larsbo-valparbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larsbo-valparbo' })
    },
    {
      path: '/hogabjar',
      name: "Högabjär",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogabjar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogabjar' })
    },
    {
      path: '/karsas',
      name: "Kärsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsas' })
    },
    {
      path: '/hedeskoga-vindkraftpark',
      name: "Hedeskoga Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedeskoga-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedeskoga-vindkraftpark' })
    },
    {
      path: '/vaggeryds-vindbrukspark',
      name: "Vaggeryds Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaggeryds-vindbrukspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaggeryds-vindbrukspark' })
    },
    {
      path: '/ävlingeby-gard',
      name: "Ävlingeby gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'ävlingeby-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ävlingeby-gard' })
    },
    {
      path: '/vastergarden',
      name: "Västergården",
      component: ProjectPage,
      extraProps: { projectUrl: 'vastergarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vastergarden' })
    },
    {
      path: '/naverstads-tyft-edsam',
      name: "Naverstads-Tyft Edsäm",
      component: ProjectPage,
      extraProps: { projectUrl: 'naverstads-tyft-edsam' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'naverstads-tyft-edsam' })
    },
    {
      path: '/bergvind-lingbo',
      name: "Bergvind Lingbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'bergvind-lingbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bergvind-lingbo' })
    },
    {
      path: '/bjorkhojden',
      name: "Björkhöjden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkhojden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkhojden' })
    },
    {
      path: '/bodhogarna',
      name: "Bodhögarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'bodhogarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bodhogarna' })
    },
    {
      path: '/barasen',
      name: "Bäråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'barasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'barasen' })
    },
    {
      path: '/ebbegarde',
      name: "Ebbegärde",
      component: ProjectPage,
      extraProps: { projectUrl: 'ebbegarde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ebbegarde' })
    },
    {
      path: '/hastkullen',
      name: "Hästkullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hastkullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hastkullen' })
    },
    {
      path: '/savar',
      name: "Sävar",
      component: ProjectPage,
      extraProps: { projectUrl: 'savar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'savar' })
    },
    {
      path: '/laxaskogen',
      name: "Laxåskogen",
      component: ProjectPage,
      extraProps: { projectUrl: 'laxaskogen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'laxaskogen' })
    },
    {
      path: '/stor-skalsjon',
      name: "Stor-Skälsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'stor-skalsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stor-skalsjon' })
    },
    {
      path: '/maevaara-vindkraftpark',
      name: "Maevaara vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'maevaara-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'maevaara-vindkraftpark' })
    },
    {
      path: '/malarberget',
      name: "Målarberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'malarberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'malarberget' })
    },
    {
      path: '/hyltakra-med-omnejd-i-älmhult',
      name: "Hyltåkra med omnejd i Älmhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyltakra-med-omnejd-i-älmhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyltakra-med-omnejd-i-älmhult' })
    },
    {
      path: '/pautrask-vindpark',
      name: "Pauträsk vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'pautrask-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'pautrask-vindpark' })
    },
    {
      path: '/rodene',
      name: "Rödene",
      component: ProjectPage,
      extraProps: { projectUrl: 'rodene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rodene' })
    },
    {
      path: '/skottfjallet',
      name: "Skottfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'skottfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skottfjallet' })
    },
    {
      path: '/stamasen',
      name: "Stamåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'stamasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stamasen' })
    },
    {
      path: '/stockasbodarna',
      name: "Stockåsbodarna",
      component: ProjectPage,
      extraProps: { projectUrl: 'stockasbodarna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stockasbodarna' })
    },
    {
      path: '/blaiken',
      name: "Blaiken",
      component: ProjectPage,
      extraProps: { projectUrl: 'blaiken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blaiken' })
    },
    {
      path: '/storbrannkullen',
      name: "Storbrännkullen",
      component: ProjectPage,
      extraProps: { projectUrl: 'storbrannkullen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storbrannkullen' })
    },
    {
      path: '/tjarnas',
      name: "Tjärnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'tjarnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tjarnas' })
    },
    {
      path: '/treriksroset',
      name: "Treriksröset",
      component: ProjectPage,
      extraProps: { projectUrl: 'treriksroset' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'treriksroset' })
    },
    {
      path: '/vindin-vattenregleringsmagasin',
      name: "VindIn vattenregleringsmagasin",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindin-vattenregleringsmagasin' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindin-vattenregleringsmagasin' })
    },
    {
      path: '/langgrund-1',
      name: "Långgrund 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'langgrund-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langgrund-1' })
    },
    {
      path: '/soder-landsort',
      name: "Söder Landsort",
      component: ProjectPage,
      extraProps: { projectUrl: 'soder-landsort' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soder-landsort' })
    },
    {
      path: '/almagrundet',
      name: "Almagrundet",
      component: ProjectPage,
      extraProps: { projectUrl: 'almagrundet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'almagrundet' })
    },
    {
      path: '/campsgrund',
      name: "Campsgrund",
      component: ProjectPage,
      extraProps: { projectUrl: 'campsgrund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'campsgrund' })
    },
    {
      path: '/utposten',
      name: "Utposten",
      component: ProjectPage,
      extraProps: { projectUrl: 'utposten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utposten' })
    },
    {
      path: '/vindpark-tonsen',
      name: "Vindpark Tönsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-tonsen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-tonsen' })
    },
    {
      path: '/ögonfagnaden',
      name: "Ögonfägnaden",
      component: ProjectPage,
      extraProps: { projectUrl: 'ögonfagnaden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ögonfagnaden' })
    },
    {
      path: '/örken',
      name: "Örken",
      component: ProjectPage,
      extraProps: { projectUrl: 'örken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örken' })
    },
    {
      path: '/örken-nord',
      name: "Örken Nord",
      component: ProjectPage,
      extraProps: { projectUrl: 'örken-nord' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örken-nord' })
    },
    {
      path: '/byrasen',
      name: "Byråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'byrasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'byrasen' })
    },
    {
      path: '/bosjovarden',
      name: "Bösjövarden",
      component: ProjectPage,
      extraProps: { projectUrl: 'bosjovarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bosjovarden' })
    },
    {
      path: '/basebo',
      name: "Basebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'basebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'basebo' })
    },
    {
      path: '/ramsberget',
      name: "Rämsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramsberget' })
    },
    {
      path: '/korpfjallet',
      name: "Korpfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'korpfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'korpfjallet' })
    },
    {
      path: '/riskebo',
      name: "Riskebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'riskebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'riskebo' })
    },
    {
      path: '/vettasen/finnberget',
      name: "Vettåsen/Finnberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'vettasen/finnberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vettasen/finnberget' })
    },
    {
      path: '/knasjoberget',
      name: "Knäsjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'knasjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knasjoberget' })
    },
    {
      path: '/knasjoberget',
      name: "Knäsjöberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'knasjoberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'knasjoberget' })
    },
    {
      path: '/krontorp',
      name: "Krontorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'krontorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'krontorp' })
    },
    {
      path: '/bjorkvattnet',
      name: "Björkvattnet",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkvattnet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkvattnet' })
    },
    {
      path: '/svartnas',
      name: "Svartnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'svartnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svartnas' })
    },
    {
      path: '/hedningsmala',
      name: "Hedningsmåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedningsmala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedningsmala' })
    },
    {
      path: '/vindpark-jadraas',
      name: "Vindpark Jädraås",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-jadraas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-jadraas' })
    },
    {
      path: '/zinkgruvan',
      name: "Zinkgruvan",
      component: ProjectPage,
      extraProps: { projectUrl: 'zinkgruvan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'zinkgruvan' })
    },
    {
      path: '/fanbyn',
      name: "Fanbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'fanbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fanbyn' })
    },
    {
      path: '/ödmarden',
      name: "Ödmården",
      component: ProjectPage,
      extraProps: { projectUrl: 'ödmarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ödmarden' })
    },
    {
      path: '/soderkoping/valdemarsvik',
      name: "Söderköping/Valdemarsvik",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderkoping/valdemarsvik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderkoping/valdemarsvik' })
    },
    {
      path: '/fallbadan',
      name: "Fällbådan",
      component: ProjectPage,
      extraProps: { projectUrl: 'fallbadan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fallbadan' })
    },
    {
      path: '/norra-klasgrunden',
      name: "Norra Klasgrunden",
      component: ProjectPage,
      extraProps: { projectUrl: 'norra-klasgrunden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norra-klasgrunden' })
    },
    {
      path: '/sodra-klasgrunden',
      name: "Södra Klasgrunden",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-klasgrunden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-klasgrunden' })
    },
    {
      path: '/penningskar',
      name: "Penningskär",
      component: ProjectPage,
      extraProps: { projectUrl: 'penningskar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'penningskar' })
    },
    {
      path: '/grepen',
      name: "Grepen",
      component: ProjectPage,
      extraProps: { projectUrl: 'grepen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grepen' })
    },
    {
      path: '/sodra-kvarken',
      name: "Södra Kvarken",
      component: ProjectPage,
      extraProps: { projectUrl: 'sodra-kvarken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sodra-kvarken' })
    },
    {
      path: '/vaktaren',
      name: "Väktaren",
      component: ProjectPage,
      extraProps: { projectUrl: 'vaktaren' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vaktaren' })
    },
    {
      path: '/rata-storgrund-etapp-1',
      name: "Rata Storgrund etapp 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'rata-storgrund-etapp-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rata-storgrund-etapp-1' })
    },
    {
      path: '/rata-storgrund-etapp-2',
      name: "Rata Storgrund etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'rata-storgrund-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rata-storgrund-etapp-2' })
    },
    {
      path: '/haru',
      name: "Haru",
      component: ProjectPage,
      extraProps: { projectUrl: 'haru' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'haru' })
    },
    {
      path: '/brotorp',
      name: "Brotorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'brotorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brotorp' })
    },
    {
      path: '/markbygden-vindkraftpark,-etapp-2',
      name: "Markbygden vindkraftpark, etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'markbygden-vindkraftpark,-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'markbygden-vindkraftpark,-etapp-2' })
    },
    {
      path: '/rosenholm-vindpark',
      name: "Rosenholm Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'rosenholm-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rosenholm-vindpark' })
    },
    {
      path: '/karskruv',
      name: "Karskruv",
      component: ProjectPage,
      extraProps: { projectUrl: 'karskruv' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karskruv' })
    },
    {
      path: '/utknallen',
      name: "Utknallen",
      component: ProjectPage,
      extraProps: { projectUrl: 'utknallen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utknallen' })
    },
    {
      path: '/tahult',
      name: "Tåhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'tahult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tahult' })
    },
    {
      path: '/marhult-vindpark',
      name: "Marhult Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'marhult-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marhult-vindpark' })
    },
    {
      path: '/skraplinge',
      name: "Skräplinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'skraplinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skraplinge' })
    },
    {
      path: '/hablinge-vindpark',
      name: "Hablinge Vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'hablinge-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hablinge-vindpark' })
    },
    {
      path: '/hornamossen',
      name: "Hornamossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornamossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornamossen' })
    },
    {
      path: '/stonnansbo',
      name: "Stönnansbo",
      component: ProjectPage,
      extraProps: { projectUrl: 'stonnansbo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stonnansbo' })
    },
    {
      path: '/rolunda',
      name: "Rölunda",
      component: ProjectPage,
      extraProps: { projectUrl: 'rolunda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rolunda' })
    },
    {
      path: '/stentjarnasen',
      name: "Stentjärnåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'stentjarnasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stentjarnasen' })
    },
    {
      path: '/klevberget',
      name: "Klevberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'klevberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klevberget' })
    },
    {
      path: '/bordsjo-vindbrukspark',
      name: "Bordsjö Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'bordsjo-vindbrukspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bordsjo-vindbrukspark' })
    },
    {
      path: '/hornberget',
      name: "Hornberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'hornberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hornberget' })
    },
    {
      path: '/klamman',
      name: "Klämman",
      component: ProjectPage,
      extraProps: { projectUrl: 'klamman' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klamman' })
    },
    {
      path: '/fjallberg-vindkraftspark',
      name: "Fjällberg Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'fjallberg-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fjallberg-vindkraftspark' })
    },
    {
      path: '/rockneby',
      name: "Rockneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'rockneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rockneby' })
    },
    {
      path: '/rockneby',
      name: "Rockneby",
      component: ProjectPage,
      extraProps: { projectUrl: 'rockneby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rockneby' })
    },
    {
      path: '/vassmolosa',
      name: "Vassmolösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassmolosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassmolosa' })
    },
    {
      path: '/trollberget-2',
      name: "Trollberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'trollberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'trollberget-2' })
    },
    {
      path: '/änglarp',
      name: "Änglarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'änglarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'änglarp' })
    },
    {
      path: '/ånhammar',
      name: "Ånhammar",
      component: ProjectPage,
      extraProps: { projectUrl: 'ånhammar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ånhammar' })
    },
    {
      path: '/vasttorp',
      name: "Västtorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'vasttorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vasttorp' })
    },
    {
      path: '/åsle',
      name: "Åsle",
      component: ProjectPage,
      extraProps: { projectUrl: 'åsle' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åsle' })
    },
    {
      path: '/velanda-gard',
      name: "Velanda gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'velanda-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'velanda-gard' })
    },
    {
      path: '/stor-rotliden-vindkraftpark',
      name: "Stor-Rotliden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'stor-rotliden-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stor-rotliden-vindkraftpark' })
    },
    {
      path: '/lyckas-gard',
      name: "Lyckås gård",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyckas-gard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyckas-gard' })
    },
    {
      path: '/erikstorp-i',
      name: "Erikstorp I",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstorp-i' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstorp-i' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/gardsverk-asmundstorp',
      name: "Gårdsverk Asmundstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardsverk-asmundstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardsverk-asmundstorp' })
    },
    {
      path: '/gislorp',
      name: "Gislorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'gislorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gislorp' })
    },
    {
      path: '/tapplarp',
      name: "Tapplarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tapplarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tapplarp' })
    },
    {
      path: '/hallhult',
      name: "Hallhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallhult' })
    },
    {
      path: '/hallhult/fredriksdal',
      name: "Hallhult/Fredriksdal",
      component: ProjectPage,
      extraProps: { projectUrl: 'hallhult/fredriksdal' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hallhult/fredriksdal' })
    },
    {
      path: '/bosarp',
      name: "Bösarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'bosarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bosarp' })
    },
    {
      path: '/grolanda',
      name: "Grolanda",
      component: ProjectPage,
      extraProps: { projectUrl: 'grolanda' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grolanda' })
    },
    {
      path: '/ruuthsbo-vindkraftpark',
      name: "Ruuthsbo Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'ruuthsbo-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ruuthsbo-vindkraftpark' })
    },
    {
      path: '/bronnestad',
      name: "Brönnestad",
      component: ProjectPage,
      extraProps: { projectUrl: 'bronnestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bronnestad' })
    },
    {
      path: '/brunnslov',
      name: "Brunnslöv",
      component: ProjectPage,
      extraProps: { projectUrl: 'brunnslov' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brunnslov' })
    },
    {
      path: '/sorbyparken',
      name: "Sörbyparken",
      component: ProjectPage,
      extraProps: { projectUrl: 'sorbyparken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sorbyparken' })
    },
    {
      path: '/äspinge',
      name: "Äspinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'äspinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'äspinge' })
    },
    {
      path: '/vindpark-vanern',
      name: "Vindpark Vänern",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-vanern' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-vanern' })
    },
    {
      path: '/mosas',
      name: "Mosås",
      component: ProjectPage,
      extraProps: { projectUrl: 'mosas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mosas' })
    },
    {
      path: '/seltorp',
      name: "Seltorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'seltorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'seltorp' })
    },
    {
      path: '/erken',
      name: "Erken",
      component: ProjectPage,
      extraProps: { projectUrl: 'erken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erken' })
    },
    {
      path: '/vabynas',
      name: "Väbynäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'vabynas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vabynas' })
    },
    {
      path: '/horeryd',
      name: "Höreryd",
      component: ProjectPage,
      extraProps: { projectUrl: 'horeryd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horeryd' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/mossgard',
      name: "Mossgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'mossgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mossgard' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/lorby-ysane',
      name: "Lörby-Ysane",
      component: ProjectPage,
      extraProps: { projectUrl: 'lorby-ysane' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lorby-ysane' })
    },
    {
      path: '/solve',
      name: "Sölve",
      component: ProjectPage,
      extraProps: { projectUrl: 'solve' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'solve' })
    },
    {
      path: '/bjorkevik',
      name: "Björkevik",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorkevik' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorkevik' })
    },
    {
      path: '/östana',
      name: "Östanå",
      component: ProjectPage,
      extraProps: { projectUrl: 'östana' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östana' })
    },
    {
      path: '/mariedamm',
      name: "Mariedamm",
      component: ProjectPage,
      extraProps: { projectUrl: 'mariedamm' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mariedamm' })
    },
    {
      path: '/raliden',
      name: "Råliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'raliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'raliden' })
    },
    {
      path: '/kloverberget',
      name: "Klöverberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kloverberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kloverberget' })
    },
    {
      path: '/smeby',
      name: "Smeby",
      component: ProjectPage,
      extraProps: { projectUrl: 'smeby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smeby' })
    },
    {
      path: '/borstorp',
      name: "Börstorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'borstorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borstorp' })
    },
    {
      path: '/östra-hamnen',
      name: "Östra Hamnen",
      component: ProjectPage,
      extraProps: { projectUrl: 'östra-hamnen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'östra-hamnen' })
    },
    {
      path: '/langtora-vindkraft',
      name: "Långtora Vindkraft",
      component: ProjectPage,
      extraProps: { projectUrl: 'langtora-vindkraft' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langtora-vindkraft' })
    },
    {
      path: '/åmliden',
      name: "Åmliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'åmliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'åmliden' })
    },
    {
      path: '/klappe',
      name: "Kläppe",
      component: ProjectPage,
      extraProps: { projectUrl: 'klappe' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klappe' })
    },
    {
      path: '/hyllinge',
      name: "Hyllinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hyllinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hyllinge' })
    },
    {
      path: '/ottarp',
      name: "Ottarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'ottarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ottarp' })
    },
    {
      path: '/',
      name: "",
      component: ProjectPage,
      extraProps: { projectUrl: '' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: '' })
    },
    {
      path: '/larbro-liffride',
      name: "Lärbro Liffride",
      component: ProjectPage,
      extraProps: { projectUrl: 'larbro-liffride' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'larbro-liffride' })
    },
    {
      path: '/blakliden-vindkraftpark',
      name: "Blakliden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'blakliden-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blakliden-vindkraftpark' })
    },
    {
      path: '/skogberget',
      name: "Skogberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skogberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skogberget' })
    },
    {
      path: '/örum',
      name: "Örum",
      component: ProjectPage,
      extraProps: { projectUrl: 'örum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örum' })
    },
    {
      path: '/garsnas',
      name: "Gärsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'garsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'garsnas' })
    },
    {
      path: '/tjustorp',
      name: "Tjustorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'tjustorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tjustorp' })
    },
    {
      path: '/ö-ingelstad',
      name: "Ö Ingelstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'ö-ingelstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ö-ingelstad' })
    },
    {
      path: '/strömmestad',
      name: "STRÖMMESTAD",
      component: ProjectPage,
      extraProps: { projectUrl: 'strömmestad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'strömmestad' })
    },
    {
      path: '/branninge',
      name: "Bränninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'branninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'branninge' })
    },
    {
      path: '/salvetorp',
      name: "Salvetorp",
      component: ProjectPage,
      extraProps: { projectUrl: 'salvetorp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'salvetorp' })
    },
    {
      path: '/hogstad',
      name: "Hogstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogstad' })
    },
    {
      path: '/appuna',
      name: "Appuna",
      component: ProjectPage,
      extraProps: { projectUrl: 'appuna' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'appuna' })
    },
    {
      path: '/vistena-18-2',
      name: "Vistena 18-2",
      component: ProjectPage,
      extraProps: { projectUrl: 'vistena-18-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vistena-18-2' })
    },
    {
      path: '/hogby-gardsverk',
      name: "Högby Gårdsverk",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogby-gardsverk' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogby-gardsverk' })
    },
    {
      path: '/brannlidens-vindkraftspark',
      name: "Brännlidens vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'brannlidens-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brannlidens-vindkraftspark' })
    },
    {
      path: '/siggebohyttan',
      name: "Siggebohyttan",
      component: ProjectPage,
      extraProps: { projectUrl: 'siggebohyttan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'siggebohyttan' })
    },
    {
      path: '/nordbyn',
      name: "Nordbyn",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordbyn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordbyn' })
    },
    {
      path: '/vallsta',
      name: "Vallsta",
      component: ProjectPage,
      extraProps: { projectUrl: 'vallsta' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vallsta' })
    },
    {
      path: '/vindparken-lonhult',
      name: "Vindparken Lönhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindparken-lonhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindparken-lonhult' })
    },
    {
      path: '/selkavaara-vindkraftpark',
      name: "Selkävaara Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'selkavaara-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'selkavaara-vindkraftpark' })
    },
    {
      path: '/lehtirova-vindkraftpark',
      name: "Lehtirova vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'lehtirova-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lehtirova-vindkraftpark' })
    },
    {
      path: '/langgrund-2',
      name: "Långgrund 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'langgrund-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langgrund-2' })
    },
    {
      path: '/utposten-2',
      name: "Utposten 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'utposten-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'utposten-2' })
    },
    {
      path: '/gretas-klackar-1',
      name: "Gretas Klackar 1",
      component: ProjectPage,
      extraProps: { projectUrl: 'gretas-klackar-1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gretas-klackar-1' })
    },
    {
      path: '/idhult',
      name: "Idhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'idhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'idhult' })
    },
    {
      path: '/hassleby',
      name: "Hässleby",
      component: ProjectPage,
      extraProps: { projectUrl: 'hassleby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hassleby' })
    },
    {
      path: '/nordkolen',
      name: "Nordkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordkolen' })
    },
    {
      path: '/gardesfloberget',
      name: "Gärdesfloberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardesfloberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardesfloberget' })
    },
    {
      path: '/gardesfloberget',
      name: "Gärdesfloberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'gardesfloberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gardesfloberget' })
    },
    {
      path: '/bystorp-vind',
      name: "Bystorp Vind",
      component: ProjectPage,
      extraProps: { projectUrl: 'bystorp-vind' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bystorp-vind' })
    },
    {
      path: '/storasen',
      name: "Storåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'storasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storasen' })
    },
    {
      path: '/sandselehojderna-vindkraftpark',
      name: "Sandselehöjderna Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'sandselehojderna-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sandselehojderna-vindkraftpark' })
    },
    {
      path: '/markbygden-ett',
      name: "Markbygden ETT",
      component: ProjectPage,
      extraProps: { projectUrl: 'markbygden-ett' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'markbygden-ett' })
    },
    {
      path: '/lonneborg',
      name: "Lönneborg",
      component: ProjectPage,
      extraProps: { projectUrl: 'lonneborg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lonneborg' })
    },
    {
      path: '/langjum',
      name: "Längjum",
      component: ProjectPage,
      extraProps: { projectUrl: 'langjum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'langjum' })
    },
    {
      path: '/rockagarden',
      name: "Rockagården",
      component: ProjectPage,
      extraProps: { projectUrl: 'rockagarden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rockagarden' })
    },
    {
      path: '/erikstads-bjornebol',
      name: "Erikstads-Björnebol",
      component: ProjectPage,
      extraProps: { projectUrl: 'erikstads-bjornebol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erikstads-bjornebol' })
    },
    {
      path: '/hagstad',
      name: "Hagstad",
      component: ProjectPage,
      extraProps: { projectUrl: 'hagstad' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hagstad' })
    },
    {
      path: '/borghamn',
      name: "Borghamn",
      component: ProjectPage,
      extraProps: { projectUrl: 'borghamn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'borghamn' })
    },
    {
      path: '/tolanga',
      name: "Tolånga",
      component: ProjectPage,
      extraProps: { projectUrl: 'tolanga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tolanga' })
    },
    {
      path: '/franninge',
      name: "Fränninge",
      component: ProjectPage,
      extraProps: { projectUrl: 'franninge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'franninge' })
    },
    {
      path: '/v1-sorlidberget',
      name: "V1 Sörlidberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'v1-sorlidberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'v1-sorlidberget' })
    },
    {
      path: '/soderakra',
      name: "Söderåkra",
      component: ProjectPage,
      extraProps: { projectUrl: 'soderakra' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'soderakra' })
    },
    {
      path: '/ravsnas',
      name: "Rävsnäs",
      component: ProjectPage,
      extraProps: { projectUrl: 'ravsnas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ravsnas' })
    },
    {
      path: '/humla',
      name: "Humla",
      component: ProjectPage,
      extraProps: { projectUrl: 'humla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humla' })
    },
    {
      path: '/rorum',
      name: "Rörum",
      component: ProjectPage,
      extraProps: { projectUrl: 'rorum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rorum' })
    },
    {
      path: '/horla',
      name: "Horla",
      component: ProjectPage,
      extraProps: { projectUrl: 'horla' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'horla' })
    },
    {
      path: '/sparlosa',
      name: "Sparlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'sparlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sparlosa' })
    },
    {
      path: '/mangslidberget',
      name: "Mangslidberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'mangslidberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mangslidberget' })
    },
    {
      path: '/vilseberga',
      name: "Vilseberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'vilseberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vilseberga' })
    },
    {
      path: '/stollsaterberget',
      name: "Stöllsäterberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'stollsaterberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stollsaterberget' })
    },
    {
      path: '/verkanliden',
      name: "Verkanliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'verkanliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'verkanliden' })
    },
    {
      path: '/gretas-klackar-2',
      name: "Gretas Klackar 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'gretas-klackar-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gretas-klackar-2' })
    },
    {
      path: '/finnaberget',
      name: "Finnåberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'finnaberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'finnaberget' })
    },
    {
      path: '/fabodliden-ii',
      name: "Fäbodliden II",
      component: ProjectPage,
      extraProps: { projectUrl: 'fabodliden-ii' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fabodliden-ii' })
    },
    {
      path: '/storhojden-etapp-2',
      name: "Storhöjden etapp 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'storhojden-etapp-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storhojden-etapp-2' })
    },
    {
      path: '/brantet,-solberg',
      name: "Bräntet, Solberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'brantet,-solberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'brantet,-solberg' })
    },
    {
      path: '/boarp',
      name: "Boarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'boarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boarp' })
    },
    {
      path: '/hedared',
      name: "Hedared",
      component: ProjectPage,
      extraProps: { projectUrl: 'hedared' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hedared' })
    },
    {
      path: '/bruzaholm-vindkraftpark',
      name: "Bruzaholm Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'bruzaholm-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bruzaholm-vindkraftpark' })
    },
    {
      path: '/boarp-och-stigared-vindkraftpark',
      name: "Boarp och Stigared Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'boarp-och-stigared-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'boarp-och-stigared-vindkraftpark' })
    },
    {
      path: '/stormyrberget-vindkraftpark',
      name: "Stormyrberget Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'stormyrberget-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stormyrberget-vindkraftpark' })
    },
    {
      path: '/gronhult-vindkraftpark',
      name: "Grönhult Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'gronhult-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'gronhult-vindkraftpark' })
    },
    {
      path: '/nasudden-öst-vindkraftpark',
      name: "Näsudden Öst Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasudden-öst-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasudden-öst-vindkraftpark' })
    },
    {
      path: '/velinga-vindkraftpark',
      name: "Velinga Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'velinga-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'velinga-vindkraftpark' })
    },
    {
      path: '/nasudden-vindkraftpark',
      name: "Näsudden Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'nasudden-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nasudden-vindkraftpark' })
    },
    {
      path: '/skals-vindpark',
      name: "Skåls vindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'skals-vindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skals-vindpark' })
    },
    {
      path: '/grasgarde',
      name: "Gräsgärde",
      component: ProjectPage,
      extraProps: { projectUrl: 'grasgarde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grasgarde' })
    },
    {
      path: '/hogehult',
      name: "Högehult",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogehult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogehult' })
    },
    {
      path: '/ed-sv-/-burasen',
      name: "Ed SV / Buråsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'ed-sv-/-burasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ed-sv-/-burasen' })
    },
    {
      path: '/ödeshog',
      name: "Ödeshög",
      component: ProjectPage,
      extraProps: { projectUrl: 'ödeshog' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ödeshog' })
    },
    {
      path: '/skalsparken-vast',
      name: "Skålsparken Väst",
      component: ProjectPage,
      extraProps: { projectUrl: 'skalsparken-vast' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skalsparken-vast' })
    },
    {
      path: '/flottskar',
      name: "Flottskär",
      component: ProjectPage,
      extraProps: { projectUrl: 'flottskar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'flottskar' })
    },
    {
      path: '/storlandet-vindkraftpark',
      name: "Storlandet Vindkraftpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'storlandet-vindkraftpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storlandet-vindkraftpark' })
    },
    {
      path: '/tribbhult',
      name: "Tribbhult",
      component: ProjectPage,
      extraProps: { projectUrl: 'tribbhult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tribbhult' })
    },
    {
      path: '/markbygden-etapp-3',
      name: "Markbygden Etapp 3",
      component: ProjectPage,
      extraProps: { projectUrl: 'markbygden-etapp-3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'markbygden-etapp-3' })
    },
    {
      path: '/erstrask',
      name: "Ersträsk",
      component: ProjectPage,
      extraProps: { projectUrl: 'erstrask' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'erstrask' })
    },
    {
      path: '/skansen',
      name: "Skansen",
      component: ProjectPage,
      extraProps: { projectUrl: 'skansen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skansen' })
    },
    {
      path: '/örken-munkabol',
      name: "Örken-Munkabol",
      component: ProjectPage,
      extraProps: { projectUrl: 'örken-munkabol' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'örken-munkabol' })
    },
    {
      path: '/stomne',
      name: "Stömne",
      component: ProjectPage,
      extraProps: { projectUrl: 'stomne' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stomne' })
    },
    {
      path: '/rojmyrberget',
      name: "Röjmyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'rojmyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rojmyrberget' })
    },
    {
      path: '/morkullberget',
      name: "Morkullberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'morkullberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'morkullberget' })
    },
    {
      path: '/upplo',
      name: "Upplo",
      component: ProjectPage,
      extraProps: { projectUrl: 'upplo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'upplo' })
    },
    {
      path: '/kallbomark',
      name: "Källbomark",
      component: ProjectPage,
      extraProps: { projectUrl: 'kallbomark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kallbomark' })
    },
    {
      path: '/smygheden',
      name: "Smygheden",
      component: ProjectPage,
      extraProps: { projectUrl: 'smygheden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'smygheden' })
    },
    {
      path: '/hycklinge',
      name: "Hycklinge",
      component: ProjectPage,
      extraProps: { projectUrl: 'hycklinge' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hycklinge' })
    },
    {
      path: '/kaymavaara-vindkraftspark',
      name: "Käymävaara Vindkraftspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'kaymavaara-vindkraftspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kaymavaara-vindkraftspark' })
    },
    {
      path: '/rydsgard',
      name: "Rydsgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'rydsgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rydsgard' })
    },
    {
      path: '/backagard',
      name: "Bäckagård",
      component: ProjectPage,
      extraProps: { projectUrl: 'backagard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'backagard' })
    },
    {
      path: '/ripfjallet',
      name: "Ripfjället",
      component: ProjectPage,
      extraProps: { projectUrl: 'ripfjallet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ripfjallet' })
    },
    {
      path: '/nyvallsasen',
      name: "Nyvallsåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nyvallsasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nyvallsasen' })
    },
    {
      path: '/munkhyttan',
      name: "Munkhyttan",
      component: ProjectPage,
      extraProps: { projectUrl: 'munkhyttan' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'munkhyttan' })
    },
    {
      path: '/skackarp',
      name: "Skäckarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'skackarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skackarp' })
    },
    {
      path: '/skarpen',
      name: "Skarpen",
      component: ProjectPage,
      extraProps: { projectUrl: 'skarpen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skarpen' })
    },
    {
      path: '/blasmark',
      name: "Blåsmark",
      component: ProjectPage,
      extraProps: { projectUrl: 'blasmark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blasmark' })
    },
    {
      path: '/mosjoberg',
      name: "Mösjöberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'mosjoberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mosjoberg' })
    },
    {
      path: '/wfz1',
      name: "WFZ1",
      component: ProjectPage,
      extraProps: { projectUrl: 'wfz1' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wfz1' })
    },
    {
      path: '/wfz2',
      name: "WFZ2",
      component: ProjectPage,
      extraProps: { projectUrl: 'wfz2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wfz2' })
    },
    {
      path: '/wfz3',
      name: "WFZ3",
      component: ProjectPage,
      extraProps: { projectUrl: 'wfz3' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wfz3' })
    },
    {
      path: '/wfz4',
      name: "WFZ4",
      component: ProjectPage,
      extraProps: { projectUrl: 'wfz4' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wfz4' })
    },
    {
      path: '/wfz5',
      name: "WFZ5",
      component: ProjectPage,
      extraProps: { projectUrl: 'wfz5' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'wfz5' })
    },
    {
      path: '/svarvarebacken',
      name: "Svarvarebacken",
      component: ProjectPage,
      extraProps: { projectUrl: 'svarvarebacken' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'svarvarebacken' })
    },
    {
      path: '/blisterliden',
      name: "Blisterliden",
      component: ProjectPage,
      extraProps: { projectUrl: 'blisterliden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'blisterliden' })
    },
    {
      path: '/grubban',
      name: "Grubban",
      component: ProjectPage,
      extraProps: { projectUrl: 'grubban' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grubban' })
    },
    {
      path: '/rambo',
      name: "Rambo",
      component: ProjectPage,
      extraProps: { projectUrl: 'rambo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'rambo' })
    },
    {
      path: '/lyckas',
      name: "Lyckås",
      component: ProjectPage,
      extraProps: { projectUrl: 'lyckas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lyckas' })
    },
    {
      path: '/kriegers-flak',
      name: "Kriegers Flak",
      component: ProjectPage,
      extraProps: { projectUrl: 'kriegers-flak' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kriegers-flak' })
    },
    {
      path: '/stora-middelgrund',
      name: "Stora Middelgrund",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-middelgrund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-middelgrund' })
    },
    {
      path: '/bleka',
      name: "Bleka",
      component: ProjectPage,
      extraProps: { projectUrl: 'bleka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bleka' })
    },
    {
      path: '/karsamala',
      name: "Karsamåla",
      component: ProjectPage,
      extraProps: { projectUrl: 'karsamala' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karsamala' })
    },
    {
      path: '/dalshult',
      name: "Dalshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'dalshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dalshult' })
    },
    {
      path: '/nas-sigsarve',
      name: "Näs Sigsarve",
      component: ProjectPage,
      extraProps: { projectUrl: 'nas-sigsarve' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nas-sigsarve' })
    },
    {
      path: '/olofsberg',
      name: "Olofsberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'olofsberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'olofsberg' })
    },
    {
      path: '/kattegatt-syd',
      name: "Kattegatt Syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'kattegatt-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kattegatt-syd' })
    },
    {
      path: '/fyrskeppet',
      name: "Fyrskeppet",
      component: ProjectPage,
      extraProps: { projectUrl: 'fyrskeppet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fyrskeppet' })
    },
    {
      path: '/vindkraftpark-fagelas',
      name: "Vindkraftpark Fågelås",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindkraftpark-fagelas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindkraftpark-fagelas' })
    },
    {
      path: '/alnarp',
      name: "Alnarp",
      component: ProjectPage,
      extraProps: { projectUrl: 'alnarp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'alnarp' })
    },
    {
      path: '/bjorko',
      name: "Björkö",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjorko' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjorko' })
    },
    {
      path: '/össjo',
      name: "Össjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'össjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'össjo' })
    },
    {
      path: '/hokanas-hovgard',
      name: "Hökanäs-Hovgård",
      component: ProjectPage,
      extraProps: { projectUrl: 'hokanas-hovgard' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hokanas-hovgard' })
    },
    {
      path: '/yttre-ringvagen',
      name: "Yttre ringvägen",
      component: ProjectPage,
      extraProps: { projectUrl: 'yttre-ringvagen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'yttre-ringvagen' })
    },
    {
      path: '/galatea-galene',
      name: "Galatea-Galene",
      component: ProjectPage,
      extraProps: { projectUrl: 'galatea-galene' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galatea-galene' })
    },
    {
      path: '/torp',
      name: "Torp",
      component: ProjectPage,
      extraProps: { projectUrl: 'torp' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'torp' })
    },
    {
      path: '/odensvi',
      name: "Odensvi",
      component: ProjectPage,
      extraProps: { projectUrl: 'odensvi' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'odensvi' })
    },
    {
      path: '/lilla-kettstaka',
      name: "Lilla Kettstaka",
      component: ProjectPage,
      extraProps: { projectUrl: 'lilla-kettstaka' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lilla-kettstaka' })
    },
    {
      path: '/kallmyrberget',
      name: "Källmyrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kallmyrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kallmyrberget' })
    },
    {
      path: '/vindpark-femstenaberg',
      name: "Vindpark Femstenaberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vindpark-femstenaberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vindpark-femstenaberg' })
    },
    {
      path: '/stora-uvberget',
      name: "Stora Uvberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-uvberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-uvberget' })
    },
    {
      path: '/hogsjon',
      name: "Högsjön",
      component: ProjectPage,
      extraProps: { projectUrl: 'hogsjon' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hogsjon' })
    },
    {
      path: '/klintaberg',
      name: "Klintaberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'klintaberg' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'klintaberg' })
    },
    {
      path: '/skybygget',
      name: "Skybygget",
      component: ProjectPage,
      extraProps: { projectUrl: 'skybygget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skybygget' })
    },
    {
      path: '/fagremo',
      name: "Fägremo",
      component: ProjectPage,
      extraProps: { projectUrl: 'fagremo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'fagremo' })
    },
    {
      path: '/lillas',
      name: "Lillås",
      component: ProjectPage,
      extraProps: { projectUrl: 'lillas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'lillas' })
    },
    {
      path: '/norrberget',
      name: "Norrberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'norrberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'norrberget' })
    },
    {
      path: '/galmsjomyran',
      name: "Galmsjömyran",
      component: ProjectPage,
      extraProps: { projectUrl: 'galmsjomyran' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'galmsjomyran' })
    },
    {
      path: '/grasas',
      name: "Gräsås",
      component: ProjectPage,
      extraProps: { projectUrl: 'grasas' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'grasas' })
    },
    {
      path: '/urasa-vindbrukspark',
      name: "Uråsa Vindbrukspark",
      component: ProjectPage,
      extraProps: { projectUrl: 'urasa-vindbrukspark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'urasa-vindbrukspark' })
    },
    {
      path: '/jiltjaur',
      name: "Jiltjaur",
      component: ProjectPage,
      extraProps: { projectUrl: 'jiltjaur' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jiltjaur' })
    },
    {
      path: '/storberget-2',
      name: "Storberget 2",
      component: ProjectPage,
      extraProps: { projectUrl: 'storberget-2' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storberget-2' })
    },
    {
      path: '/kusberget',
      name: "Kusberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'kusberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kusberget' })
    },
    {
      path: '/kapelludden',
      name: "Kapelludden",
      component: ProjectPage,
      extraProps: { projectUrl: 'kapelludden' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kapelludden' })
    },
    {
      path: '/stora-middelgrund',
      name: "Stora Middelgrund",
      component: ProjectPage,
      extraProps: { projectUrl: 'stora-middelgrund' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stora-middelgrund' })
    },
    {
      path: '/sylen',
      name: "Sylen",
      component: ProjectPage,
      extraProps: { projectUrl: 'sylen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sylen' })
    },
    {
      path: '/nedra-sandby',
      name: "Nedra Sandby",
      component: ProjectPage,
      extraProps: { projectUrl: 'nedra-sandby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nedra-sandby' })
    },
    {
      path: '/marktjarn',
      name: "Marktjärn",
      component: ProjectPage,
      extraProps: { projectUrl: 'marktjarn' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'marktjarn' })
    },
    {
      path: '/poseidon-syd',
      name: "Poseidon Syd",
      component: ProjectPage,
      extraProps: { projectUrl: 'poseidon-syd' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'poseidon-syd' })
    },
    {
      path: '/poseidon-nord',
      name: "Poseidon Nord",
      component: ProjectPage,
      extraProps: { projectUrl: 'poseidon-nord' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'poseidon-nord' })
    },
    {
      path: '/eystrasalt',
      name: "Eystrasalt",
      component: ProjectPage,
      extraProps: { projectUrl: 'eystrasalt' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'eystrasalt' })
    },
    {
      path: '/savedalen',
      name: "Sävedalen",
      component: ProjectPage,
      extraProps: { projectUrl: 'savedalen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'savedalen' })
    },
    {
      path: '/kastlosa',
      name: "Kastlösa",
      component: ProjectPage,
      extraProps: { projectUrl: 'kastlosa' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kastlosa' })
    },
    {
      path: '/granasen',
      name: "Granåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'granasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'granasen' })
    },
    {
      path: '/aspeland',
      name: "Aspeland",
      component: ProjectPage,
      extraProps: { projectUrl: 'aspeland' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aspeland' })
    },
    {
      path: '/skane-havsvindpark',
      name: "Skåne havsvindpark",
      component: ProjectPage,
      extraProps: { projectUrl: 'skane-havsvindpark' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'skane-havsvindpark' })
    },
    {
      path: '/humlekarr',
      name: "Humlekärr",
      component: ProjectPage,
      extraProps: { projectUrl: 'humlekarr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'humlekarr' })
    },
    {
      path: '/bondrum',
      name: "Bondrum",
      component: ProjectPage,
      extraProps: { projectUrl: 'bondrum' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bondrum' })
    },
    {
      path: '/ramma',
      name: "Rämma",
      component: ProjectPage,
      extraProps: { projectUrl: 'ramma' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ramma' })
    },
    {
      path: '/jattebergen',
      name: "Jättebergen",
      component: ProjectPage,
      extraProps: { projectUrl: 'jattebergen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jattebergen' })
    },
    {
      path: '/silja',
      name: "Silja",
      component: ProjectPage,
      extraProps: { projectUrl: 'silja' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'silja' })
    },
    {
      path: '/roknolen',
      name: "Röknölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'roknolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'roknolen' })
    },
    {
      path: '/storgrundet',
      name: "Storgrundet",
      component: ProjectPage,
      extraProps: { projectUrl: 'storgrundet' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'storgrundet' })
    },
    {
      path: '/stormossen',
      name: "Stormossen",
      component: ProjectPage,
      extraProps: { projectUrl: 'stormossen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'stormossen' })
    },
    {
      path: '/mareld',
      name: "Mareld",
      component: ProjectPage,
      extraProps: { projectUrl: 'mareld' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mareld' })
    },
    {
      path: '/dyning',
      name: "Dyning",
      component: ProjectPage,
      extraProps: { projectUrl: 'dyning' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'dyning' })
    },
    {
      path: '/orsa-norr',
      name: "Orsa Norr",
      component: ProjectPage,
      extraProps: { projectUrl: 'orsa-norr' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'orsa-norr' })
    },
    {
      path: '/triton',
      name: "Triton",
      component: ProjectPage,
      extraProps: { projectUrl: 'triton' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'triton' })
    },
    {
      path: '/tretjarnsberget',
      name: "Tretjärnsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'tretjarnsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tretjarnsberget' })
    },
    {
      path: '/kedjeasen',
      name: "Kedjeåsen",
      component: ProjectPage,
      extraProps: { projectUrl: 'kedjeasen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kedjeasen' })
    },
    {
      path: '/sallebraten',
      name: "Sällebråten",
      component: ProjectPage,
      extraProps: { projectUrl: 'sallebraten' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sallebraten' })
    },
    {
      path: '/jordberga',
      name: "Jordberga",
      component: ProjectPage,
      extraProps: { projectUrl: 'jordberga' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'jordberga' })
    },
    {
      path: '/tonshult',
      name: "Tönshult",
      component: ProjectPage,
      extraProps: { projectUrl: 'tonshult' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'tonshult' })
    },
    {
      path: '/sjollen',
      name: "Sjollen",
      component: ProjectPage,
      extraProps: { projectUrl: 'sjollen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'sjollen' })
    },
    {
      path: '/kila',
      name: "Kila",
      component: ProjectPage,
      extraProps: { projectUrl: 'kila' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kila' })
    },
    {
      path: '/kultje',
      name: "Kultje",
      component: ProjectPage,
      extraProps: { projectUrl: 'kultje' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'kultje' })
    },
    {
      path: '/vassberg-',
      name: "Våssberg",
      component: ProjectPage,
      extraProps: { projectUrl: 'vassberg-' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vassberg-' })
    },
    {
      path: '/hjartsola',
      name: "Hjärtsöla",
      component: ProjectPage,
      extraProps: { projectUrl: 'hjartsola' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'hjartsola' })
    },
    {
      path: '/mortsjo',
      name: "Mörtsjö",
      component: ProjectPage,
      extraProps: { projectUrl: 'mortsjo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mortsjo' })
    },
    {
      path: '/ebbegarde',
      name: "Ebbegärde",
      component: ProjectPage,
      extraProps: { projectUrl: 'ebbegarde' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'ebbegarde' })
    },
    {
      path: '/karnebo',
      name: "Kärnebo",
      component: ProjectPage,
      extraProps: { projectUrl: 'karnebo' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'karnebo' })
    },
    {
      path: '/aurora',
      name: "Aurora",
      component: ProjectPage,
      extraProps: { projectUrl: 'aurora' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'aurora' })
    },
    {
      path: '/mallby',
      name: "Mällby",
      component: ProjectPage,
      extraProps: { projectUrl: 'mallby' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'mallby' })
    },
    {
      path: '/nordkolen',
      name: "Nordkölen",
      component: ProjectPage,
      extraProps: { projectUrl: 'nordkolen' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'nordkolen' })
    },
    {
      path: '/bjornetjarnsberget',
      name: "Björnetjärnsberget",
      component: ProjectPage,
      extraProps: { projectUrl: 'bjornetjarnsberget' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'bjornetjarnsberget' })
    },
    {
      path: '/vidar',
      name: "Vidar",
      component: ProjectPage,
      extraProps: { projectUrl: 'vidar' },
      loadData: params => pageDataLoadingAPI.ProjectPage.loadData({ ...params, projectUrl: 'vidar' })
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
