import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import RentPage from "./pages/RentPage";
import CategoriesPage from "./pages/CategoriesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import GetStartedPage from "./pages/GetStartedPage";
import ListItemsPage from "./pages/ListItemsPage";
import PostRequestPage from "./pages/PostRequestPage";
import CategoryPage from "./pages/CategoryPage";
import HowToRentPage from "./pages/HowToRentPage";
import SafetyTipsPage from "./pages/SafetyTipsPage";
import InsurancePage from "./pages/InsurancePage";
import PricingGuidePage from "./pages/PricingGuidePage";
import OwnerProtectionPage from "./pages/OwnerProtectionPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import SupportPage from "./pages/SupportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/list-items" element={<ListItemsPage />} />
          <Route path="/post-request" element={<PostRequestPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/how-to-rent" element={<HowToRentPage />} />
          <Route path="/safety-tips" element={<SafetyTipsPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/pricing-guide" element={<PricingGuidePage />} />
          <Route path="/owner-protection" element={<OwnerProtectionPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/support" element={<SupportPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
