import React from "react";
import CardImage from "./bank.gif";
import perImage from "./myfectuer.jpg";
import bgImages from "./bgImage.jpg";
import icons from "./img_icon.png";

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Card Background */}
        <img
          src={bgImages}
          alt="Card Background"
          style={styles.backgroundImage}
        />

        {/* Bank Logo */}
        <img src={CardImage} alt="Bank Logo" style={styles.bankLogo} />

        {/* Cardholder Photo */}
        <div style={styles.photoContainer}>
          <img src={perImage} alt="Cardholder" style={styles.photo} />
        </div>

        {/* Card Information */}
        <div style={styles.cardInfo}>
          <div style={styles.cardNumber}>9004 4083 9083 8493</div>

          <div style={styles.cardDetails}>
            <span style={styles.cvv}>8723</span>
            <span style={styles.valid}>VALID</span>
            <span style={styles.thru}>THRU :</span>
            <span style={styles.expiry}>10/27</span>
          </div>

          <div style={styles.accountNumber}>AC# 85739025</div>
          <div style={styles.cardholderName}>ABDULLAH</div>
        </div>

        {/* Payment System Icon */}
        <div style={styles.paymentIcon}>
          <img src={icons} alt="Payment System" style={styles.iconImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    position: "relative",
    width: "500px",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    border: "1px solid #ddd",
  },
  backgroundImage: {
    position: "absolute",
    width: "200px",
    height: "31.8vh",
    borderRadius: "15px 0 0 15px",
    opacity: 0.7,
    zIndex: 0,
  },
  bankLogo: {
    position: "relative",
    width: "150px",
    top: "20px",
    left: "20px",
    mixBlendMode: "multiply",
    zIndex: 1,
    transform: "scale(1.5)",
    transformOrigin: "top left",
  },
  photoContainer: {
    position: "absolute",
    right: "30px",
    top: "30px",
    width: "100px",
    height: "120px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    zIndex: 1,
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(2.005)",
    opacity: 0.9,
    transformOrigin: "top",
  },
  cardInfo: {
    position: "relative",
    zIndex: 1,
    padding: "30px",
    paddingTop: "80px",
    color: "#333",
  },
  cardNumber: {
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  cardDetails: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  cvv: {
    fontSize: "16px",
    opacity: 0.7,
  },
  valid: {
    fontSize: "15px",
    opacity: 0.5,
    marginLeft: "auto",
  },
  expiry: {
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  thru: {
    fontSize: "15px",
    opacity: 0.5,
    marginLeft: "5px",
  },
  accountNumber: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  cardholderName: {
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  paymentIcon: {
    position: "absolute",
    right: "30px",
    bottom: "30px",
    width: "80px",
    zIndex: 1,
  },
  iconImage: {
    width: "100%",
    height: "auto",
  },
};

export default App;
