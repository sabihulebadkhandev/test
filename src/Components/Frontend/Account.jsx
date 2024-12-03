// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Image2 from "../../../public/assets/image/account-stripe.png";

function Account() {
  const buttonRef = useRef(null); // Reference to the button element
  const [hovered, setHovered] = useState(false); // Manage hover state

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <>
      <div className="account-section">
        <div className="hero-account">
          <div className="container-account">
            <h1>account</h1>
            <div className="row account">
              <div className="col-md-6">
                <h3>profile</h3>
                <div className="gen">
                  <div className="profile-jhon">
                    <div className="col-md-10 account-profile">
                      <h3>
                        <svg
                          width="66"
                          height="67"
                          viewBox="0 0 66 67"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M51.4336 50.2493C48.4688 45.2219 43.1836 41.8704 37.125 41.8704H28.875C22.6875 41.8704 17.4023 45.2219 14.5664 50.2493C19.0781 55.2766 25.6523 58.3704 33 58.3704C40.2188 58.3704 46.793 55.2766 51.4336 50.2493ZM66 33.6204C66 51.925 51.1758 66.6204 33 66.6204C14.6953 66.6204 0 51.925 0 33.6204C0 15.4446 14.6953 0.620361 33 0.620361C51.1758 0.620361 66 15.4446 66 33.6204ZM33 35.6829C38.0273 35.6829 42.2812 31.5579 42.2812 26.4016C42.2812 21.3743 38.0273 17.1204 33 17.1204C27.8438 17.1204 23.7188 21.3743 23.7188 26.4016C23.7188 31.5579 27.8438 35.6829 33 35.6829Z"
                            fill="#BC6C25"
                          />
                        </svg>
                        john doe
                      </h3>
                    </div>
                    <div className="col-md-2">
                      <button className="btn-account">
                        <svg
                          className="edit-svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3984 1.72974L19.1406 2.47192C20 3.3313 20 4.69849 19.1406 5.55786L17.9688 6.72974L14.1406 2.90161L15.3125 1.72974C16.1719 0.870361 17.5391 0.870361 18.3984 1.72974ZM6.71875 10.3235L13.2422 3.80005L17.0703 7.62817L10.5469 14.1516C10.3125 14.386 10 14.5813 9.6875 14.6985L6.21094 15.8313C5.89844 15.9485 5.50781 15.8704 5.27344 15.5969C5 15.3625 4.92188 14.9719 5.03906 14.6594L6.17188 11.1829C6.28906 10.8704 6.48438 10.5579 6.71875 10.3235ZM3.75 3.37036H7.5C8.16406 3.37036 8.75 3.9563 8.75 4.62036C8.75 5.32349 8.16406 5.87036 7.5 5.87036H3.75C3.04688 5.87036 2.5 6.4563 2.5 7.12036V17.1204C2.5 17.8235 3.04688 18.3704 3.75 18.3704H13.75C14.4141 18.3704 15 17.8235 15 17.1204V13.3704C15 12.7063 15.5469 12.1204 16.25 12.1204C16.9141 12.1204 17.5 12.7063 17.5 13.3704V17.1204C17.5 19.1907 15.8203 20.8704 13.75 20.8704H3.75C1.67969 20.8704 0 19.1907 0 17.1204V7.12036C0 5.05005 1.67969 3.37036 3.75 3.37036Z"
                            fill="#BC6C25"
                          />
                        </svg>
                        edit
                      </button>
                    </div>
                  </div>
                  <div className="mail_num">
                    <p>
                      <svg
                        width="30"
                        height="31"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.875 8.37036H23.125C24.1406 8.37036 25 9.22974 25 10.2454C25 10.8704 24.6875 11.4172 24.2188 11.7688L15.7422 18.136C15.2734 18.4875 14.6875 18.4875 14.2188 18.136L5.74219 11.7688C5.27344 11.4172 5 10.8704 5 10.2454C5 9.22974 5.82031 8.37036 6.875 8.37036ZM5 12.7454L13.4766 19.1516C14.375 19.8157 15.5859 19.8157 16.4844 19.1516L25 12.7454V20.8704C25 22.2766 23.8672 23.3704 22.5 23.3704H7.5C6.09375 23.3704 5 22.2766 5 20.8704V12.7454Z"
                          fill="#4F4F4F"
                        />
                      </svg>
                      email@demo.com
                    </p>
                    <hr />
                    <p>
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="14" fill="white" />
                        <rect width="20" height="2" y="0" fill="red" />
                        <rect width="20" height="2" y="4" fill="red" />
                        <rect width="20" height="2" y="8" fill="red" />
                        <rect width="20" height="2" y="12" fill="red" />
                        <rect width="8" height="6" fill="blue" />
                      </svg>
                      00 000 0000 0000
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>subscription & payments</h3>
                <div className="gen1">
                  <div className="basic-account">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>basic</h3>
                      </div>
                      <div className="col-md-6 para">
                        <p>
                          Month/ <span>$000</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="container pay-select">
                    <div className="row">
                      <div className="col-md-2">
                        <img src={Image2} />{" "}
                      </div>
                      <div className="col-md-9">
                        {" "}
                        <h6>john doe</h6>
                        <br />
                        <h6>0123******456</h6>
                      </div>
                      <div className="col-md-1">
                        {" "}
                        <input
                          type="radio"
                          name=""
                          id=""
                          className="radio-input"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn-1">upgrade plan</button>
                </div>
              </div>
            </div>
            <button className="btn-2">log out</button>
          </div>

          <div className="account-buttons-container">
            <button
              className="create-btn"
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5625 0.605469C24.0195 0.148438 24.7812 0.148438 25.2383 0.605469L25.6445 1.01172C26.1016 1.46875 26.1016 2.23047 25.6445 2.6875L21.3281 7.5625C21.1758 7.71484 21.125 7.91797 21.125 8.12109V9.1875C21.125 9.64453 20.7188 10 20.3125 10H19.5C19.2461 10 19.043 10.1016 18.8906 10.3047L5.07812 25.6914C4.77344 26.0469 4.31641 26.25 3.80859 26.25C3.40234 26.25 2.94531 26.0977 2.64062 25.793L0.457031 23.6094C0.152344 23.3047 0 22.8477 0 22.4414C0 21.9336 0.203125 21.4766 0.558594 21.1719L6.19531 16.0938C6.39844 15.9414 6.5 15.7383 6.5 15.4844V14.0625C6.5 13.6562 6.85547 13.25 7.3125 13.25H9.03906C9.24219 13.25 9.44531 13.1992 9.59766 13.0469L23.5625 0.605469ZM21.9375 14.875C22.0898 14.875 22.2422 15.0273 22.293 15.1797L23.0547 17.8203L25.6953 18.582C25.8477 18.6328 26 18.7852 26 18.9375C26 19.1406 25.8477 19.293 25.6953 19.3438L23.0547 20.1055L22.293 22.7461C22.2422 22.8984 22.0898 23 21.9375 23C21.7344 23 21.582 22.8984 21.5312 22.7461L20.7695 20.1055L18.1289 19.3438C17.9766 19.293 17.875 19.1406 17.875 18.9375C17.875 18.7852 17.9766 18.6328 18.1289 18.582L20.7695 17.8203L21.5312 15.1797C21.582 15.0273 21.7344 14.875 21.9375 14.875ZM4.41797 3.80469L5.17969 6.44531L7.82031 7.20703C7.97266 7.25781 8.125 7.41016 8.125 7.5625C8.125 7.76562 7.97266 7.91797 7.82031 7.96875L5.17969 8.73047L4.41797 11.3711C4.36719 11.5234 4.21484 11.625 4.0625 11.625C3.85938 11.625 3.70703 11.5234 3.65625 11.3711L2.89453 8.73047L0.253906 7.96875C0.101562 7.91797 0 7.76562 0 7.5625C0 7.41016 0.101562 7.25781 0.253906 7.20703L2.89453 6.44531L3.65625 3.80469C3.70703 3.65234 3.85938 3.5 4.0625 3.5C4.21484 3.5 4.36719 3.65234 4.41797 3.80469ZM11.375 0.25C11.5273 0.25 11.6797 0.402344 11.7305 0.605469L12.0859 1.97656L13.457 2.33203C13.6602 2.38281 13.8125 2.53516 13.8125 2.6875C13.8125 2.89062 13.6602 3.04297 13.457 3.09375L12.0859 3.44922L11.7305 4.82031C11.6797 5.02344 11.5273 5.125 11.375 5.125C11.1719 5.125 11.0195 5.02344 10.9688 4.82031L10.6133 3.44922L9.24219 3.09375C9.03906 3.04297 8.9375 2.89062 8.9375 2.6875C8.9375 2.53516 9.03906 2.38281 9.24219 2.33203L10.6133 1.97656L10.9688 0.605469C11.0195 0.402344 11.1719 0.25 11.375 0.25Z"
                  fill="#BC6C25"
                />
                <path
                  d="M23.5625 0.605469C24.0195 0.148438 24.7812 0.148438 25.2383 0.605469L25.6445 1.01172C26.1016 1.46875 26.1016 2.23047 25.6445 2.6875L21.3281 7.5625C21.1758 7.71484 21.125 7.91797 21.125 8.12109V9.1875C21.125 9.64453 20.7188 10 20.3125 10H19.5C19.2461 10 19.043 10.1016 18.8906 10.3047L5.07812 25.6914C4.77344 26.0469 4.31641 26.25 3.80859 26.25C3.40234 26.25 2.94531 26.0977 2.64062 25.793L0.457031 23.6094C0.152344 23.3047 0 22.8477 0 22.4414C0 21.9336 0.203125 21.4766 0.558594 21.1719L6.19531 16.0938C6.39844 15.9414 6.5 15.7383 6.5 15.4844V14.0625C6.5 13.6562 6.85547 13.25 7.3125 13.25H9.03906C9.24219 13.25 9.44531 13.1992 9.59766 13.0469L23.5625 0.605469ZM21.9375 14.875C22.0898 14.875 22.2422 15.0273 22.293 15.1797L23.0547 17.8203L25.6953 18.582C25.8477 18.6328 26 18.7852 26 18.9375C26 19.1406 25.8477 19.293 25.6953 19.3438L23.0547 20.1055L22.293 22.7461C22.2422 22.8984 22.0898 23 21.9375 23C21.7344 23 21.582 22.8984 21.5312 22.7461L20.7695 20.1055L18.1289 19.3438C17.9766 19.293 17.875 19.1406 17.875 18.9375C17.875 18.7852 17.9766 18.6328 18.1289 18.582L20.7695 17.8203L21.5312 15.1797C21.582 15.0273 21.7344 14.875 21.9375 14.875ZM4.41797 3.80469L5.17969 6.44531L7.82031 7.20703C7.97266 7.25781 8.125 7.41016 8.125 7.5625C8.125 7.76562 7.97266 7.91797 7.82031 7.96875L5.17969 8.73047L4.41797 11.3711C4.36719 11.5234 4.21484 11.625 4.0625 11.625C3.85938 11.625 3.70703 11.5234 3.65625 11.3711L2.89453 8.73047L0.253906 7.96875C0.101562 7.91797 0 7.76562 0 7.5625C0 7.41016 0.101562 7.25781 0.253906 7.20703L2.89453 6.44531L3.65625 3.80469C3.70703 3.65234 3.85938 3.5 4.0625 3.5C4.21484 3.5 4.36719 3.65234 4.41797 3.80469ZM11.375 0.25C11.5273 0.25 11.6797 0.402344 11.7305 0.605469L12.0859 1.97656L13.457 2.33203C13.6602 2.38281 13.8125 2.53516 13.8125 2.6875C13.8125 2.89062 13.6602 3.04297 13.457 3.09375L12.0859 3.44922L11.7305 4.82031C11.6797 5.02344 11.5273 5.125 11.375 5.125C11.1719 5.125 11.0195 5.02344 10.9688 4.82031L10.6133 3.44922L9.24219 3.09375C9.03906 3.04297 8.9375 2.89062 8.9375 2.6875C8.9375 2.53516 9.03906 2.38281 9.24219 2.33203L10.6133 1.97656L10.9688 0.605469C11.0195 0.402344 11.1719 0.25 11.375 0.25Z"
                  fill="white"
                />
              </svg>
              <span className={`hidden-text ${hovered ? "visible" : "hidden"}`}>
                create
              </span>
            </button>
            <button className="create-btn">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.625 0.25H3.25H16.25H17.875C18.7383 0.25 19.5 1.01172 19.5 1.875C19.5 2.78906 18.7383 3.5 17.875 3.5V4.05859C17.875 6.24219 17.0117 8.32422 15.4883 9.84766L12.0352 13.25L13.8633 15.0781C13.3047 16.2461 13 17.5664 13 18.9375C13 21.9844 14.4727 24.6758 16.7578 26.25H16.25H3.25H1.625C0.710938 26.25 0 25.5391 0 24.625C0 23.7617 0.710938 23 1.625 23V22.4414C1.625 20.3086 2.4375 18.2266 3.96094 16.7031L7.41406 13.25L3.96094 9.84766C2.4375 8.32422 1.625 6.24219 1.625 4.05859V3.5C0.710938 3.5 0 2.78906 0 1.875C0 1.01172 0.710938 0.25 1.625 0.25ZM4.875 4.05859C4.875 5.02344 5.12891 5.98828 5.6875 6.75H13.8125C14.3203 5.98828 14.625 5.02344 14.625 4.05859V3.5H4.875V4.05859ZM29.25 18.9375C29.25 23 25.9492 26.25 21.9375 26.25C17.875 26.25 14.625 23 14.625 18.9375C14.625 14.9258 17.875 11.625 21.9375 11.625C25.9492 11.625 29.25 14.9258 29.25 18.9375ZM21.9375 14.875C21.4805 14.875 21.125 15.2812 21.125 15.6875V18.9375C21.125 19.3945 21.4805 19.75 21.9375 19.75H24.375C24.7812 19.75 25.1875 19.3945 25.1875 18.9375C25.1875 18.5312 24.7812 18.125 24.375 18.125H22.75V15.6875C22.75 15.2812 22.3438 14.875 21.9375 14.875Z"
                  fill="#BC6C25"
                />
                <path
                  d="M1.625 0.25H3.25H16.25H17.875C18.7383 0.25 19.5 1.01172 19.5 1.875C19.5 2.78906 18.7383 3.5 17.875 3.5V4.05859C17.875 6.24219 17.0117 8.32422 15.4883 9.84766L12.0352 13.25L13.8633 15.0781C13.3047 16.2461 13 17.5664 13 18.9375C13 21.9844 14.4727 24.6758 16.7578 26.25H16.25H3.25H1.625C0.710938 26.25 0 25.5391 0 24.625C0 23.7617 0.710938 23 1.625 23V22.4414C1.625 20.3086 2.4375 18.2266 3.96094 16.7031L7.41406 13.25L3.96094 9.84766C2.4375 8.32422 1.625 6.24219 1.625 4.05859V3.5C0.710938 3.5 0 2.78906 0 1.875C0 1.01172 0.710938 0.25 1.625 0.25ZM4.875 4.05859C4.875 5.02344 5.12891 5.98828 5.6875 6.75H13.8125C14.3203 5.98828 14.625 5.02344 14.625 4.05859V3.5H4.875V4.05859ZM29.25 18.9375C29.25 23 25.9492 26.25 21.9375 26.25C17.875 26.25 14.625 23 14.625 18.9375C14.625 14.9258 17.875 11.625 21.9375 11.625C25.9492 11.625 29.25 14.9258 29.25 18.9375ZM21.9375 14.875C21.4805 14.875 21.125 15.2812 21.125 15.6875V18.9375C21.125 19.3945 21.4805 19.75 21.9375 19.75H24.375C24.7812 19.75 25.1875 19.3945 25.1875 18.9375C25.1875 18.5312 24.7812 18.125 24.375 18.125H22.75V15.6875C22.75 15.2812 22.3438 14.875 21.9375 14.875Z"
                  fill="white"
                />
              </svg>
              <span className={`hidden-text ${hovered ? "visible" : "hidden"}`}>
                history
              </span>
            </button>
            <button className="create-btn">
              <svg
                width="33"
                height="27"
                viewBox="0 0 33 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00391 0.453125L6.44141 2.07812C7 2.48438 7.15234 3.24609 6.79688 3.80469C6.39062 4.36328 5.62891 4.51562 5.07031 4.10938L2.63281 2.48438C2.07422 2.12891 1.92188 1.36719 2.32812 0.808594C2.68359 0.25 3.44531 0.0976562 4.00391 0.453125ZM30.8164 2.48438L28.3789 4.10938C27.8203 4.51562 27.0586 4.36328 26.7031 3.80469C26.2969 3.24609 26.4492 2.48438 27.0078 2.07812L29.4453 0.453125C30.0039 0.0976562 30.7656 0.25 31.1719 0.808594C31.5273 1.36719 31.375 2.12891 30.8164 2.48438ZM1.71875 8.375H4.96875C5.62891 8.375 6.1875 8.93359 6.1875 9.59375C6.1875 10.3047 5.62891 10.8125 4.96875 10.8125H1.71875C1.00781 10.8125 0.5 10.3047 0.5 9.59375C0.5 8.93359 1.00781 8.375 1.71875 8.375ZM28.5312 8.375H31.7812C32.4414 8.375 33 8.93359 33 9.59375C33 10.3047 32.4414 10.8125 31.7812 10.8125H28.5312C27.8203 10.8125 27.3125 10.3047 27.3125 9.59375C27.3125 8.93359 27.8203 8.375 28.5312 8.375ZM6.44141 17.1094L4.00391 18.7344C3.44531 19.1406 2.68359 18.9883 2.32812 18.4297C1.92188 17.8711 2.07422 17.1094 2.63281 16.7031L5.07031 15.0781C5.62891 14.7227 6.39062 14.875 6.79688 15.4336C7.15234 15.9922 7 16.7539 6.44141 17.1094ZM28.3789 15.1289L30.8164 16.7539C31.375 17.1094 31.5273 17.8711 31.1719 18.4297C30.7656 18.9883 30.0039 19.1406 29.4453 18.7852L27.0078 17.1602C26.4492 16.7539 26.2969 15.9922 26.7031 15.4336C27.0586 14.875 27.8203 14.7227 28.3789 15.1289ZM23.3008 15.3828C22.2852 16.7539 21.2695 18.1758 20.8125 19.75H12.6875C12.1797 18.1758 11.1641 16.7539 10.1484 15.3828C9.89453 15.0273 9.64062 14.6719 9.38672 14.3164C8.37109 12.8438 7.8125 11.1172 7.8125 9.1875C7.8125 4.26172 11.7734 0.25 16.75 0.25C21.6758 0.25 25.6875 4.26172 25.6875 9.1875C25.6875 11.1172 25.0781 12.8438 24.0625 14.3164C23.8086 14.6719 23.5547 15.0273 23.3008 15.3828ZM20.8125 22.1875C20.8125 24.4727 18.9844 26.25 16.75 26.25C14.4648 26.25 12.6875 24.4727 12.6875 22.1875V21.375H20.8125V22.1875ZM17.9688 4.71875C17.9688 4.05859 17.4102 3.5 16.75 3.5C16.0391 3.5 15.5312 4.05859 15.5312 4.71875V10.4062C15.5312 11.1172 16.0391 11.625 16.75 11.625C17.4102 11.625 17.9688 11.1172 17.9688 10.4062V4.71875ZM16.75 16.5C17.6133 16.5 18.375 15.7891 18.375 14.875C18.375 14.0117 17.6133 13.25 16.75 13.25C15.8359 13.25 15.125 14.0117 15.125 14.875C15.125 15.7891 15.8359 16.5 16.75 16.5Z"
                  fill="#BC6C25"
                />
                <path
                  d="M4.00391 0.453125L6.44141 2.07812C7 2.48438 7.15234 3.24609 6.79688 3.80469C6.39062 4.36328 5.62891 4.51562 5.07031 4.10938L2.63281 2.48438C2.07422 2.12891 1.92188 1.36719 2.32812 0.808594C2.68359 0.25 3.44531 0.0976562 4.00391 0.453125ZM30.8164 2.48438L28.3789 4.10938C27.8203 4.51562 27.0586 4.36328 26.7031 3.80469C26.2969 3.24609 26.4492 2.48438 27.0078 2.07812L29.4453 0.453125C30.0039 0.0976562 30.7656 0.25 31.1719 0.808594C31.5273 1.36719 31.375 2.12891 30.8164 2.48438ZM1.71875 8.375H4.96875C5.62891 8.375 6.1875 8.93359 6.1875 9.59375C6.1875 10.3047 5.62891 10.8125 4.96875 10.8125H1.71875C1.00781 10.8125 0.5 10.3047 0.5 9.59375C0.5 8.93359 1.00781 8.375 1.71875 8.375ZM28.5312 8.375H31.7812C32.4414 8.375 33 8.93359 33 9.59375C33 10.3047 32.4414 10.8125 31.7812 10.8125H28.5312C27.8203 10.8125 27.3125 10.3047 27.3125 9.59375C27.3125 8.93359 27.8203 8.375 28.5312 8.375ZM6.44141 17.1094L4.00391 18.7344C3.44531 19.1406 2.68359 18.9883 2.32812 18.4297C1.92188 17.8711 2.07422 17.1094 2.63281 16.7031L5.07031 15.0781C5.62891 14.7227 6.39062 14.875 6.79688 15.4336C7.15234 15.9922 7 16.7539 6.44141 17.1094ZM28.3789 15.1289L30.8164 16.7539C31.375 17.1094 31.5273 17.8711 31.1719 18.4297C30.7656 18.9883 30.0039 19.1406 29.4453 18.7852L27.0078 17.1602C26.4492 16.7539 26.2969 15.9922 26.7031 15.4336C27.0586 14.875 27.8203 14.7227 28.3789 15.1289ZM23.3008 15.3828C22.2852 16.7539 21.2695 18.1758 20.8125 19.75H12.6875C12.1797 18.1758 11.1641 16.7539 10.1484 15.3828C9.89453 15.0273 9.64062 14.6719 9.38672 14.3164C8.37109 12.8438 7.8125 11.1172 7.8125 9.1875C7.8125 4.26172 11.7734 0.25 16.75 0.25C21.6758 0.25 25.6875 4.26172 25.6875 9.1875C25.6875 11.1172 25.0781 12.8438 24.0625 14.3164C23.8086 14.6719 23.5547 15.0273 23.3008 15.3828ZM20.8125 22.1875C20.8125 24.4727 18.9844 26.25 16.75 26.25C14.4648 26.25 12.6875 24.4727 12.6875 22.1875V21.375H20.8125V22.1875ZM17.9688 4.71875C17.9688 4.05859 17.4102 3.5 16.75 3.5C16.0391 3.5 15.5312 4.05859 15.5312 4.71875V10.4062C15.5312 11.1172 16.0391 11.625 16.75 11.625C17.4102 11.625 17.9688 11.1172 17.9688 10.4062V4.71875ZM16.75 16.5C17.6133 16.5 18.375 15.7891 18.375 14.875C18.375 14.0117 17.6133 13.25 16.75 13.25C15.8359 13.25 15.125 14.0117 15.125 14.875C15.125 15.7891 15.8359 16.5 16.75 16.5Z"
                  fill="white"
                />
              </svg>
              <span className={`hidden-text ${hovered ? "visible" : "hidden"}`}>
                tips
              </span>
            </button>
            <button className="create-btn">
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.875 13.25C8.26953 13.25 5.375 10.3555 5.375 6.75C5.375 3.19531 8.26953 0.25 11.875 0.25C15.4297 0.25 18.375 3.19531 18.375 6.75C18.375 10.3555 15.4297 13.25 11.875 13.25ZM9.53906 15.6875H14.1602C19.1875 15.6875 23.25 19.75 23.25 24.7773C23.25 25.5898 22.5391 26.25 21.7266 26.25H1.97266C1.16016 26.25 0.5 25.5898 0.5 24.7773C0.5 19.75 4.51172 15.6875 9.53906 15.6875Z"
                  fill="#BC6C25"
                />
                <path
                  d="M11.875 13.25C8.26953 13.25 5.375 10.3555 5.375 6.75C5.375 3.19531 8.26953 0.25 11.875 0.25C15.4297 0.25 18.375 3.19531 18.375 6.75C18.375 10.3555 15.4297 13.25 11.875 13.25ZM9.53906 15.6875H14.1602C19.1875 15.6875 23.25 19.75 23.25 24.7773C23.25 25.5898 22.5391 26.25 21.7266 26.25H1.97266C1.16016 26.25 0.5 25.5898 0.5 24.7773C0.5 19.75 4.51172 15.6875 9.53906 15.6875Z"
                  fill="white"
                />
              </svg>
              <span className={`hidden-text ${hovered ? "visible" : "hidden"}`}>
                account
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;