import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import Signup from "../components/Signup";

const AccountPage = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} />;
  } else {
    return <div>Logged in!</div>;
  }
  // return (
  //   <div className="mt-20">
  //     <h1>AccountPage</h1>
  //     <div>signup</div>
  //     <Signup />
  //   </div>
  // );
};

export default AccountPage;
