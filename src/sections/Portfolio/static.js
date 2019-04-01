const cegmag = process.env.PUBLIC_URL + '/images/cegmag.png'
const chatbox = process.env.PUBLIC_URL + '/images/chatbox.png'
const lp = process.env.PUBLIC_URL + '/images/lp.png'

export default [
  {
    id: 'cegmag-0',
    className: 'project',
    title: 'CEGMAG Solutions Inc',
    tags: ['JavaScript', 'Polymer', 'HTML5', 'CSS3', 'Git'],
    codeHref: false,
    href: 'https://website-eeb2b.firebaseapp.com/',
    image: cegmag,
    imageAlt: 'CEGMAG Solutions Inc. Project',
    desc:
      'A group of projects & websites built from scratch using a variety of JavaScript libraries/frameworks or Wordpress. I worked as a sole developer remotely building user interfaces mainly with JavaScript Web Components with the Polymer Library. I also worked directly with clients to implement feature requests in Wordpress websites using React components.  I spent a lot of time becoming vastly familiar with the JavaScript ecosystem and being involved in all aspects of development including planning, development, design, testing, performance improvement, maintenance, security, etc. '
  },
  {
    id: 'chat-box-1',
    className: 'projectReverse',
    title: 'Chat-box',
    tags: ['JavaScript', 'Polymer', 'Firebase', 'HTML5', 'CSS3', 'Git'],
    codeHref: 'https://github.com/michaelgee22/chat-box',
    href: 'https://mgchatbox.com/',
    image: chatbox,
    imageAlt: 'Chat-Box Project',
    desc:
      'A multi-thread chat application built with web components (Polymer library) along with Firebase to provide real-time data messaging between users and an easy authentication method. My main focus with project was to make a fast and functional chat experience while implementing a great user experience that works across all platforms.'
  },
  {
    id: 'lp-tribute-2',
    className: 'project',
    title: 'Linkin Park Tribute',
    tags: ['JavaScript', 'Vue', 'Firebase', 'HTML5', 'CSS3', 'Git'],
    codeHref: 'https://github.com/michaelgee22/lp_tribute',
    href: 'https://linkin-park-tribute.firebaseapp.com/',
    image: lp,
    imageAlt: 'Linkin Park Project',
    desc:
      'A Vue.js project utilizing the Vuetify framework to implement Material Design components. Simple UI/UX, component organization and utilizing/learning the core features of Vue were the main focuses of this project. This is another project I elected to use Firebase to provide an easy web hosting solution along with lightning fast data fetching to display all of the band’s songs and albums. '
  }
]
