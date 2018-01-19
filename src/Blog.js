import React, { Component } from 'react';

class Blog extends Component {
  render () {
    return (
      <div className='page-wrap'>
        <nav id='nav'>
          <ul>
            <li><a href='index.html' ><span className='icon fa-cloud' /></a></li>
            <li><a href='blog.html' className='active'><span className='icon fa-file-text-o' /></a></li>
            <li><a href='https://air-pollution-eradication.mn.co/'><span className='icon fa-users' /></a></li>
          </ul>
        </nav>

        <section id='main'>
          <header id='header'>
            <span className='pull-left'>Your source of all air pollution knowledge*</span>
            <div>Pure Air Industries <span>Blog</span></div>
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

              <div className='row'>
                <div className='col-md-6 space-below'>
                  <img src='img/better-route.png' alt='img' className='img-responsive' />
                </div>
                <div className='col-md-6 justify'>
                  <ul>
                    <li>
                      <p>1. The first one is, when you have to go somewhere, taking a secondary road and not a main road sidewalk has a decrease of ~<strong>50%</strong> on air pollution.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 space-below'>
                  <img src='img/out-of-car.png' alt='' className='img-responsive' />
                </div>
                <div className='col-md-6 justify'>
                  <ul>
                    <li>
                      <p>2. Get out of the car – drivers can be exposed to 2x as much pollution as pedestrians. Especially if you don’t change your car’s air filter frequently.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 space-below'>
                  <img src='img/mayor-alert.png' alt='' className='img-responsive' />
                </div>
                <div className='col-md-6 justify'>
                  <ul>
                    <li>
                      <p>3. If pollution is very high – don’t exercise*; don’t go out. Follow <a href='https://twitter.com/SadiqKhan'>@SadiqKhan</a> (London’s Mayor) in Twitter. He tweets and advice every time air pollution is too high and for which groups it is. </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 space-below'>
                  <img src='img/mobile.png' alt='' className='img-responsive' />
                </div>
                <div className='col-md-6 justify'>
                  <ul>
                    <li>
                      <p>4. Use data and apps that tell you where to go and how while avoiding pollutants – so routing apps. Like <a href='https://air.plumelabs.com/en/'>Plumelabs</a>.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <img src='img/forest.png' alt='' className='img-responsive' />
                </div>
                <div className='col-md-6 justify'>
                  <ul>
                    <li>
                      <p>5. Go on purpose to big parks every now and then (even better go to the country side for some days), and stay in the middle for some time. Go out after being rainy, especially if it has blown some wind, that’s the moment the air is cleaner. And the perfect moment to go for a walk.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <p>Most of them are complementary, and they should be used in conjunction if you want to reap all the health benefits.</p>

              <p>And there is one more I would like to share. It is not corroborated or demonstrated, but on my own personal experience (and research) is 100% truth and happens all the time. I can’t claim it publicly though, so if you want to know more read on.</p>

              <p>If you want to know more about air pollution and what you can do to mitigate its health impact, you can <a href='http://eepurl.com/cSdzmD'>sign up for our educational series</a> (which is free of course)  and/or <a href='https://air-pollution-eradication.mn.co/share/UTCEzigxfkBk1mMk'>join the community we are building of like-minded people who care and don’t want to die earlier.</a></p>

              <p>
                By joining the community, you also will get access to the last advice I can’t share with you publicly.

              </p>

              <p className='small'>
                 * It has been found in a recent study than even in the worst pollution, if, and just if, your health is great, exercising still has positive effect. If you don’t know – you better not play with fire, though.
              </p>
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
