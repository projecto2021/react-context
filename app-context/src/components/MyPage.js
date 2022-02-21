
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";




const MyPage = () => {
 
  return (
    <div className="my-page">
      <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
        <Header
          />
        <Main  />
        <Footer />
          </LanguageProvider>
      </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPage;
