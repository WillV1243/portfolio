export interface Technology {
  url: string;
  imagePath: string;
  label: string;
}

export const technologies: { [key: string]: Technology } = {
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
  npm: {
    url: 'https://www.npmjs.com/',
    imagePath: 'assets/img/techs/npm_logo.png',
    label: 'npm'
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
  }
}
