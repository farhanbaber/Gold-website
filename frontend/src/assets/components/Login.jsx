import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loginWithCredentials, loginWithGoogle } = useAuth();

  const safeRedirectPath = () => {
    const raw = searchParams.get("redirect");
    if (raw && raw.startsWith("/") && !raw.startsWith("//")) return raw;
    return "/";
  };
  const [form, setForm] = React.useState({ email: "", password: "" });
  const hasGoogleClientId = Boolean(import.meta.env.VITE_GOOGLE_CLIENT_ID);

  const handleCredentialLogin = (e) => {
    e.preventDefault();
    const role = loginWithCredentials({
      email: form.email,
      name: form.email.split("@")[0],
    });
    navigate(role === "admin" ? "/admin/dashboard" : safeRedirectPath());
  };

  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "110px 14px 30px", background: "#f5f5f5" }}>
      <div style={{ width: "100%", maxWidth: "430px", background: "#fff", border: "1px solid #eadcc5", borderRadius: "14px", padding: "22px" }}>
        <h1 style={{ marginBottom: "6px", color: "#8f6325" }}>Sign In</h1>
        <p style={{ marginBottom: "16px", color: "#76634a" }}>Login to continue to your account.</p>

        <form onSubmit={handleCredentialLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            required
            style={{ width: "100%", padding: "11px", border: "1px solid #ddcfb5", borderRadius: "8px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            required
            style={{ width: "100%", padding: "11px", border: "1px solid #ddcfb5", borderRadius: "8px", marginBottom: "12px" }}
          />
          <button type="submit" style={{ width: "100%", padding: "11px", background: "#c6a05a", color: "#1a1308", border: "none", borderRadius: "8px", fontWeight: 700 }}>
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", margin: "14px 0", color: "#7b6a4f" }}>or</p>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <button
            onClick={() => {
              loginWithCredentials({ email: "guest@fayaz.com", name: "Guest User" });
              navigate(safeRedirectPath());
            }}
            style={{
              padding: "11px 24px",
              background: "#1a1308",
              color: "#c6a05a",
              border: "1px solid #c6a05a",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Access as Guest
          </button>
        </div>
        <p style={{ marginTop: "10px", fontSize: "12px", color: "#8a7658" }}>
          Admin access is granted only to authorized emails.
        </p>
      </div>
    </div>
  );
};

export default Login;
