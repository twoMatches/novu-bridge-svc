import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Html,
  Img,
  Preview,
  render,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { InvitationPayloadSchema } from "../workflows";

type InvitationEmailProps = {
  subject: string;
  body: string;
  invitationHref: string;
  fullName: string;
  companyProfileSrc?: string;
  companyName: string;
};

export const InvitationEmail = ({
  subject,
  body,
  invitationHref,
  fullName,
  companyName,
  companyProfileSrc
}: InvitationEmailProps) => {
  return (
    <Html>
      <Head>
        <Font fontFamily="Inter" fallbackFontFamily="sans-serif" />
      </Head>
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto ">
          <Container className=" my-10 mx-auto p-5">
            <Section className="mt-[40px]">
              <Img
                src="https://static.twomatches.dev/twomatches_logo_plus.png"
                width="127"
                height="61"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Container className=" w-full border border-solid border-[#fed5cc] mt-20 p-16">
              <Section>
                <Text className="text-[#6b6e7e] font-normal">
                  Hello {fullName},
                </Text>
                <Text className="text-[#6b6e7e] text-lg text font-light">
                  {body}
                </Text>

                <Section>
                  <Row>
                    <Column>
                      <Img
                        className="inline"
                        src={companyProfileSrc}
                        width="10"
                        height="10"
                      />
                      <Text className="inline text-[#6b6e7e] text-xs">
                        {companyName}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Section>
              <Section className=" mt-10">
                <Row>
                  <Column align="center">
                    <Button
                      className="bg-[#000000] rounded-[2px] text-white text-[14px] no-underline text-center px-8 py-3"
                      href={invitationHref}
                    >
                      View Invitation
                    </Button>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Container>

          <Section className="bg-[#fffaf2] h-40">
            <Row>
              <Column align="center">
                <Button
                  href="https://example.com"
                  className="bg-[#3a3d53] inline-block rounded-full mr-5 "
                >
                  <Img
                    className=" p-3"
                    src="https://static.twomatches.dev/facebook.png "
                  />
                </Button>
                <Button
                  href="https://example.com"
                  className="bg-[#3a3d53] inline-block rounded-full  mr-5"
                >
                  <Img
                    className=" p-3"
                    src="https://static.twomatches.dev/linkedin.png "
                  />
                </Button>
                <Button
                  href="https://example.com"
                  className="bg-[#3a3d53] inline-block rounded-full mr-5 "
                >
                  <Img
                    className=" p-3"
                    src="https://static.twomatches.dev/instagram.png "
                  />
                </Button>
              </Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default InvitationEmail;

export function renderInvitationEmail(payload: InvitationPayloadSchema) {
  return render(<InvitationEmail
    subject={payload.title}
    body={payload.description}
    invitationHref={payload.invitationHref}
    fullName={payload.fullName}
    companyName={payload.companyName}
    companyProfileSrc={payload.coverImgSrc}
  />);
}
