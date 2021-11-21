export const pages = {
  site: [
    {
      slug: "home",
      displayName: "Home",
      status: "published",
      sections: [
        {
          slug: "home-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "main-landing",
          template: {
            slug: "cover-1",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-1",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-1",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-1",
          },
        },
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-1",
          },
        },
        {
          slug: "blog-item-list",
          template: {
            slug: "list-5",
          },
        },
      ],
    },
    {
      slug: "products",
      displayName: "Products",
      status: "published",
      sections: [
        {
          slug: "products-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "products-landing",
          template: {
            slug: "cover-4",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-3",
          },
        },
        {
          slug: "services-block",
          template: {
            slug: "block-4",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-3",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-4",
          },
        },
      ],
    },
    {
      slug: "services",
      displayName: "Services",
      status: "published",
      sections: [
        {
          slug: "services-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "services-landing",
          template: {
            slug: "cover-3",
          },
        },
        {
          slug: "services-block",
          template: {
            slug: "block-3",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-2",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-3",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-3",
          },
        },
      ],
    },
    {
      slug: "about",
      displayName: "About",
      status: "published",
      sections: [
        {
          slug: "about-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "about-landing",
          template: {
            slug: "cover-2",
          },
        },
        {
          slug: "about-text",
          template: {
            slug: "block-2",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-2",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-2",
          },
        },
      ],
    },
    {
      slug: "blog",
      displayName: "Blog",
      sections: [
        {
          slug: "blog-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "blog-landing",
          template: {
            slug: "list-4",
          },
        },
        {
          slug: "blog-item-list",
          template: {
            slug: "list-5",
          },
        },
      ],
    },
    {
      slug: "blog-item",
      displayName: "Blog item",
      sections: [
        {
          slug: "blog-item",
          template: {
            slug: "article-1",
          },
        },
        {
          slug: "blog-related-articles",
          template: {
            slug: "list-5",
          },
        },
      ],
    },
    {
      slug: "contact",
      displayName: "Contact",
      status: "published",
      sections: [
        {
          slug: "contact-seo",
          template: {
            slug: "seo",
          },
        },
        {
          slug: "contact-landing",
          template: {
            slug: "form-1",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-4",
          },
        },
      ],
    },
  ],
  templates: [
    {
      slug: "banners",
      displayName: "Banners",
      status: "published",
      sections: [
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-1",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-2",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-3",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-4",
          },
        },
        {
          slug: "contact-teaser",
          template: {
            slug: "banner-5",
          },
        },
      ],
      seo: {
        title: "Banners",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
    {
      slug: "blocks",
      displayName: "Blocks",
      status: "published",
      sections: [
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-1",
          },
        },
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-2",
          },
        },
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-3",
          },
        },
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-4",
          },
        },
        {
          slug: "home-about-teaser",
          template: {
            slug: "block-5",
          },
        },
      ],
      seo: {
        title: "Text blocks",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
    {
      slug: "cards",
      displayName: "Cards",
      status: "published",
      sections: [
        {
          slug: "features-list",
          template: {
            slug: "cards-1",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-2",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-3",
          },
        },
        {
          slug: "features-list",
          template: {
            slug: "cards-4",
          },
        },
        {
          slug: "blog-related-articles",
          template: {
            slug: "cards-5",
          },
        },
      ],
      seo: {
        title: "Cards",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
    {
      slug: "covers",
      displayName: "Covers",
      status: "published",
      sections: [
        {
          slug: "main-landing",
          template: {
            slug: "cover-1",
          },
        },
        {
          slug: "about-landing",
          template: {
            slug: "cover-2",
          },
        },
        {
          slug: "services-landing",
          template: {
            slug: "cover-3",
          },
        },
        {
          slug: "products-landing",
          template: {
            slug: "cover-4",
          },
        },
        {
          slug: "products-landing",
          template: {
            slug: "cover-5",
          },
        },
      ],
      seo: {
        title: "Covers",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
    {
      slug: "footers",
      displayName: "Footers",
      status: "published",
      sections: [
        {
          slug: "footer-1",
          template: {
            slug: "footer-1",
          },
        },
        {
          slug: "footer-1",
          template: {
            slug: "footer-2",
          },
        },
      ],
    },
    {
      slug: "forms",
      displayName: "Forms",
      status: "published",
      sections: [
        {
          slug: "contact-landing",
          template: {
            slug: "form-1",
          },
        },
        {
          slug: "contact-landing",
          template: {
            slug: "form-2",
          },
        },
      ],
      seo: {
        title: "Forms",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
    {
      slug: "headers",
      displayName: "Headers",
      status: "published",
      sections: [
        {
          slug: "header-1",
          template: {
            slug: "header-1",
          },
        },
        {
          slug: "header-1",
          template: {
            slug: "header-2",
          },
        },
      ],
    },
    {
      slug: "lists",
      displayName: "Lists",
      status: "published",
      sections: [
        {
          slug: "benefits-list",
          template: {
            slug: "list-1",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-2",
          },
        },
        {
          slug: "benefits-list",
          template: {
            slug: "list-3",
          },
        },
        {
          slug: "blog-item-list",
          template: {
            slug: "list-4",
          },
        },
        {
          slug: "blog-item-list",
          template: {
            slug: "list-5",
          },
        },
      ],
      seo: {
        title: "Lists",
        description: "",
        shareImage: null,
        twitterCardType: "summary",
        twitterUsername: "",
      },
    },
  ],
};
