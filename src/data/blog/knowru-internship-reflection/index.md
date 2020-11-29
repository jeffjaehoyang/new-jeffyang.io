---
category: 'blog'
cover: './knowru_internship_cover.png'
title: 'Shipping Code for a Business – Is Your Application Scalable?'
description: 'Reflecting on the 2019 summer internship at Knowru'
date: '2019-09-09'
tags: ['Personal Reflection']
published: true
---

![Blog Post Cover](./knowru_internship_cover.png)

### Reflecting on 2019 Summer Internship @Knowru 

This summer, I had the privilege of returning to and working at Knowru, a startup that primarily focuses on helping loan processing companies through a suite of innovative software. I had worked at Knowru in the summer of 2017 before enlisting in the Korean Army, and over the next 2 years of my military service, the company saw remarkable growth (most notably, the backing of a multimillion-dollar investment from Hong Kong). Back at Knowru as a software engineering intern, I had to navigate through problems that came from the company’s rapidly growing customer-base: writing code with scalability in mind.

Our team was tasked with the development of a web application that would allow loan processing companies access to foolproof verification of their customers (i.e. loan applicants). How? Our application would connect the loan agent and the customer through a video call, allow access (with agreement) to the GPS location of the customer, enable the loan agent to request certain photos, and provide agents a space to ask questions pertinent to determining the validity of a loan application. We built the prototype and sent it off to a Chinese micro-lending company for testing, and we waited—a few days later, we heard the ring of a message on Slack. (As we are software engineers working in office, it is often difficult to grasp the bigger picture, especially if there is a lack of knowledge on the business-side of the industry—therefore, such insight from testing is imperative). We were asked to re-design the application to support multiple companies and multiple loan products, as the application was only suitable for use by a single company.

As our lead frontend developer left the company soon after I joined, I became the main frontend engineer on the project. I discussed with the backend developer on how to best solve the problem. Our application was working like a charm—but only if there was a single company using the software. The code we wrote was simply not scalable, and from a business perspective, this was the prototype’s biggest flaw. Various companies would want varying fields for applicant’s personal information, request fields for different kinds of photos, and want their loan agents to ask different sets of questions to their customers. In other words, we needed to dynamically render the agent-side page of our web application so that it would suit each company’s wants and needs. I actively took advantage of the flexibility that React/Redux provided.

Through an API request, fetch JSON data containing specifications needed to dynamically render the page
Store the specifications in the state of the application (Redux)
For each React component, fetch necessary data needed and pass it as a prop
Now we are fully equipped to render any page / component dynamically as long as we have the specifications provided by the company!

With the above, our application was now able to support any number of companies and loan products, just as long as we had the information provided by each company on what they wanted included in their own customized web application. The re-designing process was not too difficult or complicated, but I realized how important thinking out the design of the software is, especially when shipping code for business purposes. At the end, software engineers exist to solve complicated technical problems, and building a scalable product is integral for the final product to have a greater impact on the world.