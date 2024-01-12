import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MyBooks from "./pages/MyBooks";
import CheckoutPage from "./pages/CheckoutPage";
import { RecoilRoot, useRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import api from "./services/api";
import { useEffect } from "react";

type prop = {
  children: string | JSX.Element | JSX.Element[];
};
const Layout = ({ children }: prop) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <InitUser />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/mybooks"
            element={
              <Layout>
                <MyBooks />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <CheckoutPage />
              </Layout>
            }
          />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
const token = localStorage.getItem("token");

function InitUser() {
  const [, setUser] = useRecoilState(userState);

  const init = async () => {
    try {
      const response = await api.get("/me", {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log("Response Data:", response.data);
      const data = response.data;
      if (data.name) {
        setUser({
          isLoading: false,
          name: data.name,
        });
      }
    } catch (e) {
      console.error("Error fetching user data:", e);
      setUser({
        isLoading: false,
        name: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}
