export interface Technology {
  url: string;
  imagePath: string;
  label: string;
}

export const technologyData: { [key: string]: Technology } = {
  material: {
    url: 'https://material.angular.io/',
    imagePath: 'assets/img/techs/material_logo.png',
    label: 'Material'
  },
  angular: {
    url: 'https://angular.io/',
    imagePath: 'assets/img/techs/angular_logo.png',
    label: 'Angular'
  },
  redux: {
    url: 'https://ngrx.io/',
    imagePath: 'assets/img/techs/ngrx_logo.svg',
    label: 'Redux'
  },
  wordpress: {
    url: 'https://wordpress.com/',
    imagePath: 'assets/img/techs/wordpress_logo.png',
    label: 'Wordpress'
  },
  elementor: {
    url: 'https://elementor.com/',
    imagePath: 'assets/img/techs/elementor_logo.png',
    label: 'Elementor'
  },
  react: {
    url: 'https://reactjs.org/',
    imagePath: 'assets/img/techs/react_logo.png',
    label: 'React'
  },
  typescript: {
    url: 'https://www.typescriptlang.org/',
    imagePath: 'assets/img/techs/typescript_logo.png',
    label: 'Typescript'
  },
  node: {
    url: 'https://nodejs.org/en/about/',
    imagePath: 'assets/img/techs/node_logo.png',
    label: 'node.js'
  },
  i18n: {
    url: 'https://angular.io/guide/i18n',
    imagePath: 'assets/img/techs/i18n_logo.png',
    label: 'i18n ngx-translate'
  },
  git: {
    url: 'https://git-scm.com/',
    imagePath: 'assets/img/techs/git_logo.png',
    label: 'git'
  },
  npm: {
    url: 'https://www.npmjs.com/',
    imagePath: 'assets/img/techs/npm_logo.png',
    label: 'npm'
  },
  jira: {
    url: 'https://www.atlassian.com/software/jira',
    imagePath: 'assets/img/techs/jira_logo.png',
    label: 'Jira'
  },
  figma: {
    url: 'https://www.figma.com/design/',
    imagePath: 'assets/img/techs/figma_logo.png',
    label: 'Figma'
  },
}
