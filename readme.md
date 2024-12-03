# Auth0 Tanstack Router

This is a template reposiotry for getting started with [Auth0](https://auth0.com/docs) and [Tanstack Router](https://tanstack.com/router/latest).

## Getting Started

### Get Your Application Keys

When you signed up for Auth0, a new application was created for you, or you could have created a new one. You will need some details about that application to communicate with Auth0. You can get these details from the Application Settings section in the Auth0 dashboard.

> Set your domain and clientId keys to their respective environment variables in the .env file

### Configure Callback URLs

A callback URL is a URL in your application where Auth0 redirects the user after they have authenticated. The callback URL for your app must be added to the Allowed Callback URLs field in your Application Settings. If this field is not set, users will be unable to log in to the application and will get an error.

> You should set the Allowed Callback URL to http://localhost:3000/authorize.

### Configure Logout URLs

A logout URL is a URL in your application that Auth0 can return to after the user has been logged out of the authorization server. This is specified in the returnTo query parameter. The logout URL for your app must be added to the Allowed Logout URLs field in your Application Settings. If this field is not set, users will be unable to log out from the application and will get an error.

> The logout URL you need to add to the Allowed Logout URLs field is http://localhost:3000/authorize.

### Configure Allowed Web Origins

You need to add the URL for your app to the Allowed Web Origins field in your Application Settings. If you don't register your application URL here, the application will be unable to silently refresh the authentication tokens and your users will be logged out the next time they visit the application, or refresh the page.

> You should set the Allowed Web Origins to http://localhost:3000/authorize.

### Running The Application

Install the dependencies if you haven't already.

```bash
pnpm i
```

Run the Application locally.

```bash
pnpm dev
```
