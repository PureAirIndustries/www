import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import classnames from 'classnames'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false,
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      NAME: this.state.name,
      EMAIL: this.state.email,
      MESSAGE: this.state.message,
    }

    const url = 'https://script.google.com/macros/s/AKfycbyvQLS-3V-ScX7fGhXQA5dhcHw7YxbSvT73AyC6Nzh9OHRxnUIH/exec'


    axios.get(
      url,
      { dataType: "json" },
      JSON.stringify(data)
    )
    .then((success) => (
      this.setState({
        sent: true
      })
    ))
  }

  render () {
    return (
      <div className='page-wrap'>
        <nav id='nav'>
          <ul>
            <li><a href='/' className='active'><span className='icon fa-cloud' /></a></li>
            <li><Link to={{
              pathname: '/blog',
              state: {
                redirectPath: 'http://blog.pureairindustries.com',
                redirectToTitle: "You are being redirected to Pure Air Industries' Blog - enjoy :)"
              }
            }}><span className='icon fa-file-text-o' /></Link></li>
            <li><a href='/funding'><span className='icon fa-dollar' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://air-pollution-eradication.mn.co/'><span className='icon fa-users' /></a></li>
          </ul>
        </nav>
        <section id='main'>
          <section id='banner' className='image-before'>
            <div className='inner'>
              <header>
                <h1>Every Year 7 Million People Die Premature Because Of Air Pollution</h1>

              </header>
            </div>
          </section>
          <section id=''>
            <div className='gallery'>
              <div className='col-md-12'>
                <header className='special'>
                  <h2 className='special-font text-shadow' >We can't stand it anymore - It's time for a change</h2>
                </header>
                <div>
                  <p className='regular' style={{'fontSize': '1.5em'}} > It's a heartbraking situation that <u>MUST</u> be tackled and solved.</p>
                  <p className='regular'> And we need to solve it now. Because in numbers </p>
                </div>
                <br /><br /><br />
                <div className='video col-md-6 col-xs-8 offers' style={{'borderRight': '#95a5a6 solid 1em', 'borderRadius': '10px'}}>
                  <div className='image img-responsive offer_item'>
                    <p style={{'fontSize': '20em', 'zIndex': '100', 'position': 'absolute', 'top': '4%', 'left': '7%'}} className='big weighted'>5M</p>
                    <img src='img/ext.png' alt='' className='img-responsive' />
                  </div>
                </div>
                <div className='video col-md-6 col-xs-8' style={{'paddingLeft': '6%', 'borderLeft': '#bdc3c7 solid 1em', 'borderRadius': '10px'}}>
                  <div className='image image-responsive offer_item'>
                    <p style={{'fontSize': '20em', 'zIndex': '100', 'position': 'absolute', 'top': '4%', 'left': '7%'}} className='big'>7T</p>
                    <img src='img/money.png' alt='' className='img-responsive' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 text-center '><p className='weighted big'>people died last year</p></div>
                <div className='col-md-6 text-center '><p className='weighted'>costed to world's governments</p></div>
              </div>
            </div>

            <div className='home-vp-lighter'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12 dm-vp'>
                    <h2 className='dm-main-title' id='startchange'>
                    This is our mission and what we stand for
                    </h2>
                    <p className='dm-main-subtitle' />
                  </div>
                </div>
              </div>
              <div className='container' style={{'textAlign': 'center', 'color': '#333'}}>
                <div className='midas-card'>
                  <p>We believe everyone has the right to have pure, clean and fresh air no matter where he/she decides to live.</p>

                  <p>We dream of a world free of air pollution because, as with sewage today, pollution has been taken care of.</p>

                  <p>We do so by creating beautiful and highly efficient air cleaning machines with a low CO2 impact.</p>

                  <p>And by doing so, we’re going to be saving millions of people from dying prematurely every year, we’re giving life.</p>

                  <br />

                </div>
              </div>
            </div>
          </section>

          <section className='wrapper style1 background-nice'>

            <div className='inner'>
              <header className='align-center'>
                <h2 className='cool-title'>That's what we are up to now</h2>
                <p>(And you can have an active role in both.)</p>
              </header>

              <div className='flex flex-2'>
                <div className='video col video-card video-shadow' style={{'background': '#fff'}}>
                  <div className='image fit img-responsive'>
                    <img src='img/pic07.jpg' alt='' className='img-responsive' />
                    <div className='arrow'>
                      <div className='icon fa-space-shuttle' />
                    </div>
                  </div>
                  <p className='caption'>
                    We are building the world's first air sewage system for cities. If you want to get involved, either by becoming an advisor, partner, or otherwise, don't hesitate to contact us.
                  </p>
                </div>

                <div className='video col video-card video-shadow' style={{'background': '#fff'}}>
                  <a target='_blank' rel='noopener noreferrer' href='https://air-pollution-eradication.mn.co/share/UTCEzigxfkBk1mMk' className='link'>
                    <div className='image fit'>
                      <img src='img/community.png' alt='' className='img-responsive' />
                      <div className='arrow'>
                        <div className='icon fa-magnet' />
                      </div>
                    </div>
                    <p className='caption'>
                      We are building an amazing community of like-minded people concerned with air pollution and with aims to improve the quality of the air we breathe. Click to join.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id='contact'>
            <div className='social column'>
              <h3>About Us</h3>
              <img src='img/pure-air-logo.png' alt='' className='img-responsive' style={{'width': '60%', 'paddingBottom': '3%'}} />

              <h3>Help Us Spread The Word</h3>
              <ul className='icons'>
                <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/AirBastion' className='icon fa-twitter'><span className='label'>Twitter</span></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://www.facebook.com/groups/355957491515979/' className='icon fa-facebook'><span className='label'>Facebook</span></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://angel.co/pure-air' className='icon fa-angellist'><span className='label'>Instagram</span></a></li>
              </ul>
            </div>

            <div className='column'>
              <h3>Get in Touch</h3>
              <form onSubmit={this.handleSubmit}>
                <div className='field half first'>
                  <label htmlFor='name'>Name</label>
                  <input name='NAME' id='name' value={this.state.name} onChange={this.handleName} type='text' placeholder='Name' />
                </div>
                <div className='field half'>
                  <label htmlFor='email'>Email</label>
                  <input name='EMAIL' id='email' value={this.state.email} onChange={this.handleEmail} type='email' placeholder='Email' />
                </div>

                <div className='field'>
                  <label htmlFor='message'>Message</label>
                  <textarea name='MESSAGE' id='message' value={this.state.content} onChange={this.handleMessage} rows='6' placeholder='Message' />
                </div>
                <ul className='actions'>
                  <li><input value='Send Message' className='button' type='submit' /></li>
                  <p className={classnames({
                    'hidden': true ? !this.state.sent : false,
                    'message-sent': true ? this.state.sent : false,
                    'animated fadeInUp': true ? this.state.sent : false
                  })}>Your message wasn't sent, please send your <a href='mailto:contact@pureairindustries.com'>email here!</a></p>
                </ul>
              </form>
            </div>
          </section>

          <section id='banner' className='image-after'>
            <div className='inner'>
              <header>
                <h1>And the time for change is now</h1>
                <p />
              </header>
            </div>
          </section>

          <footer className='public-footer'>
            <div className='container'>
              <div className='row'>
                <ul className='footer-list-main'>
                  <h3>
                    Company
                  </h3>

                  <li>
                    <a className='logo' href='/'>Technology</a>
                  </li>

                  <li>
                    <a target='_blank' rel='noopener noreferrer' href='https://docsend.com/view/4g8dcv6'>Investor Relations</a>
                  </li>

                  <li>
                    <a className='logo' style={{'fontWeight': '300', 'letterSpacing': '1px', 'fontSize': '17px'}} href='https://docsend.com/view/xurst5y'>Product presentation</a>
                  </li>

                </ul>
                <ul className='footer-list-main'>
                  <h3>
                    Company
                  </h3>

                  <li />

                  <li>
                    London
                  </li>

                  <li>
                    UB3 1HA
                  </li>

                  <li>
                    07469167895
                  </li>
                </ul>
                <ul className='footer-list-main'>

                  <h3>
                  Legal
                  </h3>

                  <li>
                    Reg. N.:10789748
                  </li>

                  <li>
                    <a href='/privacy'>Privacy</a>
                  </li>

                  <li>
                    <a href='/tos'>Terms</a>
                  </li>
                </ul>
                <ul className='mail'>

                  <h3>
                  Get in touch
                  </h3>

                  <li>
                    <a href='mailto:contact@pureairindustries.com'>Contact us<i className='fa fa-envelope-o' /></a>
                  </li>

                </ul>
              </div>
            </div>
          </footer>
        </section>
      </div>
    )
  }
}

export default Home
