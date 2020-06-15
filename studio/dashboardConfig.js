export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ee723418659448925ad89ef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qenpjhez',
                  apiId: '4aa57fe4-0897-48b7-b52f-783500cf84b2'
                },
                {
                  buildHookId: '5ee723429840ba832f5ab403',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ppw64zve',
                  apiId: '6d6ec8d9-ea9b-44e7-902d-2ab91edf2060'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webar2007/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ppw64zve.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
