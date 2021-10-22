import { useEffect } from "react";
import { useSelector } from "react-redux";
import { token } from "../redux/auth/authOperation";
import authSelectors from "../redux/auth/authSelectors";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  
  const tokenId = useSelector((state) => authSelectors.getToken(state))

  useEffect(() => {
    tokenId ? token.set(tokenId) : token.set("")
  }, [tokenId]);

  return (
    <>
    <Header/>
    <Main/>
    </>
  );
};

export default App;
