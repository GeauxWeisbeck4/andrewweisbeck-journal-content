import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 3 January 2022</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="font-semibold">Location:</span> <span>Raleigh, NC, USA</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>18°C, mostly cloudy</span>
          </div>

          <div className="mt-2 mb-10 w-2/5 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="font-semibold">Reading:</span>{' '}
            <span>The Art of Web Assembly by Rick Battagline</span>
            <br />
            <span className="font-semibold">Podcast:</span> <span>Small Town Murder</span>
          </div>

          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="font-semibold">Eating:</span> <span>Chicken and Rice</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Vanilla Dr. Pepper/H20</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I am a freelance developer at{' '}
            <Link
              href={'https://tarheeldevstudio.com'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              Tar Heel Dev Studio{' '}
            </Link>
            <br />
          </span>
          <p>
            I own a digital agency, focused on web development, graphic design, and SEO content
            marketing.
          </p>
          <br />
          <p>
            Tar Heel Dev Studio represents more than just building something digital - I want to
            build a happier world for your business and everyone it affects. I'll choose values over
            money any day, small businesses over corporations, and non-profits over max-profit
            organizations.
          </p>
          <br />
          <p>
            I've been looking for more jobs lately as it has slowed up at the end of the year. I am
            open to new jobs as well but am always focused on trying to get the next job for my
            digital studio as I haven't had a regular full-time web developer job yet. It was a
            rough year in 2022, but I think 2023 will be my break through year.
          </p>
          <br />
          <p>
            I am working on a lot of content based projects like this Web Developer journal, my
            digital garden, and other projects where I manipulate strings nad other sets of data to
            get it to do what I want to on the front end. I love learning so much so I'm always
            having fun no matt
          </p>
          <br />
          <p>
            I'm currently learning Web Assembly and Rust, but just did an Egghead.io course on{' '}
            <Link
              href={'https://www.executeprogram.com/courses'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              Building Extensible Digital Garden with Next.js.
            </Link>
          </p>
          <p>
            I like to learn by doing, so I am constantly working on projects and trying new things
            to see how they go together and pull apart.
          </p>
          <br />
          <p>
            This project is actually my most recent. I've used this template before and this will be
            my second deploy using Tailwind CSS and{' '}
            <Link
              href={'https://nextjs.org'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              Next.js{' '}
            </Link>
          </p>
          <br />
          <p>
            I appreciate this template because it makes it so easy to get a blog up and running with
            all the necessities while also allowing a lot of room for customization.
          </p>
          <br />
          <p>
            I'm currently working on some layouts of my own and I'm about to publish a template that
            is build with Typescript, Next.js, Chakra-UI, and Prisma with capabilities to hook up
            Supabase really easy.
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            My best friend is my fiance Lisa, and we are working on building a sex-toy ecommerce
            business together. I don't know where I would be in my life without her amazing
            personality, tender love, and soft caring personality. We have both been through a lot
            together and I wouldn't have it any other way.
          </p>
          <br />
          <p>
            I am working on publishing a 13 week goal setting template on Notion and writing an
            e-book about Deno. I will share more info when I make more progress.
          </p>
          <br />
          <p>
            Life is really, really fucking hard - but it is so beautiful and immensely rich. And
            might I add rare? Look around yourelf - no, I mean look around yourself into the night
            sky. Look at space. Think of where the next planet of living, sentient beings could
            possibly be. Nowhere your eyes can see. All your eyes can see is a vast stretch of a
            dark vacuum of cold, darkness that never ends. We are lucky to be able to be alive to
            witness what we witness each and every day. Life is hard, but it is beautiful and rare.
          </p>
          <br />
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
