var template = `
<!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <script>
    $(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    });

function searhByLevel() {
  var input, table, tr, td, i, j, txtValue;
  const filter = [];
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

    if (document.getElementById('flexSwitchCheckInfo').checked) {
        filter.push("INFORMATION");
    }
    if (document.getElementById('flexSwitchCheckTRACE').checked) {
        filter.push("TRACE");
    }
    if (document.getElementById('flexSwitchCheckDebug').checked) {
        filter.push("DEBUG");
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            for (j = 0; j < filter.length; j++) {
                if (txtValue.toUpperCase().indexOf(filter[j]) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }       
    }
}

function indentToggle() {
  var td, indent, i, tdTxt, tdTxtTmp, spaces;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
      if (document.getElementById('flexSwitchCheckIndent').checked) {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                indent = td.textContent || td.innerText || 0;
                tdTxt = tr[i].getElementsByTagName("td")[3];
                tdTxtTmp = tr[i].getElementsByTagName("td")[5];
                spaces = "";
                for (j = 0; j < indent; j++) {
                    spaces = spaces + '\u00a0' + '\u00a0' + '\u00a0';
                }
                tdTxt.innerText = spaces.concat(tdTxtTmp.innerText);
                tdTxt.innerHTML = '<small>' + spaces.concat(tdTxtTmp.innerText) + '</small>';
            }
        }
    }
    else{
        for (i = 0; i < tr.length; i++) {
            tdTxt = tr[i].getElementsByTagName("td")[3];
            tdTxtTmp = tr[i].getElementsByTagName("td")[5];
            tdTxt.innerText = tdTxtTmp.innerText;
            tdTxt.innerHTML = '<small>' + tdTxtTmp.innerText + '</small>';
        }
    }
}
</script>
<div class="container-fluid"><!--========FILTER=======-->    
    <div class="w-25 m-3 row">
        <div class="w-25 col">
            <input class="form-control" id="myInput" type="text" placeholder="Search..">
        </div>
    </div>
    <div class="w-25 m-3 row">
        <div class="w-25 col">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckInfo" onchange="searhByLevel()" checked>
                <label class="form-check-label" for="flexSwitchCheckInfo">Info</label>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckTRACE" onchange="searhByLevel()" checked>
                <label class="form-check-label" for="flexSwitchCheckTRACE">Trace</label>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDebug" onchange="searhByLevel()" checked>
                <label class="form-check-label" for="flexSwitchCheckDebug">Debug</label>
            </div>
        </div>
        <div class="w-25 col">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckIndent" onchange="indentToggle()">
                <label class="form-check-label" for="flexSwitchCheckIndent">Indent</label>
            </div>        
        </div>
    </div>
</div>
<div>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>Origin</th>
                <th>Category</th>
                <th>Level</th>
                <th>Text</th>
            </tr>
        </thead>
        <tbody id="myTable">
        {{#each response.ifs-trace.trace}}
            <tr>
                <td><small>{{origin}}</small></td>
                <td><small>{{category}}</small></td>                    
                <td><small>{{level}}</small></td>
                <td><small>{{text}}</small></td>
                <td style="display:none;"><small>{{indentation}}</small></td>
                <td style="display:none;"><small>{{text}}</small></td>
            </tr>
        {{/each}}
        </tbody>
    </table>
</div>
`;

function printLogText() {
  var indent = this.indentation;
  var spaces = '';
  for(var i = 0; i < indent; ++i)
  {
        spaces += ' ';    
  }
    return spaces + this.text;
}

function constructVisualizerPayload() {
    var res = pm.response.json();


    return { response: res};
}

pm.visualizer.set(template, constructVisualizerPayload());