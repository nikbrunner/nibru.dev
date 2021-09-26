import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";

import { Button } from "@components/ui/Button";
import { Headline } from "@components/ui/Headline";
import { Link } from "@components/ui/Link";
import { Paragraph } from "@components/ui/Paragraph";

import { Skill } from "@components/profile/Skill";
import { Experience } from "@components/profile/Experience";

import { IExperience as ExperienceType } from "@typings/profile/Experience";
import { ISkill as SkillType } from "@typings/profile/Skill";

import { skills } from "@data/skills";
import { experiences } from "@data/experiences";
import { profile } from "@data/profile";

const Components = () => (
  <Page name="Components">
    <Section>
      <Headline tag="h1">Components Overview</Headline>

      <Paragraph>
        This page is just an overview over all components.
      </Paragraph>
    </Section>

    <Section>
      <Headline>Link component</Headline>

      <div>
        <Paragraph>
          This is an external link to{" "}
          <Link href={profile.github} type="external">
            GitHub
          </Link>
          , and this is an external link to{" "}
          <Link href={profile.linkedin} type="external">
            LinkedIn
          </Link>
          . This is an internal Link to the{" "}
          <Link href="/about" type="internal">
            About page
          </Link>
          .
        </Paragraph>
      </div>
    </Section>

    <Section>
      <Headline tag="h1">Headline Size H1</Headline>
      <Headline tag="h2">Headline Size H2</Headline>
      <Headline tag="h3">Headline Size H3</Headline>
      <Headline tag="h4">Headline Size H4</Headline>
      <Headline tag="h5">Headline Size H5</Headline>
      <Headline tag="h6">Headline Size H6</Headline>
    </Section>

    <Section>
      <Headline>Text component</Headline>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Interdum posuere{" "}
        <Link href="/home" type="internal">
          home
        </Link>{" "}
        dolor sit amet. Viverra vitae congue eu consequat ac felis donec
        et. Tempor id eu nisl nunc. Hac habitasse platea dictumst quisque
        sagittis purus sit amet volutpat. Nibh cras pulvinar mattis nunc
        sed. Nec feugiat in fermentum posuere urna. Interdum velit laoreet
        id donec ultrices tincidunt arcu. Quam vulputate dignissim
        suspendisse in. Feugiat sed lectus vestibulum mattis.
      </Paragraph>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Interdum posuere{" "}
        <Link href="/home" type="internal">
          home
        </Link>{" "}
        dolor sit amet. Viverra vitae congue eu consequat ac felis donec
        et. Tempor id eu nisl nunc. Hac habitasse platea dictumst quisque
        sagittis purus sit amet volutpat. Nibh cras pulvinar mattis nunc
        sed. Nec feugiat in fermentum posuere urna. Interdum velit laoreet
        id donec ultrices tincidunt arcu. Quam vulputate dignissim
        suspendisse in. Feugiat sed lectus vestibulum mattis.
      </Paragraph>
    </Section>

    <Section>
      <Headline tag="h1">Lorem ipsum dolor sit amet.</Headline>

      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        aperiam voluptas explicabo, similique sunt provident quis beatae ab
        blanditiis veritatis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ad, laboriosam. Molestias accusamus, mollitia
        cumque quos omnis nostrum aliquam ducimus fugiat qui architecto
        totam vel hic doloribus corrupti a, eaque laudantium officiis
        asperiores fuga quae eos quisquam! Fugit amet, delectus rem quia
        necessitatibus molestiae, aliquid quam dignissimos doloribus, nemo
        modi totam!
      </Paragraph>

      <Headline tag="h2">Lorem, ipsum dolor.</Headline>

      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        aperiam voluptas explicabo, similique sunt provident quis beatae ab
        blanditiis veritatis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ad, laboriosam. Molestias accusamus, mollitia
        cumque quos omnis nostrum aliquam ducimus fugiat qui architecto
        totam vel hic doloribus corrupti a, eaque laudantium officiis
        asperiores fuga quae eos quisquam! Fugit amet, delectus rem quia
        necessitatibus molestiae, aliquid quam dignissimos doloribus, nemo
        modi totam!
      </Paragraph>

      <Headline tag="h3">Lorem ipsum dolor sit amet.</Headline>

      <Paragraph>
        Vitae tempus quam{" "}
        <Link href="https://google.com" type="external">
          Pellentesque
        </Link>{" "}
        nec nam. Praesent semper feugiat nibh sed pulvinar proin gravida
        hendrerit lectus. Ipsum dolor sit amet consectetur adipiscing elit
        duis tristique sollicitudin. Nisi quis eleifend quam adipiscing
        vitae. Posuere sollicitudin aliquam ultrices sagittis orci. Vitae
        suscipit tellus mauris a. Proin sagittis nisl rhoncus mattis.
        Viverra vitae congue eu consequat ac felis donec. Diam maecenas
        ultricies mi eget mauris pharetra. Donec pretium vulputate sapien
        nec sagittis aliquam malesuada.
      </Paragraph>

      <Headline tag="h4">Lorem ipsum dolor sit.</Headline>

      <Paragraph>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Paragraph>

      <Headline tag="h5">Lorem ipsum dolor sit amet consectetur.</Headline>

      <Paragraph>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Paragraph>

      <Headline tag="h6">Lorem ipsum dolor sit.</Headline>

      <Paragraph>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Paragraph>
    </Section>

    <Section>
      <Headline>Button component</Headline>

      <div>
        <Button>This is a button without an Icon</Button>
      </div>

      <div>
        <Button size="l">This is a big button without an Icon</Button>
      </div>
    </Section>

    <Section>
      <div>
        <Headline>Grid</Headline>
      </div>

      <div>
        <div>
          <Headline tag="h2">Left column</Headline>

          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            aperiam voluptas explicabo, similique sunt provident quis
            beatae ab blanditiis veritatis! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ad, laboriosam. Molestias
            accusamus, mollitia cumque quos omnis nostrum aliquam ducimus
            fugiat qui architecto totam vel hic doloribus corrupti a, eaque
            laudantium officiis asperiores fuga quae eos quisquam! Fugit
            amet, delectus rem quia necessitatibus molestiae, aliquid quam
            dignissimos doloribus, nemo modi totam!
          </Paragraph>
        </div>

        <div>
          <Headline tag="h2">Right column</Headline>

          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            aperiam voluptas explicabo, similique sunt provident quis
            beatae ab blanditiis veritatis! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ad, laboriosam. Molestias
            accusamus, mollitia cumque quos omnis nostrum aliquam ducimus
            fugiat qui architecto totam vel hic doloribus corrupti a, eaque
            laudantium officiis asperiores fuga quae eos quisquam! Fugit
            amet, delectus rem quia necessitatibus molestiae, aliquid quam
            dignissimos doloribus, nemo modi totam!
          </Paragraph>
        </div>
      </div>
    </Section>

    <Section>
      <div>
        <Headline>Skill component</Headline>
      </div>

      <div className="Components__skills-container">
        <div>
          {skills.map(({ title, level, icon }: SkillType) => (
            <Skill key={title} title={title} level={level} icon={icon} />
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div>
        <Headline>Experience component</Headline>
      </div>

      <div className="Components__experiences-container">
        <div>
          {experiences.map(
            (
              { title, dateRange, company, details }: ExperienceType,
              idx: number
            ) => (
              <Experience
                key={title}
                title={title}
                dateRange={dateRange}
                company={company}
                details={details}
                current={idx === experiences.length - 1}
              />
            )
          )}
        </div>
      </div>
    </Section>
  </Page>
);

export default Components;
