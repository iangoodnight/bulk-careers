# Bulk Careers

This repo acts as a career portal for Natural Essentials, Inc.® and Bulk
Apothecary®.  Deployed to Netlify, `bulk-careers` utilizes Netlify functions to
submit applications to a Firebase Real-Time Database to allow for database
persistence.  A Firebase function triggers an email alert, sent through
Mailgun.js, to communicate new applications to our HR department.  Applications
are built and managed utilizing the Netlify CMS.

## Installation

1. Fork this repo to the Organization's Github.  New changes will be available
   to fetch upstream.
2. Set up a [Netlify] account.  This will allow use to utilize Netlify's CDNs to
   ensure our career portal is zippy when our guests visit it.  Additionally,
   [Netlify] has some cool built-in utilities that will help us set up access
   control.
3. From the [Netlify Dashboard]:
  - Choose to create a `New site from Git`.
  - Select `GitHub` as our Git Provider.  This will set up continuous deployment
    from our repo.
  - If you do not see your repo listed, follow the link to configure the Netlify
    app on GitHub.  If you already have the Netlify app enabled, follow the link
    to ensure that you have given the Netlify app access to your `bulk-careers`
    repository.
  - Select your `bulk-careers` app and continue on to your `Site Settings`.
  - From `Site settings` click `Advanced` to expose the environmental variables.
  - Leave this page open in one tab, and from another tab, continue to
    [Firebase]
4. [Firebase] setup:
  - From the [Firebase] landing page, create an account if necessary, and sign
    in.
  - Continue on to the [Firebase console].
  - From the console, choose to `Add project`.
  - Name your project appropriately.
  - Choose whether or not to implement Google Analytics (it will not affect our
    app setup).
  - If you choose to setup analytics, select the analytics account you want
    linked
  - Choose `Realtime Database` from the menu on the left and continue to add our
    database to the project, selecting to start with 'closed' rules.
  - From our Realtime Database, navigate to the `Rules` tab.
  - Set the rules as follows to allow our app to write to the database:
      ```
      {
        "rules": {
          ".read": false,
          ".write": "auth.uid === 'careers-app-service-worker'""

        }
      }
      ```
  - Once the database is setup, continue on to `Project settings` by selecting
    the gear icon in the upper left corner of your console.
  - From `Project settings` navigate to the `Service accounts` tab.
  - Choose to `Generate new private key`.  This will create the credentials we
    need to finish our Netlify deploy.  Also, take a moment to copy the
    `databaseUrl` displayed in the `Admin SDK configuration snippet` found at
    Firebase > Project settings > Service accounts.  These are the credentials
    we will need to enter into our [Netlify] app.
5. [Netlify] continued:
  - Return to the [Netlify] tab we left open and choose to add a `New variable`
    from the `Advanced build settings`.  (If you've already let the site
    build, don't fret, you can access these same variables through Netlify >
    Site settings > Build & deploy > Environment).
  - Set the following variables (all variables are prefixed, `SDK`):
    ```
    DB_URL: <the databaseUrl from the Firebase Admin SDK configuration snippet>
    SDK_AUTH_PROVIDER_X509_CERT_URL: <taken from Firebase credentials.json>
    SDK_AUTH_URI: <taken from Firebase credentials.json>
    SDK_CLIENT_EMAIL: <taken from Firebase credentials.json>
    SDK_CLIENT_ID: <taken from Firebase credentials.json>
    SDK_CLIENT_X509_CERT_URL: <taken from Firebase credentials.json>
    SDK_PRIVATE_KEY: <taken from Firebase credentials.json>
    SDK_PRIVATE_KEY_ID: <taken from Firebase credentials.json>
    SDK_PROJECT_ID: <taken from Firebase credentials.json>
    SDK_TOKEN_URI: <taken from Firebase credentials.json>
    SDK_TYPE: <taken from Firebase credentials.json>
    ```
  - Continue to let the set begin it's initial build in the background.
  - While your site begins it's initial build, navigate to `Site settings`.
  - From here you can choose to set up a `Site Name` from Site settings >
    General > Site Information.
  - Next, set up Netlify Identity by continuing to Site settings > Build &
    deploy > Post processing > Snippet Injection.  From here, inject the
    following snippet in the `<head>` of your site:
    ```
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    </script>
    ```
  - Continue to Site settings > Identity.  Enable the `Identity` functions
    choosing `Closed registration` to restrict members to invite-only.
  - From Site settings > Identity > Registration, choose to add an `External
    provider` if you choose (such as Google).
  - To allow users without a Github account to make changes to our applications,
    we also needs to enable `Git Gateway` from Site settings > Identity >
    Services > Git Gateway.  Enable it here.
  - From your [Github account], navigate to Settings > Developer settings >
    OAuth apps and create a new OAuth app.  This client ID and secret is what
    you will use for your `Git Gateway` credentials.
6. Mailgun and last steps:
  - Now with our Netlify App set up, all we need to do is get our Mailgun API
    key and deploy our firebase function.  This will ensure that we receive a
    notification with our new application every time someone applies.
  - Create an account at [Mailgun].
  - From the [Mailgun] dashboard, navigate to `Sending`.
  - Click on the pre-created sandbox account and choose to connect via API.
  - From one of the language examples, grab your API key and API base URL (
    it will look something like `https://api.mailgun.net/v3/sandbox123123...`.
    We only need from `sandbox` to the end for our application.)
  - Before navigating away, add your email address to `Authorized Recipients`.
    For us to use the free tier and avoid setting up our own domain, we must
    approve emails to that endpoint by verifying it is our inbox.
7. Deploying our firebase function:
  - Clone `bulk-careers` to your local machine.  Change directories to the
    `functions` directory with `$ cd ./bulk-careers/functions`.
  - Install the Firebase CLI tools with `npm install -g firebase-tools`.
  - Install any remaining function dependencies with `npm install`.
  - Using the name of your Firebase project (see step 4.4), run the command:
    `firebase -P <firebase project name> login` and authenticate.
  - Add your last environmental configs (mailgun key, base, and email):
    ```
    $ firebase -P <project name> functions:config:set mailgun.key=<API KEY>
    $ firebase -P <project name> functions:config:set mailgun.base=<base url>
    $ firebase -P <project name> functions:config:set email.target=<email>
    ```
  - Deploy your functions to Firebase with:
    ```
    $ firebase -P <project name> deploy --only functions
    ```
8. Testing
  - At this point, your [Netlify] site should be up and ready to test!  Fill out
    on of the applications and ensure that it ends up both in your [Firebase] DB
    and that your email alerts are sending correctly.  Reach out with any
    issues.

## Creating content

Creating new applications or marking applications as active or inactive is as
easy as logging in to the backend CMS by appending `/admin/` to your site's URL.
From here you can create more applications, delete applications, and mark them
as active or inactive.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e162512c-e213-4d6c-9ef4-828b560988a3/deploy-status)](https://app.netlify.com/sites/bulk-careers/deploys)


[Netlify]: https://netlify.com
[Netlify Dashboard]: https://app.netlify.com
[Firebase]: https://firebase.google.com
[Firebase console]: https://console.firebase.google.com
[Github account]: https://github.com/settings/developers
[Mailgun]: https://mailgun.com
