# React APP with User Login Authentication
This little Project is to practice the basic Authentication interaction 
between using React Frame work and Auth0 API

# 1.
Environment (.env) setup, App domain and the ClientID will be the basic connection between react and Auth0;
Auth0 package is also necessary to get start with. (npm i @auth0/auth0-react)
<!-- 
•	REACT_APP_AUTH0_DOMAIN = 
•	REACT_APP_AUTH0_CLIENT_ID = 
  -->

# 2.
Store the Domain and Client_ID info into the variable we first defined in the file of Index.js 
<!--
•	const domain = process.env.REACT_APP_AUTH0_DOMAIN;
•	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
 -->

# 3.
Pass the domain and Client_ID we just stored into Auth0Provider,
along with redirectUri which is pre-installed in auth0
<!-- 
   <Auth0Provider
     domain={domain}
     clientId={clientId}
     redirectUri={window.location.origin}>
    <App />
   </Auth0Provider> 
-->

# 4.
Create the Login, Logout and Profile components of Users, and import them all in App.js