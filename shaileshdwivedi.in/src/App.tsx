import { Suspense, useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickActions from "./components/QuickActions";
import ScrollTop from "./components/ScrollTop";
import BootLoader from "./components/BootLoader";
import { VintageNavigationPanel } from "./components/VintageNavigation";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the boot sequence
    const hasSeenBoot = localStorage.getItem("hasSeenBoot");
    if (hasSeenBoot) {
      setIsLoading(false);
    }
  }, []);

  const handleBootComplete = () => {
    localStorage.setItem("hasSeenBoot", "true");
    setIsLoading(false);
  };

  if (isLoading) {
    return <BootLoader onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <VintageNavigationPanel />

      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="p-8 text-center">
              <div className="old-phone-card p-4 inline-block">
                <div className="phone-font text-sm text-black">
                  LOADING SYSTEM...
                </div>
              </div>
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </main>
      <QuickActions />
      <ScrollTop />
      <Footer />
    </div>
  );
}
