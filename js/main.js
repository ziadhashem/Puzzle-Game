

function preparePhotoToPlay(){
    $(`[id^=cell_]`).click(function(){
        let index = $(this).data("index");
        let x = $(this).data("x");
        let y = $(this).data("y");
        let cell = findEmptyCell(x,y);
        if(cell != ''){
            $(`#${cell}`).append($(`#cell_${x}_${y}`).html());
            $(`#cell_${x}_${y}`).empty();
        }
    });
}


$(`#demotable`).empty();
$(`#demotable`).append(EmptyPhoto());

$(`#drawing-btn`).click(function(){
    let photo = $(`#photo`).val();
    if(photo == 'tom_and_jerry'){
        $(`#demotable`).empty();
        $(`#demotable`).append(GetPhoto("image/tom_and_jerry"));
    }
    else if(photo == 'tom'){
        $(`#demotable`).empty();
        $(`#demotable`).append(GetPhoto("image/tom"));
    }
    else if(photo == 'jerry'){
        $(`#demotable`).empty();
        $(`#demotable`).append(GetPhoto("image/jerry"));
    }
    preparePhotoToPlay();
});

function Tom(){
    return `<tr>
                <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img src="image/tom/16.jpg"   height=100 width=125></img></td>
                <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img src="image/tom/15.jpg"   height=100 width=125></img></td>
                <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img src="image/tom/14.jpg"   height=100 width=125></img></td>
                <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img src="image/tom/13.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img src="image/tom/12.jpg"   height=100 width=125></img></td>
                <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img src="image/tom/11.jpg"   height=100 width=125></img></td>
                <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img src="image/tom/10.jpg"   height=100 width=125></img></td>
                <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img src="image/tom/9.jpg"     height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img src="image/tom/8.jpg"   height=100 width=125></img></td>
                <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img src="image/tom/7.jpg"   height=100 width=125></img></td>
                <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img src="image/tom/6.jpg"   height=100 width=125></img></td>
                <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img src="image/tom/5.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img src="image/tom/4.jpg"   height=100 width=125></img></td>
                <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img src="image/tom/3.jpg"   height=100 width=125></img></td>
                <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img src="image/tom/2.jpg"   height=100 width=125></img></td>
                <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
            </tr>`;
}

function Jerry(){
    return `<tr>
                <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img src="image/jerry/16.jpg"   height=100 width=125></img></td>
                <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img src="image/jerry/15.jpg"   height=100 width=125></img></td>
                <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img src="image/jerry/14.jpg"   height=100 width=125></img></td>
                <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img src="image/jerry/13.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img src="image/jerry/12.jpg"   height=100 width=125></img></td>
                <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img src="image/jerry/11.jpg"   height=100 width=125></img></td>
                <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img src="image/jerry/10.jpg"   height=100 width=125></img></td>
                <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img src="image/jerry/9.jpg"     height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img src="image/jerry/8.jpg"   height=100 width=125></img></td>
                <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img src="image/jerry/7.jpg"   height=100 width=125></img></td>
                <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img src="image/jerry/6.jpg"   height=100 width=125></img></td>
                <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img src="image/jerry/5.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img src="image/jerry/4.jpg"   height=100 width=125></img></td>
                <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img src="image/jerry/3.jpg"   height=100 width=125></img></td>
                <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img src="image/jerry/2.jpg"   height=100 width=125></img></td>
                <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
            </tr>`;
}

function GetPhoto(path){
    return `<tr>
                <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img src="${path}/16.jpg"   height=100 width=125></img></td>
                <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img src="${path}/15.jpg"   height=100 width=125></img></td>
                <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img src="${path}/14.jpg"   height=100 width=125></img></td>
                <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img src="${path}/13.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img src="${path}/12.jpg"   height=100 width=125></img></td>
                <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img src="${path}/11.jpg"   height=100 width=125></img></td>
                <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img src="${path}/10.jpg"   height=100 width=125></img></td>
                <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img src="${path}/9.jpg"     height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img src="${path}/8.jpg"   height=100 width=125></img></td>
                <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img src="${path}/7.jpg"   height=100 width=125></img></td>
                <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img src="${path}/6.jpg"   height=100 width=125></img></td>
                <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img src="${path}/5.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img src="${path}/4.jpg"   height=100 width=125></img></td>
                <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img src="${path}/3.jpg"   height=100 width=125></img></td>
                <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img src="${path}/2.jpg"   height=100 width=125></img></td>
                <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
            </tr>`;
}


function EmptyPhoto(){
    return `<tr>
                <td id="cell_1_1" data-x="1" data-y="1" data-index="16"><img src="image/16.jpg"   height=100 width=125></img></td>
                <td id="cell_2_1" data-x="2" data-y="1" data-index="15"><img src="image/15.jpg"   height=100 width=125></img></td>
                <td id="cell_3_1" data-x="3" data-y="1" data-index="14"><img src="image/14.jpg"   height=100 width=125></img></td>
                <td id="cell_4_1" data-x="4" data-y="1" data-index="13"><img src="image/13.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_2" data-x="1" data-y="2" data-index="12"><img src="image/12.jpg"   height=100 width=125></img></td>
                <td id="cell_2_2" data-x="2" data-y="2" data-index="11"><img src="image/11.jpg"   height=100 width=125></img></td>
                <td id="cell_3_2" data-x="3" data-y="2" data-index="10"><img src="image/10.jpg"   height=100 width=125></img></td>
                <td id="cell_4_2"  data-x="4" data-y="2" data-index="9"><img src="image/9.jpg"     height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_3" data-x="1" data-y="3" data-index="8"><img src="image/8.jpg"   height=100 width=125></img></td>
                <td id="cell_2_3" data-x="2" data-y="3" data-index="7"><img src="image/7.jpg"   height=100 width=125></img></td>
                <td id="cell_3_3" data-x="3" data-y="3" data-index="6"><img src="image/6.jpg"   height=100 width=125></img></td>
                <td id="cell_4_3" data-x="4" data-y="3" data-index="5"><img src="image/5.jpg"   height=100 width=125></img></td>
            </tr>
            <tr>
                <td id="cell_1_4" data-x="1" data-y="4" data-index="4"><img src="image/4.jpg"   height=100 width=125></img></td>
                <td id="cell_2_4" data-x="2" data-y="4" data-index="3"><img src="image/3.jpg"   height=100 width=125></img></td>
                <td id="cell_3_4" data-x="3" data-y="4" data-index="2"><img src="image/2.jpg"   height=100 width=125></img></td>
                <td id="cell_4_4" data-x="4" data-y="4" data-index="1"></td>
            </tr>`;
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