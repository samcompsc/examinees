window.$importComponent = (url) => {
  const component = document.createElement("script");
  component.src = url;
  document.querySelector("body").append(component);
};

(function () {
  $importComponent("./components/Header.js");
})();
