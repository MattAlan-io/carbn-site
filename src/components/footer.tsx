import React from "react"
import tw from "tailwind.macro"
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons"

const Footer = tw.footer`
  bg-white
  rounded-lg
  overflow-hidden
  text-center
  pt-12
  pb-8
`

const IconContainer = tw.div`
  flex
  justify-center
  mb-4
`

const IconLink = tw.a`
  mx-2
`

const FooterSection = () => {
  return (
    <Footer>
      <IconContainer>
        <IconLink href="https://twitter.com/carbn_app" target="_blank">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://www.instagram.com/carbn.app" target="_blank">
          <InstagramIcon />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/carbn" target="_blank">
          <LinkedInIcon />
        </IconLink>
      </IconContainer>
      <span className="font-bold">info@carbn.com</span>
    </Footer>
  )
}

export default FooterSection
