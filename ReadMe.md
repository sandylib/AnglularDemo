AngularJS:
    Create, update, delete a todo
    Sort (and show sort order)
    Search
    Pagination  

Our infrastructure will be:
    Backend Language: C#
    Backend Framework: WebApi
    Database: SQL Server (including SQL Express LocalDB during development)
    ORM: Entity Framework Code First + Migrations
    Frontend Framework: AngularJS
    CSS styles: Bootstrap3
    IDE: Visual Studio2013
    Hosting: Appharbor

The improvement I did is:

1)For the sort and query in this a sample I followed what the video did. But It is totally not necessary.Because angularjs could do the sort and query so don't need to retrieve all the info from service again. that will be save time for retrieve data.

2)In the Video, to remove return xml result is not necessary, because for what result will return it up to the http quest. if you quest Json result, api smart enought will return json result for you.And when you using angularjs to make request it indeed ask for json result.

3)In the video that didn't provide customize direction solution,but in my files I already included it.

4)The validation followed blog didn't work, and in my source code it does.

What it will look like is:
http://angulardemo1.apphb.com/index.html

The blog I was followed is:
http://jphoward.wordpress.com/2013/01/04/end-to-end-web-app-in-under-an-hour/