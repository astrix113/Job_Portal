/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const location = useLocation();

  // 1. If auth check not done yet, don't render anything
  if (!isLoaded) return null;

  // 2. If user is not signed in, redirect to sign-in page and preserve intent
  if (!isSignedIn) {
    return (
      <Navigate
        to={`/?sign-in=true&redirect_url=${location.pathname}`}
        replace
      />
    );
  }

  // 3. If user is signed in but not onboarded, redirect to onboarding
  const hasRole = Boolean(user?.unsafeMetadata?.role);
  if (!hasRole && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  // 4. Allow access
  return children;
};

export default ProtectedRoute;

