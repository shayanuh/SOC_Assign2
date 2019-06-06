function left()
            {
                if(document.getElementById("img1").getAttribute("src")=="image4.jpg")
                {
                    document.getElementById("img1").setAttribute("src","image1.png");
                    document.getElementById("img2").setAttribute("src","image2.jpg");
                    document.getElementById("img3").setAttribute("src","image3.jpg");
                }
                else if(document.getElementById("img1").getAttribute("src")=="image7.jpg")
                {
                    document.getElementById("img1").setAttribute("src","image4.jpg");
                    document.getElementById("img2").setAttribute("src","image5.jpg");
                    document.getElementById("img3").setAttribute("src","image6.jpg");
                }
                else if(document.getElementById("img1").getAttribute("src")=="image10.jpg")
                {
                    document.getElementById("img1").setAttribute("src","image7.jpg");
                    document.getElementById("img2").setAttribute("src","image8.jpg");
                    document.getElementById("img3").setAttribute("src","image9.jpg");
                }
            }
            function right()
            {
                
                if(document.getElementById("img1").getAttribute("src")=="image7.jpg")
                {
                    document.getElementById("img1").setAttribute("src","image10.jpg");
                    document.getElementById("img2").setAttribute("src","image11.jpg");
                    document.getElementById("img3").setAttribute("src","");
                    document.getElementById("img3").setAttribute("alt","Wait till 14th July....");
                }
               else   if(document.getElementById("img1").getAttribute("src")=="image1.png")
                {
                    document.getElementById("img1").setAttribute("src","image4.jpg");
                    document.getElementById("img2").setAttribute("src","image5.jpg");
                    document.getElementById("img3").setAttribute("src","image6.jpg");
                }
                else if(document.getElementById("img1").getAttribute("src")=="image4.jpg")
                {
                    document.getElementById("img1").setAttribute("src","image7.jpg");
                    document.getElementById("img2").setAttribute("src","image8.jpg");
                    document.getElementById("img3").setAttribute("src","image9.jpg");
                }
            }
