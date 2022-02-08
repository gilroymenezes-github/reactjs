import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import env from "react-dotenv";

const GoogleClientId : string = env["REACT_APP_GOOGLE_CLIENT_ID"] as string;

interface AuthResponse {
    token: string;
    user: User;
}

interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
}

const GoogleAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const onSuccess = async(res: any) => {
        console.log("pass", res);
        try {
            const authUrl = "http://localhost:7071/api/userauth";
            const result: AxiosResponse<AuthResponse> = await axios.post(authUrl, {
                token: res?.tokenId,
            });
            console.log("user", result.data.user.email);
            setUser(result.data.user);
        } catch (err) {
            console.log(err);
        }
    };
    
    const onFailure = (res: any) => console.log("error", res);
    
    const onLogoutSuccess = () => setUser(null);
    
    return (
      <div>
        <div className="h-screen w-screen flex items-center justify-center flex-col">
          {!user && (
            <GoogleLogin
              clientId={GoogleClientId}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
            />
          )}
    
          {user && (
            <>
              <img src={user.avatar} alt={user.avatar} className="rounded-full" />
              <h1 className="text-xl font-semibold text-center my-5">
                {user.name} {user.email}
              </h1>
            </>
          )}
        </div>
        <div>
        <GoogleLogout 
          clientId={GoogleClientId}
          onLogoutSuccess={onLogoutSuccess} />
        </div>
        </div>
      );
}

export default GoogleAuth;