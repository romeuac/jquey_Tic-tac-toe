//Global variables
var turn = 1;
var grid = Array(4);
var end = false;
var winner = 0;

// Main function
$(document).ready(function(){

    $('#btn-iniciar').click(function(){
        // alert('iniciar jogo');
        if ($('#ply1name').val() == ""){
            alert("Pick a name for the 1st Player");
            return false;
        }
        if ($('#ply2name').val() == ""){
            alert("Pick a name for the 2nd Player");
            return false;
        }

        $('#name1').html($('#ply1name').val());
        $('#name2').html($('#ply2name').val());

        $('#game_arena').show();
        gridInit();
    });

    $('.cell').click(function(){
        var id_cell_clicked = this.id;
        $("#"+id_cell_clicked).off();
        if (!end) play(id_cell_clicked);

    });

    function play(id){
        var icon = '';
        var point = 0;

        // Verifying if the position is already occupied
        // if(grid[id[1]][id[2]] != 0){
        //     return false;
        // }

        // First player
        if(turn%2 == 1){
            icon = 'url("img/marcacao_1.png")';
            point = -1;
        }
        // Second player
        else{
            icon = 'url("img/marcacao_2.png")';
            point = 1;
        }

        $('#'+id).css("background-image",icon);
        $('#'+id).css("background-repeat","no-repeat");
        $('#'+id).css("background-position","center");
        grid[id[1]][id[2]] = point;
    
            // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
        // img.attr('src', responseObject.imgurl);
        // img.appendTo('#imagediv');
        finished();
        turn++;
    }

    function gridInit() {
        for (var i=1; i<4; i++){
            grid[i] = Array(4);
            for (var j=1; j<4; j++){
                grid[i][j] = 0;
            }
        }
        // end = false;

        //alert("valor de: "+ grid[2][2]);
    }

    //Evaluating if the game is finished
    function finished(){
        var sum = 0;
        winner = 0;

        // Rows
        for (var i=1; i<4; i++){
            sum = 0;
            for (var j=1; j<4; j++)
                sum += grid[i][j];
         
            sumVerify(sum);
        }

        // Columns
        for (var i=1; i<4; i++){
            sum = 0;
            for (var j=1; j<4; j++)
                sum += grid[j][i];
         
            sumVerify(sum);
        }

        //Diagonals
        sum = 0;
        for (var i=1; i<4; i++)
            sum += grid[i][i];
        sumVerify(sum);
        
        sum = 0;
        sum = grid[1][3] + grid[2][2]+ grid[3][1];
        sumVerify(sum);

        //alert(winner);

        if (winner == -1){
            $('#endGame').html($('#ply1name').val()+" wins!!!");
            //alert($('#ply1name').val() + " wins!!!");
            $('#endGame').css("color","#D82626");
            end = true;
        }
        if (winner == 1){
           $('#endGame').html($('#ply2name').val()+" wins!!!");
           ///alert($('#ply2name').val() + " wins!!!");
           $('#endGame').css("color","#2643D8");
           end = true;
        }
    }
    
    function sumVerify(sum){
        if (sum == -3)
            winner = -1;
        if (sum == 3)
            winner = 1;
    }

});



