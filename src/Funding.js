import React, { Component } from 'react'
import './extra/main.css'
import Logo from './img/o2-logo.png';

class Blog extends Component {
  render () {
    console.log(Logo);
    return (
      <div className='page-wrap'>
        <nav id='nav'>
          <ul>
            <li><a href='/'><span className='icon fa-cloud' /></a></li>
            <li><a href='/blog'><span className='icon fa-file-text-o' /></a></li>
            <li><a href='/funding' className='active'><span className='icon fa-dollar' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://air-pollution-eradication.mn.co/'><span className='icon fa-users' /></a></li>
          </ul>
        </nav>

        <section id='main'>
          <header id='header'>
            <span className='text-center'>Funding</span>
          </header>

          <section>
            <div className='inner col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 blog'>
              <header>
                <h1 className='text-center'>Funding History</h1>

              </header>

              <p>The company was funded by Isaac Ramonet on December 2016 and has been continually funded (financially) by himself.</p>

              <p>On January 2018 we received funding from the programme <a href='http://www.o2thinkbig.co.uk/the-environment-now'>Think Big</a> and started working together.</p>

              <p>A programme designed to support young entrepreneurs with an idea for 10 months with funding and mentorships.</p>

              <a href='http://www.o2thinkbig.co.uk/the-environment-now'><img className='margin-bottom' src={Logo} /></a>

              <p className='next-section'>On February 2018 we signed a document of collaboration with LJMU University and Liverpool's University virtual engineering center under <a href='http://lcr4.uk/'>LCR 4.0</a> programme funded by the EU.</p>

              <a href='http://lcr4.uk/'><img className='margin-bottom' src='http://lcr4.uk/wp-content/uploads/2016/12/LCR_mobile_logo.jpg' /></a>

              <p>Under the programme we will develop together with the academia one of the prototypes and do use their testing facilities to test the critical components of it.</p>

              <p />

              <p className='next-section'>Every new funding, award or programme that we join is going to be listed underneath.</p>

            </div>
          </section>

          <div className='row'>
            <div className="col-md-12 col-xs-18">
              <footer id='footer'>
                <div className='copyright'>
                  &copy; 2018 <a href='/'>Pure Air Industries</a>.
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Blog
