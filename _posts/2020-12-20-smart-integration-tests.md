---
title: Smart integration tests
date: 2020-12-20T10:00:56+00:00
author: Oscar Barrios
layout: post
comments: true
desc: Using Cucumber profiles and Analizing code changes
permalink: /smart-integration-tests/
icon: /static/assets/img/blog/smart_integration_tests.png
keywords: "integration,tests,ci,cucumber,tags,profiles,github,actions,code,changes"
categories:
  - Development
---

When you start automating testing for a new project, everything is very simple.
When you have several years and hundreds of tests to launch, things get complicated.

It is important to have a good organization of the tests, a good prioritization of them and, when possible, use some technique that allows to intelligently select which tests best cover the changes made in the product code.

In this presentation I explain a bit the changes that I led in my project to speed up our tests.

The main contribution made in my project has been to introduce a new Jenkins pipeline to validate a Pull Request before merging it. This pipeline runs the acceptance tests, so we can better cover a end to end usage.
Also it includes the build process uisng Open Build Service, where we build only those packages changed by the Pull Request speeding up this process. In addition, you can manually select the functional areas that you want to test.
Our next steps on that goal, it will be filter the resources we need to deploy through Terraform depending on the functional areas to be tested and finally integrate this with our GitHub repository.


<div id="pdf_smart_integration_tests"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.5/pdfobject.min.js"></script>
<script>
var options = {
	fallbackLink: "<iframe src='https://docs.google.com/viewer?url=https://oscarbarrios.tech/static/assets/img/blog/smart_integration_tests.pdf&embedded=true' style='width:100%; height:800px;' frameborder='0'></iframe><br><p><a href='[url]'>Download PDF</a></p>",
    height: "800px",
    pdfOpenParams: { view: 'FitH', page: '1' }
};
PDFObject.embed("/static/assets/img/blog/smart_integration_tests.pdf", "#pdf_smart_integration_tests", options);
</script>
