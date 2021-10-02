const Movie = require("../models/Movie");
const List = require("../models/List");
const mongoose = require("mongoose");
const fs = require("fs");
const { findOneAndUpdate } = require("../models/Movie");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies.reverse());
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });

    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }

    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.getRandom = async (req, res) => {
  try {
    let movie;

    movie = await Movie.aggregate([{ $sample: { size: 1 } }]);

    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      title: req.body.title,
      desc: req.body.desc,
      image: `/images/${req.files.image[0].filename}`,
      movieLogo: `/images/${req.files.movieLogo[0].filename}`,
      trailer: `/videos/${req.files.trailer[0].filename}`,
      video: `/videos/${req.files.video[0].filename}`,
      year: req.body.year,
      limit: req.body.limit,
    });

    await movie.save();

    await List.findOneAndUpdate(
      { _id: req.body.listId },
      { $push: { movieId: movie._id } }
    );

    return res.status(200).json({
      movie,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    let movie = await Movie.findOne({ _id: req.params.id });
    let list;

    const listId = req.body.listId;
    let message;

    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }

    if (listId) {
      list = await List.find({
        movieId: { $in: [movie._id] },
      });

      if (list.length > 0) {
        if (list[0].movieId.includes(movie._id)) {
          await list[0].updateOne({ $pull: { movieId: movie._id } });
        }
      }

      await List.findOneAndUpdate(
        { _id: listId },
        {
          $push: { movieId: movie._id },
        }
      );
    }

    movie.title = req.body.title || movie.title;
    movie.desc = req.body.desc || movie.desc;
    movie.year = req.body.year || movie.year;
    movie.limit = req.body.limit || movie.limit;

    if (req.files.image) {
      const path = `public/${movie.image}`;
      fs.unlink(path, (err) => console.log(err));

      movie.image = `/images/${req.files.image[0].filename}`;
    }

    if (req.files.movieLogo) {
      const path = `public/${movie.movieLogo}`;
      fs.unlink(path, (err) => console.log(err));

      movie.movieLogo = `/images/${req.files.movieLogo[0].filename}`;
    }

    if (req.files.trailer) {
      const path = `public/${movie.trailer}`;
      fs.unlink(path, (err) => console.log(err));

      movie.trailer = `/videos/${req.files.trailer[0].filename}`;
    }

    if (req.files.video) {
      const path = `public/${movie.video}`;
      fs.unlink(path, (err) => console.log(err));

      movie.video = `/videos/${req.files.video[0].filename}`;
    }

    await movie.save();

    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);

    const movieInList = await List.findOne({
      movieId: {
        $elemMatch: {
          $in: [id],
        },
      },
    });

    if (movieInList) {
      if (movieInList.movieId.includes(id)) {
        await movieInList.updateOne({ $pull: { movieId: id } });
      }
    }

    const movie = await Movie.findOne({ _id: id });

    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }

    const image = `public/${movie.image}`;
    fs.unlink(image, (err) => console.log(err));

    const movieLogo = `public/${movie.movieLogo}`;
    fs.unlink(movieLogo, (err) => console.log(err));

    const trailer = `public/${movie.trailer}`;
    fs.unlink(trailer, (err) => console.log(err));

    const video = `public/${movie.video}`;
    fs.unlink(video, (err) => console.log(err));

    await Movie.deleteOne({ _id: movie._id });

    return res.status(200).json({
      message: "Delete Movie Success",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};
