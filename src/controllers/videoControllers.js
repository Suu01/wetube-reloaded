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

export const home = async (req, res) => {
  // console.log("Start");
  // Video.find()
  //   .exec()
  //   .then(function (videos) {
  //     console.log("Finished");
  //     console.log("videos", videos);
  //     return res.render("home", { pageTitle: "Home", videos });
  //   })
  //   .catch(function (err) {
  //     return res.render("server-error");
  //   });
  // console.log("I finish first");

  /*
  Video.find({}, (error, videos) => {
    if(error){
      return res.render("server-error")
    }
    return res.render("home", {pageTitle: "Home", videos})
  })
  */

  try {
    // console.log("i start");
    const videos = await Video.find({});
    // console.log("i finish");
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }

  // return res.render("home", { pageTitle: "Home", videos: [] });
  // async/await or promise 사용, callback 업데이트로 사용중지
  // return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).exec();
  // console.log(video);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
  // console.log(req.params);
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  // console.log(id);
  // const id = req.params.id;
  // console.log("Show video", id);
  // const video = videos[id - 1];
  // return res.render("watch", { pageTitle: "Watch" });
  // return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).exec();
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
  // return res.send(
  //   `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  // );
  // const video = videos[id - 1];
  // return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags
  //   .split(",")
  //   .map((word) => (word.startsWith("#") ? word : `#${word}`));
  /* await video.save(); */
  // console.log(req.body);
  // const { title } = req.body;
  // videos[id - 1].title = title;
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  // console.log(title, description, hashtags);
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    /* console.log(error); */
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
  // const video = new Video({
  //   title,
  //   description,
  //   createdAt: Date.now(),
  //   hashtags: hashtags.split(",").map((word) => `#${word}`),
  //   meta: {
  //     views: 0,
  //     rating: 0,
  //   },
  // });
  // await video.save();
  // const dbVideo = await video.save();
  // console.log(dbVideo);
  // console.log(video);
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
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  // console.log(id);
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
