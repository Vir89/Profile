import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <nav>
        <Link to="/" />
        <Link to="About" />
        <Link to="Contact" />
        <Link to="Education" />
        <Link to="Experience" />
        <Link to="Portfolio" />
        <Link to="Profile" />
        <Link to="Skills" />
      </nav>

      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
