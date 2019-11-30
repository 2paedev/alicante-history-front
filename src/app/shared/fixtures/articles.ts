import { Article, ArticlePage } from '@models/index';

export function buildArticleDetailFixture(id: number): Article {
  return {
    id,
    images: [
      {
        id: 1,
        url: '/images/santabarbara.jpeg',
        created: '2019-11-09T09:35:41.157000Z',
        name: '1',
      },
      {
        id: 2,
        url: '/images/santabarbara2.jpeg',
        created: '2019-11-09T09:35:48.509000Z',
        name: '2',
      },
    ],
    author: {
      id: 1,
      image: '/images/aragorn.jpeg',
      created: '2019-11-09T09:36:06.471000Z',
      name: 'Diego',
      surname: 'Martinez',
      email: 'diego@elcorreo.com',
    },
    created: '2019-11-09T09:36:24.048000Z',
    title: 'Santa barbara',
    date: '2019-11-09',
    text:
      '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
    likes: 0,
    tags: [
      {
        id: 1,
        name: 'Fortalezas',
      },
    ],
  };
}

export function buildArticlePageFixture(): ArticlePage {
  return {
    next: null,
    previous: null,
    count: 8,
    limit: 12,
    results: [
      {
        id: 1,
        images: [
          {
            id: 1,
            url: '/images/santabarbara.jpeg',
            created: '2019-11-09T09:35:41.157000Z',
            name: '1',
          },
          {
            id: 2,
            url: '/images/santabarbara2.jpeg',
            created: '2019-11-09T09:35:48.509000Z',
            name: '2',
          },
        ],
        author: {
          id: 1,
          image: '/images/aragorn.jpeg',
          created: '2019-11-09T09:36:06.471000Z',
          name: 'Diego',
          surname: 'Martinez',
          email: 'diego@elcorreo.com',
        },
        created: '2019-11-09T09:36:24.048000Z',
        title: 'Santa barbara',
        date: '2019-11-09',
        text:
          '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
        likes: 0,
        tags: [
          {
            id: 1,
            name: 'Fortalezas',
          },
        ],
      },
      {
        id: 2,
        images: [
          {
            id: 3,
            url: '/images/mercadocentral.jpg',
            created: '2019-11-09T10:15:32.407000Z',
            name: 'mercado',
          },
        ],
        author: {
          id: 1,
          image: '/images/aragorn.jpeg',
          created: '2019-11-09T09:36:06.471000Z',
          name: 'Diego',
          surname: 'Martinez',
          email: 'diego@elcorreo.com',
        },
        created: '2019-11-09T10:15:38Z',
        title: 'Bombardeo Mercado Central',
        date: '2019-11-09',
        text:
          '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
        likes: 2,
        tags: [
          {
            id: 2,
            name: 'Batallas',
          },
        ],
      },
    ],
  };
}
