

function preparePhotoToPlay(){
    $(`[id^=cell_]`).click(function(){
        let x = $(this).data("x");
        let y = $(this).data("y");
        movement(x,y);
        if(CheckSolution()){
            swal("Congrats!", ", You have high analytical skills ", "success");
        }
    });
}

function movement(x, y){
    let cell = findEmptyCell(x,y);
    if(cell != ''){
        $(`#${cell}`).append($(`#cell_${x}_${y}`).html());
        $(`#cell_${x}_${y}`).empty();
    }
}

$(`#demotable`).empty();
$(`#demotable`).append(GetPhoto("image/default",true));
preparePhotoToPlay();
$(`#img_show`).hide();

function Scattering(state){
    let photo = $(`#photo`).val();
    if(photo != ''){
        $(`#img_show`).prop('src',`image/${photo}/${photo}.jpg`);
        $(`#img_show`).show();
        $(`#demotable`).empty();
        $(`#demotable`).append(GetPhoto(`image/${photo}`,state));
        preparePhotoToPlay();
    } 
}

$(`#Solving-backtracking-btn`).click(function(){
    let solutions = [];
    console.log(findSolution(solutions));
});
$(`#photo`).change(function(){
   Scattering(false);
});

$(`#Scattering-btn`).click(function(){
    Scattering(false);
});


$(`#Solving-btn`).click(function(){
    Scattering(true);
});



function GetPhoto(path ,Solving){
    if(Solving){
    return `<tr>
                <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img data-img="part_of_photo" data-index="16" src="${path}/16.jpg"   height=130 width=100%></img></td>
                <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img data-img="part_of_photo" data-index="15" src="${path}/15.jpg"   height=130 width=100%></img></td>
                <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img data-img="part_of_photo" data-index="14" src="${path}/14.jpg"   height=130  width=100%></img></td>
                <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img data-img="part_of_photo" data-index="13" src="${path}/13.jpg"   height=130  width=100%></img></td>
            </tr>
            <tr>
                <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img data-img="part_of_photo" data-index="12" src="${path}/12.jpg"   height=130  width=100%></img></td>
                <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img data-img="part_of_photo" data-index="11" src="${path}/11.jpg"   height=130  width=100%></img></td>
                <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img data-img="part_of_photo" data-index="10" src="${path}/10.jpg"   height=130  width=100%></img></td>
                <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img data-img="part_of_photo" data-index="9" src="${path}/9.jpg"     height=130  width=100%></img></td>
            </tr>
            <tr>
                <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img data-img="part_of_photo" data-index="8" src="${path}/8.jpg"   height=130  width=100%></img></td>
                <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img data-img="part_of_photo" data-index="7" src="${path}/7.jpg"   height=130  width=100%></img></td>
                <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img data-img="part_of_photo" data-index="6" src="${path}/6.jpg"   height=130  width=100%></img></td>
                <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img data-img="part_of_photo" data-index="5"src="${path}/5.jpg"   height=130  width=100%></img></td>
            </tr>
            <tr>
                <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img data-img="part_of_photo" data-index="4" src="${path}/4.jpg"   height=130  width=100%></img></td>
                <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img data-img="part_of_photo" data-index="3" src="${path}/3.jpg"   height=130  width=100%></img></td>
                <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img data-img="part_of_photo" data-index="2" src="${path}/2.jpg"   height=130  width=100%></img></td>
                <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
            </tr>`;
    }
    else{
        return  `<tr>
                    <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img data-img="part_of_photo" data-index="16" src="${path}/5.jpg"   height=130 width=100%></img></td>
                    <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img data-img="part_of_photo" data-index="15" src="${path}/15.jpg"   height=130 width=100%></img></td>
                    <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img data-img="part_of_photo" data-index="14" src="${path}/12.jpg"   height=130  width=100%></img></td>
                    <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img data-img="part_of_photo" data-index="13" src="${path}/13.jpg"   height=130  width=100%></img></td>
                </tr>
                <tr>
                    <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img data-img="part_of_photo" data-index="12" src="${path}/14.jpg"   height=130  width=100%></img></td>
                    <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img data-img="part_of_photo" data-index="11" src="${path}/11.jpg"   height=130  width=100%></img></td>
                    <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img data-img="part_of_photo" data-index="10" src="${path}/10.jpg"   height=130  width=100%></img></td>
                    <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img data-img="part_of_photo" data-index="9" src="${path}/4.jpg"     height=130  width=100%></img></td>
                </tr>
                <tr>
                    <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img data-img="part_of_photo" data-index="8" src="${path}/8.jpg"   height=130  width=100%></img></td>
                    <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img data-img="part_of_photo" data-index="7" src="${path}/7.jpg"   height=130  width=100%></img></td>
                    <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img data-img="part_of_photo" data-index="6" src="${path}/6.jpg"   height=130  width=100%></img></td>
                    <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img data-img="part_of_photo" data-index="5"src="${path}/16.jpg"   height=130  width=100%></img></td>
                </tr>
                <tr>
                    <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img data-img="part_of_photo" data-index="4" src="${path}/9.jpg"   height=130  width=100%></img></td>
                    <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img data-img="part_of_photo" data-index="2" src="${path}/2.jpg"   height=130  width=100%></img></td>
                    <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img data-img="part_of_photo" data-index="3" src="${path}/3.jpg"   height=130  width=100%></img></td>
                    <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
                </tr>`;
    }
}


function findEmptyCell(x, y){
    let id = '';

    let x1 = x+1;
    let y1 = y;

    let x2 = x-1;
    let y2 = y;

    let x3 = x;
    let y3 = y+1;

    let x4 = x;
    let y4 = y-1;

    if(x1<=4 && x1>=1){
        if(! $.trim( $(`#cell_${x1}_${y1}`).html() ).length){
            return `cell_${x1}_${y1}`;
        }
    }
    if(x2<=4 && x2>=1){
        if(! $.trim( $(`#cell_${x2}_${y2}`).html() ).length){
            return `cell_${x2}_${y2}`;
        }
    }
    if(y3<=4 && y3>=1){
        if(! $.trim( $(`#cell_${x3}_${y3}`).html() ).length){
            return `cell_${x3}_${y3}`;
        }
    }
    if(y4<=4 && y4>=1){
        if(! $.trim( $(`#cell_${x4}_${y4}`).html() ).length){
            return `cell_${x4}_${y4}`;
        }
        
    }
    return id;
}


function isEmpty(td) {
    if (td.text == '' || td.text() == ' ' || td.html() == '&nbsp;' || td.is(":not(:visible)")) {
        return true;
    }            
    return false;
}

function CheckSolution(){
    let solution = true;
    let all_images = $(`[data-img="part_of_photo"]`);
    $.each(all_images, function (key,element)  {
        let image_index = $(element).data('index');
        let cell_index = $(element).parent().data('index');
        if(image_index != cell_index){
            solution = false;
            return false;
        }
    });
    return solution;
}

function getEmptyCell(){
    let x = 0;
    let y = 0;
    let all_cells = $(`td`);
    $.each(all_cells, function (key,element)  {
        if(element.children.length == 0){
            x = $(element).data('x');
            y = $(element).data('y');
            return [x,y];
        }
    });
    return [x,y];
}
function getMoveOptions(){
    let options = [];
    let cell = getEmptyCell();
    let x = cell[0];
    let y = cell[1];
    let x1 = x+1;
    let y1 = y;
    let x2 = x-1;
    let y2 = y;
    let x3 = x;
    let y3 = y+1;
    let x4 = x;
    let y4 = y-1;
    if(x1<=4 && x1>=1){
        options.push([x1,y1]);
    }
    if(x2<=4 && x2>=1){
        options.push([x2,y2]);
    }
    if(y3<=4 && y3>=1){
        options.push([x3,y3]);
    }
    if(y4<=4 && y4>=1){
        options.push([x4,y4]);     
    }
    return options;
}

function findSolution(){
   let steps = [];
   let move_options = getMoveOptions();
   let option = 0;
   console.log(CheckSolution());
   while(option < move_options.length  && ! CheckSolution()){
       let cell_to_movement = move_options[option];
       let x = cell_to_movement[0];
       let y = cell_to_movement[1];
       movement(x, y);
       console.log(`${x}_${y}`);
       steps.push([x,y]);
       setInterval(function() {
        if(! CheckSolution()){
            findSolution();
        }
        else{
            console.log(CheckSolution());
            console.log(steps);
            return steps;
        }
        }, 5000);
      
       option++;
   }
   return steps;
}



$.fn.christmas = function() {
    $(this).each(function() {
      $(this).html($(this).text().split("").map(function(v, i) {
        return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
      }).join(""));
    });
  };
  
  $(function() { 
    $('h1.christmas').christmas();
  });