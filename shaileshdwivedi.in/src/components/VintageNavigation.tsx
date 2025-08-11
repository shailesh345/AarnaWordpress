import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  ascii: string;
  description: string;
}

export const VintageNavigationPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: "/", label: "HOME", ascii: "[H]", description: "MAIN_DIRECTORY" },
    {
      path: "/about",
      label: "ABOUT",
      ascii: "[A]",
      description: "PROFILE_DATA",
    },
    {
      path: "/skills",
      label: "SKILLS",
      ascii: "[S]",
      description: "TECH_STACK",
    },
    {
      path: "/projects",
      label: "PROJECTS",
      ascii: "[P]",
      description: "CODE_ARCHIVE",
    },
    {
      path: "/experience",
      label: "EXPERIENCE",
      ascii: "[E]",
      description: "WORK_HISTORY",
    },
    {
      path: "/contact",
      label: "CONTACT",
      ascii: "[C]",
      description: "COMM_LINK",
    },
  ];

  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      } else if (e.key === "ArrowUp" && isExpanded) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : navItems.length - 1));
      } else if (e.key === "ArrowDown" && isExpanded) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < navItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter" && isExpanded) {
        const selectedItem = navItems[selectedIndex];
        window.location.href = selectedItem.path;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isExpanded, selectedIndex]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white border-2 border-black text-black p-2 font-mono text-xs hover:bg-black hover:text-white transition-all duration-300"
      >
        [{isExpanded ? "CLOSE" : "MENU"}]
      </button>

      {isExpanded && (
        <div className="absolute top-12 right-0 bg-white border-2 border-black p-4 min-w-64 max-w-sm">
          <div className="text-black font-mono text-xs mb-4 text-center border-b border-black pb-2">
            NAVIGATION_MATRIX_V2.1
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block p-2 font-mono text-xs transition-all duration-200 ${
                  index === selectedIndex
                    ? "bg-black text-white"
                    : location.pathname === item.path
                    ? "text-gray-600 bg-gray-200"
                    : "text-black hover:bg-gray-100"
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => setIsExpanded(false)}
              >
                <div className="flex justify-between items-center">
                  <span>
                    {item.ascii} {item.label}
                  </span>
                  {location.pathname === item.path && <span>[ACTIVE]</span>}
                </div>
                <div className="text-xs opacity-70 mt-1">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-2 border-t border-black text-black font-mono text-xs opacity-70">
            Use TAB to toggle • ↑↓ to navigate • ENTER to select
          </div>
        </div>
      )}
    </div>
  );
};

export const VintageLoadingBar: React.FC<{
  isLoading: boolean;
  progress?: number;
  label?: string;
}> = ({ isLoading, progress = 0, label = "LOADING" }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDisplayProgress((prev) => {
          const target = progress;
          const diff = target - prev;
          return prev + Math.min(Math.max(diff / 10, 0.1), 5);
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLoading, progress]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center">
      <div className="bg-white border-2 border-black p-6 max-w-md w-full mx-4">
        <div className="text-black font-mono text-center mb-4">{label}...</div>

        <div className="border-2 border-black h-4 bg-white mb-4">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        <div className="text-black font-mono text-xs text-center">
          {displayProgress.toFixed(1)}% COMPLETE
        </div>

        <div className="text-black font-mono text-xs text-center mt-2 opacity-70">
          PLEASE WAIT...
        </div>
      </div>
    </div>
  );
};

export const VintageNotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<
    Array<{
      id: number;
      message: string;
      type: "info" | "success" | "warning" | "error";
      timestamp: number;
    }>
  >([]);

  useEffect(() => {
    // Example notifications
    const exampleNotifications = [
      {
        id: 1,
        message: "SYSTEM INITIALIZED",
        type: "success" as const,
        timestamp: Date.now(),
      },
      {
        id: 2,
        message: "NEURAL NETWORKS ONLINE",
        type: "info" as const,
        timestamp: Date.now() + 1000,
      },
      {
        id: 3,
        message: "AI MODULES LOADED",
        type: "success" as const,
        timestamp: Date.now() + 2000,
      },
    ];

    exampleNotifications.forEach((notification, index) => {
      setTimeout(() => {
        setNotifications((prev) => [...prev, notification]);
      }, index * 1000);
    });

    // Auto-remove notifications after 5 seconds
    const interval = setInterval(() => {
      const now = Date.now();
      setNotifications((prev) =>
        prev.filter((notification) => now - notification.timestamp < 5000)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-black border-black";
      case "warning":
        return "text-yellow-400 border-yellow-400";
      case "error":
        return "text-red-400 border-red-400";
      default:
        return "text-blue-400 border-blue-400";
    }
  };

  return (
    <div className="fixed top-4 left-4 z-40 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`bg-white border-2 p-3 font-mono text-xs animate-slide-in-left ${getTypeColor(
            notification.type
          )}`}
          style={{
            animation: "slideInLeft 0.3s ease-out",
          }}
        >
          <div className="flex items-center gap-2">
            <span>[{notification.type.toUpperCase()}]</span>
            <span>{notification.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
