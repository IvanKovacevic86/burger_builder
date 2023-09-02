import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const Main = (props) => {
  const {
    burgerBuilder,
    setBurgerBuilder,
    loading,
    setLoading,
    modal,
    setModal,
  } = props;

  return (
    <div>
      <Layout>
        <BurgerBuilder
          burgerBuilder={burgerBuilder}
          setBurgerBuilder={setBurgerBuilder}
          loading={loading}
          setLoading={setLoading}
          modal={modal}
          setModal={setModal}
        />
      </Layout>
    </div>
  );
};

export default Main;
