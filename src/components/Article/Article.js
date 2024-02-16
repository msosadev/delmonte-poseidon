import React, { useState, useEffect } from "react";
import VisualLink from "../VisualLink/VisualLink";
import Card from "../Card/Card";
import "./Article.css";
import Navigation from "../Navigation/Navigation";
import sections from "./sections.json";

export default function Article() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (id) => {
    // Scroll to the clicked section
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleScroll = () => {
    // Determine the active section based on the scroll position
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        setActiveSection(section.id);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Detach the scroll event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="reading-area">
      <Navigation
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <div className="article-wrapper">
        <div className="article">
          <h1 className="headings-h-2-normal">
            What do cross-country road trips, wedding speeches, and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            >
              social media marketing
            </a>{" "}
            have in common? Planning. I can't help you with your road trip or
            wedding speech, but I have a solution for planning your next social
            media marketing campaign — using a social media calendar!
          </h1>
          <p className="body-1">
            Most marketers now recognize that social media is integral to an
            effective inbound marketing strategy. With so many social networks
            available to us, it's crucial to stay organized and plan for when
            and what you will share on these platforms.
          </p>
          <h2 className="headings-h-2-bold" id="section1" key="section1">
            What is a social media calendar?
          </h2>
          <p className="body-1">
            A social media calendar is a rundown of your upcoming posts
            organized by date and time. A social media calendar can be a
            spreadsheet, digital calendar, or interactive dashboard. To get the
            most value out of your social media calendar, it may include the
            following: The date and time a post will go live The social media
            account or network will go live on Materials that will be included,
            such as copy, hashtags, links, and graphics
          </p>
          <h2 className="headings-h-2-bold" id="section2" key="section2">
            How to Create a Social Media Calendar
          </h2>
          <h3 className="headings-h-3-bold" id="section2.1" key="section2.1">
            1. Conduct a social media audit.
          </h3>
          <p className="body-1">
            A social media audit assesses your social media presence, accounts,
            and engagement so you can see what's working, what's not, and where
            improvements need to be made. To learn how to conduct a social media
            audit,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blog.hubspot.com/customers/check-pulse-digital-strategy-social-media-audit?_ga=2.209090258.1992428540.1669048929-1756719333.1669048929&_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            >
              click here.
            </a>
          </p>
          <h3 className="headings-h-3-bold" id="section2.2" key="section2.2">
            2. Choose your social media channels and the content you'll post..
          </h3>
          <p className="body-1">
            After conducting a social media audit, you should comprehensively
            understand which channels your audience uses and the kind of content
            they prefer. You should use your findings to determine which social
            media channels you'll leverage and the content you'll post.
          </p>
          <p className="body-1">
            For example, you may notice your audience prefers your
            behind-the-scenes content on Instagram but goes to Twitter to ask
            questions and learn more about your product. In that case, you can
            post fun behind-the-scenes photos and Reels on Instagram, then use
            Twitter to share information about your product and answer consumer
            questions.
          </p>
          <h3 className="headings-h-3-bold" id="section2.3" key="section2.3">
            3. Decide what your calendar should include.
          </h3>
          <p className="body-1">
            Your social media calendar should be tailored to your business and
            goals, so you'll need to include information in our calendar that
            will make your desired results.
          </p>
          <p className="body-1">
            To start, your calendar should include the following:
          </p>
          <ul className="body-1">
            <li>The platforms you're using</li>
            <li>The day and the time your posts will be published</li>
            <li>Links, graphics, videos, and copy</li>
          </ul>
          <p className="body-1">
            As you become more adept with your calendar, you may want to expand
            it to include the following:
          </p>
          <ul className="body-1">
            <li>
              Platform-specific materials include Reels, TikTok LIVE, polls,
              shoppable posts, etc.
            </li>
            <li>Geo-targeting</li>
            <li>
              The associated or vertical campaigns, such as product launches and
              contests
            </li>
          </ul>
          <h3 className="headings-h-3-bold" id="section2.4" key="section2.4">
            4. Get feedback.
          </h3>
          <p className="body-1">
            Once your calendar is complete, share it with your team and
            stakeholders to get their feedback to ensure it meets everyone's
            needs. As you use the calendar, you may find ways to improve or
            expand upon it; you'll need to be open to ongoing feedback.
          </p>
          <h2 className="headings-h-2-bold" id="section3" key="section3">
            Social Media Content Calendar Tools to Plan Your Messaging
          </h2>
          <p className="body-1">
            Marketers might already use Excel for different types of reports and
            data analysis, but this multifaceted tool is also perfect for social
            media content calendar organization. Excel can be customized
            according to the priorities and metrics your team is focused on, so
            it's a great option for planning.
          </p>
          <p className="body-1">
            The good news? We've already done the heavy lifting by creating a
            free, downloadable{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://offers.hubspot.com/social-media-content-calendar?hubs_post-cta=body&hubs_post=blog.hubspot.com/marketing/social-media-calendar-tools&hubs_signup-url=blog.hubspot.com/marketing/social-media-calendar-tools&hubs_signup-cta=social%20media%20content%20calendar%20template"
            >
              social media content calendar template
            </a>{" "}
            using{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://products.office.com/en-us/excel?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            >
              Microsoft Excel
            </a>
            . Marketers can easily use this template to plan individual social
            media posts— monthly or annually — while keeping an eye on more
            significant picture events, holidays, publications, and
            partnerships.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
          <span className="tip-regular">
            <span className="tip-bold">💡 Tip:</span> usa emoji in per alcuni
            contenuti, poche ma buone
          </span>
          <h3 className="headings-h-3-bold">Module Table Data</h3>
          <div>
            <div className="table-container custom-scrollbar">
              <table>
                <thead>
                  <tr className="subtitle-1">
                    <th>Content Data #1</th>
                    <th>Content Data #2</th>
                    <th>Content Data #3</th>
                    <th>Content Data #4</th>
                    <th>Content Data #5</th>
                  </tr>
                </thead>
                <tbody className="body-2">
                  <tr>
                    <td>Content Data #1</td>
                    <td>Content Data #2</td>
                    <td>Content Data #3</td>
                    <td>Content Data #4</td>
                    <td>Content Data #5</td>
                  </tr>
                  <tr>
                    <td>Content Data #1</td>
                    <td>Content Data #2</td>
                    <td>Content Data #3</td>
                    <td>Content Data #4</td>
                    <td>Content Data #5</td>
                  </tr>
                  <tr>
                    <td>Content Data #1</td>
                    <td>Content Data #2</td>
                    <td>Content Data #3</td>
                    <td>Content Data #4</td>
                    <td>Content Data #5</td>
                  </tr>
                  <tr>
                    <td>Content Data #1</td>
                    <td>Content Data #2</td>
                    <td>Content Data #3</td>
                    <td>Content Data #4</td>
                    <td>Content Data #5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
          <q>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </q>
          <span className="headings-display-normal">
            Big section title content
          </span>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            est, sagittis non est nec, maximus dictum velit. Cras eu quam velit.
            Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Phasellus tristique cursus augue vitae eleifend.
            Suspendisse leo quam, convallis ornare est vitae, luctus elementum
            purus. Mauris tincidunt sit amet massa sed semper. Sed molestie
            ornare risus, sed dictum leo dictum non.
          </p>
          <h3 className="headings-h-3-bold">Marketing Tips</h3>
          <div className="link-container">
            <VisualLink
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
            <VisualLink
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
            <VisualLink
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
          </div>
          <h3 className="headings-h-3-bold">Risorse da non perdere</h3>
          <div className="card-container">
            <Card
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
            <Card
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
            <Card
              title="Sed viverra nisl ac ex euismod"
              alt="Sed viverra nisl ac ex euismod"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisl ac ex euismod, sit amet porta quam consectetur."
              src="https://cdn.pixabay.com/photo/2015/06/24/01/15/coffee-819362_960_720.jpg"
              href="https://blog.hubspot.com/marketing/social-media-marketing?_conv_v=vi%3A1*sc%3A4*cs%3A1671789023*fs%3A1656939408*pv%3A7*seg%3A%7B10031564.1%7D*exp%3A%7B100330256.%7Bv.1003131869-g.%7B%7D%7D-100331905.%7Bv.1003135838-g.%7B10033808.1-10033809.1%7D%7D%7D*ps%3A1657532629&_conv_s=si%3A4*sh%3A1671789022836-0.476087639009229*pv%3A2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
