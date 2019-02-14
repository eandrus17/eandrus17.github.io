function(
  Map,
  MapView
) {
  const map = new Map({
    basemap: "hybrid"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 1,
    center: {
        latitude: 32.7353,
        longitude: -117.1490
    }
  });
  
  const contentString = 
        "<p><p><img src='https://www.usnews.com/dims4/USNEWS/c87edfc/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F3b%2F5b%2Fccffb4184e18bc88025c9e671621%2F18-14.%20Santorini-Getty.jpg' alt='Santorini, Greece' height='150'>"; 
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#ffff00",
        text: "\ue67f", // esri-icon-map-pin
        font: {
            size: 15,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 36.391342, 
      latitude: 25.458856,
    },
    popupTemplate: {
      title: "Santorini, Greece",
      content: contentString
    }
  });
});
