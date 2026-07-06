import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CreativeBackground from "../ui/CreativeBackground";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-plum-900 relative">
      <CreativeBackground />
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
