---
title: Test Frameworks Workshop
date: 2021-10-25T18:40:26+00:00
author: Oscar Barrios
layout: post
comments: true
desc: Test Frameworks workshop
permalink: /test-frameworks-workshop/
icon: /static/assets/img/blog/test_frameworks.png
keywords: "tdd,bdd,test_framework,workshop,test,quality"
categories:
  - Development
---


The slides contains a list of Test frameworks, organized by these categories:

- Unit Testing
- Mock Testing
- API Testing
- GUI Testing
- BDD Testing
- End-to-End Testing

Also, it propose a playground to test a website using CucumberJVM + Selenium.

<div id="pdf_test_frameworks"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.5/pdfobject.min.js"></script>
<script>
var options = {
	fallbackLink: "<iframe src='https://docs.google.com/viewer?url=https://oscarbarrios.tech/static/assets/img/blog/test_frameworks.pdf&embedded=true' style='width:100%; height:800px;' frameborder='0'></iframe><br><p><a href='[url]'>Download PDF</a></p>",
    height: "800px",
    pdfOpenParams: { view: 'FitH', page: '1' }
};
PDFObject.embed("/static/assets/img/blog/test_frameworks.pdf", "#pdf_test_frameworks", options);
</script>
