import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./extra/main.css";

class Privacy extends Component {
  render() {
    return (
      <div className="page-wrap">
        <nav id="nav">
          <ul>
            <li>
              <a href="/" className="active">
                <span className="icon fa-cloud" />
              </a>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/blog",
                  state: {
                    redirectPath: "http://blog.pureairindustries.com",
                    redirectToTitle:
                      "You are being redirected to Pure Air Industries' Blog - enjoy :)"
                  }
                }}
              >
                <span className="icon fa-file-text-o" />
              </Link>
            </li>
            <li>
              <a href="/funding">
                <span className="icon fa-dollar" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://air-pollution-eradication.mn.co/"
              >
                <span className="icon fa-users" />
              </a>
            </li>
          </ul>
        </nav>

        <section id="main">
          <header id="header">
            <span className="text-center">
              Your privacy is important to us*
            </span>
          </header>

          <section>
            <div className="inner col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 blog">
              <header>
                <h1 className="text-center">Privacy Policy</h1>
              </header>
              <p>
                This policy sets out the basis on which libres of PURE AIR
                INDUSTRIES (Company Number 10789748) (together with our
                subsidiaries, our holding company, subsidiaries of our holding
                company from time to time, collectively called “<b>Pure Air</b>
                ”, “<b>Pure Air Industries</b>”, “<b>us</b>”,{" "}
                <b>“the company</b>”, “<b>Mammbo Group</b>” or “<b>we</b>”)
                collects personal data from you and how we process such data.
              </p>
              <p>
                By visiting our website <b>pureairindustries.com </b>(our
                “Site”), you accept and consent to the practices set out below. 
              </p>

              <ol>
                <li className="parent-list">Collection of information</li>
                <li className="sub-list">
                  For the purposes outlined in Clause 2, we may collect and
                  process the following information about you:
                </li>
                <ol type="a">
                  <li>
                    <i> Information you give us</i> - information that you
                    provide us (which may include your name, address, email
                    address, telephone number, credit card information and other
                    personal description) by filling in forms on our Site, or by
                    corresponding with us (by phone, email or otherwise), for
                    example:
                  </li>
                  <ol type="i">
                    <li>when you report any problem to us;</li>
                    <li>when you use certain features on our Site;</li>
                    <li>when you request any support from us; or</li>
                    <li>
                      when you complete any survey or questionnaire we send you.
                    </li>
                  </ol>
                  <li>
                    <i>Information we collect about you </i>- information
                    automatically collected when you visit our Site, for
                    example:
                  </li>
                  <ol type="i">
                    <li>
                      technical information, including the Internet protocol
                      (IP) address used to connect your computer to the Internet
                      and your log-in information, browser type and version,
                      time zone setting, browser plug-in types and versions,
                      operating system and platform;
                    </li>
                    <li>
                      information about your visit, including the full Uniform
                      Resource Locators (URLs), clickstream to, through and from
                      our site (including date and time), products you viewed or
                      searched for, page response times, download errors, length
                      of visits to certain pages, page interaction information
                      (such as scrolling, clicks, and mouse-overs), methods used
                      to browse away from the page, and any phone number used to
                      call our customer service number.
                    </li>
                  </ol>
                </ol>
                <li className="sub-list">
                  We only retain personal data for so long as it is necessary.
                  Data may be archived as long as the purpose for which the data
                  was used still exists.
                </li>
                <li className="parent-list">Uses made of the information</li>
                <li className="parent-list">Disclosure of your information</li>
                <li className="sub-list">
                  We will keep your personal data we hold confidential but you
                  agree we may provide information to:
                </li>
                <ol type="a">
                  <li>
                    any member of our group, which means our subsidiaries, our
                    ultimate holding company and its subsidiaries, as defined in
                    section 1159 of the Companies Act 2006
                  </li>
                  <li>
                    personnel, agents, advisers, auditors, contractors,
                    financial institutions, and service providers in connection
                    with our operations or services (for example staff engaged
                    in the provision of support services);
                  </li>
                  <li>
                    our overseas offices, affiliates, business partners and
                    counterparts (on a need-to-know basis only);
                  </li>
                  <li>persons under a duty of confidentiality to us;</li>
                  <li>
                    persons to whom we are required to make disclosure under
                    applicable laws and regulations in or outside of UNITED
                    KINGDOM AND WALES; or
                  </li>
                  <li>
                    actual or proposed transferees actual or proposed
                    transferees of our operations (or a substantial part
                    thereof) in or outside of our operations (or a substantial
                    part thereof) in or outside of UNITED KINGDOM and WALES.
                  </li>
                </ol>
                <li className="parent-list">Third-party sites</li>
                <li className="sub-list">
                  Our Site or our communication with you may from time to time
                  contain links to third-party websites over which we have no
                  control. If you follow a link to any of these websites, please
                  note that they have their own practices and policies. We
                  encourage you to read the privacy policies or statements of
                  these websites understand your rights. We accept no
                  responsibility or liability for any practices of third-party
                  websites.
                </li>
                <li className="parent-list">Security</li>
                <li className="sub-list">
                  Please note, however, the transmission of information via the
                  Internet is not completely secure. Although we will do our
                  best to protect your personal data, we cannot guarantee the
                  security of your data transmitted to our Site; any
                  transmission is at your own risk.
                </li>
                <li className="parent-list">Your rights</li>
                <li className="sub-list">You have the right to:</li>
                <ol type="a">
                  <li>check whether we hold personal data about you;</li>
                  <li>access any personal data we hold about you; and</li>
                  <li>
                    require us to correct any inaccuracy or error in any
                    personal data we hold about you.
                  </li>
                </ol>
                <li className="sub-list">
                  Any request under Clause 6.1 may be subject to a small
                  administrative fee to meet our cost in processing your
                  request.
                </li>
                <li className="parent-list">Changes to our privacy policy</li>
                <li className="sub-list">
                  We may amend this policy from time to time by posting the
                  updated policy on our Site. By continuing to use our Site
                  after the changes come into effect means that you agree to be
                  bound by the revised policy.
                </li>
                <li className="parent-list">Contact us</li>
                <li className="sub-list">
                  If you have any questions, comments or requests regarding
                  personal data, please address them to:
                </li>
                <a href="mailto:contact@pureairindustries.com">
                  contact@pureairindustries.com
                </a>
              </ol>
              <p>
                Last updated:<b> 20th February 2018</b>
              </p>
            </div>
          </section>

          <div className="row">
            <div className="col-md-12 col-xs-18">
              <footer id="footer">
                <div className="copyright">
                  &copy; 2018 <a href="/">Pure Air Industries</a>.
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Privacy;
