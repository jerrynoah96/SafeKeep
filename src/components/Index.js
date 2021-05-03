import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';

const Home = () => {
  const { connect, loadWeb3, account } = useAuth();
  const history = useHistory();

  useEffect(() => {
    loadWeb3()
  }, [loadWeb3, account])

  const handleConnect = async () => {
    const res = await connect();
    if (res && res.length === 42) {
      history.push('/dashboard');
    } else {
      toast(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div>
      <ToastContainer />
      <header>
        <div className="uk-flex">
          <div className="header-text uk-animation-slide-left-small">
            <div className="header-info">
              <h1 className="header-main">SafeKeep</h1>
              <h4 className="description">provide guaranteed storage and safety backup for crypto assets</h4>
              <div className="home-btns">

              <button onClick={handleConnect} className="uk-button enableEthereumButton uk-button-default">{account.length ? 'Connected' : 'Connect'}</button>
              <a href="https://pdfhost.io/v/~8~t0Q~xb_SafeKeep_Litepaper_2pdf.pdf" tabindex="-1" target="_blank" className="uk-button litepaper-link uk-button-default">Lite Paper</a>
              
                
              </div>
              <p className="sponsored-by">Built on  <img src="../images/eth-diamond-rainbow.png" width="55px"  alt="ethereum logo"/></p>
            </div>
          </div>
          <div className="illus">
            <div className="image-container">
              <img src="../images/LogoBlack.png" className="safeKeep-img" alt="safeKeep logo" />
            </div>
          </div>
    </div> 

    <div>

    </div>
      </header>
      <div className="footer">
        <div className="social-media-icons">
          <a href="https://twitter.com/SafeKeepfinance" target="_blank">
            <img src="https://cdn4.iconfinder.com/data/icons/bettericons/354/twitter-circle-512.png"/>
          </a>

          <a href="http://t.me/safekeepfinance" target="_blank">
            <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"/>
          </a>

        </div>

        <p>©️ Safekeep team,2021 </p>

      </div>
    </div>
  )
}

export default Home;
