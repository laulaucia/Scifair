Scifair
==============
[Project on Heroku](https://scifairfinder.herokuapp.com/)
Flex Requirements used:
Authentication


[Link to source code on GitHub](https://github.com/laulaucia/Scifair)

[Wireframes User Stories etc. on Trello](https://trello.com/b/zMw0BkYl/science-fair-map)

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
