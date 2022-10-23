
# CodeInspo

CodeInspo is a platform where people can share and view ideas 💡. Without the need for an account, CodeInspo is avalible at a moments notice for any user on any device. Find your next project on CodeInspo!




## Badges



![MIT License](https://img.shields.io/github/languages/count/pvwnthem/CodeInspo) 
![GPLv3 License](https://img.shields.io/tokei/lines/github/pvwnthem/CodeInspo)
![AGPL License](https://img.shields.io/github/repo-size/pvwnthem/CodeInspo)
![AGPL License](https://img.shields.io/github/commit-activity/w/pvwnthem/CodeInspo)



## Authors

- [@pvwn](https://www.github.com/pvwnthem)

## Contributors
- [@kjvx](https://www.github.com/kjvx)
- [@cg6016](https://www.github.com/cg6016)

## Features

- Tags On Posts
- Live previews Of New Posts
- Fully responsive, avalible on all devics
- Lightning Fast, Built On React
- Explot prevention and security
-


## Documentation

[Documentation](https://linktodocumentation)


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, ExpressJS, MongoDB


## Lessons Learned

While building this project I learned more about ES6 topics and ReactJS. I learned multiple different ReactJS hooks and there uses like useEffect, useState, and useCallback. I learned how to work with cookies and about CORS. This project taught me a LOT about react and typescript and I hope my project will be able to provide project ideas to people for many years to come!


## Roadmap

- More api functionality

- More UI elements and pages

- 


## Contributing

Contributions are always welcome!




## API Reference

### Base Url
```http
/api/v1

```




### Posts

#### Base Url
```
  /api/v1/posts
```
#### Get Random Post
```
GET /api/v1/posts/random
```
#### Create Post
```http
POST /api/v1/posts/new
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title Of Your Post |
| `text`      | `string` | **Required**. Content Of Your Post |
| `tags`      | `array` | **Not Required**. Tags Of Your Post |

#### Get Recent Posts
```http
GET /api/v1/posts/recent
```
| Query     | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `?limit=` | `number` | **Not Required**. How many of the recent posts to grab |



## Feedback

If you have any feedback, please reach out to me at pvwn.them@gmail.com

