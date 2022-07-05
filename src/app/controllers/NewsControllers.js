const newsControllers = {};

// */news
newsControllers.news = (req, res) => {
    res.render('news');
};

module.exports = newsControllers;
