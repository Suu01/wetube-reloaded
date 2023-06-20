import Video from "../models/Video";
// const fakeUser = {
//   username: "Nicolas",
//   loggedIn: false,
// };
// export const trending = (req, res) => {
//   const videos = [
//     // {
//     //   title: "Hello",
//     // },
//     // {
//     //   title: "Video #2",
//     // },
//     // {
//     //   title: "Whatsup",
//     // },
//     {
//       title: "First Video",
//       rating: 5,
//       comments: 2,
//       createdAt: "2 minutes ago",
//       views: 59,
//       id: 1,
//     },
//     {
//       title: "Second Video",
//       rating: 5,
//       comments: 2,
//       createdAt: "2 minutes ago",
//       views: 59,
//       id: 2,
//     },
//     {
//       title: "Third Video",
//       rating: 5,
//       comments: 2,
//       createdAt: "2 minutes ago",
//       views: 59,
//       id: 3,
//     },
//   ];
//   // const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return res.render("home", {
//     pageTitle: "Home",
//     videos,
//     potato: "Tomato",
//     fakeUser: fakeUser,
//   });
// };
// res.send(
//   "<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>"
// );

// let videos = [
//   {
//     title: "First Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 1,
//     id: 1,
//   },
//   {
//     title: "Second Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 59,
//     id: 2,
//   },
//   {
//     title: "Third Video",
//     rating: 5,
//     comments: 2,
//     createdAt: "2 minutes ago",
//     views: 59,
//     id: 3,
//   },
// ];

export const home = (req, res) => {
  Video.find()
    .then(function (videos) {
      console.log("videos", videos);
    })
    .catch(function (err) {
      console.log("error", err);
    });
  console.log("hello");
  return res.render("home", { pageTitle: "Home", videos: [] });
  // return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  // console.log(req.params);
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  const { id } = req.params;
  // const id = req.params.id;
  // console.log("Show video", id);
  // const video = videos[id - 1];
  // return res.render("watch", { pageTitle: "Watch" });
  return res.render("watch", { pageTitle: `Watching` });
  // return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  const { id } = req.params;
  // const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing` });
  // return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const { title } = req.body;
  // videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  // const newVideo = {
  //   title: title,
  //   rating: 0,
  //   comments: 0,
  //   createdAt: "just now",
  //   views: 0,
  //   id: videos.length + 1,
  // };
  // videos.push(newVideo);
  // console.log(req.body);
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
