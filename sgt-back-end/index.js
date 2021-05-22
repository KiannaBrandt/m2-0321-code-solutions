var express = require('express');
var app = express();

app.use(express.json());

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
        res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  if (req.body.name === undefined) {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  };

  if (req.body.course === undefined) {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  };

  if (req.body.score === undefined) {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  };

  if ((!Number.isInteger(parseFloat(req.body.score))) || (req.body.score <= 0) || (req.body.score >= 101)) {
    res.status(400).json({
      error: 'score must be an integer between 1 and 100'
    });
    return;
  };

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [name, course, score]

  const sql = `
    insert into "grades" ("name", "course", "score")
    values($1, $2, $3)
    returning *
  `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201);
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(parseFloat(req.params.gradeId)) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (req.body.name === undefined) {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  };

  if (req.body.course === undefined) {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  };

  if (req.body.score === undefined) {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  };

  if ((!Number.isInteger(parseFloat(req.body.score))) || (req.body.score <= 0) || (req.body.score >= 101)) {
    res.status(400).json({
      error: 'score must be an integer between 1 and 100'
    });
    return;
  };

  const sql = `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
     where "gradeId" = $1
     returning *
  `;

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [gradeId, name, course, score]

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(parseFloat(req.params.gradeId)) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
     where "gradeId" = $1
     returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
