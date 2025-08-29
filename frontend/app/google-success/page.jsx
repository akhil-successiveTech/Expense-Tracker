"use client";  // if using Next.js 13 with app directory and client-side page

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    // Example: Retrieve user data or token from localStorage, session etc.

    localStorage.setItem('googleUser', JSON.stringify(userData));

    if (!userData) {
      // If no user data, maybe redirect to login
      router.push("/signup");
    }

    // Or trigger any analytics or fetch user-specific data here
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google Login Successful!</h1>
      <p>Welcome back. You are now logged in using your Google account.</p>
      {/* Optionally display user information */}
      {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
      <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  );
};

export default GoogleSuccess;
