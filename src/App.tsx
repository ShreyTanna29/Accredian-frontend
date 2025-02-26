import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

const Landing = lazy(() => import("./components/Landing"));
const ClaimBonus = lazy(() => import("./components/ClaimBonus"));

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/claim" element={<ClaimBonus />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
