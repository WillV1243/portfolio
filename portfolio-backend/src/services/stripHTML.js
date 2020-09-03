class StripRequestHTML {

  stripBodyOfHTML(body) {
    if (!body) return;

    let strippedBody = { };

    for (const key in body) {
      strippedBody[key] = this.stripHTML(body[key]);
    }

    return body;
  }

  stripHTML(string) {
    if (string) {
      let strippedString = string;
  
      strippedString = strippedString.replace(/<style([\s\S]*?)<\/style>/gi, '');
      strippedString = strippedString.replace(/<script([\s\S]*?)<\/script>/gi, '');
      strippedString = strippedString.replace(/<\/div>/ig, '\n');
      strippedString = strippedString.replace(/<\/li>/ig, '\n');
      strippedString = strippedString.replace(/<li>/ig, '  *  ');
      strippedString = strippedString.replace(/<\/ul>/ig, '\n');
      strippedString = strippedString.replace(/<\/p>/ig, '\n');
      strippedString = strippedString.replace(/&nbsp;/ig, ' ');
      strippedString = strippedString.replace(/<br\s*[\/]?>/gi, "\n");
      strippedString = strippedString.replace(/<[^>]+>/ig, '');
  
      return strippedString;
    }
    return string;
  }

}

module.exports = StripRequestHTML;
