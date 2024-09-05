"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/public/assets/Hero.svg";
import MainHeroImage from "@/public/assets/Mitch's-Head-Shot-for-ZWL site.jpg";
import HeroSection from "./components/HeroSection";
import InterestingSection from "./components/InterestingSection";
import EnhancedByAI from "@/public/assets/EnhancedByAI.jpg";
import {
    DEMO_INTERESTING_SNIPPETS,
    DEMO_WHAT_MAKES_DIFFERENT,
    DEMO_HELP_QUESTIONS,
    DEMO_SERVICES,
    DEMO_TESTIMONIES,
    DEMO_DOCKETS,
    DEMO_WHO_WE_ARE,
    DUMMY_FAMILIES_DATA,
    DUMMY_PERSONAL_GROWTH_DATA,
    DUMMY_RI_DATA,
    DUMMY_WHAT_WE_DO_DATA,
} from "@/data/MockData";
import WhatMakesDifferentSection from "./components/WhatMakesDifferentSection";
import WhatIDOSection from "./components/WhatIDoSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DocketSection from "./components/DocketSection";
import SuggestionBox from "./components/SuggestionBox";
import WhoSection from "./components/WhoSection";
import GetInTouchSection from "./components/GetInTouchSection";
import ToolsAndTech from "./components/ToolsAndTech";
//import CardsComponent from "./components/CardsComponent";
import Footer from "./components/Footer";
import Section3 from "./components/Section";
import Section4 from "./components/Section4";
import PartnerWithUs from "./components/PartnerWithUs";
import { title } from "process";
import Pyramid from "./components/Pyramid";
import CardsComponent from "./components/WhatWeDo";


export default function Home() {
    return (
        <div className="bg-[#F4EADF] min-h-screen">
            <Navbar brandName="The <Inflection> Point" />

            <HeroSection
                title={`Zero <Wait list>`}
                desc={`A concierge service to make sure you get the help you need`}
                title2={`We help you answer 5 questions:`}
                desc2={`<t><m>1)</m>Do we have a problem – if so, what is it?</t>\n<t><m>2)</m>Do we need help? If so, what kind?</t>\n<t><m>3)</m>Where do I find it?</t>\n<t><m>4)</m>What does it cost?</t>\n<t><m>5)</m>Will it do any good?</t>`}
                img={MainHeroImage}
                btns={[{ btnText: "Watch 2:16 Video", type: "video", link: "2g811Eo7K8U", title: "Random" }]}
            />

            {/* <WhatIDOSection data={DEMO_HELP_QUESTIONS} title="Our point of view" /> */}

            {/* <InterestingSection
                title={`This might be <interesting/ relevant> for you because`}
                description={`This is where visitors actually do something. They try a widget, use a tool, or complete a form. In each case they will get feedback in the form of a report. This is where we create the DESIRE for the product/service.`}
                data={DEMO_INTERESTING_SNIPPETS}
            /> */}

            {/* <ServicesSection services={DEMO_SERVICES} title={`What we do`} /> */}

            {/*<CardsComponent
                header={`What we do`}
                title={`<Families> – beautiful, fragile, messy`}
                sectionDetails={{
                    btnText: "Tiers, format & pricing",
                    link: "/assets/pdfs/TiersFormatsPricing.pdf",
                    type: "pdf",
                }}
                // tagline="The crucible of identity"
                data={DUMMY_FAMILIES_DATA}
            />*/}

            {/*<CardsComponent
                title={`Personal <Growth>`}
                // tagline={`Mastery required`}
                data={DUMMY_PERSONAL_GROWTH_DATA}
            />*/}

            {/*<CardsComponent
                title={`<Relational Intelligence> Groups and Workshop Series`}
                // tagline={`Mastery required`}
                data={DUMMY_RI_DATA}
            />*/}

            {/*<Section3
                // title1={`Year-long Relational Intelligence deep dive`}
                // text1={`For men only.\n\nThis is a big ask for a bigger result. An all hands-on-deck experience.\nTwelve people make a larger commitment within themselves and to each other.\n\nAnd make real progress on the biggest issues in their lives. The saving several times the cost.`}
                // btn1={{
                // text: "Learn more",
                // type: "text",
                // link: `This is a big ask for a bigger result. An all hands-on-deck experience.\nTwelve people make a larger commitment within themselves and to each other.\n\nAnd make real progress on the biggest issues in their lives. The saving several times the cost of this.\n\n\nAt work\n<t>Acquiring power and influence and learning how to use it</t>\n<t>Defining and employing your greatest talents, and offloading your weaknesses</t>\n<t>Dealing with the persnickety politics that could sink you</t>\n<t>How do I know if/when I should leave my current position</t>\n\nAt home\n<t>What's it worth to be the husband and father you need to be</t>\n<t>What sucked about your growing up, and how can you nip that in the bud here and now</t>\n<t>What's really uncomfortable for me and my family – who am I worried about what can I do about it</t>\n\nDo you have 1¼ hours a week? Out of the 40-60 hours you will work this week?\nDo you have time to do something that will save you 4x that much time each week?\n\nFormat\n<t>Weekly group meetings, in person or hybrid</t>\n<t>Access to your personal portal</t>\n<t>Weekly 20-30 minute virtual group check-in</t>\n<t>Additional resources, gatherings, tools, meetings as needed</t>\nCost: $6,000 for the year\n<t>Equals the cost of a decent executive coach for one day.</t>\n<t>If the cost in time or money is prohibitive, don't do it.</t>\n<t>Because this is for those who are ready.</t>`,
                // }}
                title2={`What we do not do`}
                text2={`1.  Traditional diagnosis-based treatment of mental health conditions\n2.  Prescribe medications\n3.  Handle emergency situations`}
            />*/}

            <CardsComponent
                header={`What we do`}
                // title={`<Families> – beautiful, fragile, messy`}
                sectionDetails={{
                    btnText: "4 Steps to Cost-Effective Help",
                    link: "/assets/pdfs/TiersFormatsPricing.pdf",
                    type: "pdf",
                }}
                // tagline="The crucible of identity"
                data={DUMMY_WHAT_WE_DO_DATA}
            />


            { <Pyramid
                title={`Pathways <& Pricing>`}
                line={`Get as little or as much as you need. Start anywhere→go any where.`} 
                line2={`This is not built to handle emergencies.\nPeople in emergent situations should go to their local Emergency Departments.`} 
                /*tagline={{ title: `Tiers, formats and pricing`, btnTxt: "Learn more", link: "/assets/pdfs/Tiers.pdf" }}*/
                tagline={{
                    title: "Product Format",
                    btnTxt: "More Info",
                    link: "/assets/pdfs/Product Formats-2024.pdf"
                }}
                tagline1={{
                    title: "POV on Pricing",
                    btnTxt: "More Info",
                    link: "/assets/pdfs/Pov-pricing-2024.pdf"
                }}                   
                pyramid={{
                    title1: `Tier 1 – Self-help - free or $\n`,
                    text1: `Enough for some–A start for many. Self-organized peer-to-peer learning`,
                    desc1: 'To provide broad accessibility, we have a self-help tier. Digital tools, worksheets, and assessments help you learn something about yourself and your situation. If you want, you can self-organize with others for peer-to-peer learning.\n\nIn the future, this self-help layer will become more personalized to you and be able to measure/monitor your growth. But not yet.\n\nCost: freemium model – free for two months and then a subscription of $39/month.',
                    
                    title2: `Tier 2 – Skillshops - $`,
                    text2: `Practical workshops–topics as needed`,
                    desc2: 'Perhaps you don’t need therapy or small groups, but want some greater insights and/or skills. Perhaps until you find a small group or a therapist. Skillshops are 1) participative/interactive, and 2) focused on practical actions and skills.\n\n Each Skillshop is designed around a particular issue, need, or topic. Some Skillshops are longer and include a series of 6+ meetings.\n\n How it works:\n <t>1. Register and fill out a questionnaire.</t>\n <t>2. Attend a 75-minute in-person workshop.</t>\n <t>3. 30-minute virtual group meeting one week later.</t>\n<t>4. Another 30-minute virtual group meeting two weeks after that.</t>\n\nCost: $150 for the basic three-meeting Skillshop. Skillshop series are priced by number of meetings.',

                    title3: `Tier 3 – Small groups - $$`,
                    text3: `The rubber meets the road–Expect change`,
                    desc3: 'Working on yourself in a small group of others is a cost-effective way of making real change. We curate who is in which groups to promote the best learning experience. Each participant has a personalized learning/growth plan.\n\n Cost:\n - Groups of 5 or 6 people: $70/meeting\n - Groups of 8-10 people: $50/meeting\n',

                    title4: `Tier 4 – One-on-One - $$$`,
                    text4: `Answer the 5 questions`,
                    desc4: 'We help you answer the five questions about what you need, where to find it, and cost-effectiveness. This can save a LOT of time and money versus choosing the wrong therapist or pathway forward.\n\nQuicker Option\nYou fill out some forms, and we meet in person. We come to an understanding of the situation you’re in and make a plan for next steps. Referral directly to a therapist if needed.  \nCost: $350\n\nDeeper Option\n15-minute orientation call \n Personalized forms for you, your spouse, and/or family  \nWe meet for 1.5 hours, debrief forms, define goals, and explore solutions\n  We make a clear action plan with options depending on budget, timing, etc.  \nWe follow up later to make sure the action plan is working\n  Cost: $750\n\nOptional Add-on to Deeper Option\nIndividually-curated set of sequential resources, content, and worksheet-like tools  \nPersonalized learning agenda with steps, goals, and progress measures  \nCost: $150\n\n',
                }}
            /> }    
 
            
            <TestimonialsSection testimonies={DEMO_TESTIMONIES} />

            <WhatMakesDifferentSection
                title={`Selected <life skills>`}
                desc={`Rotating Skillshops, webinars and small groups`}
                data={DEMO_WHAT_MAKES_DIFFERENT}
                // btn={{ btnTxt: "See Formats and Pricing", type: "pdf", link: "/assets/pdfs/Pricing2.pdf" }}
            />

            <PartnerWithUs
                title={`Partner <with us>`}
                desc={`Zero Wait List maintains an active referral network\nPlease reach out if you are interested.`}
                title1={`We help you find the right services/people for:`}
                //text1 = {`<t><m>1.</m>One-on-one therapy</t>\n<t><m>2.</m>Psychiatric evaluations (esp. meds)</t>\n<t><m>3)</m> Diagnosis-based treatments (e.g. anxiety, depression, eating disorders, substance abuse, trauma, etc.)</t>\n<t><m>4)</m> School evaluations, custody, parental alienation</t>\n<t><m>5)</m> Interpersonal violence</t>`}
                text1 = {`<t><m>1.</m>One-on-one therapy</t>\n<t><m>2.</m>Psychiatric evaluations especially meds</t>\n<t><m>3.</m>Diagnosis-based treatments (inc. anxiety, depression, eating disorders, substance abuse, trauma, etc.)</t>\n<t><m>4.</m>School/custody evaluations, parental alienation</t>\n<t><m>5.</m>Interpersonal violence</t>`}

                //text1={`1. One-on-one therapy\n2. Psychiatric evaluations (esp. meds)\n3. Diagnosis-based treatments (e.g. anxiety, depression, eating disorders, substance abuse, trauma, etc.)\n4. School evaluations, custody, parental alienation\n5. Interpersonal violence`}
            
                title2={`We partner with:`}
                text2 = {`<t><m>1.</m>People who create community</t>\n<t><m>2.</m>Business builders</t>\n<t><m>3.</m>Primary care physicians</t>\n<t><m>4.</m>Therapists</t>\n<t><m>5.</m>Human service agencies</t>\n<t><m>6.</m>Mentors, facilitators, teachers, mediators/</t>\n<t><m>7.</m>Psychiatrists/Psychiatric RNs</t>\n<t><m>8.</m>Civic organizations</t>\n<t><m>9.</m>Interested nonprofessionals (moms, dads)</t>`}
            />            

            {/* <DocketSection dockets={DEMO_DOCKETS} title={`What's on the <Docket?>`} /> */}

            {/* <SuggestionBox
                title={`Suggestion box`}
                desc={`<What do you want?>`}
                disclaimer={`Where there is interest, we will create something for you. \nPlease note that these services are not therapy and not designed for people with mental health issues.`}
            /> */}



            {/* <ToolsAndTech
                image={EnhancedByAI}
                title="Tools & Tech"
                desc={`Tool use separated humans from our primate ancestors.\n\nHammerstones, handaxes, sharp stone flakes.\nHarnessing fire. Hunting tools. Clothing. Bow and arrow.  Metallurgy.\n\nSteam engine.  Power loom.  Electricity.  Internal combustion engine.\nDuring the three Industrial Revolutions, GDP per capita accelerated faster than any other time in human history. Farmers had tractors.\n\nSteel. Chemistry.  Computers.  Escalating wealth gap since 1979.\nThe internet and digital divide.\n\nAnd here in 2024, AI tool use will again create separations among us.\n\nWhat does that mean for us?\nSince about 75% of gains you make depend on what you do, these tools provide a way for you to learn and grow outside of our meeting times. And we can keep in touch in between meetings.`}
            /> */}

            <WhoSection title={`Who is <Mitch Dickey?>`} data={DEMO_WHO_WE_ARE} />

            <GetInTouchSection title={`Let's get <in touch>`} />

            <Footer
                linkedinLink="https://www.linkedin.com/in/mitchelldickeyphd/"
                fbLink="https://www.facebook.com/relationalintelligence101"
                instaLink="https://www.instagram.com/strongrelat/"
                youtubeLink="https://www.youtube.com/channel/UCglwunPc5I8NRAvvuOnxiUA"
            />
        </div>
    );
}
