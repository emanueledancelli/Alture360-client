import React, {Component} from 'react';
import styled, {css} from "react-emotion";
import { Link } from "react-router-dom";
import InfoHeader from '../../components/PagesHeader';
import Spinner from '../../components/common/Spinner';

class Notifications extends Component {
    state = {
        isLoading : true
    }
    
    componentDidMount () {
        setTimeout(this.renderPage, 1000)
        this.scrollToTop()
        this.initOneSignal("mount")
    }

    componentWillUnmount() {
        this.initOneSignal()
    }

    renderPage = () => {
        this.setState({
            isLoading: false
        })
    }

    scrollToTop = () => window.scrollTo(0, 0);

    initOneSignal = param => {
        var SDK = document.createElement('script');
        SDK.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
        var script = document.createElement('script');
        script.text = "var OneSignal = window.OneSignal || [];\r\n  OneSignal.push(function() {\r\n    OneSignal.init({\r\n      appId: \"b80e7963-2d68-4e15-ad8d-c79702ee21e6\",\r\n    });\r\n  });";
        
        if(param = "mount") {
            document.head.appendChild(SDK);
            document.head.appendChild(script);
            return
        }
        else {
            document.head.removeChild(SDK);
            document.head.removeChild(script);
            return
        }
    }

    render() {
    let { isLoading } = this.state
        
    const Body = styled("div")`
        margin-top: 14vh;
        padding: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
    `
    const Footer = styled("div")`
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: #828282;
        border-top: 1px solid rgba(0,0,0,0.2);
        font-size: 0.8em;
        & a {
            color: #828282;
        }
        @media (min-width: 740px) {
            width: 940px;
          }
    `
    
    const paddingRight = css`
        padding-right: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
    `

    const paddingLeft = css`
        padding-left: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
        `
    const marginBottom = css`
        margin-bottom: 40px;
    `
    if(isLoading) {
        return ( <Spinner /> ) 
    }
    return (
        <React.Fragment>
            <InfoHeader
                pageTitle="Notifiche"
                onClick={() => this.props.history.goBack() } 
            />
            <Body>
            <h1 className={marginBottom}>Notifiche</h1>
            <div className="onesignal-customlink-container"></div>
            </Body>
            <Footer>
                <div className={paddingLeft}>
                    <Link to="/privacypolicy">
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <p className={paddingRight}><a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
    }
}

export default Notifications;