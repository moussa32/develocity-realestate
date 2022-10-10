import { MdNotificationsNone } from "react-icons/md";
import PersonImage from "../../../assets/person.jpg";

const Notifications = () => {
  return (
    <>
      <div className="notificationsOverlay"></div>
      <div className="notificationsContainer">
        <div className="notificationsHeader">
          <div className="notificationsTop">
            <MdNotificationsNone className="notificationsMiniIcon" />
            <h2 className="fs-lg">Notifications</h2>
          </div>
          <div className="notificationsActions">
            <button className="text-capitalize fs-md text-primary border-0 bg-transparent fw-semibold">all</button>
            <button className="text-capitalize fs-md border-0 bg-transparent fw-semibold notificationsMutedButton">
              Mark as read
            </button>
          </div>
        </div>
        <div className="notificationsBody">
          <div className="notificationCard notificationUnread">
            <div className="notificationCardTimeline">
              <div className="notificationLine"></div>
            </div>
            <div className="notificationCardContent">
              <img className="notificationUserImage" src={PersonImage} alt="user" title="user" />
              <div className="">
                <h3 className="notificationMainHeading">Mark Tomath viewd your profile</h3>
                <p className="mb-0 notificationTimeago">2h ago</p>
              </div>
            </div>
          </div>
          <div className="notificationCard">
            <div className="notificationCardTimeline">
              <div className="notificationLine"></div>
            </div>
            <div className="notificationCardContent">
              <img className="notificationUserImage" src={PersonImage} alt="user" title="user" />
              <div className="d-flex flex-column">
                <h3 className="notificationMainHeading">Mark Tomath viewd your profile</h3>
                <p className="mb-0 notificationTimeago">2h ago</p>
              </div>
            </div>
          </div>
          <div className="notificationCard">
            <div className="notificationCardTimeline">
              <div className="notificationLine"></div>
            </div>
            <div className="notificationCardContent">
              <img className="notificationUserImage" src={PersonImage} alt="user" title="user" />
              <div className="">
                <h3 className="notificationMainHeading">Mark Tomath viewd your profile</h3>
                <p className="mb-0 notificationTimeago">2h ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
