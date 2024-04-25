import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import { Button, Card } from "../../Componets/index.js";
const Home = () => {
  let history = useHistory();

  function startRegister() {
    history.push("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Dropin!" icon="logo">
        <p className={styles.text}>
          We&apos;re working hard to get Dropin ready for everyone! shile we
          wrap up the finishing touches, we&apos;re adding people gradually to
          make sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
