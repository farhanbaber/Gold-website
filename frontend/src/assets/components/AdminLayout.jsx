import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./AdminLayout.module.css";

const links = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/orders", label: "Orders" },
  { to: "/admin/products", label: "Manage Products" },
];

const AdminLayout = () => {
  const location = useLocation();
  return (
    <div className={styles.wrap}>
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? styles.active : ""}
          >
            {link.label}
          </Link>
        ))}
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
