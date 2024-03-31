import { useRouter } from 'next/router'

export default {
  logo: <b>Aulia's Notebook</b>,
  project: {
    link: 'https://github.com/Aulia-S/notebook',
  },
  docsRepositoryBase: 'https://github.com/Aulia-S/notebook/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: "%s – Aulia's Notebook",
      }
    }
  },
  footer: {
    text: <span>&copy; {new Date().getFullYear()} Aulia's Notebook</span>,
  },
  // ... other theme options
}
