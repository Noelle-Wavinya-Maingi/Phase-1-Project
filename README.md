# PHASE ONE PROJECT

# Description

This project is an app that allows users to find recipes of their choice and get to know the ingredients they need, the preparation steps of the meal and approximately how long it takes for the meal to be prepared. This web application is fetching data from an API that I built and is able to perform the CRUD operations. The project deliverables are explained below:

# Project Guidelines

The project should conform to the following:

# Core Deliverables

As a user, I can:

1. See the recipes when the page loads. The number of
   likes is derived by adding the number of
   `likes` . You will need to make a GET
   request to the following endpoint to retrieve the film data:

```txt
   GET /Recipes/

   Example Response:
   {
   "id": "1",
"name": "Chocolate Oreo Milkshake",
"ingredients": "2 cups milk (dairy or non-dairy), 4 Oreo cookies, 2 tablespoons cocoa powder, 2 tablespoons sugar, 1/2 teaspoon vanilla extract, 2 cups vanilla ice cream, whipped cream (for topping), crushed Oreo cookies (for garnish)",
"instructions": "1. Place the milk, Oreo cookies, cocoa powder, sugar, vanilla extract, and vanilla ice cream in a blender.\n2. Blend on high speed until smooth and creamy.\n3. Pour the milkshake into glasses.\n4. Top with whipped cream.\n5. Garnish with crushed Oreo cookies.\n6. Serve and enjoy!",
"time_taken": "10 minutes",
"image": "img/fatima-akram--xhCOgeoDSs-unsplash.jpg",
"likes": 9
   }

```

2. View the recipe for a dish. After clicking the "View Recipe" button, I should
   see the image of the meal, the ingredients, the instructions, the approximate time it will taketo prepare, like button and delete button.

3. When a recipe has been liked, persist the updated number of `likes` on
   the server. You will need to
   make a request that follows this structure:

   ```txt
   PATCH /Recipes/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "likes": 28
   }
   ----
   Example Response:
   {
       {
   "id": "1",
   "name": "Chocolate Oreo Milkshake",
   "ingredients": "2 cups milk (dairy or non-dairy), 4 Oreo cookies, 2 tablespoons cocoa powder, 2 tablespoons sugar, 1/2 teaspoon vanilla extract, 2 cups vanilla ice cream, whipped cream (for topping), crushed Oreo cookies (for garnish)",
   "instructions": "1. Place the milk, Oreo cookies, cocoa powder, sugar, vanilla extract, and vanilla ice cream in a blender.\n2. Blend on high speed until smooth and creamy.\n3. Pour the milkshake into glasses.\n4. Top with whipped cream.\n5. Garnish with crushed Oreo cookies.\n6. Serve and enjoy!",
   "time_taken": "10 minutes",
   "image": "img/fatima-akram--xhCOgeoDSs-unsplash.jpg",
   "likes": 9
   }
   ```

4. Delete a recipe from the server. Added a delete button next to each recipe. When the button is clicked, it removes the recipe from the list
   and also delete the recipe on the server:

   ```txt
   DELETE /Recipes/:id

   Example Response:
   {}
   ```

# Project Setup

To run the code challange, follow these steps:


1. If you want the source code of the project, clone the repository to your local machine by using :

```sh
git clone git@github.com:Noelle-Wavinya-Maingi/Phase-1-Project.git
```

2. To open the webpage, copy this link to a new tab:
```sh
https://noelle-wavinya-maingi.github.io/Phase-1-Project/
```
# Author

The author of the code challenge solution is Noelle Maingi.

# Licence

This code challenge is under the MIT licence. For more on the licence, open [LICENCE](LICENCE)
