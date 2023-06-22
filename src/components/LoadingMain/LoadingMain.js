import { ProgressBar } from 'react-loader-spinner';

const LoadingMain = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <ProgressBar
      height="280"
      width="280"
      ariaLabel="progress-bar-loading"
      wrapperStyle={style}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};

export default LoadingMain;
