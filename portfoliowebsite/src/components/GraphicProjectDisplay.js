import React from 'react';
import Project from './Project';

function GraphicProjectDisplay() {
  return (
    <>
        <Project 
          title='Wafflicous!' 
          mainText="Designed company logo and branding for a waffle cart placed in Karachi, Pakistan."
          subText=''
          projLink='https://www.fiverr.com/ali_mukadam?up_rollout=true'
          imgLink='http://localhost:3000/images/Graphics/1.jpg'
          buyLink='https://www.fiverr.com/ali_mukadam/design-minimalist-luxury-lettering-logo-for-your-company'
          platform=''
        />

        <Project 
          title="ITEC'22" 
          mainText="Designed multiple banners, posters, social content & managed Team Graphics ACM as Graphics Team Lead in ITEC'22 organised by ACM-Neduet Chapter."
          subText=''
          projLink='https://www.fiverr.com/ali_mukadam?up_rollout=true'
          imgLink='http://localhost:3000/images/Graphics/2.png'
          platform=''
        />

        <Project 
          title="Digital Portraits" 
          mainText="Multiple digitally painted projects containing digital portraits, wedding cards etc"
          subText=''
          projLink='https://www.fiverr.com/ali_mukadam?up_rollout=true'
          imgLink='http://localhost:3000/images/Graphics/4.jpg'
          platform=''
        />

        <Project 
          title="Invitation Cards" 
          mainText="Invitation Cards for Weddings, Parties, Events etc."
          subText=''
          projLink='https://www.fiverr.com/ali_mukadam?up_rollout=true'
          imgLink='http://localhost:3000/images/Graphics/5.jpg'
          platform=''
        />
    </>
  )
}

export default GraphicProjectDisplay;