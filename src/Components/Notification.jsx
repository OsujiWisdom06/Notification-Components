import React, { useEffect, useState } from 'react'
import "./Notification.css"



const NotificationMain = () => {

    const Notification = ({ type, message, onClose }) => {
        const [isExisting, setIsExisting] = useState(false);
    
        useEffect(()=>{
            const fadeOutTimeOut = setTimeout(()=> {
                setIsExisting(true);
                setTimeout(onClose, 500);
            }, 2500);
            return () => clearTimeout(fadeOutTimeOut);
        }, [onClose]);
    
        return (
          <div className={`notification ${type} ${isExisting ? "fade-out" : "fade-in"}`}>
            <h3>{message}</h3>
            <button onClick={onClose} className="close-btn">X</button>
          </div>
        );
      };
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "",
      });

      const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
    
        // Auto-hide after 3 seconds
        setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
      };

  return (
    <div className='Notificationbody'>
        <div className='notificationbutton'>
            <button onClick={() => showNotification("success", "Success! Operation completed.")} className='Successbtn'>Show Success</button>
            <button onClick={() => showNotification("error", "Error! Something went wrong.")} className='errorbtn'>Show Error</button>
            <button onClick={() => showNotification("warning", "Warning! Check your input.")} className='warningbtn'>Show Warning</button>
            {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ show: false, message: "", type: "" })}
        />
      )}
        </div>
    </div>
  )
}

export default NotificationMain