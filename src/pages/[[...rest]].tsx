import dynamic from "next/dynamic";

const AppRouter = dynamic(() => import("../router/index"), { ssr: false });

const Main = () => {
  return <AppRouter />;
};

export default Main;
