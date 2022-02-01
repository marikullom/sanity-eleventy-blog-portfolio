export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f8c795447cc947782771c0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-portfolio-studio',
                  apiId: '78ae3a6f-3ede-4046-b01d-5300fd381b6f'
                },
                {
                  buildHookId: '61f8c7953a843f3de3611607',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-portfolio',
                  apiId: '02d62f84-194d-4333-9399-35a58c151d1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marikullom/sanity-eleventy-blog-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
