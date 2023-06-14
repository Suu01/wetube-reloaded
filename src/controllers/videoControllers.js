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

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  // console.log(req.params);
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  const { id } = req.params;
  // const id = req.params.id;
  // console.log("Show video", id);
  const video = videos[id - 1];
  // return res.render("watch", { pageTitle: "Watch" });
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => {
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  return res.render("edit", { pageTitle: "Edit" });
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
