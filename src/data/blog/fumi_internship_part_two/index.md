---
category: 'blog'
cover: './fumi_startup_two.png'
title: 'Working at an Early Stage Startup - Part Two'
description: 'What I learned working at an early stage startup - the engineering side'
date: '2021-03-13'
tags: ['Personal Reflection']
published: true
---

![Blog Post Thumbnail](./fumi_startup_two.png)

***Disclaimer***  *This post does not in any way represent the views of Fumi as a company, but is solely my individual opinion and reflection on my experience as a software engineer at an early-stage startup*

I was a software engineering intern, after all - so let's talk about things from an engineer's perspective. To give you context, I was part of a small engineering team of 3, and did not have a direct report (i.e. no "manager"). Although my title was a "software engineering intern" I was more like a full-time contractor. I was (for the most part) expected to do things on my own, as the other 2 engineers did not have enough time to be taking care of an intern. 

#### What did I work on?
I was a full-stack engineer - I worked both on the frontend and the backend of Fumi's main product and Fumi's back office application (inventory tracking, delivery tracking, etc). The Fumi mobile app used Ionic, Capacitor, Angular 9 on the frontend and used express, GraphQL and MySQL on the backend. The back office application used Angular 9 and KendoUI on the frontend, and used the identical set of backend technologies as the Fumi app.

#### Struggle 1 : Development Speed vs Quality of Code
- The greatest struggle that I had while working at Fumi as an engineer was trying to figure out the right balance between the speed of development vs the quality of development. Every sprint, the COO pushed for a rather tight (?) schedule that was often unrealistic. Of course, it was up to us as developers to agree/disagree with the COO in setting the deadlines, but it was sometimes almost as if the company leadership really didn't care about the quality of the *software* we were building. They did care about the *product* that the end-users will see, but not so much the internal *software.* It was a real struggle because as an engineer, I wanted to write and produce code that I would be happy to revisit in 3 months, but with the timeframe we were working with (runway of about 1.5 yrs), asking for more time to refactor and write maintainable, clean code was often difficult. Even writing proper test cases to increase confidence in code (especially during code release) was a luxury we could not afford. At the same time, I also understood that quick iterations (depending on user feedback) were *absolutely necessary* to survive as a startup. After all, what's the point of writing 100% coverage test suites and meticulously refactoring code if the newly developed feature is going to be tossed out the window in a few weeks upon being labeled a "failure"?

- The conclusion I walked away with was that it's important to carefully evaluate whether or not certain parts of the code base are worth investing time into refactoring and perfecting. Is this piece of code an integral part of the user experience, and is the code likely to be used elsewhere in the future? If so, go ahead and ask for more time, and perfect the code to your heart's content. Is not, feel comfortable moving on without looking back. An early-stage startup need not hold their engineering standards on the same level as Google's or NASA's - different kinds of engineering is required for different occasions.

#### Struggle 2 : Lack of Mentorship
- As I mentioned above, I was more of a full-time contractor than an intern while working at Fumi. There was no structured program to help a junior engineer succeed and get guidance. This is very unlike interning at a larger company with a well-structured internship, where there is a designated intern manager and a whole team of engineers that is always willing to help out. Being able to figure things out on yourself (of course, with the help of Stackoverflow) is considered an important quality to have as a software engineer, but mentorship and guidance from experienced engineers is always invaluable. This is NOT to say that I didn't learn from working at Fumi - I learned a lot. However, most of the learning came from teaching myself new technologies and having to do things myself, not from dedicated mentors.

#### Struggle 3 : Getting Used to Bad Engineering Practices
- I am a firm believer that different kinds of companies require different kinds of engineering. For example, an engineering team at an early stage startup that is constantly fighting for survival cannot have the same level of attention to detail as an engineering team at Google can afford to have. *However,* if your goal is to learn the "best engineering practices" such as having thorough code reviews and 100% test coverage, an early stage startup may not be what you are looking for. Always chasing deadlines after deadlines, engineers at early stage startups are often forced to produce duplicate code, spaghetti code (that would be an absolute nightmare to refactor in 3 months), and hacky code - *that just works.* Most early stage startups don't have the luxury to think months in advance and what to do when the company scales - shipping this feature on that date is what matters.

#### Struggle 4 : Communication
- I want to stress the importance of communication. Communication with a product manager, a product designer, or company leadership is extremely important to keep everyone on the same page. For example, I found it very helpful to create slack channels or project proposal documents. It was also very important to learn to clearly communicate what I thought was an appropriate timeline for a given project. What I struggled with especially towards the beginning of my internship was to accept all the deadlines given. If you think a deadline is unreasonable, speak out and let yourself be heard! I realized that it's *very* important to get everyone on the same page so that it's easier to anticipate when certain features will *actually* be shipped to production.

#### Positive 1 : Shaping Engineering Culture
- What was great about working at an early stage startup was that I could directly contribute to the engineering culture. I was able to persuade my team to set up certain code style guides, start a Notion documentation page on critical frontend and backend services, and also write a detailed onboarding documentation for new hires. Yes, my team was in its *very early* stages, so I was able to start these initiatives and actually have a say on *how* our engineering team should function. I'm pretty sure that this would not have been possible at a more established company, so it was a pretty cool feeling to be able to have this kind of influence, to say the least.

#### Positive 2 : Experience Working Across the Stack
- Angular, GraphQL API Endpoints, MySQL DB Modeling, Jenkins build - these are some of the things I worked on over the last 4 months. It almost sounds like an entire engineering team's job, right? Frontend, backend, and even a sprinkle of devOps. The reality at a very early stage startup with 3 engineers is that they cannot afford to hire specialists for every stack - all the engineers are *generalists* and are expected to fill in wherever they can. Hence, even as an intern, I had the opportunity to work across the entire stack, which in my opinion was a beneficial experience for me. Instead of being stuck with a small part of the frontend or the backend, I was able to draw out the frontend UI directly from Figma files that the designer gave me, implement the frontend logic, create necessary API endpoints, create a new MySQL database table if needed for a new feature, and then watch the Jenkins build succeed (or sometimes fail). I was able to see the bigger picture of how products are built and deployed, and I'm pretty sure it would not have been the case had I worked for a large company.

#### Positive 3 : Feel Like a Core Part of the Team
- Last but not the least, I would highly recommend people to try working for a startup because it's such a great feeling to feel like a core part of the team. At a large company, people come and go, and *most* people don't feel like they are an absolutely integral part of the company. At an early stage startup with very few engineers, every single person on the team is an invaluable asset. Your opinion can have a direct impact on the product, and  the all the other teams count on the engineering team to make things happen - and you get to be a part of it. I found that to be an amazing feeling.

#### What's next for me?
Working at Fumi was definitely a great experience for me, and I certainly learned a *lot.* Not only did I grow as an engineer, but I also learned a lot about how startups operate. What's next for me? I am extremely lucky to be able to say that I will be working as an intern at Facebook HQ this coming summer. Here are some things I am looking forward to learning more about (very generic because I don't know which team I'll be working with yet): 

- How are code reviews done at a large tech company?
- How do senior engineers at a company like Facebook write code differently?
- What kinds of internal tools do Facebook engineers use, and are they useful?
- Am I good enough to be held against the highest standards in the industry?

I'll definitely write about my Facebook internship experience at the end of this summer, so stay tuned!