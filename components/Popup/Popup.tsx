import React, { useState, useEffect } from "react";
import styles from "./Popup.module.css";
export default function Popup(props) {
    const {type, message, title,time } = props;
    const [isShowPopup,setIsShowPopup] = useState(false)
    const renderPopup = (type, message, title, time = 0) => {
        setIsShowPopup(true);
        if(type !== "YES_NO") {
            setTimeout(() => {
                setIsShowPopup(false);
            }, time);
        }
    };
    useEffect(()=>{
        renderPopup(type, message, title, time);
    },[])
    return isShowPopup ? (
        <div className={styles.modal}>
            <div className={styles.popup} style={{ justifyContent: type === "YES_NO" ? "space-between" : "" }}>
                <div
                    className={styles.popupHeader}
                    style={{
                        background: type === "ERROR" ? "#FF5555" : "rgb(83, 126, 243)",
                    }}
                >
                    <span>{title}</span>
                </div>
                <div className={styles.popupBody}>
                    <span>{message}</span>
                </div>
                <div className={styles.popupFooter}>
                    {type === "YES_NO" ? (
                        <button className={styles.popupButton} onClick={() => setIsShowPopup(false)}>
                            {" "}
                            Biết òi
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    );
}
