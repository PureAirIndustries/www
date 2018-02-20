import React, { Component } from 'react'
import './extra/main.css'

class Blog extends Component {
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
            <span className='pull-left'>Your source of all air pollution knowledge*</span>
            <div>Pure Air Industries <span>Blog</span></div>
          </header>

          <section>
            <div className='inner col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 blog'>
              <header>
                <h1 className='text-center'>Air Pollution Resource List</h1>

                <h2 className='italics subtitle text-center'>Where to check the pollution levels</h2>

                <a href=''>Kings college video talks</a>
                <a href=''>Defra</a>
                <a href=''></a>
                <a href=''></a>
                <a href=''></a>
              </header>
            </div>
          </section>

          <div className='row'>
            <div className='col-md-12 col-xs-18'>
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
