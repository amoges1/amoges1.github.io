function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(0,0),
    zoom: 1,
    minZoom: 2,
    scrollwheel:false

  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var new_york = {lat: 40.729587, lng: -73.996594};
  var abu_dhabi = {lat: 24.523741, lng: 54.434584};
  var shanghai = {lat: 31.225481, lng: 121.533502};


  var nyString =

  '<div class="studyAbroad">'+
    '<div class="row">'+
      '<div class="col-md-6 col-sm-12">'+
        '<img src="images/nyu.jpg" class="img-responsive" style="position:center;"  width=" 240" alt="NYNYU">'+
      '</div>'+
      '<div style="text-align:center;">'+
      '<h2 class="headliner"> New York University </h2>'+
      '<p >New York, New York</p>'+
      '</div>'+
    '</div>'+

    '  <h4 class="headliner coursework"> Coursework: </h4>'+
      '<div class="col-md-6">'+
    '  <div class="d-flex w-100 justify-content-between">'+
    '  <h5 class="mb-1">Computer Science</h5></div>'+
    '  <ul class="list-group">'+
    '    <li class="list-group-item">Calculus I &amp; II &bull; Data Structures</li>'+
    '    <li class="list-group-item">Basic Algorithms &bull; Operating Systems</li>'+
    '    <li class="list-group-item">iOS Programming</li>'+
    '  </ul>'+
      '</div>'+
      '<div class="col-md-6">'+
    '  <div class="d-flex w-100 justify-content-between">'+
    '  <h5 class="mb-1">Business Studies</h5></div>'+
    '  <ul class="list-group">'+
    '    <li class="list-group-item">Intro to Macroeconomics &amp; Microeconomics</li>'+
    '    <li class="list-group-item">Financial Accounting &amp; Intro to Marketing </li>'+
    '    <li class="list-group-item">Info Tech in Business &amp Society</li>'+
    '  </ul>'+
      '<div>'+
    '</div>';






  var adString =
  '<div class="studyAbroad">'+
    '<div class="row">'+
      '<div class="col-md-6 col-sm-12">'+
        '<img src="images/nyuad.jpg" class="img-responsive" style="position:center;"  width=" 240" alt="NYUAD">'+
      '</div>'+
      '<div style="text-align:center;">'+
      '<h2 class="headliner"> New York University</h2>'+
      '<br>'+
      '<p >Abu Dhabi, United Arab Emirates</p>'+
      '</div>'+
    '</div>'+

    '  <h4 class="headliner coursework"> Coursework: </h4>'+
      '<div class="col-md-6">'+
    '  <div class="d-flex w-100 justify-content-between">'+
    '  <h5 class="mb-1">Computer Science</h5></div>'+
    '  <ul class="list-group">'+
    '    <li class="list-group-item">Computer Systems Organization</li>'+
    '    <li class="list-group-item">Discrete Mathematics</li>'+
    '  </ul>'+
      '</div>'+
      '<div class="col-md-6">'+
    '  <div class="d-flex w-100 justify-content-between">'+
    '  <h5 class="mb-1">Business Studies</h5></div>'+
    '  <ul class="list-group">'+
    '    <li class="list-group-item">Statistics for the Social &amp Behavioral Sciences</li>'+
    '  </ul>'+
      '<div>'+
    '</div>';

  var shString =
  '<div class="studyAbroad">'+
    '<div class="row">'+
      '<div class="col-md-6 col-sm-12">'+
        '<img src="images/nyush.jpg" class="img-responsive" style="position:center;"  width=" 240" alt="NYUAD">'+
      '</div>'+
      '<div style="text-align:center;">'+
      '<h2 class="headliner"> New York University</h2>'+
      '<br>'+
      '<p >Shanghai, China</p>'+
      '</div>'+
    '</div>'+

    '  <h4 class="headliner coursework"> Coursework: </h4>'+
      '<div class="col-md-12 col-sm-12" >'+
    '  <div class="d-flex w-100 justify-content-between">'+
    '  <h5 class="mb-1">Computer Science</h5></div>'+
    '  <ul class="list-group">'+
    '    <li class="list-group-item">Digital Logic</li>'+
      '    <li class="list-group-item">Linear Algebra</li>'+
      '    <li class="list-group-item">Probability &amp Statistics </li>'+
    '  </ul>'+ '<span style="margin-right:30em"></span>'+
      '</div>'+
    '</div>';





  var ny_infowindow = new google.maps.InfoWindow({
    content: nyString

  });

  var ad_infowindow = new google.maps.InfoWindow({
    content: adString
  });

  var sh_infowindow = new google.maps.InfoWindow({
    content: shString
  });


  var ny_marker = new google.maps.Marker({
    position: new_york,
    map: map,
    title: 'NYU (New York)'
  });

  var ad_marker = new google.maps.Marker({
    position: abu_dhabi,
    map: map,
    title: 'NYU (Abu Dhabi)'
  });

  var sh_marker = new google.maps.Marker({
    position: shanghai,
    map: map,
    title: 'NYU (Shanghai)'
  });

  ny_marker.addListener('click', function() {
    // map.setZoom(1);
    //map.panTo(ny_marker.position);
    ad_infowindow.close();
    sh_infowindow.close();
    ny_infowindow.open(map, ny_marker);
  });

  ad_marker.addListener('click', function() {
    sh_infowindow.close();
    ny_infowindow.close();
    ad_infowindow.open(map, ad_marker);
  });
  sh_marker.addListener('click', function() {
    ad_infowindow.close();
    ny_infowindow.close();
    sh_infowindow.open(map, sh_marker);
  });

}
