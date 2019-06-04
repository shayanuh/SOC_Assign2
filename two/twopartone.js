function search()
        {
            var row,text,i,data;
             text = document.getElementById("input").value.toUpperCase();
             row = document.getElementsByTagName("tr");
            i;
            for(  i=0 ; i < row.length;i++ )
            {
                data = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[1];
                if(data)
                {
                    if(document.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerHTML.toUpperCase().indexOf(text)>-1)
                    {
                        row[i].getElementsByTagName("td")[1].style.display="";
                    }
                    else
                    {
                        row[i].style.display="none";
                    }
                }
            }
        }