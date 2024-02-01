import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/my_profile/index";

import Text from "./pages/home/text-similarity";
import Document from "./pages/home/document-similarity";
import Image from "./pages/home/image-plagiarism-check";
import TextComparison from "./pages/home/compare-text";
import FileComparison from "./pages/home/compare-file";
import ResultPage from "./pages/home/result";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/useAuth" element={<useAuth />} />
        <Route path="/text-similarity" element={<Text />} />
        <Route path="/document-similarity" element={<Document />} />
        <Route path="/image-plagiarism-check" element={<Image />} />
        <Route path="/compare-text" element={<TextComparison />} />
        <Route path="/compare-file" element={<FileComparison />} />
        <Route path="/result" element={<ResultPage />} />
        {/* <Route path="/leaderboard" element={<Board />} /> */}        

        
        {/* <Route path="/result/:emo" element={<ResultPage />} /> */}
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
