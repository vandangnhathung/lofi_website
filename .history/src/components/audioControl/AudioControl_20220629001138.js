import React from "react";
import { useSelector } from "react-redux";
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
const AudioControl = () => {
  const play = useSelector((state) => state.toggle.playToggle);
  return (
    <AudioControlStyles>
      <div className="transition-all duration-200 cursor-pointer prev hover:opacity-40">
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
      </div>
      <div className="transition-all duration-300 cursor-pointer start hover:opacity-40">
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
      </div>
      <div className="transition-all duration-200 cursor-pointer next hover:opacity-40">
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
      </div>
    </AudioControlStyles>
  );
};

export default AudioControl;
