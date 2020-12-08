Page({
  data: {
    markers: [{
      iconPath: "/pages/image/a.png",
      id: 0,
      latitude: 28.652137,
      longitude: 115.827630,
      width: 50,
      height: 50
    },{
      iconPath: "/pages/image/a.png",
      id: 1,
        latitude: 28.66041,
        longitude: 115.804611,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 115.827630,
        latitude: 28.652137
      }, {
          longitude: 115.804611,
          latitude: 28.66041
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  },
  
})