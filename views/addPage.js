const html = require("html-template-tag");
const layout = require("./layout");


module.exports = () => layout(html`
  <h3 name="page-header">Add a Page</h3>
  <hr>
  <form name="form" method="POST" action="/wiki">
    <div id="author-info">
      <div><input type="text" name="name" placeholder="author name"></div>

      <div><input type="text" name="email" placeholder="email"></div>
    </div>
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <div id="info-submit">
    <label for="title" class="col-sm-2 control-label">Enter Content</label>
      <div><textarea rows="4" cols="50" name="content"></textarea></div>
      <label for="title" class="col-sm-2 control-label">Status</label>
      <div><input type="text" name="status"></div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </div>
  </form>
`);
