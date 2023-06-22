import React, { memo } from 'react';

interface IProps {
  size?: string;
  width?: string;
  height?: string;
  fill?: string;
  d?: string;
}

export const Bookmark = memo(
  ({
    size = '28',
    fill = 'white',
    d = 'M10.2539 19.8906C10.0625 20.0273 9.86198 20.041 9.65234 19.9316C9.44271 19.8223 9.33789 19.6491 9.33789 19.4121V10.0879C9.33789 9.60482 9.50651 9.19466 9.84375 8.85742C10.1901 8.51107 10.6048 8.33789 11.0879 8.33789H16.9121C17.3952 8.33789 17.8053 8.51107 18.1426 8.85742C18.4889 9.19466 18.6621 9.60482 18.6621 10.0879V19.4121C18.6621 19.6491 18.5573 19.8223 18.3477 19.9316C18.138 20.041 17.9375 20.0273 17.7461 19.8906L14 17.2109L10.2539 19.8906Z',
  }: IProps) => {
    console.log('Bookmark');

    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.4" width={size} height={size} rx="4" fill="#323438" />
        <path d={d} fill={fill} />
      </svg>
    );
  }
);

export const IconStar = memo(({ size = '14', fill = '#00C362' }: IProps) => {
  console.log('IconStar');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.77972 4.50507L6.44769 1.12811C6.54795 0.909363 6.72113 0.799988 6.96722 0.799988C7.21332 0.799988 7.38649 0.909363 7.48675 1.12811L9.15472 4.50507L12.8871 5.05194C13.1241 5.0884 13.2791 5.22056 13.352 5.44843C13.4249 5.67629 13.3748 5.87681 13.2016 6.04999L10.5082 8.67499L11.1508 12.3801C11.1873 12.617 11.1052 12.8085 10.9047 12.9543C10.7133 13.1001 10.5128 13.1138 10.3032 12.9953L6.96722 11.2453L3.63128 12.9953C3.42165 13.1138 3.21657 13.1001 3.01605 12.9543C2.82464 12.8085 2.74717 12.617 2.78363 12.3801L3.42621 8.67499L0.732847 6.04999C0.55967 5.87681 0.50954 5.67629 0.582456 5.44843C0.655373 5.22056 0.810321 5.0884 1.0473 5.05194L4.77972 4.50507Z"
        fill={fill}
      />
    </svg>
  );
});

export const IconWon = memo(({ size = '15', fill = '#2196F3' }: IProps) => {
  console.log('IconWon');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.32812 0C8.33854 0 9.29167 0.192708 10.1875 0.578125C11.0729 0.963542 11.849 1.48958 12.5156 2.15625C13.1823 2.8125 13.7031 3.58854 14.0781 4.48438C14.4635 5.36979 14.6562 6.31771 14.6562 7.32812C14.6562 8.34896 14.4635 9.30208 14.0781 10.1875C13.7031 11.0833 13.1823 11.8646 12.5156 12.5312C11.849 13.1875 11.0729 13.7083 10.1875 14.0938C9.29167 14.4792 8.33854 14.6719 7.32812 14.6719C6.31771 14.6719 5.36458 14.4792 4.46875 14.0938C3.58333 13.7083 2.80729 13.1875 2.14062 12.5312C1.47396 11.8646 0.953125 11.0833 0.578125 10.1875C0.192708 9.30208 0 8.34896 0 7.32812C0 6.31771 0.192708 5.36979 0.578125 4.48438C0.953125 3.58854 1.47396 2.8125 2.14062 2.15625C2.80729 1.48958 3.58333 0.963542 4.46875 0.578125C5.36458 0.192708 6.31771 0 7.32812 0ZM7.32812 1.32812C6.49479 1.32812 5.71875 1.48958 5 1.8125C4.27083 2.125 3.63021 2.55208 3.07812 3.09375C2.53646 3.63542 2.10938 4.27083 1.79688 5C1.48438 5.72917 1.32812 6.50521 1.32812 7.32812C1.32812 8.16146 1.48438 8.94271 1.79688 9.67188C2.10938 10.401 2.53646 11.0365 3.07812 11.5781C3.63021 12.1198 4.27083 12.5469 5 12.8594C5.71875 13.1719 6.49479 13.3281 7.32812 13.3281C8.16146 13.3281 8.9375 13.1719 9.65625 12.8594C10.3854 12.5469 11.0208 12.1198 11.5625 11.5781C12.1146 11.0365 12.5469 10.401 12.8594 9.67188C13.1719 8.94271 13.3281 8.16146 13.3281 7.32812C13.3281 6.50521 13.1719 5.72917 12.8594 5C12.5469 4.27083 12.1146 3.63542 11.5625 3.09375C11.0208 2.55208 10.3854 2.125 9.65625 1.8125C8.9375 1.48958 8.16146 1.32812 7.32812 1.32812ZM10.1562 4.71875C10.2188 4.57292 10.3281 4.46354 10.4844 4.39062C10.6406 4.31771 10.7969 4.30729 10.9531 4.35938C11.1302 4.42188 11.2604 4.53646 11.3438 4.70312C11.4271 4.85938 11.4427 5.02604 11.3906 5.20312L11.1406 6H11.3281C11.5156 6 11.6719 6.06771 11.7969 6.20312C11.9323 6.32812 12 6.48438 12 6.67188C12 6.83854 11.9427 6.98438 11.8281 7.10938C11.7135 7.23438 11.5729 7.30729 11.4062 7.32812H11.3281H10.7031L9.67188 10.5625C9.67188 10.5625 9.66667 10.5677 9.65625 10.5781C9.65625 10.5781 9.65625 10.5833 9.65625 10.5938V10.6094C9.64583 10.6094 9.64062 10.6146 9.64062 10.625C9.64062 10.6354 9.63542 10.6406 9.625 10.6406C9.625 10.651 9.61979 10.6615 9.60938 10.6719C9.60938 10.6823 9.60938 10.6875 9.60938 10.6875C9.59896 10.6979 9.59375 10.7031 9.59375 10.7031C9.59375 10.7031 9.59375 10.7083 9.59375 10.7188C9.58333 10.7188 9.57292 10.724 9.5625 10.7344C9.5625 10.7448 9.5625 10.75 9.5625 10.75C9.5625 10.75 9.55729 10.7552 9.54688 10.7656C9.54688 10.7656 9.54688 10.7708 9.54688 10.7812C9.53646 10.7812 9.52604 10.7865 9.51562 10.7969C9.51562 10.7969 9.51562 10.8021 9.51562 10.8125C9.50521 10.8125 9.5 10.8177 9.5 10.8281C9.5 10.8281 9.49479 10.8281 9.48438 10.8281C9.48438 10.8385 9.47917 10.8438 9.46875 10.8438C9.46875 10.8438 9.46354 10.849 9.45312 10.8594C9.45312 10.8594 9.44792 10.8646 9.4375 10.875C9.42708 10.875 9.41667 10.8802 9.40625 10.8906C9.40625 10.8906 9.40104 10.8906 9.39062 10.8906C9.39062 10.901 9.38542 10.9062 9.375 10.9062C9.36458 10.9167 9.35417 10.9271 9.34375 10.9375C9.34375 10.9375 9.33854 10.9375 9.32812 10.9375C9.31771 10.9375 9.30208 10.9427 9.28125 10.9531C9.27083 10.9635 9.26042 10.9688 9.25 10.9688L9.3125 10.9531C9.30208 10.9531 9.29167 10.9531 9.28125 10.9531C9.28125 10.9531 9.27604 10.9583 9.26562 10.9688H9.25C9.23958 10.9688 9.23438 10.9688 9.23438 10.9688C9.23438 10.9688 9.22917 10.9688 9.21875 10.9688C9.21875 10.9792 9.21354 10.9844 9.20312 10.9844C9.19271 10.9844 9.18229 10.9844 9.17188 10.9844C9.16146 10.9844 9.15625 10.9844 9.15625 10.9844C9.14583 10.9948 9.13542 11 9.125 11C9.11458 11 9.10417 11 9.09375 11C9.09375 11 9.08854 11 9.07812 11C9.06771 11 9.05729 11 9.04688 11C9.03646 11 9.02604 11 9.01562 11C9.00521 11 8.99479 11 8.98438 11C8.97396 11 8.96354 11 8.95312 11C8.95312 11 8.94792 11 8.9375 11C8.9375 11 8.9375 10.9948 8.9375 10.9844C8.91667 10.9844 8.89583 10.9844 8.875 10.9844C8.86458 10.974 8.85417 10.9688 8.84375 10.9688L8.89062 10.9844C8.88021 10.9844 8.875 10.9844 8.875 10.9844C8.875 10.9844 8.86979 10.9792 8.85938 10.9688H8.84375C8.83333 10.9688 8.82812 10.9688 8.82812 10.9688C8.81771 10.9583 8.80729 10.9531 8.79688 10.9531C8.79688 10.9531 8.79167 10.9531 8.78125 10.9531C8.77083 10.9427 8.76562 10.9375 8.76562 10.9375C8.76562 10.9375 8.76042 10.9375 8.75 10.9375C8.75 10.9375 8.74479 10.9375 8.73438 10.9375C8.72396 10.9271 8.71875 10.9167 8.71875 10.9062C8.70833 10.9062 8.70312 10.9062 8.70312 10.9062C8.70312 10.9062 8.69792 10.9062 8.6875 10.9062C8.6875 10.8958 8.68229 10.8906 8.67188 10.8906C8.66146 10.8802 8.65625 10.875 8.65625 10.875C8.64583 10.875 8.63542 10.875 8.625 10.875C8.625 10.8646 8.625 10.8594 8.625 10.8594C8.625 10.849 8.61979 10.8438 8.60938 10.8438C8.60938 10.8438 8.60417 10.8385 8.59375 10.8281C8.59375 10.8281 8.58854 10.8281 8.57812 10.8281C8.57812 10.8177 8.57812 10.8125 8.57812 10.8125C8.56771 10.8021 8.55729 10.7969 8.54688 10.7969C8.54688 10.7865 8.54688 10.7812 8.54688 10.7812C8.53646 10.7708 8.53125 10.7656 8.53125 10.7656C8.53125 10.7552 8.52604 10.75 8.51562 10.75C8.51562 10.75 8.51042 10.7448 8.5 10.7344C8.5 10.724 8.5 10.7188 8.5 10.7188C8.5 10.7083 8.49479 10.7031 8.48438 10.7031C8.48438 10.7031 8.48438 10.6979 8.48438 10.6875C8.47396 10.6875 8.46875 10.6875 8.46875 10.6875C8.46875 10.6771 8.46354 10.6667 8.45312 10.6562C8.45312 10.6458 8.45312 10.6406 8.45312 10.6406C8.45312 10.6302 8.44792 10.625 8.4375 10.625C8.4375 10.6146 8.43229 10.6042 8.42188 10.5938C8.42188 10.5729 8.41667 10.5521 8.40625 10.5312L8.42188 10.5938C8.42188 10.5833 8.42188 10.5781 8.42188 10.5781C8.42188 10.5677 8.41667 10.5625 8.40625 10.5625V10.5312L7.375 7.32812H7.28125L6.25 10.5625C6.23958 10.5625 6.23438 10.5677 6.23438 10.5781C6.23438 10.5781 6.23438 10.5833 6.23438 10.5938L6.25 10.5312C6.23958 10.5521 6.22917 10.5729 6.21875 10.5938C6.21875 10.6042 6.21875 10.6146 6.21875 10.625C6.20833 10.625 6.20312 10.6302 6.20312 10.6406C6.20312 10.6406 6.20312 10.6458 6.20312 10.6562C6.19271 10.6667 6.1875 10.6771 6.1875 10.6875C6.1875 10.6875 6.18229 10.6875 6.17188 10.6875C6.17188 10.6979 6.16667 10.7031 6.15625 10.7031C6.15625 10.7031 6.15625 10.7083 6.15625 10.7188C6.15625 10.7188 6.15104 10.724 6.14062 10.7344C6.14062 10.7448 6.14062 10.75 6.14062 10.75C6.13021 10.75 6.125 10.7552 6.125 10.7656C6.125 10.7656 6.11979 10.7708 6.10938 10.7812C6.10938 10.7812 6.10417 10.7865 6.09375 10.7969C6.09375 10.7969 6.08854 10.8021 6.07812 10.8125C6.07812 10.8125 6.07292 10.8177 6.0625 10.8281C6.05208 10.8385 6.04167 10.8438 6.03125 10.8438C6.03125 10.8438 6.03125 10.849 6.03125 10.8594C6.03125 10.8594 6.02604 10.8646 6.01562 10.875C6.01562 10.875 6.01042 10.875 6 10.875C6 10.875 5.99479 10.8802 5.98438 10.8906C5.97396 10.8906 5.96875 10.8958 5.96875 10.9062C5.95833 10.9062 5.95312 10.9062 5.95312 10.9062C5.95312 10.9062 5.94792 10.9062 5.9375 10.9062C5.9375 10.9167 5.93229 10.9271 5.92188 10.9375C5.91146 10.9375 5.90625 10.9375 5.90625 10.9375C5.89583 10.9375 5.89062 10.9375 5.89062 10.9375C5.89062 10.9375 5.88542 10.9427 5.875 10.9531C5.86458 10.9531 5.85417 10.9531 5.84375 10.9531C5.84375 10.9531 5.83854 10.9583 5.82812 10.9688C5.82812 10.9688 5.82292 10.9688 5.8125 10.9688H5.79688C5.78646 10.9792 5.78125 10.9844 5.78125 10.9844C5.78125 10.9844 5.77604 10.9844 5.76562 10.9844L5.8125 10.9688C5.80208 10.9688 5.78646 10.974 5.76562 10.9844C5.75521 10.9844 5.73958 10.9844 5.71875 10.9844C5.71875 10.9948 5.71354 11 5.70312 11C5.69271 11 5.68229 11 5.67188 11C5.66146 11 5.65104 11 5.64062 11C5.64062 11 5.63542 11 5.625 11C5.625 11 5.61979 11 5.60938 11C5.60938 11 5.60417 11 5.59375 11C5.59375 11 5.58854 11 5.57812 11C5.56771 11 5.55729 11 5.54688 11C5.54688 11 5.54167 11 5.53125 11C5.53125 11 5.52604 11 5.51562 11C5.51562 11 5.51042 10.9948 5.5 10.9844C5.5 10.9844 5.49479 10.9844 5.48438 10.9844C5.47396 10.9844 5.46354 10.9844 5.45312 10.9844C5.45312 10.9844 5.44792 10.9844 5.4375 10.9844C5.4375 10.9844 5.4375 10.9792 5.4375 10.9688C5.42708 10.9688 5.42188 10.9688 5.42188 10.9688C5.42188 10.9688 5.41667 10.9688 5.40625 10.9688H5.39062C5.38021 10.9583 5.36979 10.9531 5.35938 10.9531C5.35938 10.9531 5.35417 10.9531 5.34375 10.9531L5.40625 10.9688C5.39583 10.9688 5.38021 10.9635 5.35938 10.9531C5.34896 10.9427 5.33854 10.9375 5.32812 10.9375C5.31771 10.9375 5.30729 10.9375 5.29688 10.9375C5.29688 10.9271 5.29167 10.9167 5.28125 10.9062C5.28125 10.9062 5.27604 10.9062 5.26562 10.9062C5.26562 10.9062 5.26562 10.901 5.26562 10.8906C5.25521 10.8906 5.24479 10.8906 5.23438 10.8906C5.23438 10.8802 5.23438 10.875 5.23438 10.875C5.22396 10.875 5.21354 10.875 5.20312 10.875C5.20312 10.8646 5.20312 10.8594 5.20312 10.8594C5.19271 10.849 5.18229 10.8438 5.17188 10.8438C5.17188 10.8438 5.17188 10.8385 5.17188 10.8281C5.16146 10.8281 5.15625 10.8281 5.15625 10.8281C5.15625 10.8177 5.15104 10.8125 5.14062 10.8125C5.14062 10.8021 5.13542 10.7969 5.125 10.7969C5.125 10.7865 5.11979 10.7812 5.10938 10.7812C5.10938 10.7708 5.10417 10.7656 5.09375 10.7656C5.09375 10.7552 5.09375 10.75 5.09375 10.75C5.09375 10.75 5.08854 10.7448 5.07812 10.7344C5.07812 10.724 5.07292 10.7188 5.0625 10.7188C5.0625 10.7083 5.0625 10.7031 5.0625 10.7031C5.0625 10.7031 5.05729 10.6979 5.04688 10.6875C5.04688 10.6875 5.04167 10.6823 5.03125 10.6719C5.03125 10.6615 5.03125 10.651 5.03125 10.6406C5.03125 10.6406 5.02604 10.6406 5.01562 10.6406C5.01562 10.6406 5.01562 10.6354 5.01562 10.625C5.01562 10.6146 5.01042 10.6094 5 10.6094V10.5938C5 10.5833 4.99479 10.5781 4.98438 10.5781C4.98438 10.5677 4.98438 10.5625 4.98438 10.5625V10.5312L3.95312 7.32812H3.32812C3.14062 7.32812 2.97917 7.26562 2.84375 7.14062C2.71875 7.00521 2.65625 6.84896 2.65625 6.67188C2.65625 6.49479 2.71354 6.34375 2.82812 6.21875C2.94271 6.09375 3.08333 6.02083 3.25 6H3.32812H3.51562L3.26562 5.20312C3.21354 5.02604 3.22917 4.85938 3.3125 4.70312C3.39583 4.53646 3.52604 4.42188 3.70312 4.35938C3.85938 4.30729 4.01562 4.31771 4.17188 4.39062C4.32812 4.46354 4.4375 4.57292 4.5 4.71875L4.53125 4.79688L4.92188 6H6.3125L6.6875 4.79688L6.70312 4.78125C6.70312 4.77083 6.70312 4.76562 6.70312 4.76562C6.71354 4.75521 6.71875 4.74479 6.71875 4.73438L6.6875 4.79688C6.69792 4.78646 6.70312 4.77604 6.70312 4.76562C6.71354 4.74479 6.72396 4.72917 6.73438 4.71875C6.73438 4.70833 6.73438 4.70312 6.73438 4.70312C6.73438 4.69271 6.73958 4.68229 6.75 4.67188C6.76042 4.66146 6.76562 4.65104 6.76562 4.64062C6.77604 4.63021 6.78125 4.61979 6.78125 4.60938C6.79167 4.60938 6.79688 4.60938 6.79688 4.60938C6.79688 4.59896 6.80208 4.58854 6.8125 4.57812C6.82292 4.56771 6.82812 4.5625 6.82812 4.5625C6.82812 4.55208 6.82812 4.54688 6.82812 4.54688C6.83854 4.53646 6.84896 4.53125 6.85938 4.53125C6.85938 4.52083 6.85938 4.51562 6.85938 4.51562C6.86979 4.50521 6.88021 4.5 6.89062 4.5C6.90104 4.48958 6.90625 4.48438 6.90625 4.48438C6.91667 4.47396 6.92188 4.46875 6.92188 4.46875C6.93229 4.46875 6.9375 4.46354 6.9375 4.45312C6.94792 4.45312 6.95312 4.45312 6.95312 4.45312C6.96354 4.44271 6.96875 4.4375 6.96875 4.4375C6.97917 4.4375 6.98438 4.4375 6.98438 4.4375C6.99479 4.42708 7 4.42188 7 4.42188C7.01042 4.41146 7.01562 4.40625 7.01562 4.40625C7.02604 4.40625 7.03646 4.40625 7.04688 4.40625C7.05729 4.39583 7.06771 4.39062 7.07812 4.39062C7.09896 4.38021 7.11458 4.36979 7.125 4.35938L7.0625 4.39062C7.07292 4.39062 7.07812 4.39062 7.07812 4.39062C7.08854 4.38021 7.09896 4.375 7.10938 4.375L7.125 4.35938C7.13542 4.35938 7.14062 4.35938 7.14062 4.35938C7.15104 4.35938 7.15625 4.35938 7.15625 4.35938C7.16667 4.35938 7.17188 4.35417 7.17188 4.34375C7.18229 4.34375 7.1875 4.34375 7.1875 4.34375C7.19792 4.34375 7.20833 4.34375 7.21875 4.34375C7.22917 4.34375 7.23438 4.34375 7.23438 4.34375C7.23438 4.34375 7.23958 4.34375 7.25 4.34375C7.26042 4.34375 7.26562 4.34375 7.26562 4.34375C7.27604 4.33333 7.28646 4.32812 7.29688 4.32812C7.30729 4.32812 7.31771 4.32812 7.32812 4.32812C7.33854 4.32812 7.34375 4.32812 7.34375 4.32812C7.35417 4.32812 7.35938 4.32812 7.35938 4.32812C7.36979 4.32812 7.375 4.33333 7.375 4.34375C7.38542 4.34375 7.39583 4.34375 7.40625 4.34375C7.41667 4.34375 7.42188 4.34375 7.42188 4.34375C7.42188 4.34375 7.42708 4.34375 7.4375 4.34375C7.44792 4.34375 7.45312 4.34375 7.45312 4.34375C7.46354 4.34375 7.47396 4.34375 7.48438 4.34375C7.48438 4.35417 7.48438 4.35938 7.48438 4.35938C7.49479 4.35938 7.50521 4.35938 7.51562 4.35938C7.52604 4.35938 7.53125 4.35938 7.53125 4.35938L7.54688 4.375C7.55729 4.375 7.5625 4.38021 7.5625 4.39062C7.57292 4.39062 7.58333 4.39062 7.59375 4.39062L7.53125 4.35938C7.54167 4.36979 7.55208 4.38021 7.5625 4.39062C7.58333 4.39062 7.59896 4.39583 7.60938 4.40625C7.61979 4.40625 7.625 4.40625 7.625 4.40625C7.63542 4.40625 7.64583 4.41146 7.65625 4.42188C7.65625 4.42188 7.65625 4.42708 7.65625 4.4375C7.66667 4.4375 7.67708 4.4375 7.6875 4.4375C7.6875 4.4375 7.6875 4.44271 7.6875 4.45312C7.69792 4.45312 7.70833 4.45312 7.71875 4.45312C7.71875 4.46354 7.71875 4.46875 7.71875 4.46875C7.72917 4.46875 7.73958 4.47396 7.75 4.48438C7.75 4.48438 7.75 4.48958 7.75 4.5C7.76042 4.5 7.76562 4.5 7.76562 4.5C7.77604 4.5 7.78125 4.50521 7.78125 4.51562C7.79167 4.51562 7.79688 4.52083 7.79688 4.53125C7.80729 4.53125 7.8125 4.53646 7.8125 4.54688C7.82292 4.54688 7.82812 4.55208 7.82812 4.5625C7.82812 4.5625 7.82812 4.56771 7.82812 4.57812C7.83854 4.57812 7.84375 4.57812 7.84375 4.57812C7.85417 4.58854 7.85938 4.59896 7.85938 4.60938C7.85938 4.60938 7.86458 4.60938 7.875 4.60938C7.875 4.61979 7.875 4.63021 7.875 4.64062C7.88542 4.64062 7.89062 4.64062 7.89062 4.64062C7.89062 4.65104 7.89062 4.66146 7.89062 4.67188C7.90104 4.67188 7.90625 4.67188 7.90625 4.67188C7.91667 4.68229 7.92188 4.69271 7.92188 4.70312C7.92188 4.70312 7.92188 4.70833 7.92188 4.71875C7.93229 4.72917 7.9375 4.74479 7.9375 4.76562C7.94792 4.77604 7.95833 4.78646 7.96875 4.79688L7.9375 4.73438C7.9375 4.74479 7.9375 4.75521 7.9375 4.76562C7.94792 4.76562 7.95312 4.77083 7.95312 4.78125L7.96875 4.79688L8.34375 6H9.73438L10.125 4.79688L10.1562 4.71875ZM5.875 7.32812H5.34375L5.60938 8.15625L5.875 7.32812ZM9.3125 7.32812H8.78125L9.04688 8.15625L9.3125 7.32812Z"
        fill={fill}
      />
    </svg>
  );
});
