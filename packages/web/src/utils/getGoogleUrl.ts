const getGoogleOAuthUrl = () => {
    const rootUrl= "https://accounts.google.com/o/oauth2/auth";
    const options = {
        redirect_uri: process.env.VITE_GOOGLE_OAUTH_REDIRECT_URI!,
        client_id: process.env.VITE_GOOGLE_CLIENT_ID!,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
    }
    console.log(options);
    const qs = new URLSearchParams(options);
    console.log(qs.toString());
    return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthUrl;