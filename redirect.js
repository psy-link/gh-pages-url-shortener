function redirect() {
  let location = window.location;
  let queryPath = location.pathname.split("/")[1];
  let homepage = `${location.protocol}//${location.hostname}${
    location.port ? ":" + location.port : ""
  }/${location.pathname.split("/")[0]}`;

  // console.log(queryPath);
  // console.log(homepage);

  let db_links = new Map([
    ["core", "https://www.google.com"],
    ["template", "google.fr"],
    ["boilerplate", "google.jp"],
  ]);

  // console.log(db_links.get("core"));

  if (db_links.has(queryPath)) {
    console.log(`queryPath: ${queryPath}`);
    console.log(db_links.get(queryPath));
    location.replace(db_links.get(queryPath));
  } else {
    console.log(`not found`);
    console.log(homepage);
  }

}

console.log("test");

redirect();
