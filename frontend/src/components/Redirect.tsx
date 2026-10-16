import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { redirects } from "@/content/site";

/** Client-side redirect for retired routes. */
export function RedirectLegacy() {
  const { pathname } = useLocation();
  const target = redirects[pathname] || "/";
  return <Navigate to={target} replace />;
}
