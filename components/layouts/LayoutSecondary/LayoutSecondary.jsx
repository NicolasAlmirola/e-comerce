import Navbar from "@/components/sections/Header/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
import styles from "./LayoutSecondary.module.css";

const LayoutSecondary = ({ children }) => {
  return (
    <div className={styles.layoutSecondary}>
      <header className={styles.header}>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSecondary;
