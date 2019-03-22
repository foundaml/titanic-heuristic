const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

function setResult(survivedP, didNotSurvivedP, res) {
  const json = {"result": [
					[
								[	"survived", survivedP],
								[ "did_not_survived", didNotSurvivedP],
					]
	]}
  res.json(json)
}


app.post('/', function (req, res) {
  console.log("HELLO WORLD")
  if(req.body.age > 18 && req.body.age < 40) {
				setResult(1.0, 0.0, res)
  } else {
        setResult(0.0, 1.0, res)
	}
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Titanic heuristic listening on port %d', port)
});
