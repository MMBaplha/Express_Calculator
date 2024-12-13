const express = require('express');
const app = express();
const ExpressError = require('./expressError'); 

app.use(express.json());

const { calculateMean, 
    calculateMedian, 
    calculateMode, 
    parseNumbers 
} = require('./helpers');


app.get('/mean', (req, res) => {
    try {
        const nums = parseNumbers(req.query.nums);
        const mean = calculateMean(nums);
        res.json({ operation: 'mean', value: mean });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
  
app.get('/median', (req, res) => {
    try {
        const nums = parseNumbers(req.query.nums);
        const median = calculateMedian(nums);
        res.json({ operation: 'median', value: median });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
  

app.get('/mode', (req, res) => {
    try {
        const nums = parseNumbers(req.query.nums);
        const mode = calculateMode(nums);
        res.json({ operation: 'mode', value: mode });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
  
module.exports = app;

/** general error handler */
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    return next(err);
});
  
/** general error handler */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err,
    });
});
  
app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});