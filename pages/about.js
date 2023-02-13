import React from "react";
import Head from "next/head";
import {
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import interests from "../data/interests.json";
import InterestTag from "@/components/interest-tag";
import Hero from "@/components/hero";
import Link from "@/components/link";

const About = () => (
  <PageTransition>
    <Hero title="About" align="start" subtitle="Learn more about me" />
    <VStack spacing={12} mt={6}>
      <Section>
        <VStack align="start" spacing={6}>
          <Text>
            I'm a designer, entrepreneur, and all-around curious person who
            can't get enough of exploring new ideas and asking lots of
            questions.
          </Text>
          <Text>
            I'm particularly interested in exploring better ways to collaborate
            and tackle important challenges together. This has led me to create
            the
            <Link href="https://www.facilitator.school">
              {" "}
              Facilitator School
            </Link>
            , an education platform with courses, resources, and tools around
            the topic of facilitation. Our goal is to help individuals develop
            the skills and knowledge necessary to create engaging, productive,
            and impactful gatherings.
          </Text>
          <Text>
            In my free time, you can usually find me reading books, cooking,
            playing board games or badminton, and spending time with those
            closest to me.
          </Text>
          <Text>
            I'm an advocate for writing and thinking in public, which I'm most
            actively doing on
            <Link href="https://www.linkedin.com/in/wirtzdan/"> LinkedIn </Link>
            at the moment.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            😁
          </Heading>
          <Wrap>
            {interests.like.map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            😒
          </Heading>
          <Wrap>
            {interests.dislike.map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">
            About this page
          </Heading>
          <Text>
            Everything you see here I have designed and built myself. The
            website is using <Link href="https://reactjs.org">React</Link> and{" "}
            <Link href="https://chakra-ui.com">Chakra UI</Link> as a design
            system. The pages are generated by{" "}
            <Link href="https://nextjs.org">NextJS</Link> and are hosted on{" "}
            <Link href="https://vercel.com/">Vercel</Link>.
          </Text>
          <Text>
            The content for the website, such as articles, books and bookmarks
            are stored on{" "}
            <Link href="https://airtable.com/invite/r/HsvqbADg">Airtable</Link>{" "}
            and then pulled in through their API endpoint. If you are curious,
            you can{" "}
            <Link href="https://github.com/wirtzdan/website">
              explore the code for this website
            </Link>{" "}
            on my Github.
          </Text>
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
);

export default About;
