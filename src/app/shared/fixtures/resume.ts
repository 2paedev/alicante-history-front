import { Article, ArticleResume } from '@models/index';

export function buildLastFiveFixture(): Article[] {
  return [
    {
      id: 5,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-10T19:19:52.562299Z',
      title: 'La época dorada en Lucentum',
      date: '2019-11-10',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
      bibliography: ['enlace 1, enlace 2'],
    },
    {
      id: 4,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-09T19:19:52.562299Z',
      title: 'La época dorada en Lucentum 2',
      date: '2019-11-09',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
      bibliography: ['enlace 1, enlace 2'],
    },
    {
      id: 3,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-08T19:19:52.562299Z',
      title: 'La época dorada en Lucentum 3',
      date: '2019-11-08',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
      bibliography: ['enlace 1, enlace 2'],
    },
    {
      id: 2,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-07T19:19:52.562299Z',
      title: 'La época dorada en Lucentum 4',
      date: '2019-11-07',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
      bibliography: ['enlace 1, enlace 2'],
    },
    {
      id: 1,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-06T19:19:52.562299Z',
      title: 'La época dorada en Lucentum 5',
      date: '2019-11-06',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
      bibliography: ['enlace 1, enlace 2'],
    },
  ];
}

export function buildResumeFixture(): ArticleResume[] {
  return [
    {
      id: 5,
      images: [
        {
          id: 6,
          url: '/images/lucentum.jpg',
          created: '2019-11-10T19:19:45.860859Z',
          name: 'lucentum',
        },
      ],
      author: {
        id: 1,
        image: '/images/aragorn.jpeg',
        created: '2019-11-09T09:36:06.471000Z',
        name: 'Diego',
        surname: 'Martinez',
        email: 'diego@elcorreo.com',
        description: 'DESCRIPTION EXAMPLE',
      },
      created: '2019-11-10T19:19:52.562299Z',
      title: 'La época dorada en Lucentum',
      date: '2019-11-10',
      text:
        '<div class="text-server"><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet <i>consectetur</i> adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed diam commodo hendrerit fames urna senectus mattis erat eu aliquet cubilia metus, ridiculus tortor neque felis congue vivamus proin varius molestie fermentum gravida lacus.</p><br><h2>What is Lorem Ipsum?</h2><p><b>Lorem Ipsum</b> dolor sit amet consectetur adipiscing elit sem torquent luctus libero leo laoreet class, magnis sed quam fusce vulputate semper consequat urna sagittis ligula arcu curabitur. Luctus potenti hendrerit torquent placerat enim auctor augue nam, massa conubia eleifend nibh mus suscipit ligula porttitor, nostra sodales turpis sed arcu venenatis fusce. In sed d',
      likes: 0,
      tags: [
        {
          id: 4,
          name: 'Ciudades',
        },
        {
          id: 1,
          name: 'Fortalezas',
        },
      ],
    },
  ];
}
