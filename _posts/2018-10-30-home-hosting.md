---
title: Home Hosting
date: 2018-10-30T19:38:44+00:00
author: Oubiti
layout: post
comments: true
desc: Tutorial to setup your own home hosting
permalink: /home-hosting/
icon: /static/assets/img/blog/home_hosting.png
keywords: "hosting,router"
categories:
  - Life
tags:
  - hosting
---
When I started this blog, designed in WordPress, my first thought was to start on my machine and when I would had been the design ready, then buy a domain to publish it. In the middle of that process, I was so excited about the project that I wanted to show it to my friends, in both platforms on my phone and their laptops.&nbsp;And I thought &#8230; why not deploy a hosting at home?  


Is that possible? Can I do it with any cost? Ow yes! You can build a home hosting absolutely free! The first thing you need to know is what kind of Internet connection you have hired, that it going to tell you how you can connect with other users. In my case the ISP assigns me a [Dynamic IP](https://en.wikipedia.org/wiki/IP_address#Sticky_dynamic_IP_address) , that would be my &#8220;identification number&#8221;, so other users can connect with me using this IP.  BUT, my IP is dynamic, that means it will change often, so you can not pass the IP to any friend to connect your machine :/  


If your provider uses&nbsp;&nbsp;[CG-NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT)&nbsp; ask them if you can switch to Dynamic IP, in my case they changed it for&nbsp;free&nbsp;🙂&nbsp; But&#8230; What I really want is share with my friends a domain name like oubiti.com!&nbsp;Not an ugly IP like this 123.45.26.118!

Well, for that they invented Dynamic DNS.&nbsp;A DNS is a telephone directory but storing IPs, where you look for a domain name and you receive an IP.&nbsp;A dynamic DNS gives you the ability to change your IP as often as you want, which in our case it going to be the router whenever you receive a new IP from our ISP, whom will update that information on our Dynamic DNS service.  


There are many companies that offer this free service, in my case I used&nbsp;&nbsp;<https://www.noip.com/>&nbsp;&nbsp;, you can create an account easily, type the domain you want and create a free account, obtaining a Dynamic DNS.  

![Home hosting 1](/static/assets/img/blog/home-hosting-1.png)

Once created, we must setup the router to be responsible for sending the new IP Dynamic DNS, every time it changes.&nbsp;To do this, follow the steps in&nbsp;the&nbsp;[wizard to set up&nbsp;your router](https://my.noip.com/#!/dynamic-dns/device-configuration-assistant)&nbsp;.  

![Home hosting 2](/static/assets/img/blog/home-hosting-2.png)

See an example of my config:

![Home hosting 3](/static/assets/img/blog/home-hosting-3.png)

AH! An important step! Doesn&#8217;t matter if you use a Dynamic DNS or just the IP, but if you want that your public IP redirects the traffic of a web page to your web server, you will need to do a &#8220;[Port Forwarding](https://en.wikipedia.org/wiki/Port_forwarding)&#8221; , see here an example using port 8080 and 80.

![Home hosting 4](/static/assets/img/blog/home-hosting-4.png)

So far so good!&nbsp;You just need to&nbsp;make sure you have your web server running, you can try&nbsp;[http: // localhost](http://localhost/)&nbsp;&nbsp;and if that works properly, wait a&nbsp;few minutes for DNS information to propagate and you can connect to your machine using the domain name you&#8217;ve chosen.

As last step, I had an issue, a kind of loop in the name resolution. If something goes wrong when you try to see your website using the new domain name (in my case &#8220;oubiti.ddns.net&#8221;), try to add that line to your local name resolution file.

  * **Mac & Linux**: /etc/hosts
  * **Windows**: C:\Windows\System32\drivers\etc\hosts

![Home hosting 5](/static/assets/img/blog/home-hosting-5.png)

In another post, I will explain how to set up a web server with WordPress and MySQL database, [using Docker containers](https://docs.docker.com/compose/wordpress/)!
