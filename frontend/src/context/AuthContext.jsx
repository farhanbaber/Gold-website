import React, { createContext, useContext, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AUTH_STORAGE_KEY = "goldWebsiteAuthUser";
const AuthContext = createContext(null);

const readInitialUser = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readInitialUser);
  const adminEmails = String(import.meta.env.VITE_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  const mapRoleFromEmail = (email) => {
    if (!email) return "user";
    return adminEmails.includes(String(email).toLowerCase()) ? "admin" : "user";
  };

  const login = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));
  };

  const loginWithCredentials = ({ email, name }) => {
    const role = mapRoleFromEmail(email);
    login({
      name: name || email?.split("@")?.[0] || "User",
      email: email || "",
      role,
      provider: "credentials",
    });
    return role;
  };

  const loginWithGoogle = (credentialResponse) => {
    if (!credentialResponse?.credential) {
      throw new Error("Google credential is missing");
    }
    const decoded = jwtDecode(credentialResponse.credential);
    const email = decoded?.email || "";
    const name = decoded?.name || "Google User";
    const role = mapRoleFromEmail(email);

    login({
      name,
      email,
      role,
      provider: "google",
      picture: decoded?.picture || "",
    });
    return role;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({ user, login, loginWithCredentials, loginWithGoogle, logout }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
