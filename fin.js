    var script = document.createElement("script");
    script.src = "https://emma.pixnet.cc/album/elements?set_id=16258610&user=sharababy&callback=gg";
    document.getElementsByTagName("head")[0].appendChild(script);

            function geee(iddd) {
                var ffff = document.createElement("script");
                ffff.src = "https://emma.pixnet.cc/album/elements/"+ iddd +"?user=sharababy&callback=fee";
                document.getElementsByTagName("head")[0].appendChild(ffff);
                return iddd;
            }
            function fee(dee) {
                    console.log(dee);
                    pic = dee.element;
                    pic2 = pic.large;
                    document.getElementById("pic").innerHTML ='<li>'+'<img class="ei" src =' + pic2 +'></img></li>';
            }
    function gg(data) {
        console.log(data);
        var myTitle = data.set.user.name;
        myArray = data.elements;
        document.getElementById("myTitle").innerHTML = myTitle ;
        myFunction(myArray);
        function myFunction(arr) {
            var out = "",
                out1 = "",
                i ;
            for(i=0;i<arr.length;i++) {
                if( i% 5 == 4) {
                    out +='<li id="ps" onclick="geee('+ arr[i].id +')">'+'<img class="ie" src =' + arr[i].thumb + '>' + '</img></a></li><br>';
                }else {
                    out +='<li id="ps" onclick="geee('+arr[i].id +')">'+'<img class ="ie" src =' + arr[i].thumb + '>' + '</img></a></li>';
                }
            }
            document.getElementById("idd").innerHTML = out;
            document.getElementById("img_c").innerHTML = arr.length;
        }
    }
    $('#container1').on('click', function() {
        $(' .ei, .ie ,#idd').toggleClass('show');
    });
    $('#idd3').on('click', function() {
        $('.slide-menu.slide-in-left, .mmenu.slide-in-left').removeClass('slide-in-left');
    });
