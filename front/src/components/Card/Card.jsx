import React from "react";

const Card = (props) => {
  const svgUser = (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_403_8078)">
        <rect width="25" height="25" rx="12.5" fill="#FFBD12" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.90798 39.2361C2.94474 39.2393 3.95213 39.2748 4.9918 39.2783C9.21802 39.2924 13.4831 39.2719 17.7247 39.1005C18.9235 39.0521 19.2227 39.0533 20.4164 38.9781C21.1212 38.9756 23.2382 38.9173 23.1322 37.957C23.0854 36.1686 22.6428 34.3877 22.5033 32.604C22.2358 29.2509 22.0079 25.793 20.6642 22.6568C20.3532 21.9079 19.6853 21.4181 19.024 20.9777C18.3609 20.5025 18.1982 19.975 17.5862 19.4383C17.4568 19.3248 16.7219 19.2786 16.3265 18.9907C15.7511 18.5717 15.4657 17.8857 15.251 17.7689C15.093 17.683 15.0959 17.0902 14.7792 16.8803C14.3542 16.5988 13.0001 16.3894 12.5074 16.3503C12.0346 16.3127 11.2121 16.3916 10.7684 16.5648C10.0286 16.8537 9.73346 17.4047 9.40763 18.1145C5.10287 19.4454 1.16822 21.699 -0.0537338 26.2447C-1.1075 30.0572 -1.14612 34.1444 -0.739031 38.0544C-0.657594 38.3404 -0.714671 38.7886 -0.467659 38.9781C-1.32608 39.0274 1.79153 39.2044 1.90798 39.2361Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4876 35.4717C21.4061 35.431 21.3212 35.3845 21.2282 35.3813C21.0684 35.3757 21.0682 35.127 21.2282 35.1326C21.3677 35.1375 21.4902 35.1957 21.613 35.257C21.7563 35.3285 21.6303 35.5429 21.4876 35.4717ZM21.2281 28.4728C21.3372 28.4729 21.447 28.4867 21.5308 28.563C21.5806 28.6084 21.5766 28.6929 21.5308 28.7388C21.4817 28.7878 21.4046 28.784 21.355 28.7388C21.3712 28.7535 21.3551 28.7389 21.3493 28.7357C21.3479 28.7349 21.3471 28.7344 21.3467 28.734C21.3455 28.7337 21.3442 28.7335 21.3422 28.733C21.3292 28.7297 21.3164 28.7265 21.3033 28.7241C21.303 28.7248 21.2755 28.7223 21.269 28.722C21.2554 28.7215 21.2418 28.7215 21.2281 28.7215C21.1607 28.7215 21.1038 28.6646 21.1038 28.5972C21.1038 28.53 21.1609 28.4728 21.2281 28.4728ZM20.0594 31.2619C20.0238 31.4181 19.7842 31.3516 19.8197 31.1958C19.8714 30.9693 19.862 30.7373 19.8197 30.51C19.7906 30.3533 20.0302 30.2868 20.0594 30.4439C20.1101 30.7165 20.1214 30.9901 20.0594 31.2619ZM19.7455 22.3258C19.5604 22.2818 19.3773 22.2766 19.1879 22.2766C19.0277 22.2765 19.028 22.0279 19.1879 22.0279C19.3991 22.028 19.6053 22.0371 19.8116 22.0861C19.9674 22.1231 19.901 22.3628 19.7455 22.3258ZM19.1251 28.3823C19.0178 28.3285 18.9104 28.2748 18.803 28.2211C18.6597 28.1495 18.7858 27.9351 18.9285 28.0064L19.2506 28.1676C19.3938 28.2392 19.2678 28.4536 19.1251 28.3823ZM19.0805 33.2788C18.9443 33.4752 18.7528 33.5972 18.523 33.6582C18.368 33.6993 18.3024 33.4594 18.457 33.4184C18.6213 33.3748 18.7673 33.2955 18.8659 33.1533C18.9565 33.0226 19.1719 33.147 19.0805 33.2788ZM18.2216 24.5244C18.1847 24.4555 18.1293 24.4264 18.0604 24.4249C17.9005 24.4212 17.9004 24.1726 18.0604 24.1762C18.2173 24.1798 18.3612 24.2586 18.4362 24.3989C18.5117 24.5401 18.297 24.6656 18.2216 24.5244ZM16.645 26.2145C16.6005 26.2631 16.5141 26.2619 16.4693 26.2145C16.4418 26.1856 16.4188 26.1532 16.4006 26.1177C16.3937 26.1043 16.3872 26.0906 16.3797 26.0775C16.3763 26.0717 16.3725 26.0659 16.3687 26.0603C16.3674 26.0592 16.3647 26.0564 16.3619 26.0534C16.3141 26.0029 16.3153 25.9283 16.3619 25.8776C16.4064 25.829 16.4929 25.8302 16.5377 25.8776C16.5651 25.9065 16.5881 25.9389 16.6063 25.9744C16.6132 25.9878 16.6197 26.0015 16.6273 26.0146C16.6307 26.0205 16.6344 26.0262 16.6383 26.0318C16.6396 26.0329 16.6422 26.0357 16.645 26.0387C16.6928 26.0892 16.6916 26.1638 16.645 26.2145ZM16.5124 29.8861C16.3505 29.9602 16.173 29.9602 16.0111 29.8861C15.9498 29.858 15.9353 29.7695 15.9666 29.716C16.0028 29.654 16.0756 29.6435 16.1366 29.6714C16.21 29.705 16.3137 29.7049 16.387 29.6714C16.4483 29.6433 16.5204 29.6533 16.557 29.716C16.5885 29.7698 16.5735 29.8581 16.5124 29.8861ZM16.0708 32.4849C16.043 32.5508 15.983 32.5858 15.9128 32.5884C15.8432 32.5911 15.7914 32.5293 15.7885 32.4641C15.7866 32.422 15.8094 32.3859 15.8421 32.3636C15.8421 32.3613 15.8422 32.359 15.8422 32.3567C15.8422 32.287 15.8991 32.2354 15.9665 32.2324C16.0336 32.2294 16.0908 32.2917 16.0908 32.3567C16.0907 32.4006 16.088 32.4441 16.0708 32.4849ZM15.4296 36.6165C15.2312 36.6197 15.0374 36.667 14.839 36.6702C14.6787 36.6728 14.6792 36.4242 14.839 36.4216C15.0373 36.4184 15.2312 36.3711 15.4296 36.3679C15.5898 36.3653 15.5894 36.6139 15.4296 36.6165ZM14.6048 20.6826C14.4886 20.7933 14.3452 20.8478 14.2038 20.9169C14.0605 20.9869 13.9346 20.7724 14.0783 20.7022C14.1981 20.6436 14.3308 20.6004 14.429 20.5068C14.5449 20.3964 14.7209 20.572 14.6048 20.6826ZM14.2931 23.5486C14.2116 23.5079 14.1267 23.4614 14.0337 23.4581C13.8739 23.4526 13.8737 23.2039 14.0337 23.2095C14.1732 23.2143 14.2957 23.2726 14.4185 23.3339C14.5619 23.4054 14.4358 23.6198 14.2931 23.5486ZM12.7988 35.0511C12.7621 34.9822 12.7066 34.9531 12.6377 34.9516C12.4778 34.948 12.4777 34.6993 12.6377 34.7029C12.7947 34.7065 12.9385 34.7853 13.0135 34.9256C13.089 35.0669 12.8743 35.1923 12.7988 35.0511ZM12.2813 29.6518C12.2319 29.6064 12.2353 29.522 12.2813 29.476C12.335 29.4223 12.3887 29.3686 12.4424 29.3149C12.4915 29.2657 12.5686 29.2693 12.6182 29.3149C12.6676 29.3603 12.6642 29.4447 12.6182 29.4907C12.5645 29.5444 12.5108 29.5981 12.4571 29.6518C12.408 29.701 12.331 29.6974 12.2813 29.6518ZM11.6712 38.0666C11.4919 38.0624 11.3238 38.011 11.155 37.9548C11.0037 37.9044 11.069 37.6644 11.2211 37.715C11.3678 37.7639 11.5152 37.8144 11.6712 37.818C11.8312 37.8217 11.8313 38.0703 11.6712 38.0666ZM10.8659 32.7496C10.7039 32.7451 10.5695 32.6625 10.4559 32.552C10.3409 32.4402 10.5169 32.2646 10.6316 32.3762C10.6967 32.4394 10.7717 32.4983 10.8659 32.5009C11.0258 32.5054 11.0259 32.754 10.8659 32.7496ZM11.366 25.9118C11.368 25.978 11.3959 26.0489 11.437 26.0924C11.5469 26.2088 11.3713 26.3848 11.2613 26.2682C11.1705 26.1721 11.1213 26.0434 11.1175 25.9118C11.1129 25.7515 11.3615 25.7521 11.366 25.9118ZM9.4701 20.4964C9.41809 20.3945 9.34992 20.275 9.24624 20.2187C9.10543 20.1423 9.23104 19.9277 9.3717 20.004C9.51264 20.0805 9.61349 20.2313 9.68474 20.3708C9.75744 20.5132 9.54287 20.6389 9.4701 20.4964ZM9.14789 23.0822C9.09022 23.0805 9.03299 23.0707 8.97737 23.0556C8.9536 23.0491 8.93011 23.0417 8.90631 23.0352C8.89612 23.0325 8.85284 23.027 8.87944 23.0285C8.81214 23.0249 8.75515 22.9745 8.75515 22.9042C8.75515 22.8395 8.81232 22.7762 8.87944 22.7798C8.97169 22.7848 9.05558 22.8309 9.14789 22.8335C9.30775 22.838 9.30787 23.0867 9.14789 23.0822ZM8.34249 27.0565H8.07403C7.91383 27.0565 7.91411 26.8079 8.07403 26.8079H8.34249C8.50269 26.8079 8.50241 27.0565 8.34249 27.0565ZM8.02932 38.0496C7.94792 38.0904 7.85197 38.129 7.78604 38.1913C7.66977 38.3013 7.49379 38.1257 7.61027 38.0155C7.69425 37.9361 7.80164 37.8861 7.90389 37.835C7.96414 37.8048 8.03821 37.8184 8.07394 37.8796C8.10622 37.9348 8.08935 38.0196 8.02932 38.0496ZM7.4296 34.908C7.41919 34.9051 7.40819 34.9031 7.39766 34.9017C7.3554 34.8959 7.31119 34.8979 7.26874 34.8979C7.10854 34.8978 7.10879 34.6492 7.26874 34.6492C7.3948 34.6493 7.52598 34.6511 7.62509 34.7394C7.6754 34.7842 7.67052 34.8697 7.62509 34.9152C7.57569 34.9646 7.49941 34.9598 7.44933 34.9152C7.45461 34.9199 7.43649 34.9099 7.4296 34.908ZM7.26872 30.6827C7.30482 30.6083 7.30538 30.5597 7.30544 30.4769C7.30557 30.3167 7.55413 30.3169 7.55401 30.4769C7.55395 30.5971 7.53608 30.6994 7.48335 30.8082C7.45393 30.8689 7.3678 30.8847 7.31333 30.8528C7.25225 30.8171 7.23948 30.7431 7.26872 30.6827ZM6.55003 24.8501C6.40586 24.8991 6.27717 24.9686 6.15021 25.0524C6.0162 25.1409 5.89183 24.9254 6.02475 24.8377C6.16963 24.7421 6.31949 24.6663 6.48394 24.6103C6.636 24.5586 6.70066 24.7988 6.55003 24.8501ZM5.71167 20.6653C5.60457 20.6683 5.49402 20.7094 5.39857 20.7558C5.25511 20.8255 5.12925 20.611 5.27314 20.5411C5.40947 20.4748 5.55865 20.421 5.71167 20.4167C5.87196 20.4122 5.87128 20.6609 5.71167 20.6653ZM5.33582 31.8365C5.29369 31.8384 5.25768 31.8156 5.23537 31.7829C5.23304 31.7829 5.23074 31.7828 5.22844 31.7828C5.15878 31.7828 5.1072 31.7259 5.10415 31.6585C5.10114 31.5914 5.16344 31.5341 5.22844 31.5342C5.27231 31.5342 5.31584 31.5369 5.3566 31.5541C5.42244 31.5819 5.45743 31.642 5.4601 31.7122C5.46274 31.7818 5.40104 31.8336 5.33582 31.8365ZM4.72463 23.2389C4.57198 23.2888 4.50716 23.0486 4.65854 22.9991C4.83623 22.941 5.01781 22.896 5.19547 22.838C5.34812 22.7881 5.41294 23.0283 5.26153 23.0777C5.0839 23.1358 4.90229 23.1808 4.72463 23.2389ZM4.16719 27.932C4.11984 28.0846 3.88 28.0191 3.92748 27.8659C3.97334 27.718 3.97663 27.5692 3.97673 27.4156C3.97682 27.2553 4.22538 27.2556 4.22529 27.4156C4.2252 27.5904 4.21932 27.7637 4.16719 27.932ZM2.50527 33.5532C2.49623 33.6151 2.44713 33.6597 2.38288 33.6626C2.31748 33.6655 2.25624 33.6033 2.2586 33.5383C2.26316 33.4131 2.36517 33.3111 2.49026 33.3065C2.55986 33.304 2.61162 33.3655 2.61454 33.4309C2.6174 33.4944 2.5644 33.5439 2.50527 33.5532ZM1.66422 26.4076C1.53289 26.4515 1.39254 26.4932 1.28957 26.5905C1.17321 26.7003 0.997227 26.5247 1.1138 26.4147C1.24958 26.2865 1.42423 26.2259 1.59817 26.1678C1.75048 26.117 1.8152 26.3572 1.66422 26.4076ZM1.09426 31.2379C1.05816 31.2996 0.985049 31.3108 0.924243 31.2825C0.842713 31.2446 0.752701 31.2458 0.664802 31.2457C0.504632 31.2456 0.504881 30.997 0.664802 30.9971C0.800395 30.9972 0.925486 31.01 1.04971 31.0678C1.11082 31.0962 1.12571 31.1841 1.09426 31.2379ZM0.772213 37.0999C0.702614 37.1024 0.65085 37.0409 0.64793 36.9756C0.645071 36.9121 0.698047 36.8625 0.757236 36.8532C0.766247 36.7913 0.81537 36.7467 0.879593 36.7438C0.945028 36.7409 1.00627 36.8031 1.00388 36.8682C0.999309 36.9933 0.897366 37.0953 0.772213 37.0999ZM23.4174 38.04C23.3751 37.8881 23.2785 37.7653 23.2055 37.6285C23.181 37.5824 23.1725 37.5538 23.1592 37.52C23.1412 37.5561 23.1062 37.5833 23.0536 37.5833C22.9527 37.5833 22.8347 37.5768 22.7405 37.62C22.6792 37.6481 22.6071 37.6381 22.5705 37.5754C22.539 37.5216 22.554 37.4333 22.615 37.4053C22.7538 37.3417 22.903 37.3347 23.0536 37.3346C23.0908 37.3346 23.119 37.3483 23.1388 37.3689C23.1964 36.5807 23.195 35.7919 23.1405 35.0031C23.0824 34.1602 22.9488 33.3341 22.809 32.502C22.7413 32.0986 22.6534 31.6911 22.6704 31.2803C22.6875 30.8722 22.8625 30.4917 22.7385 30.0824C22.6888 29.9183 22.6036 29.7679 22.5483 29.6056C22.489 29.4309 22.4943 29.2584 22.5213 29.0775C22.5769 28.7092 22.6692 28.3453 22.5216 27.9857C22.4564 27.8262 22.3507 27.6839 22.2998 27.5191C22.2364 27.3143 22.2451 27.0877 22.2345 26.8755C22.2131 26.4472 22.2075 26.0161 22.172 25.5887C22.1562 25.3973 22.1217 25.2157 22.0431 25.0401C21.9676 24.8711 21.8555 24.7172 21.8054 24.5379C21.7557 24.3613 21.7514 24.1752 21.7246 23.9946C21.6967 23.8037 21.6529 23.6157 21.5938 23.4323C21.3658 22.7224 20.9479 22.0846 20.4542 21.5317C19.9294 20.944 19.3021 20.5014 18.6362 20.0889C18.2861 19.8721 17.936 19.6552 17.5861 19.4383C17.5786 19.479 17.5527 19.5164 17.5029 19.533C17.3715 19.5769 17.2312 19.6186 17.1282 19.7159C17.0119 19.8257 16.8358 19.6501 16.9524 19.5401C17.074 19.4252 17.2269 19.3648 17.3824 19.3116C17.223 19.2111 17.0619 19.107 16.882 19.049C16.7244 18.998 16.492 19.0424 16.3643 18.9268C16.264 18.8358 16.2322 18.667 16.1937 18.5433C16.1456 18.3897 16.1039 18.2278 16.0427 18.0786C16.0011 17.9767 15.9405 17.8788 15.8641 17.7998C15.8305 17.6705 15.769 17.5524 15.6602 17.4806C15.3756 17.2923 15.0261 17.4794 14.9009 17.7479C14.7974 17.7476 14.6884 17.7703 14.5877 17.7765C14.3808 17.7896 14.1735 17.7955 13.9663 17.7949C13.5608 17.7936 13.155 17.7672 12.753 17.7134C12.034 17.6171 11.3364 17.4228 10.6296 17.2715C10.6255 17.2621 10.6209 17.2528 10.6153 17.2435C10.463 16.988 10.0837 17.0312 9.84471 17.1279C9.7422 17.1692 9.63781 17.2214 9.57908 17.3184C9.51694 17.3603 9.46319 17.4113 9.42746 17.4651C9.35351 17.576 9.29634 17.7998 9.14627 17.8185C9.04746 17.8306 8.9471 17.8116 8.84674 17.8259C8.72122 17.8433 8.60874 17.8875 8.49285 17.9378C7.61044 18.3211 6.6982 18.7472 5.74057 18.8957C5.51596 18.9306 5.28728 18.9666 5.09215 19.0925C4.93369 19.1947 4.81124 19.3352 4.68046 19.4686C4.55307 19.5985 4.44805 19.656 4.26629 19.6793C4.04569 19.7076 3.8546 19.7685 3.69334 19.9289C3.55943 20.0622 3.47212 20.2325 3.3671 20.3873C3.26019 20.5452 3.10331 20.6341 2.9405 20.7258C2.55553 20.9427 2.19698 21.2047 1.88471 21.519C1.22695 22.1816 0.828619 23.0332 0.427184 23.8631C-0.00687468 24.7607 -0.412659 25.6692 -0.69416 26.6277C-0.970069 27.5689 -1.13412 28.5371 -1.20994 29.5142C-1.28979 30.5396 -1.30097 31.569 -1.36746 32.595C-1.40071 33.1075 -1.42588 33.6206 -1.45136 34.1335C-1.47621 34.6401 -1.51256 35.1477 -1.50669 35.6549C-1.49548 36.6355 -1.29945 37.6192 -0.956708 38.5373C-0.871264 38.7658 -0.776529 38.9911 -0.675549 39.213C-0.586966 39.4079 -0.284026 39.3862 -0.18895 39.213C-0.1672 39.1733 -0.150111 39.1322 -0.135818 39.0906C0.112748 39.0928 0.3638 39.0735 0.610812 39.0965C1.04705 39.1372 1.48418 39.1599 1.92166 39.1869C2.78732 39.2407 3.65451 39.2764 4.52045 39.3259C4.60446 39.3307 4.68848 39.3355 4.77246 39.3405C4.15537 37.4298 4.23541 35.3642 4.13775 33.3772C4.12989 33.217 4.37852 33.2179 4.38632 33.3772C4.48438 35.3727 4.40089 37.4436 5.0398 39.3574C5.28768 39.3742 5.53522 39.3947 5.78192 39.4247C5.98137 39.4486 6.1818 39.4769 6.38314 39.467C6.61151 39.4561 6.8346 39.4039 7.05738 39.3585C7.46223 39.2761 7.85217 39.3134 8.25857 39.3641C8.69325 39.4185 9.12949 39.4486 9.56696 39.4676C11.3187 39.5444 13.0823 39.6143 14.8335 39.4971C15.2573 39.4688 15.6801 39.4291 16.1011 39.375C16.5349 39.3193 16.964 39.2258 17.3974 39.1726C17.8246 39.1204 18.2174 39.2637 18.6396 39.2901C19.0702 39.3172 19.5124 39.2273 19.939 39.1757C20.0782 39.1589 20.2175 39.1425 20.3569 39.1262C20.1774 37.8961 20.0754 36.6569 19.9764 35.4181C19.9636 35.2583 20.2122 35.2596 20.2249 35.4181C20.3232 36.6472 20.4229 37.8772 20.6021 39.0976C21.3408 39.0116 22.0802 38.9246 22.8112 38.7907C23.0194 38.7527 23.2263 38.6909 23.3509 38.505C23.4431 38.3673 23.4618 38.1986 23.4174 38.04Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8349 11.955C17.768 11.3671 17.8546 10.1383 17.8604 10.0637C17.897 9.59169 17.676 7.72798 17.258 7.8997C16.557 7.34457 15.6233 7.22198 14.7502 7.16343C12.9367 7.04178 11.0074 7.32104 9.60709 8.5419C8.91455 9.17592 8.24034 10.0981 8.29454 11.0582C7.66532 11.9683 6.77828 13.2167 7.56225 14.2807C7.82873 14.6207 8.25227 14.7473 8.58704 15.0047C9.26039 15.548 9.68284 16.3277 10.3626 16.8678C12.1635 18.4866 15.2214 18.8247 16.9907 16.9835C18.3589 15.65 18.1377 13.655 17.897 11.955C17.7352 10.8121 17.9654 13.1019 17.8349 11.955Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3275 4.67035C12.8125 4.57244 13.3106 4.51152 13.8059 4.52986L13.844 4.53135C14.2167 4.54624 14.6887 4.5792 15.0138 4.79598C15.0325 4.7772 15.0625 4.76757 15.0898 4.78059C15.4762 4.96506 15.9011 5.09843 16.3079 5.23095C16.7128 5.36283 17.1329 5.44989 17.5573 5.48498C17.7169 5.49819 17.8536 5.67066 17.7525 5.82535C17.7284 5.86221 17.705 5.89944 17.6817 5.93677C17.7207 5.9327 17.7597 5.9285 17.7987 5.92456C17.9271 5.91163 18.0554 6.04872 18.0478 6.17379C18.0431 6.25246 18.0346 6.33019 18.022 6.40699C18.0709 6.40597 18.1196 6.4133 18.1665 6.43316C18.4044 6.53365 18.3879 6.81708 18.3701 7.03272C18.3454 7.33196 18.2335 7.64893 18.0258 7.8729C18.1809 8.03405 18.2907 8.2265 18.3562 8.45507C18.4037 8.62198 18.4301 8.79976 18.4171 8.9735L18.4129 9.02552C18.3968 9.21406 18.3647 9.42281 18.2291 9.55844C18.1595 9.62838 18.0737 9.65386 17.992 9.64578C18.0414 10.0803 18.0731 10.5173 18.1029 10.9527L18.1169 11.1609C18.1835 12.1673 18.2335 13.1802 18.2204 14.1883C18.2082 15.1303 18.0222 16.0447 17.4446 16.8096C16.9185 17.5061 16.1632 18.0196 15.3088 18.2148C14.8483 18.3202 14.3782 18.3276 13.9121 18.2605C13.6862 18.2278 13.4588 18.1778 13.2444 18.0989C13.007 18.0112 12.8365 17.8822 12.6767 17.6889C12.6012 17.5972 12.6376 17.402 12.788 17.4204C13.0155 17.448 13.2231 17.4812 13.4412 17.5485L13.4724 17.5584C13.6897 17.628 13.9146 17.6799 14.1417 17.702C14.6069 17.747 15.0791 17.7016 15.5247 17.5605C16.2502 17.3305 16.875 16.818 17.2755 16.174C17.7509 15.4107 17.8047 14.5441 17.7978 13.6664C17.7904 12.7033 17.7591 11.7396 17.708 10.7774L17.6993 10.6171C17.6723 10.1219 17.6462 9.62651 17.6232 9.13108C17.6161 8.97568 17.6052 8.81903 17.5856 8.66394C17.4063 8.55888 17.2457 8.41405 17.141 8.23533C16.9306 8.32236 16.7094 8.38514 16.5059 8.43518C16.0344 8.55117 15.5449 8.57933 15.065 8.5067C14.9356 8.56019 14.8036 8.60721 14.6695 8.64768C14.6333 8.66375 14.5971 8.67954 14.5609 8.69502C14.2377 8.83333 13.9099 8.9505 13.5688 9.03629L13.485 9.05719C13.3055 9.10146 13.1105 9.14505 12.9194 9.15874C12.888 9.17087 12.8542 9.18112 12.8172 9.19014C12.6432 9.23241 12.4626 9.24577 12.2843 9.23085C12.1106 9.21624 11.9851 9.04064 12.0808 8.87622C12.1507 8.75625 12.2212 8.63658 12.2924 8.51723C12.0448 8.62042 11.7891 8.70621 11.5312 8.77894C11.2708 8.85229 11.0067 8.91414 10.7422 8.97102C10.6009 9.00116 10.4589 9.02789 10.3179 9.05804C10.2169 9.07949 10.0618 9.09068 9.97946 9.15719C9.88846 9.23023 9.86267 9.40055 9.82815 9.50561C9.78278 9.64205 9.74022 9.77912 9.70138 9.91774C9.62404 10.1944 9.56066 10.475 9.51157 10.7585C9.46248 11.0422 9.42951 11.3288 9.41118 11.6163C9.39288 11.9035 9.40092 12.1926 9.37144 12.4785C9.35556 12.6302 9.19278 12.7082 9.07254 12.6022C9.05843 12.5898 9.04421 12.5772 9.03014 12.5645L9.00915 12.5453C8.90628 12.4521 8.80654 12.3532 8.72423 12.242C8.70932 12.2215 8.69503 12.2 8.68167 12.1783C8.67949 12.1783 8.67763 12.1776 8.67545 12.1761L8.65263 12.1589C8.40134 11.9718 7.98152 11.7279 7.73649 12.0387C7.65841 12.1377 7.61844 12.2638 7.58526 12.3855L7.52704 12.6032C7.48939 12.7453 7.45395 12.8882 7.43321 13.0336C7.3863 13.3593 7.40991 13.7348 7.63396 13.9959C7.72344 14.1003 7.8468 14.1749 7.98441 14.1945C8.06118 14.205 8.137 14.192 8.21312 14.1824C8.29049 14.1727 8.36502 14.1883 8.44242 14.1808C8.56546 14.1687 8.61921 14.316 8.57323 14.4086C8.54837 14.4584 8.51914 14.5012 8.48592 14.5376C8.51261 14.5606 8.53812 14.5855 8.56267 14.6116C8.63537 14.6349 8.70059 14.6849 8.7494 14.7511C8.78886 14.8046 8.80934 14.8627 8.81279 14.9239C8.8171 14.9392 8.82083 14.9547 8.82428 14.9706L8.89094 15.0788C8.9056 15.1025 8.92021 15.126 8.93486 15.149C9.10451 15.4163 9.29283 15.6425 9.52679 15.8558C9.75206 16.0609 9.99655 16.2446 10.2082 16.4646L10.2331 16.4908C10.4304 16.6987 10.6383 16.9505 10.5611 17.2528C10.5413 17.3305 10.4328 17.3865 10.362 17.334C10.1342 17.1649 10.0195 16.897 9.82631 16.6918C9.62743 16.4805 9.40714 16.2906 9.2077 16.0798C9.01906 15.8809 8.87024 15.6556 8.7581 15.4076C8.71333 15.457 8.64811 15.4921 8.55769 15.5058C8.40234 15.5291 8.25752 15.438 8.18982 15.3034C8.14629 15.3227 8.10189 15.3401 8.05711 15.3538C7.8216 15.4259 7.67342 15.1639 7.76228 14.9703C7.80979 14.8664 7.86914 14.7763 7.9428 14.7005C7.71254 14.6688 7.47827 14.5497 7.32695 14.4012C6.9473 14.0279 6.8951 13.4669 6.98054 12.968C7.02591 12.7035 7.10417 12.4359 7.20581 12.1876C7.22348 12.1444 7.24247 12.1009 7.26326 12.058C7.25176 12.0577 7.23995 12.0527 7.2325 12.0431C7.16383 11.9492 7.08028 11.8724 7.02929 11.7674C6.98238 11.671 6.93021 11.5734 6.8932 11.473C6.81711 11.2676 6.77983 11.0357 6.75497 10.8185C6.7037 10.3737 6.72356 9.93173 6.79163 9.48976C6.90749 8.73698 7.18738 8.01658 7.59972 7.38446C7.57727 7.37266 7.55575 7.35841 7.5357 7.34157L7.5258 7.33293L7.50971 7.31838C7.39204 7.21187 7.4022 7.01223 7.50971 6.90435L7.54366 6.87031C7.58666 6.82758 7.62373 6.79373 7.69318 6.74721C7.70343 6.74034 7.71391 6.73387 7.7245 6.72784C7.68815 6.66065 7.67553 6.58207 7.70086 6.49539C7.7891 6.19341 8.22347 6.2041 8.49878 6.33579C8.80337 6.06386 9.14111 5.8278 9.50719 5.63665C10.3791 5.18163 11.3649 4.86429 12.3275 4.67035ZM7.82074 12.624C7.98355 12.5708 8.1998 12.6824 8.34614 12.7495C8.53164 12.8347 8.68948 12.9606 8.84234 13.0936C8.91847 13.1601 8.93211 13.2689 8.91319 13.3618C8.91129 13.3711 8.90946 13.3808 8.90725 13.3904C8.88706 13.4896 8.77644 13.5676 8.67857 13.5648C8.47381 13.5592 8.37628 13.3823 8.26036 13.2325C8.24672 13.2568 8.22963 13.2791 8.20847 13.2959L8.19418 13.3071C8.14608 13.3438 8.09306 13.373 8.0295 13.3702C7.98445 13.368 7.94129 13.3565 7.90149 13.3357C7.80206 13.2832 7.75829 13.1545 7.78529 13.0498C7.80206 12.9839 7.84059 12.9323 7.89093 12.8965L7.87216 12.8837C7.83202 12.8558 7.7954 12.8263 7.76687 12.7828L7.76043 12.7725H7.76292C7.73184 12.7191 7.75207 12.6463 7.82074 12.624Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4896 15.7518C15.2607 15.8181 15.015 15.824 14.7817 15.7555C14.5701 15.6934 14.3528 15.5567 14.197 15.3758C14.0587 15.2151 13.9691 15.0198 13.9726 14.8113C13.973 14.7875 13.9815 14.7677 13.9946 14.7522C14.0087 14.7356 14.0284 14.7242 14.0495 14.7193C14.0712 14.7142 14.0941 14.716 14.1136 14.7249C14.1313 14.7329 14.1464 14.7465 14.1559 14.7665C14.1798 14.7979 14.2037 14.8289 14.2276 14.859C14.42 15.0968 14.6064 15.2744 14.8958 15.3381C15.0528 15.3727 15.2096 15.3574 15.3535 15.3046C15.5076 15.2481 15.6468 15.1488 15.7559 15.0218C15.8052 14.9644 15.8634 14.9409 15.9203 14.9405C15.9848 14.9401 16.0486 14.9701 16.0966 15.018C16.1438 15.0651 16.1754 15.1291 16.1783 15.1961C16.1808 15.2548 16.1617 15.3162 16.1107 15.371C15.9427 15.5514 15.7251 15.6836 15.4896 15.7518ZM15.4826 12.7745C15.7172 12.9172 16.0747 13.2498 15.8223 13.6035C15.5252 13.9153 15.0974 13.5578 14.8866 13.3961C14.6912 13.2707 14.4716 13.5931 14.6529 13.7394C16.1761 14.8675 16.7943 12.8118 15.6012 12.6068C15.4699 12.5842 15.4211 12.7304 15.4826 12.7745ZM13.2878 12.1467C13.2124 12.0985 13.1236 12.0819 13.0253 12.1267C12.9485 12.1616 12.8138 12.2781 12.72 12.4313C12.6558 12.5361 12.6103 12.659 12.6198 12.787C12.622 12.8168 12.611 12.8387 12.5937 12.8549C12.58 12.8677 12.5602 12.8771 12.537 12.8801C12.5173 12.8826 12.4953 12.8803 12.4773 12.8747C12.4432 12.8641 12.4251 12.8419 12.4183 12.8238C12.3527 12.6494 12.381 12.4548 12.4546 12.2791C12.5539 12.0421 12.7342 11.8436 12.8524 11.7796C13.0546 11.6701 13.2931 11.665 13.4956 11.7766C13.668 11.8716 13.7757 12.025 13.8829 12.1813C13.9057 12.2146 13.9283 12.2476 13.9517 12.28C13.9986 12.3449 14.0032 12.4093 13.9851 12.4646C13.965 12.5257 13.9137 12.5774 13.8497 12.6044C13.7904 12.6294 13.7217 12.6329 13.6609 12.6072C13.6095 12.5856 13.5623 12.5433 13.5325 12.4716C13.4822 12.3508 13.3985 12.2176 13.2878 12.1467ZM17.1176 12.4154C17.066 12.4423 17.0256 12.4505 16.9683 12.4333C16.9366 12.4238 16.9053 12.4055 16.8808 12.381C16.8565 12.3567 16.839 12.3265 16.8321 12.2929C16.8154 12.2102 16.7701 12.1327 16.7056 12.0822C16.6505 12.0391 16.5809 12.0162 16.5037 12.0291C16.4205 12.043 16.3411 12.0965 16.2865 12.1595C16.2682 12.1805 16.2539 12.2045 16.2395 12.2282C16.2126 12.2727 16.1864 12.314 16.1493 12.3467C16.1352 12.3591 16.114 12.3677 16.0934 12.3677C16.0851 12.3677 16.0766 12.3664 16.0685 12.3639C15.9856 12.2806 15.9697 12.2175 15.9724 12.1549C15.9752 12.0892 16.001 12.0227 16.0429 11.9607C16.141 11.8152 16.3273 11.6959 16.453 11.6688C16.6251 11.6318 16.7961 11.6762 16.9331 11.7724C17.0742 11.8714 17.1787 12.025 17.2113 12.1982C17.2191 12.2399 17.2158 12.2849 17.1999 12.3239C17.1844 12.3621 17.1573 12.3947 17.1176 12.4154ZM13.6674 10.5953C13.5641 10.696 13.4418 10.7115 13.3181 10.7254C13.2494 10.7332 13.1945 10.7395 13.1405 10.7517C12.9921 10.7852 12.8454 10.8356 12.7116 10.9083C12.5717 10.9843 12.4192 11.0759 12.3095 11.1933C12.2834 11.2213 12.2589 11.2506 12.2342 11.28C12.2118 11.3068 12.1902 11.3325 12.1674 11.3574C12.1412 11.386 12.1163 11.4159 12.0916 11.4458C12.0763 11.471 12.0733 11.4772 12.0702 11.4836C12.0656 11.4933 12.0602 11.5041 12.054 11.5158C12.0456 11.5317 12.0357 11.5492 12.0254 11.565C12.0082 11.5939 11.999 11.6019 11.991 11.6054C11.9778 11.6113 11.9652 11.6142 11.953 11.6126C11.9416 11.6112 11.9308 11.6057 11.9202 11.5967C11.8672 11.5519 11.8515 11.4783 11.8531 11.4002C11.8556 11.2817 11.8993 11.1505 11.9395 11.0699C12.0332 10.8824 12.1631 10.6876 12.3193 10.5477C12.4975 10.3881 12.6925 10.2672 12.9164 10.1839C13.0556 10.1321 13.2168 10.0846 13.3684 10.0906C13.4775 10.0949 13.5817 10.1274 13.6678 10.2084C13.7206 10.2582 13.746 10.329 13.746 10.3997C13.746 10.4718 13.7196 10.5444 13.6674 10.5953ZM17.3278 11.5173C17.3212 11.5281 17.3121 11.5355 17.302 11.5399C17.2914 11.5446 17.2796 11.546 17.2682 11.544C17.2569 11.5421 17.2461 11.537 17.2376 11.5292C17.2294 11.5216 17.2232 11.5117 17.2204 11.4995C17.1518 11.1981 17.0186 10.9739 16.7344 10.8293C16.5945 10.7582 16.4337 10.713 16.2815 10.677C16.2373 10.6665 16.1906 10.6597 16.1435 10.6529C15.996 10.6313 15.8474 10.6066 15.7512 10.4874C15.6933 10.4155 15.6689 10.3236 15.6827 10.2396C15.6956 10.1605 15.7419 10.0879 15.8259 10.0444C16.0351 9.93624 16.295 10.0424 16.5063 10.1328C16.5219 10.1395 16.5373 10.1461 16.5524 10.1525C16.7589 10.2397 16.9474 10.3548 17.1022 10.5195C17.2251 10.6501 17.339 10.8432 17.3848 11.0419C17.423 11.2072 17.414 11.3759 17.3278 11.5173Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1407 16.2538C15.8513 15.9959 15.527 15.4775 15.1113 15.8877C15.0085 16.0036 14.9668 16.2634 14.8096 16.3144C14.6008 16.3822 14.3939 16.1612 14.3227 15.9915C14.0316 15.0486 15.2351 14.7899 15.9207 14.9423C16.2556 15.0799 16.5023 15.6337 16.5173 15.9228C16.5269 16.117 16.3625 16.4027 16.1407 16.2538ZM18.3237 14.8005C18.3209 14.7879 18.3169 14.7766 18.3122 14.7663C18.1842 14.7179 18.0829 14.7673 18.0204 14.8595C18.0224 14.8824 18.0293 14.9056 18.0336 14.9283C17.9853 15.0301 17.9417 15.156 17.8763 15.2439C17.8634 15.2449 17.85 15.2436 17.8371 15.2398C16.7523 15.3531 17.2819 14.2178 16.1817 13.9358C15.3312 13.7954 13.794 13.9562 13.3928 14.8417C13.0764 16.2562 11.4674 15.2706 10.9392 14.535C10.3755 13.8655 10.011 13.0475 9.65963 12.2537C9.58537 12.0857 9.35361 12.2058 9.37881 12.367C9.054 13.0188 9.06481 13.8017 8.98437 14.5158C8.84753 15.9404 8.71421 17.9382 10.0374 18.8081C11.7614 20.7574 16.0665 21.4453 18.055 19.6542C18.7434 18.1738 18.6585 16.3678 18.3237 14.8005Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1908 10.463C17.9201 10.463 18.3363 10.6199 18.4888 10.6321L18.4934 10.6324C18.5568 10.6365 18.6137 10.6418 18.6734 10.6649C18.893 10.7495 18.9287 10.9798 18.8006 11.125C18.7916 11.4253 18.8311 11.7763 18.7634 12.0776C18.6798 13.3479 18.0826 13.5623 17.7431 13.6405C17.5727 13.6798 17.3707 13.6954 17.1896 13.654C16.8808 13.6424 16.5755 13.5457 16.3142 13.3773C15.9504 13.1426 15.6802 12.7818 15.5925 12.3537C15.551 12.1496 15.5315 11.9371 15.5542 11.7297L15.5575 11.7011C15.4392 11.6445 15.3022 11.6338 15.1609 11.6288C15.0935 11.6264 15.027 11.6243 14.9623 11.6271C14.8992 11.6342 14.8368 11.6436 14.7742 11.6564C14.7058 11.677 14.6413 11.7111 14.5817 11.765L14.5776 11.8437C14.5664 12.0403 14.5406 12.2375 14.5008 12.4304C14.442 12.7151 14.3475 12.9869 14.1463 13.1888C14.0782 13.2905 13.9939 13.3814 13.8916 13.46C13.52 13.7462 13.0151 13.8513 12.5517 13.8117C11.611 13.7314 11.0672 12.9844 10.9419 12.6651L10.9344 12.6458C10.8439 12.4084 10.7718 12.1004 10.4857 12.0494L10.4249 12.0384C10.2944 12.0139 10.1739 11.9798 10.0974 11.8524C10.0638 11.7968 10.0466 11.7346 10.0423 11.6712C9.99769 11.6746 9.9531 11.6779 9.90867 11.6811C9.5542 11.7561 7.4281 11.8196 7.2584 11.8196C7.2584 11.8196 6.93219 11.957 6.79446 11.8506C6.699 11.7766 6.66759 11.678 6.72014 11.5662C6.79943 11.3981 7.16524 11.297 7.32768 11.265C7.32768 11.265 9.94896 11.2868 10.1376 11.251C10.2544 11.1306 10.4632 11.1471 10.6376 11.128C10.7821 11.025 10.9841 10.956 11.1437 10.9098C11.1763 10.8975 11.2085 10.8856 11.2398 10.8743C11.5324 10.7701 11.8365 10.7149 12.1453 10.6852C12.4637 10.6549 12.7831 10.6686 13.0996 10.712C13.233 10.7301 13.3652 10.7535 13.4964 10.7842C13.7314 10.8151 13.965 10.8662 14.2 10.9267L14.247 10.939C14.4945 11.0039 14.7489 11.06 15.0051 11.016C15.2137 10.9804 15.4143 10.9001 15.6067 10.8133L15.6317 10.8019C16.0546 10.6088 16.715 10.463 17.1908 10.463ZM13.4709 11.1693C13.3149 11.1349 13.2483 11.3756 13.4048 11.41C13.5156 11.4344 13.6096 11.4903 13.6731 11.585L13.6797 11.5953C13.7649 11.7309 13.9803 11.6057 13.8945 11.4693C13.798 11.3158 13.6481 11.2082 13.4709 11.1693ZM18.0411 11.02C17.986 10.9813 17.9028 11.01 17.8709 11.0648C17.8357 11.1251 17.8588 11.1923 17.9103 11.2317L17.9155 11.2356C17.9628 11.2689 18.0088 11.3286 18.0146 11.3898L18.0151 11.3975C18.0213 11.5576 18.2701 11.5584 18.2639 11.3975C18.2578 11.24 18.1666 11.1085 18.0411 11.02Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_403_8078">
          <rect width="25" height="25" rx="12.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const svgStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <g clipPath="url(#clip0_403_5842)">
        <path
          d="M20.2783 23.3158L12.5002 17.8277L4.72207 23.3158L7.70853 14.4526L-0.0654297 8.99944H9.53249L12.5002 0.121216L15.4679 8.99944H25.0648L17.2919 14.4526L20.2783 23.3158Z"
          fill="#FFD21F"
        />
      </g>
      <defs>
        <clipPath id="clip0_403_5842">
          <rect width="25" height="24.0006" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const svgFavorite = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <g clipPath="url(#clip0_403_5784)">
        <path
          d="M21.1458 2.23596C19.7852 2.2564 18.4542 2.62312 17.2873 3.29911C16.1204 3.9751 15.159 4.93641 14.5 6.08596C13.841 4.93641 12.8795 3.9751 11.7127 3.29911C10.5458 2.62312 9.2148 2.2564 7.85416 2.23596C5.68513 2.32695 3.64155 3.24309 2.16989 4.78423C0.698237 6.32537 -0.0818749 8.36624 -9.70857e-06 10.461C-9.70857e-06 15.7658 5.78307 21.5595 10.6333 25.4876C11.7163 26.3663 13.0855 26.848 14.5 26.848C15.9145 26.848 17.2837 26.3663 18.3667 25.4876C23.2169 21.5595 29 15.7658 29 10.461C29.0819 8.36624 28.3017 6.32537 26.8301 4.78423C25.3584 3.24309 23.3149 2.32695 21.1458 2.23596ZM16.8139 23.7026C16.1663 24.2292 15.3467 24.518 14.5 24.518C13.6532 24.518 12.8337 24.2292 12.186 23.7026C5.97762 18.6731 2.41666 13.8478 2.41666 10.461C2.33406 8.9848 2.85935 7.53698 3.87797 6.43328C4.89659 5.32958 6.3259 4.65954 7.85416 4.5693C9.38242 4.65954 10.8117 5.32958 11.8303 6.43328C12.849 7.53698 13.3743 8.9848 13.2917 10.461C13.2917 10.7704 13.419 11.0671 13.6456 11.2859C13.8722 11.5047 14.1795 11.6276 14.5 11.6276C14.8205 11.6276 15.1278 11.5047 15.3544 11.2859C15.581 11.0671 15.7083 10.7704 15.7083 10.461C15.6257 8.9848 16.151 7.53698 17.1696 6.43328C18.1883 5.32958 19.6176 4.65954 21.1458 4.5693C22.6741 4.65954 24.1034 5.32958 25.122 6.43328C26.1406 7.53698 26.6659 8.9848 26.5833 10.461C26.5833 13.8478 23.0224 18.6731 16.8139 23.698V23.7026Z"
          fill="#696969"
        />
      </g>
      <defs>
        <clipPath id="clip0_403_5784">
          <rect width="29" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const svgViews = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
    >
      <path
        d="M12 14.0024C14.2083 14.0024 15.9985 12.2122 15.9985 10.0039C15.9985 7.79556 14.2083 6.00537 12 6.00537C9.79165 6.00537 8.00146 7.79556 8.00146 10.0039C8.00146 12.2122 9.79165 14.0024 12 14.0024Z"
        fill="#696969"
      />
      <path
        d="M23.2668 7.42398C21.7164 4.89892 18.1897 0.662476 12 0.662476C5.81027 0.662476 2.28358 4.89892 0.733158 7.42398C-0.244386 9.0051 -0.244386 11.0029 0.733158 12.5841C2.28358 15.1091 5.81027 19.3456 12 19.3456C18.1897 19.3456 21.7164 15.1091 23.2668 12.5841C24.2443 11.0029 24.2443 9.0051 23.2668 7.42398ZM12 16.0018C8.68752 16.0018 6.0022 13.3165 6.0022 10.004C6.0022 6.69155 8.68752 4.00623 12 4.00623C15.3124 4.00623 17.9978 6.69155 17.9978 10.004C17.9944 13.3151 15.3111 15.9985 12 16.0018Z"
        fill="#696969"
      />
    </svg>
  );

  const svgLocation = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_403_5782)">
        <path
          d="M12 0.0424805C9.35398 0.0453916 6.81712 1.09776 4.94598 2.96871C3.07484 4.83966 2.02222 7.37642 2.01904 10.0225C2.01904 12.5925 4.00904 16.6145 7.93404 21.9765C8.4013 22.6166 9.0131 23.1374 9.71964 23.4964C10.4262 23.8554 11.2075 24.0425 12 24.0425C12.7926 24.0425 13.5739 23.8554 14.2804 23.4964C14.987 23.1374 15.5988 22.6166 16.066 21.9765C19.991 16.6145 21.981 12.5925 21.981 10.0225C21.9779 7.37642 20.9252 4.83966 19.0541 2.96871C17.183 1.09776 14.6461 0.0453916 12 0.0424805ZM12 14.0005C11.2089 14.0005 10.4356 13.7659 9.77776 13.3264C9.11997 12.8868 8.60728 12.2621 8.30452 11.5312C8.00177 10.8003 7.92256 9.99605 8.0769 9.22012C8.23124 8.4442 8.61221 7.73146 9.17162 7.17205C9.73103 6.61264 10.4438 6.23168 11.2197 6.07734C11.9956 5.923 12.7999 6.00221 13.5308 6.30496C14.2617 6.60771 14.8864 7.1204 15.3259 7.7782C15.7654 8.436 16 9.20936 16 10.0005C16 11.0613 15.5786 12.0788 14.8285 12.8289C14.0783 13.5791 13.0609 14.0005 12 14.0005Z"
          fill="#696969"
        />
      </g>
      <defs>
        <clipPath id="clip0_403_5782">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const img =
    "https://s3-alpha-sig.figma.com/img/2b2b/6aef/dcb3b2ccb96f89eb652bc254a5c0afb1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAhAdu5OmD8lvhB~krSDZL6L09gAleLx44xBjA1hFPV~O5Otzr3FyH3jGDVYzL8IWCd48vlJcKPGU0wsmtOpmKMKjSEp5LhnwjCZV6V0MCZepUrinazsg-6rfFHQXMIKIwBclJeDdij4s~5nj7Um0jgyVQBNH~1nki5K6INrKI-Cp2iZK5uSisg9YDnMBYKwaByfxt9WD9lklz1umfF~Cmmg1HeqhV1v21dv3oVx7FrteI7rIBa7R5jVgx9U5ZHcnJ9uN~jghM-2oppCOm25Ld036EaF2IlMhzN9yF92-JcFKZf7ooAEMBipO5lyK0~FTsUGT2OoSZO5aWwqhMKK9A__";
  return (
    <div className="flex relative bg-concrete rounded-lg p-4 shadow-md mb-4 w-[824px] h-[200px]">
      <img className="w-[219px] h-[169px] border-[0.25px] rounded-[5px]" src={img} alt="imagen de la card" />
      <div className="text-[14px]">
        <div className="absolute right-6">{svgFavorite}</div>
        <div>
          <h3 className="text-lg font-bold mb-2 text-[28px] px-4">{props.name}</h3>
          <div className="flex">
            <div className="flex px-4 mt-2">
              {svgUser}
              <label className="font-[400] ml-1">JuanP</label>
            </div>
            <div className="flex px-4">
              {svgStar}
              <label className="font-[400] ml-1">4.5</label>
            </div>
          </div>
          <p className="mb-2 mt-4 px-4">Descripción: {props.description}</p>
          <div className="flex mt-8">
            <div className="flex px-4">
              {svgLocation}
              <label className="font-[400]">0,5 Km</label>
            </div>
            <div className="flex">
              {svgViews}
              <label className="font-[400] ml-1">2</label>
            </div>
            <label className="absolute right-6 text-red-orange font-bold text-[22px]">
              Nuevo!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
