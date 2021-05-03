import '../App.css';
const Roadmap = () => {
  return (
    <div className="roadmap-page">
        <h1 className="roadmap-title">Roadmap</h1>
        <main className="roadmap">
          <p className="road-map-item"> <span>May - December 2021</span>
            <ul>
              <li>Full beta testing</li>
              <li>Liquidity pool selection</li>
              <li>Full ERC-20 support</li>
              <li>Support for BSC and DOT tokens</li>
              <li>Layer 2 implementation - Polygon</li>
              <li>Mobile implementation</li>
            </ul>
          </p>
          
          
          <p className="road-map-item"> <span>Q1 2022</span>
            <ul>
              <li>Mainnet contract development</li>
              <li>Mainnet contract audit</li>
              <li>Mainnet contract testing</li>
            </ul>
          </p>


          <p className="road-map-item"> <span>Q2 2022</span>
            <ul>
              <li>Back-up distribution percentage</li>
              <li>Ping reminder notifications</li>
              <li>Social backup</li>
              <li>Support for other web3 wallets</li>
            </ul>
          </p>
        </main>
      </div>
  )
}

export default Roadmap;
