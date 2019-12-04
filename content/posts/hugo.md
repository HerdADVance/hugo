---
cat: "post"
title: "An Absolute Beginner's Introduction to Static Site Generators and Creating a Blog with Hugo"
date: 2019-10-16T22:31:07-04:00
draft: false
image: "hugo.png"
imageContain: true
---

When first creating this blog, my initial instincts were to throw it into {{% tabLink "https://expressionengine.com/" "ExpressionEngine" %}} because that's the content management system I'm most familiar with. That decision certainly would have worked just fine, but the more I thought about it, I realized that it might be overkill as a developer to have my personal blog in a full-fledged CMS designed to be used by clients who don't know HTML.

I'd had some limited experience in the past with {{% tabLink "https://jekyllrb.com/" "Jekyll" %}}, a static site generator (SSG) that seemed to be primarily targeted at developers making personal blogs. There's also nothing wrong that option, but it's built on Ruby and requires a Ruby environment so I really didn't wanna go down that route.

So I decided to research which SSG would be best for me. {{% tabLink "https://www.sitepoint.com/static-site-generators/" "SitePoint" %}} does a good job explaining the pros and cons of the more popular ones, but I eventually landed on {{% tabLink "https://gohugo.io/" "Hugo" %}}. I was drawn to Hugo because it's free, advertised as "the world's fastest framework for building websites," and because I was already interested in learning {{% tabLink "https://golang.org/" "GoLang (Go)" %}} which Hugo is built on.

## Why Use a Static Site Generator

The most obvious distinguishing feature of an SSG is that it doesn't use a database. While that would be a dealbreaker for certain types of sites, it's a benefit for text-based sites like a personal blog. Axing the database instantly means more speed and security for your site.

Instead of relying on the database to dynamically fetch content, you run a build that converts all of your content (usually in Markdown files) into static folders and HTML files that you then push either into a git repository or directly to your site. It's a nice simple process that usually offers more flexibility and requires less hassle than dealing with a monolithic CMS.

One potential drawback of an SSG is that the build process can take some time if you have a large site, but Hugo focuses on speed and can handle complex builds quickly. I was surprised to learn that more and more large websites are relying on SSG's. With the relative simplicity of the personal blog site we're talking about here, the speed of the build wouldn't really be an issue even using a slower SSG.

Just as a point of clarification that initially confused me, static site generators are incredibly similar to flat file CMS's. Both don't use databases and work in the same sort of way, but the main difference is that a flat file CMS generally has a user admin interface similar to a more traditional CMS while an SSG usually relies on the command line. The more you know!


## Getting Started

Now that we've talked about what SSG's are and why we're using them, let's get down to actually learning how to start using Hugo. 

Although I mentioned that I was interested in learning Go, it should be known that little to no knowledge of the language is required to churn out a basic site with Hugo.