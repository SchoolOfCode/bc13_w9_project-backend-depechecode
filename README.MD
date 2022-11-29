# School of Code Hub

The product is an application aiming to simplify the lives of school of code bootcampers.

The core concepts behind the application are:

. An easy to use search feature which will return a glossary definition and useful tech links to the user.

. Easy access to the tools that a student uses on a daily basis such as Zoom, Notion, Slack and Github.


The over all aim is to streamline the user experience so that instead of having several applications covering these areas this application will pool together all resources and tools so that they can be easily accessed from one location.



## Authors

- [@OmertaDevs](https://github.com/OmertaDevs)
- [@Mrbusy13](https://github.com/Mrbusy13)
- [@gregrutnam](https://github.com/gregrutnam)
- [@Cristhyan1993](https://github.com/Cristhyan1993)


## API Reference

#### Get all items

```http
  GET /api/v1/subject
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` |  |

#### Get item

```http
  GET /api/v1/subject?search=${subject}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search`      | `string` | **Required**. Name of subject to fetch |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_CONNECTION_URL`

`PORT`


## Features

- Search capability for all subjects listed within the database.
- Active relevant links for each subject returned to the user from our curated list of resources.
- Active links to the common tools required by the students.

## Features (Under Development)

- Light/dark mode toggle.
- POST request adding new subjects to the list.
- POST request adding new links to the existing subjects.
- PATCH request updating links. 
- ERROR CATCH when entering a subject name that doesnt exist an error message will display which will make a suggestion to the user to se if they would like to add a new entry to the database.
- DB ROUTING if the database goes down or isnt responsive the server of the database will be switched to an active server.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


