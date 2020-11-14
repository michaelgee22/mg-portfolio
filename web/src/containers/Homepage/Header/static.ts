import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

export const particles = {
  background: {
    color: {
      value: '#000'
    }
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 4,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 700
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true
}

export const icons = [
  {
    icon: FaGithub,
    href: 'https://www.github.com/michaelgee22',
    ariaLabel: 'Github Profile Button Link',
    key: 'github'
  },
  {
    icon: FaDev,
    href: 'https://dev.to/michaelgee',
    ariaLabel: 'Dev.to Profile Button Link',
    key: 'dev.to'
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/michaelgee7',
    ariaLabel: 'Twitter Profile Button Link',
    key: 'twitter'
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/michael-gee',
    ariaLabel: 'LinkedIn Profile Button Link',
    key: 'linkedIn'
  }
]
