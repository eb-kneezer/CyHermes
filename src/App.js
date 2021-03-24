import './App.css';

import bars from './assets/bars.png'
import ninedots from './assets/ninedots.png'
import sunbeam from './assets/sunbeam.png'
import logo from './assets/logo.png'
import archive from './assets/archive.png'
import Report from './components/Report';
import ProfileBar from './components/ProfileBar';

function App() {
  return (
    <div className="page">
      <div className="side-page">

        <div className="icons">
          <div className="iconbox bars">
            <img src={bars} alt="bars"/>
          </div>
          <div className="iconbox nine-dots">
          <img src={ninedots} alt="dots"/>
          </div>
          <div className=" sunbeam">
            <img src={sunbeam} alt="sunbeam logo"/>
          </div>
        </div>

        <div className="side-content">
          
          <div className="status-list">
            <h3 className="side-head">STATUS</h3>
            <h3 className="new">New</h3>
            <h3 className="accepted">Accepted</h3>
            <h3 className="flagged">Flagged</h3>
            <h3 className="not-accepted">Not Accepted</h3>
          </div>

          <div>

          <div className="most-recent">
            <h3 className="side-head">MOST RECENT</h3>
            <div className="recent">
              <div className="regulator">
              <p className="recent-head">Regulator</p>
              <p className="recent-content">
                Financial Reporting Council of Nigeria (FRCN)
              </p>
              </div>
              <div className="template">
              <p className="recent-head">Template</p>
              <p className="recent-content">
                Nigeria Code of Corporate Governance (NCCG)
              </p>
              </div>
              <span className="status">
                IN PROGRESS
              </span>
            </div>
          </div>

          <div className="footer">
            <p>POWERED BY <img className="footerImg" src={logo} alt="logo"/><strong> Bod</strong>Admin 
            <span className="reg">&reg;</span></p>
          </div>
          </div>

        </div>
      </div>



      <div className="main-page">
        <ProfileBar/>

        <div className="container">
          <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Search Report" name="" id=""/>
          </div>

          <div className="head-container">
          <div className="main-heading">
            <div className="heading">
              <h1>Reports</h1>
              <span className="head-report">ACCEPTED</span>
            </div>
            <div className="action">
              <div className="archive">
                <img src={archive} alt=""/>
                <p>Archived Reports</p>
              </div>
              <button className="create">Create Report</button>
            </div>
          </div>
              <p>All Reports generated but yet to be submitted</p>
          </div>
          <Report />
          <Report />
        </div>
      </div>
    </div>
  );
}

export default App;
