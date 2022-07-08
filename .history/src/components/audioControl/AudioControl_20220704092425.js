import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const AudioControlStyles = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const AudioControl = ({
  isPlaying,
  handleOnPlayPauseClick,
  onPrevClick,
  onNextClick,
  playList,
  trackIndex,
  audioRef,
}) => {
  console.log(isPlaying);
  const dispatch = useDispatch();
  //   const handleOnPlayPauseClick = () => {
  //     dispatch(toggleSlice.actions.playToggleHome());
  //   };
  //Handle audio
  return (
    <AudioControlStyles>
      <audio loop src={playList[trackIndex].audioSrc} ref={audioRef}></audio>

      <div className="transition-all duration-200 cursor-pointer prev hover:opacity-40">
        <button
          type="button"
          className="prev"
          aria-label="Previous"
          onClick={onPrevClick}
        >
          <svg
            fill="none"
            height="35"
            viewBox="0 0 37 35"
            width="37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m22.3246 15.5369c-.0274-.8802-.0399-1.7628-.0623-2.643-.01-.4264-.0274-.8552-.0424-1.2966-.7281-.1122-1.1619.2394-1.6431.5461-.8752.5585-1.7778 1.0721-2.6904 1.5608-.3142.1671-.7006.202-1.1345.3192 0-.4388.0324-.753-.0074-1.0597-.0624-.4937-.1023-1.0073-.2743-1.4661-.2518-.6782-.768-.753-1.3016-.2768-.7554.6708-1.5159 1.334-2.2764 1.9972-.3067.2643-.6258.5187-.94.773-.4139.3341-.8228.6707-1.2492.9874-.94996.7056-1.90741 1.3987-2.82995 2.0769.17204.7356.17453.7306.67819.97.6782.3191 1.39878.5784 2.00966.9948.8004.5486 1.5135 1.2267 2.2615 1.8526.8901.743 1.7553 1.516 2.6754 2.2191.2643.2044.6807.2094 1.1694.3441.1171-1.324.2219-2.4934.3366-3.7949 1.0048.7106 1.9373 1.3065 2.7975 1.9947.5835.4662 1.0597 1.0696 1.6058 1.5857.1421.1347.3939.2768.551.2394.1521-.0374.3067-.2942.3491-.4787.1022-.4588.2019-.935.1944-1.4013-.0374-2.0171-.1171-4.0293-.177-6.0439zm-9.9859 2.7402c-.1646-.0125-.3292-.0349-.4912-.0574.0124-.0748.0274-.1521.0399-.2269.1645.0399.3266.0773.4887.1247 0 .015-.0275.1596-.0374.1596zm-.6683-2.2765c.4115-.3465.6907-.5834.9824-.8278-.0723.7555-.1595.8403-.9824.8278zm4.5305 1.8202c-.4164-.6283-.4164-.6308.389-1.0846-.1646.4613-.2768.7729-.389 1.0846zm1.4362.8901c-.2543-.162-.3641-.3465-.0873-.5734.0449-.0374.187-.035.2269.0074.2518.2519.1047.4214-.1396.566zm-.1496-3.2214c-.0324-.0997-.0648-.197-.0948-.2967.1197-.1421.217-.369.3641-.4114.5236-.1421 1.0671-.2244 1.7054-.3491-.2443.2892-.4513.5361-.6857.8153-.4612-.2543-.9175-.6757-1.289.2419zm2.0171 4.5753c-.364-.1471-.6383-.3989-.8677-.7056.0723-.0848.1446-.1695.2194-.2543.2768.2543.5561.5086.8353.7605-.0623.0673-.1246.1321-.187.1994zm1.3564-6.6049c.0773-.0449.1521-.0923.2294-.1371.0748.162.1496.3216.2244.4837-.0574.0299-.1172.0623-.1745.0922-.0923-.1446-.187-.2917-.2793-.4388zm.3341 5.7821c-.0199-.3316-.0324-.5435-.0449-.7555.0549-.0224.1122-.0449.1696-.0673.0573.172.1321.3391.1596.5161.0074.0524-.1122.1272-.2843.3067z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <div className="transition-all duration-300 cursor-pointer play-toggle hover:opacity-40">
        {isPlaying ? (
          <button
            type="button"
            className="pause"
            onClick={() => handleOnPlayPauseClick(false)}
            aria-label="Pause"
          >
            {" "}
            <svg
              width="66"
              height="54"
              viewBox="0 0 72 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.0993 35.4469C70.9403 33.8908 70.4826 32.3491 70.4585 30.8027C70.4055 27.7387 68.9699 25.1179 68.0882 22.314C67.7269 21.1723 67.5631 19.9341 67.0187 18.8887C65.9492 16.8509 64.8219 14.813 63.4537 12.9727C61.4736 10.2941 59.5514 7.50468 56.3525 6.01121C55.5046 5.61617 54.835 4.83571 54.0449 4.29614C53.6595 4.03599 53.1825 3.9011 52.7345 3.75175C52.3442 3.62167 51.9203 3.57832 51.5253 3.44824C49.7427 2.86049 48.0518 1.88733 46.0524 2.24865C45.7104 2.31128 45.2431 2.25347 44.9829 2.06077C43.0992 0.663656 40.8446 0.784097 38.7056 0.374599C34.9237 -0.352861 31.1323 0.119265 27.4323 0.610662C24.985 0.943078 22.6436 2.29201 20.1674 2.92794C19.9988 2.9713 19.8542 3.11582 19.6904 3.19772C17.8983 4.11789 16.1543 5.14404 14.3091 5.93413C12.1798 6.84466 10.2961 8.02498 8.87487 9.86531C8.2823 10.6313 7.88726 11.5756 7.20315 12.2356C6.03729 13.3774 5.26165 14.7118 4.70763 16.2005C4.34631 17.1688 4.18732 18.2335 3.72002 19.1392C3.07445 20.3822 2.57342 21.6251 2.31327 23.0222C1.99049 24.7373 1.64362 26.5343 0.863167 28.0663C-0.0377278 29.8199 -0.0955392 31.6795 0.0778951 33.3946C0.285053 35.471 0.328411 37.6052 1.15704 39.6575C2.01458 41.7869 2.15429 44.2101 3.05037 46.3154C4.12951 48.8543 5.2183 51.4173 6.87074 53.6912C9.347 57.0924 12.0545 60.1661 15.8363 62.2473C18.8714 63.919 22.0414 65.1668 25.3319 66.1592C26.8687 66.6217 28.4489 67.0697 30.0387 67.1998C31.6092 67.3299 33.2135 67.0649 34.8033 66.9252C35.5404 66.8626 36.2341 66.8481 37.0049 66.4964C38.1082 65.9858 39.4668 66.0147 40.7145 65.8171C40.7386 65.9087 40.7579 66.0002 40.782 66.0966C41.6347 65.8798 42.4729 65.5955 43.3401 65.4606C46.5101 64.9548 49.5019 63.8564 52.4599 62.6809C53.5631 62.2425 54.5411 61.4813 55.601 60.9176C57.0318 60.1564 58.2266 59.1014 59.431 58.0511C61.1027 56.5914 62.5142 54.8811 64.0366 53.2769C65.0242 52.2315 66.219 51.2246 66.773 49.9624C67.6643 47.9438 68.8783 46.0842 69.4227 43.8633C69.9334 41.7724 70.6271 39.7201 70.8969 37.5666C70.9836 36.8584 71.1667 36.1406 71.0993 35.4469ZM67.9967 40.9341C67.2933 43.8729 65.8625 46.4744 64.6388 49.1771C64.4991 49.4902 64.2341 49.7648 63.9884 50.0105C63.2995 50.7043 62.5528 51.3402 61.8976 52.0628C60.6787 53.4118 59.6092 54.9245 58.2747 56.153C56.9981 57.3285 55.4998 58.2872 54.0304 59.2266C53.0187 59.877 51.9251 60.4455 50.8026 60.8502C48.5383 61.6692 46.4041 62.8302 43.952 63.1482C40.9891 63.5384 38.06 64.2032 35.0924 64.5453C33.2906 64.7573 31.4213 64.7621 29.6195 64.5405C26.6471 64.1647 23.7517 63.4517 20.9093 62.3822C16.8528 60.8598 13.5913 58.2342 10.3394 55.5412C9.77576 53.7827 8.03179 52.7566 7.52112 50.9162C7.2706 50.0105 6.60577 49.206 6.05656 48.4014C5.04486 46.908 4.65463 45.2122 4.25959 43.4875C3.9079 41.9458 3.27679 40.4716 2.8673 38.9396C2.55897 37.7738 2.38554 36.5742 2.19765 35.3842C2.11093 34.8447 2.19283 34.2762 2.09648 33.7366C1.78333 31.9396 2.05794 30.2727 2.72277 28.5577C3.38278 26.8667 3.69111 25.0408 4.14397 23.2727C4.17287 23.1571 4.12951 23.0174 4.17287 22.9114C5.29538 20.2376 6.20591 17.4482 7.62711 14.9431C8.76888 12.9245 10.4165 11.1372 12.0545 9.46545C12.8687 8.63682 14.1261 8.15987 15.2678 7.77446C16.954 7.20598 18.4764 6.38217 19.912 5.36565C20.1577 5.19222 20.442 5.05733 20.7214 4.95134C22.8508 4.14198 25.1488 3.82883 27.1626 2.68224C27.5046 2.48472 28.0201 2.47026 28.42 2.54253C30.2555 2.8894 32.0043 2.30165 33.7916 2.13785C34.336 2.08485 34.8997 2.08967 35.444 2.15712C37.612 2.43172 39.7751 2.73523 41.943 3.03874C42.2417 3.07728 42.5934 3.07728 42.8198 3.24108C44.0242 4.10344 45.4454 4.0119 46.804 4.28169C48.7069 4.66228 50.6003 5.17777 52.431 5.83296C53.2885 6.14129 53.9389 6.98919 54.7579 7.46132C57.3787 8.96923 59.5032 11.0071 61.2472 13.4544C62.1192 14.6733 63.3718 15.6898 63.3622 17.3856C63.3573 17.4386 63.4103 17.5012 63.4537 17.5446C65.1447 19.1007 65.3181 21.3842 66.2094 23.3257C66.378 23.6967 66.3876 24.1351 66.5129 24.5301C66.6959 25.0794 66.9368 25.6093 67.1199 26.1537C67.5005 27.3003 67.9582 28.4276 68.199 29.6031C68.5122 31.1255 68.6374 32.6864 68.8301 34.1461C68.8494 36.5067 68.5266 38.7132 67.9967 40.9341Z"
                fill="white"
              />
              <path
                d="M68.1995 29.603C67.9586 28.4275 67.5009 27.3002 67.1203 26.1536C66.9373 25.6092 66.6964 25.0793 66.5133 24.5301C66.388 24.135 66.3784 23.6966 66.2098 23.3257C65.3185 21.3842 65.1451 19.1006 63.4541 17.5445C63.4108 17.5012 63.3578 17.4385 63.3626 17.3856C63.3722 15.6898 62.1196 14.6732 61.2477 13.4544C59.5037 11.007 57.3791 8.96917 54.7583 7.46126C53.9393 6.98913 53.2889 6.14123 52.4314 5.8329C50.6007 5.17771 48.7074 4.66222 46.8044 4.28163C45.4459 4.01184 44.0247 4.10338 42.8203 3.24102C42.5938 3.07722 42.2421 3.07722 41.9434 3.03868C39.7755 2.73517 37.6124 2.43166 35.4445 2.15706C34.9001 2.08961 34.3364 2.0848 33.792 2.13779C32.0047 2.30159 30.2559 2.88934 28.4204 2.54247C28.0205 2.4702 27.505 2.48466 27.163 2.68218C25.1492 3.82877 22.8512 4.14192 20.7218 4.95128C20.4424 5.05727 20.1582 5.19216 19.9125 5.36559C18.4768 6.38211 16.9545 7.20592 15.2683 7.7744C14.1265 8.15981 12.8691 8.63676 12.0549 9.46539C10.4169 11.1371 8.76932 12.9244 7.62754 14.943C6.20634 17.4482 5.29581 20.2376 4.17331 22.9114C4.12995 23.0174 4.17331 23.1571 4.1444 23.2727C3.69155 25.0408 3.38322 26.8666 2.7232 28.5576C2.05837 30.2727 1.78377 31.9396 2.09691 33.7366C2.19327 34.2761 2.11137 34.8446 2.19808 35.3842C2.38597 36.5741 2.5594 37.7737 2.86773 38.9396C3.27723 40.4716 3.90834 41.9458 4.26002 43.4874C4.65507 45.2121 5.0453 46.9079 6.057 48.4014C6.60621 49.2059 7.27104 50.0105 7.52155 50.9162C8.03222 52.7565 9.7762 53.7827 10.3399 55.5411C13.5918 58.2342 16.8533 60.8598 20.9097 62.3821C23.7521 63.4516 26.6475 64.1646 29.62 64.5404C31.4218 64.762 33.291 64.7572 35.0928 64.5452C38.0604 64.2032 40.9896 63.5384 43.9524 63.1481C46.4046 62.8302 48.5388 61.6691 50.8031 60.8501C51.9256 60.4454 53.0192 59.877 54.0309 59.2266C55.5002 58.2871 56.9985 57.3284 58.2752 56.1529C59.6097 54.9244 60.6792 53.4117 61.898 52.0628C62.5532 51.3401 63.3 50.7042 63.9889 50.0105C64.2346 49.7648 64.4995 49.4902 64.6393 49.177C65.8629 46.4743 67.2938 43.8728 67.9971 40.9341C68.5271 38.7132 68.8499 36.5067 68.8306 34.1461C68.6379 32.6863 68.5126 31.1254 68.1995 29.603Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                d="M33.0646 40.6169C32.9593 38.537 33.0326 36.448 33.0326 34.359V22.7639C33.4586 19.2546 32.5607 18.6224 30.0367 19.1768C29.0151 19.3967 27.9982 19.6303 26.9812 19.8548C25.8177 20.1067 25.1305 20.881 24.9931 21.9988C24.8144 23.4556 24.6312 24.9491 24.7549 26.4014C24.8832 27.849 24.4342 29.2371 24.929 30.7764C25.4695 32.4577 25.2542 34.4093 25.2588 36.2418C25.2588 37.8544 25.1214 39.467 25.0297 41.0796C24.961 42.2936 24.9427 43.5214 24.7641 44.7263C24.4617 46.7603 25.0435 47.4888 27.1507 47.4658C28.2959 47.4567 29.4412 47.4017 30.591 47.388C32.1439 47.3651 32.7394 46.7054 33.0738 45.0973C33.3945 43.5764 33.1425 42.115 33.0646 40.6169ZM27.3752 32.6914C27.4668 32.728 27.5584 32.7601 27.65 32.7968C27.5309 33.0304 27.4164 33.2686 27.2973 33.5068C27.2332 33.4839 27.1736 33.461 27.1095 33.4381C27.1965 33.1907 27.2835 32.9388 27.3752 32.6914ZM26.8667 44.9691V43.1137C27.3981 43.3473 27.7737 43.5168 28.3967 43.7871C27.8104 44.2407 27.3935 44.5613 26.8667 44.9691ZM31.1773 20.5007C31.3331 20.9726 31.5071 21.2475 31.498 21.5132C31.443 22.8509 31.3376 24.1795 31.2598 25.5126C31.2277 26.0715 31.0078 26.3785 30.2474 26.2319C30.2795 25.847 30.1833 25.3935 30.3619 25.1186C31.017 24.1016 30.9849 23.2907 29.7527 22.7272C30.2245 21.9896 30.623 21.3666 31.1773 20.5007ZM30.8154 34.872C30.7192 34.698 30.5451 34.5193 30.5451 34.3498C30.5497 34.1894 30.7421 34.0337 30.9803 33.6901C31.1132 34.0978 31.2506 34.2994 31.2094 34.4552C31.1681 34.6155 30.9528 34.7346 30.8154 34.872ZM31.1223 35.9899V38.6195C30.8658 38.3675 30.5543 38.0606 30.2107 37.7307C30.4489 37.1398 30.6826 36.5625 30.9162 35.9853C30.9849 35.9853 31.0536 35.9899 31.1223 35.9899ZM30.1191 31.1246C30.4856 30.4741 30.765 29.9885 31.1956 29.228V31.2162C30.907 31.1933 30.6597 31.1704 30.1191 31.1246ZM30.0733 45.5967C30.0367 45.5371 30 45.473 29.9634 45.4089C30.394 45.0515 30.8246 44.6988 31.3285 44.2819C31.4247 44.6942 31.4705 44.9095 31.5392 45.2027C31.0261 45.3402 30.5497 45.4684 30.0733 45.5967Z"
                fill="white"
              />
              <path
                d="M45.2505 21.252C44.6183 20.487 43.7113 20.7802 42.9509 20.7298C41.3155 20.6198 39.6389 20.1388 38.0539 20.8901C37.9302 21.9484 37.7241 22.97 37.7149 23.9916C37.6691 28.0185 37.6416 32.05 37.692 36.0769C37.7287 39.183 37.8432 42.2936 38.0173 45.3951C38.0722 46.3297 38.2051 47.4063 38.709 48.1393C39.4557 49.2342 42.1996 49.5411 43.3632 48.8814C43.7022 48.689 44.0778 48.3958 44.2244 48.0614C44.5359 47.3284 44.8978 46.5404 44.9161 45.7662C44.9894 42.0233 44.9711 38.2759 44.9665 34.5284C44.9573 31.5002 44.9115 28.4766 44.8978 25.453C44.8978 24.8116 44.9711 24.1748 45.0077 23.5335C45.0581 22.773 45.9514 22.1041 45.2505 21.252ZM39.8405 22.6768C39.987 22.7043 40.1291 22.7272 40.2711 22.7547C40.1749 23.222 40.0832 23.6847 39.987 24.1519C39.8496 24.1382 39.7076 24.129 39.5702 24.1199C39.6618 23.6388 39.7534 23.1578 39.8405 22.6768ZM39.4969 37.8544C39.4831 37.2543 39.8405 37.0435 40.5688 37.3276C40.3673 38.2392 40.1657 39.1555 39.9596 40.0763C39.8771 40.0671 39.7992 40.058 39.7168 40.0488C39.6389 39.3158 39.5106 38.5874 39.4969 37.8544ZM40.8895 46.9985C40.6559 47.0535 40.436 47.0993 40.0237 47.1909C39.9733 46.1693 39.9321 45.3447 39.8863 44.4101C40.3169 44.5751 40.6238 44.6896 40.8895 44.795V46.9985ZM42.7356 25.8791C42.8089 25.7416 42.9417 25.6363 43.2716 25.2606C43.1387 25.9111 43.07 26.2547 42.9967 26.6029C42.8501 26.5433 42.7035 26.4884 42.5569 26.4288C42.6165 26.2456 42.6485 26.0486 42.7356 25.8791ZM43.212 31.6926V33.7542C42.2088 33.2319 42.2088 33.2319 43.212 31.6926ZM43.0104 38.4866C43.2257 39.2654 43.3448 39.696 43.5006 40.2458C42.0255 39.9938 42.8959 39.3433 43.0104 38.4866Z"
                fill="white"
              />
              <path
                d="M31.5848 43.0201L31.5752 43.0297L31.5463 43.0538C31.5415 43.0538 31.5367 43.0586 31.5367 43.0586C31.5222 42.996 31.5126 42.9382 31.5077 42.8804C31.5029 42.8707 31.5029 42.8659 31.5029 42.8611C31.5318 42.9141 31.5559 42.9671 31.5848 43.0201Z"
                fill="white"
              />
              <path
                d="M31.5757 43.0298C31.5805 43.0298 31.5805 43.0298 31.5805 43.0298C31.5708 43.0442 31.5612 43.0635 31.5516 43.078C31.5467 43.0731 31.5419 43.0635 31.5371 43.0587C31.5371 43.0587 31.566 43.0346 31.5757 43.0298Z"
                fill="white"
              />
              <path
                d="M31.5863 43.0249C31.5863 43.0249 31.5863 43.0311 31.5801 43.0311V43.0249C31.5863 43.0249 31.5863 43.0249 31.5863 43.0249Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => handleOnPlayPauseClick(true)}
            aria-label="Play"
          >
            <svg
              fill="none"
              height="54"
              viewBox="0 0 72 68"
              width="66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m71.7545 35.4469c-.159-1.5561-.6166-3.0978-.6407-4.6442-.053-3.064-1.4887-5.6848-2.3703-8.4887-.3613-1.1417-.5251-2.3799-1.0695-3.4253-1.0695-2.0378-2.1968-4.0757-3.565-5.916-1.9801-2.6786-3.9023-5.46802-7.1012-6.96149-.8479-.39504-1.5176-1.1755-2.3077-1.71507-.3854-.26015-.8623-.39504-1.3103-.54439-.3903-.13008-.8142-.17343-1.2093-.30351-1.7825-.58775-3.4735-1.56091-5.4728-1.19959-.342.06263-.8093.00482-1.0695-.18788-1.8837-1.397114-4.1383-1.276673-6.2774-1.686171-3.7818-.72746-7.5733-.255334-11.2732.236063-2.4473.332416-4.7887 1.681348-7.265 2.317278-.1686.04336-.3131.18788-.4769.26978-1.7922.92017-3.5361 1.94632-5.3813 2.73641-2.1294.91053-4.0131 2.09085-5.43426 3.93118-.59257.76599-.98761 1.71029-1.67171 2.37029-1.16587 1.1418-1.9415 2.4762-2.49553 3.9649-.36132.9683-.5203 2.033-.98761 2.9387-.64556 1.243-1.14659 2.4859-1.40675 3.883-.32278 1.7151-.66965 3.5121-1.4501 5.0441-.900894 1.7536-.958706 3.6132-.785271 5.3283.207157 2.0764.250516 4.2106 1.079151 6.2629.85753 2.1294.99724 4.5526 1.89332 6.6579 1.07915 2.5389 2.16793 5.1019 3.82037 7.3758 2.47629 3.4012 5.18379 6.4749 8.96559 8.5561 3.0351 1.6717 6.2051 2.9195 9.4955 3.9119 1.5369.4625 3.117.9105 4.7068 1.0406 1.5706.1301 3.1749-.1349 4.7647-.2746.7371-.0626 1.4308-.0771 2.2016-.4288 1.1033-.5106 2.4618-.4817 3.7096-.6793.0241.0916.0433.1831.0674.2795.8528-.2168 1.691-.5011 2.5582-.636 3.17-.5058 6.1617-1.6042 9.1197-2.7797 1.1033-.4384 2.0813-1.1996 3.1411-1.7633 1.4309-.7612 2.6256-1.8162 3.83-2.8665 1.6718-1.4597 3.0833-3.17 4.6057-4.7742.9876-1.0454 2.1824-2.0523 2.7364-3.3145.8913-2.0186 2.1053-3.8782 2.6497-6.0991.5107-2.0909 1.2044-4.1432 1.4742-6.2967.0867-.7082.2698-1.426.2023-2.1197zm-3.1025 5.4872c-.7034 2.9388-2.1342 5.5403-3.3579 8.243-.1397.3131-.4047.5877-.6504.8334-.6889.6938-1.4356 1.3297-2.0908 2.0523-1.2189 1.349-2.2884 2.8617-3.6229 4.0902-1.2767 1.1755-2.7749 2.1342-4.2443 3.0736-1.0117.6504-2.1053 1.2189-3.2278 1.6236-2.2643.819-4.3985 1.98-6.8507 2.298-2.9628.3902-5.8919 1.055-8.8596 1.3971-1.8018.212-3.671.2168-5.4728-.0048-2.9725-.3758-5.8678-1.0888-8.7102-2.1583-4.0565-1.5224-7.318-4.148-10.5699-6.841-.5637-1.7585-2.30764-2.7846-2.81831-4.625-.25052-.9057-.91535-1.7102-1.46456-2.5148-1.0117-1.4934-1.40192-3.1892-1.79697-4.9139-.35168-1.5417-.98279-3.0159-1.39229-4.5479-.30833-1.1658-.48176-2.3654-.66965-3.5554-.08672-.5395-.00482-1.108-.10117-1.6476-.31314-1.797-.03854-3.4639.62629-5.1789.66002-1.691.96834-3.5169 1.4212-5.285.02891-.1156-.01445-.2553.02891-.3613 1.1225-2.6738 2.03303-5.4632 3.45423-7.9683 1.14177-2.0186 2.78942-3.8059 4.42742-5.47765.8141-.82863 2.0715-1.30558 3.2133-1.69099 1.6862-.56848 3.2086-1.39229 4.6442-2.40881.2457-.17343.5299-.30832.8094-.41431 2.1294-.80936 4.4274-1.12251 6.4411-2.2691.3421-.19752.8576-.21198 1.2574-.13971 1.8355.34687 3.5843-.24088 5.3717-.40468.5444-.053 1.108-.04818 1.6524.01927 2.1679.2746 4.3311.57811 6.499.88162.2987.03854.6504.03854.8768.20234 1.2044.86236 2.6256.77082 3.9842 1.04061 1.9029.38059 3.7962.89608 5.6269 1.55127.8576.30833 1.508 1.15623 2.327 1.62836 2.6207 1.50791 4.7453 3.54578 6.4893 5.99308.872 1.2189 2.1246 2.2354 2.1149 3.9312-.0048.053.0482.1156.0916.159 1.6909 1.5561 1.8644 3.8396 2.7556 5.7811.1686.371.1783.8094.3035 1.2044.1831.5493.424 1.0792.6071 1.6236.3806 1.1466.8382 2.2739 1.0791 3.4494.3132 1.5224.4384 3.0833.6311 4.543.0193 2.3606-.3035 4.5671-.8334 6.788z" />
                <path
                  d="m68.8547 29.603c-.2408-1.1755-.6985-2.3028-1.0791-3.4494-.1831-.5444-.4239-1.0743-.607-1.6235-.1253-.3951-.1349-.8335-.3035-1.2044-.8913-1.9415-1.0647-4.2251-2.7557-5.7812-.0434-.0433-.0964-.106-.0915-.1589.0096-1.6958-1.243-2.7124-2.115-3.9312-1.744-2.4474-3.8685-4.48523-6.4893-5.99314-.819-.47213-1.4694-1.32003-2.3269-1.62836-1.8307-.65519-3.724-1.17068-5.627-1.55127-1.3586-.26979-2.7798-.17825-3.9842-1.04061-.2264-.1638-.5781-.1638-.8768-.20234-2.1679-.30351-4.331-.60702-6.4989-.88162-.5444-.06745-1.1081-.07226-1.6525-.01927-1.7873.1638-3.5361.75155-5.3716.40468-.3999-.07227-.9154-.05781-1.2574.13971-2.0138 1.14659-4.3118 1.45974-6.4412 2.2691-.2794.10599-.5637.24088-.8094.41431-1.4356 1.01652-2.958 1.84033-4.6441 2.40881-1.1418.38541-2.3992.86236-3.2134 1.69099-1.638 1.67171-3.28561 3.45901-4.42739 5.47761-1.42119 2.5052-2.33172 5.2946-3.45423 7.9684-.04336.106 0 .2457-.02891.3613-.45285 1.7681-.76118 3.5939-1.42119 5.2849-.66483 1.7151-.93944 3.382-.62629 5.179.09635.5395.01445 1.108.10117 1.6476.18788 1.1899.36132 2.3895.66965 3.5554.40949 1.532 1.0406 3.0062 1.39229 4.5478.39504 1.7247.78527 3.4205 1.79697 4.914.54921.8045 1.21404 1.6091 1.46456 2.5148.51066 1.8403 2.25467 2.8665 2.81827 4.6249 3.2519 2.6931 6.5135 5.3187 10.5699 6.841 2.8424 1.0695 5.7378 1.7825 8.7102 2.1583 1.8018.2216 3.6711.2168 5.4729.0048 2.9676-.342 5.8967-1.0068 8.8596-1.3971 2.4521-.3179 4.5863-1.479 6.8506-2.298 1.1225-.4047 2.2161-.9731 3.2278-1.6235 1.4694-.9395 2.9677-1.8982 4.2444-3.0737 1.3344-1.2285 2.4039-2.7412 3.6228-4.0901.6552-.7227 1.4019-1.3586 2.0909-2.0523.2457-.2457.5106-.5203.6503-.8335 1.2237-2.7027 2.6545-5.3042 3.3579-8.2429.5299-2.2209.8527-4.4274.8335-6.788-.1928-1.4598-.318-3.0207-.6312-4.5431z"
                  fill-opacity=".1"
                />
                <path d="m49.9308 33.2163c-.1878-.3131-.4095-.607-.6455-.8864-1.9993-2.3944-4.4804-4.2973-7.0675-5.8968-2.1004-1.2911-3.83-3.0688-6.1954-4.0757-2.3269-.9924-4.6587-1.9752-7.0337-2.8327-1.4068-.5059-2.2884.1686-2.2836 1.691.0096 3.0447.1204 6.0942.2312 9.139.0434 1.214.2554 2.4184.2891 3.6276.053 2.1439-.0482 4.2877.0578 6.4267.1397 2.8858.4095 5.7716.6311 8.7874.2505.0963.7034.265 1.0647.4047 1.32-1.0358 2.4136-1.9897 3.6036-2.7991.978-.6744 2.0668-1.1899 3.1074-1.7632 1.4934-.819 3.0013-1.6139 4.49-2.4426 1.9848-1.1128 4.1913-1.8066 5.8389-3.5554.9058-.9635 2.1872-1.5705 3.276-2.3654 1.4019-1.0262 1.5609-1.9222.6359-3.4591zm-21.6841-11.4659c.4914.159.7998.2553 1.2333.3951-.3565.3372-.6166.5781-1.0165.9538-.0819-.501-.13-.8141-.2168-1.3489zm3.4639 1.0502c-.7708 1.4502-1.4597 2.6208-2.7749 3.3531-.3373-1.5224-.0049-1.9319 2.7749-3.3531zm-3.1314 7.689c.5684.4865.8671.7371 1.2092 1.0309-.1735.2457-.3421.477-.6938.9636-.1927-.7323-.3131-1.2093-.5154-1.9945zm3.4156 1.7343c-.5973 1.1514-1.3682 2.1149-2.4955 2.7701-.1108-.1204-.2216-.2408-.3324-.3613.9346-.7949 1.8644-1.5898 2.8279-2.4088zm-2.2064 13.8651c-.1735-.7371-.3035-1.373-.2457-1.9752.0048-.0674.0144-.1349.0289-.2023 0-.0145 0-.0241.0048-.0338.0193-.1156.0482-.2264.0867-.342v-.0048c.0386-.1108.0867-.2265.1445-.3373.0193-.0337.0386-.0722.0627-.1108.3902.6022.7852 1.2092 1.2285 1.8934-.4481.3854-.7901.6696-1.3104 1.1128zm.7612-5.3861c-.4963.6745-.8479 1.3345-.7275 2.1583 0 .0048 0 .0097.0048.0193.0241.0482.0482.0963.0723.1445v.0048s0 0-.0048 0c-.0097.0145-.0193.0338-.0241.0482-.0048-.0048-.0097-.0144-.0145-.0193-.0144-.0626-.0241-.1204-.0289-.1782-.1831-.3662-.3372-.7275-.4336-1.084-.2264-.8382-.1252-1.6621.7468-2.4618.7274-.6744.9828-1.821 2.3028-2.2546-.4577 1.4404-1.1225 2.5726-1.8933 3.6228zm10.5891-9.4184c.6022-.7901.9972-1.3104 1.4886-1.9512.4625.3276.8672.6215 1.3682.9828-.9683.3276-1.7584.5974-2.8568.9684z" />
                <path d="m32.2401 43.0201-.0096.0096-.0289.0241c-.0049 0-.0097.0048-.0097.0048-.0144-.0626-.0241-.1204-.0289-.1782-.0048-.0097-.0048-.0145-.0048-.0193.0289.053.053.106.0819.159z" />
                <path d="m32.2309 43.0298h.0048c-.0096.0144-.0192.0337-.0289.0482-.0048-.0049-.0096-.0145-.0144-.0193 0 0 .0289-.0241.0385-.0289z" />
                <path d="m32.2416 43.0249s0 .0062-.0062.0062v-.0062z" />
              </g>
            </svg>
          </button>
        )}
      </div>
      <div className="transition-all duration-200 cursor-pointer next hover:opacity-40">
        <button
          type="button"
          className="next"
          aria-label="Next"
          onClick={onNextClick}
        >
          <svg
            fill="none"
            height="34"
            viewBox="0 0 36 34"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m24.936 17.4098c-.0997-.1069-.2209-.1947-.3301-.2945-.7765-.7028-1.5767-1.3796-2.3223-2.1133-.8928-.8762-1.4389-2.0421-2.403-2.8779-.5509-.4749-.9712-.5319-1.4271.057-.1258.1662-.2327.3538-.3134.5461-.3301.7883-.6459 1.5814-.9831 2.4078-.6649-.4013-1.2395-.6815-1.7381-1.0614-1.0235-.7789-2.0089-1.6076-3.0015-2.4268-.2303-.1876-.4345-.5248-.7551-.3016-.1875.133-.2896.4346-.3538.6815-.0664.2565-.0474.5343-.0522.805-.0119.5105.0166 1.021-.0285 1.5292-.0451.4796-.095.9213-.0214 1.4342.2161 1.5126.2375 3.056.2921 4.5876.0285.8097-.0451 1.6218-.0332 2.4315.0023.2185.1401.4345.2208.6554.7527-.19 1.4556-.2636 2.0183-.7979.8549-.8144 1.7667-1.5719 2.7023-2.3959.0617.2874.1567.5462.1686.8074.0284.6221.0451 1.249.0142 1.8711-.0214.4915.0095.9071.596 1.0329.3443-.1757.7052-.3253 1.0329-.5295.8477-.5271 1.8997-.7314 2.5455-1.5838.019-.0238.038-.0475.0641-.0617 1.3749-.8145 2.7213-1.6646 3.9608-2.688.7004-.5794.7788-1.0424.1472-1.7144zm-11.6044-2.8115c-.3514.5177-.7052 1.0329-1.0899 1.6005-.235-.843-.0926-1.0686 1.0899-1.6005zm-.1068 4.2433c-.2042.6198-.3111 1.0947-.8287 1.4627-.0214-.3514-.038-.6126-.0546-.9142.2493-.1543.4939-.3063.8833-.5485zm-.3158-1.5838c-.171.2113-.3396.425-.5438.6791-.0736-.577-.0736-.577.5438-.6791zm-.6934 4.8939c.0499-.4132.0736-.6197.0879-.7456.3704-.1615.6743-.2921.9783-.425.0237.0261.0475.0522.0712.0783-.3372.323-.6744.6483-1.1374 1.0923zm4.3145-4.8203c.152-.2944.3016-.5912.4821-.9427.3372.6032.2612.7979-.4821.9427zm2.2511-3.6425c.1353-.2137.2731-.4251.4108-.6388.0522.0333.1045.0641.1567.0974-.1353.2137-.2707.4274-.406.6411-.0547-.0332-.1093-.0665-.1615-.0997zm.4274 1.4983c-.0356-.0237-.0736-.0475-.1116-.0736.2826-.4654.5651-.9332.9-1.4888.1353.2042.2374.3561.3609.5366-.3989.3562-.7741.691-1.1493 1.0258zm1.6456 4.8346c.3086-.3871.5865-.7361.8667-1.0876-.019.7527-.1568.9047-.8667 1.0876zm1.3914-2.7046c.1116-.2565.1924-.4393.3301-.748.2018.2707.3229.4369.5081.6862-.3276.0238-.5271.038-.8382.0618z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </AudioControlStyles>
  );
};

export default AudioControl;
