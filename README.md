Scifair
==============
###look in progress
![styling the look of scifair](https://trello-attachments.s3.amazonaws.com/56337d2ceb9bc26cf717cba6/1025x749/8964efca22947ee187c598715d982ad9/Screen_Shot_2015-10-30_at_7.44.20_AM.png)
![search modal](https://trello-attachments.s3.amazonaws.com/56337d2ceb9bc26cf717cba6/1165x585/36be2a6e64917cd3e7d68356da39e41a/Screen_Shot_2015-10-30_at_7.29.11_AM.png)
[Project on Heroku](https://scifairfinder.herokuapp.com/)
Flex Requirements used:
Authentication, External API, & Data Validation


###[Link to Scifair source code on GitHub](https://github.com/laulaucia/Scifair)

###[Wireframes User Stories etc. on Trello](https://trello.com/b/zMw0BkYl/science-fair-map)

**User stories**
Sally would like to find a science fair in her state to go to with her kids. Sally should be able to come to this site and search for her state and see all of the sciencefairs in her state rendered on a map.
Ira would like to find a science fair in her country and see it on a map.
Joe would like to add his science fair to this list. He should be able to login and add his fair.


###A few wireframes from early on
![wireframe 1](https://trello-attachments.s3.amazonaws.com/56337d2ceb9bc26cf717cba6/938x479/92c57d58dc5ee638d244b5cdcd64de6f/Screen_Shot_2015-10-22_at_12.02.55_PM.png)![wireframe 2](https://trello-attachments.s3.amazonaws.com/56337d2ceb9bc26cf717cba6/937x443/19c3c6b9be7f0ced0e6421c41459694b/Screen_Shot_2015-10-22_at_12.02.38_PM.png)


Description:
-------------
Scifair is a simple search app to map all of the Intel ISEF and Broadcom MASTERS fairs on a map by state and or country. This map is something that, while at my previous employer, I would have really liked to be able to make! I took this oportunity to merge my past and present and make it a reality. A user can go to Scifair and search their state/country and find  a list of fairs they could attend or compete in as well as see them rendered on a map with corresponding markers. Each fair has some information that shows about it including its name, start date, and affiliations. Each fair is linked to the fair's website when a website was provided. A user can also login to add fairs at this time. 

#APIs used
* GoogleMaps API
* My own API?

#Libraries used
front end
* Bootstrap
* Google Fonts
* JQuery

back end:
* bcrypt
* body-parser
* dotenv
* ejs
* express
* express-session
* mongoose
there are a few more in my Package.JSON file but I didn't end up using them


Wishlist / Future Development
------------------------
I would really love to make the search less picky. Also eventually one would want to be able to update all the fairs easily with new information: ie. editing capabilities including deleting fairs. I would also like to get the mobile view in better shape especially the map rendering. 
