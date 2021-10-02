const List = require("../models/List");
const Movie = require("../models/Movie");

exports.createList = async (req, res) => {
  try {
    const list = await List.create(req.body);

    await list.save();

    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getLists = async (req, res) => {
  try {
    const lists = await List.find();

    return res.status(200).json(lists);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getList = async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.id });

    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

exports.getMovieByListId = async (req, res) => {
  try {
    const listMovie = await List.findOne({ _id: req.params.id })
      .select("_id title genre type")
      .populate({
        path: "movieId",
        select: "_id title image desc year",
      });
    return res.status(200).json(listMovie);
  } catch (err) {
    return res.status(500).json({ message: "somethung went wrong" });
  }
};

exports.editList = async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.id });

    if (!list) {
      return res.status(404).json({ message: "list not found" });
    }

    list.title = req.body.title;
    list.genre = req.body.genre;
    list.type = req.body.type;

    await list.save();

    return res.status(200).json({
      message: "edit success",
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "List deleted" });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.deleteMovieOnList = async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.listId });

    if (list.movieId.includes(req.params.movieId)) {
      await list.updateOne({ $pull: { movieId: req.params.movieId } });
    }

    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.getMovieLists = async (req, res) => {
  try {
    let movies;
    if (req.query.type) {
      if (req.query.genre) {
        movies = await List.find({
          type: req.query.type,
          genre: req.query.genre,
        })
          .select("_id title type genre movieId")
          .populate({
            path: "movieId",
            select: "_id title desc image movieLogo trailer video year limit",
          });
      } else {
        movies = await List.find({
          type: req.query.type,
        })
          .select("_id title type genre movieId")
          .populate({
            path: "movieId",
            select: "_id title desc image movieLogo trailer video year limit",
          });
      }
    } else {
      movies = await List.find()
        .select("_id title type genre movieId")
        .populate({
          path: "movieId",
          select: "_id title desc image movieLogo trailer video year limit",
        });
    }

    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
