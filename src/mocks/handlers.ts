import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      return res(ctx.status(403), ctx.json({ errorMessage: 'Not authorized' }));
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'Bruno Fukumori',
        avatar: 'https://github.com/bfukumori.png',
        bio: 'Software Engineer',
      })
    );
  }),

  rest.get('/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        posts: [
          {
            id: 1,
            author: {
              avatar: 'https://github.com/bfukumori.png',
              name: 'Bruno Fukumori',
              bio: 'Software Engineer',
            },
            content: [
              {
                type: 'paragraph',
                contentText:
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate expl.',
              },
              {
                type: 'paragraph',
                contentText:
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.',
              },
              { type: 'link', contentText: 'bfukumori/ignite-feed' },
            ],
            publishedAt: new Date('2022-06-05 18:00:00'),
          },
          {
            id: 2,
            author: {
              avatar: 'https://github.com/diego3g.png',
              name: 'Diego Fernandes',
              bio: 'CTO Rocketseat',
            },
            content: [
              {
                type: 'paragraph',
                contentText:
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias ficiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.',
              },
              {
                type: 'paragraph',
                contentText:
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.',
              },
              { type: 'link', contentText: 'diego3g/ignite-feed' },
            ],
            publishedAt: new Date('2022-05-10 20:00:00'),
          },
        ],
      })
    );
  }),
];
