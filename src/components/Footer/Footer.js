import React from 'react'
import { FaBars, FaDiscord, FaTwitter } from 'react-icons/fa'
import { FootIcon, Socials, Foot } from './FooterElements'

const Footer = () => {
    return (
        <Foot>
            <Socials>

                <FootIcon href="https://twitter.com/frognationsol">
                    <FaTwitter/>
                </FootIcon>
                <FootIcon href="http://discord.gg/QT8TX7QDt2">
                    <FaDiscord/>
                </FootIcon>
            </Socials>

        </Foot>
    )
}

export default Footer
