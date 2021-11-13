import React from 'react';
import PropTypes from 'prop-types';

const DesktopLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="25" viewBox="0 0 131 31" fill="none">
  <path d="M28.96 7.44C31.7333 7.44 33.9333 8.28 35.56 9.96C37.2133 11.64 38.04 13.9733 38.04 16.96V30H31.24V17.88C31.24 16.44 30.8533 15.3333 30.08 14.56C29.3333 13.76 28.2933 13.36 26.96 13.36C25.6267 13.36 24.5733 13.76 23.8 14.56C23.0533 15.3333 22.68 16.44 22.68 17.88V30H15.88V17.88C15.88 16.44 15.4933 15.3333 14.72 14.56C13.9733 13.76 12.9333 13.36 11.6 13.36C10.2667 13.36 9.21333 13.76 8.44 14.56C7.69333 15.3333 7.32 16.44 7.32 17.88V30H0.48V7.68H7.32V10.48C8.01333 9.54667 8.92 8.81333 10.04 8.28C11.16 7.72 12.4267 7.44 13.84 7.44C15.52 7.44 17.0133 7.8 18.32 8.52C19.6533 9.24 20.6933 10.2667 21.44 11.6C22.2133 10.3733 23.2667 9.37333 24.6 8.6C25.9333 7.82667 27.3867 7.44 28.96 7.44ZM61.8637 18.48C61.8637 19.12 61.8238 19.7867 61.7438 20.48H46.2638C46.3704 21.8667 46.8104 22.9333 47.5838 23.68C48.3838 24.4 49.3571 24.76 50.5038 24.76C52.2104 24.76 53.3971 24.04 54.0638 22.6H61.3438C60.9704 24.0667 60.2904 25.3867 59.3038 26.56C58.3438 27.7333 57.1304 28.6533 55.6638 29.32C54.1971 29.9867 52.5571 30.32 50.7438 30.32C48.5571 30.32 46.6104 29.8533 44.9038 28.92C43.1971 27.9867 41.8638 26.6533 40.9038 24.92C39.9438 23.1867 39.4638 21.16 39.4638 18.84C39.4638 16.52 39.9304 14.4933 40.8638 12.76C41.8238 11.0267 43.1571 9.69333 44.8638 8.76C46.5704 7.82667 48.5304 7.36 50.7438 7.36C52.9038 7.36 54.8238 7.81333 56.5038 8.72C58.1838 9.62667 59.4904 10.92 60.4238 12.6C61.3838 14.28 61.8637 16.24 61.8637 18.48ZM54.8638 16.68C54.8638 15.5067 54.4638 14.5733 53.6638 13.88C52.8638 13.1867 51.8638 12.84 50.6638 12.84C49.5171 12.84 48.5438 13.1733 47.7438 13.84C46.9704 14.5067 46.4904 15.4533 46.3038 16.68H54.8638ZM62.1122 18.8C62.1122 16.5067 62.5389 14.4933 63.3922 12.76C64.2722 11.0267 65.4589 9.69333 66.9522 8.76C68.4455 7.82667 70.1122 7.36 71.9522 7.36C73.4189 7.36 74.7522 7.66666 75.9522 8.28C77.1789 8.89333 78.1389 9.72 78.8322 10.76V0.4H85.6722V30H78.8322V26.8C78.1922 27.8667 77.2722 28.72 76.0722 29.36C74.8989 30 73.5255 30.32 71.9522 30.32C70.1122 30.32 68.4455 29.8533 66.9522 28.92C65.4589 27.96 64.2722 26.6133 63.3922 24.88C62.5389 23.12 62.1122 21.0933 62.1122 18.8ZM78.8322 18.84C78.8322 17.1333 78.3522 15.7867 77.3922 14.8C76.4589 13.8133 75.3122 13.32 73.9522 13.32C72.5922 13.32 71.4322 13.8133 70.4722 14.8C69.5389 15.76 69.0722 17.0933 69.0722 18.8C69.0722 20.5067 69.5389 21.8667 70.4722 22.88C71.4322 23.8667 72.5922 24.36 73.9522 24.36C75.3122 24.36 76.4589 23.8667 77.3922 22.88C78.3522 21.8933 78.8322 20.5467 78.8322 18.84ZM95.4606 0.4V30H88.6206V0.4H95.4606ZM97.0575 18.8C97.0575 16.5067 97.4842 14.4933 98.3375 12.76C99.2175 11.0267 100.404 9.69333 101.898 8.76C103.391 7.82667 105.058 7.36 106.898 7.36C108.471 7.36 109.844 7.68 111.018 8.32C112.218 8.96 113.138 9.8 113.778 10.84V7.68H120.618V30H113.778V26.84C113.111 27.88 112.178 28.72 110.978 29.36C109.804 30 108.431 30.32 106.858 30.32C105.044 30.32 103.391 29.8533 101.898 28.92C100.404 27.96 99.2175 26.6133 98.3375 24.88C97.4842 23.12 97.0575 21.0933 97.0575 18.8ZM113.778 18.84C113.778 17.1333 113.298 15.7867 112.338 14.8C111.404 13.8133 110.258 13.32 108.898 13.32C107.538 13.32 106.378 13.8133 105.418 14.8C104.484 15.76 104.018 17.0933 104.018 18.8C104.018 20.5067 104.484 21.8667 105.418 22.88C106.378 23.8667 107.538 24.36 108.898 24.36C110.258 24.36 111.404 23.8667 112.338 22.88C113.298 21.8933 113.778 20.5467 113.778 18.84Z" fill="#01243C"/>
  <path d="M126.766 30.32C125.566 30.32 124.579 29.9733 123.806 29.28C123.059 28.56 122.686 27.68 122.686 26.64C122.686 25.5733 123.059 24.68 123.806 23.96C124.579 23.24 125.566 22.88 126.766 22.88C127.939 22.88 128.899 23.24 129.646 23.96C130.419 24.68 130.806 25.5733 130.806 26.64C130.806 27.68 130.419 28.56 129.646 29.28C128.899 29.9733 127.939 30.32 126.766 30.32Z" fill="#1982A4"/>
  </svg>
  );
};


const { string } = PropTypes;

DesktopLogo.defaultProps = {
  className: null,
};

DesktopLogo.propTypes = {
  className: string,
};

export default DesktopLogo;
