import React, { Component } from 'react'
import './extra/main.css'

class Privacy extends Component {
  render () {
    return (
      <div className='page-wrap'>
        <nav id='nav'>
          <ul>
            <li><a href='/' ><span className='icon fa-cloud' /></a></li>
            <li><a href='blog' className='active'><span className='icon fa-file-text-o' /></a></li>
            <li><a href='https://air-pollution-eradication.mn.co/'><span className='icon fa-users' /></a></li>
          </ul>
        </nav>

        <section id='main'>
          <header id='header'>
            <span className='text-center'>Your source of all air pollution knowledge*</span>
          </header>

          <section>
            <div className='inner col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 blog'>
              <header>
                <h1 className='text-center'>Did You Know Air Pollution Is Killing 9500 People Up To 2 Years Early Every Year Just In The City of London Alone? (…And That Number Has Been Increasing For The Last 10 Years)</h1>

                <h2 className='italics subtitle text-center'>Well, let us show you the 5 things you can do right now to help you avoid dying earlier</h2>
              </header>

              <p>“Yeah, the air in cities is bad,” said the majority of the public. But, let’s put things in perspective first.</p>

              <p>Do you know how many cigarettes are in a Tabaco packet? 20.</p>

              <p>Research has shown that in London, a normal day exposure can be the equivalent of smoking 15 cigarettes.</p>

              <p>That’s why this applies to all of us – not just to some – all the time. The same happens in other cities - because we’re talking of 40,000 people a year in United Kingdom. And 7 million in the world.</p>

              <p>That’s why it’s so important to know and follow these rules.</p>

              <p>Luckily for us, it has been found in scientific studies this bad effects can be reversed, starting as soon as the quality of air you breathe is improved and cleaned from pollutants.</p>

              <p>So, let’s get right into it,</p>
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

export default Privacy
