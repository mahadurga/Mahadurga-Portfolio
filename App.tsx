import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import "@fontsource/inter";
import Portfolio from "./components/Portfolio";
import Scene from "./components/3d/Scene";
import Navigation from "./components/Navigation";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl font-light tracking-wider"
            >
              Loading Portfolio...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Background Scene */}
          <div className="fixed inset-0 z-0">
            <Canvas
              camera={{
                position: [0, 2, 10],
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                powerPreference: "high-performance"
              }}
            >
              <Suspense fallback={null}>
                <Scene currentSection={currentSection} />
              </Suspense>
            </Canvas>
          </div>

          {/* Portfolio Content */}
          <div className="relative z-10">
            <Portfolio 
              currentSection={currentSection} 
              setCurrentSection={setCurrentSection} 
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
