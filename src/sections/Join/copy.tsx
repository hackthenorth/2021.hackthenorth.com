// import { Text, Link } from "@hackthenorth/north";
import React from "react";
import { Link } from "src/components/base";
import { TWText } from "src/styles";
import "twin.macro";
import { styled } from "twin.macro";

import { ListingType, TOrganizerListing } from "./types";

// const UnstyledText = <p css={[TWText.body]}/>
const StyledText = styled.p`
  ${TWText.body}
  > ul {
    padding-inline-start: 20px;
    display: list-item;
    > li {
      list-style-type: disc;
    }
  }
`;

const DESIGN_LISTINGS: TOrganizerListing[] = [
  {
    title: "Product Designer",
    link: "https://forms.gle/7fqBKTNjv9d6hpS48",
    description:
      "As a Product Designer for Hack the North, you will have the opportunity to design for Canada’s biggest hackathon. You will be responsible for crafting beautiful experiences and designing intuitive interfaces that will reach thousands of people worldwide. As a part of the Hack the North Design Team, you get to define what someone sees and experiences any time they interact with Hack the North.",
    descriptionExtra: (
      <p css={[TWText.body]}>
        Curious about what designing at Hack the North is like? Read our blog
        post{" "}
        <Link
          css={[TWText.bodyBold, TWText.link]}
          newTab
          href="https://bit.ly/3n9NWxL"
        >
          here
        </Link>
        !
      </p>
    ),
    responsibilities: (
      <StyledText>
        <ul>
          <li>
            Design intuitive interfaces and seamless user experiences across our
            website and mobile offerings (that will be used by thousands of
            people globally!)
          </li>
          <li>
            Go beyond digital UI and contribute to digital solutions for the
            event experience; use design thinking to build an understanding for
            our diverse hackathon attendees
          </li>
          <li>
            Work closely with the rest of the Design Team to maintain a
            consistent brand language
          </li>
          <li>
            Collaborate with frontend developers to define specifications and
            designs, and with your fellow designers to provide and receive
            feedback
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Enjoy designing simple but effective human-centered interfaces and
            experiences
          </li>
          <li>
            Adaptable and efficient with an eagerness to iterate on designs
            based on feedback
          </li>
          <li>
            Have a passion and natural curiosity for designing for diversity,
            inclusion and accessibility
          </li>
          <li>
            Have experience working with design tools (Sketch, Figma, Adobe
            Creative Suite)
          </li>
          <li>
            Have a portfolio showcasing your web and/or mobile product design
            work
          </li>
          <li>Bonus: Experience working with frontend developers</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DESIGN,
  },
  {
    title: "Graphic Designer",
    link: "https://forms.gle/66BudGfPQZGi7nFa7",
    description:
      "As a Graphic Designer for Hack the North, you will be bringing Canada's biggest hackathon's brand to life on web, mobile, and social media platforms. You will be the go-to person for creating beautiful and polished visual work, whether it's the Hack the North 2022 shirt illustration, social media assets, or even a short animation for a Facebook announcement. As a part of the Hack the North Design Team, you get to define what someone sees any time they interact with Hack the North.",
    descriptionExtra: (
      <p css={[TWText.body]}>
        Curious about what designing at Hack the North is like? Read our blog
        post{" "}
        <Link
          css={[TWText.bodyBold, TWText.link]}
          newTab
          href="https://bit.ly/3n9NWxL"
        >
          here
        </Link>
        !
      </p>
    ),
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Create and experiment with various aspects of design (ex.
            illustration, motion, typography) to create an impactful brand
            identity
          </li>
          <li>
            Design compelling visual assets for our website and/or mobile
            offerings, social media accounts, and promotional items (ex. swag,
            photo booth, event booklet)
          </li>
          <li>
            Work closely with the rest of the Design Team to maintain a
            consistent brand language that is diverse, inclusive and accessible
          </li>
          <li>
            Collaborate with the Marketing Team and Logistics Team to define
            specifications and designs, and with your fellow designers to
            provide and receive feedback
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Proficient with Adobe Creative Suite (Illustrator, Photoshop,
            InDesign, After Effects)
          </li>
          <li>
            Adaptable and efficient with an eagerness to iterate on designs
            based on feedback
          </li>
          <li>
            Have experience creating social media assets or promotional items
          </li>
          <li>
            Have a portfolio showcasing strong visual design work, whether it be
            illustration, motion, print, etc.
          </li>
          <li>
            Bonus: Have experience in motion graphics and/or animation, have
            experience using Figma
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DESIGN,
  },
];

const DEVELOPMENT_LISTINGS: TOrganizerListing[] = [
  {
    title: "Frontend Developer",
    link: "https://forms.gle/R3RAQNVeYXaSPJaG8",
    description:
      "Frontend Developers shape how our audiences experience and interact with Hack the North online. Whether it's working with designers to craft our main website, building modern interactive web apps like our hacker application dashboard, or brainstorming and launching new initiatives like a component library, you can expect to ship plenty of quality code to tens of thousands of users worldwide while learning new skills in a supportive team that encourages growth.",
    descriptionExtra: (
      <p css={[TWText.body]}>
        Curious how we make the beautiful animations on our website? Read our
        blog post{" "}
        <Link
          css={[TWText.bodyBold, TWText.link]}
          newTab
          href="https://hackthenorth.medium.com/behind-the-animations-at-hack-the-north-bf9d41e23bd3"
        >
          here
        </Link>
        !
      </p>
    ),
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Write quality, maintainable code for numerous projects, including:
          </li>
          <ul>
            <li>Our main static site, hackthenorth.com</li>
            <li>Hacker Applications, apply.hackthenorth.com</li>
            <li>Attendee Dashboard, my.hackthenorth.com</li>
            <li>
              A wealth of other rich web apps and tools used by hackers,
              sponsors, mentors, organizers, and more!
            </li>
          </ul>
          <li>
            Help the entire Frontend Team grow as developers by contributing to
            discussions and participating in code reviews
          </li>
          <li>
            Architect new projects and improvements to scale and advance our
            frontend architecture
          </li>
          <li>
            Collaborate with various teams to build great experiences for
            attendees from around the globe
          </li>
          <li>
            Provide a healthy dose of memes to the rest of the organizing team
            during team-wide meetings
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Have some prior web development experience using HTML, CSS, and
            JavaScript
          </li>
          <li>
            Be familiar with or have an interest in:
            <ul>
              <li>Frontend frameworks such as React</li>
              <li>Accessibility and responsive design best practices</li>
              <li>Building data driven frontends that interface with APIs</li>
            </ul>
          </li>
          <li>
            Bonus: Familiarity with TypeScript + modern React (hooks, Context) +
            GraphQL
          </li>
          <li>
            Bonus: Experience working with designers and design processes/tools
            like Figma
          </li>
          <li>
            Bonus: A good understanding of accessibility best practices to cater
            towards the diverse audience of Hack the North
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DEVELOPMENT,
  },
];

const SPONSORSHIP_LISTINGS: TOrganizerListing[] = [
  {
    title: "Sponsorship Coordinator",
    link: "https://forms.gle/vEcNk7MSQgHEDzcP6",
    description:
      "As a Sponsorship Coordinator for Hack the North, you will be responsible for building relationships with sponsors that support our event. Your work shaping the platform of funding is what enables hackers from all over the world to have an amazing experience. Our sponsors play an important role to our hackers, providing opportunities to network and receive mentorship from top industry professionals, and you will be making these connections possible. Together with other members of the Sponsorship Team, your efforts will ensure that today’s leading technology companies continue to provide dream opportunities for students at Hack the North.",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Cultivate new and existing relationships with sponsors as the first
            point of contact for all sponsor representatives at the event
          </li>
          <li>Raise the funding that will bring Hack the North to life</li>
          <li>
            Coordinate with the Logistics, Marketing, Platform and Design Teams
            to build great experiences for sponsors from around the world
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Have strong interpersonal, writing, and verbal skills</li>
          <li>
            Be energetic and possess a wicked work ethic (calls need to be made
            during regular business hours)
          </li>
          <li>
            Be passionate about reaching out to a diverse set of sponsors –
            sponsor interactions excite you!
          </li>
          <li>
            Bonus: Have prior experience planning events (the bigger the better)
          </li>
          <li>Bonus: Have previous sales or sponsorship experience</li>
          <li>Bonus: Have experience with CRM and lead tracking software</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.SPONSORSHIP,
  },
];

const MARKETING_LISTINGS: TOrganizerListing[] = [
  {
    title: "Marketing Team Lead",
    link: "https://forms.gle/PLUhcrdfh5uowhrF7",
    description:
      "As the Marketing Team Lead, you will have the opportunity to  oversee Hack the North's inclusive marketing campaigns, public relations, and other external communications. You will be expected to have a deep understanding of Hack the North’s brand, mission, and values to ensure that they are communicated across all our platforms and publications to tens of thousands of people in our global audience. In addition to leading marketing initiatives, you will also have the opportunity to showcase your leadership, teamwork, and empathy skills to ensure your team of 2-3 Marketing Organizers have a fulfilling and valuable experience while aligning with the organization's goals throughout the year.",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Manage and direct inclusive marketing campaigns for Hack the
            North&apos;s global audience
          </li>
          <li>
            Scope out and quickly iterate on copy, social media posts, and more
            during major annual milestones
          </li>
          <li>
            Work with the leadership team to keep our external voice and image
            aligned with Hack the North&apos;s internal goals
          </li>
          <li>
            Help shape high-level decisions regarding brand identity and
            organizational values
          </li>
          <li>Drive the research into new and effective marketing tactics</li>
          <li>Support and mentor all Marketing Organizers</li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Be knowledgeable about current marketing trends</li>
          <li>Have a passion for marketing tactics and strategies</li>
          <li>Demonstrate strong organizational and management skills</li>
          <li>
            Be able to articulate and instill passion for organizational goals
          </li>
          <li>
            Have strong leadership skills to build a supportive, encouraging,
            and motivating team culture
          </li>
          <li>Have great attention to detail</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.MARKETING,
  },
  {
    title: "Marketing Organizer",
    link: "https://forms.gle/CoUJSJMXBvpBBk5f8",
    description:
      "As a Marketing Organizer, you contribute to all external communications associated with Hack the North's most significant milestones, including hacker applications, judge and speaker announcements, media spotlights, and community initiatives. You'll have the opportunity to conceptualize, plan, and execute multifaceted marketing campaigns that reach tens of thousands of people in our global audience.",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Develop inclusive social media and outreach campaigns to grow our
            audience, increase audience engagement, and create excitement for
            the event
          </li>
          <li>
            Understand and utilize inclusive marketing tactics to reach and
            enable a diverse audience to fully experience and connect with Hack
            the North
          </li>
          <li>
            Write professional, compelling, and inclusive content for external
            communications, including our website, emails, sponsorship packages,
            and other materials
          </li>
          <li>
            Have a strong understanding of Hack the North’s brand and convey it
            through written content and marketing strategies
          </li>
          <li>
            Ensure that published content is consistent in tone, style, content,
            and accuracy
          </li>
          <li>
            Work with designers and developers to scope out written content,
            quickly iterate, and respond to changing product specifications
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Excellent understanding of social media content and strategy</li>
          <li>Be able to write professionally and inclusively</li>
          <li>Have great attention to detail</li>
          <li>Be flexible and adaptable in a fast-paced environment</li>
          <li>
            Be able to work cross functionally with designers and developers
          </li>
          <li>
            Bonus: Have previous experience with launching ad campaigns (ie.
            Facebook, Linkedin)
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.MARKETING,
  },
];

const LOGISTICS_LISTINGS: TOrganizerListing[] = [
  {
    title: "Logistics Organizer",
    link: "https://forms.gle/GZridLqANxJQsiECA",
    description:
      "As a Logistics Organizer for Hack the North, you will be directly in charge of planning, building, and executing Canada’s biggest hackathon, and empower thousands of attendees from diverse backgrounds. You will take ownership of one or two major components of the event, seeing it from planning to completion. Projects include coordinating workshops to educate and inspire hackers of all skill levels, managing our inventory of hardware items and creating a system to lend it out to hackers, and planning activities and meetups to nurture a sense of community at the event!",
    descriptionExtra: (
      <p css={[TWText.body]}>
        As a Logistics Organizer, you will also work with other teams to
        coordinate design assets, manage project budget, and develop custom
        tools. Your hard work will culminate in 36 hours of perfectly planned
        chaos that will leave behind an unforgettable experience for you and the
        attendees at Hack the North 2022.
      </p>
    ),
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Take ownership of one or two projects and do whatever it takes to
            see it through to success
            <StyledText>
              <ul>
                <li
                  style={{
                    listStyleType: "circle",
                  }}
                >
                  Possible projects include: Event Platform, Ceremonies,
                  Workshops, Activities, Judging, Swag, and more — see the
                  application form for more details!
                </li>
              </ul>
            </StyledText>
          </li>
          <li>Take on new tasks, big and small, as the need arises</li>
          <li>
            Innovate and implement new ways to provide an unforgettable
            experience for event attendees
          </li>
          <li>
            Create an event and community that welcomes and empowers attendees
            from diverse and underrepresented backgrounds.
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Be relentlessly detail-oriented</li>
          <li>Be creative and able to think outside the box</li>
          <li>
            Be organized and able to keep track of multiple tasks and
            responsibilities at once
          </li>
          <li>
            Have excellent teamwork, communication, and collaboration skills
          </li>
          <li>Takes initiative and able to work autonomously</li>
          <li>
            Bonus: Strong communication and negotiation skills for working with
            vendors
          </li>
          <li>
            Bonus: An understanding of the diverse audience of Hack the
            North/hackathons in general
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.LOGISTICS,
  },
  {
    title: "Logistics Team Lead",
    link: "https://forms.gle/GZridLqANxJQsiECA",
    description:
      "The Logistics Team is co-managed by two Logistics Team Leads, who work closely together to foster a tight-knit and cohesive team and pull off a successful event in all aspects. Each Logistics Team Lead directly oversees 3-4 logistics organizers and their respective projects, and provides mentorship, guidance and support to team members. As a new team lead, you will be working with an experienced team lead who will guide you smoothly into the non-traditional, fast-moving organization behind Canada's biggest hackathon.",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Empower your team members to grow to take on and excel in the
            responsibilities they are assigned
          </li>
          <li>
            Check-in regularly with the other Logistics Lead to stay up-to-date
            with all things logistics
          </li>
          <li>
            Communicate with other team leads to ensure the wider Hack the North
            team is working together cohesively and effectively
          </li>
          <li>
            Track progress of your team members and ensure that timelines and
            goals are being met
          </li>
          <li>
            Keep an eye on the big picture to make sure everything comes
            together cohesively and nothing slips through the cracks
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Experience working closely with and managing a team</li>
          <li>Be relentlessly detail-oriented</li>
          <li>Be creative and able to think outside the box</li>
          <li>
            Be extremely organized and able to track multiple projects and
            deadlines at once
          </li>
          <li>
            Understand how to effectively prioritize and allocate resources
          </li>
          <li>Be able to handle high-pressure situations</li>
          <li>
            Bonus: Experience with project management systems/methodologies
          </li>
          <li>
            Bonus: Understand the various pieces that come together to make a
            successful hackathon
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.LOGISTICS,
  },
];

const FINANCE_LISTINGS: TOrganizerListing[] = [
  {
    title: "Finance Director",
    link: "https://forms.gle/LTappxZn4rfrMz1A6",
    description:
      "As one of two Finance Directors on the Hack the North team, you will be responsible for Hack the North's finances. From building budgets, to negotiating with external vendors, you will be collaborating across the entire organization to ensure the success of our event. ",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Creating and tracking annual event budget</li>
          <li>Processing expenses and team reimbursements</li>
          <li>
            Work with sponsors to process and collect sponsorship payments
          </li>
          <li>
            Collaborating effectively with organizers across the team to make
            financial decisions
          </li>
          <li>Aligning financial expectations within the organization</li>
          <li>
            Keeping an eye on the big picture and balancing current expectations
            with anticipated future needs
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>Basic proficiency in Microsoft Excel</li>
          <li>Strong organization skills and attention to detail</li>
          <li>Strong interpersonal and communication skills</li>
          <li>
            Work comfortably in a team environment with changing priorities and
            time pressures
          </li>
          <li>
            Be familiar with accounting principles (baseline: AFM101 -
            Introduction to Financial Accounting or similar)
          </li>
          <li>
            Bonus: Experience with QuickBooks, Wave or a similar accounting
            software
          </li>
          <li>
            Bonus: Have prior experience planning events (the bigger the better)
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.FINANCE,
  },
];
const OPERATIONS_LISTINGS: TOrganizerListing[] = [
  {
    title: "Internal Operations Director",
    link: "https://forms.gle/b6k8PjraWdvQr9HR8",
    description:
      "As the Internal Operations Director, you'll help keep the team organized and play a central role in fostering a positive team culture and organizer experience. You'll help keep the team operating smoothly by overseeing All-Hands meetings, taking meeting minutes, and administering the online tools that keep our team in sync. You'll also be responsible for organizing team socials and other initiatives to facilitate team bonding for a team split between remote and in-person. You'll have the unique opportunity to shape the day-to-day logistics and year-long experience of a highly active team.",
    responsibilities: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Organize All-Hands meetings by helping prepare the agendas and
            moderating the meetings
          </li>
          <li>
            Attend Team Leads meetings to take minutes and capture key takeaways
            and action items
          </li>
          <li>
            Plan socials and other initiatives to facilitate team bonding and
            cohesion throughout the year
          </li>
          <li>
            Ensure the team is operating smoothly by performing administrative
            tasks
          </li>
          <li>
            Proactively foster an inclusive environment in all aspects of your
            work
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText css={[TWText.body]}>
        <ul>
          <li>
            Have strong interpersonal, written, and verbal communication skills
          </li>
          <li>Have strong organizational skills and attention to detail</li>
          <li>Have experience with coordinating groups of people</li>
          <li>
            Bonus: have experience fostering positive team culture or
            communities
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.OPERATIONS,
  },
];

export const ORGANIZER_LISTINGS: TOrganizerListing[] = [
  ...LOGISTICS_LISTINGS,
  ...SPONSORSHIP_LISTINGS,
  ...DESIGN_LISTINGS,
  ...DEVELOPMENT_LISTINGS,
  ...MARKETING_LISTINGS,
  ...FINANCE_LISTINGS,
  ...OPERATIONS_LISTINGS,
];
