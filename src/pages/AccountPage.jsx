import React from "react";
import supabase from "../config/supabaseClient";
import Signup from "../components/Signup";

const AccountPage = () => {
  return (
    <div className="mt-20">
      <h1>AccountPage</h1>
      <div>signup</div>
      <Signup />
    </div>
  );
};

export default AccountPage;
